<template>
  <VFilters>
    <ChampionSearch @onClick="resetEvent"/>
    <Filter
      v-for="(filter, index) in filters"
      :key="index"
      v-bind="filter.props"
      :active="active"
      :class="$style['champion-filter']"
      checkbox>
      <template #link="{ option }">
        <a @click="filter.click(option)">
          <component
            :is="filter.component"
            v-bind="filter.prop(option)"/>
        </a>
      </template>
    </Filter>
  </VFilters>
</template>

<script>
import ChampionFilters from "@/mixins/ChampionFilters";
import ChampionSearch from "@/components/champions/filters/ChampionSearch";
import Filter from "@/components/leaderboard/Filter";
import VFilters from "@/components/utility/VFilters";
import VRouterLink from "@/components/utility/VRouterLink";
import { clone, remove } from "@/utils/helpers";
import { mapState } from "vuex";

export default {
  name: "ChampionsFilters",

  components: {
    ChampionSearch,
    Filter,
    VFilters,
    VRouterLink
  },

  mixins: [ChampionFilters],

  emits: ["reset"],

  computed: mapState("champions", { active: state => state.filters }),

  methods: {
    resetEvent() {
      this.$emit("reset");
    },

    pushQuery(model, option) {
      let query = clone(this.$route.query);
      let param = query[model];

      param.includes(option) ? remove(param, option) : param.push(option);

      this.$router.push({ query });
    }
  }
};
</script>

<style lang="scss" module>
.champion-filter {
  padding: 0 !important;

  a {
    padding: 1rem;
    width: 100%;
  }
}
</style>
