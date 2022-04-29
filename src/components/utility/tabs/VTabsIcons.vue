<template>
  <ul>
    <li
      v-for="(tab, index) in tabs"
      :key="index"
      :class="{ 'is-active': tab.isActive }">
      <a
        role="tab"
        @click="selectEvent(tab, index)">
        {{ tab.label }}
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "VTabsIcons",

  props: {
    tabs: {
      type: Array,
      required: true
    }
  },

  emits: ["select"],

  methods: {
    selectEvent(tab, index) {
      this.$emit("select", tab, index);
    }
  }
};
</script>

<style lang="scss" scoped>
li a {
  font-weight: bold;

  &:hover {
    border-bottom-color: var(--colour);
    color: var(--colour);
    filter: brightness(90%);
  }
}

li.is-active a {
  border-bottom-color: var(--primary);
  color: var(--primary);
}

li .icon:first-child {
  margin-right: 0;
}
</style>
