// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import Router from 'vue-router';
import VueResource from 'vue-resource';
import { sync } from 'vuex-router-sync';

import App from './App';
import VuexStore from './vuex/store';
import { routes } from './router-config';

Vue.use(Vuex);
Vue.use(Router);
Vue.use(VueResource);

/* eslint-disable no-new */
const store = new Vuex.Store(VuexStore);

const router = new Router({
  routes,
  history: true,
  saveScrollPosition: true,
});

sync(store, router);

/* eslint-disable no-unused-vars */
const app = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');