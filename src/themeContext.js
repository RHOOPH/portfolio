import { createContext, useState } from "react"
const ThemeContext = createContext()
const defaultTheme = {
  accent1: "#4067A8",
  accent2: "#81A3B7",
  light: "#FAFAFA",
  primary: "#1B2037",
  primaryDarkShadow: "#121625",
  primaryLightShadow: "#242a49",
  secondary: "#1E3A45",
  secondaryDarkShadow: "#172d35",
  secondaryLightShadow: "#254755",
  fontfamily1: '"Righteous", cursive',
  fontfamily2: '"Inter",sans-serif',
}

const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState(defaultTheme)

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  )
}
export { ThemeContextProvider, ThemeContext }
