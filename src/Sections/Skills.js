import styled from "styled-components"
import CircularMenu from "../Components/CircularMenu"
import { ThemeContext } from "../themeContext"
import { useContext } from "react"
import { ReactComponent as VSCode } from "../assets/vscode.svg"
import { ReactComponent as Firefox } from "../assets/firefox-developer-edition.svg"
import { ReactComponent as CRA } from "../assets/create-react-app.svg"
import { ReactComponent as Github } from "../assets/github.svg"
import { ReactComponent as Yarn } from "../assets/yarn.svg"
import { ReactComponent as Figma } from "../assets/figma.svg"
import { ReactComponent as Bootstrap } from "../assets/bootstrap.svg"
import { ReactComponent as HTML5 } from "../assets/html5.svg"
import { ReactComponent as CSS3 } from "../assets/css3.svg"
import { ReactComponent as JS } from "../assets/js.svg"
import { ReactComponent as ReactLogo } from "../assets/react.svg"
import { ReactComponent as ReactRouter } from "../assets/react-router.svg"
import SectionTitle from "../Components/SectionTitle"

const Container = styled.div`
  display: grid;
  grid-template-rows: min-content;
  background-color: ${({ theme }) => theme.secondary};
  min-height: 100vh;
  & > div {
    position: relative;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(350px, 100vw), 1fr));
    align-items: center;
    justify-items: center;
    grid-gap: 50px;
  }
`
const Skills = () => {
  const { theme } = useContext(ThemeContext)
  const techArray = [HTML5, CSS3, JS, ReactLogo, ReactRouter, Bootstrap]
  const toolsArray = [VSCode, Firefox, CRA, Github, Yarn, Figma]
  return (
    <Container theme={theme}>
      <SectionTitle theme={theme} secondary>
        Skills
      </SectionTitle>
      <div>
        <CircularMenu icons={techArray} title="TechStack" diameter={350} />
        <CircularMenu icons={toolsArray} title="Tools" diameter={350} />
      </div>
    </Container>
  )
}
export default Skills
