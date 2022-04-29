import api from "@/api/matches";
import apiSummoner from "@/api/summoner";
import types from "./types";
import dataStructures from "@/utils/dataStructures";

export default {
  getKeys({ commit, dispatch, state }, { region, puuid }) {
    if (state.keys.length) commit(types.RESET_STATE);

    return api
      .getKeys(region, puuid, state.count)
      .then(matches => commit(types.SET_KEYS, matches))
      .then(() => dispatch("getData", region));
  },

  getData: async ({ dispatch, state }, region) =>
    await Promise.all(
      state.keys.map(
        async id =>
          await api
            .getMatch(region, id)
            .then(match => dispatch("addMatch", dataStructures.matches(match)))
      )
    ),

  getSummonerNames: async ({ dispatch, rootGetters }, match) => {
    await Promise.all(
      match.summoners.map(
        async summoner =>
          await apiSummoner
            .getName({
              region: rootGetters["summoner/getRegion"],
              puuid: summoner.puuid
            })
            .then(res => (summoner.name = res ? res.name : "????"))
      )
    );
  },

  addMatch: async ({ commit, dispatch }, match) => {
    commit(types.ADD_DATUM, match);

    await dispatch("addPlacements", match);
  },

  addPlacements: async ({ commit, dispatch, rootState }, match) => {
    let summoner = match.summoners.find(
      summoner => summoner.puuid === rootState.summoner.data.puuid
    );

    commit(types.ADD_PLACEMENT, summoner.placement);

    await dispatch("addChampions", summoner.champions);
    await dispatch("addTraits", summoner.traits);
  },

  addChampions: async ({ commit, dispatch }, champions) =>
    await champions.map(async champion => {
      let { id, starred } = champion;

      commit(types.ADD_CHAMPION, { id, starred });

      await dispatch("addItems", champion.items);
    }),

  addItems: ({ commit }, items) =>
    items.forEach(item => commit(types.ADD_ITEM, item)),

  addTraits: ({ commit }, traits) =>
    traits.forEach(trait => {
      if (trait.style !== 0) commit(types.ADD_TRAIT, trait.id);
    })
};
