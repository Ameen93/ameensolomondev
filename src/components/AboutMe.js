import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  margin: 20px 0; /* Adjusted margin for smaller size */
  padding: 10px; /* Adjusted padding for smaller size */
  background-color: #1a1a1a;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: #00ff00;
  font-size: 1rem; /* Even smaller font size */
  margin-bottom: 8px; /* Adjusted margin for smaller size */
`;

const Text = styled.p`
  font-size: 0.75rem; /* Even smaller font size */
  color: #cccccc;
  line-height: 1.2; /* Adjusted line height for smaller size */
  margin-bottom: 8px; /* Adjusted margin for smaller size */
`;

const AboutMe = () => {
  return (
    <Section id="about-me">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Title>About Me</Title>
        <Text>
          Back in 2016, I started my journey into the world of software development as a Junior Developer at Chouette Software Solutions, where I developed and maintained iOS and Android apps for medical data collection. Since then, my passion for coding has only grown stronger, leading me through various roles and experiences that have shaped my career.
        </Text>
        <Text>
          Today, I am a Full Stack Developer at DealersOnline, where I have the opportunity to create impactful software solutions, from developing third-party integrations to building custom web applications. My work spans across diverse technologies such as Python, JavaScript, React, NodeJS, and more. I particularly enjoy the challenge of database management and creating efficient SQL procedures.
        </Text>
        <Text>
          I take pride in my ability to bridge the gap between design and functionality, ensuring that the software I build is not only robust under the hood but also provides an excellent user experience. My academic background in IT and Software Development from Varsity College has provided me with a solid foundation in languages like C#, Python, and Java, along with a comprehensive understanding of web development, cybersecurity, and systems analysis.
        </Text>
        <Text>
          Outside of my professional life, I am an avid gamer and hiker, always looking for the next adventure. I enjoy personal development, music, and cinema, which help me stay creative and inspired. Whether I'm working on a complex project at work or exploring new trails, I bring dedication and enthusiasm to everything I do.
        </Text>
      </motion.div>
    </Section>
  );
};

export default AboutMe;
