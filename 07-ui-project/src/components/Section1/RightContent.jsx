import React from 'react'
import RightCard from './RightCard'

const RightContent = ({ users }) => {
  return (
    <div className='py-4 flex gap-4 min-w-2/3 overflow-auto'>
      {users.map((user, index) => {
        return <RightCard
            key={index}
            serial={index}
            img={user.img}
            intro={user.intro}
            color={user.color}
            tag={user.tag}
        />
      })}
    </div>
  )
}

export default RightContent