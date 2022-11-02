import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import "./assets/style.css";
import iconSet from "quasar/icon-set/bootstrap-icons";
import "@quasar/extras/bootstrap-icons/bootstrap-icons.css";
import { Quasar } from "quasar";
import quasarUserOptions from "./quasar-user-options.js";
// import router from "./router";

const app = createApp(App).use(Quasar, quasarUserOptions);

app.use(createPinia());
app.use(Quasar, {
  plugins: {},
  iconSet: iconSet,
});
// app.use(router);

app.mount("#app");
