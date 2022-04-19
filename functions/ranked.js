const query = require("./utils/query");
const BASE_URL = process.env.RIOT_API_URL;
const RANKED_URL = "league/v1/entries/by-summoner/";

exports.handler = async ({ queryStringParameters }) => {
  const { region, id } = queryStringParameters;
  const url = region + BASE_URL + RANKED_URL + id;

  return await query(url);
};
