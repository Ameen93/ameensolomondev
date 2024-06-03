import React, { useState } from 'react';
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 6px; /* Adjusted padding for smaller size */
  margin-bottom: 6px; /* Adjusted margin for smaller size */
  border: 1px solid #cccccc;
  border-radius: 4px;
  background-color: #2a2a2a;
  color: #ffffff;
  font-size: 0.75rem; /* Even smaller font size */
`;

const TextArea = styled.textarea`
  padding: 6px; /* Adjusted padding for smaller size */
  margin-bottom: 6px; /* Adjusted margin for smaller size */
  border: 1px solid #cccccc;
  border-radius: 4px;
  background-color: #2a2a2a;
  color: #ffffff;
  font-size: 0.75rem; /* Even smaller font size */
`;

const Button = styled.button`
  padding: 6px; /* Adjusted padding for smaller size */
  border: none;
  border-radius: 4px;
  background-color: #00ff00;
  color: #0d0d0d;
  font-size: 0.75rem; /* Even smaller font size */
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #00cc00;
  }
`;

const ContactMe = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Contact Form Submission');
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:ameen.solomon@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <Section id="contact-me">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Title>Contact Me</Title>
        <Text>
          I assist growing companies like yours in boosting customer conversions and increasing sales by aligning your goals with your users' needs.
        </Text>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextArea
            placeholder="Your Message"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <Button type="submit">Send Message</Button>
        </Form>
      </motion.div>
    </Section>
  );
};

export default ContactMe;
