import React from 'react';
import styled from 'styled-components';

const YouTubeStatsCard = () => {
  const handleCardClick = () => {
    window.open('https://www.youtube.com/marshallwilkinson', '_blank', 'noopener,noreferrer');
  };

  return (
    <StyledWrapper onClick={handleCardClick}>
      <div className="outer">
        <div className="dot" />
        <div className="card">
          <div className="ray" />
          <div className="text">1.2M</div> 
          <div className="views-text">Views</div> {/* Added class for specific styling */}
          <div className="line topl" />
          <div className="line leftl" />
          <div className="line bottoml" />
          <div className="line rightl" />
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  cursor: pointer; 
  width: 100%; /* Ensure wrapper takes full cell width */
  height: 100%; /* Ensure wrapper takes full cell height */
  display: flex; /* To center .outer if it's not 100% (though it will be) */
  justify-content: center;
  align-items: center;
  padding: 0.5rem; /* Add some padding if needed, or remove if card has its own */
  box-sizing: border-box;

  .outer {
    width: 100%; /* Changed from 300px */
    height: 100%; /* Changed from 250px */
    border-radius: 10px;
    padding: 1px; /* This might be for the gradient border effect */
    background: radial-gradient(circle 230px at 0% 0%, #ffffff, #0c0d0d);
    position: relative;
    box-sizing: border-box;
  }

  .dot {
    width: 5px;
    aspect-ratio: 1;
    position: absolute;
    background-color: #fff;
    box-shadow: 0 0 10px #ffffff;
    border-radius: 100px;
    z-index: 2;
    right: 10%;
    top: 10%;
    animation: moveDot 6s linear infinite;
  }

  @keyframes moveDot {
    0%,
    100% {
      top: 10%;
      right: 10%;
    }
    25% {
      top: 10%;
      right: calc(100% - 35px - 5px); /* Adjusted for dot width */
    }
    50% {
      top: calc(100% - 30px - 5px); /* Adjusted for dot height */
      right: calc(100% - 35px - 5px);
    }
    75% {
      top: calc(100% - 30px - 5px);
      right: 10%;
    }
  }

  .card {
    z-index: 1;
    width: 100%;
    height: 100%;
    border-radius: 9px; /* Slightly less than .outer for inset effect */
    border: solid 1px #202222;
    background-size: 20px 20px;
    background: radial-gradient(circle 280px at 0% 0%, #444444, #0c0d0d);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-direction: column;
    color: #fff;
    box-sizing: border-box;
  }
  .ray {
    width: 220px;
    height: 45px;
    border-radius: 100px;
    position: absolute;
    background-color: #c7c7c7;
    opacity: 0.4;
    box-shadow: 0 0 50px #fff;
    filter: blur(10px);
    transform-origin: 10%;
    top: 0%;
    left: 0;
    transform: rotate(40deg);
  }

  .card .text {
    font-weight: bolder;
    font-size: 3rem; /* Slightly reduced for smaller cells */
    background: linear-gradient(45deg, #000000 4%, #fff, #000);
    background-clip: text;
    -webkit-background-clip: text; /* For Safari compatibility */
    color: transparent;
    width: 100%; /* Ensure it takes full width for text-align */
    text-align: center; /* Explicitly center text */
    line-height: 1; /* Adjust line height if font size causes issues */
  }

  .card .views-text {
    width: 100%; /* Ensure it takes full width for text-align */
    text-align: center; /* Explicitly center text */
    font-size: 0.9rem; /* Adjust size as needed */
    margin-top: 0.25rem; /* Space between "1.2M" and "Views" */
  }

  .line {
    width: 100%;
    height: 1px;
    position: absolute;
    background-color: #2c2c2c;
  }
  .topl {
    top: 10%;
    background: linear-gradient(90deg, #888888 30%, #1d1f1f 70%);
  }
  .bottoml {
    bottom: 10%;
  }
  .leftl {
    left: 10%;
    width: 1px;
    height: 100%;
    background: linear-gradient(180deg, #747474 30%, #222424 70%);
  }
  .rightl {
    right: 10%;
    width: 1px;
    height: 100%;
  }
`;

export default YouTubeStatsCard;
