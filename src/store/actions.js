import types from "@/store/types";
import debounce from "lodash/debounce";

export default {
  setData({ dispatch, getters }) {
    dispatch("champions/setChampions", getters.getActiveSet);
    dispatch("champions/traits/setTraits", getters.getActiveSet);
    dispatch("compositions/setCompositions", getters.getActiveSet);
    dispatch("items/setItems", getters.getActiveSet);
  },

  setActiveSet: ({ commit }, set) => commit(types.SET_ACTIVE_SET, set),

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

  resetPopover: ({ commit }) => {
    commit(types.SET_POPOVER_DISPLAY, false);
    commit(types.SET_HOVER_STATUS, false);
  }
};
