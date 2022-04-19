<script>
import { h, TransitionGroup } from "vue";

const TransitionGrid = (props, context) => {
  const data = {
    name: "transition-grid",

    tag: props.tag,

    class: ["transition-grid", context.attrs.class],

    directives: context.attrs.directives,

    onCLick: event => event.stopPropagation(),

    onBeforeLeave: el => {
      const { width, height } = window.getComputedStyle(el);

      el.style.left = `${el.offsetLeft}px`;
      el.style.top = `${el.offsetTop}px`;
      el.style.width = width;
      el.style.height = height;
      el.style.position = "absolute";
    }
  };

  return h(TransitionGroup, data, context.slots);
};

TransitionGrid.props = {
  tag: {
    type: String,
    required: false,
    default: "div"
  }
};

export default TransitionGrid;
</script>

<style lang="scss">
.transition-grid,
.transition-grid * {
  backface-visibility: hidden;
}

.transition-grid {
  position: relative;

  &-enter-from {
    opacity: 0;
    transform: scale(0.5);
  }

  &-enter-active {
    transition-property: scale, opacity;
    transition: 200ms ease-out;
  }

  &-enter-to {
    opacity: 1;
  }

  &-move {
    transition: opacity 0.5s cubic-bezier(0.77, 0, 0.175, 1);
    opacity: 0.1;

    @for $i from 1 through 60 {
      &:nth-child(#{$i}) {
        transition: transform
          0.2s
          #{$i *
          0.0125}s
          cubic-bezier(0.77, 0, 0.175, 1);
      }
    }
  }

  &-leave-active {
    transition: opacity 200ms ease-out;
    z-index: 0;
  }

  &-leave-to {
    opacity: 0 !important;
  }
}
</style>
