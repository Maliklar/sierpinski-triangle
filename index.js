const canvas = document.createElement("canvas");
document.body.appendChild(canvas);

const rec = canvas.getBoundingClientRect();
canvas.height = rec.height;
canvas.width = rec.width;
const { height, width } = canvas;
const depth = 10_000_0;

const context = canvas.getContext("2d");

const triangle = drawTriangle();
const initialPoint = drawInitialPoint();
drawRandom();
function drawTriangle() {
  context.fillStyle = "black";
  const top = { x: width / 2, y: 0 };
  const left = { x: 0, y: height };
  const right = { x: width, y: height };
  return { top, left, right };
}

function drawRandom() {
  let lastVertex = initialPoint;

  let i = 0;
  let position = {};

  const interval = setInterval(() => {
    const corner = Math.floor(Math.random() * 3);
    if (corner === 0)
      position = halfDistance(
        lastVertex.x,
        lastVertex.y,
        triangle.top.x,
        triangle.top.y
      );
    else if (corner === 1)
      position = halfDistance(
        lastVertex.x,
        lastVertex.y,
        triangle.left.x,
        triangle.left.y
      );
    else
      position = halfDistance(
        lastVertex.x,
        lastVertex.y,
        triangle.right.x,
        triangle.right.y
      );

    lastVertex = position;
    drawPoint(lastVertex.x, lastVertex.y, "white");
    if (i >= depth) clearInterval(interval);
    i++;
  });
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
