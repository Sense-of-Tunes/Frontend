import React, { useEffect, useState } from 'react'
import { getAllEmoji } from '../services/musicService'

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

    
    <div className='grid grid-cols-3 gap-24'>
      {
        veri && veri.map(result =>(
          <div className='w-64 h-40 border-2 border-color1 rounded-lg flex justify-center flex-col items-center shadow-2xl hover:text-color1 hover:bg-gray-100'>
        <div className='text-3xl'>{result.emoji}</div>
       
      </div>
        ))
      }
    </div> 
    </div>
  )
}

export default hissemoji
