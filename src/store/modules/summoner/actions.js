import api from "@/api/summoner";
import types from "@/store/modules/summoner/types";
import { sanitise } from "@/utils/filters";

export default {
  getRegion: ({ dispatch, state }) => {
    let region = api.getRegion();

    if (region && region !== state.region) {
      dispatch("updateRegion", region);
    }
  },

  updateRegion: ({ commit, dispatch }, region) => {
    commit(types.UPDATE_REGION, region);

    api.setRegion(region);
  },

  updateName: ({ commit }, name) => commit(types.UPDATE_NAME, name),

  getSummoner({ commit, dispatch }, { region, name }) {
    commit(types.TOGGLE_LOADING);

    dispatch("updateRegion", region);
    dispatch("getSummonerProfile", name).then(() =>
      dispatch("getSummonerData")
    );
  },

  getSummonerProfile({ commit, getters, dispatch, rootState: state }, name) {
    let set = state.sets[0].number;

    if (state.activeSet !== set) dispatch("setActiveSet", set, { root: true });
    if (name) dispatch("updateName", sanitise(name));

    return api
      .getSummoner(getters.getPayload)
      .then(summoner => commit(types.SET_DATA, summoner));
  },

  getSummonerData({ commit, state, dispatch }) {
    if (!state.loading) commit(types.TOGGLE_LOADING);

    return dispatch("getRanked")
      .then(() => dispatch("getMatches"))
      .finally(() => commit(types.TOGGLE_LOADING));
  },

  getRanked({ commit, state }) {
    return api
      .getRanked(state.regions[state.form.region].value, state.data.id)
      .then(res =>
        commit(
          types.SET_RANKED,
          res.find(queue => queue.queueType === "RANKED_TFT")
        )
      );
  },

  getMatches({ dispatch, state, getters }) {
    return dispatch("matches/getKeys", {
      region: getters.getContinent,
      puuid: state.data.puuid
    });
  }
};
