import React from 'react'
import { Bookmark } from "lucide-react"
import "../App.css"

const Card = ({img, company, time, post, tag1, tag2, pay, location}) => {
  return (
    <div className="card">
        <div className="top">
            <img src={img} alt="" className="profile" />
            <button className="save">
                <span>Save</span>
                <Bookmark size={14} />
            </button>
        </div>
        <div className="center">
            <h3>{company} &nbsp;<span>{time}</span></h3>
            <h2>{post}</h2>
            <div className="pills">
                <span className="pill">{tag1}</span>
                <span className="pill">{tag2}</span>
            </div>
        </div>
        <div className="bottom">
            <div className="job">
                <span className='salary'>{`$${pay}/hr`}</span>
                <span className='location'>{location}</span>
            </div>
            <button className="apply">Apply Now</button>
        </div>
    </div>
  )
}

export default Card