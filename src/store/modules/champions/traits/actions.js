import traits from "@/data/traits.json";
import { setFilter, setQuery, setState } from "@/store/helpers/actions";

export default {
  setTraits: setState(traits, "key"),

  setFilters({ dispatch }, { type, search }) {
    dispatch("setFilter", type);
    dispatch("setQuery", search);
  },

  setQuery,
  setFilter
};
