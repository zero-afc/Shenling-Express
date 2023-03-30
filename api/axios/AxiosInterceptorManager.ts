import { ResolvedFunc, RejectedFunc, AxiosInterceptor } from '../interface';
import { isUndefined } from "../../utils"

interface Interceptor<T> {
  resolved : ResolvedFunc<T>
  rejected : RejectedFunc | undefined
}

export default class AxiosInterceptorManager<T = any> implements AxiosInterceptor<T> {
  private interceptors : Array<Interceptor<T>>
  constructor() {
    this.interceptors = []
  }

  use(resolved : ResolvedFunc<T>, rejected ?: RejectedFunc) {
    this.interceptors.push({ resolved, rejected })
  }

  forEach(callback : (interceptor : Interceptor<T>) => void) {
    this.interceptors.forEach(interceptor => {
      if (!isUndefined(interceptor)) {
        callback(interceptor)
      }
    })
  }
}