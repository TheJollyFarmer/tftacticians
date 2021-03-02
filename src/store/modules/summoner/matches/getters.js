import { average, count, rate, sort, sum } from "@/utils/helpers";

export default {
  getAggregates: state => count(state.placements),
  getChampionAggregates: state => count(state.champions),
  getTraitAggregates: state => count(state.traits),
  getItemAggregates: state => count(state.items),
  getPlacementCount: (state, get) => placement => get.getAggregates[placement],
  getWins: (state, getters) => getters.getPlacementCount(1),
  getAvgPlacement: state => average(state.placements),
  getTop4: (_, get) => sum([2, 3, 4].map(pos => get.getPlacementCount(pos))),
  getChampionTrends: (state, getters) => sort(getters.getChampionAggregates),
  getTraitTrends: (state, getters) => sort(getters.getTraitAggregates),
  getItemTrends: (state, getters) => sort(getters.getItemAggregates),
  getPlacementStats: (state, getters) => {
    return {
      average: getters.getAvgPlacement,
      wins: getters.getWins,
      ["top 4"]: getters.getTop4
    };
  },
  getMatchRates: (state, getters, _, rootGetters) => {
    return {
      games: rate(state.count, rootGetters["summoner/getMatchCount"]),
      ["wins"]: rate(getters.getWins, state.count),
      ["top 4"]: rate(getters.getTop4, state.count),
      ["average"]: getters.getAvgPlacement
    };
  }
};
