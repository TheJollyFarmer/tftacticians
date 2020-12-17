<script>
export default {
  name: "TransitionGrid",

  functional: true,

  props: {
    tag: {
      type: String,
      required: false,
      default: "div"
    }
  },

  render(createElement, context) {
    const data = {
      props: {
        name: "transition-grid",
        tag: context.props.tag
      },

      class: "transition-grid",

      on: {
        beforeLeave(el) {
          const { width, height } = window.getComputedStyle(el);

          el.style.left = `${el.offsetLeft}px`;
          el.style.top = `${el.offsetTop}px`;
          el.style.width = width;
          el.style.height = height;
          el.style.position = "absolute";
        }
      }
    };

    return createElement("transition-group", data, context.children);
  }
};
</script>

<style lang="scss">
.transition-grid {
  position: relative;

  &-enter {
    opacity: 0;
    transform: scale(0.5);
  }

  &-enter-active {
    transition: all 200ms ease-out;
  }

  &-enter-to {
    opacity: 1;
  }

  &-move {
    transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
    opacity: 0.1;

    @for $i from 1 through 60 {
      &:nth-child(#{$i}) {
        transition: transform
          0.2s
          #{$i *
          0.025}s
          cubic-bezier(0.77, 0, 0.175, 1);
      }
    }
  }

  &-leave-active {
    transition: all 200ms ease-out;
    z-index: 0;
  }

  &-leave-to {
    opacity: 0;
  }
}
</style>
