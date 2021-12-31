import React from "react"
import styled from "styled-components"
import { GrMail } from "react-icons/gr"
import { BsInstagram } from "react-icons/bs"
import { FaFacebookSquare } from "react-icons/fa"
import { SiGmail } from "react-icons/si"
import { Link } from "gatsby"

const FooterArea = styled.div`
  background: #3a5344;
  height: 230px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

const ContentArea = styled.div`
  display: flex;
  justify-content: center;
  min-width: 1300px;
  width: 80vw;
`

const RowItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  justify-content: center;
  margin-right: 50px;
`

const CopyrightArea = styled.div`
  width: 100%;
  height: 40px;
  background: #3a5344;
  text-align: center;
  font-size: 15px;
  font-family: "Roboto";
  color: white;
`

const categoryStyle = {
  color: "#F2E3B4",
  fontFamily: "Roboto",
  fontSize: "20px",
  marginBottom: "30px",
  textShadow:
    "0px 4px 3px rgba(0,0,0,0.4), 0px 8px 13px rgba(0,0,0,0.1), 0px 18px 23px rgba(0,0,0,0.1)",
}

const itemStyle = {
  height: "100px",
}

const contentStyle = {
  color: "#F2E3B4",
  fontSize: "18px",
  fontFamily: "Apple SD Gothic",
}

const linkStyle = {
  color: "#F2E3B4",
  textDecoration: "none",
}

const topFunction = () => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}

const Footer = () => {
  return (
    <>
      <FooterArea>
        <ContentArea>
          <RowItem>
            <div style={categoryStyle}>Developer</div>
            <div style={itemStyle}>
              <div style={contentStyle}>이 승 우</div>
              <div
                style={{
                  ...contentStyle,
                  fontFamily: "Roboto",
                  fontSize: "15px",
                }}
              >
                LEE SEUNGWOO
              </div>
            </div>
          </RowItem>
          <RowItem>
            <div style={categoryStyle}>Link</div>
            <div style={itemStyle}>
              <div
                style={{
                  ...contentStyle,
                  fontFamily: "Roboto",
                  fontSize: "15px",
                }}
              >
                <Link to="/postIndexPage" style={linkStyle}>
                  -See Posts
                </Link>
              </div>
              <div
                style={{
                  ...contentStyle,
                  fontFamily: "Roboto",
                  fontSize: "15px",
                }}
              >
                <div
                  style={{ linkStyle, cursor: "pointer" }}
                  onClick={topFunction}
                >
                  -top
                </div>
              </div>
            </div>
          </RowItem>
          <RowItem>
            <div style={categoryStyle}>Study</div>
            <div style={itemStyle}>
              <div
                style={{
                  ...contentStyle,
                  fontFamily: "Roboto",
                  fontSize: "15px",
                }}
              >
                <Link to="/probSolvingPage" style={linkStyle}>
                  -Problem Solving
                </Link>
              </div>
              <div
                style={{
                  ...contentStyle,
                  fontFamily: "Roboto",
                  fontSize: "15px",
                }}
              >
                <Link to="/devLogPage" style={linkStyle}>
                  -Devlog
                </Link>
              </div>
              <div
                style={{
                  ...contentStyle,
                  fontFamily: "Roboto",
                  fontSize: "15px",
                }}
              >
                <Link to="/uiuxPage" style={linkStyle}>
                  -UI / UX
                </Link>
              </div>
              <div
                style={{
                  ...contentStyle,
                  fontFamily: "Roboto",
                  fontSize: "15px",
                }}
              >
                <Link to="/stockStudyPage" style={linkStyle}>
                  -Stock
                </Link>
              </div>
            </div>
          </RowItem>
          <RowItem>
            <div style={categoryStyle}>Contact</div>
            <div style={itemStyle}>
              <div
                style={{
                  ...contentStyle,
                  fontFamily: "Roboto",
                  fontSize: "15px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <GrMail style={{ marginRight: "5px" }} /> timosean@naver.com
              </div>
              <div
                style={{
                  ...contentStyle,
                  fontFamily: "Roboto",
                  fontSize: "15px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <SiGmail style={{ marginRight: "5px" }} /> seanneony@gmail.com
              </div>
              <div
                style={{
                  ...contentStyle,
                  fontFamily: "Roboto",
                  fontSize: "15px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <BsInstagram style={{ marginRight: "5px" }} /> februarycloud_
              </div>
              <div
                style={{
                  ...contentStyle,
                  fontFamily: "Roboto",
                  fontSize: "15px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <FaFacebookSquare style={{ marginRight: "5px" }} /> dev.timosean
              </div>
            </div>
          </RowItem>
        </ContentArea>
      </FooterArea>
      <CopyrightArea>
        <span style={{ lineHeight: "15px" }}>
          Copyright © Seungwoo Lee 2021
        </span>
      </CopyrightArea>
    </>
  )
}

export default Footer
