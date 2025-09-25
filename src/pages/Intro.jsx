import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import introImg from "../images/index.png";
import { gsap } from "gsap";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: var(--dark);
  position: relative;
  perspective: 1000px;
`;

const IntroImg = styled.div`
  width: 80%;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-style: preserve-3d;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
    border-radius: 12px;
  }
`;

const Intro = () => {
  const imgRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const animateWave = () => {
      const time = Date.now() * 0.002; // 시간 기반
      gsap.to(imgRef.current, {
        rotationX: -mouse.current.y / 2 + Math.sin(time) * 3, // 물결 흔들림 추가
        rotationY: mouse.current.x / 2 + Math.cos(time) * 3,
        x: mouse.current.x / 20 + Math.sin(time) * 5,
        y: mouse.current.y / 20 + Math.cos(time) * 5,
        scale: 1.02,
        ease: "power1.out",
        duration: 0.3,
      });
      requestAnimationFrame(animateWave);
    };
    animateWave();
  }, []);

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    mouse.current.x = (e.clientX / innerWidth - 0.5) * 20; // 마우스 이동 반영
    mouse.current.y = (e.clientY / innerHeight - 0.5) * 20;
  };

  const handleMouseLeave = () => {
    mouse.current.x = 0;
    mouse.current.y = 0;
  };

  return (
    <Container onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <IntroImg ref={imgRef}>
        <img src={introImg} />
      </IntroImg>
    </Container>
  );
};

export default Intro;
