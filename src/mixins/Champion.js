import BorderColour from "@/mixins/BorderColour";
import Popover from "@/mixins/Popover";
import { mapGetters } from "vuex";

export default {
  mixins: [BorderColour, Popover],

  computed: {
    ...mapGetters({
      set: "getActiveImageSet",
      getChampionName: "champions/getChampionName"
    }),

    view() {
      return {
        name: "champion",
        params: { champion: this.name }
      };
    },

    directory() {
      return `champions/${this.set}/icons`;
    },

    name() {
      return this.getChampionName(this.id);
    }
  }
};
