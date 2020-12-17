<template>
  <VMenu title="sections">
    <VMenuItem
      v-for="section in sections"
      :key="section.label"
      :label="section.label"
      :has-list="section.hasList"
      :is-active="isActive(section.label)"
      :is-expanded="section.expanded"
      @onClick="setSectionEvent">
      <VMenuItem
        v-for="sub in section.subs"
        :key="sub.label"
        :label="sub.label"
        :has-list="sub.hasList"
        :is-active="isActive(sub.label)"
        @onClick="setSectionEvent"/>
    </VMenuItem>
  </VMenu>
</template>

<script>
import VMenu from "@/components/utility/VMenu";
import VMenuItem from "@/components/utility/VMenuItem";

export default {
  name: "InformationMenu",

  components: { VMenu, VMenuItem },

  props: {
    sections: {
      type: Array,
      required: true
    },

    active: {
      type: String,
      required: true
    }
  },

  methods: {
    setSectionEvent(section) {
      this.$emit("set", section);
    },

    isActive(section) {
      return this.active === section;
    }
  }
};
</script>
