import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";

import "./assets/main.css";
import "./assets/css/dropdown.css";
import "./assets/css/fontawesome.all.min.css";

const pinia = createPinia();

createApp(App).use(pinia).mount("#app");
