<template>
  <VFavicon
    :class="'notification-' + type"
    :icon="'arrow-' + iconType"
    @click="changeEvent"/>
</template>

<script>
import VFavicon from "@/components/utility/VFavicon";

export default {
  name: "VNotificationNav",

  components: { VFavicon },

  props: {
    type: {
      type: String,
      required: false,
      default: "prev"
    }
  },

  emits: ["change"],

  computed: {
    iconType() {
      return this.type === "prev" ? "left" : "right";
    },

    newValue() {
      let current = this.$parent.$props.modelValue;
      let total = this.$parent.count;
      let prev = current === 1 ? total : current - 1;

      return this.type === "prev" ? prev : (current % total) + 1;
    }
  },

  methods: {
    changeEvent() {
      this.$emit("change", this.newValue);
    }
  }
};
</script>

<style lang="scss" scoped>
.notification-prev,
.notification-next {
  font-size: 1.4rem;

  &:hover {
    color: var(--primary);
    transition: color $hover-out;
  }
}
</style>
