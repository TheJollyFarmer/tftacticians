<template>
  <Transition name="overlay-fade">
    <div 
      v-show="displayModal"
      class="modal is-active">
      <div 
        class="modal-background" 
        @click="toggleModal"/>
      <slot/>
    </div>
  </Transition>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "VOverlay",

  computed: mapState(["displayModal"]),

  methods: mapActions(["toggleModal"])
};
</script>

<style lang="scss" scoped>
.overlay-fade-enter-active {
  animation: fade $hover-in;
}

.overlay-fade-leave-active {
  animation: fade 0.2s $hover-out reverse;
}

@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
