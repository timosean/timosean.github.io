import React from "react"
import Layout from "../components/layout"
import Comment from "../components/comment"
import styled from "styled-components"
import backimg from "../images/oldpaper.jpg"

//Styled Components
const EntirePage = styled.div`
  padding-top: 100px;
  min-height: 100vh;
  height: fit-content;
  background-image: url(${backimg});
  background-position: 40% 30%;
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
const InfoArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
const MainTextArea = styled.div`
  width: 100%;
  display: flex;
  padding-left: 1.45rem;
`

const devlogTemplate = React.memo(props => {
  const { title, date, html } = props.pageContext

  return (
    <Layout>
      <EntirePage>
        <ContentArea>
          <InfoArea>
            <h1
              style={{
                fontFamily: "Apple SD Gothic Semibold",
                fontSize: "36px",
                paddingTop: "2rem",
                paddingLeft: "1.45rem",
                marginBottom: "10px",
              }}
            >
              {title}
            </h1>
            <p
              style={{
                paddingLeft: "1.45rem",
                fontFamily: "Roboto",
                fontSize: "14px",
                color: "#A2A2A2",
                marginBottom: "10px",
              }}
            >
              Posted on {date}
            </p>
            <hr />
          </InfoArea>
          <MainTextArea>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </MainTextArea>
        </ContentArea>
      </EntirePage>
      <Comment />
    </Layout>
  )
})

devlogTemplate.displayName = "devlogTemplate"

export default devlogTemplate
