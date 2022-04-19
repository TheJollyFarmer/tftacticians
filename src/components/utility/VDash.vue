<template>
  <span class="dash"/>
</template>

<script>
export default {
  name: "VDash"
};
</script>

<style lang="scss" scoped>
.dash {
  border-top: 2px dashed var(--border);
  flex-grow: 2;
  margin: 0 0.5em;
}
</style>
