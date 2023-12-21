import React from 'react'
import Logo from '../assets/logo.jpeg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='items-center mb-10'>
      <div className='container flex justify-between items-center'>
        <Link to={"/Guide"} className='text-2xl font-serif text-[#4D1354] mr-6 ml-6 mt-4'> Sense of Tunes</Link>
      </div>
      
      <div>
      <div className='container mx-auto items-center'>
      <Link to={"/Guide"}>
      <img src={Logo} alt='Logo' className='mt-2 mb-6 w-36 h-36 mx-auto'></img>
        </Link>
      </div>
      <div className='container mx-auto flex items-center justify-center space--4'>
        <Link to={"/"} className='text-2xl font-serif ml-2 mr-2 text-gray-400 hover:text-[#4D1354]'>Ana Sayfa</Link>
        <p className='text-2xl font-serif text-[#4D1354]'>|</p>
        <Link to={"/hissemoji"} className='text-2xl font-serif ml-2 mr-2 text-gray-400 hover:text-[#4D1354]'>HissEmoji</Link>
        <p className='text-2xl font-serif text-[#4D1354]'>|</p>
        <Link to={"/BeniSasirt"} className='text-2xl font-serif ml-2 mr-2 text-gray-400 hover:text-[#4D1354]'>Beni Şaşırt</Link>
        <p className='text-2xl font-serif text-[#4D1354]'>|</p>
        <Link to={"/Trendler"} className='text-2xl font-serif ml-2 mr-2 text-gray-400 hover:text-[#4D1354]'>Trendler</Link>
        <p className='text-2xl font-serif text-[#4D1354]'>|</p>
        <Link to={"/Hakkimizda"} className='text-2xl font-serif ml-2 mr-2 text-gray-400 hover:text-[#4D1354]'>Hakkımızda</Link>
        <p className='text-2xl font-serif text-[#4D1354]'>|</p>
        <Link to={"/Iletisim"} className='text-2xl font-serif ml-2 mr-2 text-gray-400 hover:text-[#4D1354]'>İletişim</Link>
      </div>
      </div>
      

    </div>
  )
}

export default Header
