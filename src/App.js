import styled from "styled-components"
import Hero from "./Hero"
import { ThemeContext } from "./themeContext"
import { useContext } from "react"
import Overlay from "./Overlay"
import { ReactComponent as VSCode } from "./assets/vscode.svg"
import { ReactComponent as Firefox } from "./assets/firefox-developer-edition.svg"
import { ReactComponent as CRA } from "./assets/create-react-app.svg"
import { ReactComponent as Github } from "./assets/github.svg"
import { ReactComponent as Yarn } from "./assets/yarn.svg"
import { ReactComponent as Figma } from "./assets/figma.svg"
import { ReactComponent as Bootstrap } from "./assets/bootstrap.svg"
import { ReactComponent as HTML5 } from "./assets/html5.svg"
import { ReactComponent as CSS3 } from "./assets/css3.svg"
import { ReactComponent as JS } from "./assets/js.svg"
import { ReactComponent as ReactLogo } from "./assets/react.svg"
import { ReactComponent as ReactRouter } from "./assets/react-router.svg"
import CircularMenu from "./CircularMenu"
const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background1};
`
const Home = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Skills = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`

function App() {
  const { theme } = useContext(ThemeContext)

  const techArray = [HTML5, CSS3, JS, ReactLogo, ReactRouter, Bootstrap]
  const toolsArray = [VSCode, Firefox, CRA, Github, Yarn, Figma]

  return (
    <>
      <Overlay />
      <Container theme={theme}>
        <Home>
          <Hero />
        </Home>
        <Skills>
          <CircularMenu icons={techArray} title="TechStack" diameter={20} />
          <CircularMenu icons={toolsArray} title="Tools" diameter={20} />
        </Skills>
      </Container>
    </>
  )
}

export default App
