import sets from "@/data/sets";

export default {
  popover: {
    id: "",
    type: "",
    el: {},
    display: false,
    active: false,
    hover: false
  },
  windowWidth: window.innerWidth,
  activeSet: sets[0],
  sets,
  darkTheme: false,
  displayModal: false,
  error: ""
};
