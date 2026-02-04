import React from 'react'
import { useState } from 'react';

const App = () => {

  const [value, setValue] = useState('')

  function handleOnChange(e) {
    setValue(e.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted by", value)

    setValue('');
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className='container'>
      <input 
        type="text"
        placeholder='Enter your name'
        name='Name'
        autoComplete="on"
        value={value}
        onChange={(event) => handleOnChange(event)}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default App