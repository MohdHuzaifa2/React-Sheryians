import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Section1Content = ({ users }) => {
  return (
    <div className='py-8 flex gap-8 min-h-[90vh] max-w-full overflow-hidden'>
        <LeftContent />
        <RightContent users={users} />
    </div>
  )
}

export default Section1Content