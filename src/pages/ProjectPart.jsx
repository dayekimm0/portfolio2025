import React, { useState, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";

import FolderIcon from "../Components/FolderIcon";
import ProjectThumbnail from "../Components/ProjectThumbnail";
import PdfModal from "../Components/PdfModal";
import sidethumb1 from "../images/side1.png";
import thumb1 from "../images/projectThumb1.png";
import thumb2 from "../images/projectThumb2.png";
import thumb3 from "../images/projectThumb3.png";
import thumb4 from "../images/projectThumb4.png";
import figmaIcon from "../images/figmaIcon.svg";
import htmlIcon from "../images/htmlIcon.svg";
import cssIcon from "../images/cssIcon.svg";
import jsIcon from "../images/jsIcon.svg";
import reactIcon from "../images/reactIcon.svg";
import sassIcon from "../images/sassIcon.svg";
import firebaseIcon from "../images/firebaseIcon.svg";
import scIcon from "../images/scIcon.svg";
import viteIcon from "../images/viteIcon.svg";
import netIcon from "../images/netIcon.svg";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: var(--dark);
  color: var(--light);
  position: relative;
`;

const FolderWrapper = styled.div`
  display: flex;
  gap: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: ${(props) => (props.$clicked ? "column" : "row")};
  gap: ${(props) => (props.$clicked ? "50px" : "100px")};
`;

const Projects = styled.div`
  position: absolute;
  top: 10%;
  right: 11%;
  opacity: 0;
  transform: translateY(50px);
`;

const TeamProjectThumb = styled.div`
  max-width: 1300px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;
`;

const SideProjectThumb = styled.div`
  width: 1300px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;
`;

const ProjectPart = () => {
  const [activeFolder, setActiveFolder] = useState(null);
  const [clicked, setClicked] = useState(false);
  const folderWrapperRef = useRef(null);
  const projectsRef = useRef(null);
  const [pdfModal, setPdfModal] = useState(null);

  const tp = [
    {
      src: thumb4,
      title: "[PM] KBO 커머스/OTT 통합 플랫폼 ROOKie",
      icons: [figmaIcon, reactIcon, viteIcon, scIcon, firebaseIcon],
      view: "https://rookie-dd013.firebaseapp.com/",
      code: "https://github.com/dayekimm0/Rookie",
      pdf: "https://dayekimm0.github.io/tpPPT/ROOKie_ver2.pdf",
    },
    {
      src: thumb3,
      title: "반려동물 패션 플랫폼 WOOFY",
      icons: [figmaIcon, htmlIcon, sassIcon, jsIcon, netIcon],
      view: "https://wo0fy.netlify.app/",
      code: "https://github.com/sosoye0n/Woofy",
      pdf: "https://dayekimm0.github.io/tpPPT/woofy.pdf",
    },
    {
      src: thumb2,
      title: "[PM] K-비건 라이프스타일 플랫폼 BE:",
      icons: [figmaIcon, htmlIcon, cssIcon, jsIcon, netIcon],
      view: "https://vegan-beproject.netlify.app/",
      code: "https://github.com/dayekimm0/BE-TeamProject",
      pdf: "https://dayekimm0.github.io/tpPPT/BEPPT.pdf",
    },
    {
      src: thumb1,
      title: "로켓프레시 리브랜딩 YumFresh",
      icons: [figmaIcon],
      view: "https://www.figma.com/design/q91wZ0SUoKr2z21EFtaQGS/Project?node-id=1145-2465&t=phc4Uf1D4EJwh3BS-4",
      pdf: "https://dayekimm0.github.io/tpPPT/yumfreshPPT.pdf",
    },
  ];

  const sp = [
    {
      src: sidethumb1,
      title: "Flex Project",
      icons: [figmaIcon, htmlIcon, cssIcon, jsIcon],
      view: "https://flexproject2.netlify.app/",
      code: "https://github.com/dayekimm0/musicPlayer",
    },
    {
      src: sidethumb1,
      title: "로켓프레시 리브랜딩 YumFresh APP",
      icons: [figmaIcon],
      view: "https://musicplayer-daye.netlify.app/",
      code: "https://github.com/dayekimm0/musicPlayer",
    },
  ];

  const handleFolderClick = (folder) => {
    setActiveFolder(folder);
    setClicked(true);

    gsap.to(folderWrapperRef.current, {
      duration: 1,
      top: "27%",
      left: "8%",
      x: 0,
      y: 0,
      scale: 0.7, // 크기 줄이기
      ease: "power3.inOut",
    });

    gsap.to(projectsRef.current, {
      duration: 3,
      opacity: 1,
      y: 0,
      delay: 0.8,
      ease: "power3.out",
    });
  };

  return (
    <Container>
      <FolderWrapper ref={folderWrapperRef} $clicked={clicked}>
        {["team", "side"].map((label) => (
          <div key={label} onClick={() => handleFolderClick(label)}>
            <FolderIcon
              label={label === "team" ? "TEAM PROJECT" : "SIDE PROJECT"}
            />
          </div>
        ))}
      </FolderWrapper>

      <Projects ref={projectsRef}>
        {activeFolder === "team" && (
          <TeamProjectThumb>
            {tp.map((project, index) => (
              <ProjectThumbnail
                key={index}
                src={project.src}
                title={project.title}
                icons={project.icons}
                view={project.view}
                code={project.code}
                onPdfClick={() => setPdfModal(project.pdf)}
              />
            ))}
          </TeamProjectThumb>
        )}
        {activeFolder === "side" && (
          <SideProjectThumb>
            {sp.map((project, index) => (
              <ProjectThumbnail
                key={index}
                src={project.src}
                title={project.title}
                icons={project.icons}
                view={project.view}
                code={project.code}
                onPdfClick={() => setPdfModal(project.pdf)}
              />
            ))}
          </SideProjectThumb>
        )}
      </Projects>
      {/* PDF 모달 */}
      {pdfModal && (
        <PdfModal pdfUrl={pdfModal} onClose={() => setPdfModal(null)} />
      )}
    </Container>
  );
};

export default ProjectPart;
