import React from 'react'
import Navbar from './Navbar'
import Section1Content from './Section1Content'

const Section1 = ({ users }) => {
  return (
    <div className='h-screen w-full px-12 py-4'>
        <Navbar />
        <Section1Content users={users} />
    </div>
  )
}

export default Section1