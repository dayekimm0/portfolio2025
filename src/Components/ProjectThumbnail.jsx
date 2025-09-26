import React, { useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  transition: all 0.3s;
  aspect-ratio: 16/9;
  border-radius: 6px;

  &:hover {
    scale: 0.98;
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
  transition: opacity 0.3s ease;

  ${Wrapper}:hover & {
    filter: blur(2px);
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${Wrapper}:hover & {
    opacity: 1;
  }
`;

const Title = styled.p`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Icons = styled.div`
  display: flex;
  gap: 8px;

  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
  }
`;

const LinkGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  margin-top: 40px;
`;

const StyledButton = styled.button`
  background: transparent;
  border: 2px solid var(--light);
  border-radius: 50px;
  color: var(--light);
  font-family: "Unbounded";
  font-size: 1.6rem;
  padding: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.3s;

  &:hover {
    color: var(--accent);
    border: 2px solid var(--accent);
    cursor: pointer;
  }
`;

// ✅ onViewClick props 추가
const ProjectThumbnail = ({
  src,
  title,
  icons,
  view,
  code,
  onPdfClick,
  onViewClick,
}) => {
  const wrapperRef = useRef(null);
  return (
    <Wrapper onClick={onPdfClick} ref={wrapperRef}>
      <Image src={src} alt={title} />
      <Overlay>
        <Title>{title}</Title>
        <Icons>
          {icons.map((icon, i) => (
            <img key={i} src={icon} alt={`icon-${i}`} />
          ))}
        </Icons>
        <LinkGroup>
          {view && (
            <StyledButton
              onClick={(e) => {
                e.stopPropagation();
                if (onViewClick) {
                  onViewClick();
                } else {
                  window.open(view, "_blank");
                }
              }}
            >
              VIEW
            </StyledButton>
          )}
          {code && (
            <StyledButton
              onClick={(e) => {
                e.stopPropagation();
                window.open(code, "_blank");
              }}
            >
              CODE
            </StyledButton>
          )}
        </LinkGroup>
      </Overlay>
    </Wrapper>
  );
};

export default ProjectThumbnail;
