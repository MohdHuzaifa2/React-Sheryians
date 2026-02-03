import React from 'react'
import Section1 from './components/Section1/Section1'

const App = () => {

  const users = [
    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis temporibus voluptas nesciunt reprehenderit aliquam voluptatem.",
      tag: "Satisfied",
      color: "bg-blue-600"
    },
    {
      img: "https://images.unsplash.com/photo-1582046990083-1ff477c566ba?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis temporibus voluptas nesciunt reprehenderit aliquam voluptatem.",
      tag: "Underserved",
      color: "bg-pink-600"
    },
    {
      img: "https://images.unsplash.com/photo-1690297216767-996fd7f15495?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis temporibus voluptas nesciunt reprehenderit aliquam voluptatem.",
      tag: "Underbanked",
      color: "bg-green-700"
    },
  ]

  return (
    <div>
      <Section1 users={users} />
    </div>
  )
}

export default App