export function isFunction(value:any):value is Function {
  return typeof value === "function"
}

export function isUndefined(value:any):value is undefined{
  return typeof value === "undefined"
}