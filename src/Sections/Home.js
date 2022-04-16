import styled from "styled-components"
import Hero from "../Components/Hero"
import { ThemeContext } from "../themeContext"
import { useContext } from "react"

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.primary};
  overflow: hidden;
`
const Home = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <Container theme={theme}>
      <Hero />
    </Container>
  )
}
export default Home
