import React, { useEffect, useState, useMemo } from 'react';
import styled, { keyframes } from 'styled-components';

const blink = keyframes`
  50% { border-color: transparent; }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  background-color: black;
  color: #00ff00;
  font-family: 'Courier New', Courier, monospace;
  padding-left: 20px;
  text-align: left;
`;

const TypingText = styled.div`
  font-size: 2rem;
  border-right: 0.15em solid #00ff00;
  white-space: nowrap;
  overflow: hidden;
  animation: ${blink} 0.75s step-end infinite;
`;

const Spacer = styled.div`
  height: 2rem;
`;

const LoadingScreen = ({ onComplete }) => {
  const [displayedText, setDisplayedText] = useState(['', '', '']);

  const fullText = useMemo(() => [
    'Ameen Solomon',
    'Senior Fullstack Developer',
    'Press any key or click to continue...'
  ], []);

  useEffect(() => {
    let partIndex = 0;
    let charIndex = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => {
        const newText = [...prev];
        if (partIndex < fullText.length) {
          newText[partIndex] = fullText[partIndex].slice(0, charIndex + 1);
        }
        return newText;
      });

      charIndex++;
      if (partIndex < fullText.length && charIndex === fullText[partIndex].length) {
        charIndex = 0;
        partIndex++;
        if (partIndex === fullText.length) {
          clearInterval(interval);
        }
      }
    }, 100);

    const handleEvent = () => {
      onComplete();
    };

    window.addEventListener('keydown', handleEvent);
    window.addEventListener('click', handleEvent);

    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', handleEvent);
      window.removeEventListener('click', handleEvent);
    };
  }, [fullText, onComplete]);

  return (
    <Container>
      {displayedText.map((line, index) => (
        <React.Fragment key={index}>
          <TypingText>{line}</TypingText>
          {index < displayedText.length - 1 && <Spacer />}
        </React.Fragment>
      ))}
    </Container>
  );
};

export default LoadingScreen;
