import React, { useEffect, useState } from 'react';
import { getTrend } from '../services/musicService';
import { FaHeadphones } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Trendler = () => {
  const [veri, setVeri] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTrend();
      setVeri(data);
    };

    fetchData();
  }, []);

  return (
    <div id='trendler' className='container mx-auto p-2'>
      <table className='table-fixed w-full border-collapse'>
        <thead>
          <tr>
            <th className='w-1/12 px-4 py-2'>#</th>
            <th className='w-4/12 px-4 py-2'>Şarkı</th>
            <th className='w-3/12 px-4 py-2'>Sanatçı</th>
            <th className='w-2/12 px-4 py-2'>Duygu</th>
            <th className='w-2/12 px-4 py-2'>Dinle</th>
          </tr>
        </thead>
        <tbody>
          {veri &&
            veri.map((data, index) => (
              <tr key={data.id}>
                <td className='px-4 py-2 text-center'>{index + 1}</td>
                <td className='px-4 py-2 text-center'>{data.muzik}</td>
                <td className='px-4 py-2 text-center'>{data.sanatci}</td>
                <td className='px-4 py-2 text-center'>{data.duygu}</td>
                <td className='px-4 py-2 flex items-center justify-center'>
                  <Link to={data.muzik_url} target='_blank'>
                    <FaHeadphones className='mr-0' size={15} />
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Trendler;