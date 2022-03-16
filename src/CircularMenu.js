import styled from "styled-components"
import { ThemeContext } from "./themeContext"
import { useContext } from "react"

const Circle = styled.div`
  position: relative;
  margin: 0 5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ diameter }) => diameter}vw;
  height: ${({ diameter }) => diameter}vw;
`
const Title = styled.div`
  position: absolute;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1ch;
  z-index: 10;
  text-align: center;
  background: ${({ theme }) => theme.background2};
  color: ${({ theme }) => theme.background1};
  font-weight: 500;
  font-size: 1vw;
  border-radius: 50%;
`
const Item = styled.div`
  position: absolute;
  transform-origin: ${({ diameter }) => diameter / 2}vw;

  transform: rotate(${({ n, position }) => (360 / n) * position}deg);
  left: 0;

  & svg {
    transform: rotate(${({ n, position }) => (-360 / n) * position}deg);
    height: 3.5vw;
    width: 3.5vw;
    transition: transform 0.2s;
    &:hover {
      transform: rotate(${({ n, position }) => (-360 / n) * position}deg)
        scale(1.2);
    }
  }
`

const CircularMenu = ({ icons, title, diameter }) => {
  const { theme } = useContext(ThemeContext)

  //   const elements = icons.map((Icon, i) => (
  //     <div className="items" style={{ "--i": i }} key={i}>
  //       <Icon />
  //     </div>
  //   ))
  const elements = icons.map((Icon, i, arr) => (
    <Item position={i} key={i} diameter={diameter} n={arr.length}>
      <Icon />
    </Item>
  ))
  return (
    <Circle n={elements.length} theme={theme} diameter={diameter}>
      <Title theme={theme}>
        <span>{title}</span>
      </Title>
      {elements}
    </Circle>
  )
}
export default CircularMenu
