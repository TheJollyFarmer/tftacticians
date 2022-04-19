import leagues from "@/constants/leagues";
import regions from "@/constants/regions";

export default {
  data: [],
  loading: false,
  form: {
    region: "euw",
    league: "challenger"
  },
  pagination: {
    page: 1,
    perPage: 25
  },
  regions,
  leagues
};
