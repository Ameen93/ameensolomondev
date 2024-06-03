import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  height: 100vh;
  background: url('/path/to/your/image.jpg') no-repeat center center;
  background-attachment: fixed;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  text-align: center;
`;

const ParallaxSection = () => {
  return (
    <Section>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>Stunning Visuals</h1>
        <p>Your message here with a beautiful background.</p>
      </motion.div>
    </Section>
  );
};

export default ParallaxSection;
