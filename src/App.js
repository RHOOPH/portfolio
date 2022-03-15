import styled from "styled-components"
import Hero from "./Hero"
import { ThemeContext } from "./themeContext"
import { useContext } from "react"
import Overlay from "./Overlay"

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.background1};
`

function App() {
  const { theme } = useContext(ThemeContext)
  return (
    <Container theme={theme}>
      <Overlay />
      <Hero />
    </Container>
  )
}

export default App
