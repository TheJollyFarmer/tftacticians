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
  }
};
