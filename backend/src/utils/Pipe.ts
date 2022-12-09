export function pipe(value: any) {
  return (...functions: Function[]) => {
    return functions.reduceRight((currentValue, currentFunction) => {
      return currentFunction(currentValue);
    }, value)
  }
}