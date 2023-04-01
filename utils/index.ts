export function isFunction(value : any) : value is Function {
  return typeof value === "function"
}

export function isUndefined(value : any) : value is undefined {
  return typeof value === "undefined"
}

export function deepMerge<T extends Record<keyof any, any>>(target : T, source : T) : T {
  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      const targetValue = target[key];
      const sourceValue = source[key];
      if (typeof targetValue === 'object' && typeof sourceValue === 'object') {
        target[key] = deepMerge(targetValue, sourceValue);
      } else {
        target[key] = sourceValue;
      }
    }
  }
  return target;
}