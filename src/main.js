import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import api from './API/index';
import router from './router';
import store from './store';

axios.defaults.timeout = 15000;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.withCredentials = true;
axios.interceptors.response.use(
  (response) => {
    if (response.data.s === 1) {
      router.push({
        path: '/login',
      });
    } else if (response.data.s === 5) {
      console.log(response);
      // Message.error('服务器错误')
      // console.log(this)
      router.push({
        path: '/',
      });
    }
    return response;
  },
  error => Promise.reject(error.response.data),
);
console.log(process.env);
Vue.prototype.$axios = axios;
Vue.use(api);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
