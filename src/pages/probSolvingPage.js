import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Seo from "../components/seo"
import Layout from "../components/layout"
import backimg from "../images/table.jpg"

//Styled Components
const EntirePage = styled.div`
  padding-top: 100px;
  min-height: 100vh;
  background-image: url(${backimg});
  background-position: 50% 40%;
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
`

const PostContainer = styled.div`
  display: flex;
  justify-content: center;
`

const PostItem = styled.div`
  width: 700px;
  margin-bottom: 50px;
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

const ProbSolvingPage = () => {
  const data = useStaticQuery(
    graphql`
      query ProbSolvingQuery {
        allMarkdownRemark(
          sort: { fields: id, order: DESC }
          filter: { fileAbsolutePath: { regex: "/(probsolving)/" } }
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
      <Seo title="Problem Solving" />
      <EntirePage>
        <ContentArea>
          <h1
            style={{
              fontFamily: "Roboto",
              fontSize: "35px",
              marginBottom: "1.45rem",
              paddingBottom: "1.45rem",
              paddingTop: "1.45rem",
            }}
          >
            Problem Solving
          </h1>
          <PostContainer>
            <ul style={{ listStyle: "none", margin: 0, width: "100%" }}>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <PostItem>
                  <li key={node.id}>
                    <h2 style={{ marginBottom: 0, fontFamily: "NOTO SANS KR" }}>
                      <PostLink to={node.frontmatter.path}>
                        {node.frontmatter.title}
                      </PostLink>
                    </h2>
                    <p
                      style={{
                        fontFamily: "NOTO SANS KR",
                        fontSize: "15px",
                        color: "#313233",
                      }}
                    >
                      {node.frontmatter.date}
                    </p>
                    <p style={{ fontFamily: "NOTO SANS KR" }}>{node.excerpt}</p>
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

export default ProbSolvingPage
