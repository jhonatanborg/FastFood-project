import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "@mdi/font/css/materialdesignicons.css";
import vuetify from "@/plugins/vuetify";
import "circular-std";
import goTo from "vuetify/es5/services/goto";

Vue.prototype.$bus = new Vue({});

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,

  render: function(h) {
    return h(App);
  },
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0;

    if (to.hash) {
      scrollTo = to.hash;
    } else if (savedPosition) {
      scrollTo = savedPosition.y;
    }

    return goTo(scrollTo);
  }
}).$mount("#app");
