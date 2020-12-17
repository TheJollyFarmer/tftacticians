import BorderColour from "@/mixins/BorderColour";
import Popover from "@/mixins/Popover";

export default {
  mixins: [BorderColour, Popover],

  data() {
    return {
      view: {
        name: "Champion",
        params: { champion: this.name }
      }
    };
  },

  methods: {
    goToChampionView() {
      this.$router.push(this.view).then(() => this.resetPopover());
    }
  }
};
