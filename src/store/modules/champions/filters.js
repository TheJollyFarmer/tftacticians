export function champFilter(filters, champions) {
  return champions.filter(champion =>
    Object.keys(filters).every(filter => {
      return !hasLength(filters[filter])
        ? true
        : isTraitFilter(filter)
          ? traitFilter(filters[filter], champion)
          : costFilter(filters, champion);
    })
  );
}

function isTraitFilter(filter) {
  return filter === "origin" || filter === "class";
}

function costFilter(filter, champion) {
  return filter.cost.includes(champion.cost);
}

function traitFilter(filter, champion) {
  return filter.some(trait => champion.traits.includes(trait));
}

function hasLength(filter) {
  return filter.length;
}
