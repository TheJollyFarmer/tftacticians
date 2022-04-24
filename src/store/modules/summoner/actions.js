import api from "@/api/summoner";
import types from "@/store/modules/summoner/types";

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

  getSum({ commit, dispatch, getters }) {
    return api
      .getSummoner(getters.getPayload)
      .then(summoner => commit(types.SET_DATA, summoner))
      .then(() => dispatch("getRanked"));
  },

  getSummoner({ commit, dispatch }) {
    commit(types.TOGGLE_LOADING);

    return dispatch("getSum")
      .then(() => dispatch("getMatches"))
      .finally(() => commit(types.TOGGLE_LOADING));
  },

  getRanked({ commit, state }) {
    return api
      .getRanked(state.regions[state.form.region].value, state.data.id)
      .then(res => commit(types.SET_RANKED, res[0]));
  },

  getMatches({ dispatch, state, getters }) {
    return dispatch("matches/getKeys", {
      region: getters.getContinent,
      puuid: state.data.puuid
    });
  }
};
