<template>
  <VTable>
    <VTHead :headers="experience.headers"/>
    <VTBody :data="experience.rows"/>
    <tfoot>
      <tr>
        <th colspan="2">
          Note: Gain 2 XP / Round & 4XP = 4 Gold
        </th>
      </tr>
    </tfoot>
  </VTable>
</template>

<script>
import experience from "@/constants/experience";
import VTable from "@/components/utility/VTable";
import VTBody from "@/components/utility/VTBody";
import VTHead from "@/components/utility/VThead";

export default {
  name: "InfoExperiencePartial",

  components: { VTable, VTBody, VTHead },

  data() {
    return {
      experience
    };
  }
};
</script>
