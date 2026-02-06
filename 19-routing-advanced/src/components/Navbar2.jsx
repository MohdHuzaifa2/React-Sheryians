import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
    
    let navigate = useNavigate();

  return (
    <div className="flex px-4 py-2 gap-2 items-center justify-center">
        <button 
          onClick={() => {
            navigate('/')
          }}
          className="px-4 py-2 bg-red-600 active:bg-red-700 active:scale-95 cursor-pointer rounded-lg">
          Return to Home page
        </button>
        <button 
          onClick={() => {
            navigate(-1)
          }}
          className="px-4 py-2 bg-red-600 active:bg-red-700 active:scale-95 cursor-pointer rounded-lg">
          Back
        </button>
        <button 
          onClick={() => {
            navigate(+1)
          }}
          className="px-4 py-2 bg-red-600 active:bg-red-700 active:scale-95 cursor-pointer rounded-lg">
          Next
        </button>
    </div>
  )
}

export default Navbar2