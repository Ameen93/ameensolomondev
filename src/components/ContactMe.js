import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  margin: 40px 0;
`;

const Title = styled.h2`
  color: #00ff00;
  font-size: 1.5rem; /* Smaller font size */
`;

const ContactMe = () => {
  return (
    <Section id="contact-me">
      <Title>Contact Me</Title>
      <p>
        Feel free to get in touch with me through the contact form or via email.
      </p>
    </Section>
  );
};

export default ContactMe;
