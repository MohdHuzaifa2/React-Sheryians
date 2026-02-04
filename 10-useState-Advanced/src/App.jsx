import React, { useState } from 'react'

const App = () => {

  const [obj, setObj] = useState({user: "Sarthak", age: 20})

  function changeObj() {
    setObj((prev) => {
      return {...prev, user: "Huzaifa", age: 19}
    })  
  }

  return (
    <div className='container'>
      <h1>{obj.user}, {obj.age}</h1>
      <div className="buttons">
        <button onClick={changeObj}>Click</button>
      </div>
    </div>
  )
}

export default App