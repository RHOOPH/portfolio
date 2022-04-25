import styled from "styled-components"
import { animated } from "@react-spring/web"
import { ThemeContext } from "../themeContext"
import { useContext, useEffect } from "react"
import useClickAnimation from "../useClickAnimation"

const Container = styled(animated.a)`
  color: ${({ theme }) => theme.light};
  font-family: ${({ theme }) => theme.fontfamily2};
  margin: 0.5em 0;
  text-align: center;
  width: 100%;
  text-decoration: none;
  cursor: pointer;
  padding: 1rem;
  border-radius: 10px;
  -webkit-tap-highlight-color: transparent;
  & span,
  svg {
    vertical-align: middle;
  }
`
export default function Button({ children, active, ...props }) {
  const { theme } = useContext(ThemeContext)
  const [style, unclicked, clicked] = useClickAnimation(
    {
      boxShadow: `4px 4px 8px ${theme.secondaryDarkShadow},
    -4px -4px 8px ${theme.secondaryLightShadow}`,
    },
    {
      boxShadow: ` inset 4px 4px 8px ${theme.secondaryDarkShadow},
    inset -4px -4px 8px ${theme.secondaryLightShadow}`,
    }
  )
  useEffect(() => {
    if (active === "true") clicked()
    if (active === "false") unclicked()
  }, [active])

  return (
    <Container
      {...props}
      theme={theme}
      style={style}
      {...(active === undefined && {
        onMouseDown: () => clicked(),
        onMouseUp: () => unclicked(),
        onTouchStart: () => clicked(),
        onTouchEnd: () => unclicked(),
      })}
    >
      {children}
    </Container>
  )
}
