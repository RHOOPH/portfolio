import styled from "styled-components"
import BulletPoint from "../Components/BulletPoint"
import { ThemeContext } from "../themeContext"
import { useContext } from "react"

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.primary};
  padding: 5rem;
`

const About = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <Container theme={theme}>
      <BulletPoint
        title="An avid learner"
        content="Scrimba Coursera Udemy freecodecamp Youtube W3School, you name it, been there, done that."
      />
      <BulletPoint
        end
        title="Confident"
        content="It took me a long time to feel that way."
      />
      <BulletPoint
        title="Curious"
        content="New version? New library? New way of doing things? Oh! Hold me back."
      />
      <BulletPoint
        end
        title="Optimise"
        content={
          <div>
            <p>
              So this task takes an hour if I do it the dumb way🤔. Let me come
              up with an efficient way.
            </p>
            <p> ...one hour later... </p>
            <p>
              If I had just done it the dumb way, I could've finished by now.
              I'm an idiot.
            </p>
          </div>
        }
      />
      {/* <BulletPoint title="Help others to help yourself." /> */}
      <BulletPoint
        title="Introvert"
        content="Trust me, I'm working on it. One day this will go away."
      />
      <BulletPoint
        end
        title="What do I want the most?"
        content={
          <div>
            <p>Progress. Growth. Advancement.</p>
            <p> Yeah, I know, they're all the same, and that's the point.</p>
          </div>
        }
      />
      <BulletPoint
        title="What can I offer you?"
        content={
          <div>
            <p>Out of many things,</p>
            <p>Willingness to work together with the team,</p>
            <p>Willingness to provide and receive constructive criticism,</p>
            <p>
              Ability to understand the problem at hand and devise a proper
              solution.
            </p>
            <p>Ability to write comprehensible code.</p>
          </div>
        }
      />
    </Container>
  )
}
export default About
