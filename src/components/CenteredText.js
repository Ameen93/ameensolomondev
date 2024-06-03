import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full viewport height */
  text-align: center;
  padding: 20px;
  background-color: #0d0d0d; /* Match the background color */
`;

const SmallText = styled(motion.h1)`
  font-size: 2rem;
  color: #00ff00;
  margin-bottom: 20px;
`;

const LargeText = styled(motion.h2)`
  font-size: 3rem;
  color: #00ff00;
`;

const CenteredText = () => {
  return (
    <Section>
      <SmallText
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Design. Build. Optimize.
      </SmallText>
      <LargeText
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        I craft comprehensive solutions your users will love.
      </LargeText>
    </Section>
  );
};
 
export default CenteredText;
