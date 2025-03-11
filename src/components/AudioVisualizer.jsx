import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import * as Tone from 'tone';

const VisualizerContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 2px;
`;

const Bar = styled.div`
  width: 4px;
  background: linear-gradient(to top, #fff, rgba(255,255,255,0.5));
  transition: height 0.1s ease;
`;

const AudioVisualizer = () => {
  const analyserRef = useRef(null);
  const barsRef = useRef([]);

  useEffect(() => {
    const player = new Tone.Player("URL_DA_SUA_MUSICA").toDestination();
    const analyser = new Tone.Analyser("waveform", 128);
    player.connect(analyser);
    analyserRef.current = analyser;

    // Criar barras do visualizador
    barsRef.current = Array(64).fill().map(() => ({
      height: 0,
      element: document.createElement('div')
    }));

    const animate = () => {
      const values = analyserRef.current.getValue();
      barsRef.current.forEach((bar, i) => {
        bar.height = Math.abs(values[i]) * 100;
        bar.element.style.height = `${bar.height}px`;
      });
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      player.dispose();
      analyser.dispose();
    };
  }, []);

  return (
    <VisualizerContainer>
      {barsRef.current.map((_, i) => (
        <Bar key={i} ref={el => barsRef.current[i].element = el} />
      ))}
    </VisualizerContainer>
  );
};

export default AudioVisualizer; 