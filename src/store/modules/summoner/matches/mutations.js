import types from "@/store/modules/summoner/matches/types";
import { state } from "@/store/modules/summoner/matches/state";
import {
  addDatum,
  pushDatum,
  resetState,
  setState
} from "@/store/helpers/mutations";

export default {
  [types.SET_KEYS]: setState("keys"),
  [types.ADD_DATUM]: addDatum("data"),
  [types.ADD_PLACEMENT]: pushDatum("placements"),
  [types.ADD_CHAMPION]: pushDatum("champions"),
  [types.ADD_TRAIT]: pushDatum("traits"),
  [types.ADD_ITEM]: pushDatum("items"),
  [types.RESET_STATE]: resetState(state)
};
