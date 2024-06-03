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

const Job = styled(motion.div)`
  margin-bottom: 24px;
`;

const JobTitle = styled.h3`
  color: #00ff00;
  font-size: 1.25rem;
  margin-bottom: 8px;
`;

const JobDetails = styled.div`
  color: #cccccc;
  font-size: 1rem;
  margin-bottom: 8px;
`;

const Text = styled.p`
  font-size: 1rem;
  color: #cccccc;
  line-height: 1.6;
  margin-bottom: 16px;
`;

const List = styled.ul`
  padding-left: 20px;
  margin-bottom: 16px;
`;

const ListItem = styled.li`
  margin-bottom: 8px;
`;

const jobVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Experience = () => {
  return (
    <Section id="experience">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      >
        <Title>Experience</Title>
        
        <Job variants={jobVariants}>
          <JobTitle>Full Stack Developer | DealersOnline (Barloworld)</JobTitle>
          <JobDetails>Oct 2018 – Present</JobDetails>
          <Text>
            At DealersOnline, I have had the opportunity to work on various impactful projects, such as:
          </Text>
          <List>
            <ListItem>
              <strong>Bank Integrations:</strong> Developed seamless third-party integrations with major banks to facilitate automated data exchange, enhancing the accuracy and speed of financial transactions.
            </ListItem>
            <ListItem>
              <strong>Client Product Update Application:</strong> Created a web application for clients to enter product updates and automate CSV file creation, significantly reducing manual data entry and increasing productivity.
            </ListItem>
          </List>
          <Text>
            <strong>Key technologies:</strong> Python, JavaScript, React, NodeJS, SQL, Docker, Git, Linux.
          </Text>
        </Job>
        
        <Job variants={jobVariants}>
          <JobTitle>Full Stack Developer | Emerald Life</JobTitle>
          <JobDetails>April 2017 – September 2018</JobDetails>
          <Text>
            During my tenure at Emerald Life, I focused on developing and maintaining web applications for the insurance sector in an Agile environment. Key projects include:
          </Text>
          <List>
            <ListItem>
              <strong>Business Operations Tracker:</strong> Designed and developed a web application to track and record business operations and assets, improving operational transparency and data management.
            </ListItem>
          </List>
          <Text>
            <strong>Key technologies:</strong> Python/Django, JavaScript, AJAX, Git, Linux.
          </Text>
        </Job>
        
        <Job variants={jobVariants}>
          <JobTitle>Junior Developer | Katchmi Technologies</JobTitle>
          <JobDetails>June 2016 – December 2016</JobDetails>
          <Text>
            At Katchmi Technologies, I worked on creating and maintaining web applications using C# and ASP.net. A significant project involved:
          </Text>
          <List>
            <ListItem>
              <strong>RESTful API Development:</strong> Built and maintained robust APIs using ASP.net MVC & C#, ensuring efficient and reliable data exchange between client systems and our platform.
            </ListItem>
          </List>
          <Text>
            <strong>Key technologies:</strong> C#, ASP.net, MySQL, Git.
          </Text>
        </Job>
        
        <Job variants={jobVariants}>
          <JobTitle>Junior Developer | Chouette Software Solutions</JobTitle>
          <JobDetails>April 2016 – June 2016</JobDetails>
          <Text>
            My role involved developing and maintaining iOS and Android apps for medical data collection, enhancing the efficiency and accuracy of healthcare data management.
          </Text>
          <Text>
            <strong>Key technologies:</strong> JavaScript, Apache Cordova, Xamarin.
          </Text>
        </Job>
      </motion.div>
    </Section>
  );
};

export default Experience;
