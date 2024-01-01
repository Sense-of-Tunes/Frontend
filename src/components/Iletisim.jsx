import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa";


const iletisim = () => {
  return (
    <div  className=' container mx-auto'>
         <div className = 'font-serif font-bold flex gap-3 items-center'>
        <FaPhoneVolume size={20}/> Telefon
         </div>
         <div>
            0850 235 89 90
         </div>

       <br></br>
       <hr></hr>
       <br></br>

       <div className = 'font-serif font-bold flex gap-3 items-center'>
        <MdOutlineMail size={20}/> E-posta
         </div>
         <div>office@senseoftunes.com</div>

       <br></br>
       <hr></hr>
       <br></br>

       <div className= 'font-serif font-bold flex gap-3 items-center'>
        <FaAddressCard size={20}/> Adres
         </div>
         <div>Fırat Üniversitesi Teknoloji Fakültesi 23119  Elazığ-TURKİYE</div>

       <br></br>
       <hr></hr>
  
       <iframe className="w-full mt-20" height="450" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12459.260596139475!2d39.1926547!3d38.6761161!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4076c043f0ec934d%3A0x97da54a9bdfebc9a!2zRsSxcmF0IMOcbml2ZXJzaXRlc2k!5e0!3m2!1str!2str!4v1703156196095!5m2!1str!2str" ></iframe>

</div>
  )
}

export default iletisim
