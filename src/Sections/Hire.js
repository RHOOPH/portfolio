import styled from "styled-components"
import ContactCard from "../Components/ContactCard"
import { ThemeContext } from "../themeContext"
import { useContext } from "react"

const Container = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.primary};
`
const Hire = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <Container theme={theme}>
      <ContactCard theme={theme} />
    </Container>
  )
}
export default Hire
