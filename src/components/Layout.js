import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import styled from 'styled-components';
import GlobalStyle from '../globalStyles';

const TopSection = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 8px; /* Further adjusted padding for smaller size */
  width: 100%;
  background-color: black;
  color: #00ff00;
  border-bottom: 1px solid #00ff00; /* Adjusted border for smaller size */
`;

const CustomButton = styled(Button)`
  color: #00ff00 !important;
  font-size: 0.625rem !important; /* Even smaller font size */
  border: 1px solid #00ff00 !important; /* Adjusted border for smaller size */
  padding: 2px 4px !important; /* Adjusted padding for smaller size */
  transition: background-color 0.3s, color 0.3s, transform 0.3s;

  &:hover {
    background-color: #00ff00 !important;
    color: #0d0d0d !important;
    transform: translateY(-2px);
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px; /* Adjusted padding for smaller size */
`;

const Layout = ({ children }) => {
  const openResume = () => {
    window.open('/path/to/resume.pdf', '_blank');
  };

  return (
    <>
      <GlobalStyle />
      <TopSection>
        <Typography variant="h6" style={{ color: '#00ff00', fontSize: '0.75rem' }}>
          Ameen Solomon
        </Typography>
        <CustomButton onClick={openResume}>
          My Resume
        </CustomButton>
      </TopSection>
      <ContentContainer>
        {children}
      </ContentContainer>
    </>
  );
};

export default Layout;
