import React from 'react'
import Navbar from './components/Navbar'
import { useContext } from 'react'
import { ThemeDataContext } from './context/ThemeContext'

const App = () => {

  const [theme, setTheme] = useContext(ThemeDataContext);

  return (
    <div>
      <Navbar />

      <button onClick={() => setTheme(prev => (prev == "light") ? "dark" : "light")}>Change theme</button>
    </div>
  )
}

export default App