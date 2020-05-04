import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

window.IMStuff = {
  start: rootIdSelector => {
    new Vue({
      render: h => h(App)
    }).$mount(rootIdSelector);
  }
};
