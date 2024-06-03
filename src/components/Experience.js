import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  margin: 40px 0;
  padding: 20px;
  background-color: #1a1a1a;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: #00ff00;
  font-size: 1.5rem;
  margin-bottom: 16px;
`;

const Text = styled.p`
  font-size: 1rem;
  color: #cccccc;
  line-height: 1.6;
`;

const Experience = () => {
  return (
    <Section id="experience">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Title>Experience</Title>
        <Text>
          Here is a detailed description of my professional experience in the field of software development.
        </Text>
      </motion.div>
    </Section>
  );
};

export default Experience;
