import React from "react";
import styled from "styled-components";
import folder from "../images/folder.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const Folder = styled.div`
  width: 180px;
  margin-bottom: 4px;
  transition: 0.1s ease;
  img {
    width: 100%;
    object-fit: cover;
  }
  &:active {
    scale: 0.95;
  }
`;

const Label = styled.p`
  font-size: 1.8rem;
  color: var(--light);
`;

const FolderIcon = ({ label }) => {
  return (
    <Wrapper>
      <Folder>
        <img src={folder} alt="folder" />
      </Folder>
      <Label>{label}</Label>
    </Wrapper>
  );
};

export default FolderIcon;
