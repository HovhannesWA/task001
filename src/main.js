// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import Vuelidate from 'vuelidate'
import router from './components/Router.js'
Vue.use(Vuelidate)

Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: { App, Vuelidate },
//   template: '<App/>'
// })

new Vue({
  router,
  App,
  Vuelidate,
  render: h => h(App)
}).$mount('#app')
