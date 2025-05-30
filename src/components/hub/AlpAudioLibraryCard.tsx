import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const AlpAudioLibraryCard = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <Image
          src="/Air Pod Max.webp" 
          alt="A|P Audio Library - AirPod Max"
          fill 
          style={{ objectFit: 'contain' }} 
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 30vw" // More specific sizes
          priority 
        />
        <div className="label-overlay">
          a|p audio's
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%; 
  padding: 0.5rem; 
  box-sizing: border-box;
  display: flex; 
  align-items: center;
  justify-content: center;

  .card {
    width: 100%; 
    height: 100%; 
    background-color: #f0f2f5; 
    border-radius: 20px; 
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    position: relative; /* This is CRUCIAL for Next/Image with fill prop */
    overflow: hidden; 
    display: flex; 
    align-items: center;
    justify-content: center;
  }

  .label-overlay {
    position: absolute;
    bottom: 12px; 
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0,0,0,0.65);
    color: white;
    padding: 6px 12px;
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: 500;
    z-index: 1;
    text-align: center;
    white-space: nowrap;
  }
`;

export default AlpAudioLibraryCard;
