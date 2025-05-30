import React from 'react';
import styled from 'styled-components';

// This component is for "Book 1-on-1 with Marshall", using the calendar design
const BookOneOnOneCard = () => {
  return (
    <StyledWrapper>
      <div className="meeting-card">
        <div className="header">
          <div className="title">Book 1-on-1<br />with Marshall</div>
          <div className="date-selector" id="month-selector">
            <span>Select Date</span>
            <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
            </svg>
          </div>
        </div>
        <div className="calls-info">
          <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" viewBox="0 0 16 16" className="info-icon">
            <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
          </svg>
          <span>Direct Advisory Session</span>
        </div>
        <div className="date-nav-and-indicators">
          <div className="date-nav-container">
            <div className="day-item"><div className="day-number">M</div><div className="day-name">Mon</div></div>
            <div className="day-item"><div className="day-number">T</div><div className="day-name">Tue</div></div>
            <div className="day-item"><div className="day-number">W</div><div className="day-name">Wed</div></div>
            <div className="day-item day-active"><div className="day-number">Th</div><div className="day-name">Thu</div></div>
            <div className="day-item"><div className="day-number">F</div><div className="day-name">Fri</div></div>
            <div className="day-item"><div className="day-number">S</div><div className="day-name">Sat</div></div>
          </div>
          <div className="indicator-container">
            <div className="indicator-line" />
            <div className="indicator-dot" />
            <div className="indicator-dot" />
            <div className="indicator-dot" />
            <div className="indicator-dot indicator-active" />
            <div className="indicator-dot" />
            <div className="indicator-dot" />
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex; 
  justify-content: center; 
  align-items: center; 
  width: 100%; 
  height: 100%; 
  padding: 0.5rem; 

  .meeting-card {
    background-color: #e9eeea;
    border-radius: 2rem;
    padding: 1.5rem;
    width: 100%; 
    max-width: 488px; /* Changed from 380px */
    height: 100%; /* Added to make it fill the cell height */
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    /* flex-shrink: 0; // Not needed if height is 100% */
    display: flex; 
    flex-direction: column; 
    justify-content: space-between; 
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
  }
  .title {
    font-size: 1.75rem; 
    font-weight: bold;
    line-height: 1.2;
    color: #333; 
  }
  .date-selector {
    background-color: #e9eeea;
    border-radius: 9999px;
    padding: 0.7rem 1.2rem;
    cursor: pointer;
    border: 1px solid #d0d0ce;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    display: flex;
    align-items: center;
    transition: background-color 0.2s ease;
    color: #333; 
  }
  .date-selector:hover {
    background-color: #dededd;
  }
  .date-selector span {
    font-size: 1rem;
    font-weight: 500;
    margin-right: 0.5rem;
  }
  .calls-info {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    color: #555; 
  }
  .calls-info .info-icon {
    margin-right: 0.75rem; 
  }
  .calls-info span {
    font-size: 0.875rem;
  }
  .date-nav-and-indicators {
    position: relative;
    margin-top: auto; 
  }
  .date-nav-container {
    background-color: white;
    border-radius: 16px;
    padding: 12px 8px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 20px;
  }
  .day-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 100%;
    cursor: pointer; 
  }
  .day-number,
  .day-name {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    background-color: transparent;
    transition: background-color 0.2s ease;
    color: #333; 
  }
  .day-number {
    font-size: 1.2rem;
    font-weight: 600;
    height: 28px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding-top: 5px;
  }
  .day-name {
    font-size: 0.7rem;
    height: 20px;
    color: #666;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  .day-item:hover .day-number,
  .day-item:hover .day-name {
    background-color: #f8f8f8;
  }
  .day-active .day-number,
  .day-active .day-name {
    background-color: #f0ff7a;
    color: #333; 
  }
  .indicator-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: relative;
    padding: 0 28px;
    box-sizing: border-box;
  }
  .indicator-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #d0d0ce;
    position: relative;
    z-index: 2;
  }
  .indicator-active {
    background-color: #000;
  }
  .indicator-line {
    position: absolute;
    top: 50%;
    left: 32px;
    right: 32px;
    height: 1px;
    border-top: 1.5px dashed #d0d0ce;
    z-index: 1;
  }

  @media screen and (max-width: 480px) {
    .meeting-card {
      /* max-width: 100%; // Keep max-width: 488px or remove if it should be smaller on mobile */
      padding: 1rem;
      border-radius: 1.5rem;
    }
    /* ... other mobile styles ... */
  }

  @media screen and (max-width: 350px) {
    /* ... other mobile styles ... */
  }
`;

export default BookOneOnOneCard;
