import styled from "styled-components"

const Card = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.light};
  border-radius: 20px;
  box-shadow: 15px 15px 30px ${({ theme }) => theme.primaryDarkShadow},
    -15px -15px 30px ${({ theme }) => theme.primaryLightShadow};
  & > div:first-child {
    padding: 15px;
  }
  & h2 {
    margin: 0;
    color: ${({ theme }) => theme.light};
    text-align: center;
  }
  & h5 {
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.accent2};
  }
  & span {
    color: ${({ theme }) => theme.light};
  }
`
const Info = styled.div`
  background: ${({ theme }) => theme.secondary};

  height: 100%;
  width: 100%;
  box-shadow: 8px 8px 16px 0px ${({ theme }) => theme.primaryDarkShadow};
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  padding: 2em;
  border-radius: 15px;

  & > div {
    display: flex;
    flex-flow: column;
  }
`
const Contact = styled.div`
  padding: 2em;
  color: ${({ theme }) => theme.light};
  border-radius: 0 20px 20px 0;

  & > div {
    padding-left: 2em;
  }

  & span {
    color: ${({ theme }) => theme.light};
  }
  & h4 {
    color: ${({ theme }) => theme.accent1};
  }
`

const ContactCard = ({ theme }) => {
  return (
    <Card theme={theme}>
      <div>
        <Info theme={theme}>
          <h2>Quick Info</h2>
          <div>
            <h5>Preferred City:</h5>
            <span>Bangalore,KA</span>
            <h5>Alternate Cities:</h5>
            <span>Chennai,TN</span>
            <span>Hyderabad,AP</span>
          </div>
        </Info>
      </div>

      <Contact theme={theme}>
        <h2>Contact Me</h2>
        <h4>I'm available for an immediate start</h4>
        <div>
          <h5>E-mail:</h5>
          <span>kowshik_achar@yahoo.com</span>
          <h5>Mobile:</h5>
          <span>+91 9945050876</span>
        </div>
      </Contact>
    </Card>
  )
}
export default ContactCard
