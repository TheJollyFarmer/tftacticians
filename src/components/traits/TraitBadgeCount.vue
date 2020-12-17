<template>
  <div class="trait-badge-count">
    {{ count }}
  </div>
</template>

<script>
export default {
  name: "TraitBadgeCount",

  props: {
    count: {
      type: Number,
      required: true
    }
  }
};
</script>

<style scoped>
.trait-badge-count {
  align-items: center;
  border: 2px solid black;
  border-left: none;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  color: white;
  display: flex;
  font-size: 0.75em;
  font-weight: bold;
  height: 1.25rem;
  justify-content: center;
  line-height: 1rem;
  left: calc(100% - 1px);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 1.125rem;
  z-index: 4;
}
</style>
