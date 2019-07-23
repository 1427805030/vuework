/*
* 入口js
*/
import Vue from 'vue'
import app from './App'

//引入路由器
import router from './router'
//引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//声明使用
Vue.use(ElementUI);

new Vue ({
  el: '#app',
  //挂载
  render: h=> h(app),
  //配置路由器
  router
})
