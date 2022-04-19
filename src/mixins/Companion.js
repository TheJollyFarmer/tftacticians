export default {
  computed: {
    companion() {
      let name = this.summoner.companion.name.slice(3).toLowerCase();

      return `${name}-${this.summoner.companion.id}`;
    }
  }
};
