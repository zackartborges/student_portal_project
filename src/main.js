import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
<<<<<<< HEAD
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";
=======

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";


>>>>>>> 0665c77b1ed2f1adf4df1e420c5bd434eaa7f209

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
