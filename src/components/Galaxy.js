import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Galaxy() {
  const points = useRef();
  const particles = useMemo(() => {
    const positions = new Float32Array(10000 * 3);
    const colors = new Float32Array(10000 * 3);
    const galaxyRadius = 20;
    const branches = 5;
    const randomness = 0.5;
    const randomnessPower = 3;
    const colorInside = new THREE.Color('#ff6030');
    const colorOutside = new THREE.Color('#1b3984');

    for(let i = 0; i < 10000; i++) {
      const i3 = i * 3;
      const radius = Math.random() * galaxyRadius;
      const spinAngle = radius * 5;
      const branchAngle = ((i % branches) / branches) * Math.PI * 2;

      const randomX = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1);
      const randomY = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1);
      const randomZ = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1);

      positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
      positions[i3 + 1] = randomY;
      positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

      const mixedColor = colorInside.clone();
      mixedColor.lerp(colorOutside, radius / galaxyRadius);

      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
    }

    return { positions, colors };
  }, []);

  useFrame((state) => {
    points.current.rotation.y += 0.0005;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attachObject={['attributes', 'position']}
          count={particles.positions.length / 3}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attachObject={['attributes', 'color']}
          count={particles.colors.length / 3}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        sizeAttenuation={true}
        depthWrite={false}
        vertexColors={true}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default Galaxy; 