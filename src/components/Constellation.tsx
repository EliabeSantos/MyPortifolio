import { useEffect, useRef } from "react";
import styles from "./Constellation.module.css";

/**
 * Camada de fundo 3D.
 *
 * Carregada de forma assíncrona para não atrasar a primeira pintura:
 * o Three.js é um chunk separado, importado só depois do idle.
 * Se o WebGL falhar, o canvas some e o site continua normal.
 */
export function Constellation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let disposed = false;
    let handle: { dispose: () => void } | null = null;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isMobile = window.matchMedia("(max-width: 52rem)").matches;

    // Adia o carregamento do three até o navegador ficar ocioso.
    const load = () => {
      if (disposed) return;
      void import("../three/constellation")
        .then(({ createConstellation }) => {
          if (disposed || !canvasRef.current) return;
          handle = createConstellation(canvasRef.current, {
            reducedMotion,
            isMobile,
          });
        })
        .catch(() => {
          // Chunk falhou: remove a camada em vez de quebrar a página.
          canvas.style.display = "none";
        });
    };

    const idle = (window as unknown as { requestIdleCallback?: (cb: () => void) => number })
      .requestIdleCallback;

    let idleId: number | undefined;
    if (typeof idle === "function") {
      idleId = idle(load);
    } else {
      const timer = window.setTimeout(load, 350);
      return () => {
        disposed = true;
        window.clearTimeout(timer);
        handle?.dispose();
      };
    }

    return () => {
      disposed = true;
      if (idleId !== undefined) window.cancelIdleCallback(idleId);
      handle?.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={styles.canvas}
      aria-hidden="true"
      data-testid="constellation"
    />
  );
}
