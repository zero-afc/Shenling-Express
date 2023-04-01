export type RequestType = "GET" | "POST" | "PUT" | "DELETE"

export interface BaseConfig {
  baseUrl ?: string
  timeout ?: number
  header ?: any
}

export namespace Http {
  export interface Config {
    url : string
    method ?: RequestType
    header ?: Record<string, any>
  }
  export interface BaseResponse<T = any> {
    cookies : Array<any>
    data : T
    errMsg : string
    header : Record<string, any>
    statusCode : number
  }
  export type Option = Partial<{
    dataType : string
    responseType : string
  } & Pick<Config, "header">>
  export interface OverallOptions<T> extends Option {
    data ?: T
  }
}

// 拦截器
export interface AxiosInterceptor<T> {
  use(resolved : ResolvedFunc<T>, rejected ?: RejectedFunc) : void
}
export interface ResolvedFunc<T> {
  (val : T) : T | Promise<T>
}
export interface RejectedFunc {
  (val : any) : any
}