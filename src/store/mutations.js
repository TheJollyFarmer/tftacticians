import types from "@/store/types";
import {
  clearState,
  setProp,
  setState,
  toggleProp,
  toggleState
} from "@/store/helpers/mutations";

export default {
  [types.SET_POPOVER_ID]: setProp("popover", "id"),
  [types.SET_POPOVER_TYPE]: setProp("popover", "type"),
  [types.SET_POPOVER_ELEMENT]: setProp("popover", "el"),
  [types.SET_POPOVER_DISPLAY]: setProp("popover", "display"),
  [types.SET_HOVER_STATUS]: setProp("popover", "hover"),
  [types.SET_WINDOW_WIDTH]: setState("windowWidth"),
  [types.TOGGLE_POPOVER_ACTIVE]: toggleProp("popover", "active"),
  [types.TOGGLE_DARK_THEME]: toggleState("darkTheme"),
  [types.SET_ACTIVE_SET]: setState("activeSet"),
  [types.TOGGLE_MODAL]: toggleState("displayModal"),
  [types.SET_ERROR]: setState("error"),
  [types.REMOVE_ERROR]: clearState("error", "")
};
