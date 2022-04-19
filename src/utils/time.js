export function formatDate(date) {
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  const elapsed = date - new Date();
  const absElap = Math.abs(elapsed);

  for (const [unit, amount] of units) {
    if (absElap > amount) {
      let unitTime = Math.round(elapsed / amount);
      let format = rtf.formatToParts(unitTime, unit);
      let relative = format[0];

      return format.length === 1 ? yester(relative.value) : fromNow(relative);
    }
  }
}

export function formatTime(time) {
  let hours = Math.floor(time / 60);
  let minutes = Math.round(time % 60);

  minutes = minutes < 10 ? "0" + minutes : minutes;

  return hours + ":" + minutes;
}

function yester(value) {
  return value === "last month"
    ? "1mo ago"
    : value === "yesterday"
      ? "yesterday"
      : "1" + value.charAt(5) + " ago";
}

function fromNow({ value, unit }) {
  unit = unit === "month" ? "mo" : unit.charAt(0);

  return value + unit + " ago";
}

const units = [
  ["year", 31536000000],
  ["month", 2628000000],
  ["week", 604800000],
  ["day", 86400000],
  ["hour", 3600000],
  ["minute", 60000],
  ["second", 1000]
];
