import axios from "axios";
axios.defaults.baseURL = process.env.VUE_APP_ROOT_API;
import store from "../store/index";

export default {
  async request(url, params) {
    const config = {
      url,
      method: "GET",
      params: { ...params }
    };

    return await axios(config)
      .then(({ data }) => data)
      .catch(e => console.log(e.message));
  },

  getItem(type, key) {
    return JSON.parse(window[type + "Storage"].getItem(key));
  },

  setItem(type, key, payload) {
    window[type + "Storage"].setItem(key, JSON.stringify(payload));
  },

  removeItem(type, key) {
    window[type + "Storage"].removeItem(key);
  }
};
