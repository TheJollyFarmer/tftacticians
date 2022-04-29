import sets from "@/constants/sets.json";

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
  activeSet: sets[0].number,
  sets,
  darkTheme: false,
  displayModal: false,
  error: "",
  initialised: false
};
