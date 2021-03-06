import Vue from 'vue'
import App from './App.vue'
import Contador from './Contador.vue'

Vue.config.productionTip = false
Vue.component('app-contador')

new Vue({
  render: h => h(App),
}).$mount('#app')
