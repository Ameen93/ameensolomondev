import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ReviewIcon from '@mui/icons-material/RateReview';
import StrategyIcon from '@mui/icons-material/BusinessCenter';
import UXIcon from '@mui/icons-material/DesignServices';
import DevelopmentIcon from '@mui/icons-material/Code';
import TestingIcon from '@mui/icons-material/BugReport';
import SupportIcon from '@mui/icons-material/Support';

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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;


const Card = styled(motion.div)`
  background-color: #2a2a2a;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const IconWrapper = styled.div`
  margin-bottom: 16px;
`;

const CardTitle = styled.h3`
  color: #00ff00;
  font-size: 1.25rem;
  margin-bottom: 8px;
`;

const Text = styled.p`
  font-size: 1rem;
  color: #cccccc;
  line-height: 1.6;
`;

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const ComprehensiveSolutions = () => {
  return (
    <Section id="comprehensive-solutions">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      >
        <Title>Comprehensive Website Solutions</Title>
        <Grid>
          <Card variants={cardVariants}>
            <IconWrapper>
              <ReviewIcon style={{ fontSize: '40px', color: '#00ff00' }} />
            </IconWrapper>
            <CardTitle>Website Review</CardTitle>
            <Text>
              I conduct an in-depth review of your website to ensure optimal performance before implementing any changes.
            </Text>
          </Card>

          <Card variants={cardVariants}>
            <IconWrapper>
              <StrategyIcon style={{ fontSize: '40px', color: '#00ff00' }} />
            </IconWrapper>
            <CardTitle>Business Strategy</CardTitle>
            <Text>
              Together, we'll discuss your objectives and set clear goals, devising a plan to achieve them through your website.
            </Text>
          </Card>

          <Card variants={cardVariants}>
            <IconWrapper>
              <UXIcon style={{ fontSize: '40px', color: '#00ff00' }} />
            </IconWrapper>
            <CardTitle>User Experience Design</CardTitle>
            <Text>
              I create an intuitive design, making your website easy to navigate and guiding users toward the desired outcomes.
            </Text>
          </Card>

          <Card variants={cardVariants}>
            <IconWrapper>
              <DevelopmentIcon style={{ fontSize: '40px', color: '#00ff00' }} />
            </IconWrapper>
            <CardTitle>Tailored Development</CardTitle>
            <Text>
              Whether you need a simple, flexible site, a custom storefront, or a SaaS product, I develop with your specific goals in mind.
            </Text>
          </Card>

          <Card variants={cardVariants}>
            <IconWrapper>
              <TestingIcon style={{ fontSize: '40px', color: '#00ff00' }} />
            </IconWrapper>
            <CardTitle>Rigorous Testing</CardTitle>
            <Text>
              I guarantee top-notch quality by employing multiple testing methods to thoroughly vet your website.
            </Text>
          </Card>

          <Card variants={cardVariants}>
            <IconWrapper>
              <SupportIcon style={{ fontSize: '40px', color: '#00ff00' }} />
            </IconWrapper>
            <CardTitle>Ongoing Support</CardTitle>
            <Text>
              Your website evolves over time. I'm here to assist with new features or improvements, ensuring continuous growth.
            </Text>
          </Card>
        </Grid>
      </motion.div>
    </Section>
  );
};

export default ComprehensiveSolutions;
