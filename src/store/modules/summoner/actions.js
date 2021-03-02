import api from "@/api/summoner";
import types from "@/store/modules/summoner/types";

export default {
  updateRegion: ({ commit }, region) => commit(types.UPDATE_REGION, region),
  updateName: ({ commit }, name) => commit(types.UPDATE_NAME, name),
  getSummoner({ commit, dispatch, state }) {
    commit(types.TOGGLE_LOADING);

    return api
      .getSummoner(state.region, state.name)
      .then(summoner => commit(types.SET_DATA, summoner))
      .then(() => dispatch("getRanked"))
      .then(() => dispatch("getMatches"))
      .finally(() => commit(types.TOGGLE_LOADING));
  },

  getRanked({ commit, state }) {
    return api
      .getRanked(state.region, state.data.id)
      .then(res => commit(types.SET_RANKED, res[0]));
  },

  getMatches({ dispatch, state, getters }) {
    return dispatch("matches/getKeys", {
      region: getters.getContinent,
      summoner: state.data.puuid
    });
  }
};
