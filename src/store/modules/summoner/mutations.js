import types from "@/store/modules/summoner/types";
import { setProp, setState, toggleState } from "@/store/helpers/mutations";

export default {
  [types.UPDATE_REGION]: setProp("form", "region"),
  [types.UPDATE_NAME]: setProp("form", "name"),
  [types.SET_DATA]: setState("data"),
  [types.SET_RANKED]: setState("ranked"),
  [types.SET_MATCHES]: setState("matches"),
  [types.TOGGLE_LOADING]: toggleState("loading")
};
