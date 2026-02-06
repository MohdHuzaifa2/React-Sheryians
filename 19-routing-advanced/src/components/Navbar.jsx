import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='py-4 px-8 bg-cyan-800 flex items-center gap-4 justify-between'>
        <h2 className="font-semibold text-xl">Cosmic.supply</h2>
        <div className="flex gap-8 items-center">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/product">Product</Link>
        </div>
    </div>
  )
}

export default Navbar