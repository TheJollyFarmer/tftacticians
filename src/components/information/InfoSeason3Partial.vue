<template>
  <article>
    <VNotification>
      Season 3 consisted of galaxies of varying types; each, consisting of a
      special set of rules that would influence the way in which the game was
      played.
    </VNotification>
    <VTable :aligned="false">
      <VTHead :headers="['galaxy Type', 'description']"/>
      <VTBody :data="galaxies"/>
    </VTable>
  </article>
</template>

<script>
import galaxies from "@/constants/galaxies";
import VNotification from "@/components/utility/VNotification";
import VTable from "@/components/utility/VTable";
import VTBody from "@/components/utility/VTBody";
import VTHead from "@/components/utility/VThead";

export default {
  name: "InfoSeason3Partial",

  components: {
    VNotification,
    VTable,
    VTBody,
    VTHead
  },

  computed: {
    galaxies() {
      return galaxies.map(({ key, ...attributes }) => attributes);
    }
  }
};
</script>

<style lang="scss" scoped>
::v-deep tr td:first-of-type {
  white-space: nowrap;
}
</style>
