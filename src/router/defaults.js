import store from "@/store";

export const createParams = params =>
  Object.keys(params).reduce(
    (obj, key) => ({ ...obj, [key]: paramDefaults[key]() }),
    {}
  );

export const createQuery = (params, query) =>
  params.reduce((obj, key) => ({ ...obj, [key]: createType(query, key) }), {});

const paramDefaults = {
  item: () => "bf-sword",
  type: () => store.state.champions.traits.filter,
  region: () => store.state.leaderboard.form.region,
  league: () => store.state.leaderboard.form.league,
  composition: () =>
    store.state.compositions.compositions[
      store.state.compositions.keys[0]
    ].name.toLowerCase(),
  champion: () =>
    store.state.champions.champions[
      store.state.champions.keys[0]
    ].name.toLowerCase()
};

const createType = (query, key) => {
  return key === "search" ? createString(query, key) : createArray(query, key);
};

const createString = (query, key) => (query[key] ? query[key] : undefined);
const createArray = (query, key) => (query[key] ? [...query[key]] : []);
