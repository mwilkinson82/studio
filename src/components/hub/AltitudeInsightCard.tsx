import React from 'react';
import styled from 'styled-components';

const AltitudeInsightCard = () => {
  // TODO: Make content dynamic (fetch daily insight, author, interaction counts)
  // TODO: Add click handlers for interaction icons if they are functional
  return (
    <StyledWrapper>
      <div className="card">
        <div className="body">
          <p className="text">Everything you endeavor will always take more effort than you estimate. Humans underestimate the amount of effort it is to accomplish anything.</p>
          <span className="username">from: - Marshall Wilkinson</span> {/* Updated Author */}
          <div className="footer">
            <div>
              {/* Placeholder interaction icons and counts */}
              <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g strokeWidth={0} id="SVGRepo_bgCarrier" /><g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier" /><g id="SVGRepo_iconCarrier"> <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" d="M16 10H16.01M12 10H12.01M8 10H8.01M3 10C3 4.64706 5.11765 3 12 3C18.8824 3 21 4.64706 21 10C21 15.3529 18.8824 17 12 17C11.6592 17 11.3301 16.996 11.0124 16.9876L7 21V16.4939C4.0328 15.6692 3 13.7383 3 10Z" /> </g></svg>18</div>
              <div><svg fill="#000000" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-2.5 0 32 32"><g strokeWidth={0} id="SVGRepo_bgCarrier" /><g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier" /><g id="SVGRepo_iconCarrier"> <g id="icomoon-ignore"> </g> <path fill="#000000" d="M0 10.284l0.505 0.36c0.089 0.064 0.92 0.621 2.604 0.621 0.27 0 0.55-0.015 0.836-0.044 3.752 4.346 6.411 7.472 7.060 8.299-1.227 2.735-1.42 5.808-0.537 8.686l0.256 0.834 7.63-7.631 8.309 8.309 0.742-0.742-8.309-8.309 7.631-7.631-0.834-0.255c-2.829-0.868-5.986-0.672-8.686 0.537-0.825-0.648-3.942-3.3-8.28-7.044 0.11-0.669 0.23-2.183-0.575-3.441l-0.352-0.549-8.001 8.001zM1.729 10.039l6.032-6.033c0.385 1.122 0.090 2.319 0.086 2.334l-0.080 0.314 0.245 0.214c7.409 6.398 8.631 7.39 8.992 7.546l-0.002 0.006 0.195 0.058 0.185-0.087c2.257-1.079 4.903-1.378 7.343-0.836l-13.482 13.481c-0.55-2.47-0.262-5.045 0.837-7.342l0.104-0.218-0.098-0.221-0.031 0.013c-0.322-0.632-1.831-2.38-7.498-8.944l-0.185-0.215-0.282 0.038c-0.338 0.045-0.668 0.069-0.981 0.069-0.595 0-1.053-0.083-1.38-0.176z"> </path> </g></svg>7</div>
              <div><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path opacity="0.1" d="M21 6C21 7.65685 19.6569 9 18 9C16.3431 9 15 7.65685 15 6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6Z" fill="#323232" /> <path opacity="0.1" d="M21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18Z" fill="#323232" /> <path opacity="0.1" d="M9 12C9 13.6569 7.65685 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.65685 9 9 10.3431 9 12Z" fill="#323232" /> <path d="M21 6C21 7.65685 19.6569 9 18 9C16.3431 9 15 7.65685 15 6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6Z" strokeWidth={2} /> <path d="M21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18Z" strokeWidth={2} /> <path d="M9 12C9 13.6569 7.65685 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.65685 9 9 10.3431 9 12Z" strokeWidth={2} /> <path d="M8.7207 10.6397L15.0001 7.5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /> <path d="M8.70605 13.353L15 16.5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /> </g></svg>2</div>
            </div>
            <div className="viewer">
              <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g strokeWidth={0} id="SVGRepo_bgCarrier" /><g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier" /><g id="SVGRepo_iconCarrier"> <path strokeWidth={2} stroke="#ffffff" d="M17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8Z" /> <path strokeLinecap="round" strokeWidth={2} stroke="#ffffff" d="M3 21C3.95728 17.9237 6.41998 17 12 17C17.58 17 20.0427 17.9237 21 21" /> </g></svg></span>
              <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g strokeWidth={0} id="SVGRepo_bgCarrier" /><g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier" /><g id="SVGRepo_iconCarrier"> <path strokeWidth={2} stroke="#ffffff" d="M17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8Z" /> <path strokeLinecap="round" strokeWidth={2} stroke="#ffffff" d="M3 21C3.95728 17.9237 6.41998 17 12 17C17.58 17 20.0427 17.9237 21 21" /> </g></svg></span>
              <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g strokeWidth={0} id="SVGRepo_bgCarrier" /><g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier" /><g id="SVGRepo_iconCarrier"> <path strokeWidth={2} stroke="#ffffff" d="M17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8Z" /> <path strokeLinecap="round" strokeWidth={2} stroke="#ffffff" d="M3 21C3.95728 17.9237 6.41998 17 12 17C17.58 17 20.0427 17.9237 21 21" /> </g></svg></span>
              <span>+20</span>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex; /* Added to help center the card */
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.5rem; /* Optional: for spacing if card is against edges */

  .card {
    position: relative;
    background-color: #30344c;
    padding: 1em;
    z-index: 5;
    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    max-width: 300px;
    transition: 200ms ease-in-out;
    width: 100%; /* Allow card to take full width of this wrapper, respecting its own max-width */
    flex-shrink: 0;
  }

  .card:hover {
     transform: scale(1.03); /* Added a slight hover scale */
  }

  .username {
    color: #C6E1ED;
    font-size: 0.85em;
    font-weight: 600;
  }

  .body {
    display: flex;
    flex-direction: column;
  }

  .body .text {
    margin: 0 0 0.5em 0; /* Adjusted margin */
    white-space: pre-line;
    color: #c0c3d7;
    font-weight: 400;
    line-height: 1.5;
    margin-bottom: 4px;
  }

  .footer {
    position: relative;
    width: 100%;
    color: #9fa4aa;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: none;
    margin-top: 10px;
  }

  .footer div:first-child { /* Target the container of the three icons */
    display: flex; /* Make the icons line up horizontally */
    align-items: center;
  }

  .footer div > div { /* Target individual icon containers */
    margin-right: 1rem;
    height: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
   .footer div > div:last-child {
    margin-right: 0;
  }


  .footer svg {
    margin-right: 5px;
    height: 100%;
    stroke: #9fa4aa;
  }

  .viewer {
    display: flex; /* Ensure viewer spans line up */
  }

  .viewer span {
    height: 20px;
    width: 20px;
    background-color: rgb(28, 117, 219);
    margin-right: -6px;
    border-radius: 50%;
    border: 1px solid #fff;
    display: flex; /* Changed from grid to flex for easier centering */
    align-items: center;
    justify-content: center; 
    /* text-align: center; // Not needed with flex centering */
    font-weight: bold;
    font-size: 8px;
    color: #fff;
    /* padding: 2px; // Padding might make it harder to center text in small circle */
    line-height: 1; /* Helps with vertical centering of small text */
  }

  .viewer span svg {
    stroke: #fff;
    width: 12px; /* Adjusted SVG size within viewer spans */
    height: 12px;
  }
`;

export default AltitudeInsightCard;
