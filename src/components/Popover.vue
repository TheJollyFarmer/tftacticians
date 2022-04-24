<template>
  <Component
    :is="component"
    v-if="type"
    :id="id"
    ref="popover"
    :class="['popover box', { active: display }]"
    @mouseenter="setPopoverActive"
    @mouseleave="clearPopoverActive"/>
</template>

<script>
import ChampionCard from "@/components/champions/card/ChampionCard";
import ItemCard from "@/components/items/ItemCard";
import TraitCard from "@/components/traits/TraitCard";
import { mapActions, mapState } from "vuex";

export default {
  name: "Popover",

  components: {
    ChampionCard,
    ItemCard,
    TraitCard
  },

  data() {
    return {
      popEl: undefined,
      content: undefined,
      popover: undefined,
      posX: undefined,
      posY: undefined,
      offsetY: undefined,
      scrollBar: 20,
      gap: 10,
      nav: 56
    };
  },

  computed: {
    ...mapState({
      display: state => state.popover.display,
      type: state => state.popover.type,
      id: state => state.popover.id,
      el: state => state.popover.el
    }),

    component() {
      return `${this.type.replace(/s$/, "")}Card`;
    }
  },

  watch: {
    el() {
      this.positionPopover();
    }
  },

  methods: {
    ...mapActions(["setPopoverActive", "clearPopoverActive"]),

    positionPopover() {
      this.content = this.el.getBoundingClientRect();

      this.$nextTick(() => {
        this.setVariables()
          .setPosition()
          .setVariables()
          .setPosition()
          .repositionIfOutsideWindow()
          .setPosition();
      });
    },

    setVariables() {
      this.popEl = this.$refs.popover.$el;
      this.popover = this.popEl.getBoundingClientRect();
      this.offsetY = this.popover.height - window.scrollY;
      this.posX = this.content.x + this.content.width / 2;
      this.posY = this.content.y - this.offsetY - this.gap - this.nav;

      return this;
    },

    setPosition() {
      this.popEl.style.left = this.posX + "px";
      this.popEl.style.top = this.posY + "px";

      return this;
    },

    repositionIfOutsideWindow() {
      this.isOutsideWindowX();
      this.isOutsideWindowY();

      return this;
    },

    isOutsideWindowX() {
      if (this.popover.x < 0) this.repositionXLeft();
      if (this.isOutsideRight()) this.repositionXRight();
    },

    isOutsideRight() {
      return (
        this.popover.x + this.popover.width + this.scrollBar > window.innerWidth
      );
    },

    repositionXLeft() {
      this.posX = this.posX - this.popover.x + this.gap;
    },

    repositionXRight() {
      this.posX = this.posX - this.offsetX() - this.scrollBar;
    },

    offsetX() {
      return this.popover.x + this.popover.width - window.innerWidth;
    },

    isOutsideWindowY() {
      if (this.popover.y <= 0) {
        this.repositionYTop();
        if (this.isOverContent()) {
          this.repositionYBottom();
        }
      }
    },

    repositionYTop() {
      this.posY = this.posY - this.popover.y + this.gap + this.nav;
    },

    isOverContent() {
      return this.popover.bottom + this.gap >= this.content.y;
    },

    repositionYBottom() {
      this.posY = this.content.bottom + this.gap + window.scrollY - this.nav;
    }
  }
};
</script>

<style lang="scss" scoped>
.popover {
  border: 1px solid var(--border);
  border-radius: $radius;
  color: var(--colour);
  opacity: 0;
  padding: 0;
  position: absolute;
  transform: translateX(-50%);
  transition: 0.2s;
  transition-property: background-color, color, opacity;
  z-index: -10;

  &.active {
    opacity: 1;
    z-index: 50;
  }
}
</style>
