import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Ring } from '@react-three/drei';
import * as THREE from 'three';

function Planet({ radius, position, orbitRadius, speed, color, emissive, rings }) {
  const ref = useRef();
  const orbit = useRef();
  const ringRef = useRef();

  useFrame(({ clock }) => {
    if (ref.current && orbit.current) {
      const t = clock.getElapsedTime() * speed;
      const x = Math.cos(t) * orbitRadius;
      const z = Math.sin(t) * orbitRadius;
      ref.current.position.x = x;
      ref.current.position.z = z;
      ref.current.rotation.y += 0.005;
      orbit.current.rotation.y += 0.001;

      // Atualizar posição dos anéis se existirem
      if (rings && ringRef.current) {
        ringRef.current.position.x = x;
        ringRef.current.position.z = z;
      }
    }
  });

  return (
    <group ref={orbit}>
      <group>
        <Sphere ref={ref} args={[radius, 32, 32]} position={position}>
          <meshStandardMaterial 
            color={color}
            emissive={emissive}
            emissiveIntensity={0.5}
            metalness={0.8}
            roughness={0.4}
          />
        </Sphere>
        {rings && (
          <Ring
            ref={ringRef}
            args={[radius * 1.4, radius * 2, 32]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <meshStandardMaterial
              side={THREE.DoubleSide}
              transparent
              opacity={0.8}
              color={rings.color}
            />
          </Ring>
        )}
      </group>
      {/* Órbita visível */}
      <Ring
        args={[orbitRadius - 0.1, orbitRadius + 0.1, 128]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshBasicMaterial
          transparent
          opacity={0.1}
          color="#ffffff"
          side={THREE.DoubleSide}
        />
      </Ring>
    </group>
  );
}

function SolarSystem() {
  return (
    <group>
      {/* Sol com glow */}
      <Sphere args={[2.5, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#FDB813"
          emissive="#FDB813"
          emissiveIntensity={2}
          metalness={0.1}
          roughness={0.6}
        />
      </Sphere>
      <pointLight position={[0, 0, 0]} intensity={2} color="#FDB813" />

      {/* Mercúrio */}
      <Planet
        radius={0.4}
        position={[0, 0, 0]}
        orbitRadius={5}
        speed={0.5}
        color="#A0522D"
        emissive="#6B4423"
      />

      {/* Vênus */}
      <Planet
        radius={0.8}
        position={[0, 0, 0]}
        orbitRadius={8}
        speed={0.3}
        color="#DEB887"
        emissive="#8B7355"
      />

      {/* Terra */}
      <Planet
        radius={0.9}
        position={[0, 0, 0]}
        orbitRadius={11}
        speed={0.2}
        color="#4169E1"
        emissive="#27408B"
      />

      {/* Marte */}
      <Planet
        radius={0.6}
        position={[0, 0, 0]}
        orbitRadius={14}
        speed={0.15}
        color="#CD5C5C"
        emissive="#8B3A3A"
      />

      {/* Júpiter */}
      <Planet
        radius={1.6}
        position={[0, 0, 0]}
        orbitRadius={18}
        speed={0.1}
        color="#DAA520"
        emissive="#8B6914"
      />

      {/* Saturno */}
      <Planet
        radius={1.4}
        position={[0, 0, 0]}
        orbitRadius={22}
        speed={0.08}
        color="#F4A460"
        emissive="#8B4513"
        rings={{
          color: "#DEB887"
        }}
      />

      {/* Urano */}
      <Planet
        radius={1.0}
        position={[0, 0, 0]}
        orbitRadius={26}
        speed={0.06}
        color="#87CEEB"
        emissive="#4A708B"
      />

      {/* Netuno */}
      <Planet
        radius={1.0}
        position={[0, 0, 0]}
        orbitRadius={30}
        speed={0.04}
        color="#1E90FF"
        emissive="#104E8B"
      />
    </group>
  );
}

export default SolarSystem; 