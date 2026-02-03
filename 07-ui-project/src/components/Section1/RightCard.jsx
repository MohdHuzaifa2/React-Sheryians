import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = ({ serial, img, intro, color, tag }) => {
  return (
    <div className='bg-blue-400 grow rounded-4xl relative overflow-hidden'>
        <img className='w-full h-full object-cover' src={img} alt="" />

        <RightCardContent
            serial={serial+1}
            intro={intro}
            color={color}
            tag={tag}
        />
    </div>
  )
}

export default RightCard