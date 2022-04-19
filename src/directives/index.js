import autofocus from "./Autofocus";
import tooltip from "./Tooltip";

export default {
  install(Vue) {
    Vue.directive("autofocus", {
      beforeMount: autofocus,
      updated: autofocus
    });

    Vue.directive("tooltip", {
      beforeMount: tooltip.bind,
      updated: tooltip.update
    });
  }
};
