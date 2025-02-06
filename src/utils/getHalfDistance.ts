/**
 *
 * @param x1 Point 1 position x
 * @param y1 Point 1 position y
 * @param x2 Point 2 position x
 * @param y2 Point 2 position y
 * @returns A point between the two given points exactly in the middle.
 */

export default function getHalfDistance(
  x1: number,
  y1: number,
  x2: number,
  y2: number
) {
  return { x: (x2 + x1) / 2, y: (y2 + y1) / 2 };
}
