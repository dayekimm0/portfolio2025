import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { useState, useEffect } from "react";
import githubIcon from "../images/github.svg";
import mailIcon from "../images/mail.svg";
import pointIcon from "../images/icon.png";

const FloatingWrapper = styled(motion.div)`
  position: fixed;
  bottom: 4%;
  right: 3%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  z-index: 100;
  cursor: grab;
`;

const IconMenu = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  a {
    display: block;
    width: 50px;
    margin: 5px 0;

    img {
      width: 100%;
      object-fit: cover;
      transition: transform 0.2s;
    }

    &:hover img {
      transform: scale(1.1);
    }
  }
`;

const PointIcon = styled.div`
  width: 120px;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

const FloatingMenu = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const profileOffset = window.innerHeight * 0.8; // 프로필 시작점 기준

      // Footer 위치 계산
      const footer = document.getElementById("footer");
      const footerOffset = footer
        ? footer.getBoundingClientRect().top + window.scrollY
        : document.body.scrollHeight;

      // 프로필 이후 & 푸터 위이면 보이기
      setIsVisible(
        scrollY > profileOffset && scrollY + window.innerHeight < footerOffset
      );
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 초기 상태 체크
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <FloatingWrapper
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          drag
          dragConstraints={{
            top: 0,
            bottom: window.innerHeight,
            left: 0,
            right: window.innerWidth,
          }}
          dragElastic={0.2}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <IconMenu
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 20,
            }}
            transition={{ duration: 0.3 }}
          >
            <a
              href="https://github.com/dayekimm0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a href="mailto:dayekimm0@gmail.com">
              <img src={mailIcon} alt="Email" />
            </a>
          </IconMenu>

          <PointIcon>
            <img src={pointIcon} alt="Point" />
          </PointIcon>
        </FloatingWrapper>
      )}
    </AnimatePresence>
  );
};

export default FloatingMenu;
