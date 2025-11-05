import TiltedCard from '@/components/TiltedCard'
import React from 'react'

export default function Work() {
    return (
        <div>
            <p className='text-center'>FEATURED CASE STUDIES</p>
            <h1 className='text-center'>Curated work</h1>
            <div className='grid md:grid-cols-12 gap-5 '>
                <div className='grid col-span-8'>
                    <div>
                        <div className=' bg-blue-700 py-6 rounded-2xl'>
                            <TiltedCard
                                imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
                                altText="Kendrick Lamar - GNX Album Cover"
                                captionText="Kendrick Lamar - GNX"
                                containerHeight="300px"
                                containerWidth="800px"
                                imageHeight="300px"
                                imageWidth="600px"
                                rotateAmplitude={12}
                                scaleOnHover={1.2}
                                showMobileWarning={false}
                                showTooltip={true}
                                displayOverlayContent={true}
                                overlayContent={
                                    <p className="tilted-card-demo-text">
                                        Engine Experts
                                    </p>
                                }
                            />
                        </div>
                    </div>
                </div>
                <div className='grid col-span-4'>
                    Next Ventures
                    A platform designed for early-stage entrepreneurs to pitch, browse, and engage with startup ideas. It’s built to impress both users and investors with blazing speed, compelling visuals, and a modern tech stack.

                    Leveraged Partial Prerendering and After for faster loading.
                    Simplified idea submission with a clean, intuitive design.
                    Enhanced browsing with seamless performance optimization.
                    Next.jsNext.js
                    ReactReact
                    Tailwind CSSTailwind CSS
                    TypeScriptTypeScript
                    Motion.devMotion.dev
                    Sanity cmsSanity cms
                    Auth.jsAuth.js
                    markdownmarkdown
                    GROQGROQ
                    SentrySentry
                </div>
            </div>
            <div className='grid md:grid-cols-12 gap-5 mt-6 '>
                <div className='grid col-span-8'>
                    <div>
                        <div className=' bg-blue-700 py-6 rounded-2xl border-[#3B82F6] border-4'>
                            <TiltedCard
                                imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
                                altText="Kendrick Lamar - GNX Album Cover"
                                captionText="Kendrick Lamar - GNX"
                                containerHeight="300px"
                                containerWidth="800px"
                                imageHeight="300px"
                                imageWidth="600px"
                                rotateAmplitude={12}
                                scaleOnHover={1.2}
                                showMobileWarning={false}
                                showTooltip={true}
                                displayOverlayContent={true}
                                overlayContent={
                                    <p className="tilted-card-demo-text">
                                        Engine Experts
                                    </p>
                                }
                            />
                        </div>
                    </div>
                </div>
                <div className='grid col-span-4'>
                    Next Ventures
                    A platform designed for early-stage entrepreneurs to pitch, browse, and engage with startup ideas. It’s built to impress both users and investors with blazing speed, compelling visuals, and a modern tech stack.

                    Leveraged Partial Prerendering and After for faster loading.
                    Simplified idea submission with a clean, intuitive design.
                    Enhanced browsing with seamless performance optimization.
                    Next.jsNext.js
                    ReactReact
                    Tailwind CSSTailwind CSS
                    TypeScriptTypeScript
                    Motion.devMotion.dev
                    Sanity cmsSanity cms
                    Auth.jsAuth.js
                    markdownmarkdown
                    GROQGROQ
                    SentrySentry
                </div>
            </div>

        </div>
    )
}
