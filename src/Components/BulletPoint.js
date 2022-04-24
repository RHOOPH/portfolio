import styled from "styled-components"
import { ThemeContext } from "../themeContext"
import { useContext } from "react"
import { useSpring, animated, config } from "@react-spring/web"
import { Waypoint } from "react-waypoint"

import useWindowDimensions from "../useWindowDimensions"

const Container = styled.div`
  display: flex;

  align-items: center;

  margin: 1rem;

  @media (min-width: 670px) {
    ${({ align }) => align === "end" && "align-self:flex-end;"}
  }
  @media (max-width: 669px) {
    flex-direction: column;
    margin: 2rem 0;
  }
`
const Header = styled.div`
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.light};
  font-family: ${({ theme }) => theme.fontfamily1};
  letter-spacing: 0.15em;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 1;

  box-shadow: 15px 15px 30px ${({ theme }) => theme.primaryDarkShadow},
    -15px -15px 30px ${({ theme }) => theme.primaryLightShadow};
  padding: 1rem;
  min-width: 180px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  @media (min-width: 670px) {
    ${({ align }) => align === "end" && "order:2;"}
  }
  @media (max-width: 669px) {
    margin-bottom: 1rem;
    /* aspect ratio not working in chrome when width is not set (only when flex-direction changes to column)  */
    width: max-content;
  }
`
const Body = styled(animated.div)`
  padding: 0 2em;
  color: ${({ theme }) => theme.accent2};
  border-radius: 0 20px 20px 0;
  max-width: 35ch;
  font-weight: 500;
  line-height: 1.4;

  @media (max-width: 669px) {
    text-align: justify;
    padding-top: 1rem;
  }
`

const BulletPoint = ({ title, content, className, align }) => {
  const { theme } = useContext(ThemeContext)
  const { width } = useWindowDimensions()

  const [animation, api] = useSpring(() => ({
    opacity: 0,
    x: 0,

    scaleX: 1,
  }))

  const runAnimation = (reverse) => {
    const narrowDeviceStyle = {
      from: { opacity: 0 },
      to: { opacity: 1 },
      config: config.slow,
      reverse: reverse,
    }
    const wideDeviceStyle = {
      from: { x: align === "end" ? "100%" : "-100%", opacity: 0, scaleX: 0 },
      to: { x: "0%", opacity: 1, scaleX: 1 },
      config: config.slow,
      reverse: reverse,
    }

    api.start(width < 670 ? narrowDeviceStyle : wideDeviceStyle)
  }
  return (
    <Container theme={theme} className={className} align={align}>
      {title && (
        <Header theme={theme} align={align}>
          {title}
        </Header>
      )}
      {content && (
        <Waypoint
          onEnter={() => runAnimation(false)}
          bottomOffset="20%"
          onLeave={() => runAnimation(true)}
          topOffset="20%"
          fireOnRapidScroll={false}
        >
          <Body theme={theme} style={animation}>
            {content}
          </Body>
        </Waypoint>
      )}
    </Container>
  )
}
export default BulletPoint
