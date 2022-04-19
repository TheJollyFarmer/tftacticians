<template>
  <div class="region-image">
    <VImage
      :image="region"
      dir="regions"
      dimension="36"/>
    <span v-text="region"/>
  </div>
</template>

<script>
import VImage from "@/components/utility/VImage";

export default {
  name: "RegionImage",

  components: { VImage },

  props: {
    region: {
      type: String,
      required: true
    }
  }
};
</script>
<style lang="scss" scoped>
.region-image {
  align-items: center;
  color: var(--colour);
  display: flex;
  text-transform: uppercase;
  width: 95px;

  :deep(.image) {
    background-color: $black;
    border-color: var(--colour);
    margin-right: $spacing;
    overflow: hidden;

    img {
      transform: translateY(-12%) scale(0.8);
    }
  }
}
</style>
