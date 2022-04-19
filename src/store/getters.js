export default {
  getActiveImageSet: state => "set" + Math.floor(state.activeSet),
  getActiveDataSet: state => "set" + state.activeSet,
  isMobile: state => state.windowWidth <= 1215,
  getSets: state => state.sets.filter(set => set.number !== state.activeSet)
};
