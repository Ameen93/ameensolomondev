import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
  margin-bottom: 16px;
`;

const AboutMe = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Section ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
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
