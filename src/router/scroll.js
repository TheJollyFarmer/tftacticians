const scrollBehaviour = (to, from, savedPosition) =>
  new Promise(resolve =>
    setTimeout(() => resolve(setPosition(to, savedPosition)), 1100)
  );

const navOffset = 56;
const offset = { left: 0, top: 0, behaviour: "smooth" };
const setPosition = (to, saved) => saved ?? (to.hash ? hash(to) : offset);
const hash = to => ({ el: to.hash, behaviour: "smooth", top: navOffset });

export default scrollBehaviour;
