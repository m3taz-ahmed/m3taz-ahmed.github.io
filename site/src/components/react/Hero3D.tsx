import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * 3D Hero Scene — immersive particle galaxy with:
 * - 5000 particles in a swirling disc formation (galaxy-like)
 * - Glowing wireframe icosahedron core with pulsing scale
 * - Mouse-reactive camera parallax
 * - Additive blending for luminous effect
 * - Cyan-to-violet color gradient matching the brand
 */

const PARTICLE_COUNT = 5000;
const GALAXY_RADIUS = 6;
const SPINS = 3;
const BRANCHES = 4;

function GalaxyParticles() {
  const pointsRef = useRef<THREE.Points>(null!);
  const { mouse } = useThree();

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const colors = new Float32Array(PARTICLE_COUNT * 3);

    const colorInside = new THREE.Color('#22d3ee'); // cyan (primary dark)
    const colorOutside = new THREE.Color('#a78bfa'); // violet (secondary dark)

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // Galaxy spiral distribution
      const radius = Math.random() * GALAXY_RADIUS;
      const spinAngle = radius * SPINS;
      const branchAngle = ((i % BRANCHES) / BRANCHES) * Math.PI * 2;

      const randomX = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.3 * radius;
      const randomY = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.15;
      const randomZ = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.3 * radius;

      positions[i * 3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
      positions[i * 3 + 1] = randomY;
      positions[i * 3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

      // Color: lerp from inside (cyan) to outside (violet)
      const mixedColor = colorInside.clone();
      mixedColor.lerp(colorOutside, radius / GALAXY_RADIUS);
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    return { positions, colors };
  }, []);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;

    // Continuous slow rotation
    pointsRef.current.rotation.y += delta * 0.08;

    // Mouse-reactive tilt — smooth lerp
    const targetX = mouse.y * 0.4;
    const targetY = mouse.x * 0.6;
    pointsRef.current.rotation.x = THREE.MathUtils.lerp(
      pointsRef.current.rotation.x,
      targetX,
      0.03
    );
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.9}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function WireframeCore() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const innerRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.15;
      const scale = 1 + Math.sin(state.clock.elapsedTime * 0.8) * 0.08;
      meshRef.current.scale.setScalar(scale);
    }
    if (innerRef.current) {
      innerRef.current.rotation.x -= delta * 0.3;
      innerRef.current.rotation.z += delta * 0.2;
      const scale = 0.6 + Math.sin(state.clock.elapsedTime * 1.2) * 0.05;
      innerRef.current.scale.setScalar(scale);
    }
  });

  return (
    <group>
      {/* Outer wireframe */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.8, 1]} />
        <meshBasicMaterial
          color="#22d3ee"
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
      {/* Inner wireframe — counter-rotating */}
      <mesh ref={innerRef}>
        <octahedronGeometry args={[1, 0]} />
        <meshBasicMaterial
          color="#a78bfa"
          wireframe
          transparent
          opacity={0.4}
        />
      </mesh>
    </group>
  );
}

function CameraRig() {
  const { camera, mouse } = useThree();

  useFrame(() => {
    // Smooth camera parallax following mouse
    const targetX = mouse.x * 1.5;
    const targetY = mouse.y * 1.0;
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.03);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.03);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

function Scene() {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.15;
  });

  return (
    <group ref={groupRef}>
      <GalaxyParticles />
      <WireframeCore />
      <CameraRig />
    </group>
  );
}

export default function Hero3D() {
  return (
    <div
      className="absolute inset-0 z-0"
      style={{ pointerEvents: 'none' }}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 7], fov: 65 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
