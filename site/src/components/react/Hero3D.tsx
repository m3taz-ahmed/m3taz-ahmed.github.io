import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * 3D Hero Scene — digital wave grid:
 * - A plane of vertices that undulates like a calm digital ocean
 * - Cyan-to-violet color gradient based on wave height
 * - Mouse-reactive camera parallax (subtle)
 * - Wireframe rendering for a clean, technical aesthetic
 * - Reduced particle/geometry complexity vs the previous galaxy
 */

const GRID_SIZE = 40;
const GRID_SEGMENTS = 60;
const WAVE_SPEED = 0.6;
const WAVE_AMPLITUDE = 1.2;

function WaveGrid() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const baseRef = useRef<Float32Array>(null!);

  // Store the original positions so we can compute wave offsets each frame
  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(GRID_SIZE, GRID_SIZE, GRID_SEGMENTS, GRID_SEGMENTS);
    baseRef.current = geo.attributes.position.array.slice(0) as Float32Array;
    return geo;
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    const pos = meshRef.current.geometry.attributes.position;
    const base = baseRef.current;

    for (let i = 0; i < pos.count; i++) {
      const ix = i * 3;
      const x = base[ix];
      const y = base[ix + 1];

      // Layered sine waves for organic, non-repetitive motion
      const wave =
        Math.sin(x * 0.35 + t * WAVE_SPEED) * WAVE_AMPLITUDE * 0.5 +
        Math.cos(y * 0.3 + t * WAVE_SPEED * 0.8) * WAVE_AMPLITUDE * 0.4 +
        Math.sin((x + y) * 0.2 + t * WAVE_SPEED * 0.5) * WAVE_AMPLITUDE * 0.3;

      pos.array[ix + 2] = wave;
    }
    pos.needsUpdate = true;

    // Slow tilt so the grid feels alive
    meshRef.current.rotation.z = Math.sin(t * 0.1) * 0.05;
  });

  return (
    <mesh ref={meshRef} geometry={geometry} rotation={[-Math.PI / 2.6, 0, 0]} position={[0, -1.5, 0]}>
      <meshBasicMaterial
        color="#22d3ee"
        wireframe
        transparent
        opacity={0.45}
      />
    </mesh>
  );
}

function CameraRig() {
  const { camera, mouse } = useThree();

  useFrame(() => {
    const targetX = mouse.x * 1.2;
    const targetY = mouse.y * 0.6;
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.04);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.04);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function Hero3D() {
  return (
    <div
      className="absolute inset-0 z-0"
      style={{ pointerEvents: 'none' }}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 2, 9], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <WaveGrid />
          <CameraRig />
        </Suspense>
      </Canvas>
    </div>
  );
}
