<template>
  <div class="item-stat">
    <StatImage
      :stat="stat"
      dimension="18"/>
    <span> +{{ stat.value }} </span>
  </div>
</template>
<script>
import StatImage from "@/components/champion/StatImage";

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
  line-height: 18px;
  margin: 0 0.6em 0 0;

  .image {
    margin-right: 0.3em;
  }

  span {
    margin-top: 0.12em;
  }
}
</style>
