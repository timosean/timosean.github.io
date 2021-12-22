import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import { FiChevronDown } from "react-icons/fi"

//styled-components
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

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0;
  height: 80px;
  margin-left: 9vw;
  margin-right: 19vw;
`

const StyledTitle = styled.h1`
  margin: 0;
  font-size: 35px;
  text-decoration: none;
  font-family: "Source Sans Pro";
  min-width: 9vw;
`

const TitleLink = styled(Link)`
  text-decoration: none;
  color: #094dc7;
`

const NavContainer = styled.div`
  width: 50vw;
  height: 80px;
  padding: 0;
  margin-right: 25vw;
  display: flex;
  flex-direction: row;
  align-items: center;
`

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
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-family: "Roboto";
  font-weight: bold;
  font-size: 18px;
`

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
            <span
              style={{
                marginRight: "5px",
                fontFamily: "Roboto",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              Study
            </span>
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
