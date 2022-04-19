import { mapActions } from "vuex";

export default {
  props: {
    popover: {
      type: Boolean,
      required: false,
      default: true
    }
  },

  methods: {
    ...mapActions({
      display: "displayPopover",
      hide: "hidePopover"
    }),

    displayPopover() {
      if (this.popover) {
        this.display({
          id: this.id,
          type: this.view.name,
          el: this.$el
        });
      }
    },

    hidePopover() {
      if (this.popover) this.hide();
    }
  }
};
