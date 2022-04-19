import types from "./types";
import { setState } from "@/store/helpers/mutations";

export default {
  [types.SET_DATA]: setState("traits"),
  [types.SET_KEYS]: setState("keys"),
  [types.SET_QUERY]: setState("query"),
  [types.SET_FILTER]: setState("filter")
};
