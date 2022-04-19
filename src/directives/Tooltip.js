import { capitalise } from "@/utils/filters";

export default {
  bind(el, { value, oldValue, arg, modifiers }) {
    if (isValid(value, oldValue)) {
      let node = createNode();

      createLabel(value, node, modifiers.list);
      addClasses(value, node, arg, el);
    }
  },

  update(el, { value, oldValue }) {
    if (!el.classList.contains("tooltip-container"))
      el.classList.add("tooltip-container");

    if (isValid(value, oldValue)) replaceText(el, value);
  }
};

function isValid(data, oldData) {
  return data.length && oldData !== data;
}

function createNode() {
  return document.createElement("div");
}

function createLabel(value, node) {
  node.appendChild(document.createTextNode(capitalise(value)));
}

function addClasses(data, node, arg, el) {
  if (data.length > 40) node.classList.add("tooltip-multiline");

  let position = arg || "top";

  node.classList.add("tooltip", "tooltip-" + position);

  el.classList.add("tooltip-container");
  el.appendChild(node);
}

function replaceText(el, value) {
  el.children.forEach(child => {
    if (child.classList.contains("tooltip")) {
      child.textContent = value;
    }
  });
}
