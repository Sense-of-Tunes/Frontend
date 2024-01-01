import React from 'react'
import { useState,useEffect } from 'react'
import { getMusicByDuygu } from '../services/musicService'
import { Link } from 'react-router-dom';
import { IoHeadset } from "react-icons/io5";

function DuyguSayfasi({content}) {

  console.log(content);

  const [veri, setVeri] = useState([])

  useEffect(() => {
    const fetchData = async ()=>{
      const data = await getMusicByDuygu(content,20)
      setVeri(data)
    }
    fetchData()
  }, [])
  return (
    <div className='px-32'>
        <div className='grid grid-cols-4 gap-16'>
      {veri && veri.map((music) => (
        <div key={music.id} className='p-3 border border-gray-200 w-[225px] rounded-xl shadow-xl flex flex-col items-center gap-2 '>
            <img alt='deneme' className=' rounded-lg' src={music.resim_url}/>
          <div className='flex text-center'>{music.muzik}</div>
          <div className=' font-light text-gray-400'>{music.sanatci}</div>
          <Link to={music.muzik_url} target='blank' className='flex items-end'><IoHeadset size={25}/></Link>
        </div>
      ))}
      </div>
    </div>
  )
}

export default DuyguSayfasi
