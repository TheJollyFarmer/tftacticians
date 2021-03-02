import dataStructures from "@/utils/dataStructures";

export function normalise(object, id, model) {
  let array = JSON.parse(JSON.stringify(object));

  return array.reduce(
    (obj, item) => ({
      ...obj,
      ...{ [item[id]]: model ? dataStructures[model](item) : item }
    }),
    {}
  );
}

export function getKeys(array, id) {
  return array.map(item => item[id]);
}

export function hasLength(data) {
  return Array.isArray(data) ? data.length : Object.keys(data).length;
}

export function getPath(obj, path) {
  return path.split("/").reduce((obj, name) => obj[name], obj);
}

export function count(array) {
  return array.reduce(
    (prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev),
    {}
  );
}

export function sum(array) {
  return array.reduce((sum, el) => sum + el, 0);
}

export function average(array) {
  return (sum(array) / array.length).toPrecision(2);
}

export function sort(object, count = 5) {
  return Object.entries(object)
    .sort((a, b) => b[1] - a[1])
    .slice(0, count);
}

export function rate(numerator, denominator, precision = 2) {
  return ((numerator / denominator) * 100).toPrecision(precision);
}
