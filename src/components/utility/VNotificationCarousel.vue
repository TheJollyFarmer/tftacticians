<template>
  <div class="notification-nav">
    <VNotificationNav @change="updateEvent"/>
    <VNotificationList
      :items="count"
      :active="modelValue"
      @set="updateEvent"/>
    <VNotificationNav
      type="next"
      @change="updateEvent"/>
  </div>
</template>

<script>
import VNotificationList from "@/components/utility/VNotificationList";
import VNotificationNav from "@/components/utility/VNotificationNav";

export default {
  name: "VNotificationCarousel",

  components: {
    VNotificationList,
    VNotificationNav
  },

  props: {
    modelValue: {
      type: Number,
      default: 1
    },

    count: {
      type: Number,
      required: true
    }
  },

  emits: ["update:modelValue"],

  methods: {
    updateEvent(number) {
      this.$emit("update:modelValue", number);
    }
  }
};
</script>

<style lang="scss" scoped>
.notification-nav {
  align-items: center;
  display: flex;
  font-size: 0.8em;
  justify-content: center;
  margin-bottom: $spacing;
}
</style>
