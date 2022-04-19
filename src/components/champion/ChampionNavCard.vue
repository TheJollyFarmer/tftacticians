<template>
  <div :class="classes">
    <ChampionLink
      :id="link.champion.id"
      :popover="false"
      dimension="44"/>
    <div class="nav-card-body">
      <div>{{ link.champion.name }}</div>
      <div>{{ link.dir }}</div>
    </div>
  </div>
</template>

<script>
import ChampionLink from "@/components/champions/ChampionLink";

export default {
  name: "ChampionNavCard",

  components: { ChampionLink },

  props: {
    link: {
      type: Object,
      required: true
    }
  },

  computed: {
    classes() {
      return ["nav-card", "box", { prev: this.link.dir === "prev" }];
    }
  }
};
</script>

<style lang="scss" scoped>
.nav-card {
  align-items: center;
  background-color: var(--layer);
  border: 1px solid var(--border);
  border-radius: $radius;
  color: var(--colour);
  display: flex;
  height: 60px;
  justify-content: space-between;
  left: 50%;
  line-height: 1.2;
  opacity: 0;
  padding: 0.5em 1.75em 0.5em 0.5em;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  transition: $hover-in;
  transform-origin: right center;
  transition-property: transform, opacity;
  white-space: nowrap;
  width: fit-content;

  &.prev {
    transform: translate(-100%, -50%);
    flex-direction: row-reverse;
    padding: 0.5em 0.5em 0.5em 1.75em;

    .nav-card-body {
      margin-left: auto;
    }

    .champion {
      margin-left: 0.5em;
      margin-right: 0;
    }
  }

  .champion {
    margin-right: 0.5em;
  }

  .nav-card-body div:last-of-type {
    font-weight: bold;
    text-transform: capitalize;
  }
}
</style>
