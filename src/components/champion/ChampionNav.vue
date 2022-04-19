<template>
  <section>
    <VRouterLink
      v-for="link in nav"
      :key="link.champion.id"
      :to="{ name: 'champion', params: { champion: link.champion.name } }"
      class="nav-link">
      <ChampionNavCard :link="link"/>
      <VFavicon :icon="'arrow-' + link.icon"/>
    </VRouterLink>
  </section>
</template>

<script>
import ChampionNavCard from "@/components/champion/ChampionNavCard";
import VFavicon from "@/components/utility/VFavicon";
import VRouterLink from "@/components/utility/VRouterLink";
import { mapGetters } from "vuex";

export default {
  name: "ChampionNav",

  components: {
    ChampionNavCard,
    VFavicon,
    VRouterLink
  },

  props: {
    champion: {
      type: String,
      required: true
    }
  },

  computed: {
    ...mapGetters("champions", ["getPrevChampion", "getNextChampion"]),

    nav() {
      return {
        prev: { icon: "left", champion: this.prevChampion, dir: "prev" },
        next: { icon: "right", champion: this.nextChampion, dir: "next" }
      };
    },

    prevChampion() {
      return this.getPrevChampion(this.champion);
    },

    nextChampion() {
      return this.getNextChampion(this.champion);
    }
  }
};
</script>

<style lang="scss" scoped>
$devices: $desktop, $widescreen, $fullhd;

.nav-link {
  position: fixed;
  top: 50vh;
  transform: translate(-50%, -50%);
  z-index: 10;

  &:last-child {
    left: unset;
    transform: translate(50%, -50%);
  }

  > .icon {
    border: 1px solid var(--colour);
    background-color: $primary;
    box-shadow: $shadow;
    color: var(--colour);
    font-size: 2em;
    border-radius: 50%;
    position: relative;
    width: 2.5rem;
    height: 2.5rem;
    overflow: hidden;
    z-index: 0;

    &:after {
      background-color: var(--background);
      content: "";
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      transform: translate(0);
      transition: transform $hover-in;
      width: 100%;
      z-index: -1;
    }
  }

  &:hover > {
    transition-property: transform, opacity;

    .nav-card {
      opacity: 1;
      transform: translate(-100%, -50%);
      transition: $hover-out;

      &.prev {
        transform: translate(0, -50%);
      }
    }

    .icon {
      color: $white-dark;
    }

    .icon:after {
      transform: translate(100%);
    }
  }

  @each $device in $devices {
    $content: $device - (2 * $gap);

    @media screen and (min-width: $device) {
      left: calc((100vw - #{$content} - 15px) / 4);

      &:last-child {
        right: calc((100vw - #{$content} - 15px) / 4);
      }
    }
  }

  @media screen and (max-width: $desktop) {
    display: none;
  }
}
</style>
