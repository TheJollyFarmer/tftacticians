import { mapActions } from "vuex";

export default {
  props: {
    hasPopover: {
      type: Boolean,
      required: false,
      default: true
    }
  },

  computed: {
    type() {
      return this.$options.name;
    }
  },

  methods: {
    ...mapActions({
      display: "displayPopover",
      hide: "hidePopover",
      resetPopover: "resetPopover"
    }),

    displayPopover() {
      if (this.hasPopover) {
        this.display({
          id: this.id,
          type: this.type,
          el: this.$el
        });
      }
    },

    hidePopover() {
      if (this.hasPopover) this.hide();
    }
  }
};
