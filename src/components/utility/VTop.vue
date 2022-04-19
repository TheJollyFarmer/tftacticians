<template>
  <VFavicon
    icon="chevron-circle-up"
    @click="toTop"/>
</template>

<script>
import VFavicon from "@/components/utility/VFavicon";

export default {
  name: "VTop",

  components: { VFavicon },

  methods: {
    toTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
};
</script>

<style lang="scss" scoped>
.icon {
  background-color: var(--nav);
  color: var(--colour);
  font-size: 2.5rem;
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, -50%);
  transition: all $hover-in;

  &:hover {
    filter: brightness(90%);
    transition: all $hover-out;
  }
}
</style>
