const query = require("./utils/query");
const BASE_URL = process.env.RIOT_API_URL;
const LEAGUE_URL = "league/v1/";

exports.handler = async ({ queryStringParameters }) => {
  const { region, league } = queryStringParameters;
  const url = region + BASE_URL + LEAGUE_URL + league;

  return await query(url);
};
