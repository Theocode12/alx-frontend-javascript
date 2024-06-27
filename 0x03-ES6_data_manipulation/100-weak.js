export const weakMap = new WeakMap();
export function queryAPI(obj) {
  if (weakMap.get(obj) >= 5) throw new Error('Endpoint load is high');
  weakMap.set(obj, weakMap.get(obj) + 1 || 1);
}
