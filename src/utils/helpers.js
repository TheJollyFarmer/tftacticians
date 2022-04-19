import dataStructures from "@/utils/dataStructures";

export const normalise = (array, id, model) => {
  return model
    ? array.map(item => dataStructures[model](item))
    : array.reduce((obj, item) => ({ ...obj, [item[id]]: item }), {});
};

export const getKeys = (array, prop = "id") => array.map(item => item[prop]);

export const hasLength = data =>
  Array.isArray(data) ? data.length : Object.keys(data).length;

export const getPath = (obj, path) =>
  path.split("/").reduce((obj, name) => obj[name], obj);

export const remove = (array, value) => array.splice(array.indexOf(value), 1);

export const aggregate = array =>
  array.reduce((pre, cur) => ((pre[cur] = ++pre[cur] || 1), pre), {});

export const sum = array => array.reduce((sum, num) => sum + num, 0);

export const average = array => (sum(array) / array.length).toPrecision(2);

export const curate = (object, count = 5) => {
  return Object.entries(object)
    .sort((a, b) => b[1] - a[1])
    .slice(0, count);
};

export const sort = (object, prop = "time", sort = "desc") => {
  return Object.values(object).sort(
    (a, b) => (sort === "desc" ? b[prop] - a[prop] : a[prop] - b[prop])
  );
};

export const rate = (num, den, pre = 2) => ((num / den) * 100).toPrecision(pre);

export const hexToRGBA = (hex, a) => {
  let r = "0x" + hex[1] + hex[2];
  let g = "0x" + hex[3] + hex[4];
  let b = "0x" + hex[5] + hex[6];

  return "rgba(" + +r + "," + +g + "," + +b + "," + a + ")";
};

export const toTitleCase = words => {
  return words
    .split(/[ -]+/)
    .map(word => word[0].toUpperCase() + word.substring(1))
    .join(" ");
};

export const hyphenise = words =>
  words
    .replace(/%20| /g, "-")
    .replace(/['.]/g, "")
    .toLowerCase();

export const clone = object => JSON.parse(JSON.stringify(object));
