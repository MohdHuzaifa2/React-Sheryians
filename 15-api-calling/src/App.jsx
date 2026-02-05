import React, { useState } from 'react'
import axios from "axios"

const App = () => {

  const [data, setData] = useState([])

  // function getData() {
  //   let response = fetch('https://jsonplaceholder.typicode.com/users');

  //   let res = response.then(response => response.json()).then(data => console.log(data)).catch(err => console.log(err))

  //   console.log(res)
  // }


  // const getData = async () => {
  //   let response = await fetch('https://jsonplaceholder.typicode.com/users');
  //   let data = await response.json();

  //   console.log(data)
  // }

  const getData = async () => {
    let response = await axios.get('https://picsum.photos/v2/list');

    setData(response.data)
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      {data.map((obj, index) => {
        return <h1 key={index}>{index}.    {obj.author}</h1>
      })}
    </div>
  )
}

export default App