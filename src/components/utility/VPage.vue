<template>
  <div class="columns is-variable is-8">
    <slot v-if="isFullWidth"/>
    <template v-else>
      <aside class="column is-one-third">
        <slot name="aside"/>
      </aside>
      <main class="column">
        <section>
          <VHeader
            v-if="title"
            :text="title"/>
          <slot/>
        </section>
      </main>
    </template>
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
