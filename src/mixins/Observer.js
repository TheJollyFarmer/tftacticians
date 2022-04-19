export default {
  data() {
    return {
      observer: undefined
    };
  },

  mounted() {
    this.createObserver(this.executeObserver);
  },

  beforeUnmount() {
    this.observer.disconnect();
  },

  methods: {
    createObserver(method) {
      const options = { rootMargin: "200px" };

      this.observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) method(entry);
      }, options);

      this.observer.observe(this.$refs.observer);
    }
  }
};
