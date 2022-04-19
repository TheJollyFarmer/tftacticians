const axios = require("axios");
const HTTP = "https://";

module.exports = async (url, params) => {
  const config = {
    url: HTTP + url,
    method: "GET",
    headers: { ["X-Riot-Token"]: process.env.RIOT_KEY },
    ...params
  };

  return axios(config)
    .then(({ status, data }) => response(status, data))
    .catch(e => response(e.statusCode || 500, e.message));
};

function response(status, body) {
  return {
    statusCode: status,
    body: JSON.stringify(body)
  };
}
