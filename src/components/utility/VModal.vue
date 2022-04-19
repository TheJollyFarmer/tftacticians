<template>
  <VOverlay>
    <Transition name="modal-fade">
      <div
        v-show="displayModal"
        class="modal-content"
        role="dialog">
        <slot/>
      </div>
    </Transition>
  </VOverlay>
</template>

<script>
import VOverlay from "./VOverlay";
import { mapActions, mapState } from "vuex";

export default {
  name: "VModal",

  components: { VOverlay },

  computed: mapState(["displayModal"]),

  methods: mapActions(["toggleModal"])
};
</script>

<style scoped>
.modal-content {
  overflow: initial;
  max-width: 500px;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter {
  transform: scale(0.4);
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition-property: opacity, transform;
  transition: 0.3s ease;
}

.modal-fade-enter-to {
  transform: scale(1);
}
</style>
