import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// Animação de flutuação
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

// Animação de brilho
const glow = keyframes`
  0% { box-shadow: 0 0 5px rgba(255,255,255,0.5), 0 0 10px rgba(255,255,255,0.3); }
  50% { box-shadow: 0 0 20px rgba(255,255,255,0.8), 0 0 30px rgba(255,255,255,0.5); }
  100% { box-shadow: 0 0 5px rgba(255,255,255,0.5), 0 0 10px rgba(255,255,255,0.3); }
`;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(45deg, #0f0c29, #302b63, #24243e);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

const Message = styled.div`
  color: white;
  font-size: 2rem;
  text-align: center;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  animation: ${float} 6s ease-in-out infinite;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  h1 {
    font-family: 'Playfair Display', serif;
    margin-bottom: 1rem;
    font-size: 3.5rem;
    background: linear-gradient(to right, #fff, #f0f0f0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
    opacity: 0.9;
  }

  &:hover {
    animation: ${glow} 2s ease-in-out infinite;
    transform: scale(1.02);
    transition: transform 0.3s ease;
  }
`;

const Heart = styled.span`
  color: #ff6b6b;
  font-size: 1.5rem;
  display: inline-block;
  animation: pulse 1.5s infinite;

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.3); }
    100% { transform: scale(1); }
  }
`;

const Star = styled.div`
  position: absolute;
  width: 2px;
  height: 2px;
  background: white;
  border-radius: 50%;
  opacity: ${props => props.opacity};
  top: ${props => props.top}%;
  left: ${props => props.left}%;
  animation: twinkle ${props => props.duration}s infinite;

  @keyframes twinkle {
    0% { opacity: ${props => props.opacity}; }
    50% { opacity: 0.2; }
    100% { opacity: ${props => props.opacity}; }
  }
`;

function App() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Criar 100 estrelas com posições aleatórias
    const newStars = Array.from({ length: 100 }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      opacity: Math.random() * 0.8 + 0.2,
      duration: Math.random() * 3 + 2
    }));
    setStars(newStars);
  }, []);

  return (
    <AppContainer>
      {stars.map((star, i) => (
        <Star 
          key={i}
          top={star.top}
          left={star.left}
          opacity={star.opacity}
          duration={star.duration}
        />
      ))}
      <Message>
        <h1>Nosso Site Romântico</h1>
        <p>Em construção... <Heart>❤️</Heart></p>
      </Message>
    </AppContainer>
  );
}

export default App;
