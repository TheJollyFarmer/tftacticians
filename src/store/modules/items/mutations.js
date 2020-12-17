import types from "./types";
import { clearProp, setProp, setState } from "@/store/helpers/mutations";

export default {
  [types.SET_DATA]: setState("items"),
  [types.SET_KEYS]: setState("keys"),
  [types.SET_FILTER_ITEM]: setProp("filter", "item"),
  [types.SET_FILTER_TYPE]: setProp("filter", "type"),
  [types.RESET_FILTER_ITEM]: clearProp("filter", "item", "B.F. Sword"),
  [types.RESET_FILTER_TYPE]: clearProp("filter", "type", "component")
};
