import request from "@/api/index";

const key = "";

export default {
  getSummoner(region, name) {
    return request(
      "get",
      "https://xim2iwr5aa.execute-api.eu-west-2.amazonaws.com/prod/summoner"
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
