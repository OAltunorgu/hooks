import React, { useState, useContext } from 'react'

export const lightTheme = {
  type: "light",
  body: "#E2E2E2",
  text: "#363537",
  toggleBorder: "#FFF",
  gradient: "linear-gradient(#39598A, #79D7ED)",
};

export const darkTheme = {
  type: "dark",
  body: "#363537",
  text: "#FAFAFA",
  toggleBorder: "#6B8096",
  gradient: "linear-gradient(#091236, #1E215D)",
};

const ThemeContect = React.createContext(null);

function App() {

  const [theme, setTheme] = useState(darkTheme);

  const handleTheme = () => {
    if (theme.type === "dark") {
      setTheme(lightTheme);
    } else {
      setTheme(darkTheme);
    }
  }

  return (
    <div className="App">
      <button onClick={() => handleTheme()}>{theme.type === "dark" ? "Light Theme" : "Dark Theme"}</button>

      <ThemeContect.Provider value={theme}>
        <Kare />
      </ThemeContect.Provider>
    </div>
  )
}

const Kare = () => {
  const theme = useContext(ThemeContect);
  return (
    <div style={{ background: `${theme.gradient}` }}> Temam: {theme.type}</div >
  )
}


export default App;