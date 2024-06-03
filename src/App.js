import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import Layout from './components/Layout';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import ContactMe from './components/ContactMe';
import ComprehensiveSolutions from './components/ComprehensiveSolutions';
import CenteredText from './components/CenteredText';
import LoadingScreen from './components/LoadingScreen';
import { Container } from '@mui/material';
import styled from 'styled-components';

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  background-color: #0d0d0d;
  color: #00ff00;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(ScrollLink)`
  cursor: pointer;
  color: #00ff00;
  text-decoration: none;
  font-size: 0.875rem;
  &:hover {
    color: #00cc00;
  }
`;

const CustomButton = styled.button`
  color: #00ff00;
  font-size: 0.875rem;
  border: 2px solid #00ff00;
  padding: 4px 8px;
  background: none;
  cursor: pointer;
  &:hover {
    background-color: #00ff00;
    color: #0d0d0d;
  }
`;

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  const handleLoadingComplete = () => {
    setLoadingComplete(true);
  };

  const openResume = () => {
    window.open('/path/to/resume.pdf', '_blank');
  };

  return (
    <Router>
      {!loadingComplete ? (
        <LoadingScreen onComplete={handleLoadingComplete} />
      ) : (
        <>
          <Navbar>
            <NavLink to="top" smooth={true} duration={500}>
              <span style={{ color: '#00ff00', fontSize: '1rem' }}>Ameen Solomon</span>
            </NavLink>
            <NavLinks>
              <NavLink to="about-me" smooth={true} duration={500}>About Me</NavLink>
              <NavLink to="experience" smooth={true} duration={500}>Experience</NavLink>
              <NavLink to="portfolio" smooth={true} duration={500}>Portfolio</NavLink>
              <NavLink to="comprehensive-solutions" smooth={true} duration={500}>Solutions</NavLink>
              <NavLink to="contact-me" smooth={true} duration={500}>Contact Me</NavLink>
            </NavLinks>
            <CustomButton onClick={openResume}>My Resume</CustomButton>
          </Navbar>
          <Layout>
            <Container sx={{ mt: 4 }}>
              <CenteredText />
              <AboutMe />
              <Experience />
              <Portfolio />
              <ComprehensiveSolutions />
              <ContactMe />
            </Container>
          </Layout>
        </>
      )}
    </Router>
  );
}

export default App;
