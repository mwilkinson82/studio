import React from 'react';
import styled from 'styled-components';

const UpcomingEventsCard = () => {
  // TODO: Add logic for date selection and fetching/displaying actual event data
  return (
    <StyledWrapper>
      <div className="meeting-card">
        <div className="header">
          <div className="title">a|p Live<br />Events</div>
          <div className="date-selector" id="month-selector">
            <span>This Month</span>
            <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
            </svg>
          </div>
        </div>
        <div className="calls-info">
          <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" viewBox="0 0 16 16">
            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
          </svg>
          <span>3 calls • Thu, 11</span>
        </div>
        <div className="date-nav-and-indicators">
          <div className="date-nav-container">
            <div className="day-item">
              <div className="day-number">8</div>
              <div className="day-name">Mon</div>
            </div>
            <div className="day-item">
              <div className="day-number">9</div>
              <div className="day-name">Tue</div>
            </div>
            <div className="day-item">
              <div className="day-number">10</div>
              <div className="day-name">Wed</div>
            </div>
            <div className="day-item day-active">
              <div className="day-number">11</div>
              <div className="day-name">Thu</div>
            </div>
            <div className="day-item">
              <div className="day-number">12</div>
              <div className="day-name">Fri</div>
            </div>
            <div className="day-item">
              <div className="day-number">13</div>
              <div className="day-name">Sat</div>
            </div>
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
  .meeting-card {
    background-color: #e9eeea;
    border-radius: 2rem;
    padding: 1.5rem;
    width: 100%;
    max-width: 380px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    /* Ensure it doesn't shrink in a flex/grid context if not desired */
    flex-shrink: 0;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  .title {
    font-size: 1.875rem;
    font-weight: bold;
    line-height: 1.2;
    color: #333; /* Added a default color for better visibility */
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
    color: #333; /* Added a default color */
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
    color: #555; /* Added a default color */
  }

  .calls-info span {
    margin-left: 0.5rem;
    font-size: 0.875rem;
  }

  .date-nav-and-indicators {
    position: relative;
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
    cursor: pointer; /* Indicate days are clickable */
  }

  .day-number,
  .day-name {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    background-color: transparent;
    transition: background-color 0.2s ease;
    color: #333; /* Default text color for day items */
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
    color: #333; /* Ensure text is readable on active background */
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
      max-width: 100%;
      padding: 1rem;
      border-radius: 1.5rem;
    }

    .title {
      font-size: 1.5rem;
    }

    .date-selector {
      padding: 0.5rem 0.8rem;
    }

    .date-selector span {
      font-size: 0.9rem;
    }

    .day-number,
    .day-name {
      width: 36px;
    }

    .day-number {
      font-size: 1rem;
    }

    .day-name {
      font-size: 0.65rem;
    }

    .indicator-container {
      padding: 0 24px;
    }

    .indicator-line {
      left: 28px;
      right: 28px;
    }

    .calls-info span {
      font-size: 0.75rem;
    }
  }

  @media screen and (max-width: 350px) {
    .meeting-card {
      padding: 0.8rem;
    }

    .header {
      flex-direction: column;
      align-items: flex-start;
    }

    .date-selector {
      margin-top: 0.5rem;
    }

    .day-number,
    .day-name {
      width: 30px;
    }

    .day-number {
      font-size: 0.9rem;
    }

    .day-name {
      font-size: 0.6rem;
    }

    .indicator-container {
      padding: 0 20px;
    }

    .indicator-line {
      left: 24px;
      right: 24px;
    }
  }
`;

export default UpcomingEventsCard;
