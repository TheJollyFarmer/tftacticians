import filters from "@/utils/filters";

export default {
  getActiveSet: state => filters.trim(state.activeSet)
};
