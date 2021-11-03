import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vue from "vue";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import axios from "axios";
import VueAxios from "vue-axios";
import VueYoutube from "vue-youtube";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(VueYoutube);

Vue.use(VueAxios, axios);
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(BootstrapVueIcons);

Vue.config.productionTip = false;

new Vue({
  router,
  store,

  render: (h) => h(App),
}).$mount("#app");
