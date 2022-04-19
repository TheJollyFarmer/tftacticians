export function draw() {
  let meta = this.getMeta();
  let canvHeight = this.chart.scales["y-axis-0"].bottom;
  let ctx = this.chart.chart.ctx;

  meta.data.forEach(rect => roundRect(ctx, rect, canvHeight));
}

export function roundRect(ctx, rect, canvHeight) {
  let cenX = rect._view.x;
  let width = rect._view.width;
  let x = cenX - width / 2;
  let y = rect._view.y;
  let height = canvHeight - y;
  let backgroundColor = rect._model.backgroundColor;
  let radius = { tl: 5, tr: 5, br: 0, bl: 0 };

  if (height !== 0) {
    ctx.shadowBlur = 30;
    ctx.shadowColor = "#0000003d";
    ctx.shadowOffsetY = -4;
    ctx.fillStyle = backgroundColor;

    ctx.clearRect(x, y, width, height);
    ctx.beginPath();
    ctx.moveTo(x + radius.tl, y);
    ctx.lineTo(x + width - radius.tr, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
    ctx.lineTo(x + width, y + height - radius.br);
    ctx.quadraticCurveTo(
      x + width,
      y + height,
      x + width - radius.br,
      y + height
    );
    ctx.lineTo(x + radius.bl, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
    ctx.lineTo(x, y + radius.tl);
    ctx.quadraticCurveTo(x, y, x + radius.tl, y);
    ctx.closePath();
    ctx.fill();
    ctx.closePath();

    ctx.shadowBlur = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowOffsetX = 0;
  }
}
