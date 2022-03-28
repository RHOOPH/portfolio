import styled from "styled-components"
import { ThemeContext } from "../themeContext"
import { useContext } from "react"

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
  box-shadow: 10px 10px 20px ${({ theme }) => theme.secondaryDarkShadow},
    -10px -10px 20px ${({ theme }) => theme.secondaryLightShadow};
`
const Item = styled.div`
  position: absolute;
  transform-origin: calc(var(--width) / 2);
  transform: rotate(${({ n, position }) => (360 / n) * position}deg);
  left: 0;

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

  const elements = icons.map((Icon, i, arr) => (
    <Item position={i} key={i} diameter={diameter} n={arr.length}>
      <Icon />
    </Item>
  ))
  return (
    <Circle n={elements.length} theme={theme} diameter={diameter}>
      <Title theme={theme} diameter={diameter}>
        <span>{title}</span>
      </Title>
      {elements}
    </Circle>
  )
}
export default CircularMenu
