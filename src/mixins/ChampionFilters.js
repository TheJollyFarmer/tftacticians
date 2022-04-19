import costs from "@/constants/costs";
import { defineAsyncComponent as async } from "vue";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("champions", {
      types: "getFilterTypes",
      origins: "traits/getOrigins",
      classes: "traits/getClasses"
    }),

    filters() {
      return {
        cost: {
          props: {
            label: this.types.cost,
            options: costs
          },
          component: async(() => import("@/components/champions/ChampionCost")),
          click: opt => this.pushQuery(this.types.cost, opt.toLowerCase()),
          prop: option => ({ cost: option })
        },

        origin: {
          props: {
            label: this.types.origin,
            options: this.origins.map(origin => origin.name),
            expand: false
          },
          component: async(() => import("@/components/traits/TraitImage")),
          click: opt => this.pushQuery(this.types.origin, opt.toLowerCase()),
          prop: option => ({ trait: option, caption: true })
        },

        class: {
          props: {
            label: this.types.class,
            options: this.classes.map(trait => trait.name),
            expand: false
          },
          component: async(() => import("@/components/traits/TraitImage")),
          click: opt => this.pushQuery(this.types.class, opt.toLowerCase()),
          prop: option => ({ trait: option, caption: true })
        }
      };
    }
  }
};
