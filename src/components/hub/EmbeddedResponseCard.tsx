import React from 'react';
import styled from 'styled-components';

const EmbeddedResponseCard = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card-pattern-grid" />
        {/* Other decorative elements are currently commented out for flexibility */}
        <div className="card-title-area">
          <span>Embedded Response</span> 
          <span className="card-tag">Most Popular</span>
        </div>
        <div className="card-body">
          <div className="card-description">
            Deep dive and ongoing support. Couples ongoing consulting support along
            side expert advisory, video strategy walk through, tailor made for your
            scenario and goals.
          </div>
          <div className="feature-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M20,4C21.1,4 22,4.9 22,6V18C22,19.1 21.1,20 20,20H4C2.9,20 2,19.1 2,18V6C2,4.9 2.9,4 4,4H20M4,6V18H20V6H4M6,9H18V11H6V9M6,13H16V15H6V13Z" />
                </svg>
              </div>
              <span className="feature-text">Strategic Briefing</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12,17.56L16.07,16.43L16.62,10.33H9.38L9.2,8.3H16.8L17,6.31H7L7.56,12.32H14.45L14.22,14.9L12,15.5L9.78,14.9L9.64,13.24H7.64L7.93,16.43L12,17.56M4.07,3H19.93L18.5,19.2L12,21L5.5,19.2L4.07,3Z" />
                </svg>
              </div>
              <span className="feature-text">Video Walkthrough</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M18.5,4L19.66,8.35L18.7,8.61C18.25,7.74 17.79,6.87 17.26,6.43C16.73,6 16.11,6 15.5,6H13V16.5C13,17 13,17.5 13.33,17.75C13.67,18 14.33,18 15,18V19H9V18C9.67,18 10.33,18 10.67,17.75C11,17.5 11,17 11,16.5V6H8.5C7.89,6 7.27,6 6.74,6.43C6.21,6.87 5.75,7.74 5.3,8.61L4.34,8.35L5.5,4H18.5Z" />
                </svg>
              </div>
              <span className="feature-text">Hyper Specialized</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M9.19,6.35C8.41,7.13 7.75,8.05 7.25,9H5V11H7.12C7.05,11.32 7,11.66 7,12C7,12.34 7.05,12.68 7.12,13H5V15H7.25C7.75,15.95 8.41,16.87 9.19,17.65L7.77,19.07L9.88,21.18L11.3,19.77C11.85,20.03 12.41,20.2 13,20.31V23H15V20.31C15.59,20.2 16.15,20.03 16.7,19.77L18.12,21.18L20.23,19.07L18.81,17.65C19.59,16.87 20.25,15.95 20.75,15H23V13H20.88C20.95,12.68 21,12.34 21,12C21,11.66 20.95,11.32 20.88,11H23V9H20.75C20.25,8.05 19.59,7.13 18.81,6.35L20.23,4.93L18.12,2.82L16.7,4.23C16.15,3.97 15.59,3.8 15,3.69V1H13V3.69C12.41,3.8 11.85,3.97 11.3,4.23L9.88,2.82L7.77,4.93L9.19,6.35M13,17A5,5 0 0,1 8,12A5,5 0 0,1 13,7A5,5 0 0,1 18,12A5,5 0 0,1 13,17Z" />
                </svg>
              </div>
              <span className="feature-text">Ongoing Consulting</span>
            </div>
          </div>
          <div className="card-actions">
            <div className="price">
              <span className="price-currency">$</span>525
              <span className="price-period">per project</span>
            </div>
            <button className="card-button">Get Started</button>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex; 
  width: 100%;
  height: 100%; 
  padding: 0.5rem; 
  box-sizing: border-box;

  .card {
    --primary: #ff3e00;
    --primary-hover: #ff6d43;
    --secondary: #4d61ff;
    --secondary-hover: #5e70ff;
    --accent: #00e0b0;
    --text: #050505;
    --bg: #ffffff;
    --shadow-color: #000000;
    --pattern-color: #cfcfcf;

    position: relative;
    width: 100%; 
    height: 100%; 
    background: var(--bg);
    border: 0.3em solid var(--text); /* Slightly thinner border */
    border-radius: 0.8em; /* Slightly larger radius */
    box-shadow:
      0.5em 0.5em 0 var(--shadow-color),
      inset 0 0 0 0.15em rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease-in-out;
    overflow: hidden; 
    font-family: ui-sans-serif, system-ui, sans-serif;
    transform-origin: center;
    display: flex; 
    flex-direction: column; 
  }

  .card::before { display: none; }
  .card::after { display: none; }

  .card-pattern-grid {
    position: absolute;
    inset: 0;
    background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.04) 1px,
        transparent 1px
      ),
      linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px);
    background-size: 0.6em 0.6em; /* Slightly larger grid */
    pointer-events: none;
    opacity: 0.25; 
    transition: opacity 0.4s ease;
    z-index: 0; 
  }

  .card-overlay-dots { display: none; }

  .card-title-area {
    position: relative; 
    padding: 0.8em 1.2em; /* Adjusted padding */
    background: var(--primary);
    color: var(--bg);
    font-weight: 900; /* Bolder */
    font-size: 1.25em; /* Larger title font */
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.3em solid var(--text);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    z-index: 1; 
    flex-shrink: 0; 
  }

  .card-title-area::before {
    opacity: 0.1; 
  }

  .card-tag { /* "Most Popular" badge */
    font-size: 0.75em; /* Increased relative to title area font size */
    font-weight: 800;
    padding: 0.5em 1em; /* Increased padding */
    background: var(--bg);
    color: var(--primary); /* Contrasting color */
    border: 0.2em solid var(--text); /* Thicker border */
    border-radius: 0.4em;
    box-shadow: 0.25em 0.25em 0 var(--shadow-color);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    transform: rotate(2deg); /* Slight rotation */
  }

  .card-body {
    position: relative;
    padding: 1.2em 1.5em; /* Adjusted padding */
    z-index: 1; 
    flex-grow: 1; 
    display: flex; 
    flex-direction: column; 
    overflow-y: auto; 
    min-height: 0; 
  }

  .card-description {
    margin-bottom: 1.2em;
    color: var(--text);
    font-size: 1em; /* Increased font size */
    line-height: 1.6;
    font-weight: 500;
  }

  .feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* Allow more space for items */
    gap: 1em;
    margin-bottom: 1.2em;
  }

  .feature-item {
    display: flex;
    align-items: center;
    gap: 0.7em;
  }

  .feature-icon {
    width: 1.8em; /* Increased icon container size */
    height: 1.8em;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--secondary);
    border: 0.15em solid var(--text);
    border-radius: 0.3em;
    box-shadow: 0.2em 0.2em 0 rgba(0, 0, 0, 0.2);
    flex-shrink: 0; /* Prevent icon from shrinking */
  }

  .feature-icon svg {
    width: 1.1em; /* Increased SVG size */
    height: 1.1em;
    fill: var(--bg);
  }

  .feature-text {
    font-size: 0.95em; /* Increased font size */
    font-weight: 600;
    color: var(--text);
  }

  .card-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto; 
    padding-top: 1.2em;
    border-top: 0.15em dashed rgba(0, 0, 0, 0.15);
    position: relative;
  }

  .card-actions::before {
    content: "✂";
    position: absolute;
    top: -0.8em;
    left: 50%;
    transform: translateX(-50%) rotate(90deg);
    background: var(--bg);
    padding: 0 0.5em;
    font-size: 1em;
    color: rgba(0, 0, 0, 0.4);
  }

  .price {
    font-size: 1.8em; 
    font-weight: 800;
    color: var(--text);
    background: var(--bg);
  }

  .price::before {
    content: "";
    position: absolute;
    bottom: 0.15em;
    left: 0;
    width: 100%;
    height: 0.2em;
    background: var(--accent);
    z-index: -1;
    opacity: 0.5;
  }

  .price-currency {
    font-size: 0.6em;
    font-weight: 700;
    vertical-align: top;
    margin-right: 0.1em;
  }

  .price-period {
    display: block;
    font-size: 0.4em;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.6);
    margin-top: 0.2em;
  }

  .card-button { /* "Get Started" Button */
    position: relative;
    background: var(--secondary);
    color: var(--bg);
    font-size: 1em; /* Increased font size */
    font-weight: 800; /* Bolder */
    padding: 0.8em 1.5em; /* Increased padding */
    border: 0.25em solid var(--text); /* Thicker border */
    border-radius: 0.5em;
    box-shadow: 0.35em 0.35em 0 var(--shadow-color); /* More prominent shadow */
    cursor: pointer;
    transition: all 0.2s ease;
    overflow: hidden;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .card-button::before {
    /* Shine effect for button */
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.25) 50%,
      transparent 100%
    );
    transition: left 0.6s ease;
  }

  .card-button:hover {
    background: var(--secondary-hover);
    transform: translate(-0.1em, -0.1em);
    box-shadow: 0.45em 0.45em 0 var(--shadow-color);
  }

  .card-button:hover::before {
    left: 100%;
  }

  .card-button:active {
    transform: translate(0.1em, 0.1em);
    box-shadow: 0.15em 0.15em 0 var(--shadow-color);
  }

  /* Decorative elements below are still commented out in JSX for simplicity */
  /* .dots-pattern, .accent-shape, .stamp, .corner-slice, .bold-pattern */
`;

export default EmbeddedResponseCard; 
