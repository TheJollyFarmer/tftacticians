<template>
  <VTable>
    <VTHead :headers="rolling.headers"/>
    <VTBody :data="rolling.rows"/>
  </VTable>
</template>

<script>
import rolling from "@/constants/rolling.json";
import VTable from "@/components/utility/VTable";
import VTBody from "@/components/utility/VTBody";
import VTHead from "@/components/utility/VThead";

export default {
  name: "InfoRollingPartial",

  components: { VTable, VTBody, VTHead },

  data() {
    return {
      rolling
    };
  }
};
</script>

<style scoped>
</style>
