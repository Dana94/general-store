import Vue from "vue";
import App from "./App.vue";
import store from './store/store';

Vue.filter('convertTotal', (value) => {
  value = value.toString().substring(0, value.toString().indexOf('.') + 3);
  return `$${value}`;
})

new Vue({
  el: "#app",
  store,
  render: h => h(App)
});
