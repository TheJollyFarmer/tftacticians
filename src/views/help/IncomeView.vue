<template>
  <div class="income-tables">
    <VTable
      v-for="(table, index) in tables"
      :key="index"
      :fullwidth="false"
      centered>
      <VTHead :headers="table.headers"/>
      <VTBody :data="table.rows"/>
    </VTable>
  </div>
</template>

<script>
import income from "@/constants/income.json";
import VTHead from "@/components/utility/VThead";
import VTable from "@/components/utility/VTable";
import VTBody from "@/components/utility/VTBody";

export default {
  name: "IncomeView",

  components: { VTBody, VTHead, VTable },

  data() {
    return {
      tables: income
    };
  }
};
</script>

<style lang="scss" scoped>
.income-tables {
  align-items: baseline;
  display: flex;
  justify-content: space-between;
}
</style>
