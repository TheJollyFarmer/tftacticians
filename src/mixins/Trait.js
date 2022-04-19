import { mapGetters } from "vuex";

export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },

  computed: {
    ...mapGetters("champions/traits", ["getTrait"]),

    trait() {
      return this.getTrait(this.id);
    }
  }
};
