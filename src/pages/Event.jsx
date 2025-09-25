import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import line from "../images/line.svg";

gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin);

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: var(--dark);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SvgWrapper = styled.svg`
  width: 50px; /* 세로 용수철 폭 */
  height: 100%; /* 세로 전체 높이 */
  overflow: visible;

  path {
    stroke: white;
    stroke-width: 2;
    fill: transparent;
  }
`;

const Event = () => {
  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;

    // 여기 line.svg path 복사하거나 원하는 세로 용수철 모양으로 수정
    const springPath =
      "M25 0 C35 40 15 80 25 120 S25 200 25 240 S25 320 25 360";

    // 최종 직선 path
    const straightPath = "M25 0 L25 360";

    path.setAttribute("d", springPath);

    gsap.to(path, {
      duration: 2,
      ease: "power1.out",
      morphSVG: straightPath,
      scrollTrigger: {
        trigger: path,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <Container>
      <SvgWrapper viewBox="0 0 50 360">
        <path ref={pathRef} />
      </SvgWrapper>
    </Container>
  );
};

export default Event;
