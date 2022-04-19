import { sanitise } from "@/utils/filters";

export const byFilter = ({ filter }, { getArray: items }) => value => {
  let val = value ? value : filter;

  return items.filter(item => (item.components ? hasMatch(val, item) : false));
};

export const typeFilter = type => ({ isSpecial, query }, { getArray }) => {
  let items = getByType(getArray, type === "components", isSpecial);

  return !query.length ? items.map(item => item.id) : getByQuery(items, query);
};

export const isSpecial = ({ filter }, { getItem }) =>
  specials.some(special => getItem(filter)[special]);

export const byName = (_, { getArray: items }) => name =>
  items.find(item => sanitise(item.name) === sanitise(name));

const hasMatch = (fil, item) => isCombined(fil, item) || isComponent(fil, item);
const isCombined = (filter, item) => filter === item.id;
const isComponent = (filter, item) => item.components.includes(filter);
const getByType = (items, type, isSpecial) => getItems(items, isSpecial, type);

const getItems = (items, isSpecial, isComp) =>
  items.filter(
    item => (!item.components === isComp ? hasSpecial(isSpecial, item) : false)
  );

const hasSpecial = (isSpecial, item) =>
  isSpecial
    ? specials.some(special => item[special])
    : specials.every(special => !item[special]);

const getByQuery = (items, query) =>
  items
    .filter(item => sanitise(item.name).includes(query))
    .map(item => item.id);

const specials = ["isElusive", "isRadiant", "isShadow"];
