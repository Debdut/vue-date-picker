import Vue from 'vue'
import App from './App.vue'
import SimpleLineIcons from 'simple-line-icons/css/simple-line-icons.css'
import vuewheel from 'vuewheel'

Vue.config.productionTip = false
Vue.use(SimpleLineIcons)
Vue.use(require('vue-shortkey'))
Vue.use(vuewheel)

new Vue({
  render: h => h(App)
}).$mount('#app')
