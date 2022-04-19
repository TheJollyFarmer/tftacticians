<template>
  <div class="no-history-head">
    <VImage
      :image="summoner.profileIconId"
      class="portrait"
      dimension="96"
      error="summoner"
      external
      url/>
    <h2>
      {{ summoner.name }} 
      <span>#{{ region }}</span>
    </h2>
  </div>
</template>

<script>
import VImage from "@/components/utility/VImage";

export default {
  name: "NoHistoryHead",

  components: { VImage },

  props: {
    summoner: {
      type: Object,
      required: true
    },

    region: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.no-history-head {
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 1.45em;
  margin-bottom: 1rem;

  :deep(.image) {
    margin-bottom: 1rem;
  }

  span {
    opacity: 0.8;
    text-transform: uppercase;
  }
}
</style>
