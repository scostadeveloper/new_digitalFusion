import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// Particle component for the background
function Particles({ count = 100 }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const { viewport } = useThree();

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * viewport.width * 2,
          (Math.random() - 0.5) * viewport.height * 2,
          Math.random() * 20 - 10,
        ],
        speed: Math.random() * 0.02 + 0.005,
      });
    }
    return temp;
  }, [count, viewport]);

  useFrame((state) => {
    if (mesh.current) {
      particles.forEach((particle, i) => {
        const { position, speed } = particle;
        position[1] -= speed;
        
        // Reset particle when it goes off screen
        if (position[1] < -viewport.height) {
          position[1] = viewport.height;
        }

        const matrix = new THREE.Matrix4();
        matrix.setPosition(position[0], position[1], position[2]);
        mesh.current!.setMatrixAt(i, matrix);
      });
      mesh.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.02]} />
      <meshBasicMaterial color="#00f5ff" transparent opacity={0.6} />
    </instancedMesh>
  );
}

// Grid lines component
function GridLines() {
  const { viewport } = useThree();
  
  return (
    <group>
      <gridHelper 
        args={[viewport.width * 2, 50, '#005f73', '#005f73']} 
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, -10]}
      />
    </group>
  );
}

// Floating geometric shapes
function FloatingShapes() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      groupRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Rotating cube */}
      <mesh position={[-5, 2, -5]}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshBasicMaterial color="#8a2be2" transparent opacity={0.3} wireframe />
      </mesh>
      
      {/* Rotating tetrahedron */}
      <mesh position={[3, -1, -3]}>
        <tetrahedronGeometry args={[0.7]} />
        <meshBasicMaterial color="#39ff14" transparent opacity={0.2} wireframe />
      </mesh>
      
      {/* Rotating octahedron */}
      <mesh position={[0, 3, -7]}>
        <octahedronGeometry args={[0.6]} />
        <meshBasicMaterial color="#ff1493" transparent opacity={0.25} wireframe />
      </mesh>
    </group>
  );
}

interface TechBackgroundProps {
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
  showGrid?: boolean;
  showParticles?: boolean;
  showShapes?: boolean;
}

export function TechBackground({ 
  className = '',
  intensity = 'medium',
  showGrid = true,
  showParticles = true,
  showShapes = true
}: TechBackgroundProps) {
  const particleCount = {
    low: 50,
    medium: 100,
    high: 200
  }[intensity];

  return (
    <div className={`fixed inset-0 -z-10 ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        {showParticles && <Particles count={particleCount} />}
        {showGrid && <GridLines />}
        {showShapes && <FloatingShapes />}
        <ambientLight intensity={0.5} />
      </Canvas>
      
      {/* CSS overlay for additional effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-cyber-blue/10 pointer-events-none" />
      <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none" />
    </div>
  );
}

export default TechBackground;
