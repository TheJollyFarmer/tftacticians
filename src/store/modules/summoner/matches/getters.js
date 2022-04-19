import { championTrends, placementStats, matchRates } from "./helpers";
import { agg, avg, descCount, sortDesc } from "@/store/helpers/getters";

export default {
  getMatches: sortDesc("data"),
  getPlacementAggregates: agg("placements"),
  getAvgPlacement: avg("placements"),
  getTraitTrends: descCount("traits"),
  getItemTrends: descCount("items"),
  getChampionTrends: state => championTrends(state.champions),
  getPlacementStats: (_, getters) => placementStats(getters),
  getMatchRates: (state, get, _, rootGet) => matchRates(state, get, rootGet)
};
