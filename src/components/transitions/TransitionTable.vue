<script>
import { h, TransitionGroup } from "vue";

const TransitionTable = (props, context) => {
  const data = {
    name: "transition-table",

    tag: props.tag,

    class: ["transition-table", context.attrs.class],

    directives: context.attrs.directives,

    onCLick: event => event.stopPropagation(),

    onBeforeEnter: el => (el.style.transitionDuration = `${props.duration}s`),

    onBeforeLeave: el => (el.style.transitionDuration = `${props.duration}s`)
  };

  return h(TransitionGroup, data, context.slots);
};

TransitionTable.props = {
  duration: {
    type: Number,
    required: false,
    default: 0.5
  },

  tag: {
    type: String,
    required: false,
    default: "div"
  }
};

export default TransitionTable;
</script>

<style lang="scss">
.transition-table {
  position: relative;
  overflow: hidden;

  &-enter-active,
  &-leave-active,
  &-move {
    transition: 500ms cubic-bezier(0.59, 0.12, 0.34, 0.95);
    transition-property: opacity, transform;
  }

  &-enter-from {
    opacity: 0;
    transform: translateY(100%);
  }

  &-enter-to {
    opacity: 1;
    transform: translateY(0);
  }

  &-leave-active {
    z-index: 0;
  }

  &-leave-to {
    opacity: 0;
    transform: translateY(-100%);
  }
}
</style>
