import { useEffect, useRef } from "react";
import useCanvas from "../../store/useCanvas";
import styles from "./styles.module.scss";
export default function Canvas() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const { setCanvas } = useCanvas();
  useEffect(() => {
    if (!canvas.current) return;

    setCanvas(canvas.current);
  }, [setCanvas]);
  return (
    <div className={styles.container}>
      <canvas ref={canvas} className={styles.canvas}></canvas>
    </div>
  );
}
