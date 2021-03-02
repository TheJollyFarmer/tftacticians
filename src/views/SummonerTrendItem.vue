<template>
  <article class="summoner-trend-item">
    <span> #{{ position }} </span>
    <component
      :is="component"
      :id="name"
      :name="name"
      starred/>
    <span> {{ name }} </span>
    <div class="trend-item-stats">
      <p v-text="frequency"/> 
      <p v-text="total"/>
    </div>
  </article>
</template>

<script>
import VLevel from "@/components/utility/VLevel";

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

    component: {
      type: Object,
      required: true
    }
  },

  computed: {
    frequency() {
      return ((this.count / 20) * 100).toPrecision(2) + "%";
    },

    total() {
      return this.count + " Games";
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

  span {
    color: $black;
    font-size: 0.8em;
    font-weight: bold;
    margin-right: 0.5em;

    &:last-of-type {
      color: $grey-dark;
      margin-left: 0.5em;
    }
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

  ::v-deep.trait-badge {
    margin-left: 0.2em !important;
  }
}
</style>
