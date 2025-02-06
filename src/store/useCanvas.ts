/* eslint-disable @typescript-eslint/ban-ts-comment */
import { create } from "zustand";
import CanvasStoreType from "../types/CanvasStoreType";
import getHalfDistance from "../utils/getHalfDistance";
import getRandomColor from "../utils/getRandomColor";

const useCanvas = create<CanvasStoreType>()((set, get) => ({
  // @ts-ignore
  canvas: null,
  // @ts-ignore
  context: null,
  polygon: [],
  speed: 1,
  sides: 3,
  setCanvas(canvas: HTMLCanvasElement) {
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    const rec = canvas.getBoundingClientRect();
    canvas.height = rec.height;
    canvas.width = rec.width;
    set({ canvas, context });
  },
  drawPoint: (x: number, y: number, color: string) => {
    const context = get().context;
    context.fillStyle = color;
    context.beginPath();
    context.arc(x, y, 1, 0, Math.PI * 2, true);
    context.fill();
    context.closePath();
  },

  setSides(sides: number) {
    const context = get().context;
    if (sides < 3) throw Error("Sides must be at least 3");
    context.reset();
    const drawPoint = get().drawPoint;
    const lastInterval = get().interval;
    clearInterval(lastInterval);
    const width = get().canvas.width;
    const height = get().canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 2;
    const angleStep = (2 * Math.PI) / sides;
    const polygon = Array.from({ length: sides }, (_, i) => {
      const angle = i * angleStep;
      return {
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle),
      };
    });
    let lastVertex = { x: width / 2, y: height / 2 };
    context.beginPath();
    context.strokeStyle = "white";
    context.moveTo(polygon[0].x, polygon[0].y);
    for (let i = 1; i < polygon.length; i++)
      context.lineTo(polygon[i].x, polygon[i].y);
    context.closePath();
    context.stroke();
    const interval = setInterval(() => {
      for (let i = 0; i < get().speed; i++) {
        const corner = Math.floor(Math.random() * sides);
        const c = polygon[corner];
        lastVertex = getHalfDistance(lastVertex.x, lastVertex.y, c.x, c.y);
        drawPoint(lastVertex.x, lastVertex.y, getRandomColor());
      }
    });

    set({ sides, polygon, interval });

    return polygon;
  },
  setSpeed(speed: number) {
    set({ speed });
  },
}));
export default useCanvas;
