export function itemFilter(filter, getters) {
  return getters.getArray.filter(
    item =>
      filter.type === "component"
        ? item.components
          ? item.components.includes(filter.item)
          : undefined
        : item.name === filter.item
  );
}

export function itemByKey(getters, key, type) {
  return getters.getArray.find(item => item[type] === key);
}
