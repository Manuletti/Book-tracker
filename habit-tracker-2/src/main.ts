import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import "./assets/style.css";
import { Quasar } from "quasar";
import quasarUserOptions from "./quasar-user-options";
// import router from "./router";

const app = createApp(App).use(Quasar, quasarUserOptions);

app.use(createPinia());
// app.use(router);

app.mount("#app");
