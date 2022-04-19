<template>
  <div class="item-stat">
    <StatImage
      :stat="stat"
      dimension="18"/>
    <span> +{{ stat.value }} </span>
  </div>
</template>
<script>
import StatImage from "@/components/StatImage";

export default {
  name: "ItemCardStat",

  components: { StatImage },

  props: {
    stat: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.item-stat {
  align-items: center;
  display: flex;

  :deep(.image) {
    margin-right: 0.3em;
  }
}
</style>
