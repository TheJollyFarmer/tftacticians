<template>
  <div class="note">
    <VFavicon :icon="icon"/>
    <p>
      {{ text }}
      <slot/>
    </p>
  </div>
</template>

<script>
import VFavicon from "@/components/utility/VFavicon";

export default {
  name: "VNotification",

  components: { VFavicon },

  props: {
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
  border: 2px solid $primary;
  border-radius: 5px;
  box-shadow: $shadow;
  display: grid;
  grid-template-columns: 0.2fr 3fr;
  margin-bottom: 1em;

  .icon {
    background-color: $primary;
    color: white;
    font-size: 1.5em;
    height: 100%;
    width: 100%;
  }

  p {
    font-size: 0.9em;
    margin-bottom: 0;
    padding: 0.7em;
    overflow-wrap: break-word;
  }
}
</style>
