import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  max-width: 600px;
  margin: 2rem;
  position: relative;
  z-index: 10;
`;

const Title = styled(motion.h1)`
  font-family: 'Dancing Script', cursive;
  color: #fff;
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Text = styled(motion.p)`
  color: #fff;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const MessageCard = () => {
  return (
    <Card
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Title
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Para a Minha Eterna Inspiração
      </Title>
      {/* ... resto do conteúdo ... */}
    </Card>
  );
};

export default MessageCard; 