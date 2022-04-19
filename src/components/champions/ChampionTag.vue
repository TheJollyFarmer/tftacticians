<template>
  <div class="control">
    <VTag
      :key="option"
      attached
      closeable
      @close="closeEvent">
      {{ option }}
    </VTag>
  </div>
</template>

<script>
import VTag from "@/components/utility/VTag";

export default {
  name: "ChampionTag",

  components: { VTag },

  props: {
    option: {
      type: [Number, String],
      required: true
    }
  },

  emits: ["close"],

  methods: {
    closeEvent() {
      this.$emit("close", this.option);
    }
  }
};
</script>

<style lang="scss" scoped>
.control {
  margin: 0 0.75rem 0.5em 0;

  .tags {
    flex-wrap: nowrap;
  }
}
</style>
