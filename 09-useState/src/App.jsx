import React, { useState } from 'react'

const App = () => {

  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <h1>{count}</h1>
      <div className="buttons">
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
        <button onClick={() => setCount(count + 5)}>Increase by 5</button>
      </div>
    </div>
  )
}

export default App