import React, { useState, useEffect } from 'react';
import { getMusicByCategory } from '../sevices/musicService';
import { IoHeadset } from "react-icons/io5"
import { Link } from 'react-router-dom';

function Mutlu() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getMusicByCategory();
        console.log(result);
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
        <div className='grid grid-cols-4 gap-16'>
      {data.map((music) => (
        <div key={music.id} className='p-3 border border-gray-200 w-[225px] rounded-xl shadow-xl şp-5 flex flex-col items-center gap-2 '>
            <img alt='deneme' className=' rounded-lg' src={music.resim_url}/>
          <div className='flex text-center'>{music.muzik}</div>
          <div className=' font-light text-gray-400'>{music.sanatci}</div>
          <Link to={music.muzik_url} target='blank' className='flex items-end'><IoHeadset size={25}/></Link>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Mutlu;
