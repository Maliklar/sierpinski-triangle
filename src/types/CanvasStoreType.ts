export default interface CanvasStoreType {
  context: CanvasRenderingContext2D | null;
  canvas: HTMLCanvasElement | null;
  sides: number;
  speed: number;
  color: string;
  polygon?: Coordinate[];
  interval?: number;
  rec?: DOMRect;
  isMouseDown: boolean;
  targetPolygon?: number;

  mouseUpHandler: (e: MouseEvent) => void;
  mouseMoveHandler: (e: MouseEvent) => void;
  clickHandler: (e: MouseEvent) => void;
  setCanvas: (c: HTMLCanvasElement) => void;
  setSides: (s: number, polygon?: Coordinate[]) => Coordinate[];
  setSpeed: (speed: number) => void;
  setColor: (color: string) => void;
  drawPoint: (x: number, y: number, color: string) => void;
}

export type Coordinate = { x: number; y: number };
