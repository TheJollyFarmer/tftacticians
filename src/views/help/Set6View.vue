<template>
  <section>
    <Set6Mechanic/>
    <Set6Doubleup/>
  </section>
</template>

<script>
import Set6Doubleup from "@/components/help/Set6Doubleup";
import Set6Mechanic from "@/components/help/Set6Mechanic";

export default {
  name: "Set6View",

  components: { Set6Doubleup, Set6Mechanic }
};
</script>
