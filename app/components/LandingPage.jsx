import React from 'react'
import svg1 from '../../public/relation.svg'
import Image from 'next/image'
 import SpotlightCard from '../../components/SpotlightCard';
 import GradientText from '../../components/GradientText'
export default function LandingPage() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
     

  <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
   <div className=' bg-white/10 backdrop-blur-sm rounded-2xl'> <Image src={svg1} width={300} height={250} alt='svg'></Image></div>
</SpotlightCard>
<SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
<GradientText
  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
  animationSpeed={1}
  showBorder={false}
  className="custom-class"
>
<h3 className='text-center text-4xl'>Passionate about cutting-edge technologies</h3>
</GradientText>

</SpotlightCard>
    </div>
  )
}
