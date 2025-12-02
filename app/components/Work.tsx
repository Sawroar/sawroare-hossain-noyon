import ScrollFloat from '@/components/ScrollFloat'
import SpotlightCard from '@/components/SpotlightCard'
import TiltedCard from '@/components/TiltedCard'

import LustreText from '@/components/ui/lustretext'
import { CircleSmall } from 'lucide-react'


export default function Work() {
    return (
        <div>
            <p className='text-center'>FEATURED CASE STUDIES</p>
            <h1 className='text-center'>Curated work</h1>
            <div className='grid md:grid-cols-12 gap-5 '>
                <div className='grid col-span-8'>
                    <div>
                        <div className=' bg-blue-700 p-1 rounded-2xl'>
                            <div className="col-span-1 md:col-span-4 md:row-span-2">
                                <SpotlightCard className="custom-spotlight-card p-1" spotlightColor="rgba(0, 229, 255, 0.2)">
                                    <div className="h-[250px] md:h-[300px] n==">
                                        <TiltedCard
                                            imageSrc=""
                                            videoType="youtube"
                                            captionText='Engine Experts'
                                            rotateAmplitude={12}
                                            scaleOnHover={1.1}
                                            showTooltip={true}
                                            displayOverlayContent={true}

                                        />
                                    </div>
                                </SpotlightCard>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid col-span-4'>

                    <h3><span className='text-3xl font-bold'>
                        Engine Experts </span> <br />
                        <span className='text-xl mt-2'>Engine Experts </span> is a modern automotive service and repair website that showcases professional engine maintenance, repair services, and automotive solutions with a clean, professional design.
                        <div className='flex items-start justify-start gap-2 mt-3'>
                            <CircleSmall /><h3>Clean, visually appealing presentation of automotive services </h3>
                        </div>
                        <div className='flex items-start justify-start gap-2 mt-3'>
                            <CircleSmall /><h3>Clean, professional design showcasing expertise </h3>
                        </div>
                        <div className='flex items-start justify-start gap-2 mt-3'>
                            <CircleSmall /><h3>Service-focused layout with clear call-to-actions </h3>
                        </div>
                        <div className='flex items-start justify-start gap-2 mt-3'>
                            <CircleSmall /><h3>Trust-building elements for automotive services </h3>
                        </div>
                        <div className='flex items-start justify-start gap-2 mt-3'>
                            <CircleSmall /><h3>Fast loading service pages </h3>
                        </div>
                    </h3>

                    <div className='flex gap-2 mt-6'>
                        <div className='flex items-center gap-1 bg-white-2 px-1.5 py-1.5 border-amber-300 shadow-border dark:bg-white/10 border  rounded'>
                            <svg aria-label="nextjs" className="inline-block size-6 rounded-sm will-change-transform" height="50" width="50" fill="none" viewBox="0 0 180 180">
                                <g mask="url(#nextjs_icon_dark__a)">
                                    <circle cx="90" cy="90" fill="black" r="87" stroke="white" strokeWidth="6" />
                                    <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="white" />
                                    <rect fill="white" height="72" width="12" x="115" y="54" />
                                </g>
                            </svg>
                            <div>
                                <h2><ScrollFloat textClassName="text-xl md:text-2xl lg:text-xs font-bold" // Use Tailwind size classes
                                    containerClassName="your-container-class"
                                    animationDuration={1}
                                    ease='back.inOut(2)'
                                    scrollStart='center bottom+=50%'
                                    scrollEnd='bottom bottom-=40%'
                                    stagger={0.03}

                                >
                                    Next JS
                                </ScrollFloat> </h2>
                            </div>
                        </div>
                        <div className='flex items-center gap-1 bg-white-2 px-1.5 py-1.5 border-amber-300 shadow-border dark:bg-white/10 border  rounded'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="inline-block size-6 rounded-sm will-change-transform"  width="32" height="32" viewBox="0 0 32 32"><title>File-type-dotenv SVG Icon</title><g fill-rule="evenodd"><path d="M3.167 3.167h25.667v25.667H3.167z"/><path fill="#ecd53f" fill-rule="nonzero" d="M30 2v28H2V2zM14.757 20.539H9.98v6.44h4.898v-1.085h-3.597V24.14h3.232v-1.085H11.28v-1.428h3.475v-1.09zm2.503 0h-1.264v6.44h1.207v-4.2l2.597 4.2h1.305v-6.44h-1.21v4.3zm5.97 0h-1.41l2.303 6.44h1.388l2.306-6.44h-1.38l-1.577 4.766l-1.63-4.767zM8.3 24.96H6.34v1.96H8.3z"/></g></svg>
                            <div>
                                <h2><ScrollFloat textClassName="text-xl md:text-2xl lg:text-xs font-bold" // Use Tailwind size classes
                                    containerClassName="your-container-class"
                                    animationDuration={1}
                                    ease='back.inOut(2)'
                                    scrollStart='center bottom+=50%'
                                    scrollEnd='bottom bottom-=40%'
                                    stagger={0.03}

                                >
                                    Next JS
                                </ScrollFloat> </h2>
                            </div>
                        </div>
                        <div className='flex items-center gap-1  border-amber-300  bg-white-2 px-1.5 shadow-border dark:bg-white/10 border  rounded'>
                            <svg className="text-2xl rounded-sm size-6 will-change-transform inline-block" height="50" width="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                                <g fill="#61DAFB">
                                    <circle cx="64" cy="64" r="11.4" />
                                    <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z" />
                                </g>
                            </svg>
                            <div>
                                <h2><ScrollFloat textClassName="text-xl md:text-2xl lg:text-xs font-bold" // Use Tailwind size classes
                                    containerClassName="your-container-class"
                                    animationDuration={1}
                                    ease='back.inOut(2)'
                                    scrollStart='center bottom+=50%'
                                    scrollEnd='bottom bottom-=40%'
                                    stagger={0.03}

                                >
                                    REACT JS
                                </ScrollFloat> </h2>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='grid md:grid-cols-12 gap-5 mt-4 '>
                <div className='grid col-span-8'>
                    <div>
                        <div className=' bg-blue-700 p-1 rounded-2xl'>
                            <div className="col-span-1 md:col-span-4 md:row-span-2">
                                <SpotlightCard className="custom-spotlight-card p-1" spotlightColor="rgba(0, 229, 255, 0.2)">
                                    <div className="h-[250px] md:h-[300px] n==">
                                        <TiltedCard
                                            // https://youtu.be/hhhQUYJnBfQ
                                            imageSrc=""
                                            videoType="youtube"
                                            captionText='Bistro Boss'
                                            rotateAmplitude={12}
                                            scaleOnHover={1.1}
                                            showTooltip={true}
                                            displayOverlayContent={true}

                                        />
                                    </div>
                                </SpotlightCard>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid col-span-4'>

                    <h3><span className='text-3xl font-bold'>Bistro Boss </span> <br />
                        <span className='text-xl mt-2'>Engine Experts </span> is a modern automotive service and repair website that showcases professional engine maintenance, repair services, and automotive solutions with a clean, professional design.
                        <div className='flex items-center justify-start gap-2 mt-3'>
                            <CircleSmall /><h3>Clean, visually appealing presentation of automotive services </h3>
                        </div>
                    </h3>
                </div>
            </div>

        </div>
    )
}
