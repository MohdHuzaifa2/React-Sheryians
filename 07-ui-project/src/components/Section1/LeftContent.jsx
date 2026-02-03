import React from 'react'
import { ArrowUpRight } from "lucide-react"

const LeftContent = () => {
    return (
        <div className='w-1/3 flex flex-col justify-between'>
            <div className='w-full flex flex-col gap-4 p-4'>
                <h1 className='font-semibold text-5xl tracking-tighter leading-none'>Prospective customer segmentation</h1>
                <p className='text-gray-600 font-medium tracking-tight text-balance'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut sit voluptas nihil magnam veniam eos rem sunt cupiditate neque non.</p>
            </div>
            <div className='mt-24'>
                <ArrowUpRight size={96} />
            </div>
        </div>
    )
}

export default LeftContent