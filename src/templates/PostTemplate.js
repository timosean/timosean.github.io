import React from "react"
import Layout from "../components/layout"
import Comment from "../components/comment"
import styled from "styled-components"
import backimg from "../images/daily.jpg"
import { Link } from "gatsby"

//Styled Components
{
  /*footer를 제외한 전체 페이지*/
}
const EntirePage = styled.div`
  padding-top: 100px;
  min-height: 100vh;
  background-image: url(${backimg});
  background-position: 0% 50%;
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
`
const InvisibleItem = styled.div`
  width: 200px;
  padding: 15px;
  visibility: hidden;
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
`
const ArticleLink = styled(Link)`
  font-family: "Apple SD Gothic Bold";
  font-size: 18px;
  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
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

const PostTemplate = React.memo(props => {
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
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </MainTextArea>

          {/*글 내용 뒤에 '이전글'과 '다음글' 링크가 들어가는 섹션*/}
          <LinkContainer>
            {/*이전글과 다음글 링크가 동시에 존재하는 게시물일 때, '이전 글'링크의 marginRight 설정*/}
            {previous && next && (
              <LinkItem style={{ marginRight: "350px" }}>
                <span
                  style={{
                    color: "gray",
                    fontSize: "14px",
                  }}
                >
                  이전 글
                </span>
                <ArticleLink to={next.frontmatter.path}>
                  {next.frontmatter.title}
                </ArticleLink>
              </LinkItem>
            )}

            {/*'이전 글' 링크가 없다면, 있는 것 처럼 invisible item을 줘서 '다음 글'의 위치 유지*/}
            {!next && <InvisibleItem style={{ marginRight: "350px" }} />}

            {previous && (
              <LinkItem
                style={{
                  paddingLeft: "0",
                  paddingRight: "16px",
                }}
              >
                <span
                  style={{
                    color: "gray",
                    fontSize: "14px",
                    textAlign: "right",
                  }}
                >
                  다음 글
                </span>
                <ArticleLink
                  to={previous.frontmatter.path}
                  style={{ textAlign: "right" }}
                >
                  {previous.frontmatter.title}
                </ArticleLink>
              </LinkItem>
            )}

            {/*'다음 글' 링크가 없고, '이전 글' 링크만 있다면, '다음 글' 링크가 있는 것 처럼 invisible item을 줘서 '다음 글'의 위치 유지*/}
            {!previous && next && (
              <LinkItem style={{ marginRight: "350px" }}>
                <span
                  style={{
                    color: "gray",
                    fontSize: "14px",
                  }}
                >
                  이전 글
                </span>
                <ArticleLink to={next.frontmatter.path}>
                  {next.frontmatter.title}
                </ArticleLink>
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

PostTemplate.displayName = "PostTemplate"

export default PostTemplate
