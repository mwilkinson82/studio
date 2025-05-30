import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation'; // Import for navigation

const YouTubeTooltipCard = () => {
  const router = useRouter();

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault(); // Prevent default if it were an anchor, good practice
    router.push('/questionnaire');
  };

  return (
    // Changed StyledWrapper to be the main clickable container for navigation
    <StyledWrapper onClick={handleCardClick}>
      <div className="tooltip-container">
        {/* Tooltip part - might not be directly clickable for navigation by itself */}
        <div className="tooltip">
          <div className="profile">
            <div className="user">
              <div className="img">a|p</div>
              <div className="details">
                <div className="name">Youtube</div>
                <div className="username">@marshallwilkinson</div>
              </div>
            </div>
            <div className="about">69k+ subscribers</div>
          </div>
        </div>
        {/* Clickable icon part */}
        <div className="text"> {/* This div contains the icon and text below it */}
          <a className="icon" href="#" onClick={(e) => e.stopPropagation()}> {/* Make icon itself not navigate if parent does, or remove href and make it part of parent click */}
            <div className="layer">
              <span />
              <span />
              <span />
              <span />
              <span className="svg">
                <svg viewBox="0 -7 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#fff">
                  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                  <g id="SVGRepo_iconCarrier">
                    <title>Youtube-color</title>
                    <desc>Created with Sketch.</desc>
                    <defs />
                    <g id="Icons" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                      <g id="Color-" transform="translate(-200.000000, -368.000000)">
                        <path d="M219.044,391.269916 L219.0425,377.687742 L232.0115,384.502244 L219.044,391.269916 Z M247.52,375.334163 C247.52,375.334163 247.0505,372.003199 245.612,370.536366 C243.7865,368.610299 241.7405,368.601235 240.803,368.489448 C234.086,368 224.0105,368 224.0105,368 L223.9895,368 C223.9895,368 213.914,368 207.197,368.489448 C206.258,368.601235 204.2135,368.610299 202.3865,370.536366 C200.948,372.003199 200.48,375.334163 200.48,375.334163 C200.48,375.334163 200,379.246723 200,383.157773 L200,386.82561 C200,390.73817 200.48,394.64922 200.48,394.64922 C200.48,394.64922 200.948,397.980184 202.3865,399.447016 C204.2135,401.373084 206.612,401.312658 207.68,401.513574 C211.52,401.885191 224,402 224,402 C224,402 234.086,401.984894 240.803,401.495446 C241.7405,401.382148 243.7865,401.373084 245.612,399.447016 C247.0505,397.980184 247.52,394.64922 247.52,394.64922 C247.52,394.64922 248,390.73817 248,386.82561 L248,383.157773 C248,379.246723 247.52,375.334163 247.52,375.334163 L247.52,375.334163 Z" id="Youtube" />
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
            </div>
            <div className="text">Youtube</div> {/* This is the text label below the icon */} 
          </a>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  /* This wrapper is the main clickable area for navigation */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 1rem; /* Give some space for hover effects/shadows */
  cursor: pointer;

  .tooltip-container {
    --color: red; /* YouTube Red */
    --border: rgba(255, 0, 0, 0.25);
    position: relative;
    /* cursor: pointer; // Moved to StyledWrapper */
    transition: all 0.2s;
    font-size: 17px;
    border-radius: 10px;
    width: auto; /* Let content (icon) define width */
    display: flex; /* To center the .text (icon part) */
    justify-content: center;
  }

  .tooltip {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s;
    border-radius: 15px;
    box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
      inset -5px -5px 15px rgba(255, 255, 255, 0.1),
      5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
    z-index: 10; /* Ensure tooltip is on top */
    min-width: 220px; /* Give tooltip some base width */
  }

  .profile {
    background: rgba(204, 124, 132, 0.1); /* Light reddish, can be themed */
    border-radius: 10px 15px;
    padding: 10px;
    border: 1px solid var(--border);
  }

  .tooltip-container:hover .tooltip {
    top: -155px; /* Adjust to clear the icon */
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  .icon {
    text-decoration: none;
    color: #fff; /* Text color for "Youtube" label, set by .text class below */
    display: block; 
    position: relative;
  }
  .layer {
    width: 70px;
    height: 70px;
    transition: transform 0.3s;
  }
  .icon:hover .layer {
    transform: rotate(-35deg) skew(20deg);
  }
  .layer span {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border: 2px solid #fff;
    border-radius: 50%;
    transition: all 0.3s;
    padding: 13px; /* This seems to be for the icon itself */
    background: #fff;
    box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
      inset -5px -5px 15px rgba(255, 255, 255, 0.1),
      5px 5px 15px rgba(0, 0, 0, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.05);
  }

  /* Color change on hover for the icon layers */
  .tooltip-container:hover .layer span {
    border-radius: 10px;
    background: var(--color); /* Red for YouTube */
    border-color: var(--color);
  }

  .tooltip-container:hover .svg path {
    fill: #fff; /* Icon color to white on hover */
  }

  .layer span.svg { /* Target the span holding the SVG icon */
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color); /* Make SVG background red */
    border-color: var(--color); /* Make SVG border red */
  }
  .layer span.svg svg path {
     fill: #fff; /* Make SVG icon itself white */
  }

  .icon .text { /* This is the "Youtube" label under the icon */
    position: absolute;
    left: 50%;
    bottom: -5px;
    opacity: 0;
    font-weight: 700;
    transform: translateX(-50%);
    transition: bottom 0.3s ease, opacity 0.3s ease;
    color: var(--color); /* Red for YouTube */
    font-size: 0.8em;
  }
  .icon:hover .text {
    bottom: -25px; /* Adjust to show below icon */
    opacity: 1;
  }

  /* Layers animation */
  .icon:hover .layer span:nth-child(1) { opacity: 0.2; }
  .icon:hover .layer span:nth-child(2) { opacity: 0.4; transform: translate(5px, -5px); }
  .icon:hover .layer span:nth-child(3) { opacity: 0.6; transform: translate(10px, -10px); }
  .icon:hover .layer span:nth-child(4) { opacity: 0.8; transform: translate(15px, -15px); }
  .icon:hover .layer span:nth-child(5) { opacity: 1; transform: translate(20px, -20px); }

  /* User profile tooltip styles */
  .user {
    display: flex;
    gap: 10px;
    align-items: center; /* Align items in user profile */
  }
  .img {
    width: 50px;
    height: 50px;
    font-size: 25px;
    font-weight: 700;
    border: 1px solid var(--border);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    color: var(--color); /* Text color for "a|p" */
  }
  .name {
    font-size: 17px;
    font-weight: 700;
    color: #000000;
  }
  .details {
    display: flex;
    flex-direction: column;
    gap: 0;
    color: var(--color); /* Text color for details */
    text-align: left; /* Align text to left */
  }
  .about {
    color: rgba(0, 0, 0, 0.7);
    padding-top: 5px;
    font-size: 0.9em; /* Slightly larger */
  }
`;

export default YouTubeTooltipCard;
