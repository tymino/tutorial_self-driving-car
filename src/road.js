class Road {
  constructor(x, width, laneCount = 3) {
    this.x = x;
    this.width = width;
    this.lineCount = laneCount;

    this.left = x - width / 2;
    this.right = x + width / 2;

    const infinity = 1e6;
    this.top = -infinity;
    this.bottom = infinity;
  }

  draw(ctx) {
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'white';

    for (let i = 0; i <= this.lineCount; i++) {
      const x = lerp(this.left, this.right, i / this.lineCount);

      ctx.beginPath();
      ctx.moveTo(x, this.top);
      ctx.lineTo(x, this.bottom);
      ctx.stroke();
    }
  }
}


