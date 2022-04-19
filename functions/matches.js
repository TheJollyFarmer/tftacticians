const query = require("./utils/query");
const BASE_URL = process.env.RIOT_API_URL;
const MATCHES_URL = "match/v1/matches/by-puuid/";
const IDS = "/ids";

exports.handler = async ({ queryStringParameters }) => {
  const { region, puuid, count } = queryStringParameters;
  const url = region + BASE_URL + MATCHES_URL + puuid + IDS + "?count=" + count;

  return await query(url, count);
};
