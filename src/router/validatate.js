import { toTitleCase } from "@/utils/helpers";
import store from "@/store";

export const validateParams = params => hasParams(params) && isValid(params);
export const validateQuery = (params, query) =>
  params.every(key => (key === "search" ? true : Array.isArray(query[key])));

const hasParams = params => Object.values(params).every(param => param.length);

const isValid = params =>
  Object.entries(params).every(
    ([key, value]) => (validator[key] ? !!validator[key](value) : true)
  );

const validator = {
  item: param => store.getters["items/getItemByName"](param),
  champion: param => store.getters["champions/getChampionByName"](param),
  composition: param =>
    store.getters["compositions/getComposition"](toTitleCase(param))
};
