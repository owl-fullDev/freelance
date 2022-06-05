import Vue from 'vue'
import App from './App.vue'

import { Table } from "buefy";
import "buefy/dist/buefy.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
Vue.config.productionTip = false

Vue.use(Table);

new Vue({
  render: h => h(App),
}).$mount('#app')
