import React from 'react';
import Image from 'next/image';
import styled, { keyframes } from 'styled-components';

const slideInFromRight = keyframes`
  from {
    transform: translateX(100vw);
    opacity: 0;
  }
  60% {
    opacity: 1;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const StyledWrapper = styled.div`
  position: fixed; 
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #ffffff; 
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999; /* Even higher z-index */
  overflow: hidden; 
`;

const AnimatedLogoContainer = styled.div`
  animation: ${slideInFromRight} 0.7s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
  opacity: 0; 
`;

const CustomLoader = () => {
  console.log("CustomLoader rendering"); // DEBUG LINE
  return (
    <StyledWrapper>
      <AnimatedLogoContainer>
        <Image
          src="/ALP Logo transparent.png" 
          alt="Loading A|P Platform..."
          width={250} 
          height={250} 
          priority
          unoptimized // Added as a test if there are image optimization issues
        />
      </AnimatedLogoContainer>
    </StyledWrapper>
  );
};

export default CustomLoader;
