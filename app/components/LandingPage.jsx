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
import { MeteorOrbit } from '@/components/ui/meteor-orbit';
import { OrbitIcon } from 'lucide-react';

const imageLogos = [
  { src: "https://i.ibb.co.com/F4ZcRh6K/Tailwind-CSS.png", alt: "coffee", href: "https://B5nqLV0Y.com", title: "React", href: "https://react.dev" },  { 
    node: (
      <div className="flex items-center">
      
      </div>
    )
  },
  { src: "https://i.ibb.co.com/B56DZHXd/React.png", alt: "coffee", href: "https://B5nqLV0Y.com", title: "React", href: "https://react.dev" },  { 
    node: (
      <div className="flex items-center">
       
      </div>
    )
  },
  { src: "https://i.ibb.co.com/mrpVHDQY/Node-js.png", alt: "Company 2", href: "https://company2.com" },
  { src: "https://i.ibb.co.com/BKszHbqN/Type-Script.png", alt: "Company 3", href: "https://company3.com" },
  { src: "https://i.ibb.co.com/Lhr52qkT/CSS3.png", alt: "Company 3", href: "https://company3.com" },
  { src: "https://i.ibb.co.com/GfwSMXTY/Next-js.png", alt: "Company 3", href: "https://company3.com" },
  { src: "https://i.ibb.co.com/R4SsfbNv/Postman.png", alt: "Company 3", href: "https://company3.com" },
  { src: "https://i.ibb.co.com/YFsm2xfD/Postgres-SQL.png", alt: "Company 3", href: "https://company3.com" },
  { src: "https://i.ibb.co.com/9H2jFZP5/MongoDB.png", alt: "Company 3", href: "https://company3.com" },
  { src: "https://i.ibb.co.com/R4SsfbNv/Postman.png", alt: "Company 3", href: "https://company3.com" },
  { src: "https://i.ibb.co.com/tT2cmyDV/Express.png", alt: "Company 3", href: "https://company3.com" },
  { src: "https://i.ibb.co.com/0yHc2Wfs/Figma.png", alt: "Company 3", href: "https://company3.com" },
  { src: "https://i.ibb.co.com/JjpNRxLP/Bun.png", alt: "Company 3", href: "https://company3.com" },
  { src: "https://i.ibb.co.com/jZ9kVtDT/GitHub.png", alt: "Company 3", href: "https://company3.com" },
  { src: "https://i.ibb.co.com/JjpNRxLP/Bun.png", alt: "Company 3", href: "https://company3.com" },
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
                  speed={50}
                  direction="left"
                  logoHeight={48}
                  gap={30}
                  pauseOnHover
                  scaleOnHover
                  fadeOut
                  fadeOutColor="#ffffff"
                  ariaLabel="Technology partners"
                />
<MeteorOrbit rippleCount={3} icons={[OrbitIcon]}>
      <div className="flex items-center justify-center w-16 h-16 rounded-full">
        <svg
          data-testid="geist-icon"
          height="32"
          strokeLinejoin="round"
          viewBox="0 0 16 16"
          width="32"
        >
          <path
            d="M8 0C8.26264 0 8.5144 0.104413 8.7002 0.290039L10.4639 2.05273H12.9551C13.0853 2.05258 13.2146 2.07819 13.335 2.12793C13.4554 2.17773 13.5651 2.25063 13.6572 2.34277C13.7494 2.43492 13.8223 2.54461 13.8721 2.66504C13.9218 2.7854 13.9474 2.91468 13.9473 3.04492V5.53711L15.71 7.2998C15.8956 7.4856 16 7.73736 16 8C16 8.26264 15.8956 8.5144 15.71 8.7002L13.9473 10.4639V12.9551C13.9474 13.0853 13.9218 13.2146 13.8721 13.335C13.8223 13.4554 13.7494 13.5651 13.6572 13.6572C13.5651 13.7494 13.4554 13.8223 13.335 13.8721C13.2146 13.9218 13.0853 13.9474 12.9551 13.9473H10.4639L8.7002 15.71C8.5144 15.8956 8.26264 16 8 16C7.73736 16 7.4856 15.8956 7.2998 15.71L5.53613 13.9473H3.04492C2.49748 13.9473 2.05273 13.5037 2.05273 12.9551V10.4639L0.290039 8.7002C0.104413 8.5144 0 8.26264 0 8C0 7.73736 0.104413 7.4856 0.290039 7.2998L2.05273 5.53613V3.04492C2.05258 2.91468 2.07819 2.7854 2.12793 2.66504C2.17773 2.54461 2.25063 2.43492 2.34277 2.34277C2.43492 2.25063 2.54461 2.17773 2.66504 2.12793C2.7854 2.07819 2.91468 2.05258 3.04492 2.05273H5.53711L7.2998 0.290039C7.4856 0.104413 7.73736 0 8 0ZM6.9375 8.5332L5.875 7.4707L4.81445 8.53125L6.40723 10.124C6.70012 10.4169 7.17488 10.4169 7.46777 10.124L11.1855 6.40625L10.125 5.3457L6.9375 8.5332Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </MeteorOrbit>
              </div>
              <div style={{ height: '100px', position: 'relative', overflow: 'hidden' }}>
                <LogoLoop
                  logos={imageLogos}
                  speed={50}
                  direction="right"
                  logoHeight={48}
                  gap={30}
                  pauseOnHover
                  scaleOnHover
                  fadeOut
                  fadeOutColor="#ffffff"
                  ariaLabel="Technology partners"
                />
<MeteorOrbit rippleCount={3} icons={[OrbitIcon]}>
      <div className="flex items-center justify-center w-16 h-16 rounded-full">
        <svg
          data-testid="geist-icon"
          height="32"
          strokeLinejoin="round"
          viewBox="0 0 16 16"
          width="32"
        >
          <path
            d="M8 0C8.26264 0 8.5144 0.104413 8.7002 0.290039L10.4639 2.05273H12.9551C13.0853 2.05258 13.2146 2.07819 13.335 2.12793C13.4554 2.17773 13.5651 2.25063 13.6572 2.34277C13.7494 2.43492 13.8223 2.54461 13.8721 2.66504C13.9218 2.7854 13.9474 2.91468 13.9473 3.04492V5.53711L15.71 7.2998C15.8956 7.4856 16 7.73736 16 8C16 8.26264 15.8956 8.5144 15.71 8.7002L13.9473 10.4639V12.9551C13.9474 13.0853 13.9218 13.2146 13.8721 13.335C13.8223 13.4554 13.7494 13.5651 13.6572 13.6572C13.5651 13.7494 13.4554 13.8223 13.335 13.8721C13.2146 13.9218 13.0853 13.9474 12.9551 13.9473H10.4639L8.7002 15.71C8.5144 15.8956 8.26264 16 8 16C7.73736 16 7.4856 15.8956 7.2998 15.71L5.53613 13.9473H3.04492C2.49748 13.9473 2.05273 13.5037 2.05273 12.9551V10.4639L0.290039 8.7002C0.104413 8.5144 0 8.26264 0 8C0 7.73736 0.104413 7.4856 0.290039 7.2998L2.05273 5.53613V3.04492C2.05258 2.91468 2.07819 2.7854 2.12793 2.66504C2.17773 2.54461 2.25063 2.43492 2.34277 2.34277C2.43492 2.25063 2.54461 2.17773 2.66504 2.12793C2.7854 2.07819 2.91468 2.05258 3.04492 2.05273H5.53711L7.2998 0.290039C7.4856 0.104413 7.73736 0 8 0ZM6.9375 8.5332L5.875 7.4707L4.81445 8.53125L6.40723 10.124C6.70012 10.4169 7.17488 10.4169 7.46777 10.124L11.1855 6.40625L10.125 5.3457L6.9375 8.5332Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </MeteorOrbit>
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
