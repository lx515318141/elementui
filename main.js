// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);      // 这步use操作必须做，否则element无法使用。
// 完整引入方法

import { Button, Switch, Table, TableColumn } from 'element-ui';
Vue.use(Button)     //  或写为：Vue.component(Button.name, Button);
Vue.use(Switch)   
Vue.use(Table)
Vue.use(TableColumn)
// 按需引入方法

Vue.config.productionTip = false

 


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
