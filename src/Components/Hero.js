import styled from "styled-components"
import { ThemeContext } from "../themeContext"
import { useContext } from "react"

const Box = styled.div`
  position: relative;
  display: inline-grid;
  grid-template: 1fr 1fr 1.2fr / 2ch auto;
  grid-template-areas:
    "i fname"
    "hey lname"
    "hey quote";
  gap: 0 0.2em;
  align-items: center;

  font-family: ${({ theme }) => theme.fontfamily1};
  font-size: max(5.5vw, 45px);
  color: ${({ theme }) => theme.accent1};
  line-height: 1;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

const Hey = styled.div`
  grid-area: hey;
  justify-self: center;
  font-size: 1.25em;

  & div {
    display: inline-block;
    transform: rotate(-90deg) scaleY(1.1);
    opacity: 1;
  }
`
const I = styled.div`
  grid-area: i;
  justify-self: center;
  align-self: start;
  font-size: 0.85em;
`

const FName = styled.div`
  grid-area: fname;
`

const LName = styled.div`
  grid-area: lname;
  align-self: start;
  line-height: 0.9;
`

const Quote = styled.div`
  font-family: ${({ theme }) => theme.fontfamily2};
  grid-area: quote;
  align-self: end;
  width: 15ch;
  font-size: 0.35em;
  line-height: initial;
`
const Hero = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <Box theme={theme}>
      <Hey>
        <div>HEY</div>
      </Hey>
      <I>I'm</I>
      <FName>Kowshik</FName>
      <LName>Achar</LName>
      <Quote>An Aspiring Front End Developer</Quote>
    </Box>
  )
}
export default Hero
