import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => {
      // Pause background music when video starts
      const audio = document.querySelector('audio[data-testid="background-audio"]') as HTMLAudioElement;
      if (audio) {
        audio.pause();
      }
    };

    const handlePause = () => {
      // Resume background music when video pauses
      const audio = document.querySelector('audio[data-testid="background-audio"]') as HTMLAudioElement;
      if (audio) {
        audio.play().catch(() => {
          // Silently handle autoplay restrictions
        });
      }
    };

    const handleEnded = () => {
      // Resume background music when video ends
      const audio = document.querySelector('audio[data-testid="background-audio"]') as HTMLAudioElement;
      if (audio) {
        audio.play().catch(() => {
          // Silently handle autoplay restrictions
        });
      }
    };

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <motion.section 
      className="section-pastel-blue relative w-full overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 4.5 }}
    >
      {/* Section Header */}
      <div className="text-center py-8 px-4">
        <h2 className="text-5xl font-script italic font-black text-gold mb-8" data-testid="text-video-title">
          Save the Date Video
        </h2>
      </div>
      {/* Full Width Video Container */}
      <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden">
        <video
          ref={videoRef}
          loop
          playsInline
          controls
          style={{
            display: 'block',
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
            objectPosition: 'top',
            margin: 0,
            padding: 0
          }}
        >
          <source
            src="https://res.cloudinary.com/dpzxdmqqg/video/upload/v1755326629/LUIS_JESSY_Our_Prenup_Music_Video_zfytbf_g7zn7u_tdoloe.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </motion.section>
  );
};

export default VideoSection;