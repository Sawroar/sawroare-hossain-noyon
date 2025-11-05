import React from 'react'
import svg1 from '../../public/relation.svg'
import Image from 'next/image'
import SpotlightCard from '../../components/SpotlightCard';
import GradientText from '../../components/GradientText'
import { FlowingLogos } from "../../components/ui/flowing-logos";
import Globe from '@/components/ui/globe';
export default function LandingPage() {
  return (
    <div >
      <div className='grid  grid-cols-1 md:grid-cols-12  gap-3'>
        <div className=" col-span-8">
          <SpotlightCard className=" grid-cols-8 custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            <div className=' bg-white/10 backdrop-blur-sm rounded-2xl'> <Image src={svg1} width={300} height={250} alt='svg'></Image></div>
          </SpotlightCard>
        </div>
        <div className=" col-span-4 row-span-6">
          <SpotlightCard className=" custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={1}
              showBorder={false}
              className="custom-class"
            >
              <h3 className='text-center text-4xl mb-5'>Passionate about cutting-edge technologies</h3>
            </GradientText>
            
          </SpotlightCard>
        </div>
   <div className=" col-span-4 row-span-6 ">
          <SpotlightCard className="custom-spotlight-card p-4" spotlightColor="rgba(0, 229, 255, 0.2)">
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={1}
              showBorder={false}
              className="custom-class"
            >
              <h3 className='text-center text-2xl mt-5'>I'm very flexible with time zone communications</h3>
            </GradientText>
            <Globe
              rotateCities={["new york", "london", "tokyo", "dubai"]}
              rotationSpeed={3000}
              markers={[
                { location: [40.7128, -74.006], size: 0.1 },
                { location: [51.5074, -0.1278], size: 0.1 },
                { location: [35.6762, 139.6503], size: 0.1 },
                { location: [25.2048, 55.2708], size: 0.1 }
              ]}
              glowColor={[0.1, 0.8, 1]}
              markerColor={[0.1, 0.8, 1]}
              className="w-full h-[400px]" />
                     </SpotlightCard>
        </div>
   <div className=" col-span-4 row-span-2 ">
          <SpotlightCard className="custom-spotlight-card p-4" spotlightColor="rgba(0, 229, 255, 0.2)">
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={1}
              showBorder={false}
              className="custom-class"
            >
              <h3 className='text-center text-2xl mt-5'>Let's work together on your next project</h3>
            </GradientText>
         <button className="flex items-center justify-center gap-3 mt-3 
                   text-white rounded-full font-medium 
                  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mails-icon lucide-mails"
              >
                <path d="M17 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 1-1.732" />
                <path d="m22 5.5-6.419 4.179a2 2 0 0 1-2.162 0L7 5.5" />
                <rect x="7" y="3" width="15" height="12" rx="2" />
              </svg>
              <span className='text-center'>sawroarehossainnoyon@gmail.com</span>
            </button>
          </SpotlightCard>
        </div>
      </div>

    </div>
  )
}
