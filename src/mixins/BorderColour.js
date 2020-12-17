import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("champions", ["getChampionCost"]),

    cost() {
      return this.getChampionCost(this.name);
    },

    borderColour() {
      return `is-${this.cost}-cost`;
    }
  }
};
