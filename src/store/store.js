import Vue from "vue";
import Vuex from "vuex";

import cart from "./modules/cart";
import shelf from "./modules/shelf";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cart,
    shelf
  }
});
