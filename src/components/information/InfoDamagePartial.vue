<template>
  <article>
    <DamagePartialTable
      fullwidth
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
import damage from "@/constants/damage";
import DamagePartialTable from "@/components/information/DamagePartialTable";

export default {
  name: "DamageInfoPartial",

  components: { DamagePartialTable },

  data() {
    return {
      damage
    };
  }
};
</script>
