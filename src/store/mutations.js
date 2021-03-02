import types from "@/store/types";
import { setProp, toggleProp } from "@/store/helpers/mutations";

export default {
  [types.SET_POPOVER_ID]: setProp("popover", "id"),
  [types.SET_POPOVER_TYPE]: setProp("popover", "type"),
  [types.SET_POPOVER_ELEMENT]: setProp("popover", "el"),
  [types.SET_POPOVER_DISPLAY]: setProp("popover", "display"),
  [types.SET_HOVER_STATUS]: setProp("popover", "hover"),
  [types.TOGGLE_POPOVER_ACTIVE]: toggleProp("popover", "active")
};
