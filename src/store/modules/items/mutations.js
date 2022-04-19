import types from "./types";
import { setState, toggleState } from "@/store/helpers/mutations";

export default {
  [types.SET_DATA]: setState("items"),
  [types.SET_KEYS]: setState("keys"),
  [types.SET_QUERY]: setState("query"),
  [types.SET_FILTER]: setState("filter"),
  [types.TOGGLE_SPECIAL]: toggleState("isSpecial")
};
