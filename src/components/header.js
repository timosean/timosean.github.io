import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import { FiChevronDown, FiMenu } from "react-icons/fi"

//헤더 전체를 감싸는 헤더컨테이너 컴포넌트
const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 80px;
  background: rgba(255, 255, 255, 0.5);
  border-bottom: 0.02rem transparent solid;
  backdrop-filter: blur(5px);
  z-index: 5;
  transition: 0.2s;
  position: fixed;

  &:hover {
    background-color: white;
    border-bottom: 0.02rem gray solid;
    transition: background-color border-bottom 0.2s;
  }
`

//사이트 로고를 담고 있는 컨테이너
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0;
  height: 80px;
  margin-left: 9vw;
  margin-right: 19vw;
`

//사이트 로고에 대한 전반적인 스타일
const StyledTitle = styled.h1`
  margin: 0;
  font-size: 35px;
  text-decoration: none;
  font-family: "Source Sans Pro";
  min-width: 9vw;
`

//사이트 로고의 링크에 대한 스타일
const TitleLink = styled(Link)`
  text-decoration: none;
  color: #094dc7;
`

//모바일 스크린에 맞춰 나타나는 메뉴아이콘
const MenuIcon = styled.div`
  @media only screen and (max-width: 700px) {
    position: absolute;
    width: 50px;
    height: 80px;
    right: 0px;
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover .mobile-dropdown {
      padding-top: 10px;
      padding-bottom: 10px;
      height: 200px;
      transition: height 0.2s;
    }
  }

  @media only screen and (min-width: 701px) {
    display: none;
  }
`

//네비게이션 링크들을 감싸는 컨테이너 컴포넌트
const NavContainer = styled.div`
  width: 50vw;
  height: 80px;
  padding: 0;
  margin-right: 25vw;
  display: flex;
  flex-direction: row;
  align-items: center;
`

//네비게이션 아이템 하나의 스타일
const NavItem = styled.div`
  min-width: 130px;
  box-sizing: border-box;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 80px;
  border-top: 5px solid rgba(0, 0, 0, 0);
  border-bottom: 5px solid rgba(0, 0, 0, 0);
  transition: 0.2s;

  &:hover {
    border-bottom: 5px solid #f7b103;
    transition: border-bottom 0.2s;
  }

  &:hover .icon {
    transform: rotate(180deg);
    transition: 0.4s;
  }

  &:hover .dropdown-content {
    display: flex;
  }

  @media only screen and (max-width: 700px) {
    display: none;
  }
`

//네비게이션 링크 스타일
const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-family: "Roboto";
  font-weight: bold;
  font-size: 18px;

  @media only screen and (max-width: 700px) {
    margin-bottom: 5px;
  }
`

//Study 메뉴를 위한 span
const StudySpan = styled.span`
  margin-right: 5px;
  font-family: "Roboto";
  font-size: 18px;
  font-weight: bold;

  &:hover .m-study-dropdown {
    height: 200px;
    padding-top: 10px;
    padding-bottom: 10px;
    transition: height 0.2s;
  }
`

//Study 메뉴를 hover했을 때 나타나는 드롭다운 컨테이너
const StudyContainer = styled.div`
  display: none;
  top: 80px;
  left: 0;
  position: fixed;
  width: 100vw;
  height: 250px;
  background: white;
  z-index: 100;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.11);
`

const ContentIntroBox = styled.div`
  display: inline-flex;
  flex-direction: column;
  height: 250px;
  width: 17vw;
  min-width: 296px;
  justify-content: center;
  margin-left: 15vw;
  margin-right: 5vw;
`

const ContentListBox = styled.div`
  display: inline-flex;
  height: 250px;
  width: 15vw;
  align-items: center;
  margin-right: 10px;
`

const MenuLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-family: "Roboto";
  font-size: 17px;
  font-weight: normal;
  transition: 0.1s;

  &:hover {
    font-weight: bold;
    font-size: 18px;
    transition: 0.1s;
  }
`

const MobileMenuDropdown = styled.div`
  width: 100vw;
  height: 0px;
  position: fixed;
  top: 80px;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 20px;
  background: white;
  z-index: 100;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.11);
  text-align: right;
  transition: 0.2s;
  overflow: hidden;
`

//Inline text styles
const studyStyle = {
  fontFamily: "Roboto",
  fontSize: "40px",
  display: "block",
  marginBottom: "10px",
}

const explainStyle = {
  fontFamily: "Roboto",
  fontSize: "20px",
  color: "#585858",
}

const listStyle = {
  fontFamily: "Roboto",
  fontSize: "17px",
  textDecoration: "none",
  listStyle: "none",
  minWidth: "140px",
}

//Header Component Code
const Header = ({ siteTitle }) => {
  return (
    <>
      <StyledHeader>
        <TitleContainer>
          <StyledTitle>
            <TitleLink to="/">{siteTitle}</TitleLink>
          </StyledTitle>
        </TitleContainer>
        <NavContainer>
          <NavItem>
            <NavLink to="/#aboutpage">About Me</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/postIndexPage/">Posts</NavLink>
          </NavItem>
          <NavItem className="dropdown">
            <StudySpan>Study</StudySpan>
            <FiChevronDown
              className="icon"
              style={{ transition: "0.4s", color: "#094dc7" }}
            />
            <StudyContainer className="dropdown-content">
              <ContentIntroBox>
                <h2 style={studyStyle}>Study</h2>
                <p style={explainStyle}>
                  Explore the fields I am interested in and studying.
                </p>
              </ContentIntroBox>
              <ContentListBox>
                <ul style={listStyle}>
                  <li>
                    <MenuLink to="/probSolvingPage">Problem Solving</MenuLink>
                  </li>
                  <li>
                    <MenuLink to="/uiuxPage">UI / UX</MenuLink>
                  </li>
                </ul>
              </ContentListBox>
              <ContentListBox>
                <ul style={listStyle}>
                  <li>
                    <MenuLink to="/devLogPage">DevLog</MenuLink>
                  </li>
                  <li>
                    <MenuLink to="/stockStudyPage">Stock</MenuLink>
                  </li>
                </ul>
              </ContentListBox>
            </StudyContainer>
          </NavItem>
          <MenuIcon>
            <FiMenu />
            <MobileMenuDropdown className="mobile-dropdown">
              <NavLink to="/#aboutpage">About Me</NavLink>
              <NavLink to="/postIndexPage/">Posts</NavLink>
              <StudySpan style={{ margin: "0" }}>
                Study
                <MobileMenuDropdown
                  className="m-study-dropdown"
                  style={{ zIndex: "101" }}
                >
                  <MenuLink to="/probSolvingPage">Problem Solving</MenuLink>
                  <MenuLink to="/uiuxPage">UI / UX</MenuLink>
                  <MenuLink to="/devLogPage">DevLog</MenuLink>
                  <MenuLink to="/stockStudyPage">Stock</MenuLink>
                </MobileMenuDropdown>
              </StudySpan>
            </MobileMenuDropdown>
          </MenuIcon>
        </NavContainer>
      </StyledHeader>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
