import Card from "../Components/Card"
import styled from "styled-components"
import EkartImg from "../assets/Screenshot-E-cart.png"
import ReactEkartImg from "../assets/Screenshot-React-Ekart.png"
import QuizTimeImg from "../assets/Screenshot-Quiz-App.png"
import { ThemeContext } from "../themeContext"
import { useContext } from "react"
import SectionTitle from "../Components/SectionTitle"

const Container = styled.div`
  display: grid;
  grid-template-rows: min-content;
  background-color: ${({ theme }) => theme.secondary};
  min-height: 100vh;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(400px, 100vw), 1fr));
  align-items: center;
`

const Projects = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <Container theme={theme}>
      <SectionTitle theme={theme} secondary>
        Projects
      </SectionTitle>
      <Grid>
        <Card
          title="E-Kart"
          preview={ReactEkartImg}
          description="Mock-up of FlipKart built using React, react-bootstrap"
          codeLink="https://github.com/RHOOPH/E-kart"
          siteLink="https://rhooph.github.io/E-kart"
        />
        <Card
          title="Quiz Time"
          preview={QuizTimeImg}
          description="App that tests your knowledge about variety of topics through Questionair"
          codeLink="https://github.com/RHOOPH/quiztime"
          siteLink="https://rhooph.github.io/quiztime"
        />
        <Card
          title="E-Kart"
          preview={EkartImg}
          description="Mock-up of FlipKart built using bootstrap"
          codeLink="https://github.com/RHOOPH/CredenceMind"
          siteLink="https://rhooph.github.io/CredenceMind"
        />
      </Grid>
    </Container>
  )
}
export default Projects
