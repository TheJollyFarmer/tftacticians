import { isAmericas, isAsia, isEurope } from "@/utils/regions";

export default {
  getContinent: state => {
    switch (state.region) {
      case isEurope():
        return "europe";

      case isAmericas():
        return "americas";

      case isAsia():
        return "asia";
    }
  },
  getMatchCount: state => state.ranked.wins + state.ranked.losses
};
