import styled from "styled-components"
import { ThemeContext } from "../themeContext"
import { useContext, useState } from "react"
import { ReactComponent as ExtLink } from "../assets/external-link.svg"
import Button from "./Button"

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
  /* position: relative; */
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
  & span,
  svg {
    vertical-align: middle;
  }
`
const Preview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  border-radius: 5px;
  cursor: pointer;
`
const Description = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.light};
  color: ${({ theme }) => theme.primary};
  padding: 1em;
  border-radius: 5px;
`

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
  const [section, setSection] = useState(1)

  const switchSection = (e) => {
    setSection(parseInt(e.target.id))
  }

  return (
    <Container theme={theme} className={className}>
      <Header align={align}>
        <Button onClick={switchSection} id={1} active={section === 1}>
          Preview
        </Button>
        <Button onClick={switchSection} id={2} active={section === 2}>
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
        {section === 1 && (
          <a href={siteLink} target="_blank" rel="noreferrer noopener">
            <Preview src={preview} alt={title} />
          </a>
        )}
        {section === 2 && (
          <Description theme={theme}>
            <div>{description}</div>
          </Description>
        )}
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
      </Body>
    </Container>
  )
}
export default Card
