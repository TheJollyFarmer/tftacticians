import api from "@/api/index";

export default {
  getLeaderboard({ region, league }) {
    return api.request("leaderboard", { region, league });
  }
};
