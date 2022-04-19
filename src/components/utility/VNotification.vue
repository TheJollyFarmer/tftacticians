<template>
  <div class="note layer">
    <VFavicon :icon="icon"/>
    <div>
      <strong v-text="title"/>
      <p>
        <slot>{{ text }}</slot>
      </p>
    </div>
    <slot name="noteRight"/>
  </div>
</template>

<script>
import VFavicon from "@/components/utility/VFavicon";

export default {
  name: "VNotification",

  components: { VFavicon },

  props: {
    title: {
      type: String,
      required: false,
      default: ""
    },

    text: {
      type: String,
      required: false,
      default: ""
    },

    icon: {
      type: String,
      required: false,
      default: "exclamation"
    }
  }
};
</script>

<style lang="scss" scoped>
.note {
  border-radius: 5px;
  box-shadow: $shadow;
  display: grid;
  grid-template-columns: 0.2fr auto auto;
  margin-bottom: $spacing-large;

  strong {
    color: var(--colour);
  }

  .icon {
    background-color: $primary;
    border-radius: $radius;
    color: $white;
    font-size: 1.5em;
    height: 40px;
    margin-right: $spacing;
    width: 40px;
  }

  p {
    font-size: 0.9em;
    margin-bottom: 0;
    overflow-wrap: break-word;
  }
}
</style>
