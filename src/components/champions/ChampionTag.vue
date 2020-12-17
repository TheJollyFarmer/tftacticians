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
    },

    type: {
      type: String,
      required: true
    }
  },

  methods: {
    closeEvent() {
      this.$emit("close", {
        filter: this.option,
        type: this.type.toUpperCase()
      });
    }
  }
};
</script>
