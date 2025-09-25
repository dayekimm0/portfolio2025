import React from "react";
import styled from "styled-components";

const SubTitleWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1% 2%;
  z-index: 10;
  p {
    font-size: 2rem;
    font-weight: 500;
    color: var(--accent);

    pointer-events: none;
  }
`;

const Gnb = () => {
  return (
    <SubTitleWrapper>
      <p>© 2025 KIM DAYE</p>
      <p>DESIGN & PUBLISHING</p>
    </SubTitleWrapper>
  );
};

export default Gnb;
