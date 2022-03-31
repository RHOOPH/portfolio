import styled from "styled-components"
import { ThemeContext } from "../themeContext"
import { useContext } from "react"

const Container = styled.div`
  display: flex;

  align-items: center;

  margin: 1rem;

  @media (min-width: 670px) {
    ${({ end }) => end && "align-self:flex-end;"}
  }
  @media (max-width: 669px) {
    flex-direction: column;
    margin: 2rem 0;
  }
`
const Header = styled.div`
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.light};
  font-family: ${({ theme }) => theme.fontfamily1};
  letter-spacing: 0.15em;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  box-shadow: 15px 15px 30px ${({ theme }) => theme.primaryDarkShadow},
    -15px -15px 30px ${({ theme }) => theme.primaryLightShadow};
  padding: 1rem;
  min-width: 180px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  @media (min-width: 670px) {
    ${({ end }) => end && "order:2;"}
  }
  @media (max-width: 669px) {
    margin-bottom: 1rem;
    /* aspect ratio not working in chrome when width is not set (only when flex-direction changes to column)  */
    /* width: max-content; */
  }
`
const Body = styled.div`
  padding: 0 2em;
  color: ${({ theme }) => theme.accent2};
  border-radius: 0 20px 20px 0;
  max-width: 35ch;
  font-weight: 500;
  line-height: 1.4;
  @media (max-width: 669px) {
    text-align: justify;
  }
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
