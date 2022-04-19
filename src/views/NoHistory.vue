<template>
  <VPage is-full-width>
    <article class="no-history surface">
      <NoHistoryHead
        :summoner="summoner"
        :region="region"/>
      <NoHistoryBody/>
    </article>
  </VPage>
</template>

<script>
import NoHistoryBody from "@/views/NoHistoryBody";
import NoHistoryHead from "@/views/NoHistoryHead";
import VPage from "@/components/utility/VPage";

export default {
  name: "NoHistory",

  components: {
    NoHistoryBody,
    NoHistoryHead,
    VPage
  },

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
.section {
  align-items: center;
  display: flex;
  height: $screen-height;

  .no-history {
    justify-content: center;
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 320px;
  }
}
</style>
