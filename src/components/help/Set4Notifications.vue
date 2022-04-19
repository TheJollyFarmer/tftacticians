<template>
  <section>
    <VNotification>
      <TransitionFade>
        <span :key="index">
          {{ notifications[index] }}
        </span>
      </TransitionFade>
    </VNotification>
    <VNotificationCarousel
      v-model="index"
      :count="count"/>
  </section>
</template>

<script>
import TransitionFade from "@/components/transitions/TransitionFade";
import VNotification from "@/components/utility/VNotification";
import VNotificationCarousel from "@/components/utility/VNotificationCarousel";

export default {
  name: "Set4Notifications",

  components: {
    TransitionFade,
    VNotification,
    VNotificationCarousel
  },

  data() {
    return {
      index: 1,
      notifications: {
        1:
          "Chosen champions occasionally appear in a player's shop. Players" +
          "can have at most one Chosen champion in the game. The Chosen " +
          "champion can be replaced by another one after selling them.",
        2:
          "When a Chosen champion appears in a store, they are already at " +
          "2-Star level, but cost three times their normal 1-Star price.",
        3:
          "Chosen champions count as two of the highlighted trait that can be" +
          " found in the top-right corner of a champion portrait. The Exile, " +
          "Ninja, Emperor, The Boss, and Tormented traits can not be Chosen.",
        4:
          "Chosen champions gain bonus stats. They gain 200 bonus health, and" +
          " a unique bonus stat, depending on the champion.",
        5:
          "Chosen champions only appear in the shop when you do not own one. " +
          "A Chosen champions' tier is likely to be higher at higher levels, " +
          "as can be seen below:"
      }
    };
  },

  computed: {
    count() {
      return Object.keys(this.notifications).length;
    }
  }
};
</script>
