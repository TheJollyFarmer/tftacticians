<template>
  <TransitionExpand>
    <VField
      v-show="hasLength"
      grouped
      multiline>
      <TransitionTags>
        <template v-for="(filter, key) in filters">
          <template v-for="option in filter">
            <ChampionTag
              :key="option"
              :option="option"
              :type="key"
              @close="removeTagEvent"/>
          </template>
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
import { mapActions } from "vuex";

export default {
  name: "ChampionTags",

  components: {
    ChampionTag,
    TransitionExpand,
    TransitionTags,
    VField
  },

  props: {
    filters: {
      type: Object,
      required: true
    }
  },

  computed: {
    hasLength() {
      return Object.values(this.filters).some(filter => filter.length);
    }
  },

  methods: {
    ...mapActions("champions", ["removeFilter"]),

    removeTagEvent({ filter, type }) {
      this.removeFilter({
        filter,
        type: "REMOVE_" + type + "_FILTER"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.transition-list {
  display: flex;

  > .control {
    margin-right: 0.75rem;

    ::v-deep .tags {
      flex-wrap: nowrap;
    }
  }
}
</style>
