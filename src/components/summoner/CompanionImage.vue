<template>
  <div class="companion-image">
    <VImage
      :image="image"
      :dimension="dimension"
      external/>
  </div>
</template>

<script>
import VImage from "@/components/utility/VImage";

export default {
  name: "CompanionImage",

  components: { VImage },

  props: {
    image: {
      type: String,
      required: true
    },

    dimension: {
      type: String,
      required: false,
      default: "46"
    }
  }
};
</script>

<style lang="scss" scoped>
:deep(img) {
  height: 40px;
  object-fit: cover;
  width: 46px;
}
</style>
