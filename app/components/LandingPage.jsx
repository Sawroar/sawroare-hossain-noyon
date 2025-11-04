import React from 'react'
import svg1 from '../../public/relation.svg'
import Image from 'next/image'
export default function LandingPage() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
        <div className=' bg-white/10 backdrop-blur-sm rounded-2xl'> <Image src={svg1} width={300} height={250} alt='svg'></Image></div>
        <div className='  bg-white/10 backdrop-blur-sm  rounded-2xl'><h3>Passionate about cutting-edge technologies</h3></div>
    </div>
  )
}
