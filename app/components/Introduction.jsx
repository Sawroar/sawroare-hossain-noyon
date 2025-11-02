'use client'
import { CircleArrowRight, CircleChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Particles from '../components/Particles'
export default function Introduction() {
  return (
    <div className='relative flex items-center justify-center'>
      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div className='mt-40 absolute'>
        <div className='flex items-center justify-center'>
          <div className='flex justify-around items-center gap-2 rounded-full px-1 py-1 text-white hover:bg-white/15 transition-all duration-300 border border-white/20 border-rounded'>
            <span className="px-2 py-0.5 bg-blue-500 text-white text-xs font-bold rounded-full 
             animate-pulse hover:animate-none">
              New
            </span>
            <Link href={'https://engine-experts.vercel.app'} className="text-white text-sm">Engine Expert is Live!</Link>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 12L10 8L6 4" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <h1 className='text-center mt-3 text-5xl'>
          I help founders turn ideas <br />
          into seamless digital experiences
        </h1>
        <h1 className='text-center text-2xl mt-6'>Hello, I'm Sawroare Hossain
          Image
          a Full Stack Developer</h1>
        <div className="flex items-center justify-center gap-4 mt-6">
          <div className="flex items-center gap-4">
            {/* Let's Connect Button */}
            <button className="flex items-center gap-3 px-1.5 py-1  
                   rounded-full font-semibold    bg-white/10 backdrop-blur-sm hover:text-black  text-white hover:bg-white  border border-white/20
                   transition-all duration-600 group">
              <span>Let's Connect</span>
              <div className="w-8 h-8 flex items-center justify-center bg-white text-black rounded-full
                  group-hover:bg-white  transition-all duration-800 group">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="black">
                  <path d="M3 8H13M13 8L8 3M13 8L8 13"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round" />
                </svg>
              </div>
            </button>

            {/* Email Button */}
            <button className="flex items-center gap-3  
                   text-white rounded-full font-medium 
                   hover:bg-white/20 transition-all duration-300 hover:px-2 hover:py-2">
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
              <span>sawroarehossainnoyon@gmail.com</span>
            </button>
          </div>
        </div>
      </div>
    </div>


  )
}
