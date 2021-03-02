import BorderColour from "@/mixins/BorderColour";
import Popover from "@/mixins/Popover";
import { mapGetters } from "vuex";

export default {
  mixins: [BorderColour, Popover],

  computed: {
    ...mapGetters({
      set: "getActiveSet",
      getChampionName: "champions/getChampionName"
    }),

    view() {
      return {
        name: "Champion",
        params: {
          champion: this.name,
          id: this.id
        }
      };
    },

    directory() {
      return `champions/${this.set}/icons`;
    },

    name() {
      return this.getChampionName(this.id);
    }
  },

  methods: {
    goToChampionView() {
      this.$router.push(this.view).then(() => this.resetPopover());
    }
  }
};
