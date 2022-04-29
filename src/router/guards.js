import store from "@/store";
import { keys } from "@/constants/query";
import { hyphenise } from "@/utils/helpers";
import { validateParams, validateQuery } from "@/router/validatate";
import { createParams, createQuery } from "@/router/defaults";

export const initialiseStore = next =>
  store.state.initialised
    ? next()
    : store.dispatch("getData").then(() => next());

export const beforeEach = ({ fullPath }, from, next) =>
  fullPath.includes("%20") ? next(hyphenise(fullPath)) : next();

export const beforeResolve = ({ path }, from, next) =>
  store.dispatch("resetPopover").then(() => next());

export const beforeEnter = ({ name, params }, from, next) =>
  validateParams(params)
    ? next()
    : next({ name, params: createParams(params) });

export const beforeQuery = ({ name, query }, next) =>
  validateQuery(keys, query)
    ? next()
    : next({ name, query: createQuery(keys, query), replace: true });

export const updateQuery = query =>
  validateQuery(keys, query) ? query : createQuery(keys, query);
