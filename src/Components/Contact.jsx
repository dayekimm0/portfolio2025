import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50vh;
  background: var(--accent);
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

const Contact = () => {
  return (
    <Container>
      <TxtWrapper>
        <MainTxt>Let's</MainTxt>
        <MainTxt>Work</MainTxt>
        <MainTxt>Together!</MainTxt>
      </TxtWrapper>
    </Container>
  );
};

export default Contact;
