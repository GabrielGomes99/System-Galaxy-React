import React, { Suspense } from 'react';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { GlobalStyle } from './styles/GlobalStyle';
import Galaxy from './components/Galaxy';
import SolarSystem from './components/SolarSystem';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #000000;
  position: relative;
`;

const Message = styled.div`
  position: fixed;
  top: 2rem;
  right: 2rem;
  color: white;
  font-size: 1.5rem;
  text-align: right;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  z-index: 10;
  pointer-events: none;
  max-width: 400px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  h1 {
    font-family: 'Playfair Display', serif;
    font-size: 2.5rem;
    background: linear-gradient(to right, #fff, #f0f0f0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  p {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2rem;
    opacity: 0.9;
    line-height: 1.4;
  }

  @media (max-width: 768px) {
    top: 1rem;
    right: 1rem;
    left: 1rem;
    text-align: center;
    padding: 1.5rem;
    
    h1 {
      font-size: 2rem;
    }
    
    p {
      font-size: 1rem;
    }
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Canvas camera={{ position: [0, 20, 35], fov: 75 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.1} />
            <pointLight position={[0, 0, 0]} intensity={2} color="#fff8e7" />
            <Stars radius={300} depth={50} count={5000} factor={4} />
            <Galaxy />
            <SolarSystem />
            <OrbitControls 
              enableZoom={true}
              enablePan={true}
              enableRotate={true}
              zoomSpeed={0.5}
              panSpeed={0.5}
              rotateSpeed={0.5}
            />
          </Suspense>
        </Canvas>
        <Message>
          <h1>Nosso Universo de Amor</h1>
          <p>Explore nosso sistema solar e descubra a beleza do nosso universo ❤️</p>
        </Message>
      </AppContainer>
    </>
  );
}

export default App;
