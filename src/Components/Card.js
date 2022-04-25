import styled from "styled-components"
import { ThemeContext } from "../themeContext"
import { useContext, useRef, useState, useEffect } from "react"
import { ReactComponent as ExtLink } from "../assets/external-link.svg"
import Button from "./Button"
import { useTransition, animated } from "@react-spring/web"

const Container = styled.div`
  display: flex;
  height: 250px;
  padding: 1rem;
  position: relative;
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 1rem;
  box-shadow: 8px 8px 16px ${({ theme }) => theme.secondaryDarkShadow},
    -8px -8px 16px ${({ theme }) => theme.secondaryLightShadow};
`
const Header = styled.div`
  height: 100%;
  /* padding-left: 1rem; */
  border-right: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;

  ${({ align }) => align === "end" && "order:2;"}
`
const Body = styled.div`
  position: relative;
  /* padding: 1rem; */
  flex-grow: 1;
  ${({ align }) =>
    align === "end" ? "margin-right:1rem;" : "margin-left:1rem;"}
`
const Title = styled.div`
  font-size: 1.2rem;
  position: absolute;
  padding: 1rem;
  bottom: 0;

  ${({ align }) => (align === "end" ? "left:0;" : "right:0;")}
  border-radius: 5px;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.light};
  font-family: ${({ theme }) => theme.fontfamily1};
  letter-spacing: 0.15em;
  cursor: pointer;
  text-decoration: none;
  z-index: 5;
  & span,
  svg {
    vertical-align: middle;
  }
`
const Preview = styled(animated.a)`
  border-radius: 5px;
  height: 100%;
  display: inline-block;
  overflow: hidden;
  cursor: pointer;
  & img {
    width: 100%;
  }
`
const Description = styled(animated.div)`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.light};
  color: ${({ theme }) => theme.primary};
  padding: 1em;
  border-radius: 5px;
`
const PREVIEW = "Preview"
const DESC = "Description"

const Card = ({
  title,
  className,
  preview,
  align,
  description,
  codeLink,
  siteLink,
}) => {
  const { theme } = useContext(ThemeContext)
  const [section, setSection] = useState(PREVIEW)
  const firstRender = useRef(true)

  const transitions = useTransition(section, {
    from: {
      position: "absolute",
      opacity: 0,
      y: section === PREVIEW ? -218 : 218,
    },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0, y: section === PREVIEW ? 218 : -218 },
    immediate: firstRender.current,
  })

  useEffect(() => {
    firstRender.current = false
  }, [])
  title === "Quiz Time" && console.log("rendered")
  return (
    <Container theme={theme} className={className}>
      <Title
        align={align}
        theme={theme}
        as="a"
        href={siteLink}
        target="_blank"
        rel="noreferrer noopener"
      >
        <span>{title}</span>
        <ExtLink height="16" width="16" fill={theme.light} />
      </Title>
      <Header align={align}>
        <Button
          onClick={() => setSection(PREVIEW)}
          active={section === PREVIEW}
        >
          Preview
        </Button>
        <Button onClick={() => setSection(DESC)} active={section === DESC}>
          Description
        </Button>
        <Button
          as="a"
          href={codeLink}
          target="_blank"
          rel="noreferrer noopener"
        >
          <span>Code </span>
          <ExtLink height="16" width="16" fill={theme.light} />
        </Button>
      </Header>

      <Body theme={theme} align={align}>
        {transitions((style, section) =>
          section === PREVIEW ? (
            <Preview
              href={siteLink}
              target="_blank"
              rel="noreferrer noopener"
              style={style}
            >
              <img src={preview} alt={title} />
            </Preview>
          ) : (
            <Description theme={theme} style={style}>
              <div>{description}</div>
            </Description>
          )
        )}
      </Body>
    </Container>
  )
}
export default Card
