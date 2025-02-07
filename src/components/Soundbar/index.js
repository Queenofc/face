import React, { useRef, useState } from "react";

import styled, { keyframes } from "styled-components";

import music from "../../assets/sounds/portfolio theme.mpeg";

const play = keyframes`
  0% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(2);
  }
  100% {
    transform: scaleY(1);
  }
`;

const Box = styled.div`
  display: flex;
  cursor: pointer;
  position: fixed;
  right: 20rem;
  top: 2rem;
  z-index: 3;
  background: white;
  padding: 15px;
  border-radius: 25px;
  & > *:nth-child(1) {
    animation-delay: 0.2s;
  }
  & > *:nth-child(2) {
    animation-delay: 0.3s;
  }
  & > *:nth-child(3) {
    animation-delay: 0.4s;
  }
  & > *:nth-child(4) {
    animation-delay: 0.5s;
  }
  @media (max-width: 768px) {
    right:14rem;
    top: 2rem;
  }
  @media (max-width: 576px) {
    right:8rem;
    top: 2rem;
  }
`;

const Line = styled.span`
  background: black;
  border: 1px solid;
  animation: ${play} 1s ease infinite;
  animation-play-state: ${(props) => (props.playing ? "running" : "paused")};
  height: 1rem;
  width: 2px;
  padding:2px;
  margin: 0 0.1rem;
    @media (max-width: 768px) {
    height: 0.9rem; 
    width: 2px;
    padding:0.7px;
  }
    @media (max-width: 576px) {
    height: 0.8rem; 
    width: 1px;
    padding:0.8px;
`;

const SoundBar = () => {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handleClick = () => {
    setPlaying(!playing);
    if (!playing) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  };

  return (
    <Box onClick={handleClick}>
      <Line playing={playing} />
      <Line playing={playing} />
      <Line playing={playing} />
      <Line playing={playing} />
      <Line playing={playing} />
      <audio src={music} ref={ref} loop />
    </Box>
  );
};

export default SoundBar;
