import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
  import ContactMe from './components/ContactMe';
import ComprehensiveSolutions from './components/ComprehensiveSolutions';
import CenteredText from './components/CenteredText';
import LoadingScreen from './components/LoadingScreen';
import { Container } from '@mui/material';

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  const handleLoadingComplete = () => {
    setLoadingComplete(true);
  };

  return (
    <Router>
      {!loadingComplete ? (
        <LoadingScreen onComplete={handleLoadingComplete} />
      ) : (
        <Layout>
          <Container sx={{ mt: 4 }}>
            <CenteredText />
            <AboutMe />
            <Experience />
            <ComprehensiveSolutions />
            <ContactMe />
          </Container>
        </Layout>
      )}
    </Router>
  );
}

export default App;
