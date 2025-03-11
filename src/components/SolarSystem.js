import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';

function Planet({ radius, position, color, orbitRadius, speed, children }) {
  const ref = useRef();
  const orbit = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed;
    ref.current.position.x = Math.cos(t) * orbitRadius;
    ref.current.position.z = Math.sin(t) * orbitRadius;
    orbit.current.rotation.y += 0.001;
  });

  return (
    <group ref={orbit}>
      <group position={position}>
        <Sphere ref={ref} args={[radius, 32, 32]}>
          <meshStandardMaterial color={color} />
        </Sphere>
        {children}
      </group>
    </group>
  );
}

function SolarSystem() {
  return (
    <group>
      {/* Sol */}
      <Sphere args={[2.5, 32, 32]} position={[0, 0, 0]}>
        <meshBasicMaterial color="#FDB813" />
      </Sphere>

      {/* Planetas */}
      <Planet radius={0.4} position={[0, 0, 0]} color="#E27B58" orbitRadius={5} speed={0.5} />
      <Planet radius={0.8} position={[0, 0, 0]} color="#836539" orbitRadius={8} speed={0.3} />
      <Planet radius={0.7} position={[0, 0, 0]} color="#2E619B" orbitRadius={11} speed={0.2} />
      <Planet radius={0.6} position={[0, 0, 0]} color="#C1440E" orbitRadius={14} speed={0.15} />
      <Planet radius={1.2} position={[0, 0, 0]} color="#C88B3A" orbitRadius={18} speed={0.1} />
      <Planet radius={1.0} position={[0, 0, 0]} color="#E3E3E3" orbitRadius={22} speed={0.08} />
      <Planet radius={0.9} position={[0, 0, 0]} color="#73B2F2" orbitRadius={26} speed={0.06} />
      <Planet radius={0.9} position={[0, 0, 0]} color="#5B5FDA" orbitRadius={30} speed={0.04} />
    </group>
  );
}

export default SolarSystem; 