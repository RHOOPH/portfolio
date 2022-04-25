import styled from "styled-components"
import { ThemeContext } from "../themeContext"
import { useContext, useEffect, useState, useRef } from "react"
import { useSpring, animated, config } from "@react-spring/web"
import { Waypoint } from "react-waypoint"
import useClickAnimation from "../useClickAnimation"
import useWindowDimensions from "../useWindowDimensions"
import useWindowWidthThreshold from "../useWindowWidthThreshold"
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
const Header = styled(animated.div)`
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
  user-select: none;
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
  const isFirstRender = useRef(true)
  const isNarrowDevice = useWindowWidthThreshold(670)
  const [show, setShow] = useState(false)

  const narrowStyle = {
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: config.slow,
    reverse: !show,
    immediate: isFirstRender.current,
  }
  const wideStyle = {
    from: {
      x: align === "end" ? "100%" : "-100%",
      opacity: 0,
      scaleX: 0,
    },
    to: { x: "0%", opacity: 1, scaleX: 1 },
    config: config.slow,
    reverse: !show,
    immediate: isFirstRender.current,
  }

  const [style, unpress, press] = useClickAnimation(
    {
      boxShadow: `15px 15px 30px ${theme.primaryDarkShadow},
    -15px -15px 30px ${theme.primaryLightShadow}`,
    },
    {
      boxShadow: `inset 15px 15px 30px ${theme.primaryDarkShadow},
    inset -15px -15px 30px ${theme.primaryLightShadow}`,
    }
  )

  title === "Curious" &&
    console.log("isNarrowDevice=", isNarrowDevice, " show=", show)

  const narrowDeviceAnimation = useSpring(narrowStyle)
  const wideDeviceAnimation = useSpring(wideStyle)

  useEffect(() => {
    isFirstRender.current = false
  }, [])
  return (
    <Container theme={theme} className={className} align={align}>
      {title && (
        <Header
          theme={theme}
          align={align}
          style={style}
          onMouseDown={press}
          onMouseUp={unpress}
          onTouchStart={press}
          onTouchEnd={unpress}
          {...(isNarrowDevice ? {} : { onClick: () => setShow((p) => !p) })}
        >
          {title}
        </Header>
      )}
      {content && (
        <Waypoint
          onEnter={() => setShow(true)}
          bottomOffset="20%"
          onLeave={() => setShow(false)}
          topOffset="20%"
          fireOnRapidScroll={false}
        >
          <Body
            theme={theme}
            style={isNarrowDevice ? narrowDeviceAnimation : wideDeviceAnimation}
          >
            {content}
          </Body>
        </Waypoint>
      )}
    </Container>
  )
}
export default BulletPoint
