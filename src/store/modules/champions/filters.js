import { sanitise } from "@/utils/filters";

export const byFilter = ({ filters, query }, { getArray: champions }) => {
  let champs = filters.length ? getByOption(champions, filters) : champions;

  return !query.length ? champs : getByQuery(champs, query);
};

export const byKey = type => (_, { getArray: champions }) => key =>
  champions.find(champion => sanitise(champion[type]) === sanitise(key));

export const isActive = state => option =>
  state.filters.some(filter => option === filter);

export const getAdjacentChampion = dir => ({ champions, keys }) => champ => {
  let current = keys.indexOf(champ);
  let index = adjacentChampion(keys, current, dir);
  let adjacent = keys[index];

  return champions[adjacent];
};

const adjacentChampion = (champions, champion, direction) =>
  direction === "prev"
    ? getPrevChampion(champions, champion)
    : getNextChampion(champions, champion);

const getPrevChampion = (keys, idx) => (idx === 0 ? keys.length : idx) - 1;

const getNextChampion = (keys, index) => (index + 1) % keys.length;

const getByQuery = (champions, query) =>
  champions.filter(
    champion =>
      champHasQuery(champion.name, query) ||
      traitHasQuery(champion.traits, query) ||
      costHasQuery(champion.cost, query)
  );

const champHasQuery = (champion, query) => sanitise(champion).includes(query);

const traitHasQuery = (traits, query) =>
  toName(traits).some(trait => sanitise(trait).includes(query));

const costHasQuery = (cost, query) => cost.toString() === query;

const getByOption = (champions, filters) =>
  champions.filter(champ => isMatch(filters, champ, hasTypes(filters)));

const hasTypes = type => filterHas(type, "number") && filterHas(type, "string");

const filterHas = (filters, type) => filters.some(fil => typeof fil === type);

const isMatch = (filters, champion, hasType) =>
  hasType
    ? hasTrait(filters, champion) && isCost(filters, champion)
    : hasTrait(filters, champion) || isCost(filters, champion);

const hasTrait = (filters, champion) =>
  filters.some(filter => toName(champion.traits).includes(filter));

const isCost = (filters, champion) =>
  filters.includes(champion.cost.toString());

const toName = traits =>
  traits.map(trait => trait.replace(/^[^_]*_/g, "").toLowerCase());
