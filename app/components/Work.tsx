import SpotlightCard from '@/components/SpotlightCard'
import TiltedCard from '@/components/TiltedCard'
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
                                            imageSrc="https://youtu.be/KVR9V4vsp-Y?si=3Hz83qp7CnTMtgPT"
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

                    <h3><span className='text-3xl font-bold'>Engine Experts </span> <br />
                        <span className='text-xl mt-2'>Engine Experts </span> is a modern automotive service and repair website that showcases professional engine maintenance, repair services, and automotive solutions with a clean, professional design.
                        <div className='flex items-center justify-between gap-2 mt-3'>
                            <CircleSmall />
                            <h3>        Clean, visually appealing presentation of automotive services </h3>
                        </div>
                    </h3>



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
                                            imageSrc="https://youtu.be/KVR9V4vsp-Y?si=3Hz83qp7CnTMtgPT"
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

                    <h3><span className='text-3xl font-bold'>Engine Experts </span> <br />
                        <span className='text-xl mt-2'>Engine Experts </span> is a modern automotive service and repair website that showcases professional engine maintenance, repair services, and automotive solutions with a clean, professional design.
                        <div className='flex items-center justify-between gap-2 mt-3'>
                            <CircleSmall />
                            <h3>        Clean, visually appealing presentation of automotive services </h3>
                        </div>
                    </h3>



                </div>
            </div>
        

        </div>
    )
}
