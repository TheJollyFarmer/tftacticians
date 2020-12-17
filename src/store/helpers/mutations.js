import Vue from "vue";
import { getPath } from "@/utils/helpers";

export const setState = key => (state, data) => (state[key] = data);

export const setProp = (path, prop) => (state, data) =>
  Vue.set(getPath(state, path), prop, data);

export const addData = key => (state, data) =>
  (state[key] = { ...state[key], ...data });

export const pushData = key => (state, data) => state[key].push(...data);

export const pushToProp = path => (state, value) =>
  getPath(state, path).push(value);

export const deleteProp = path => (state, value) =>
  Vue.delete(getPath(state, path), getPath(state, path).indexOf(value));

export const clearProp = (path, prop, value = []) => state =>
  Vue.set(getPath(state, path), prop, value);

export const toggleProp = (path, prop) => state =>
  Vue.set(getPath(state, path), prop, !getPath(state, path)[prop]);
