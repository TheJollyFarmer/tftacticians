import types from "./types";
import {
  clearProp,
  deleteProp,
  pushToProp,
  setState
} from "@/store/helpers/mutations";

export default {
  [types.SET_DATA]: setState("champions"),
  [types.SET_KEYS]: setState("keys"),
  [types.ADD_COST_FILTER]: pushToProp("filters/cost"),
  [types.ADD_ORIGIN_FILTER]: pushToProp("filters/origin"),
  [types.ADD_CLASS_FILTER]: pushToProp("filters/class"),
  [types.REMOVE_COST_FILTER]: deleteProp("filters/cost"),
  [types.REMOVE_ORIGIN_FILTER]: deleteProp("filters/origin"),
  [types.REMOVE_CLASS_FILTER]: deleteProp("filters/class"),
  [types.RESET_COST_FILTER]: clearProp("filters", "cost"),
  [types.RESET_ORIGIN_FILTER]: clearProp("filters", "origin"),
  [types.RESET_CLASS_FILTER]: clearProp("filters", "class")
};
