import styled from "styled-components"
import { ThemeContext } from "../themeContext"
import { useContext } from "react"
import { useSprings, animated, config } from "@react-spring/web"

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
  grid-area: quote;
  align-self: end;
  width: 15ch;
  font-size: 0.35em;
  line-height: initial;
`
const Hero = () => {
  const { theme } = useContext(ThemeContext)

  const animations = useSprings(4, [
    {
      from: { rotateZ: 90, x: 100, scale: 0 },
      to: [{ scale: 2, delay: 500 }, { rotateZ: 0, scale: 1 }, { x: 0 }],
      config: config.slow,
    },
    {
      from: { x: 100, scale: 2, rotateX: 90 },
      to: [{ rotateX: 0 }, { scale: 1, x: 0 }],
      config: config.slow,
      delay: 1500,
    },
    {
      from: { x: 100, scale: 0 },
      to: [{ scale: 1 }, { x: 0 }],
      delay: 2500,
    },
    {
      from: { x: 100, scale: 0 },
      to: [{ scale: 1 }, { x: 0 }],
      delay: 3000,
    },
  ])

  return (
    <>
      <Box theme={theme}>
        <Hey style={animations[0]}>
          <div>HEY</div>
        </Hey>
        <I style={animations[1]} theme={theme}>
          I'm
        </I>
        <FName style={animations[2]} theme={theme}>
          Kowshik
        </FName>
        <LName style={animations[2]} theme={theme}>
          Achar
        </LName>
        <Quote style={animations[3]} theme={theme}>
          An Aspiring Front End Developer
        </Quote>
      </Box>
    </>
  )
}
export default Hero
