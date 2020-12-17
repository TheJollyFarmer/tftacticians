require("./assets/sass/main.scss");
import App from "./App.vue";
import store from "./store";
import router from "./router";
import Tooltips from "./directives/index";
import Vue from "vue";

Vue.use(Tooltips);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
