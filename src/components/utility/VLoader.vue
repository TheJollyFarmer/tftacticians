<script>
import { defineAsyncComponent, h } from "vue";
const VPage = defineAsyncComponent(() => import("@/components/utility/VPage"));

const VLoader = props => {
  let values = ["one", "two", "three", "four", "five"];
  let squares = values.map(square => h("div", { class: ["square", square] }));
  let loader = h("div", { class: "square-loader" }, squares);

  return props.forView
    ? h(VPage, { isFullWidth: true }, { default: () => loader })
    : loader;
};

VLoader.props = {
  dimension: {
    type: String,
    required: false,
    default: "30"
  },

  forView: {
    type: Boolean,
    required: false,
    default: false
  }
};

export default VLoader;
</script>

<style lang="scss" scoped>
$grad-1: #ffffff;
$grad-2: #b0e6e8;
$grad-3: #70d1d6;
$grad-4: #33bdc4;

$gradient-1: linear-gradient(90deg, $grad-1 0%, $grad-2 100%);
$gradient-2: linear-gradient(90deg, $grad-2 0%, $grad-3 100%);
$gradient-3: linear-gradient(90deg, $grad-3 0%, $grad-4 100%);
$gradient-4: linear-gradient(90deg, $grad-4 0%, var(--primary) 100%);

@mixin animation($index: 1, $gradient: $gradient-1) {
  animation-duration: 8s;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
  backface-visibility: hidden;
  background: $gradient;
  border-radius: $radius;
  box-shadow: $shadow;
  position: absolute;
  will-change: transform, opacity;
  z-index: $index;
}

/* prettier-ignore */
$squares: (
  "one": ("1"),
  "two": ("2"),
  "three": ("3", $gradient-2, $gradient-3, 25%),
  "four": ("4", $gradient-3, $gradient-4, 50%),
  "five": ("5", $gradient-4, $gradient-3, 75%)
);

@function exists($square, $index) {
  $idx: nth($square, 1);

  @if ($idx != "1" and $idx != "2") {
    @return nth($square, $index);
  } @else {
    @return null;
  }
}

@mixin squares {
  @each $name, $square in $squares {
    &.#{$name} {
      animation-name: slide-#{nth($square, 1)};
      background: exists($square, 2);
      left: exists($square, 4);
      top: if($name == "one", 0, null);

      &:before {
        background: exists($square, 3);
        animation-name: fade-#{nth($square, 1)};
      }
    }
  }
}

.section {
  align-items: center;
  animation-duration: 0.5s;
  display: flex;
  height: $screen-height;
  margin: auto;
}

.square-loader {
  display: flex;
  height: 70px;
  margin: 2em auto;
  position: relative;
  width: 140px;

  .square {
    @include animation;
    height: 30px;
    top: 50%;
    width: 30px;

    &::before {
      @include animation(-1, $gradient-2);
      bottom: 0;
      content: "";
      left: 0;
      opacity: 0;
      right: 0;
      top: 0;
    }

    @include squares;
  }
}

/* prettier-ignore */
@keyframes slide-1 {
  0%     { transform: translate(0, 0); }
  4.17%  { transform: translate(0, 116%); }
  50.04% { transform: translate(0, 116%); }
  54.21% { transform: translate(0, 232%); }
  58.38% { transform: translate(116%, 232%); }
  62.55% { transform: translate(116%, 116%); }
  91.74% { transform: translate(116%, 116%); }
  95.91% { transform: translate(116%, 0); }
  100%   { transform: translate(0, 0); }
}

/* prettier-ignore */
@keyframes slide-2 {
  0%     { transform: translate(0, 0); }
  4.17%  { transform: translate(0, 116%); }
  8.34%  { transform: translate(116%, 116%); }
  12.51% { transform: translate(116%, 0); }
  41.70% { transform: translate(116%, 0); }
  45.87% { transform: translate(116%, -116%); }
  50.04% { transform: translate(0, -116%); }
  54.21% { transform: translate(0, 0); }
  100%   { transform: translate(0, 0); }
}

/* prettier-ignore */
@keyframes slide-3 {
  8.34%  { transform: translate(0, 0); }
  12.51% { transform: translate(0, -116%); }
  16.68% { transform: translate(116%, -116%); }
  20.85% { transform: translate(116%, 0); }
  33.36% { transform: translate(116%, 0); }
  37.53% { transform: translate(116%, 116%); }
  41.70% { transform: translate(0, 116%); }
  45.87% { transform: translate(0, 0); }
  58.38% { transform: translate(0, 0); }
  62.55% { transform: translate(0, -116%); }
  66.72% { transform: translate(116%, -116%); }
  70.89% { transform: translate(116%, 0); }
  83.40% { transform: translate(116%, 0); }
  87.57% { transform: translate(116%, 116%); }
  91.74% { transform: translate(0, 116%); }
  95.91% { transform: translate(0, 0); }
  100%   { transform: translate(0, 0); }
}

/* prettier-ignore */
@keyframes slide-4 {
  16.68% { transform: translate(0, 0); }
  20.85% { transform: translate(0, 116%); }
  25.02% { transform: translate(116%, 116%); }
  29.19% { transform: translate(116%, 0); }
  75.06% { transform: translate(116%, 0); }
  79.23% { transform: translate(116%, -116%); }
  83.40% { transform: translate(0, -116%); }
  87.57% { transform: translate(0, 0); }
  100%   { transform: translate(0, 0); }
}

/* prettier-ignore */
@keyframes slide-5 {
  0%     { transform: translate(0, 0); }
  25.02% { transform: translate(0, 0); }
  29.19% { transform: translate(0, -116%); }
  33.36% { transform: translate(-116%, -116%); }
  37.53% { transform: translate(-116%, 0); }
  41.70% { transform: translate(-116%, 0); }
  66.72% { transform: translate(-116%, 0); }
  70.89% { transform: translate(-116%, 116%); }
  75.06% { transform: translate(0, 116%); }
  79.23% { transform: translate(0, 0); }
  100%   { transform: translate(0, 0); }
}

/* prettier-ignore */
@keyframes fade-1 {
  54.21% { opacity: 0; }
  58.38%, 95.91% { opacity: 1; }
  100% { opacity: 0; }
}

/* prettier-ignore */
@keyframes fade-2 {
  4.17% { opacity: 0; }
  8.34%, 45.87% { opacity: 1; }
  50.04%, 100% { opacity: 0; }
}

/* prettier-ignore */
@keyframes fade-3 {
  12.51% { opacity: 0; }
  16.68%, 37.53% { opacity: 1; }
  41.7%, 62.55% { opacity: 0; }
  66.72%, 87.57% { opacity: 1; }
  91.74%, 100% { opacity: 0; }
}

/* prettier-ignore */
@keyframes fade-4 {
  20.85% { opacity: 0; }
  25.02%, 79.23% { opacity: 1; }
  83.4%, 100% { opacity: 0; }
}

/* prettier-ignore */
@keyframes fade-5 {
  29.19% { opacity: 0; }
  33.36%, 70.89% { opacity: 1; }
  75.06%, 100% { opacity: 0; }
}
</style>
