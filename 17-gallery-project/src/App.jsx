import React, { useEffect, useState } from 'react'
import axios from "axios"

const App = () => {

  const [userData, setUserData] = useState([])
  const [pageIndex, setPageIndex] = useState(1)
  const [loading, setLoading] = useState(true)

  const getData = async () => {
    try {
      let response = await axios.get(`https://picsum.photos/v2/list?page=${pageIndex}&limit=15`);
  
      setUserData(response.data)
    } catch(error) {
      console.error(error)
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, [pageIndex])

  return (
    <div className='p-5 flex flex-col gap-4 items-start'>
      <h1 className="text-5xl bg-red-500 font-semibold p-4 fixed">{pageIndex}</h1>
      {/* <button onClick={getData} className="px-5 py-2 my-4 bg-green-700 rounded-md cursor-pointer active:bg-green-800">Get Data</button> */}

      <div className="md:columns-2 lg:columns-3 gap-5">{
        (loading) ? <p>Loading data...</p> : (
          userData.map(obj => {
          return  <div key={obj.id} className='item text-xl font-medium mb-6 w-full flex flex-col gap-y-1'>
                    <a href={obj.url} target='_blank'>
                      <img className='w-full' src={obj.download_url} height='auto' loading='lazy' />
                      <p className='w-full'>{Number(obj.id) + 1}. {obj.author}</p>
                    </a>
                  </div>
        }))
      }</div>

      <div className="m-auto flex items-center gap-4">
        <button disabled={!(pageIndex > 1)} onClick={() => setPageIndex(prev => prev - 1)} className="px-4 py-2 bg-green-700 active:bg-green-800 disabled:bg-gray-600 disabled:text-white disabled:opacity-40 rounded-lg font-medium cursor-pointer">Prev</button>
        <p>Page {pageIndex}</p>
        <button disabled={!(pageIndex < 10)} onClick={() => setPageIndex(prev => prev + 1)} className="px-4 py-2 bg-green-700 active:bg-green-800 disabled:bg-gray-600 disabled:text-white disabled:opacity-40 rounded-lg font-medium cursor-pointer">Next</button>
      </div>
    </div>
  )
}

export default App