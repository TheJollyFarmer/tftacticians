const axios = require("axios");

exports.handler = async event => {
  const url =
    "https://na1.api.riotgames.com/tft/summoner/v1/summoners/by-name/GrandVice8?api_key=RGAPI-d9f42294-db53-4dca-b4d3-38eaa3b5a2e0";
  const res = await axios.get(url);

  return {
    statusCode: res.status,
    body: JSON.stringify(res.data)
  };
};
