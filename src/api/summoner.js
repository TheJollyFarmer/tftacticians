import request from "@/api/index";

const key = "";

export default {
  getSummoner(region, name) {
    return request(
      "get",
      "https://kind-edison-e0eb7d.netlify.app/.netlify/functions/index"
    );
  },

  getRanked(region, puuid) {
    return request(
      "get",
      "https://" +
        region +
        "1.api.riotgames.com/tft/league/v1/entries/by-summoner/" +
        puuid +
        "?api_key=" +
        key
    );
  }
};
