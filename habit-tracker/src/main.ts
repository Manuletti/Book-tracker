import { createApp } from "vue";
import { createPinia } from "pinia";
import { Quasar } from "quasar";

import App from "./App.vue";

import iconSet from "quasar/icon-set/bootstrap-icons";
import "@quasar/extras/bootstrap-icons/bootstrap-icons.css";
import "quasar/src/css/index.sass";

import "../assets/style.scss";

const app = createApp(App);

app.use(createPinia());
app.use(Quasar, {
  plugins: {},
  iconSet: iconSet,
});

app.mount("#app");
