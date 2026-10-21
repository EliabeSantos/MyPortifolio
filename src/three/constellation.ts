import * as THREE from "three";

/**
 * Background 3D — campo de pontos conectados (constelação) em movimento lento.
 *
 * Decisões de desempenho:
 * - Canvas fixo atrás do conteúdo, sem capturar eventos de ponteiro.
 * - `devicePixelRatio` limitado para evitar renderização supersampled.
 * - Renderização pausada quando a aba fica oculta.
 * - Uma única moldura estática quando `prefers-reduced-motion` está ativo.
 * - Geometria de linhas reutilizada (draw range), sem alocação por quadro.
 */

export interface ConstellationOptions {
  reducedMotion: boolean;
  isMobile: boolean;
}

export interface ConstellationHandle {
  dispose(): void;
}

const AREA_HEIGHT = 26;
const AREA_DEPTH = 16;
const LINK_DIST = 5.4;
const LINK_DIST_SQ = LINK_DIST * LINK_DIST;

function makeDotTexture(): THREE.CanvasTexture {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    const gradient = ctx.createRadialGradient(
      size / 2,
      size / 2,
      0,
      size / 2,
      size / 2,
      size / 2,
    );
    gradient.addColorStop(0, "rgba(255,255,255,1)");
    gradient.addColorStop(0.35, "rgba(255,255,255,0.8)");
    gradient.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

export function createConstellation(
  canvas: HTMLCanvasElement,
  { reducedMotion, isMobile }: ConstellationOptions,
): ConstellationHandle {
  let renderer: THREE.WebGLRenderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: false,
      powerPreference: "low-power",
    });
  } catch {
    // WebGL indisponível: some com o canvas e deixa o site funcionar sem ele.
    canvas.style.display = "none";
    return { dispose: () => {} };
  }

  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 140);
  camera.position.z = 26;

  const group = new THREE.Group();
  scene.add(group);

  const COUNT = isMobile ? 30 : 64;
  let halfWidth = 22;

  const positions = new Float32Array(COUNT * 3);
  const velocities = new Float32Array(COUNT * 3);

  for (let i = 0; i < COUNT; i++) {
    positions[i * 3 + 0] = (Math.random() * 2 - 1) * halfWidth;
    positions[i * 3 + 1] = (Math.random() * 2 - 1) * (AREA_HEIGHT / 2);
    positions[i * 3 + 2] = (Math.random() * 2 - 1) * (AREA_DEPTH / 2);

    velocities[i * 3 + 0] = (Math.random() * 2 - 1) * 0.014;
    velocities[i * 3 + 1] = (Math.random() * 2 - 1) * 0.014;
    velocities[i * 3 + 2] = (Math.random() * 2 - 1) * 0.008;
  }

  // Poucos pontos na cor de destaque — o laranja aparece com moderação.
  const baseColor = new THREE.Color(0x9aa2ad);
  const accentColor = new THREE.Color(0xff8b19);
  const accentCount = Math.max(2, Math.round(COUNT * 0.1));

  const nodeColors = new Float32Array(COUNT * 3);
  for (let i = 0; i < COUNT; i++) {
    const color = i < accentCount ? accentColor : baseColor;
    nodeColors[i * 3 + 0] = color.r;
    nodeColors[i * 3 + 1] = color.g;
    nodeColors[i * 3 + 2] = color.b;
  }

  const dotTexture = makeDotTexture();

  const pointsGeometry = new THREE.BufferGeometry();
  const pointsPosAttr = new THREE.BufferAttribute(positions, 3);
  pointsPosAttr.setUsage(THREE.DynamicDrawUsage);
  pointsGeometry.setAttribute("position", pointsPosAttr);
  pointsGeometry.setAttribute("color", new THREE.BufferAttribute(nodeColors, 3));

  const pointsMaterial = new THREE.PointsMaterial({
    size: isMobile ? 0.5 : 0.44,
    map: dotTexture,
    vertexColors: true,
    transparent: true,
    opacity: 0.9,
    depthWrite: false,
    sizeAttenuation: true,
  });

  const points = new THREE.Points(pointsGeometry, pointsMaterial);
  points.frustumCulled = false;
  group.add(points);

  // Linhas entre pontos próximos. Buffers pré-alocados; usamos draw range.
  const maxPairs = (COUNT * (COUNT - 1)) / 2;
  const linePositions = new Float32Array(maxPairs * 6);
  const lineColors = new Float32Array(maxPairs * 6);

  const lineGeometry = new THREE.BufferGeometry();
  const linePosAttr = new THREE.BufferAttribute(linePositions, 3);
  const lineColAttr = new THREE.BufferAttribute(lineColors, 3);
  linePosAttr.setUsage(THREE.DynamicDrawUsage);
  lineColAttr.setUsage(THREE.DynamicDrawUsage);
  lineGeometry.setAttribute("position", linePosAttr);
  lineGeometry.setAttribute("color", lineColAttr);

  const lineBase = new THREE.Color(0x5b6470);
  const lineMaterial = new THREE.LineBasicMaterial({
    vertexColors: true,
    transparent: true,
    opacity: 0.32,
    depthWrite: false,
  });

  const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
  lines.frustumCulled = false;
  group.add(lines);

  function wrap(value: number, limit: number): number {
    if (value > limit) return -limit;
    if (value < -limit) return limit;
    return value;
  }

  function update(deltaScale: number) {
    for (let i = 0; i < COUNT; i++) {
      const ix = i * 3;
      positions[ix] += velocities[ix] * deltaScale;
      positions[ix + 1] += velocities[ix + 1] * deltaScale;
      positions[ix + 2] += velocities[ix + 2] * deltaScale;

      positions[ix] = wrap(positions[ix], halfWidth);
      positions[ix + 1] = wrap(positions[ix + 1], AREA_HEIGHT / 2);
      positions[ix + 2] = wrap(positions[ix + 2], AREA_DEPTH / 2);
    }
    pointsPosAttr.needsUpdate = true;

    let cursor = 0;
    for (let i = 0; i < COUNT; i++) {
      const ix = i * 3;
      for (let j = i + 1; j < COUNT; j++) {
        const jx = j * 3;
        const dx = positions[ix] - positions[jx];
        const dy = positions[ix + 1] - positions[jx + 1];
        const dz = positions[ix + 2] - positions[jx + 2];
        const distSq = dx * dx + dy * dy + dz * dz;

        if (distSq < LINK_DIST_SQ) {
          const strength = 1 - Math.sqrt(distSq) / LINK_DIST;

          linePositions[cursor] = positions[ix];
          linePositions[cursor + 1] = positions[ix + 1];
          linePositions[cursor + 2] = positions[ix + 2];
          linePositions[cursor + 3] = positions[jx];
          linePositions[cursor + 4] = positions[jx + 1];
          linePositions[cursor + 5] = positions[jx + 2];

          const r = lineBase.r * strength;
          const g = lineBase.g * strength;
          const b = lineBase.b * strength;

          lineColors[cursor] = r;
          lineColors[cursor + 1] = g;
          lineColors[cursor + 2] = b;
          lineColors[cursor + 3] = r;
          lineColors[cursor + 4] = g;
          lineColors[cursor + 5] = b;

          cursor += 6;
        }
      }
    }

    lineGeometry.setDrawRange(0, cursor / 3);
    linePosAttr.needsUpdate = true;
    lineColAttr.needsUpdate = true;
  }

  function resize() {
    const width = canvas.clientWidth || window.innerWidth;
    const height = canvas.clientHeight || window.innerHeight;

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2));
    renderer.setSize(width, height, false);

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    // Ajusta a largura da área ao novo aspecto para o campo preencher a tela.
    halfWidth =
      Math.tan(((camera.fov * Math.PI) / 180) / 2) * camera.position.z * camera.aspect;
  }

  // Parallax discreto seguindo o ponteiro.
  const target = { x: 0, y: 0 };
  const current = { x: 0, y: 0 };

  function onPointerMove(event: PointerEvent) {
    target.x = (event.clientX / window.innerWidth) * 2 - 1;
    target.y = (event.clientY / window.innerHeight) * 2 - 1;
  }

  function applyParallax() {
    current.x += (target.x - current.x) * 0.04;
    current.y += (target.y - current.y) * 0.04;
    group.rotation.y = current.x * 0.09;
    group.rotation.x = current.y * 0.07;
  }

  let rafId = 0;
  let running = false;
  let lastTime = performance.now();

  function frame(now: number) {
    rafId = requestAnimationFrame(frame);

    // Escala pelo tempo decorrido para manter velocidade estável (~60fps).
    const delta = Math.min((now - lastTime) / 16.6667, 3);
    lastTime = now;

    update(delta);
    applyParallax();
    renderer.render(scene, camera);
  }

  function start() {
    if (running || reducedMotion) return;
    running = true;
    lastTime = performance.now();
    rafId = requestAnimationFrame(frame);
  }

  function stop() {
    running = false;
    cancelAnimationFrame(rafId);
  }

  function onVisibilityChange() {
    if (document.hidden) stop();
    else start();
  }

  resize();
  update(1);

  if (reducedMotion) {
    renderer.render(scene, camera);
  } else {
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    start();
  }

  window.addEventListener("resize", resize);
  document.addEventListener("visibilitychange", onVisibilityChange);

  return {
    dispose() {
      stop();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("visibilitychange", onVisibilityChange);

      pointsGeometry.dispose();
      pointsMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      dotTexture.dispose();
      renderer.dispose();
    },
  };
}
