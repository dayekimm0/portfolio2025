import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import profileImg from "../images/imgg.png";
import FloatingMenu from "../Components/FloatingMenu";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 40px 0;
  gap: 100px;
`;

const MainProfile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const ProfileImg = styled.div`
  width: 100%;
  max-width: 400px;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 12px;
  }
`;

const SubProfile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 100px;
  margin-left: 200px;
  flex: 1;
`;

const ProfileDesc = styled.div`
  p {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 10px;
  }
  span {
    font-size: 2.4rem;
    font-weight: 600;
    color: var(--sub);
  }
`;

const Section = styled.div`
  h1 {
    font-weight: 500;
    font-size: 3rem;
    margin-bottom: 20px;
  }
`;

const GridList = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  row-gap: 16px;
  column-gap: 10px;
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    text-align: start;
  }
`;

const Title = styled.p`
  font-weight: 400;
  font-size: 2rem;
  color: var(--sub);
  text-transform: uppercase;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const Desc = styled.p`
  font-weight: 400;
  font-size: 2rem;
  margin: 0;
  color: var(--sub);
  line-height: 2rem;
`;

const Profile = () => {
  const profileRef = useRef(null);

  useEffect(() => {
    if (profileRef.current) {
      gsap.to(profileRef.current, {
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: profileRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <Container>
      <FloatingMenu />

      <Wrapper>
        <MainProfile>
          <ProfileImg ref={profileRef}>
            <img src={profileImg} alt="profile" />
          </ProfileImg>

          <Section>
            <h1>Info.</h1>
            <GridList>
              <Title>NAME</Title>
              <Desc>김다예 Kim Da Ye</Desc>

              <Title>BIRTH</Title>
              <Desc>2001 10 30</Desc>

              <Title>PHONE</Title>
              <Desc>+82 10 9412 2207</Desc>

              <Title>E-MAIL</Title>
              <Desc>dayekimm0@gmail.com</Desc>
            </GridList>
          </Section>
        </MainProfile>
        <SubProfile>
          <ProfileDesc>
            <p>WHY?를 WOW로</p>
            <span>완벽하고 솔직하게, 직관적이고 매력적인 UI를 설계합니다.</span>
          </ProfileDesc>

          <Section>
            <h1>Education</h1>
            <GridList>
              <Title>2025</Title>
              <Desc>
                이젠아카데미 강남
                <br />
                UXUI디자인 웹 프론트엔드개발 부트캠프(생성형AI 활용/피그마) 수료
              </Desc>

              <Title>2024</Title>
              <Desc>
                아이티윌 <br />
                [K-디지털] AWS 리눅스 기반 클라우드 데브옵스 기초 실무 과정 수료
              </Desc>

              <Title>2024</Title>
              <Desc>동서울대학교 IT융합학과(학사학위) 졸업</Desc>

              <Title>2023</Title>
              <Desc>동서울대학교 정보통신과 ICT융합전공 졸업</Desc>

              <Title>2020</Title>
              <Desc>건국대학교사범대학부속고등학교 졸업</Desc>
            </GridList>
          </Section>

          <Section>
            <h1>Award & Certificate</h1>
            <GridList>
              <Title>2023.11</Title>
              <Desc>ICT 창의 융합 캡스톤디자인 경진대회 산학협동상</Desc>

              <Title>2022.11</Title>
              <Desc>
                한국인터넷방송통신학회 국내 학술대회 우수논문상
                <br />
                기능성 스마트 창문제어 연구
              </Desc>

              <Title>2022.07</Title>
              <Desc>인공지능전문가 자격증 (사)국제문화기술진흥원</Desc>
            </GridList>
          </Section>
        </SubProfile>
      </Wrapper>
    </Container>
  );
};

export default Profile;
