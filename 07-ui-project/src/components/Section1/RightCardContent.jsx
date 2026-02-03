import React from 'react'
import { ArrowRight } from "lucide-react"

const RightCardContent = ({ serial, intro, color, tag }) => {
    return (
        <div className="absolute inset-0 bg-[#0000002f] p-6 flex flex-col justify-between items-start">
            <span className='px-4 py-3 rounded-full font-mono leading-none bg-white'>{serial}</span>
            <div className="flex flex-col gap-5 items-start">
                <p className='text-white tracking-wide leading-normal'>{intro}</p>
                <button className="flex ">
                    <span className={`px-8 py-2 rounded-full text-white ${color} font-medium`}>{tag}</span>
                    <span className={`h-full aspect-square rounded-full text-white ${color} grid place-items-center`}><ArrowRight className='inline-block' size={20} /></span>
                </button>
            </div>
        </div>
    )
}

export default RightCardContent