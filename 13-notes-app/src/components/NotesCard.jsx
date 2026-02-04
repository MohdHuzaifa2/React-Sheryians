import React from 'react'

const NotesCard = ({ heading, description, data,  setData, index }) => {

    function removeNote(i) {
        let copy = [...data];
        copy.splice(i,1)
        setData(copy)
    }

    return (
        <div className="w-full bg-zinc-800 rounded-lg p-7 flex flex-col items-start gap-y-2">
            <h2 className='text-2xl font-semibold '>{heading}</h2>
            <p>{description}</p>
            <button onClick={() => removeNote(index)} className="text-[#a33333] underline underline-offset-2 text-sm cursor-pointer mt-2 ml-auto">Remove</button>
        </div>
    )
}

export default NotesCard