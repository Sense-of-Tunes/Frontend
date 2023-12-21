import React from 'react'

function beniSasirt() {
  return (
    <div>
        <div className='flex flex-col justify-center items-center gap-2 mt-20'>
            <input type='text' className='h-10 w-[700px] outline-none rounded-full p-2 bg-gray-200 flex placeholder:text-center text-center' placeholder='Bugün nasıl hissediyorsun?'/>
            <div>Hissedilen Duygular</div>
            <div className='font-bold'>Bu duygular Sense of Tunes'da şu anda global trendler oluşturuyolar.</div>
            <div className='relative'>
                <div className='absolute top-8 text-5xl -rotate-12 right-40'>❤️</div>
                <div className='absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-32 text-8xl'>❤️‍🩹</div>
                <div className='absolute top-28 right-64 rotate-6 text-5xl'>🥳</div>
                <div className='absolute top-4 rotate-12 text-5xl left-52'>😇</div>
                <div className='absolute top-6 left-16 -rotate-12 text-5xl'>😜</div>
                <div className='absolute top-24 text-5xl -rotate-12 left-60'>🤗</div>
                <div className='absolute top-52 right-48 -rotate-12 text-5xl'>🥺</div>
                <div className='absolute top-36 right-28 text-5xl -rotate-12'>🤩</div>
                <div className='absolute top-52 left-14 rotate-3 text-5xl'>😔</div>
                <div className='absolute text-5xl top-28 left-28 -rotate-12'>😭</div>
            </div>
        </div>
    </div>
  )
}

export default beniSasirt
