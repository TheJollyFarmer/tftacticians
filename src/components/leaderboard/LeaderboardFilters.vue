<template>
  <VFilters>
    <Filter
      v-for="(filter, index) in filters"
      :key="index"
      v-slot="{ option }"
      :active="filter.active"
      :options="filter.options"
      :label="filter.label"
      :model="filter.model"
      :class="filter.class">
      <component
        :is="filter.component"
        v-bind="filter.props(option)"/>
    </Filter>
  </VFilters>
</template>

<script>
import Filter from "@/components/leaderboard/Filter";
import VFilters from "@/components/utility/VFilters";
import { mapState } from "vuex";
import { defineAsyncComponent } from "vue";

export default {
  name: "LeaderboardFilters",

  components: {
    Filter,
    VFilters
  },

  computed: {
    ...mapState("leaderboard", ["regions", "leagues", "form"]),

    filters() {
      return {
        league: {
          label: "leagues",
          model: "league",
          active: this.form.league,
          options: this.leagues,
          class: this.$style.leagues,
          component: defineAsyncComponent(() =>
            import("@/components/leaderboard/LeagueImage")
          ),
          props: value => ({ league: value, dimension: "48" })
        },

        region: {
          label: "regions",
          model: "region",
          active: this.form.region,
          options: Object.keys(this.regions),
          class: this.$style.regions,
          component: defineAsyncComponent(() =>
            import("@/components/leaderboard/RegionImage")
          ),
          props: value => ({ region: value })
        }
      };
    }
  }
};
</script>

<style lang="scss" module>
.leagues {
  grid-template-columns: repeat(3, 30%);
  grid-gap: 1em;

  > * {
    align-items: center;
    background-color: var(--hover);
    border-radius: 5px;
    box-shadow: var(--shadow);
    padding: 1em;
    display: flex;
    justify-content: center;
    transition: $hover-in;

    &:hover {
      transition: $hover-out;
    }
  }
}

.regions {
  align-items: center;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(95px, 1fr));
  padding: 0.5em 1em;
}
</style>
