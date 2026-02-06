import React from 'react'

const Navbar = ({ theme, setTheme }) => { 

  return (
    <div>
        <button onClick={() => setTheme(prev => (prev == "light") ? "dark" : "light")}>Change theme</button>
    </div>
  )
}

export default Navbar