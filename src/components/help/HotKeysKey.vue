<template>
  <section>
    <VHeader text="key"/>
    <div class="key">
      <HotKey
        v-for="(hotkey, index) in hotkeys"
        :key="index"
        :hotkey="hotkey"/>
    </div>
  </section>
</template>

<script>
import VHeader from "@/components/utility/VHeader";
import HotKey from "@/components/help/HotKey";

export default {
  name: "HotKeysKey",

  components: { HotKey, VHeader },

  props: {
    hotkeys: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.key {
  cursor: default;
  display: grid;
  grid-gap: $spacing;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
}
</style>
