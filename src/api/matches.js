import request from "@/api/index";

const key = "";

export default {
  getMatchKeys(region, summoner, count) {
    return request(
      "get",
      "https://" +
        "americas" +
        ".api.riotgames.com/tft/match/v1/matches/by-puuid/" +
        summoner +
        "/ids?count=" +
        count +
        "&api_key=" +
        key
    );
  },

  getMatch(matchKey) {
    return request(
      "get",
      "https://" +
        "americas" +
        ".api.riotgames.com/tft/match/v1/matches/" +
        matchKey +
        "?api_key=" +
        key
    );
  }
};
