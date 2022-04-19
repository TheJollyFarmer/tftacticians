<template>
  <TransitionFade>
    <div v-if="!loading">
      <VPagination
        :page="page"
        :total="totalPages"/>
      <LeaderboardTable :leaderboard="leaderboard"/>
      <VPagination
        :page="page"
        :total="totalPages"
        class="is-bottom"/>
    </div>
    <VLoader v-else/>
  </TransitionFade>
</template>

<script>
import TransitionFade from "@/components/transitions/TransitionFade";
import LeaderboardTable from "@/components/leaderboard/LeaderboardTable";
import VLoader from "@/components/utility/VLoader";
import VPagination from "@/components/utility/pagination/VPagination";
import { mapGetters } from "vuex";

export default {
  name: "LeaderboardPaginated",

  components: {
    TransitionFade,
    LeaderboardTable,
    VLoader,
    VPagination
  },

  computed: {
    ...mapGetters("leaderboard", {
      leaderboard: "getLeaderboard",
      totalPages: "getPages",
      page: "getPage",
      loading: "getLoading"
    })
  }
};
</script>
