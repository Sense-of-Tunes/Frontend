import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  
  return (
    <div className='bg-[#4D1354] '>
      {/* <div className='container flex justify-between items-center'>
        <Link to={"/Guide"} className='text-2xl font-serif text-white mr-6 ml-32 mt-4'> Sense of Tunes</Link>
      </div> */}
      <div className='font-serif container mx-auto p-4 grid grid-cols-4 gap-10'>
          <div>
          <div className='text-white text-xl'>Nasıl Kullanılır?
            <div className='text-slate-400 grid grid-rows-3 mt-1 ml-3'>
              <Link to="/hissemojikullanimi">HissEmoji</Link>
              <Link to="/benisasirtkullanimi">Beni Şaşırt</Link>
              <Link to="/trendlerkullanimi">Trendler</Link>
            </div>  
          </div>
        </div>
        <div className='text-white text-xl'>
          <Link to="/siksorulansorular">Sık Sorulan Sorular</Link>
        </div>
        <div className='text-white text-xl'>Kaynaklar
          <div className='text-slate-400 grid grid-rows-3 mt-1 ml-3'>
            <Link to="/gizlilik">Gizlilik ve Politikaları</Link>
            <Link to="/hukumler">Hükümler ve Koşullar</Link>
          </div>
        </div>
        <div className='text-white text-xl'>
          <Link to="/senseoftuneshakkinda">Sense of Tunes Hakkında</Link>
        </div>    
      </div>
      <h4 className='font-serif container mx-auto p-2 text-right text-xl text-[#979393]'>Telif Hakkı © 2024 Sense of Tunes Inc. Tüm hakları saklıdır.</h4>
    </div>
  )
}

export default Footer

