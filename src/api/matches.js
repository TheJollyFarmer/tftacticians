import api from "@/api/index";

export default {
  getKeys(region, puuid, count) {
    return api.request("api/matches", { region, puuid, count });
  },

  getMatch(region, id) {
    return api.request("api/match", { region, id });
  }
};
