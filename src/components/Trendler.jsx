import React, { useEffect, useState } from 'react'
import { getTrend } from '../services/musicService'
import { FaHeadphones } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Trendler = () => {

  const [veri, setVeri] = useState([])

  useEffect(() => {
    const fetchData = async ()=>{
      const data = await getTrend()
      setVeri(data)
    }

    fetchData()
  }, [])
  
  return (
    <div id='trendler' className='container mx-auto p-2 grid gap-16'>
      <div className='grid gap-5'>
        <div className='font-serif mr-2 ml-2 text-gray-600'>
              <div className='flex justify-between items-center mb-2 text-serif '>
            <h1 className='mr-2 ml-2'>#</h1>
            <h1 className='mr-2 ml-2'>Şarkı</h1>
            <h1 className='mr-2 ml-2'>Sanatçı</h1>
            <h1 className='mr-2 ml-2'>Duygu</h1>
            <h1 className='mr-2 ml-2'>Dinle</h1>
          </div>
          <hr/>
          {
            veri && veri.map(data=>(
          <div className='flex justify-between items-center text-center mb-4 mt-4 text-serif hover:bg-color1 hover:text-white '>
            <h1 className='mr-2 ml-2'>1</h1>
            <h1 className='mr-2 ml-2'>{data.muzik}</h1>
            <h1 className='mr-2 ml-2'>{data.sanatci}</h1>
            <h1 className='mr-2 ml-2'>{data.duygu}</h1>
            <h1 className='mr-2 ml-2'><Link to={data.muzik_url} target='blank'><FaHeadphones size={15}/></Link></h1>
          </div>
            ))
          }
          </div>
        </div>
      
    </div>
  )
}

export default Trendler
