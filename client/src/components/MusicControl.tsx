import { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import { motion } from 'framer-motion';

interface MusicControlProps {
  audioRef: React.RefObject<HTMLAudioElement>;
}

const MusicControl = ({ audioRef }: MusicControlProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const toggleMusic = () => {
    if (audioRef.current) {
      const audio = audioRef.current;
      
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise.then(() => {
            setIsPlaying(true);
          }).catch((error) => {
            console.error('Music play failed:', error);
          });
        }
      }
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
    };
  }, [audioRef]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        <motion.button
          onClick={toggleMusic}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="w-14 h-14 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
          style={{
            background: 'linear-gradient(135deg, rgba(23, 22, 16, 0.9) 0%, rgba(51, 51, 51, 0.8) 100%)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          data-testid="button-music-control"
        >
          {isPlaying ? (
            <Pause className="w-6 h-6" />
          ) : (
            <Play className="w-6 h-6 ml-0.5" />
          )}
        </motion.button>

        {/* Tooltip */}
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            className="absolute bottom-16 right-0 px-3 py-2 text-sm text-white rounded-lg whitespace-nowrap"
            style={{
              background: 'linear-gradient(135deg, rgba(23, 22, 16, 0.95) 0%, rgba(51, 51, 51, 0.9) 100%)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)'
            }}
            data-testid="tooltip-music-control"
          >
            {isPlaying ? 'Pause Music' : 'Play Music'}
            {/* Tooltip arrow */}
            <div 
              className="absolute top-full right-6 w-0 h-0" 
              style={{
                borderLeft: '6px solid transparent',
                borderRight: '6px solid transparent',
                borderTop: '6px solid rgba(23, 22, 16, 0.95)'
              }}
            ></div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default MusicControl;