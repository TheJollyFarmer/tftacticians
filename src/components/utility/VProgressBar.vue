<template>
  <span :class="['progress-bar', isActive]"/>
</template>

<script>
export default {
  name: "VProgressBar",

  props: {
    progress: {
      type: Number,
      required: true
    },

    position: {
      type: Number,
      required: true
    }
  },

  computed: {
    isActive() {
      return { "is-active": this.progress >= this.position };
    }
  }
};
</script>
