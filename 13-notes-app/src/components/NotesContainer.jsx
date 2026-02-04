import React from 'react'
import NotesCard from './NotesCard'

const NotesContainer = ({ data, setData }) => {
    return (
        <div className="grow flex flex-col gap-6 py-8 max-lg:p-8">
            <h2 className="text-4xl font-semibold pt-3">Your notes</h2>
            <div className='flex flex-col gap-6'>
                {(data.length > 0) ? data.map((obj, index) => <NotesCard key={index} setData={setData} index={index} heading={obj.heading} description={obj.description} />) : <p className='opacity-60'>Your notes will appear here...</p>}
            </div>
        </div>
    )
}

export default NotesContainer