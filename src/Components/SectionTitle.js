import styled from "styled-components"

const Title = styled.h1`
  text-align: center;
  font-family: ${({ theme }) => theme.fontfamily1};
  color: ${({ theme }) => theme.light};
  border-radius: 10px;
  padding: 1rem;
  letter-spacing: 0.15em;
  margin: 0 0 1rem 0;
  box-shadow: 8px 8px 16px
    ${({ theme, secondary }) =>
      secondary ? theme.secondaryLightShadow : theme.primaryLightShadow};
`

const SectionTitle = ({ theme, children, secondary }) => {
  return (
    <Title theme={theme} secondary={secondary}>
      {children}
    </Title>
  )
}
export default SectionTitle
