import React from 'react'

const Card = (props) => {

    console.log(props);

  return (
    <div className="card">
        <img src={props.img} alt="" />
        <span className='title'>{props.user}, {props.age}</span>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <button>View profile</button>
    </div>
  )
}

export default Card