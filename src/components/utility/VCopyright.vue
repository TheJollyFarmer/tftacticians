<template>
  <p class="copyright">
    <span>&copy;</span> {{ copyright() }}
  </p>
</template>

<script>
export default {
  name: "VCopyright",

  methods: {
    copyright() {
      return "TFT " + new Date().getFullYear();
    }
  }
};
</script>

<style scoped>
.copyright span {
  font-family: "Helvetica", Arial, sans-serif;
}
</style>
