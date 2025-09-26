import { useEffect, useRef } from "react";
import GlobalStyles from "./styles/GlobalStyles.styles";
import { Outlet } from "react-router-dom";
import Lenis from "lenis";
import Intro from "./pages/Intro";
import Header from "./Components/Header";
import Profile from "./pages/Profile";
import ProjectPart from "./pages/ProjectPart";
import Event from "./pages/Event";
import Footer from "./Components/Footer";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BgOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  background-color: #000;
`;

const ContentWrapper = styled.div`
  width: 100%;
`;

function Root() {
  const overlayRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    if (overlayRef.current) {
      const sections = [
        { id: "#intro", color: "#000" },
        { id: "#profile", color: "rgba(159, 80, 124, 0.2)" },
        { id: "#projects", color: "#000" },
        { id: "#footer", color: "#9F507C" },
      ];

      sections.forEach((section, i) => {
        const nextColor = sections[i + 1]?.color;
        if (!nextColor) return;

        gsap.to(overlayRef.current, {
          backgroundColor: nextColor,
          scrollTrigger: {
            trigger: section.id,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }

    return () => {
      lenis.stop();
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <>
      <GlobalStyles />
      <ContentWrapper>
        <Header />
        <div id="intro">
          <Intro />
        </div>
        <div id="profile">
          <Profile />
        </div>
        <Event />
        <div id="projects">
          <ProjectPart />
        </div>
        <div id="footer">
          <Footer />
        </div>
        <BgOverlay ref={overlayRef} />
        <Outlet />
      </ContentWrapper>
    </>
  );
}

export default Root;
