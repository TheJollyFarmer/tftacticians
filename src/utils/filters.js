export default {
  capitalise: string => string.charAt(0).toUpperCase() + string.slice(1),
  truncate: (text, stop, clamp) =>
    text.slice(0, stop) + (stop < text.length ? clamp || "..." : ""),
  cleanPath: string => string.replace(/^[^_]*_|[&'.\-/\s]+/g, "").toLowerCase(),
  cleanString: string => string.replace(/^[^_]*_|[&'.-]+/g, ""),
  trim: string => string.replace(/\s+/g, ""),
  relativeTime: date => {
    const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
    const elapsed = date - new Date();

    for (const [unit, amount] of units) {
      if (Math.abs(elapsed) > amount || unit === "second") {
        return rtf.format(Math.round(elapsed / amount), unit);
      }
    }
  }
};

const units = [
  ["year", 31536000000],
  ["month", 2628000000],
  ["day", 86400000],
  ["hour", 3600000],
  ["minute", 60000],
  ["second", 1000]
];
