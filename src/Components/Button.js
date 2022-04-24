import styled from "styled-components"
import { animated, useSpring } from "@react-spring/web"
import { ThemeContext } from "../themeContext"
import { useContext } from "react"

const Container = styled(animated.div)`
  color: ${({ theme }) => theme.light};
  font-family: ${({ theme }) => theme.fontfamily2};
  margin: 0.5em 0;
  text-align: center;
  width: 100%;
  text-decoration: none;
  box-shadow: 4px 4px 8px ${({ theme }) => theme.secondaryDarkShadow},
    -4px -4px 8px ${({ theme }) => theme.secondaryLightShadow};
  cursor: pointer;
  padding: 1rem;
  border-radius: 10px;
  & span,
  svg {
    vertical-align: middle;
  }
`
export default function Button({ children, active, ...props }) {
  const { theme } = useContext(ThemeContext)
  const switchAnimation = useSpring({
    backgroundColor: active ? theme.primary : theme.secondary,
  })
  return (
    <Container {...props} theme={theme} style={switchAnimation}>
      {children}
    </Container>
  )
}
