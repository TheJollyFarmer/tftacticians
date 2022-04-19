import api from "@/api/leaderboard";
import types from "./types";
import { normalise } from "@/utils/helpers";

export default {
  getLeaderboard({ commit, getters }) {
    if (!getters.getLoading) {
      commit(types.TOGGLE_LOADING);

      api
        .getLeaderboard(getters.getPayload)
        .then(({ entries }) =>
          commit(types.SET_DATA, normalise(entries, "name", "leaderboard"))
        )
        .then(() => commit(types.TOGGLE_LOADING));
    }
  },

  setForm: ({ commit, dispatch }, { region, league, page }) => {
    commit(types.SET_REGION, region);
    commit(types.SET_LEAGUE, league);

    dispatch("setPage", page || 1);
  },

  setPage: ({ commit }, page) => commit(types.SET_PAGE, parseInt(page, 10))
};
