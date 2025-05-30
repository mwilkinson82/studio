import React from 'react';
import styled from 'styled-components';

const EngineStartButton = () => { // Renamed from Checkbox
  return (
    <StyledWrapper>
      <label className="container">
        <input type="checkbox" defaultChecked={true} /> {/* Changed to controlled boolean for React */}
        <div className="circle">
          <div className="led" />
          <span className="engine-text">ENGINE</span>
          <span className="start-text">START</span>
          <span className="stop-text">STOP</span>
        </div>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  /* Hide the default checkbox */
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .container {
    display: block;
    position: relative;
    cursor: pointer;
    font-size: 20px; /* Base font size for em calculations */
    user-select: none;
  }

  /* Create a custom checkbox checkmark=outer-circle */
  .circle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 6em; /* approx 120px at 20px font-size */
    height: 6em; /* approx 120px */
    border-radius: 50%;
    border: 6px solid #838996;
    background-color: #282828;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    transition: box-shadow 0.2s ease-in-out; /* Added transition for shadow */
  }

  .circle span {
    color: #e5e4e2;
    font-size: 0.6em; /* Adjusted from small for em consistency */
    letter-spacing: 0.05em;
  }

  .circle .led {
    width: 1em;    /* 20px */
    height: 0.2em; /* 4px */
    background-color: #BBBBBB;
    border-radius: 3px; /* Adjusted for smaller em size */
    transition: 0.4s;
    margin-bottom: 0.5em;
  }

  .engine-text {
    margin-top: 0.25em; /* Adjusted from 0.75em */
    font-weight: 500;
  }

  .start-text,
  .stop-text {
    font-weight: 600;
    font-size: 0.7em; /* Slightly larger for START/STOP */
  }

  /* When the checkbox is checked, style the LED and circle */
  .container input:checked ~ .circle .led {
    background-color: #FDDA16;
    box-shadow: #FDDA16 0px 0px 3px, #FDDA16 0px 0px 15px; /* Adjusted shadow for LED */
  }

  .container input:checked ~ .circle {
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
     rgba(14, 30, 37, 0.32) 0px 2px 16px 0px,
     inset 3px 3px 8px 1px #485871,
     inset -3px -3px 8px 1px #485871;
  }
`;

export default EngineStartButton;
