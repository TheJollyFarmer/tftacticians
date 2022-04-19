<template>
  <VMenu title="sections">
    <VMenuItem
      v-for="section in sections"
      :key="section.link"
      :link="section.link"
      :label="section.label"
      :has-list="section.hasList"
      :is-expanded="section.expanded">
      <VMenuItem
        v-for="sub in section.subs"
        :key="sub.link"
        :link="sub.link"
        :label="sub.label"
        :has-list="sub.hasList"/>
    </VMenuItem>
  </VMenu>
</template>

<script>
import VMenu from "@/components/utility/VMenu";
import VMenuItem from "@/components/utility/VMenuItem";

export default {
  name: "HelpMenu",

  components: { VMenu, VMenuItem },

  props: {
    sections: {
      type: Array,
      required: true
    }
  }
};
</script>
