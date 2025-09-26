import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const fallParticles = keyframes`
  0% { transform: translateY(-50px) scale(0.5); opacity: 0; } /* 시작시 안보임 */
  20% { opacity: 0.8; } /* 움직이면서 나타남 */
  100% { transform: translateY(100vh) scale(1); opacity: 0; }
`;

const EventWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: #000;
  overflow: hidden;
`;

const Particle = styled.div`
  position: absolute;
  top: -10px;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background: ${(props) => props.color};
  border-radius: 50%;
  filter: blur(2px);
  box-shadow: 0 0 10px ${(props) => props.color},
    0 0 20px ${(props) => props.color};
  opacity: 0;

  animation: ${fallParticles} ${(props) => props.duration}s linear infinite;
  animation-delay: ${(props) => props.delay}s;
  pointer-events: none;
  animation-play-state: ${(props) => (props.pause ? "paused" : "running")};
`;

const Event = () => {
  const particleCount = 80;
  const colors = ["#fff", "#ff4d6d"];
  const [particles, setParticles] = useState([]);
  const [cursorY, setCursorY] = useState(0);

  useEffect(() => {
    const arr = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * window.innerWidth,
      size: Math.random() * 10 + 4,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      yOffset: Math.random() * window.innerHeight,
    }));
    setParticles(arr);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => setCursorY(e.clientY);
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <EventWrapper>
      {particles.map((p, i) => {
        const particleY = (p.yOffset + p.duration * 10) % window.innerHeight; // 예시 계산
        const pause = Math.abs(particleY - cursorY) < 50;

        return (
          <Particle
            key={i}
            size={p.size}
            color={p.color}
            duration={p.duration}
            delay={p.delay}
            style={{ left: p.x }}
            pause={pause}
          />
        );
      })}
    </EventWrapper>
  );
};

export default Event;
