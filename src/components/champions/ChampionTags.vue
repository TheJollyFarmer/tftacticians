<template>
  <TransitionExpand>
    <VField
      v-show="filters.length"
      grouped
      multiline>
      <TransitionTags>
        <template
          v-for="(option, index) in filters"
          :key="index">
          <ChampionTag
            :option="option"
            @close="remove"/>
        </template>
      </TransitionTags>
    </VField>
  </TransitionExpand>
</template>

<script>
import ChampionTag from "@/components/champions/ChampionTag";
import TransitionExpand from "@/components/transitions/TransitionExpand";
import TransitionTags from "@/components/transitions/TransitionTags";
import VField from "@/components/utility/VField";
import { clone, remove } from "@/utils/helpers";
import { mapActions, mapState } from "vuex";

export default {
  name: "ChampionTags",

  components: {
    ChampionTag,
    TransitionExpand,
    TransitionTags,
    VField
  },

  computed: mapState("champions", ["filters"]),

  methods: {
    ...mapActions("champions", ["removeFilter"]),

    remove(option) {
      let query = clone(this.$route.query);

      Object.keys(query).forEach(key => remove(query[key], option));

      this.$router.push({ query });
    }
  }
};
</script>

<style lang="scss" scoped>
.field {
  margin-bottom: 1em !important;

  .transition-tags {
    display: flex;
    flex-wrap: wrap;
    text-transform: capitalize;
  }
}
</style>
