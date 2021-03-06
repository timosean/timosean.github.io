import React from "react"
import ReactRotatingText from "react-rotating-text"
import styled, { keyframes } from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import backimg from "../images/smile.jpg"
import aboutback from "../images/contentback.jpg"
import { Link } from "gatsby"
import { MdSchool } from "react-icons/md"
import { GrMail } from "react-icons/gr"
import { BsGithub } from "react-icons/bs"
import { RiDoubleQuotesL } from "react-icons/ri"
import { AiFillFire } from "react-icons/ai"
import { FaDirections } from "react-icons/fa"

//index.js의 메인 배너를 감싸는 컨테이너 컴포넌트
const HomeDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  background-image: url(${backimg});
  background-size: cover;
  background-position: 50% 50%;
`

//메인 배너의 문구를 담당하는 컨테이너 컴포넌트
const WelcomeDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 1000px;
  height: 520px;
  padding-left: 9vw;
  justify-content: center;

  @media only screen and (max-width: 700px) {
    min-width: 100vw;
    width: 100vw;
  }
`

//메인페이지의 설명글
const ExplainPar = styled.p`
  font-size: 50px;
  font-weight: bold;
  color: black;
  height: 80px;
  line-height: 80px;
  margin-bottom: 0.5rem;
  font-family: "Apple SD Gothic";
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.2);

  @media only screen and (max-width: 700px) {
    font-size: 25px;
    height: 50px;
    line-height: 50px;
  }
`

//커서를 깜빡이게 만드는 애니메이션 효과
const blinkingCursor = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

//스타일링한 React Rotating Text
const StyledRotatingText = styled(ReactRotatingText)`
  display: block;
  font-size: 80px;
  font-family: "Apple SD Gothic Bold";
  text-shadow: 5px 5px 0px rgba(0, 0, 0, 0.2);
  margin-bottom: 0.5rem;
  height: 90px;
  line-height: 90px;

  .react-rotating-text-cursor {
    animation: blinking-cursor 0.8s cubic-bezier(0.68, 0.01, 0.01, 0.99) 0s
      infinite;
  }

  @keyframes blinking-cursor {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @media only screen and (max-width: 700px) {
    font-size: 45px;
    height: 50px;
    line-height: 50px;
  }
`

//'포스트 보러가기' 버튼
const PostButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 40px;
  background-image: linear-gradient(to right, black 50%, white 50%);
  background-size: 200% 100%;
  transition: background-position 0.1s;
  color: white;
  font-size: 20px;

  &:hover {
    background-position: -100% 0;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.16);
    transition: background-position 0.1s;

    .postlink {
      color: black;
      transition: color 0.1s;
      font-family: "Apple SD Gothic Bold";
    }
  }
`

//스타일링한 '포스트 보러가기' 링크
const PostLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-family: "Apple SD Gothic";

  &:visited {
    color: white;
  }
`

//'About Me' 섹션의 전체 컨테이너 컴포넌트
const AboutPage = styled.div`
  width: 100%;
  min-height: 1000px;
  overflow: auto;
  background-image: url(${aboutback});
  background-size: cover;
  background-position: 50% 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 700px) {
    min-height: 1900px;
  }
`

const AboutHeader = styled.h1`
  text-align: center;
  font-family: "Roboto";
  margin-bottom: 50px;
`

//About Me 섹션의 소개아이콘 '한 줄'을 담당하고 있는 컨테이너 컴포넌트
const IntroDiv = styled.div`
  display: flex;
  align-items: center;
  width: 1200px;
  height: 300px;
  margin: 0 auto;

  @media only screen and (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 800px;
  }
`

//About Me 섹션의 소개아이콘 하나를 담고 있는 컴포넌트
const IntroItem = styled.div`
  width: 350px;
  margin-left: 25px;
  margin-right: 25px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`

//About Me 섹션에 쓰일 아이콘에 대한 스타일
const iconStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100px",
  height: "100px",
  background: "#094DC7",
  borderRadius: "50%",
  marginBottom: "25px",
  boxShadow:
    "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
}

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HomeDiv>
      <WelcomeDiv>
        <ExplainPar>
          프론트엔드 개발자{" "}
          <span
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "white",
              fontFamily: "Apple SD Gothic",
            }}
          >
            이승우
          </span>
          의
        </ExplainPar>
        <StyledRotatingText
          items={["열정을 담은", "앞날이 기대되는", "더 읽어보고 싶은"]}
          color="white"
        ></StyledRotatingText>
        <ExplainPar>이야기들을 확인해보세요.</ExplainPar>
        <PostButton>
          <PostLink to="/postIndexPage/" className="postlink">
            포스트 보러가기
          </PostLink>
        </PostButton>
      </WelcomeDiv>
    </HomeDiv>

    {/*About Me Page*/}
    <AboutPage id="aboutpage">
      <AboutHeader>About Me</AboutHeader>

      {/*1st Icon Row*/}
      <IntroDiv>
        <IntroItem
          data-sal="slide-up"
          data-sal-duration="1000"
          data-sal-delay="100"
        >
          <div id="school" style={iconStyle}>
            <MdSchool style={{ fontSize: "60px", color: "white" }} />
          </div>
          <div
            style={{
              fontSize: "25px",
              fontFamily: "Apple SD Gothic Extra Bold",
              marginBottom: "10px",
            }}
          >
            학력
          </div>
          <div
            style={{
              fontSize: "18px",
              fontFamily: "Apple SD Gothic",
              color: "#494A4A",
            }}
          >
            고려대학교 컴퓨터학과 재학
          </div>
        </IntroItem>
        <IntroItem
          data-sal="slide-up"
          data-sal-duration="1000"
          data-sal-delay="100"
        >
          <div id="contact" style={iconStyle}>
            <GrMail style={{ fontSize: "60px", color: "white" }} />
          </div>
          <div
            style={{
              fontSize: "25px",
              fontFamily: "Apple SD Gothic Extra Bold",
              marginBottom: "10px",
            }}
          >
            연락처
          </div>
          <div
            style={{
              fontSize: "18px",
              fontFamily: "Roboto",
              color: "#494A4A",
            }}
          >
            timosean@naver.com
          </div>
        </IntroItem>
        <IntroItem
          data-sal="slide-up"
          data-sal-duration="1000"
          data-sal-delay="100"
        >
          <div id="github" style={iconStyle}>
            <BsGithub style={{ fontSize: "60px", color: "white" }} />
          </div>
          <div
            style={{
              fontSize: "25px",
              fontFamily: "Roboto Bold",
              marginBottom: "10px",
            }}
          >
            Github
          </div>
          <div
            style={{
              fontSize: "18px",
              fontFamily: "Roboto",
              color: "#494A4A",
            }}
          >
            <a
              href="https://github.com/timosean"
              target="_blank"
              title="Github으로 이동하기"
              style={{ textDecoration: "none", color: "#494A4A" }}
            >
              https://github.com/timosean
            </a>
          </div>
        </IntroItem>
      </IntroDiv>

      {/*2nd Icon Row*/}
      <IntroDiv>
        <IntroItem
          data-sal="slide-up"
          data-sal-duration="1000"
          data-sal-delay="200"
        >
          <div id="dream" style={iconStyle}>
            <RiDoubleQuotesL style={{ fontSize: "60px", color: "white" }} />
          </div>
          <div
            style={{
              fontSize: "25px",
              fontFamily: "Apple SD Gothic Extra Bold",
              marginBottom: "10px",
            }}
          >
            추구하는 자세
          </div>
          <div
            style={{
              fontSize: "18px",
              fontFamily: "Apple SD Gothic",
              color: "#494A4A",
            }}
          >
            <ul style={{ listStyle: "none", textAlign: "center", margin: "0" }}>
              <li style={{ marginBottom: "5px" }}>
                개발 과정 자체를 즐기는 개발자
              </li>
              <li>끊임없이 공부하고 발전하는 개발자</li>
            </ul>
          </div>
        </IntroItem>
        <IntroItem
          data-sal="slide-up"
          data-sal-duration="1000"
          data-sal-delay="200"
        >
          <div id="dream" style={iconStyle}>
            <AiFillFire style={{ fontSize: "60px", color: "white" }} />
          </div>
          <div
            style={{
              fontSize: "25px",
              fontFamily: "Apple SD Gothic Extra Bold",
              marginBottom: "10px",
            }}
          >
            원동력
          </div>
          <div
            style={{
              fontSize: "18px",
              fontFamily: "Apple SD Gothic",
              color: "#494A4A",
            }}
          >
            <ul style={{ listStyle: "none", textAlign: "center", margin: "0" }}>
              <li style={{ marginBottom: "5px" }}>
                웹 개발 자체에 대한 끝없는 호기심
              </li>
              <li>무엇인가 공들여 완성했을 때의 쾌감과 성취감</li>
            </ul>
          </div>
        </IntroItem>
        <IntroItem
          data-sal="slide-up"
          data-sal-duration="1000"
          data-sal-delay="200"
        >
          <div id="dream" style={iconStyle}>
            <FaDirections style={{ fontSize: "60px", color: "white" }} />
          </div>
          <div
            style={{
              fontSize: "25px",
              fontFamily: "Apple SD Gothic Extra Bold",
              marginBottom: "10px",
            }}
          >
            방향성
          </div>
          <div
            style={{
              fontSize: "18px",
              fontFamily: "Apple SD Gothic",
              color: "#494A4A",
            }}
          >
            <ul style={{ listStyle: "none", textAlign: "center", margin: "0" }}>
              <li style={{ marginBottom: "5px" }}>
                최대한 간단명료하게, 기능은 풍부하게
              </li>
              <li>사용자 경험을 극대화하는 UI 연구에 집중</li>
            </ul>
          </div>
        </IntroItem>
      </IntroDiv>
    </AboutPage>
  </Layout>
)

export default IndexPage
