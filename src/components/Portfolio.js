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

const Portfolio = () => {
  return (
    <Section id="portfolio">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Title>Portfolio</Title>
        <Text>
          Here is a showcase of my work and projects that I have developed over the years. Each project demonstrates my skills and expertise in different areas of software development.
        </Text>
        {/* Add project details here */}
      </motion.div>
    </Section>
  );
};

export default Portfolio;
