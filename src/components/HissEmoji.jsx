import React, { useEffect, useState } from 'react'
import { getAllEmoji } from '../services/musicService'
import { Link } from 'react-router-dom'

function hissemoji() {

  const [veri, setVeri] = useState([])

  useEffect(() => {
    const fetchData = async ()=>{
      const data = await getAllEmoji()
      setVeri(data)
    }
    fetchData()
  }, [])
  
  return (
    <div className='container mx-auto p-4 grid gap-16'>

    
    <div className='grid grid-cols-6 gap-24'>
      {
        veri && veri.map(result =>(
          <Link to={result.duygu} className='w-32 rounded-full h-32 border-2 border-color1 flex justify-center flex-col items-center shadow-2xl hover:text-color1 hover:bg-gray-100' key={result.id}>
        <div className='text-7xl'>{result.emoji}</div>
       
      </Link>
        ))
      }
    </div> 
    </div>
  )
}

export default hissemoji
