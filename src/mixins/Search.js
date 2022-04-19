import { sanitise } from "@/utils/filters";
import { clone } from "@/utils/helpers";

export default {
  computed: {
    search: {
      get() {
        return this.query;
      },

      set(query) {
        this.setQuery(sanitise(query));
      }
    }
  },

  methods: {
    setQuery(search) {
      let query = clone(this.$route.query);

      search.length ? (query.search = search) : delete query.search;

      this.$router.push({ query });
    }
  }
};
