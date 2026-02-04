import React from 'react'

const App = () => {

  const user = {
    name: "Mohammad Huzaifa",
    age: 18,
    city: "Raebareli",
  }

  localStorage.setItem("user", JSON.stringify(user));

  const getUser = localStorage.getItem("user");

  console.log(JSON.parse(getUser));

  return (
    <div>App</div>
  )
}

export default App