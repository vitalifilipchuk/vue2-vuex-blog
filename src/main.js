import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import DefaultLayout from './layouts/DefaultLayout.vue'
import AuthLayout from './layouts/AuthLayout.vue'

Vue.component('default-layout', DefaultLayout)
Vue.component('auth-layout', AuthLayout)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


