import React from 'react'
import { useState, useEffect } from 'react'
import { getMusicByUser } from '../services/musicService'
import { Link } from 'react-router-dom';
import { IoHeadset } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";

function beniSasirt() {

  const [veri, setVeri] = useState([])
  const [yazi, setYazi] = useState("")
  const fetchData = async () => {
    const data = await getMusicByUser(yazi)
    setVeri(data)
  }

  return (
    <div>
      <div className='flex flex-col justify-center items-center gap-2 mt-20'>
        <div className='relative'>
          <input type='text' value={yazi} onChange={(e) => { setYazi(e.target.value) }} className='h-10 w-[700px] outline-none rounded-full p-2 bg-gray-200 flex placeholder:text-center text-center' placeholder='Bugün nasıl hissediyorsun?' />
          <button className='absolute top-2.5 right-4' type='submit' onClick={() => { fetchData() }}><IoSearch size={20}/></button>
        </div>
        <div>Hissedilen Duygular</div>
        <div className='font-bold'>Bu duygular Sense of Tunes'da şu anda global trendler oluşturuyolar.</div>
        <div className='grid grid-cols-4 gap-16'>
          {
            veri && veri.map(music => (
              <div key={music.id} className='mt-4 p-3 border border-gray-200 w-[225px] rounded-xl shadow-xl flex flex-col items-center gap-2 '>
                <img alt='deneme' className=' rounded-lg' src={music.resim_url} />
                <div className='flex text-center'>{music.muzik}</div>
                <div className=' font-light text-gray-400'>{music.sanatci}</div>
                <Link to={music.muzik_url} target='blank' className='flex items-end'><IoHeadset size={25} /></Link>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default beniSasirt
