import types from "@/store/modules/summoner/types";
import { setState, toggleState } from "@/store/helpers/mutations";

export default {
  [types.UPDATE_REGION]: setState("region"),
  [types.UPDATE_NAME]: setState("name"),
  [types.SET_DATA]: setState("data"),
  [types.SET_RANKED]: setState("ranked"),
  [types.SET_MATCHES]: setState("matches"),
  [types.TOGGLE_LOADING]: toggleState("loading")
};
