import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'phosphor-react';
import ciaoVideo from '@/assets/CiaoVideo.mp4';
import heroPoster from '@/assets/incredible-india.jpg';

interface VideoBackgroundProps {
  children: React.ReactNode;
}

const VideoBackground = ({ children }: VideoBackgroundProps) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [useYouTube, setUseYouTube] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Convert YouTube URL to embeddable format
  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.split('v=')[1]?.split('&')[0];
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&fs=0&cc_load_policy=0&playsinline=1&enablejsapi=1`;
  };

  const youtubeUrl = 'https://www.youtube.com/watch?v=_9UtM1Vbqnc';
  const embedUrl = getYouTubeEmbedUrl(youtubeUrl);

  // Defer actual video loading until the hero is in view and the browser is idle
  useEffect(() => {
    if (!containerRef.current) return;

    const onIdle = (cb: () => void) => {
      // @ts-ignore - requestIdleCallback not in TS lib by default
      const ric = window.requestIdleCallback || ((fn: Function) => setTimeout(fn as any, 0));
      ric(() => cb());
    };

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry && entry.isIntersecting) {
        onIdle(() => setShouldLoadVideo(true));
        observer.disconnect();
      }
    }, { root: null, rootMargin: '200px', threshold: 0.1 });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const handleVideoError = () => {
    console.log('Local video failed to load, switching to YouTube fallback...');
    setHasError(true);
    setUseYouTube(true);
  };

  const handleVideoLoad = () => {
    setIsLoaded(true);
    setHasError(false);
  };

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Instant poster image for first paint */}
        <img
          src={heroPoster}
          alt="India background"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          // @ts-ignore fetchPriority is widely supported but not yet typed
          fetchpriority="high"
          style={{ filter: 'brightness(0.45) contrast(1.15)' }}
        />

        {/* Loading overlay */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isLoaded ? 0 : 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-secondary z-10"
        />
        
        {/* Video Content */}
        <div className="relative w-full h-full">
          {!useYouTube ? (
            // Primary: Local Video
            shouldLoadVideo && (
              <video
                ref={videoRef}
                className="absolute top-1/2 left-1/2 w-full h-full transform -translate-x-1/2 -translate-y-1/2 object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                poster={heroPoster}
                onError={handleVideoError}
                onLoadedData={handleVideoLoad}
                onCanPlay={handleVideoLoad}
                style={{ 
                  filter: 'brightness(0.4) contrast(1.2)',
                }}
              >
                <source src={ciaoVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )
          ) : (
            // Fallback: YouTube Video
            <iframe
              src={embedUrl}
              className="absolute top-1/2 left-1/2 w-[200%] h-[200%] transform -translate-x-1/2 -translate-y-1/2 scale-[0.6] object-cover"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ 
                pointerEvents: 'none',
                filter: 'brightness(0.4) contrast(1.2)',
              }}
            />
          )}
          
          {/* Luxury overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-transparent to-background/20" />
          
          {/* Subtle noise texture for premium feel */}
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>

      {/* Elegant video controls */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
        className="fixed bottom-8 right-8 z-30"
      >
        <button 
          onClick={() => {
            // This will be handled by parent component
            const event = new CustomEvent('openContactModal');
            window.dispatchEvent(event);
          }}
          className="glass-card p-4 hover:shadow-glow transition-all duration-300 cursor-pointer group"
        >
          <div className="flex items-center space-x-3 text-muted-foreground group-hover:text-primary transition-colors">
            <div className="h-2 w-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-light tracking-wide">
              Connect with Travel Expert
            </span>
          </div>
        </button>
      </motion.div>
    </div>
  );
};

export default VideoBackground;