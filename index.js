const canvas = document.createElement("canvas");
document.body.appendChild(canvas);

const rec = canvas.getBoundingClientRect();
canvas.height = rec.height;
canvas.width = rec.width;
const { height, width } = canvas;
const SIDES = 8;
const context = canvas.getContext("2d");

// const triangle = drawTriangle();
const initialPoint = drawInitialPoint();
const polygon = generatePolygonCorners(SIDES);
drawRandom();

function generatePolygonCorners(sides) {
  if (sides < 3) return new Error("Sides must be at least 3");
  const centerX = width / 2;
  const centerY = height / 2;
  const radius = Math.min(width, height) / 2;
  const angleStep = (2 * Math.PI) / sides;
  const points = Array.from({ length: sides }, (_, i) => {
    const angle = i * angleStep;
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
    };
  });
  context.beginPath();
  context.strokeStyle = "white";
  context.moveTo(points[0].x, points[0].y);
  console.log(points);
  for (let i = 1; i < points.length; i++)
    context.lineTo(points[i].x, points[i].y);
  context.closePath();
  context.stroke();
  return points;
}

function drawRandom() {
  let lastVertex = initialPoint;

  let position = {};

  setInterval(() => {
    for (let i = 0; i < 100; i++) {
      const corner = Math.floor(Math.random() * SIDES);
      const c = polygon.at(corner);
      position = halfDistance(lastVertex.x, lastVertex.y, c.x, c.y);
      lastVertex = position;
      drawPoint(lastVertex.x, lastVertex.y, getRandomColor());
    }
  });
}

function* nextColor() {
  let i = 50;
  while (true) {
    i++;
    if (i > 256) i = 50;
    yield i;
  }
}
const next = nextColor();

function getRandomColor() {
  const r = next.next().value;
  const g = next.next().value;
  const b = next.next().value;
  return `rgb(${r},${g},${b})`;
}

function halfDistance(x1, y1, x2, y2) {
  return { x: (x2 + x1) / 2, y: (y2 + y1) / 2 };
}

function drawInitialPoint(color = "black") {
  const initialPoint = { x: width / 2, y: height / 2 };
  drawPoint(initialPoint.x, initialPoint.y, color);
  return initialPoint;
}
function drawPoint(x, y, color = "black") {
  context.fillStyle = color;
  context.beginPath();
  context.arc(x, y, 1, 0, Math.PI * 2, true);
  context.fill();
  context.closePath();
}
