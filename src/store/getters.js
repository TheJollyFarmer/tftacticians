export default {
  getActiveImageSet: state => Math.floor(state.activeSet),
  getActiveSet: state => state.activeSet,
  isMobile: state => state.windowWidth <= 1215,
  getSets: state => state.sets.filter(set => set.number !== state.activeSet)
};
