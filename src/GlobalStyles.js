import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
*,
::before,
::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`
