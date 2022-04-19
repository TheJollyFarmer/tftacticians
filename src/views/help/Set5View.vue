<template>
  <section>
    <Set5Mechanic/>
    <Set5Labs/>
  </section>
</template>

<script>
import Set5Labs from "@/components/help/Set5Labs";
import Set5Mechanic from "@/components/help/Set5Mechanic";

export default {
  name: "Set5View",
  components: { Set5Labs, Set5Mechanic }
};
</script>
