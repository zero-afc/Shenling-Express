import { Http, BaseConfig, RequestType } from '../interface';
import { deepMerge, isFunction, isUndefined } from "../../utils";
import AxiosInterceptorManager from "./AxiosInterceptorManager"

interface Interceptors {
  request : AxiosInterceptorManager<Http.OverallOptions<unknown>>
  response : AxiosInterceptorManager<any>
}

export default class Axios {
  private static instance : Axios // Axios实例
  interceptors ! : Interceptors
  private constructor(public baseConfig : BaseConfig) {
    this.baseConfig = { header: {}, ...baseConfig }  // 全局配置
    this.interceptors = {
      request: new AxiosInterceptorManager(),
      response: new AxiosInterceptorManager()
    }
  }

  // 创建唯一实例
  public static create(baseConfig : BaseConfig) {
    if (!Axios.instance) {
      Axios.instance = new Axios(baseConfig)
    }
    return Axios.instance
  }

  // 待完成功能，请求拦截>>>请求之前的失败处理 + 响应拦截器 前后处理
  private request<T>(type : RequestType = "GET", url : string, options : any = {}) {
    
    this.interceptors.request.forEach((item) => {
      const { resolved, rejected } = item
      // 请求之前
      if (isFunction(resolved)) {
        options = resolved(deepMerge(this.baseConfig, options))
      }
      // 待处理：请求之前的失败
      // if (isFunction(rejected)) rejected({ message: "错误" }) 
    })

    let globalthis = isUndefined(uni) ? wx : uni
    return new Promise<T>((resolve, reject) => {
      globalthis.request({
        method: type,
        url: this.baseConfig.baseUrl + url,
        ...options,
        success: (res : Http.BaseResponse<T>) => { resolve(res.data) },
        fail: (err) => { reject(err) }
      })
    })
  }

  // * 常用请求方法封装 >> url 请求地址 >> data 请求的参数 >> option 请求的其它配置
  get<T>(url : string, data ?: Record<string, any>, option ?: Http.Option) {
    return this.request<T>("GET", url, { data, ...option })
  }
  post<T>(url : string, data ?: Record<string, any>, option ?: Http.Option) {
    return this.request<T>("POST", url, { data, ...option })
  }
  put<T>(url : string, data ?: Record<string, any>, option ?: Http.Option) {
    return this.request<T>("PUT", url, { data, ...option })
  }
}