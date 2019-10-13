import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import views from './views/login/index'
import { Button, Cell, CellGroup, NavBar, Field } from 'vant'
import './styles/index.less'
import 'amfe-flexible/index.js'

Vue
  .use(Button)
  .use(Cell)
  .use(CellGroup)
  .use(NavBar)
  .use(Field)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
