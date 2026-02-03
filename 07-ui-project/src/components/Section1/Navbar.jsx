import React from 'react'
import { CornerDownRight } from "lucide-react"

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-6'>
        <div className="px-6 py-2 uppercase bg-zinc-950 text-white rounded-full font-mono">Target Audience</div>
        <a href="#" className='font-mono tracking-wide uppercase flex gap-1 items-center'><CornerDownRight size={16} /> Digital Banking Platform</a>
    </div>
  )
}

export default Navbar