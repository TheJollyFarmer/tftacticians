import api from "@/api/index";

export default {
  getLeaderboard({ region, league }) {
    return api.request("api/leaderboard", { region, league });
  }
};
