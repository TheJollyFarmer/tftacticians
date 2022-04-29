<template>
  <VRouterLink
    :to="view"
    class="trait-badge"
    @mouseenter="displayPopover"
    @mouseleave="hidePopover">
    <div
      :style="background"
      :class="['badge-image', isSize, hasMargin]">
      <TraitImage
        :trait="trait.name"
        :dimension="imageSize"/>
      <div
        v-if="label"
        class="badge-count">
        {{ count }}
      </div>
    </div>
    <span
      v-if="caption"
      class="caption"
      v-text="trait.name"/>
  </VRouterLink>
</template>

<script>
import Popover from "@/mixins/Popover";
import Trait from "@/mixins/Trait";
import TraitImage from "@/components/traits/TraitImage";
import VRouterLink from "@/components/utility/VRouterLink";

export default {
  name: "TraitLink",

  components: { VRouterLink, TraitImage },

  mixins: [Popover, Trait],

  props: {
    caption: {
      type: Boolean,
      required: false,
      default: false
    },

    count: {
      type: Number,
      required: false,
      default: 2
    },

    size: {
      type: String,
      required: false,
      default: ""
    },

    label: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  computed: {
    view() {
      return {
        name: "traits",
        params: { type: this.type },
        hash: "#" + this.trait.name.toLowerCase()
      };
    },

    type() {
      return this.trait.type === "class" ? "classes" : "origins";
    },

    set() {
      return this.trait.sets.find(
        set => set.min === this.count || set.max === this.count
      );
    },

    style() {
      return this.set ? this.set.style : "is-grey";
    },

    background() {
      let image = `/assets/images/traits/styles/${this.style}.svg`;

      return { backgroundImage: "url(" + image + ")" };
    },

    imageSize() {
      return this.size === "small" ? "14" : this.size === "large" ? "24" : "16";
    },

    isSize() {
      return this.size ? "is-" + this.size : "";
    },

    hasMargin() {
      return { "has-margin": this.label };
    }
  }
};
</script>

<style lang="scss" scoped>
.trait-badge {
  align-items: center;
  cursor: pointer;
  display: flex;

  .badge-image {
    align-items: center;
    display: flex;
    height: 34px;
    justify-content: center;
    position: relative;
    width: 34px;

    &.has-margin {
      margin-right: 1.4em;

      &.is-large {
        margin-right: 2em;
      }

      &.is-small {
        margin-right: 1em;
      }
    }

    &.is-large {
      height: 40px;
      width: 40px;

      .badge-count {
        font-size: 0.85em;
      }
    }

    &.is-small {
      height: 26px;
      width: 26px;

      .badge-count {
        font-size: 0.7em;
      }
    }

    .trait-image {
      filter: brightness(0) saturate(100%);
    }

    .badge-count {
      align-items: center;
      background-color: var(--transparent);
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      box-shadow: $shadow;
      color: white;
      display: flex;
      font-size: 0.8em;
      font-weight: bold;
      height: 80%;
      justify-content: center;
      left: 60%;
      line-height: 1;
      padding-left: 32.5%;
      position: absolute;
      text-align: right;
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
    }
  }
}
</style>
