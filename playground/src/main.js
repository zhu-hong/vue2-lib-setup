import Vue from 'vue'
import App from './App.vue'

import './assets/preset.css'
import 'uno.css'

import Starter from '../../src'

Vue.use(Starter)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')