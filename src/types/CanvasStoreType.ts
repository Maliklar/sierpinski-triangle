export default interface CanvasStoreType {
  context: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
  sides: number;
  speed: 1;
  polygon?: Coordinate[];
  interval?: number;
  setCanvas: (c: HTMLCanvasElement) => void;
  setSides: (s: number) => Coordinate[];
  setSpeed: (s: number) => void;
  drawPoint: (x: number, y: number, color: string) => void;
}

export type Coordinate = { x: number; y: number };
