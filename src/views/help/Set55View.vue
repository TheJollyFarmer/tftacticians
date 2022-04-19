<template>
  <section>
    <Set55Radiant/>
    <Set55Blessing/>
  </section>
</template>

<script>
import Set55Blessing from "@/components/help/Set55Blessing";
import Set55Radiant from "@/components/help/Set55Radiant";

export default {
  name: "Set55View",
  components: { Set55Blessing, Set55Radiant }
};
</script>
