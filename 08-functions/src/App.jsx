import React from 'react'

const App = () => {

  function inputChange(e) {
    console.log(e.target.value)
  }

  return (
    <div >
      <div onWheel={(e) => console.log(e.deltaY)} className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div>
  )
}

export default App  