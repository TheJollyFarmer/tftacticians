<template>
  <div class="round-event-list-wrapper">
    <div class="round-event-list">
      <VImage
        v-for="(event, index) in events"
        :key="index"
        :label="event"
        :image="event"
        tooltip
        dimension="40"
        dir="rounds"/>
    </div>
  </div>
</template>

<script>
import VImage from "@/components/utility/VImage";

export default {
  name: "RoundEventList",
  components: { VImage },
  props: {
    events: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.round-event-list-wrapper {
  display: flex;
  min-width: 384px;

  .round-event-list {
    display: flex;
    position: relative;

    &:before {
      border-top: 2px solid var(--colour);
      content: "";
      display: block;
      height: 2px;
      position: absolute;
      top: 50%;
      width: 100%;
    }

    :deep(.image) {
      margin-right: 1em;

      &:last-of-type {
        margin-right: 0;
      }
    }
  }
}
</style>
