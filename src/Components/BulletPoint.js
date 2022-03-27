import styled from "styled-components"
import { ThemeContext } from "../themeContext"
import { useContext } from "react"

const Container = styled.div`
  display: flex;

  align-items: center;
  min-height: 175px;
  /* background-color: ${({ theme }) => theme.accent1}; */
  border-radius: 20px;
  /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
  margin: 1rem;
  /* overflow: hidden; */
  ${({ end }) => end && "align-self:flex-end;"}
`
const Header = styled.div`
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.light};
  font-family: ${({ theme }) => theme.fontfamily1};
  letter-spacing: 0.15em;
  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 15px 15px 30px ${({ theme }) => theme.primaryDarkShadow},
    -15px -15px 30px ${({ theme }) => theme.primaryLightShadow};
  padding: 1rem;
  aspect-ratio: 1/1;
  min-width: 180px;
  border-radius: 50%;
  ${({ end }) => end && "order:2;"}
`
const Body = styled.div`
  padding: 0 2em;
  color: ${({ theme }) => theme.accent2};
  border-radius: 0 20px 20px 0;
  max-width: 35ch;
  font-weight: 500;
  line-height: 1.4;
`

const BulletPoint = ({ title, content, className, end }) => {
  const { theme } = useContext(ThemeContext)
  return (
    <Container theme={theme} className={className} end={end}>
      {title && (
        <Header theme={theme} end={end}>
          {title}
        </Header>
      )}
      {content && <Body theme={theme}>{content}</Body>}
    </Container>
  )
}
export default BulletPoint