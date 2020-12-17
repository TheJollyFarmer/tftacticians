import types from "./types";
import { setState } from "@/store/helpers/mutations";

export default {
  [types.SET_DATA]: setState("compositions"),
  [types.SET_KEYS]: setState("keys"),
  [types.SET_COMPOSITION]: setState("composition")
};
