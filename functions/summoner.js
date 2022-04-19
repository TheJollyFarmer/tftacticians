const query = require("./utils/query");
const BASE_URL = process.env.RIOT_API_URL;
const SUMMONER_URL = "summoner/v1/summoners/by-name/";

exports.handler = async ({ queryStringParameters }) => {
  const { region, name } = queryStringParameters;
  const url = region + BASE_URL + SUMMONER_URL + name;

  return await query(url);
};
