<template>
  <article>
    <DamagePartialTable
      fullwidth
      :centered="false"
      :headers="damage.combined.headers"
      :rows="damage.combined.rows"/>
    <DamagePartialTable
      header="Stage"
      :rows="damage.stages"/>
    <DamagePartialTable
      header="champion"
      :rows="damage.champions"/>
  </article>
</template>

<script>
import damage from "@/constants/damage.json";
import DamagePartialTable from "@/components/help/DamagePartialTable";

export default {
  name: "DamageView",

  components: { DamagePartialTable },

  data() {
    return {
      damage
    };
  }
};
</script>
