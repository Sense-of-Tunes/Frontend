import React from 'react'
import zeynep from '../assets/zeynep.jpeg'
import yakup from '../assets/yakup.jpeg'
import talha from '../assets/talha.jpeg'
import asude from '../assets/asude.jpeg'
import { FaGithub, FaLinkedin} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";



const hakkimizda = () => {
  return (
    <div className='container mx-auto grid grid-cols-4 gap-16'>
      <div className='w-[300px] h-[500px] border-2 rounded-lg font-serif flex justify-center flex-col items-center shadow-2xl hover:text-color1 hover:bg-gray-100'>
       <img  className=' w-[250px] h-[300px] object-cover rounded-lg' src={asude} />
       <br></br>
        ASUDE TİMUR
        <div className='font-serif text-gray-400 text-center'>
            FRONTEND DEVELOPER
           <div className='flex items-center justify-center w-full space-x-4  mt-4'>
            <a href="https://www.instagram.com/asudetimur?igsh=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer"><RiInstagramFill size={20}/></a>
            <a href="https://github.com/AsudeTimur" target="_blank" rel="noopener noreferrer"><FaGithub size={20}/></a>
            <a href="https://www.linkedin.com/in/asude-timur-01348623b/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={20}/></a>
           </div>
        </div>
      </div>   

      <div className='w-[300px] h-[500px] border-2 rounded-lg font-serif flex justify-center flex-col items-center shadow-2xl hover:text-color1 hover:bg-gray-100'>
       <img  className=' w-[250px] h-[300px] object-cover rounded-lg' src={zeynep} />
       <br></br>
       ZEYNEP AKSOY
       <div className='font-serif text-gray-400 text-center  '>
          FRONTEND DEVELOPER
          <div className='flex items-center justify-center w-full space-x-4  mt-4'>
           <a href="https://www.instagram.com/zeyynep01?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer"><RiInstagramFill size={20}/></a>
           <a href="https://github.com/ZeynepAksoy" target="_blank" rel="noopener noreferrer"><FaGithub size={20}/></a>
           <a href="https://www.linkedin.com/in/zeynep-aksoy-36095625a/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={20}/></a>
          </div>
       </div>  
      </div>

      <div className='w-[300px] h-[500px] border-2 rounded-lg font-serif flex justify-center flex-col items-center shadow-2xl hover:text-color1 hover:bg-gray-100'>
       <img  className=' w-[250px] h-[300px] object-cover rounded-lg' src={yakup} />
       <br></br>
        YAKUP YAHYA TOPRAK
        <div className='font-serif text-gray-400 text-center'>
          BACKEND DEVELOPER
          <div className='flex items-center justify-center w-full space-x-4 mt-4'>
           <a href="https://www.instagram.com/yakup_yhya?igsh=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer"><RiInstagramFill size={20}/></a>
           <a href="https://github.com/YakupYhya" target="_blank" rel="noopener noreferrer"><FaGithub size={20}/></a>
           <a href="https://www.linkedin.com/in/yakup-toprak-a7426225a/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={20}/></a>
          </div>
        </div>
      </div>  

       <div className='w-[300px] h-[500px] border-2 rounded-lg font-serif flex justify-center flex-col items-center shadow-2xl hover:text-color1 hover:bg-gray-100'>
       <img  className=' w-[250px] h-[300px] object-cover rounded-lg' src={talha} />
       <br></br>
        TALHA YÜCE
        <div className='font-serif text-gray-400 text-center'>
          BACKEND AND Al DEVELOPER
          <div className='flex items-center justify-center w-full space-x-4 mt-4'>
           <a href="https://www.instagram.com/talha_yce?igsh=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer"><RiInstagramFill size={20}/></a>
           <a href="https://github.com/talha-yce" target="_blank" rel="noopener noreferrer"><FaGithub size={20}/></a>
           <a href="https://www.linkedin.com/in/talha-yüce/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={20}/></a>
          </div>
        </div>
       </div>  
       

      <div className='text-center font-serif w-[1280px] items-center '> 
       <p>Sense of Tunes, bir grup müzik tutkunu arkadaşın bir araya gelmesiyle doğdu. Biz, müziğin insan hayatındaki gücünü ve duygusal bağını anlayan bir ekibiz.  </p>
       <p>Kendi müzik zevklerimizden ve bu tutkuyu paylaşma arzumuzdan ilham alarak,</p>
       <p>Sense of Tunes’u hayata geçirdik. </p>
       <p>İnsanları müziğin sihirli dünyasına bağlamak ve duygu durumlarına uygun şarkıları keşfetmelerini </p>
       <p>sağlamak için yola çıktık.</p>    
      </div>

    </div>
  )
}

export default hakkimizda