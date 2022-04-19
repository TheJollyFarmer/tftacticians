const query = require("./utils/query");
const BASE_URL = process.env.RIOT_API_URL;
const MATCH_URL = "match/v1/matches/";

exports.handler = async ({ queryStringParameters }) => {
  const { region, id } = queryStringParameters;
  const url = region + BASE_URL + MATCH_URL + id;

  return await query(url);
};
