import api from "@/api/matches";
import types from "./types";
import filters from "@/utils/filters";
import dataStructures from "@/utils/dataStructures";

export default {
  getKeys({ commit, dispatch, state }, { region, summoner }) {
    return api
      .getMatchKeys(region, summoner, state.count)
      .then(matches => commit(types.SET_KEYS, matches))
      .then(() => dispatch("getData"));
  },

  getData({ dispatch, state }) {
    return state.keys.reduce((promiseChain, key) => {
      return promiseChain.then(
        () =>
          new Promise(resolve => {
            api
              .getMatch(key)
              .then(match => dispatch("addMatch", { match, key, cb: resolve }));
          })
      );
    }, Promise.resolve());
  },

  addMatch({ commit, dispatch }, { match, key, cb }) {
    commit(types.ADD_DATUM, { [key]: dataStructures.matches(match) });
    dispatch("addPlacements", match);
    cb();
  },

  addPlacements({ commit, dispatch, rootState }, match) {
    match.info.participants.forEach(participant => {
      if (participant.puuid === rootState.summoner.data.puuid) {
        commit(types.ADD_PLACEMENT, participant.placement);

        dispatch("addChampions", participant.units);
        dispatch("addTraits", participant.traits);
      }
    });
  },

  addChampions({ commit, dispatch }, champions) {
    champions.forEach(champion => {
      commit(types.ADD_CHAMPION, champion.character_id);
      dispatch("addItems", champion);
    });
  },

  addItems: ({ commit, rootGetters }, champion) =>
    champion.items.forEach(item =>
      commit(types.ADD_ITEM, rootGetters["items/getItemName"](item))
    ),

  addTraits({ commit, dispatch }, traits) {
    traits.forEach(trait => {
      commit(types.ADD_TRAIT, filters.cleanString(trait.name));
    });
  }
};
