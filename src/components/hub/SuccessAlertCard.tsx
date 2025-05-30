import React from 'react';
import styled from 'styled-components';

// TODO: Consider making the text content and button action props for reusability
const SuccessAlertCard = () => {
  // The main click action to go to /questionnaire will be handled by the wrapper in HubPage.tsx
  // If the button "Never Stop" should have a different or no action, it can be handled here.
  const handleNeverStopClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // Prevent the parent div's onClick from firing if it has one
    // Potentially do something else, or nothing if it's just decorative
    console.log("Never Stop button clicked");
  };

  return (
    <StyledWrapper>
      <div className="notifications-container">
        <div className="dad-joke">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="dad-joke-svg">
                <path clipRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fillRule="evenodd" />
              </svg>
            </div>
            <div className="dad-joke-prompt-wrap">
              <p className="dad-joke-prompt-heading">Success Alert!</p>
              <div className="dad-joke-prompt">
                <p>
                  Spending too much time with A|P will transform you fundamentally and
                  make you a massive success
                </p>
              </div>
              <div className="dad-joke-button-container">
                <button className="dad-joke-button-main" type="button" onClick={handleNeverStopClick}>
                  Never Stop
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  /* This wrapper will be the grid item. 
     It helps center the card and manage its presence in the grid. */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.5rem; /* Allows card shadow/glow to be visible */
  cursor: pointer; /* If the whole card should navigate */

  .notifications-container {
    width: 320px;
    height: auto; /* Height will be determined by content */
    font-size: 0.875rem;
    line-height: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    /* Ensure it doesn't shrink if the parent StyledWrapper is flex item in grid */
    flex-shrink: 0; 
  }

  .flex {
    display: flex;
  }

  .flex-shrink-0 {
    flex-shrink: 0;
  }

  .dad-joke {
    padding: 1rem;
    border-radius: 0.375rem;
    background-color: rgb(248, 231, 28); /* Yellow background */
    box-shadow: 0 4px 10px rgba(0,0,0,0.1); /* Added a subtle shadow */
  }

  .dad-joke-svg {
    color: rgb(57, 55, 54); /* Darker color for better contrast on yellow */
    width: 1.25rem;
    height: 1.25rem;
  }

  .dad-joke-prompt-wrap {
    margin-left: 0.75rem;
  }

  .dad-joke-prompt-heading {
    font-weight: bold;
    color: rgb(57, 55, 54);
  }

  .dad-joke-prompt {
    margin-top: 0.5rem;
    color: rgb(57, 55, 54);
  }

  .dad-joke-button-container {
    display: flex;
    margin-top: 0.875rem;
    margin-bottom: -0.375rem; /* As per original */
    margin-left: -0.5rem;    /* As per original */
    margin-right: -0.5rem;   /* As per original */
  }

  .dad-joke-button-main {
    padding-top: 0.375rem;
    padding-bottom: 0.375rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    background-color: #f75404;
    color: #ffffff;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: bold;
    border-radius: 0.375rem;
    border: none;
    cursor: pointer; /* Ensure button itself shows pointer */
  }

  .dad-joke-button-main:hover {
    background-color: #d1410c;
  }
`;

export default SuccessAlertCard;
