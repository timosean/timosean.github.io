import React from "react"
import Layout from "../components/layout"
import Comment from "../components/comment"
import styled from "styled-components"
import backimg from "../images/iphone.jpg"
import { Link } from "gatsby"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

//Styled Components
const EntirePage = styled.div`
  padding-top: 100px;
  min-height: 100vh;
  height: fit-content;
  background-image: url(${backimg});
  background-position: 50% 2500px;
  background-attachment: fixed, scroll;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ContentArea = styled.div`
  margin-top: 20px;
  margin-bottom: 40px;
  min-width: 500px;
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  position: relative;

  @media only screen and (max-width: 700px) {
    width: 90vw;
    min-width: 90vw;
  }
`
const InfoArea = styled.div`
  width: 100%;
  height: 148px;
  display: flex;
  flex-direction: column;
`
const MainTextArea = styled.div`
  width: 100%;
  margin-bottom: 20px;
  padding-left: 1.45rem;
  padding-right: 1.45rem;
  display: flex;
`
const LinkContainer = styled.div`
  position: static;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  @media only screen and (max-width: 700px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`
const InvisibleItem = styled.div`
  width: 200px;
  padding: 15px;
  visibility: hidden;

  @media only screen and (max-width: 700px) {
    width: 100px;
  }
`
const LinkItem = styled.div`
  width: 200px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
  border-radius: 10px;
  border: 1px solid #cccccc;

  @media only screen and (max-width: 700px) {
    width: 100px;
    padding: 10px !important;
  }
`
const NextorPrev = styled.span`
  color: gray;
  font-size: 14px;
  font-family: "Apple SD Gothic";

  @media only screen and (max-width: 700px) {
    display: none;
  }
`
const ArticleLink = styled(Link)`
  font-family: "Apple SD Gothic Bold";
  font-size: 18px;
  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media only screen and (max-width: 700px) {
    display: none;
  }
`
const MobileArticleLink = styled(Link)`
  font-family: "Apple SD Gothic Bold";
  font-size: 14px;
  color: black;
  text-decoration: none;
  display: none;

  &:hover {
    text-decoration: underline;
  }

  @media only screen and (max-width: 700px) {
    display: flex;
    align-items: center;
  }
`
const articleHeaderStyle = {
  fontFamily: "Apple SD Gothic Semibold",
  fontSize: "36px",
  paddingTop: "2rem",
  paddingLeft: "1.45rem",
  marginBottom: "10px",
}

const articleDateStyle = {
  paddingLeft: "1.45rem",
  fontFamily: "Roboto",
  fontSize: "14px",
  color: "#A2A2A2",
  marginBottom: "10px",
}

const uiuxTemplate = React.memo(props => {
  const { title, date, html, next, previous } = props.pageContext

  return (
    <Layout>
      <EntirePage>
        <ContentArea>
          {/*글의 제목 및 작성 날짜만 나타내는 섹션*/}
          <InfoArea>
            <h1 style={articleHeaderStyle}>{title}</h1>
            <p style={articleDateStyle}>Posted on {date}</p>
            <hr />
          </InfoArea>

          {/*글의 내용이 들어가는 섹션*/}
          <MainTextArea>
            <div
              dangerouslySetInnerHTML={{ __html: html }}
              style={{ fontFamily: "Apple SD Gothic" }}
            />
          </MainTextArea>

          {/*글 내용 뒤에 '이전글'과 '다음글' 링크가 들어가는 섹션*/}
          <LinkContainer>
            {/*이전글과 다음글 링크가 동시에 존재하는 게시물일 때, '이전 글'링크의 marginRight 설정*/}
            {previous && next && (
              <LinkItem style={{ marginRight: "44%" }}>
                <NextorPrev>이전 글</NextorPrev>
                <ArticleLink to={next.frontmatter.path}>
                  {next.frontmatter.title}
                </ArticleLink>
                <MobileArticleLink to={next.frontmatter.path}>
                  <IoIosArrowBack /> 이전 글
                </MobileArticleLink>
              </LinkItem>
            )}

            {/*'이전 글' 링크가 없다면, 있는 것 처럼 invisible item을 줘서 '다음 글'의 위치 유지*/}
            {!next && <InvisibleItem style={{ marginRight: "44%" }} />}

            {previous && (
              <LinkItem
                style={{
                  paddingLeft: "0",
                  paddingRight: "16px",
                }}
              >
                <NextorPrev style={{ textAlign: "right" }}>다음 글</NextorPrev>
                <ArticleLink
                  to={previous.frontmatter.path}
                  style={{ textAlign: "right" }}
                >
                  {previous.frontmatter.title}
                </ArticleLink>
                <MobileArticleLink
                  to={previous.frontmatter.path}
                  style={{ justifyContent: "flex-end" }}
                >
                  다음 글 <IoIosArrowForward />
                </MobileArticleLink>
              </LinkItem>
            )}

            {/*'다음 글' 링크가 없고, '이전 글' 링크만 있다면, '다음 글' 링크가 있는 것 처럼 invisible item을 줘서 '다음 글'의 위치 유지*/}
            {!previous && next && (
              <LinkItem style={{ marginRight: "44%" }}>
                <NextorPrev>이전 글</NextorPrev>
                <ArticleLink to={next.frontmatter.path}>
                  {next.frontmatter.title}
                </ArticleLink>
                <MobileArticleLink to={next.frontmatter.path}>
                  <IoIosArrowBack /> 이전 글
                </MobileArticleLink>
              </LinkItem>
            )}
            {!previous && next && <InvisibleItem />}
          </LinkContainer>
        </ContentArea>
        <Comment />
      </EntirePage>
    </Layout>
  )
})

uiuxTemplate.displayName = "uiuxTemplate"

export default uiuxTemplate
