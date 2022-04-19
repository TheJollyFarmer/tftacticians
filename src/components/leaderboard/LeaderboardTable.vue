<template>
  <VTable v-if="leaderboard.length">
    <VTHead :headers="headers"/>
    <VTBody
      indexed
      :data="leaderboard"
      c-key="name">
      <template #index="{ index }">
        {{ getRank(index) }}
      </template>
      <template #default="{ col }">
        <LeagueImage
          v-if="col === 'tier'"
          :league="league"
          caption/>
      </template>
    </VTBody>
  </VTable>
  <VError v-else/>
</template>

<script>
import headers from "@/constants/leaderboard.json";
import VError from "@/components/utility/VError";
import LeagueImage from "@/components/leaderboard/LeagueImage";
import VTable from "@/components/utility/VTable";
import VTBody from "@/components/utility/VTBody";
import VTHead from "@/components/utility/VThead";
import { mapState } from "vuex";

export default {
  name: "LeaderboardTable",

  components: {
    LeagueImage,
    VError,
    VTable,
    VTBody,
    VTHead
  },

  props: {
    leaderboard: {
      type: Array,
      required: true
    }
  },

  data() {
    return { headers };
  },

  computed: mapState("leaderboard", {
    league: state => state.form.league,
    page: state => state.pagination.page,
    perPage: state => state.pagination.perPage
  }),

  methods: {
    getRank(index) {
      return index + 1 + (this.page - 1) * this.perPage;
    }
  }
};
</script>

<style lang="scss" scoped>
thead {
  position: relative;
  z-index: 10;
}

:deep(td:nth-child(2)) {
  text-align: left;
  font-weight: bold;
  width: 213px;
}
</style>
