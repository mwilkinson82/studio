import React from 'react';
import styled from 'styled-components';

const SpotifyPlaylistCard = () => {
  return (
    <StyledWrapper>
      <iframe 
        style={{ 
          borderRadius: '12px', 
          border: 'none', 
          width: '100%', 
          height: '100%',
          display: 'block',
          minHeight: '0px' 
        }} 
        src="https://open.spotify.com/embed/playlist/6zgpqzLnfBF3geRffxAGQX?utm_source=generator" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" // allowFullScreen prop removed
        loading="lazy"
        title="Spotify Playlist for a|p advisory platform"
      ></iframe>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  position: relative; 
  width: 100%;
  height: 100%; 
  box-sizing: border-box; 
  padding: 0; 
  overflow: hidden; 
  border-radius: 12px; 
  
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none; 
    border-radius: 12px; 
  }
`;

export default SpotifyPlaylistCard;
