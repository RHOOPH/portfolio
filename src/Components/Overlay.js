import Wave from "./wave"
import styled from "styled-components"
import { ThemeContext } from "../themeContext"

import { useContext } from "react"

const Nav = styled.div`
  font-size: max(calc(5.5vw * 0.35), 1rem);
  font-family: ${({ theme }) => theme.fontfamily1};
  position: fixed;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.accent1};
  top: 50%;
  transform: translateY(-50%);
  width: 100%;

  &::before,
  &::after {
    content: "";
    display: inline-block;
    border-top: 2em solid transparent;
    border-bottom: 2em solid transparent;
  }
  &::before {
    border-left: 1.5em solid ${({ theme }) => theme.accent2};
  }
  &::after {
    border-right: 1.5em solid ${({ theme }) => theme.accent2};
  }

  & div {
    transform: rotate(-90deg);
  }
  & div:first-child {
    margin-right: auto;
  }
`

const Overlay = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <>
      <Wave />
      <Wave bottom />
      <Nav theme={theme}>
        <div>About</div>
        <div>Projects</div>
      </Nav>
    </>
  )
}
export default Overlay
