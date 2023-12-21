import React from 'react'
import Header from './components/Header'
import Hakkimizda from './components/Hakkimizda'
import Iletisim from './components/Iletisim'
import BeniSasirt from './components/BeniSasirt'
import Mutlu from './components/mutlu'
import Hissemoji from './components/HissEmoji'

const App = () => {
  return (
    <div className='container mx-auto p-4 grid gap-16'>
        <Header/>
        <Hissemoji/>

      
    </div>
    
  )
}

export default App