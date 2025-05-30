import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const InboxCard = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Message form submitted");
  };

  // Placeholder for notification state
  const hasNewMessages = true; // Set to false to hide dot

  return (
    <StyledWrapper>
      <div className="card-container">
        <div className="card-header">
          <div className="img-avatar-container"> {/* Added container for relative positioning of dot */}
            <div className="img-avatar">
              <Image 
                src="/Helmet Logo for app.png" 
                alt="a|p Expert Avatar" 
                width={32} 
                height={32} 
                className="rounded-full" 
              />
            </div>
            {hasNewMessages && <div className="notification-dot"></div>}
          </div>
          <div className="text-chat">Chat with a|p expert</div>
        </div>
        <div className="card-body">
          <div className="messages-container">
            <div className="message-box left">
              <p>Hey, it's Marshall. Tell me what's your challenge?</p>
            </div>
            <div className="message-box right">
              <p>Awesome, I need to talk about my lead generation...</p>
            </div>
          </div>
          <div className="message-input">
            <form onSubmit={handleSubmit}>
              <textarea placeholder="Type message..." className="message-send" defaultValue={""} />
              <button type="submit" className="button-send">Send</button>
            </form>
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
  box-sizing: border-box;

  .card-container {
    background-color: #fff; 
    border-radius: 10px; 
    padding: 10px;
    display: flex;
    flex-direction: column;
    width: 100%; 
    height: 100%; 
    box-shadow: 0 2px 8px rgba(0,0,0,0.08); 
    overflow: hidden; 
    box-sizing: border-box;
  }

  .card-header {
    display: flex;
    align-items: center;
    padding-bottom: 8px; 
    border-bottom: 1px solid #eee; 
    flex-shrink: 0; 
    position: relative; /* For absolute positioning of dot on header if preferred */
  }

  .img-avatar-container {
    position: relative; /* For positioning dot on avatar */
    margin-right: 10px; 
  }

  .img-avatar {
    width: 32px; 
    height: 32px;
    border-radius: 50%;
    overflow: hidden; 
    display: flex; 
    align-items: center;
    justify-content: center;
    flex-shrink: 0; 
  }

  .notification-dot {
    position: absolute;
    top: -2px;
    right: -2px;
    width: 10px;
    height: 10px;
    background-color: red;
    border-radius: 50%;
    border: 2px solid white; /* To make it stand out from avatar */
    z-index: 1;
  }

  .card-header .text-chat {
    color: #333; 
    margin: 0;
    font-size: 0.875rem; 
    font-weight: 600;
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;
    flex-grow: 1; 
    min-width: 0; 
  }

  .card-body {
    flex: 1; 
    display: flex;
    flex-direction: column;
    overflow-y: auto; 
    min-height: 0; 
    padding-top: 8px; 
  }

  .messages-container {
    flex-grow: 1; 
    display: flex;
    flex-direction: column;
    gap: 8px; 
  }

  .message-box {
    padding: 8px 12px; 
    border-radius: 18px; 
    max-width: 80%; 
    line-height: 1.4;
    font-size: 0.875rem; 
  }

  .message-box.left { 
    background-color: #E5E5EA; 
    color: black;
    align-self: flex-start; 
    border-bottom-left-radius: 4px; 
  }

  .message-box.right { 
    background-color: #007AFF; 
    color: white;
    align-self: flex-end; 
    border-bottom-right-radius: 4px; 
  }

  .message-input {
    padding-top: 8px; 
    border-top: 1px solid #eee; 
    flex-shrink: 0; 
  }

  .message-input form {
    display: flex;
    gap: 8px; 
    align-items: center; 
  }

  .message-input .message-send {
    flex-grow: 1;
    padding: 8px;
    border: 1px solid #e0e0e0; 
    border-radius: 18px; 
    resize: none;
    font-size: 0.8125rem;
    min-height: 36px; 
    max-height: 72px; 
    line-height: 1.4;
  }

  .message-input .button-send {
    background-color: #007AFF; 
    color: #fff;
    padding: 0.5em 1em; 
    border: none;
    cursor: pointer;
    border-radius: 18px; 
    font-size: 0.8125rem;
    font-weight: 600; 
    transition: background-color 0.2s ease;
    height: 36px; 
    flex-shrink: 0; 
  }

  .message-input .button-send:hover {
    background-color: #0056b3; 
  }
`;

export default InboxCard;
