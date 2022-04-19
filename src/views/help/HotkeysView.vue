<template>
  <div class="hotkeys">
    <VKeyboard :keys="keys"/>
    <HotKeysKey :hotkeys="hotkeys"/>
  </div>
</template>

<script>
import keyboard from "@/constants/keyboard.json";
import hotkeys from "@/constants/hotkeys.json";
import VKeyboard from "@/components/utility/VKeyboard";
import HotKeysKey from "@/components/help/HotKeysKey";

export default {
  name: "HotkeysView",

  components: { HotKeysKey, VKeyboard },

  data() {
    return {
      keys: keyboard,
      hotkeys
    };
  }
};
</script>

<style scoped>
.hotkeys {
  align-items: center;
  display: flex;
  flex-direction: column;
}
</style>
