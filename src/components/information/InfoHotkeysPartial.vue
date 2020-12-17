<template>
  <div>
    <VKeyboard :keys="keys"/>
    <HotKeysKey :hotkeys="hotkeys"/>
  </div>
</template>

<script>
import keyboard from "@/constants/keyboard";
import hotkeys from "@/constants/hotkeys";
import VKeyboard from "@/components/utility/VKeyboard";
import HotKeysKey from "@/components/information/HotKeysKey";

export default {
  name: "HotkeysInfoPartial",

  components: { HotKeysKey, VKeyboard },

  data() {
    return {
      keys: keyboard,
      hotkeys
    };
  }
};
</script>
