import React from 'react';
import { Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <Container
      id="resume"
      sx={{ my: 4 }}
      component={motion.div}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Typography variant="h4" component="h2" gutterBottom>
        Resume
      </Typography>
      <Typography variant="body1" paragraph>
        Placeholder for Resume content.
      </Typography>
    </Container>
  );
};

export default Resume;
