import React from 'react';
import Particles from 'react-particles-js';
import styled from 'styled-components';

const ParticleContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const ParticleBackground = () => {
  return (
    <ParticleContainer>
      <Particles
        params={{
          particles: {
            number: {
              value: 160,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: "#ffffff"
            },
            shape: {
              type: "circle"
            },
            opacity: {
              value: 0.5,
              random: true
            },
            size: {
              value: 3,
              random: true
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "repulse"
              },
              onclick: {
                enable: true,
                mode: "push"
              },
              resize: true
            }
          }
        }}
      />
    </ParticleContainer>
  );
};

export default ParticleBackground; 