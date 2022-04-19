import api from "@/api/main";
import types from "@/store/types";
import debounce from "lodash/debounce";
import throttle from "lodash/throttle";

export default {
  getData({ dispatch, state }) {
    let set = api.getActiveSet();

    set !== state.activeSet
      ? dispatch("setActiveSet", set)
      : dispatch("setData");

    if (api.getTheme() !== state.darkTheme) {
      dispatch("toggleDarkTheme");
    }
  },

  setData({ dispatch, getters: { getActiveDataSet } }) {
    dispatch("champions/setChampions", getActiveDataSet);
    dispatch("champions/traits/setTraits", getActiveDataSet);
    dispatch("compositions/setCompositions", getActiveDataSet);
    dispatch("items/setItems", getActiveDataSet);
    dispatch("summoner/getRegion");
  },

  setActiveSet: ({ commit, dispatch }, set) => {
    commit(types.SET_ACTIVE_SET, set);

    api.setActiveSet(set);

    dispatch("setData");
  },

  displayPopover({ commit, dispatch }, popover) {
    commit(types.SET_HOVER_STATUS, true);
    dispatch("setPopover", popover);
  },

  setPopover: debounce(function({ commit, state }, { id, type, el }) {
    if (state.popover.hover) {
      commit(types.SET_POPOVER_DISPLAY, true);
      commit(types.SET_POPOVER_ID, id);
      commit(types.SET_POPOVER_TYPE, type);
      commit(types.SET_POPOVER_ELEMENT, el);
    }
  }, 150),

  hidePopover({ commit, state }) {
    commit(types.SET_HOVER_STATUS, false);

    setTimeout(() => {
      if (!state.popover.active) {
        commit(types.SET_POPOVER_DISPLAY, false);
      }
    }, 50);
  },

  setPopoverActive: ({ commit }) => commit(types.TOGGLE_POPOVER_ACTIVE),

  clearPopoverActive({ commit, state }) {
    commit(types.TOGGLE_POPOVER_ACTIVE);

    setTimeout(() => {
      if (!state.popover.hover) {
        commit(types.SET_POPOVER_DISPLAY, false);
      }
    }, 50);
  },

  resetPopover({ commit }) {
    commit(types.SET_POPOVER_DISPLAY, false);
    commit(types.SET_HOVER_STATUS, false);
  },

  setWindowWidth: throttle(function({ commit }, { currentTarget }) {
    commit(types.SET_WINDOW_WIDTH, currentTarget.innerWidth);
  }, 500),

  toggleDarkTheme: ({ commit, state }) => {
    commit(types.TOGGLE_DARK_THEME);

    api.setTheme(state.darkTheme);
  },

  toggleModal: ({ commit }) => commit(types.TOGGLE_MODAL),
  setError: ({ commit }, error) => commit(types.SET_ERROR, error),
  removeError: ({ commit }) => commit(types.REMOVE_ERROR)
};
