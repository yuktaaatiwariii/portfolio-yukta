import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Points, PointMaterial, Environment } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
  const ref = useRef();
  // Generate random points in a sphere
  const numParticles = 2000;
  const positions = new Float32Array(numParticles * 3);
  
  for (let i = 0; i < numParticles; i++) {
    const radius = 10 + Math.random() * 20;
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(Math.random() * 2 - 1);
    
    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = radius * Math.cos(phi);
  }

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 15;
    ref.current.rotation.y -= delta / 20;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#6DE7FF"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.4}
        />
      </Points>
    </group>
  );
}

function GlassPanels() {
  const panelsRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    panelsRef.current.rotation.y = Math.sin(t / 4) * 0.1;
    panelsRef.current.rotation.x = Math.cos(t / 4) * 0.1;
  });

  return (
    <group ref={panelsRef}>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[-4, 1, -5]} rotation={[0, Math.PI / 4, 0]}>
          <planeGeometry args={[3, 5]} />
          <meshPhysicalMaterial 
            color="#ffffff"
            transmission={0.9}
            opacity={1}
            metalness={0}
            roughness={0.1}
            ior={1.5}
            thickness={0.5}
          />
        </mesh>
      </Float>
      
      <Float speed={2} rotationIntensity={0.8} floatIntensity={1.5}>
        <mesh position={[5, -2, -8]} rotation={[0, -Math.PI / 6, 0]}>
          <planeGeometry args={[4, 6]} />
          <meshPhysicalMaterial 
            color="#4fc3e8"
            transmission={0.8}
            opacity={1}
            metalness={0.1}
            roughness={0.2}
            ior={1.5}
            thickness={0.5}
          />
        </mesh>
      </Float>
    </group>
  );
}

export default function HeroScene() {
  return (
    <>
      <color attach="background" args={['#08090B']} />
      <fog attach="fog" args={['#08090B', 10, 30]} />
      
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#6DE7FF" />
      <spotLight position={[-10, 10, -5]} intensity={2} color="#D8C2A8" angle={0.5} penumbra={1} />
      
      <ParticleField />
      <GlassPanels />
      
      <Environment preset="city" />
    </>
  );
}
