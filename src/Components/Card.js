import styled from "styled-components"
import { ThemeContext } from "../themeContext"
import { useContext } from "react"

const Container = styled.div`
  display: flex;
  height: 250px;

  background-color: ${({ theme }) => theme.secondary};
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 1rem;
  box-shadow: 8px 8px 16px ${({ theme }) => theme.secondaryDarkShadow},
    -8px -8px 16px ${({ theme }) => theme.secondaryLightShadow};
`
const Header = styled.div`
  height: 100%;
  padding-left: 1rem;
  border-right: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;

  ${({ end }) => end && "order:2;"}
`
const Button = styled.div`
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.light};
  font-family: ${({ theme }) => theme.fontfamily2};
  /* letter-spacing: 0.15em; */
  margin: 0.5em 0;
  text-align: center;
  width: 100%;
  box-shadow: 8px 8px 16px 0px ${({ theme }) => theme.secondaryDarkShadow};

  padding: 1rem;
  border-radius: 10px;
`
const Body = styled.div`
  position: relative;
  padding: 1rem;
  flex-grow: 1;
  & div {
    font-size: 1.2rem;
    position: absolute;
    padding: 1rem;
    bottom: 0;
    ${({ end }) => (end ? "left:0;" : "right:0;")}
    border-radius: 5px;
    background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.light};
    font-family: ${({ theme }) => theme.fontfamily1};
    letter-spacing: 0.15em;
  }
`
const Preview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  border-radius: 5px;
`

const Card = ({ title, className, preview, end }) => {
  const { theme } = useContext(ThemeContext)
  return (
    <Container theme={theme} className={className}>
      <Header end={end}>
        <Button theme={theme}>Preview</Button>
        <Button theme={theme}>Description</Button>
        <Button theme={theme}>Code</Button>
      </Header>

      <Body theme={theme} end={end}>
        <Preview src={preview} alt={title} />
        <div>{title}</div>
      </Body>
    </Container>
  )
}
export default Card
