<script>
import { h, Transition } from "vue";

const TransitionTabSlide = (props, context) => {
  const data = {
    name: `slide-${props.type}`
  };

  return h(Transition, data, context.slots);
};

TransitionTabSlide.props = {
  type: {
    type: String,
    required: true,
    default: "prev"
  }
};

export default TransitionTabSlide;
</script>

<style scoped>
.slide-single-enter-active,
.slide-next-enter-active,
.slide-next-leave-active,
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition: transform 0.3s ease-in-out;
}

.slide-single-leave-to,
.slide-prev-leave-to,
.slide-single-enter,
.slide-next-enter {
  position: absolute;
  transform: translate3d(-100%, 0, 0);
  width: 100%;
}

.slide-prev-enter,
.slide-single-enter,
.slide-next-leave-to,
.slide-single-leave-to {
  position: absolute;
  transform: translate3d(100%, 0, 0);
  width: 100%;
}
</style>
