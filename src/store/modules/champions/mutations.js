import types from "./types";
import {
  clearStateArr,
  deleteDatum,
  pushDatum,
  setState
} from "@/store/helpers/mutations";

export default {
  [types.SET_DATA]: setState("champions"),
  [types.SET_KEYS]: setState("keys"),
  [types.SET_QUERY]: setState("query"),
  [types.ADD_FILTER]: pushDatum("filters"),
  [types.REMOVE_FILTER]: deleteDatum("filters"),
  [types.RESET_FILTERS]: clearStateArr("filters")
};
