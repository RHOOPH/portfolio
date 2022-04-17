import styled from "styled-components"
import { ThemeContext } from "../themeContext"
import { useContext } from "react"
import {
  useSpring,
  animated,
  config,
  useChain,
  useSpringRef,
} from "@react-spring/web"

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

const Hey = styled(animated.div)`
  grid-area: hey;
  justify-self: center;
  font-size: 1.25em;

  & div {
    display: inline-block;
    transform: rotate(-90deg) scaleY(1.1);
    opacity: 1;
  }
`
const I = styled(animated.div)`
  grid-area: i;
  justify-self: center;
  align-self: start;
  font-size: 0.85em;
`

const FName = styled(animated.div)`
  grid-area: fname;
`

const LName = styled(animated.div)`
  grid-area: lname;
  align-self: start;
  line-height: 0.9;
`

const Quote = styled(animated.div)`
  font-family: ${({ theme }) => theme.fontfamily2};
  grid-area: quote;
  align-self: end;
  width: 15ch;
  font-size: 0.35em;
  line-height: initial;
`
const Hero = () => {
  const { theme } = useContext(ThemeContext)
  const ref1 = useSpringRef()
  const anime1 = useSpring({
    from: { rotateZ: 90, x: 100, scale: 0 },
    to: [
      { scale: 2, delay: 500 },
      { rotateZ: 0, scale: 1 },
      { x: 0, scale: 1 },
    ],
    config: config.slow,
    ref: ref1,
  })
  const ref2 = useSpringRef()
  const anime2 = useSpring({
    from: { transformOrigin: "center", x: 100, scale: 2, rotateX: 90, y: 0 },
    to: [
      { scale: 2, rotateX: 0, y: 0 },
      { scale: 1, x: 0, y: 0 },
    ],
    config: config.slow,
    ref: ref2,
  })
  const ref3 = useSpringRef()
  const anime3 = useSpring({
    from: { x: 100, scale: 0 },
    to: [{ scale: 1 }, { x: 0 }],
    ref: ref3,
  })
  const ref4 = useSpringRef()
  const anime4 = useSpring({
    from: { x: 100, scale: 0 },
    to: [{ scale: 1 }, { x: 0 }],
    ref: ref4,
  })
  useChain([ref1, ref2, ref3, ref4], [0, 0.75, 1.25, 1.5], 2000)

  return (
    <>
      <Box theme={theme}>
        <Hey style={anime1}>
          <div>HEY</div>
        </Hey>
        <I style={anime2}>I'm</I>
        <FName style={anime3}>Kowshik</FName>
        <LName style={anime3}>Achar</LName>
        <Quote style={anime4}>An Aspiring Front End Developer</Quote>
      </Box>
    </>
  )
}
export default Hero
