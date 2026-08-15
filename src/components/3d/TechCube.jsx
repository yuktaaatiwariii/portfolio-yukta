import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Edges, Html } from '@react-three/drei';

export default function TechCube({ activeCategory }) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.2;
    meshRef.current.rotation.y += delta * 0.3;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[3, 3, 3]} />
      <meshPhysicalMaterial 
        color="#111214"
        transparent
        opacity={0.8}
        transmission={0.5}
        roughness={0.1}
        metalness={0.5}
      />
      <Edges scale={1.05} threshold={15} color="#4FC3E8" />
      
      {/* Abstract floating nodes inside the cube */}
      {[...Array(8)].map((_, i) => (
        <mesh 
          key={i} 
          position={[
            (Math.random() - 0.5) * 2.5,
            (Math.random() - 0.5) * 2.5,
            (Math.random() - 0.5) * 2.5
          ]}
        >
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshBasicMaterial color={activeCategory ? "#6DE7FF" : "#ffffff"} />
        </mesh>
      ))}
    </mesh>
  );
}
