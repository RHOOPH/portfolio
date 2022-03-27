import Card from "../Components/Card"
import styled from "styled-components"
import EkartImg from "../assets/Screenshot-E-cart.png"
import ReactEkartImg from "../assets/Screenshot-React-Ekart.png"
import QuizTimeImg from "../assets/Screenshot-Quiz-App.png"
import { ThemeContext } from "../themeContext"
import { useContext } from "react"
const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  background-color: ${({ theme }) => theme.secondary};
  min-height: 100vh;
  align-items: center;
`

const Projects = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <Container theme={theme}>
      <Card title="E-Kart" preview={ReactEkartImg} />
      <Card title="Quiz Time" preview={QuizTimeImg} />
      <Card title="E-Kart" preview={EkartImg} />
    </Container>
  )
}
export default Projects
