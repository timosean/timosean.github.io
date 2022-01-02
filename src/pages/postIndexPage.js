import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Seo from "../components/seo"
import Layout from "../components/layout"
import backimg from "../images/daily.jpg"

//Styled Components
const EntirePage = styled.div`
  padding-top: 100px;
  min-height: 100vh;
  background-image: url(${backimg});
  background-position: 0% 50%;
  background-attachment: fixed, scroll;
  display: flex;
  justify-content: center;
`

const ContentArea = styled.div`
  margin-top: 20px;
  margin-bottom: 40px;
  min-width: 500px;
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;

  @media only screen and (max-width: 700px) {
    width: 90vw;
    min-width: 90vw;
  }
`

const Title = styled.h1`
  font-family: "Roboto";
  font-size: 35px;
  margin-bottom: 1.45rem;
  padding-bottom: 1.45rem;
  padding-top: 1.45rem;
`

const PostContainer = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 700px) {
    width: 90%;
  }
`

const PostItem = styled.div`
  width: 700px;
  margin-bottom: 50px;

  @media only screen and (max-width: 700px) {
    width: 100%;
  }
`

const PostLink = styled(Link)`
  color: black;
  text-decoration: none;
  transition: 0.2s;

  &:hover {
    color: #24c0a9 !important;
    transition: color 0.2s;
  }

  &:visited {
    color: black;
  }
`

const ReadMoreBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 35px;
  background: #1eb49f;
`

const ReadMoreLink = styled(Link)`
  color: white;
  font-size: 15px;
  font-family: "Roboto";
  text-decoration: none;
`

const PostIndexPage = () => {
  const data = useStaticQuery(
    graphql`
      query LatestPostQuery {
        allMarkdownRemark(
          sort: { fields: frontmatter___date, order: DESC }
          filter: { fileAbsolutePath: { regex: "/(dailypost)/" } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 200, truncate: true)
              id
              frontmatter {
                title
                path
                date
              }
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      <Seo title="Posts" />
      <EntirePage>
        <ContentArea>
          <Title>Recent Posts</Title>
          <PostContainer>
            <ul style={{ listStyle: "none", margin: 0, width: "100%" }}>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <PostItem>
                  <li key={node.frontmatter.title}>
                    <h2
                      style={{
                        marginBottom: 0,
                        fontFamily: "Apple SD Gothic",
                      }}
                    >
                      <PostLink to={node.frontmatter.path}>
                        {node.frontmatter.title}
                      </PostLink>
                    </h2>
                    <p
                      style={{
                        fontFamily: "Roboto",
                        fontSize: "15px",
                        color: "#313233",
                      }}
                    >
                      {node.frontmatter.date}
                    </p>
                    <p style={{ fontFamily: "Apple SD Gothic" }}>
                      {node.excerpt}
                    </p>
                    <ReadMoreBtn>
                      <ReadMoreLink to={node.frontmatter.path}>
                        Read More
                      </ReadMoreLink>
                    </ReadMoreBtn>
                  </li>
                </PostItem>
              ))}
            </ul>
          </PostContainer>
        </ContentArea>
      </EntirePage>
    </Layout>
  )
}

export default PostIndexPage
