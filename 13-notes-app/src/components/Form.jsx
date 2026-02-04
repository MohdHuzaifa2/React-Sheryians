import React, { useState } from 'react'

const Form = ({ func }) => {

    const [heading, setHeading] = useState("")
    const [description, setDesc] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        if (heading != '' && description != '') {
            func(prev => {
                return [...prev, {heading: heading, description: description}]
            })
        } else {
            alert("Please fill out the fields")
        }
        setHeading('')
        setDesc('')
    }

    return (
        <form onSubmit={handleSubmit} className='w-auto shrink-0 flex items-start flex-col gap-4 p-8 max-lg:w-full'>
            <input
                type="text"
                placeholder='Enter Notes Heading'
                name='Notes Heading'
                value={heading}
                onChange={(e) => setHeading(e.target.value)}
                required
                className='text-4xl font-semibold outline-0 border-0 py-3 w-full block'
            />

            <textarea
                placeholder='Write your notes here...'
                rows={5}
                name='Notes description'
                value={description}
                onChange={(e) => setDesc(e.target.value)}
                required
                className='text-base w-full outline-0 border-0 resize-y '
            ></textarea>

            <button
                type="submit"
                className='px-4 py-2 bg-zinc-700 active:bg-zinc-800 w-full rounded-lg cursor-pointer'
            >Save notes</button>
        </form>
    )
}

export default Form