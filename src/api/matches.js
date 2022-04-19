import api from "@/api/index";

export default {
  getKeys(region, puuid, count) {
    return api.request("matches", { region, puuid, count });
  },

  getMatch(region, id) {
    return api.request("match", { region, id });
  }
};
