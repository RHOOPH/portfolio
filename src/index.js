import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import GlobalStyles from "./GlobalStyles"
import { ThemeContextProvider } from "./themeContext"

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <GlobalStyles />
      <App />
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
