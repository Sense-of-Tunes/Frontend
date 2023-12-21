import React from 'react'
import Logo from '../assets/logo.jpeg';
const Header = () => {
  return (
    <div className='flex justify-between items-center mb-6'>
      <div className='flex justify-between items-center'>
        <img src={Logo} alt='Logo' className='w-10 h-10 ml-2 mr-2'></img>
        <h1 className='text-2xl font-serif text-[#4D1354] mr-2 ml-2'>Sense of Tunes</h1>
      </div>
      
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-serif mr-2 ml-2 text-gray-600 hover:text-[#4D1354]'>Deneme1</h1>
        <p className='text-2xl font-serif text-[#4D1354]'>|</p>
        <h1 className='text-2xl font-serif mr-2 ml-2 text-gray-600 hover:text-[#4D1354]'>Beni Şaşırt</h1>
        <p className='text-2xl font-serif text-[#4D1354]'>|</p>
        <h1 className='text-2xl font-serif mr-2 ml-2 text-gray-600 hover:text-[#4D1354]'>Trendler</h1>
        <p className='text-2xl font-serif text-[#4D1354]'>|</p>
        <h1 className='text-2xl font-serif mr-2 ml-2 text-gray-600 hover:text-[#4D1354]'>Hakkımızda</h1>
        <p className='text-2xl font-serif text-[#4D1354]'>|</p>
        <h1 className='text-2xl font-serif mr-2 ml-2 text-gray-600 hover:text-[#4D1354]'>İletişim</h1>
      </div>

    </div>
  )
}

export default Header