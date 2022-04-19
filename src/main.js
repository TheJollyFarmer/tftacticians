import "./assets/sass/main.scss";
import "./utils/favicons";
import App from "./App.vue";
import Directives from "./directives/index";
import router from "./router";
import store from "./store";
import { createApp } from "vue";

const app = createApp(App);

app.use(Directives);
app.use(router);
app.use(store);
app.mount("#app");
