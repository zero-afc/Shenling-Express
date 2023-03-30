"use strict";
const common_vendor = require("../common/vendor.js");
const api_utils_index = require("./utils/index.js");
class axios {
  // axios实例
  // interceptorsRequest!: 
  constructor(baseConfig) {
    this.baseConfig = baseConfig;
    this.baseConfig = baseConfig;
  }
  // 创建唯一实例
  static create(baseConfig) {
    if (!axios.instance) {
      axios.instance = new axios(baseConfig);
    }
    return axios.instance;
  }
  // 中间件
  _(type = "GET", url, options = {}) {
    let globalthis = api_utils_index.isUndefined(common_vendor.index) ? common_vendor.wx$1 : common_vendor.index;
    return new Promise((resolve, reject) => {
      globalthis.request({
        method: type,
        url: this.baseConfig.baseUrl + url,
        ...options,
        success: (res) => {
          resolve(res.data);
        },
        fail: (err) => {
          reject(err);
        }
      });
    });
  }
  // * 常用请求方法封装 >> url 请求地址 >> data 请求的参数 >> option 请求的其它配置
  get(url, data, option) {
    return this._("GET", url, { data, ...option });
  }
  post(url, data, option) {
    return this._("POST", url, { data, ...option });
  }
  put(url, data, option) {
    return this._("PUT", url, { data, ...option });
  }
}
const c1 = axios.create({ baseUrl: "222" });
const c2 = axios.create({ baseUrl: "222" });
console.log(c1 === c2);
console.log(ABC);
