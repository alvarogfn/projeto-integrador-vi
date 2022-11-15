export const colors = [
  "#012340",
  "#023535",
  "#025939",
  "#027333",
  "#03A63C",
  "#04D939",
  "#015958",
  "#008F8C",
  "#0CABA8",
  "#0FC2C0",
];

export function accessNestedProperty<T>(object: T, keys: string) {
  const arrKeys = keys.split(".");
  if (arrKeys.length === 1) {
    const property = object[arrKeys[0]];
    if (property === undefined) throw new Error("not found");
    return property;
  }
  const key = arrKeys.shift();
  if (key === undefined) return object;
  return accessNestedProperty(object[key], arrKeys.join("."));
}

export function groupObjArrayByProperty<T>(data: T[], properties: string) {
  return data.reduce((group, obj) => {
    const property = accessNestedProperty(obj, properties);
    if (group[property] === undefined) {
      group[property] = [obj];
      return group;
    }
    group[property].push(obj);
    return group;
  }, {} as { [k: string]: T[] });
}

export function countObjArrayByProperty<T>(
  data: { [key: string]: T[] },
  properties: string
) {
  const obj: { [k: string]: number } = {};
  Object.keys(data).forEach((key) => {
    obj[key] = data[key].reduce((acc, item) => {
      const property: number = accessNestedProperty(item, properties);
      return +(acc + property).toFixed(2);
    }, 0);
  });

  return obj;
}
