'use client'
import type { SpringOptions } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

interface TiltedCardProps {
  imageSrc: React.ComponentProps<'video'>['src'];
  videoType?: 'direct' | 'youtube';
  altText?: string;
  captionText?: string;
  scaleOnHover?: number;
  rotateAmplitude?: number;
  showTooltip?: boolean;
  overlayContent?: React.ReactNode;
  displayOverlayContent?: boolean;
}

const springValues: SpringOptions = {
  damping: 30,
  stiffness: 100,
  mass: 2
};

// Helper function to convert YouTube URL to clean embed URL
function getYouTubeEmbedUrl(url: string): string {
  const videoId = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/)?.[1];
  if (!videoId) return url;
  
  return `https://www.youtube.com/embed/${videoId}?` +
    'autoplay=1&' +
    'mute=1&' +
    'loop=1&' +
    `playlist=${videoId}&` +
    'controls=0&' +
    'showinfo=0&' +
    'modestbranding=1&' +
    'rel=0&' +
    'fs=0&' +
    'playsinline=1&' +
    'disablekb=1&' +
    'iv_load_policy=3';
}

export default function TiltedCard({
  imageSrc,
  videoType = 'direct',
  altText = 'Tilted card',
  captionText = '',
  scaleOnHover = 1.1,
  rotateAmplitude = 14,
  showTooltip = true,
  overlayContent = null,
  displayOverlayContent = false
}: TiltedCardProps) {
  const ref = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);
  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1
  });

  const [lastY, setLastY] = useState(0);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  function handleMouse(e: React.MouseEvent<HTMLElement>) {
    // Disable tilt effect on mobile
    if (isMobile || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);

    const velocityY = offsetY - lastY;
    rotateFigcaption.set(-velocityY * 0.6);
    setLastY(offsetY);
  }

  function handleMouseEnter() {
    if (isMobile) return;
    scale.set(scaleOnHover);
    opacity.set(1);
  }

  function handleMouseLeave() {
    if (isMobile) return;
    opacity.set(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    rotateFigcaption.set(0);
  }

  return (
    <figure
      ref={ref}
      className="relative w-full h-full flex flex-col items-center justify-center perspective-[1000px]"
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative w-full h-full transform-gpu"
        style={{
          rotateX: isMobile ? 0 : rotateX,
          rotateY: isMobile ? 0 : rotateY,
          scale: isMobile ? 1 : scale,
          transformStyle: 'preserve-3d'
        }}
      >
        {videoType === 'youtube' ? (
          <motion.iframe
            src={getYouTubeEmbedUrl(imageSrc as string)}
            className="w-full h-full rounded-lg md:rounded-2xl will-change-transform pointer-events-none aspect-video"
            allow="autoplay; encrypted-media"
            frameBorder="0"
            title={altText}
          />
        ) : (
          <motion.video
            src={imageSrc}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-lg md:rounded-2xl will-change-transform aspect-video"
          />
        )}

        {displayOverlayContent && overlayContent && (
          <motion.div 
            className="absolute inset-0 flex items-center justify-center z-10 p-4"
            style={{
              transform: isMobile ? 'none' : 'translateZ(30px)'
            }}
          >
            {overlayContent}
          </motion.div>
        )}
      </motion.div>

      {showTooltip && !isMobile && (
        <motion.figcaption
          className="pointer-events-none absolute left-0 top-0 rounded-lg bg-white px-2.5 py-1 text-xs text-gray-800 opacity-0 z-20 shadow-lg"
          style={{
            x,
            y,
            opacity,
            rotate: rotateFigcaption
          }}
        >
          {captionText}
        </motion.figcaption>
      )}
    </figure>
  );
}