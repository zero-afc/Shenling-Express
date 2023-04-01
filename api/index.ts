import Axios from "./axios"

const axios = Axios.create({
  baseUrl: "http://god-express-gateway-t.itheima.net/driver"
})

axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  const token = uni.getStorageSync("token")
  if (token) {
    config.header!.Authorization = token
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
// axios.interceptors.response.use(function (response) {
//   // 对响应数据做点什么
//   return response;
// }, function (error) {
//   // 对响应错误做点什么
//   return Promise.reject(error);
// });

export interface BaseData<T> {
  code : number
  data : T
  msg : string
}

export default axios