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
        <Card title="E-Kart" preview={ReactEkartImg} />
        <Card title="Quiz Time" preview={QuizTimeImg} />
        <Card title="E-Kart" preview={EkartImg} />
      </Grid>
    </Container>
  )
}
export default Projects
