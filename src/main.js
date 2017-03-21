// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
// 引入vue-router
import VueRouter from 'vue-router';
// 引入vue-resource
import Axios from 'axios';
import goods from './components/goods/goods';
import ratings from './components/ratings/ratings';
import sellers from './components/seller/sellers';

import 'common/sass/index.scss';

// Vue注册组件
Vue.use(VueRouter);
// 给Vue原形上添加axios
Vue.prototype.$http = Axios;

const router = new VueRouter({
  linkActiveClass: 'active',
  routes: [
        {
          path: '/',
          redirect: '/goods'
        },
        {
          path: '/goods',
          component: goods
        },
        {
          path: '/ratings',
          component: ratings
        },
        {
          path: '/seller',
          component: sellers
        }
      ]
});

const app = new Vue({
  el: '#app',
   router: router,
  data: {
    eventHub: new Vue()
  },
  render: h => h(App)
});
