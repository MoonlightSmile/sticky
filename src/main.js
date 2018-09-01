import Vue from 'vue'
import App from './App.vue'
import VSticky from '../v-sticky'
Vue.use(VSticky)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
