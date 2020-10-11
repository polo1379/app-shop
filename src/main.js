import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'; 

axios.defaults.baseURL = 'http://127.0.0.1:3000'; 
Vue.prototype.axios = axios;

import myfooter from './components/footer'
Vue.component('my-footer',myfooter)

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.min.css'
Vue.use(MintUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
