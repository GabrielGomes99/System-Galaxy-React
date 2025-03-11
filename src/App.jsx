import React, { Suspense } from 'react';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { AnimatePresence, motion } from 'framer-motion';
import Scene3D from './components/Scene3D';
import MessageCard from './components/MessageCard';
import ParticleBackground from './components/ParticleBackground';
import AudioVisualizer from './components/AudioVisualizer';
import FloatingHearts from './components/FloatingHearts';
import { GlobalStyle } from './styles/GlobalStyle';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background: linear-gradient(to bottom, #0f0c29, #302b63, #24243e);
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <ParticleBackground />
        <Canvas style={{ position: 'absolute' }}>
          <Suspense fallback={null}>
            <Scene3D />
            <OrbitControls enableZoom={false} />
          </Suspense>
        </Canvas>
        <FloatingHearts />
        <MessageCard />
        <AudioVisualizer />
      </AppContainer>
    </>
  );
};

export default App; 