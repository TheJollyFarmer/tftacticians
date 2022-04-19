export const byFilter = ({ filter, query }, { getOrigins, getClasses }) => {
  let traits = filter === "classes" ? getClasses : getOrigins;

  return !query.length ? traits : getByQuery(traits, query);
};

const getByQuery = (traits, query) =>
  traits.filter(trait => trait.name.toLowerCase().includes(query));
