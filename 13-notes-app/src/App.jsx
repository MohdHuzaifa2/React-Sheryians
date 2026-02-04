import React, { useState } from 'react'
import NotesContainer from './components/NotesContainer'
import Form from './components/Form'

const App = () => {

  const [data, setData] = useState([
    {
      heading: "Heading pehli hai ye!",
      description: "Ye hai ek lamba sa description jo shayad tmhe psnd na aye qki main isme sirf bakchodi likh raha hu taki ye or lmba ho jaye..."
    },
  ])

  return (
    <div className="container m-auto flex items-start max-lg:flex-col gap-4">
      <Form func={setData} />  
      <NotesContainer data={data} setData={setData} />
    </div>
  )
}

export default App