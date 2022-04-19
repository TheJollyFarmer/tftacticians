const query = require("./utils/query");
const BASE_URL = process.env.RIOT_API_URL;
const SUMMONER_URL = "summoner/v1/summoners/by-puuid/";

exports.handler = async ({ queryStringParameters }) => {
  const { region, puuid } = queryStringParameters;
  const url = region + BASE_URL + SUMMONER_URL + puuid;

  return await query(url);
};
