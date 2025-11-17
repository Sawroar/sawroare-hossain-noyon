'use client'
import svg1 from '../../public/connect.jpg'
import noyon2 from '../../public/noyon2.jpg'
import Image from 'next/image'
import SpotlightCard from '../../components/SpotlightCard';
import GradientText from '../../components/GradientText'
import Globe from '@/components/ui/globe';
import LogoLoop from '@/components/LogoLoop';
import { MorphyButton } from '../../components/ui/morphy-button';
import { AnimatedButton } from '@/components/ui/animated-button';
import DraggableAvatar from '@/components/ui/draggable-avatar';

const imageLogos = [
  { src: "https://i.ibb.co.com/B5nqLV0Y/1.png", alt: "coffee", href: "https://B5nqLV0Y.com", title: "React", href: "https://react.dev" },  { 
    node: (
      <div className="flex items-center">
        <span className="text-xl font-bold text-gray-800 dark:text-white">
          Your Text Here
        </span>
      </div>
    )
  },
  { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];
export default function LandingPage() {
  return (
    <div >
      <div className='grid  grid-cols-1 md:grid-cols-12  gap-3'>
        <div className=" col-span-8">
          <SpotlightCard className="  custom-spotlight-card items-center" spotlightColor="rgba(0, 229, 255, 0.2)">
            <div className=' bg-white/10 backdrop-blur-sm rounded-2xl '>
              <Image src={svg1} width={1000} height={250} alt='svg' className='rounded-2xl relative'></Image>
              <div className='absolute -translate-y-32 translate-x-89 rounded-full '>
              
      <DraggableAvatar
  image= '/noyon2.jpg'
  borderColor="#60A5FA"
  range={200}
  size={90}
/>              </div>
            </div>
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
              <h3 className='text-center text-2xl p-4 mb-5'>Passionate about cutting-edge <br /> technologies</h3>
              <div style={{ height: '100px', position: 'relative', overflow: 'hidden' }}>
                <LogoLoop
                  logos={imageLogos}
                  speed={80}
                  direction="left"
                  logoHeight={48}
                  gap={40}
                  pauseOnHover
                  scaleOnHover
                  fadeOut
                  fadeOutColor="#ffffff"
                  ariaLabel="Technology partners"
                />

              </div>
              <div style={{ height: '100px', position: 'relative', overflow: 'hidden' }}>
                <LogoLoop
                  logos={imageLogos}
                  clsg
                  speed={80}
                  direction="right"
                  logoHeight={48}
                  gap={40}
                  pauseOnHover
                  scaleOnHover
                  fadeOut
                  fadeOutColor="#ffffff"
                  ariaLabel="Technology partners"
                />

              </div>

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
         <div className='flex flex-col md:flex-row itemes-center justify-around mt-3 gap-2'>
             <MorphyButton size="lg">
              GB UK
            </MorphyButton>
             <MorphyButton size="lg">
            Bangladesh
            </MorphyButton>
             <MorphyButton size="lg">
              In USA
            </MorphyButton>
         </div>
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
              className="md:w-full md:h-[400px]" />
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
