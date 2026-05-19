"use client";

import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

interface ParticlesProps {
  count: number;
  interactive?: boolean;
}

function Particles({ count, interactive = true }: ParticlesProps) {
  const ref = useRef<THREE.Points>(null);
  const { pointer } = useThree();
  const target = useRef({ x: 0, y: 0 });

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 4 + Math.random() * 4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.6;
      pos[i * 3 + 2] = radius * Math.cos(phi) * 0.5;
    }
    return pos;
  }, [count]);

  useFrame((state, delta) => {
    if (!ref.current) return;

    const t = state.clock.elapsedTime;

    if (interactive) {
      target.current.x = THREE.MathUtils.lerp(
        target.current.x,
        pointer.x * 0.12,
        delta * 2
      );
      target.current.y = THREE.MathUtils.lerp(
        target.current.y,
        pointer.y * 0.08,
        delta * 2
      );
    }

    ref.current.rotation.y = t * 0.04 + target.current.x;
    ref.current.rotation.x = target.current.y;
  });

  return (
    <points ref={ref} frustumCulled>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.018}
        color="#a78bfa"
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function SoftOrb({ visible }: { visible: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current || !visible) return;
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.35) * 0.2;
  });

  if (!visible) return null;

  return (
    <mesh ref={meshRef} position={[2.5, 0.3, -3]}>
      <sphereGeometry args={[1.4, 16, 16]} />
      <meshBasicMaterial color="#6366f1" transparent opacity={0.05} />
    </mesh>
  );
}

export interface ParticleFieldSceneProps {
  particleCount?: number;
  interactive?: boolean;
  showOrb?: boolean;
}

export function ParticleFieldScene({
  particleCount = 600,
  interactive = true,
  showOrb = true,
}: ParticleFieldSceneProps) {
  return (
    <>
      <ambientLight intensity={0.35} />
      <Particles count={particleCount} interactive={interactive} />
      <SoftOrb visible={showOrb} />
    </>
  );
}
