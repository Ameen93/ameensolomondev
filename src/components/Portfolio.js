import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  margin: 40px 0;
`;

const Title = styled.h2`
  color: #00ff00;
  font-size: 2.5rem;
  font-size: 1.5rem; /* Smaller font size */
`;

const Portfolio = () => {
  return (
    <Section id="portfolio">
      <Title>Portfolio</Title>
      <p>
        Here is a showcase of my work and projects that I have developed over the years.
      </p>
    </Section>
  );
};

export default Portfolio;
