import { rate, sum } from "@/utils/helpers";

export function championTrends(champions) {
  let aggregator = champions.reduce(
    (pre, cur) => (
      pre[cur.id]
        ? updateChampion(pre[cur.id], cur.starred)
        : (pre[cur.id] = createChampion(cur.starred)),
      pre
    ),
    {}
  );

  return curate(aggregator);
}

export function placementStats(getters) {
  return {
    average: getters.getAvgPlacement,
    wins: getters.getPlacementAggregates[1],
    ["top 4"]: getTop4(getters)
  };
}

export function matchRates(state, getters, rootGetters) {
  return {
    games: rate(state.count, rootGetters["summoner/getMatchCount"]),
    ["wins"]: rate(getters.getPlacementAggregates[1], state.count),
    ["top 4"]: rate(getTop4(getters), state.count),
    ["average"]: getters.getAvgPlacement
  };
}

function updateChampion(champion, stars) {
  champion.count = ++champion.count;
  champion.starred += stars;
}

function createChampion(stars) {
  return { count: 1, starred: stars };
}

function curate(aggregator) {
  return Object.entries(aggregator)
    .sort((a, b) => b[1].count - a[1].count)
    .slice(0, 5);
}

function getTop4(getters) {
  return sum([2, 3, 4].map(pos => getters.getPlacementAggregates[pos] || 0));
}
