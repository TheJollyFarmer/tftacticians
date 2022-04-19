const capitalise = string => string.charAt(0).toUpperCase() + string.slice(1);
const truncate = (text, stop, clamp) =>
  text.slice(0, stop) + (stop < text.length ? clamp || "..." : "");
const trim = string => string.replace(/\s+/g, "");
const sanitise = string => string.replace(/\W/gi, "").toLowerCase();

export { capitalise, truncate, trim, sanitise };
