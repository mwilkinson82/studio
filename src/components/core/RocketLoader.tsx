import React from 'react';
import styled, { keyframes } from 'styled-components';

const RocketLoader = () => {
  return (
    <StyledWrapper>
      <div className="rocket">
        <div className="rocket-body">
          <div className="body" />
          <div className="fin fin-left" />
          <div className="fin fin-right" />
          <div className="window" />
        </div>
        <div className="exhaust-flame" />
        <ul className="exhaust-fumes">
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
        <ul className="star">
          <li />
          <li />
          <li />
        </ul>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative; 
  overflow: hidden; 
  background-color: lime; /* DEBUG: Make RocketLoader's own area visible */

  .rocket {
    position: absolute;
    top: 20%; 
    width: 80px;
    left: calc(50% - 40px); 
  }

  .rocket .rocket-body {
    width: 80px;
    position: relative; 
  }
  &:hover .rocket .rocket-body {
    animation: bounce 0.5s infinite;
  }

  .rocket .rocket-body .body {
    background-color: #dadada;
    height: 180px;
    width: 100%;
    border-top-right-radius: 100%;
    border-top-left-radius: 100%;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    border-top: 5px solid #f5f5f5;
  }

  .rocket .rocket-body:before {
    content: '';
    position: absolute;
    left: calc(50% - 24px); 
    width: 48px;
    height: 13px;
    background-color: #554842;
    bottom: -13px;
    border-bottom-right-radius: 60%;
    border-bottom-left-radius: 60%;
  }

  .rocket .window {
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background-color: #a75248;
    left: calc(50% - 20px); 
    top: 40px;
    border: 5px solid #b4b2b2;
  }

  .rocket .fin {
    position: absolute;
    z-index: -100; 
    height: 55px;
    width: 50px;
    background-color: #a75248;
  }

  .rocket .fin-left {
    left: -30px; 
    top: calc(100% - 55px);
    border-top-left-radius: 80%;
    border-bottom-left-radius: 20%;
  }

  .rocket .fin-right {
    right: -30px; 
    top: calc(100% - 55px);
    border-top-right-radius: 80%;
    border-bottom-right-radius: 20%;
  }

  .rocket .exhaust-flame {
    position: absolute;
    top: 100%; 
    width: 28px;
    background: linear-gradient(to bottom, transparent 10%, #f5f5f5 100%);
    height: 150px;
    left: calc(50% - 14px); 
    opacity: 0; 
    transition: opacity 0.1s ease-in;
  }
  &:hover .rocket .exhaust-flame {
    animation: exhaust 0.2s infinite;
    opacity: 1; 
  }

  .rocket .exhaust-fumes {
    padding-left: 0; 
    margin: 0;
  }

  .rocket .exhaust-fumes li {
    width: 60px;
    height: 60px;
    background-color: #f5f5f5;
    list-style: none;
    position: absolute;
    border-radius: 100%;
    opacity: 0; 
    transition: opacity 0.2s ease-in 0.1s; 
  }
  &:hover .rocket .exhaust-fumes li {
    opacity: 1;
  }

  .rocket .exhaust-fumes li:first-child {
    width: 200px;
    height: 200px;
    bottom: -350px; 
    left: calc(50% - 100px); 
  }
   &:hover .rocket .exhaust-fumes li:first-child {
    animation: fumes 5s infinite;
  }

  .rocket .exhaust-fumes li:nth-child(2) {
    width: 150px;
    height: 150px;
    left: calc(50% - 150px); 
    bottom: -300px;
  }
  &:hover .rocket .exhaust-fumes li:nth-child(2) {
    animation: fumes 3.2s infinite;
  }

  .rocket .exhaust-fumes li:nth-child(3) {
    width: 120px;
    height: 120px;
    left: calc(50% - 20px); 
    bottom: -280px;
  }
  &:hover .rocket .exhaust-fumes li:nth-child(3) {
    animation: fumes 3s 1s infinite; 
  }


  .rocket .exhaust-fumes li:nth-child(4) {
    width: 100px;
    height: 100px;
    left: calc(50% - 180px); 
    bottom: -250px;
  }
   &:hover .rocket .exhaust-fumes li:nth-child(4) {
    animation: fumes 4s 2s infinite;
  }

  .rocket .exhaust-fumes li:nth-child(5) {
    width: 130px;
    height: 130px;
    left: calc(50% + 30px); 
    bottom: -290px;
  }
  &:hover .rocket .exhaust-fumes li:nth-child(5) {
    animation: fumes 5s infinite;
  }

  .rocket .exhaust-fumes li:nth-child(6),
  .rocket .exhaust-fumes li:nth-child(7),
  .rocket .exhaust-fumes li:nth-child(8),
  .rocket .exhaust-fumes li:nth-child(9) {
    display: none; 
  }

  .star {
    padding-left: 0;
    margin: 0;
  }
  .star li {
    list-style: none;
    position: absolute;
    opacity: 0; 
    transition: opacity 0.3s ease-in 0.2s; 
  }
  &:hover .star li {
    opacity: 1;
  }

  .star li:before, .star li:after {
    content: '';
    position: absolute;
    background-color: #f5f5f5;
  }

  .star li:before {
    width: 10px; 
    height: 2px;
    border-radius: 50%;
  }

  .star li:after {
    height: 8px;
    width: 2px;
    left: 4px;
    top: -3px;
  }

  .star li:first-child { 
    top: -50px; 
    left: -60px; 
  }
  &:hover .star li:first-child {
    animation: twinkle 0.4s infinite;
  }

  .star li:nth-child(2) { 
    top: -30px;
    right: -50px; 
    left: auto; 
  }
  &:hover .star li:nth-child(2) {
    animation: twinkle 0.5s infinite;
  }
  .star li:nth-child(2):before { height: 1px; width: 5px; }
  .star li:nth-child(2):after { width: 1px; height: 5px; top: -2px; left: 2px; }

  .star li:nth-child(3) { 
    left: -80px; 
    top: 80px;
  }
  &:hover .star li:nth-child(3) {
    animation: twinkle 1s infinite;
  }
  
  .star li:nth-child(4),
  .star li:nth-child(5),
  .star li:nth-child(6),
  .star li:nth-child(7) {
    display: none; 
  }

  @keyframes fumes {
    50% {
      transform: scale(1.5);
      background-color: transparent;
    }
    51% {
      transform: scale(0.8);
    }
    100% {
      background-color: #f5f5f5;
      transform: scale(1);
    }
  }
  @keyframes bounce {
    0% { transform: translate3d(0px, 0px, 0); }
    50% { transform: translate3d(0px, -4px, 0); }
    100% { transform: translate3d(0px, 0px, 0); }
  }
  @keyframes exhaust {
    0% { background: linear-gradient(to bottom, transparent 10%, #f5f5f5 100%); }
    50% { background: linear-gradient(to bottom, transparent 8%, #f5f5f5 100%); }
    75% { background: linear-gradient(to bottom, transparent 12%, #f5f5f5 100%); }
  }
  @keyframes fumes2 {
    50% { transform: scale(1.1); }
  }
  @keyframes twinkle {
    80% { transform: scale(1.1); opacity: 0.7; }
  }
`;

export default RocketLoader;
