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
      <template #default="{ col, value }">
        <LeagueImage
          v-if="col === 'tier'"
          :league="league"
          caption/>
        <a
          v-if="col === 'name'"
          @click="goToSummonerView(value)"
          v-text="value"/>
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
    perPage: state => state.pagination.perPage,
    region: state => state.form.region
  }),

  methods: {
    getRank(index) {
      return index + 1 + (this.page - 1) * this.perPage;
    },

    goToSummonerView(name) {
      this.$router.push({
        name: "summoner",
        params: { region: this.region, name }
      });
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
