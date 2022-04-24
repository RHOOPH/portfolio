import styled from "styled-components"
import { ThemeContext } from "../themeContext"
import { useContext, useState, useRef } from "react"
import { animated, useSprings, config } from "@react-spring/web"
import { Waypoint } from "react-waypoint"

const Circle = styled.div`
  position: relative;
  --width: min(${({ diameter }) => diameter}px, 95vw);
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--width);
  height: var(--width);
`
const Title = styled.div`
  position: absolute;
  aspect-ratio: 1/1;
  min-width: ${({ diameter }) => diameter / 3}px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1ch;
  z-index: 10;
  text-align: center;
  background: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.light};
  font-family: ${({ theme }) => theme.fontfamily1};
  letter-spacing: 0.15em;
  font-weight: 500;
  font-size: 1rem;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 10px 10px 20px ${({ theme }) => theme.secondaryDarkShadow},
    -10px -10px 20px ${({ theme }) => theme.secondaryLightShadow};
`
const Item = styled(animated.div)`
  position: absolute;

  & svg {
    transform: rotate(${({ n, position }) => (-360 / n) * position}deg);
    height: 50px;
    width: 50px;
    transition: transform 0.2s;

    &:hover {
      transform: rotate(${({ n, position }) => (-360 / n) * position}deg)
        scale(1.2);
    }
  }
`

const CircularMenu = ({ icons, title, diameter }) => {
  const { theme } = useContext(ThemeContext)
  const [open, setOpen] = useState(false)
  const itemsRef = useRef([])
  const shown = useRef(false)
  const [spin, spinAPI] = useSprings(icons.length, (i) => ({}))

  const items = icons.map((Icon, i, arr) => (
    <Item
      position={i}
      key={i}
      diameter={diameter}
      n={arr.length}
      ref={(el) => (itemsRef.current[i] = el)}
      style={spin[i]}
      onClick={() => runAnimation()}
    >
      <Icon />
    </Item>
  ))

  const startSpin = (reverse) => {
    spinAPI.start((i) => {
      let delay = 100
      return {
        from: {
          transformOrigin: `min(0px, 0vw)`,
          left: `min(${diameter / 2}px, 47vw)`,
          rotate: 0,
        },
        to: {
          transformOrigin: `min(${diameter / 2}px, 47vw)`,
          left: `min(0px, 0vw)`,
          rotate: (360 / icons.length) * i + 360,
        },
        delay: reverse ? (icons.length - 1) * delay - i * delay : i * delay,

        config: reverse ? config.molasses : config.slow,
        reverse: reverse,
      }
    })
  }

  const runAnimation = () => {
    startSpin(open)

    setOpen((p) => !p)
  }

  const handleEnter = (a) => {
    if (!shown.current) {
      runAnimation()
      shown.current = true
    }
  }

  return (
    <Circle n={items.length} theme={theme} diameter={diameter}>
      <Title theme={theme} diameter={diameter} onClick={runAnimation}>
        <span>{title}</span>
        <Waypoint onEnter={handleEnter} topOffset="20%" bottomOffset="20%" />
      </Title>

      {items}
    </Circle>
  )
}
export default CircularMenu
