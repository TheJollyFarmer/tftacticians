<template>
  <Component
    :is="component"
    v-if="type"
    v-show="display"
    ref="popover"
    :name="name"
    class="popover box"
    @mouseenter.native="setPopoverActive"
    @mouseleave.native="clearPopoverActive"/>
</template>

<script>
import ChampionCard from "@/components/champions/card/ChampionCard";
import ItemCard from "@/components/items/ItemCard";
import TraitBadgeCard from "@/components/traits/TraitBadgeCard";
import TransitionFade from "@/components/transitions/TransitionFade";
import { mapActions, mapState } from "vuex";

export default {
  name: "Popover",

  components: {
    ChampionCard,
    ItemCard,
    TraitBadgeCard,
    TransitionFade
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
      gap: 10
    };
  },

  computed: {
    ...mapState({
      display: state => state.popover.display,
      type: state => state.popover.type,
      name: state => state.popover.name,
      el: state => state.popover.el
    }),

    component() {
      return `${this.type}Card`;
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
      this.offsetY = this.popover.height - window.pageYOffset;
      this.posX = this.content.x + this.content.width / 2;
      this.posY = this.content.y - this.offsetY - this.gap;

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
      this.posY = this.posY - this.popover.y + this.gap;
    },

    isOverContent() {
      return this.popover.bottom + this.gap >= this.content.y;
    },

    repositionYBottom() {
      this.posY = this.content.bottom + this.gap + window.pageYOffset;
    }
  }
};
</script>

<style lang="scss" scoped>
.popover {
  position: absolute;
  transform: translateX(-50%);
  z-index: 50;
}
</style>
