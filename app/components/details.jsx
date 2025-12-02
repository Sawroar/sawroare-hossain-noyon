import ScrollVelocity from '@/components/ScrollVelocity'
import { AnimatedButton } from '@/components/ui/animated-button'
import wings from './../../public/wings.svg'
import Image from 'next/image'
export default function details() {
  return (
    <div className='p-8'> 
<div className='flex items-center justify-center'>
         <Image src={wings}></Image>
            </div>
        <ScrollVelocity
  texts={['FROM CONCEPT TO CREATION', 'LET S MAKE IT HAPPEN!']} 
  velocity={100} 
  className="custom-scroll-text p-4"
/>
<div className='flex items-center justify-center'>
    <AnimatedButton
        className="bg-green-500 text-white mt-5"
        variant="default"
        size="default"
        glow={true}
        textEffect="normal"
        uppercase={true}
        rounded="custom"
        asChild={false}
        hideAnimations={false}
        shimmerColor="#39FF14"
        shimmerSize="0.15em"
        shimmerDuration="3s"
        borderRadius="100px"
        background="rgba(0, 0, 0, 1)"
      >
       Get in Touch
      </AnimatedButton>
</div>
<div  className='flex items-center justify-center mt-10'>
<div>
    <h1 className='text-3xl font-bold '>    I'm available for full-time roles & freelance projects.</h1>
  <h3>  I thrive on crafting dynamic web applications, and
delivering seamless user experiences.</h3>
</div>
</div>
      </div>
  )
}
