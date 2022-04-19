import { isAmericas, isAsia, isEurope } from "@/utils/regions";

export default {
  getContinent: ({ form }) => {
    if (isEurope().includes(form.region)) return "europe";
    if (isAmericas().includes(form.region)) return "americas";
    if (isAsia().includes(form.region)) return "asia";
  },
  getMatchCount: state => state.ranked.wins + state.ranked.losses,
  getPayload: ({ form }, getters) => ({
    name: form.name,
    region: getters.getRegion
  }),
  getRegion: ({ regions, form }) => regions[form.region].value
};
