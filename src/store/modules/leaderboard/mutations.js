import types from "@/store/modules/leaderboard/types";
import { setProp, setState, toggleState } from "@/store/helpers/mutations";

export default {
  [types.SET_DATA]: setState("data"),
  [types.SET_PAGE]: setProp("pagination", "page"),
  [types.SET_LEAGUE]: setProp("form", "league"),
  [types.SET_REGION]: setProp("form", "region"),
  [types.TOGGLE_LOADING]: toggleState("loading")
};
