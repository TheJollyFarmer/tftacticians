import { sort } from "@/utils/helpers";

export const pagination = ({ data, pagination }) => {
  let ordered = sort(data, "lp");

  return ordered.slice(startPage(pagination), endPage(pagination));
};

export const totalPages = ({ data, pagination }) =>
  Math.ceil(data.length / pagination.perPage);

export const payload = ({ form, regions }) => ({
  league: form.league,
  region: regions[form.region].value
});

const startPage = ({ page, perPage }) => (page - 1) * perPage;
const endPage = pagination => startPage(pagination) + pagination.perPage;
