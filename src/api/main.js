import api from "@/api/index";

export default {
  getActiveSet() {
    return api.getItem("local", "activeSet") || 6.5;
  },

  setActiveSet(set) {
    return api.setItem("local", "activeSet", set);
  },

  getTheme() {
    return api.getItem("local", "darkTheme");
  },

  setTheme(theme) {
    return api.setItem("local", "darkTheme", theme);
  },

  getAsset(set, name) {
    return api.request(`assets/data/${set}/${name}.json`);
  },

  getData(type) {
    return api.getItem("session", `${type}Data`) || 6.5;
  },

  setData(data, type) {
    return api.setItem("session", `${type}Data`, data);
  }
};
