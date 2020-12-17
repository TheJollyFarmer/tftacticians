export function normalise(object, id) {
  let array = JSON.parse(JSON.stringify(object));

  return array.reduce(
    (obj, item) => ({
      ...obj,
      ...{ [item[id]]: item }
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
