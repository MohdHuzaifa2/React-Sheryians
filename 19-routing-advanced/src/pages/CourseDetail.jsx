import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {

    const params = useParams();

  return (
    <div className='grow flex flex-col items-center'>
        <h1 className='my-auto text-7xl font-semibold capitalize'>{params.courseID} Course Detail page</h1>
    </div>
  )
}

export default CourseDetail