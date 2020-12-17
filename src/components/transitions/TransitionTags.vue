<script>
export default {
  name: "TransitionTags",

  functional: true,

  props: {
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
  },

  render(createElement, context) {
    const data = {
      props: {
        name: "transition-list",
        tag: context.props.tag
      },

      class: "transition-list",

      on: {
        beforeEnter(el) {
          el.style.transitionDuration = `${context.props.duration}s`;
        },

        beforeLeave(el) {
          if (context.props.hasData) {
            el.style.position = "absolute";
          }

          el.style.transitionDuration = `${context.props.duration}s`;
        }
      }
    };

    return createElement("transition-group", data, context.children);
  }
};
</script>

<style lang="scss">
.transition-list {
  position: relative;

  &-enter-active {
    transition: all 300ms ease-out;
  }

  &-move {
    transition: all 200ms ease-in-out;
  }

  &-enter {
    opacity: 0;
    transform: scale(0.9);
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
