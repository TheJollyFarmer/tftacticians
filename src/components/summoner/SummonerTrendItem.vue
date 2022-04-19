<template>
  <article class="summoner-trend-item">
    <span> #{{ position }} </span>
    <component
      :is="component"
      :id="name"
      :name="name"
      :starred="starCount"
      dimension="36"
      caption/>
    <div class="trend-item-stats">
      <p v-text="frequency"/> 
      <p v-text="total"/>
    </div>
  </article>
</template>

<script>
import VLevel from "@/components/utility/VLevel";
import { mapState } from "vuex";

export default {
  name: "SummonerTrendItem",

  components: { VLevel },

  props: {
    position: {
      type: Number,
      required: true
    },

    name: {
      type: String,
      required: true
    },

    count: {
      type: Number,
      required: true
    },

    starred: {
      type: Number,
      required: false,
      default: undefined
    },

    component: {
      type: Object,
      required: true
    }
  },

  computed: {
    ...mapState("summoner/matches", {
      matchCount: state => state.count + 1
    }),

    frequency() {
      return ((this.count / this.matchCount) * 100).toFixed(0) + "%";
    },

    total() {
      return this.count + " Games";
    },

    starCount() {
      return Math.round(this.starred / this.count);
    }
  }
};
</script>

<style lang="scss" scoped>
.summoner-trend-item {
  align-items: center;
  display: flex;
  height: 3.5em;
  margin: 0;
  padding: 0.5em 0;

  &:last-of-type {
    padding-bottom: 0;
  }

  span {
    font-size: 0.8em;
    font-weight: bold;
    margin-right: 0.5em;
  }

  .trend-item-stats {
    margin-left: auto;
    flex-shrink: 0;

    p {
      font-size: 0.8em;
      font-weight: bold;
      margin: 0;
      text-align: right;

      &:last-of-type {
        font-size: 0.75em;
        font-weight: normal;
      }
    }
  }

  :deep(.trait-badge) {
    margin-left: 0.2em !important;
  }
}
</style>
