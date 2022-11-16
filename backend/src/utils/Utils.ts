export const colors = [
  "hsla(251, 100%, 10%, 1)",
  "hsla(251, 100%, 20%, 1)",
  "hsla(251, 100%, 30%, 1)",
  "hsla(251, 100%, 40%, 1)",
  "hsla(251, 100%, 50%, 1)",
  "hsla(251, 100%, 60%, 1)",
  "hsla(251, 100%, 70%, 1)",
  "hsla(251, 100%, 80%, 1)",
  "hsla(251, 100%, 90%, 1)",
  "#131A40",
  "#273273",
  "#015958",
  "#0727ED",
  "#4E64A6",
  "#829FD9",
  "#129CE0",
  "#008F8C",
  "#0CABA8",
  "#0FC2C0",
  "#07E7F7",
  "#07EDBD",
  "#F20530",
  "#9E0507",
  "#730202",
  "#400101",
  "#260101",
  "#012340",
  "#023535",
  "#02735E",
  "#025939",
  "#027333",
  "#03A63C",
  "#04D939",
  "#F2E205",
  "#F2B705",
  "#F28705",
  "#F20505",
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
