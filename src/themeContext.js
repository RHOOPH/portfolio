import { createContext, useState } from "react"
const ThemeContext = createContext()
const defaultTheme = {
  primary: "#4067A8",
  accent1: "#86585E",
  accent2: "#81A3B7",
  background1: "#FAFAFA",
  background2: "#1B2037",
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
