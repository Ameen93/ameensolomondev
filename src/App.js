import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import ContactMe from './components/ContactMe';
import LoadingScreen from './components/LoadingScreen';
import { Container } from '@mui/material';

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  const handleLoadingComplete = () => {
    setLoadingComplete(true);
  };

  return (
    <>
      {!loadingComplete ? (
        <LoadingScreen onComplete={handleLoadingComplete} />
      ) : (
        <Router>
          <Layout>
            <Container sx={{ mt: 4 }}>
              <AboutMe />
              <Experience />
              <Portfolio />
              <ContactMe />
            </Container>
          </Layout>
        </Router>
      )}
    </>
  );
}

export default App;
