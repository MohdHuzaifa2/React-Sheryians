import React from 'react'

const App = () => {

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted")
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className='container'>
      <input type="text" placeholder='Enter your name' name='Name' autoComplete="on" />
      <button type="submit">Submit</button>
    </form>
  )
}

export default App