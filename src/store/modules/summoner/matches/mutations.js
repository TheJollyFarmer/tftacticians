import types from "@/store/modules/summoner/matches/types";
import { addData, pushDatum, setState } from "@/store/helpers/mutations";

export default {
  [types.SET_KEYS]: setState("keys"),
  [types.ADD_DATUM]: addData("data"),
  [types.ADD_PLACEMENT]: pushDatum("placements"),
  [types.ADD_CHAMPION]: pushDatum("champions"),
  [types.ADD_TRAIT]: pushDatum("traits"),
  [types.ADD_ITEM]: pushDatum("items")
};
