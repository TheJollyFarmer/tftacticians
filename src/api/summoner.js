import request from "@/api/index";

const key = process.env.RIOT_KEY;

export default {
  getSummoner(region, name) {
    return request(
      "get",
      "https://" +
        region +
        "1.api.riotgames.com/tft/summoner/v1/summoners/by-name/" +
        name +
        "?api_key=" +
        key
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
