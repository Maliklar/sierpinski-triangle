import getDistance from "./getDistance";

export default function isClick(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  threshold = 10
) {
  return getDistance(x1, y1, x2, y2) < threshold;
}
