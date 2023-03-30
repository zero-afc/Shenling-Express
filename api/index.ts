import Axios from "./axios"

const axios = Axios.create({
  baseUrl: "https://api-hmugo-web.itheima.net/api/public/v1"
})

axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  console.log("config：", config);
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

axios.get<BaseData<Array<any>>>("/home/swiperdata").then(res => {
  console.log(res.message);
})

export interface BaseData<T> {
  message : T
  meta : { mas : string, status : number }
}

export { axios }