<template>
  <div>
    <VNotification>
      Chosen champions occasionally appear in a player's shop. Players can have
      at most one Chosen champion in the game. The Chosen champion can be
      replaced by another one after selling them.
    </VNotification>
    <VNotification>
      When a Chosen champion appears in a store, they are already at 2-Star
      level, but cost three times their normal 1-Star price.
    </VNotification>
    <VNotification>
      Chosen champions count as two of the highlighted trait that can be found
      in the top-right corner of a champion portrait. The Exile, Ninja, Emperor,
      The Boss, and Tormented traits can not be Chosen.
    </VNotification>
    <VNotification>
      Chosen champions gain bonus stats. They gain 200 bonus health, and a
      unique bonus stat, depending on the champion.
    </VNotification>
    <VNotification>
      Chosen champions only appear in the shop when you do not own one. A Chosen
      champions' tier is likely to be higher at higher levels, as can be seen
      below:
    </VNotification>
  </div>
</template>
<script>
import VNotification from "@/components/utility/VNotification";

export default {
  name: "Season4Notifications",

  components: { VNotification }
};
</script>
