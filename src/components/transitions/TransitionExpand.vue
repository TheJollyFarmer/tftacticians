<script>
import { h, Transition } from "vue";

const TransitionExpand = (props, context) => {
  const data = {
    name: "expand",

    onAfterEnter: element => {
      element.style.height = "auto";
    },

    onEnter: element => {
      const { width } = getComputedStyle(element);

      element.style.width = width;
      element.style.position = "absolute";
      element.style.visibility = "hidden";
      element.style.height = "auto";

      const { height } = getComputedStyle(element);

      element.style.width = null;
      element.style.position = null;
      element.style.visibility = null;
      element.style.height = 0;

      getComputedStyle(element).height;

      setTimeout(() => (element.style.height = height));
    },

    onLeave: element => {
      const { height } = getComputedStyle(element);

      element.style.height = height;

      getComputedStyle(element).height;

      setTimeout(() => (element.style.height = 0));
    }
  };

  return h(Transition, data, context.slots);
};

export default TransitionExpand;
</script>

<style scoped>
* {
  will-change: height;
  transform: translateZ(0);
  backface-visibility: hidden;
  opacity: 1;
  perspective: 1000px;
}

.expand-enter-active,
.expand-leave-active {
  transition: height, opacity;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  height: 0;
  opacity: 0;
}
</style>
