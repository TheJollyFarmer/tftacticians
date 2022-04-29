import api from "@/api/main";
import types from "@/store/types";
import debounce from "lodash/debounce";
import throttle from "lodash/throttle";

export default {
  getData: async ({ dispatch, state }) => {
    let set = api.getActiveSet();

    if (api.getTheme() !== state.darkTheme) dispatch("toggleDarkTheme");

    return set !== state.activeSet
      ? await dispatch("setActiveSet", set)
      : await dispatch("setData");
  },

  setData: async ({ commit, dispatch, state, getters: { getActiveSet } }) => {
    await Promise.all([
      dispatch("champions/setChampions", getActiveSet),
      dispatch("champions/traits/setTraits", getActiveSet),
      dispatch("compositions/setCompositions", getActiveSet),
      dispatch("items/setItems", getActiveSet),
      dispatch("summoner/getRegion")
    ]);

    if (!state.initialised) commit(types.TOGGLE_INITIALISED);
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
