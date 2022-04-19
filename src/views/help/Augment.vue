<template>
  <VMediaObject class="layer">
    <template #mediaLeft>
      <VImage
        :image="trim(augment.name)"
        dimension="42"
        dir="augments"/>
    </template>
    <div>
      <h3 v-text="augment.name"/>
      <h4 v-text="augment.description"/>
    </div>
  </VMediaObject>
</template>

<script>
import { trim } from "@/utils/filters";
import VImage from "@/components/utility/VImage";
import VMediaObject from "@/components/utility/VMediaObject";

export default {
  name: "Augment",

  components: { VImage, VMediaObject },

  props: {
    augment: {
      type: Object,
      required: true
    }
  },

  methods: { trim }
};
</script>
