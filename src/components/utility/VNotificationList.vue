<template>
  <div class="notification-list">
    <VFavicon
      v-for="item in items"
      :key="item"
      :class="['notification-select', isActive(item)]"
      icon="circle"
      @click="setEvent(item)"/>
  </div>
</template>

<script>
import VFavicon from "@/components/utility/VFavicon";

export default {
  name: "VNotificationList",

  components: { VFavicon },

  props: {
    items: {
      type: Number,
      required: true
    },

    active: {
      type: Number,
      required: true
    }
  },

  emits: ["set"],

  methods: {
    isActive(item) {
      return { "is-active": item === this.active };
    },

    setEvent(item) {
      this.$emit("set", item);
    }
  }
};
</script>

<style lang="scss" scoped>
.notification-list {
  margin: 0 auto;

  .notification-select {
    transition: color $hover-in;

    &.is-active,
    &:hover {
      color: var(--primary);
      transition: color $hover-out;
    }
  }
}
</style>
