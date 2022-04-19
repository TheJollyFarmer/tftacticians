<template>
  <VPage title="leaderboard">
    <template #aside>
      <LeaderboardFilters/>
    </template>
    <LeaderboardPaginated/>
  </VPage>
</template>

<script>
import LeaderboardFilters from "@/components/leaderboard/LeaderboardFilters";
import LeaderboardPaginated from "@/components/leaderboard/LeaderboardPaginated";
import VPage from "@/components/utility/VPage";
import { mapActions } from "vuex";

export default {
  name: "LeaderboardView",

  components: {
    LeaderboardPaginated,
    LeaderboardFilters,
    VPage
  },

  beforeRouteEnter({ params, query }, from, next) {
    next(vm => vm.setForm({ ...params, ...query }));
  },

  beforeRouteUpdate({ params, query }) {
    this.setForm({ ...params, ...query });

    if (!Object.keys(query).length) this.getLeaderboard();
  },

  created() {
    this.getLeaderboard();
  },

  methods: mapActions("leaderboard", ["getLeaderboard", "setForm"])
};
</script>
