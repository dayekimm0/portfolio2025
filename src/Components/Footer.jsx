import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";

const Container = styled.div`
  width: 100%;
  height: 50vh;
  background: var(--accent);
  position: relative;
  overflow: hidden;
  transform-origin: top center; /* 위쪽 기준으로 늘어남 */
`;

const TxtWrapper = styled.div`
  width: 40%;
  height: 100%;
  line-height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 2%;
`;

const MainTxt = styled.div`
  color: var(--dark);
  font-size: 8rem;
  font-weight: 600;
`;

const LinkWrapper = styled.div`
  position: absolute;
  right: 4%;
  bottom: 2%;
  display: flex;
  a {
    position: relative;
    font-size: 2rem;
    font-weight: 500;
    margin-left: 12px;
    text-decoration: none;
    color: var(--dark);

    span {
      position: absolute;
      left: 0;
      bottom: 28%;
      width: 0%;
      height: 3px;
      background-color: var(--dark);
      display: block;
    }
  }
`;

const Footer = () => {
  const footerRef = useRef(null);
  const linksRef = useRef([]);
  const scrollTimeout = useRef(null);
  const maxStretch = 1.4;

  useEffect(() => {
    // 링크 hover 언더라인
    linksRef.current.forEach((link) => {
      const underline = link.querySelector("span");
      link.addEventListener("mouseenter", () => {
        gsap.to(underline, {
          width: "100%",
          duration: 0.5,
          ease: "power2.out",
        });
      });
      link.addEventListener("mouseleave", () => {
        gsap.to(underline, {
          width: "0%",
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });

    const handleScroll = () => {
      if (!footerRef.current) return;

      // 스크롤 비율 계산
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / docHeight, 1);

      gsap.set(footerRef.current, {
        scaleY: 1 + (maxStretch - 1) * progress,
      });

      clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        gsap.to(footerRef.current, {
          scaleY: 1,
          duration: 0.5,
          ease: "power1.out",
        });
      }, 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container ref={footerRef}>
      <TxtWrapper>
        <MainTxt>Let's</MainTxt>
        <MainTxt>Work</MainTxt>
        <MainTxt>Together!</MainTxt>
        <LinkWrapper>
          {[
            { href: "https://www.instagram.com/kimdaye/", text: "INSTAGRAM" },
            { href: "https://github.com/dayekimm0", text: "GITHUB" },
            { href: "mailto:dayekimm0@gmail.com", text: "MAIL" },
          ].map((link, i) => (
            <a
              key={i}
              href={link.href}
              ref={(el) => (linksRef.current[i] = el)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.text}
              <span />
            </a>
          ))}
        </LinkWrapper>
      </TxtWrapper>
    </Container>
  );
};

export default Footer;
