<template>
  <div class="section">
    <div class="container">
      <div class="columns is-variable is-2">
        <slot v-if="isFullWidth"/>
        <template v-else>
          <aside class="column is-one-third">
            <slot name="aside"/>
          </aside>
          <main class="column">
            <section
              v-if="title"
              class="surface">
              <VHeader :text="title"/>
              <slot/>
            </section>
            <slot v-else/>
          </main>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import VHeader from "@/components/utility/VHeader";

export default {
  name: "VPage",

  components: { VHeader },

  props: {
    title: {
      type: String,
      required: false,
      default: ""
    },

    isFullWidth: {
      type: Boolean,
      required: false,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.column {
  overflow: hidden;

  &.is-one-third {
    @media only screen and (min-width: 769px) {
      width: 30.5%;
    }
  }
}
</style>
