import {
  pagination,
  payload,
  totalPages
} from "@/store/modules/leaderboard/filters";

export default {
  getLeaderboard: pagination,
  getLoading: state => state.loading,
  getPage: state => state.pagination.page,
  getPages: totalPages,
  getPayload: payload
};
