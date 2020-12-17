<template>
  <article class="keyboard">
    <template v-for="(key, index) in keys">
      <VKeyboardKey
        :key="index"
        :label="key.label"
        :label-two="key.second"
        :class="key.class"/>
    </template>
  </article>
</template>

<script>
import VKeyboardKey from "@/components/utility/VKeyboardKey";

export default {
  name: "VKeyboard",

  components: { VKeyboardKey },

  props: {
    keys: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.keyboard {
  border-radius: 10px;
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(30, 20.2px);
  grid-template-rows: repeat(5, 40.5px);
  margin-bottom: 1.5rem;
}
</style>
