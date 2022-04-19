<template>
  <article>
    <Season4Notifications/>
    <VTable>
      <VTHead :headers="chosen.headers"/>
      <VTBody :data="chosen.rows"/>
    </VTable>
  </article>
</template>

<script>
import chosen from "@/constants/chosen.json";
import VTable from "@/components/utility/VTable";
import VTHead from "@/components/utility/VThead";
import VTBody from "@/components/utility/VTBody";
import Season4Notifications from "@/components/help/Set4Notifications";

export default {
  name: "Set4View",

  components: {
    Season4Notifications,
    VTable,
    VTBody,
    VTHead
  },

  data() {
    return {
      chosen
    };
  }
};
</script>
