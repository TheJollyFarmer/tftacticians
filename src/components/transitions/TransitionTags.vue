<script>
import { h, TransitionGroup } from "vue";

const TransitionTags = (props, context) => {
  const data = {
    name: "transition-tags",
    tag: props.tag,
    class: "transition-tags",

    onBeforeEnter: el => {
      el.style.transitionDuration = `${props.duration}s`;
    },

    onBeforeLeave: el => {
      if (props.hasData) {
        el.style.position = "absolute";
      }

      el.style.transitionDuration = `${props.duration}s`;
    }
  };

  return h(TransitionGroup, data, context.slots);
};

TransitionTags.props = {
  duration: {
    type: Number,
    required: false,
    default: 0.5
  },

  hasData: {
    type: Boolean,
    required: false,
    default: true
  },

  tag: {
    type: String,
    required: false,
    default: "div"
  }
};

export default TransitionTags;
</script>

<style lang="scss">
.transition-tags {
  position: relative;

  &-enter-active {
    transition: all 300ms ease-out;
  }

  &-move {
    transition: all 200ms ease-in-out;
  }

  &-enter-from {
    opacity: 0;
    transform: translateY(-10px);
  }

  &-enter-to {
    opacity: 1;
  }

  &-leave-active {
    position: absolute;
    transition: all 100ms ease-in;
    transform: translateX(0);
    z-index: 0;
  }

  &-leave-to {
    opacity: 0;
  }
}
</style>
