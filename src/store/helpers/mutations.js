import { getPath } from "@/utils/helpers";

export const setState = key => (state, data) => (state[key] = data);

export const setProp = (path, prop) => (state, data) =>
  (getPath(state, path)[prop] = data);

export const addData = key => (state, data) =>
  (state[key] = { ...state[key], ...data });

export const addDatum = key => (state, data) => (state[key][data.id] = data);

export const pushData = key => (state, data) => state[key].push(...data);

export const pushDatum = key => (state, datum) => state[key].push(datum);

export const pushToProp = path => (state, value) =>
  getPath(state, path).push(value);

export const deleteDatum = key => (state, index) =>
  state[key].splice(state[key].indexOf(index), 1);

export const deleteProp = path => (state, value) =>
  delete getPath(state, path)[getPath(state, path).indexOf(value)];

export const resetState = obj => state => Object.assign(state, obj());

export const clearState = (path, value) => state => (state[path] = value);

export const clearStateArr = path => state =>
  state[path].splice(0, state[path].length);

export const toggleState = key => state => (state[key] = !state[key]);

export const toggleProp = (path, prop) => state =>
  (getPath(state, path)[prop] = !getPath(state, path)[prop]);
