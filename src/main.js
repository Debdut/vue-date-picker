import Vue from 'vue'
import App from './App.vue'
import pL from 'professional-look/dist/css/main.css'
import fontAwesome from 'font-awesome/css/font-awesome.css'
import vuewheel from 'vuewheel'

Vue.config.productionTip = false
Vue.use(vuewheel)
Vue.use(pL)
Vue.use(fontAwesome)

new Vue({
  render: h => h(App)
}).$mount('#app')
