import api from "@/api/index";

export default {
  getRegion() {
    return api.getItem("local", "region");
  },

  setRegion(region) {
    return api.setItem("local", "region", region);
  },

  getSummoner({ region, name }) {
    return api.request("summoner", { region, name });
  },

  getName({ region, puuid }) {
    return api.request("name", { region, puuid });
  },

  getRanked(region, id) {
    return api.request("ranked", { region, id });
  }
};
