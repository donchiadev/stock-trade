import Vue from "vue"
import VueParticles from "vue-particles"
import VueRouter from "vue-router"
import Vuex from "vuex"

import routes from "./routes"
import store from "./store"

import App from "./App.vue"

import { currency } from "./utils"

Vue.config.productionTip = false

Vue.use(VueParticles)
Vue.use(VueRouter)
Vue.use(Vuex)

Vue.filter("currency", currency)

new Vue({
  render: h => h(App),
  router: new VueRouter({ routes, mode: "history" }),
  store: new Vuex.Store(store)
}).$mount("#app")
