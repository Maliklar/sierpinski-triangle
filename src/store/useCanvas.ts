import { create } from "zustand";
import CanvasStoreType from "../types/CanvasStoreType";
import getHalfDistance from "../utils/getHalfDistance";
import isClick from "../utils/isClick";
import { Coordinate } from "../types/CanvasStoreType";

const useCanvas = create<CanvasStoreType>()((set, get) => ({
  canvas: null,
  context: null,
  polygon: [],
  color: "#fff",
  isMouseDown: false,
  speed: 1,
  sides: 3,
  setCanvas(canvas: HTMLCanvasElement) {
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    const rec = canvas.getBoundingClientRect();
    document.addEventListener("mousemove", get().mouseMoveHandler);
    document.addEventListener("mouseup", get().mouseUpHandler);

    canvas.height = rec.height;
    canvas.width = rec.width;
    set({ canvas, context, rec });
  },
  drawPoint: (x: number, y: number, color: string) => {
    const context = get().context;
    if (!context) throw new Error("Context is undefined");
    context.fillStyle = color;
    context.beginPath();
    context.arc(x, y, 1, 0, Math.PI * 2, true);
    context.fill();
    context.closePath();
  },

  setSides(sides: number, poly?: Coordinate[]) {
    const context = get().context;
    const canvas = get().canvas;
    if (!context) throw new Error("Context is undefined");
    if (!canvas) throw new Error("Canvas is undefined");
    if (sides < 3) throw Error("Sides must be at least 3");
    canvas?.removeEventListener("mousedown", get().clickHandler);
    const rec = canvas.getBoundingClientRect();
    context.reset();
    const drawPoint = get().drawPoint;
    const lastInterval = get().interval;
    clearInterval(lastInterval);
    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 2;
    const angleStep = (2 * Math.PI) / sides;
    let polygon = null;
    if (poly) {
      polygon = poly;
    } else {
      polygon = Array.from({ length: sides }, (_, i) => {
        const angle = i * angleStep;
        return {
          x: centerX + radius * Math.cos(angle),
          y: centerY + radius * Math.sin(angle),
        };
      });
    }
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
        drawPoint(lastVertex.x, lastVertex.y, get().color);
      }
    });

    canvas.addEventListener("mousedown", get().clickHandler);

    set({ sides, polygon, interval, rec });

    return polygon;
  },
  clickHandler(e: MouseEvent) {
    const rec = get().rec;
    const polygon = get().polygon;
    if (!rec) throw Error("Rec is not defined");
    if (!polygon) throw Error("Polygon is not defined");
    const clickPosition = {
      x: e.pageX - rec.x,
      y: e.pageY - rec.y,
    };
    for (let i = 0; i < polygon.length; i++) {
      const { x, y } = polygon[i];
      const clicked = isClick(x, y, clickPosition.x, clickPosition.y, 50);
      if (clicked) {
        set({ isMouseDown: true, targetPolygon: i });
        return;
      }
    }
  },

  mouseMoveHandler(e: MouseEvent) {
    const isMouseDown = get().isMouseDown;
    const polygon = get().polygon;
    const rec = get().rec;
    const target = get().targetPolygon;
    if (!rec) throw Error("Rec is not defined");
    if (!polygon) throw Error("Polygon is not defined");
    if (!isMouseDown || target === undefined) return;

    const position = {
      x: e.pageX - rec.x,
      y: e.pageY - rec.y,
    };

    polygon[target] = position;
    const setSides = get().setSides;
    const sides = get().sides;
    setSides(sides, polygon);
    console.log(polygon);
  },

  mouseUpHandler() {
    set({ isMouseDown: false, targetPolygon: undefined });
  },
  setColor(color: string) {
    set({ color });
  },
  setSpeed(speed: number) {
    set({ speed });
  },
}));
export default useCanvas;
