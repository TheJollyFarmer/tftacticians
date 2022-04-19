<script>
import { h, TransitionGroup } from "vue";

const TransitionList = (props, context) => {
  const data = {
    name: "transition-list",
    tag: props.tag,
    class: ["transition-list", context.attrs.class],
    directives: context.attrs.directives,

    onCLick: event => event.stopPropagation(),

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

TransitionList.props = {
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

export default TransitionList;
</script>

<style lang="scss">
.transition-list,
.transition-list * {
  backface-visibility: hidden;
}

.transition-list {
  position: relative;
  overflow: hidden;

  &-enter-active,
  &-leave-active,
  &-move {
    transition: 500ms cubic-bezier(0.59, 0.12, 0.34, 0.95);
    transition-property: background-color, opacity, transform;
  }

  &-enter-from {
    opacity: 0;
    transform: translateX(50px) scaleY(0.5);
  }

  &-enter-to {
    opacity: 1;
    transform: translateX(0) scaleY(1);
  }

  &-leave-active {
    min-height: 1em;
    margin-bottom: 1em;
    width: 100%;
  }

  &-leave-to {
    opacity: 0;
    transform: scaleY(0);
    transform-origin: center top;
  }
}
</style>
