import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const ModalContent = styled.div`
  width: 80%;
  height: 80%;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
`;

const PdfIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

const PdfModal = ({ pdfUrl, onClose }) => {
  if (!pdfUrl) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <PdfIframe src={pdfUrl} title="PDF Viewer" />
      </ModalContent>
    </Overlay>
  );
};

export default PdfModal;
