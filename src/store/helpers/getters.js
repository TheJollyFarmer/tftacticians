import { aggregate, average, curate, getPath, sort } from "@/utils/helpers";

export const mapKeys = path => state => state.keys.map(key => state[path][key]);
export const getValue = path => state => getPath(state, path);
export const getDatum = path => state => key => getPath(state, path)[key];
export const getDatumProp = (path, prop) => state => key =>
  getPath(state, path)[key][prop];
export const filterBy = (getter, prop, query) => (state, getters) =>
  getters[getter].filter(item => item[prop] === query);
export const isTrue = path => state => value => getPath(state, path) === value;
export const sortDesc = (path, prop) => state => sort(state[path], prop);
export const agg = path => state => aggregate(state[path]);
export const avg = path => state => average(state[path]);
export const descCount = path => state => curate(aggregate(state[path]));
