<template>
  <a
    :class="['match-summoner', isSize]"
    @click="goToSummonerView">
    <CompanionImage
      :image="companion"
      :dimension="dimension"/>
    <span v-text="summoner.name"/>
  </a>
</template>

<script>
import Companion from "@/mixins/Companion";
import CompanionImage from "@/components/summoner/CompanionImage";

export default {
  name: "SummonerLink",

  components: { CompanionImage },

  mixins: [Companion],

  props: {
    summoner: {
      type: Object,
      required: true
    },

    size: {
      type: String,
      required: false,
      default: "medium"
    }
  },

  computed: {
    isSize() {
      return "is-" + this.size;
    },

    dimension() {
      return this.size === "medium" ? "36" : "20";
    }
  },

  methods: {
    goToSummonerView() {
      this.$router.push({
        name: "summoner",
        params: { name: this.summoner.name }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.match-summoner {
  align-items: center;
  display: flex;
  color: var(--colour);
  font-size: 1em;
  transition: color $hover-in;

  &:hover {
    color: var(--primary);
    transition: color $hover-out;
  }

  &.is-medium :deep(.image) {
    margin-right: $spacing;

    img {
      height: 30px;
    }
  }

  &.is-small {
    font-size: 0.85em;

    :deep(.image) {
      border-width: 1px;
      margin-right: $spacing-small;

      img {
        height: 16px;
      }
    }
  }
}
</style>
