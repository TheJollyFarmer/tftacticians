export default {
  capitalise: string => string.charAt(0).toUpperCase() + string.slice(1),
  truncate(text, stop, clamp) {
    return text.slice(0, stop) + (stop < text.length ? clamp || "..." : "");
  },
  cleanPath: string => {
    let str = string.replace(/['.-]+/g, " ");

    return str
      .split(" ")
      .join("")
      .toLowerCase();
  }
};
