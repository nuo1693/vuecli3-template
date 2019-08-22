import axios from 'axios';
// 添加请求拦截器
/* axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token')
  if (token) config.headers.Authorization = token
  // 在发送请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
}) */

// 主页加载
const loadHome = data => axios({
  url: `${process.env.VUE_APP_URL}/sys/pc/homePage`,
  method: 'post',
  data,
});
export default {
  loadHome, // 主页加载
};
