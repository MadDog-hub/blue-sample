import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface EnvelopeAnimationProps {
  isVisible: boolean;
  animationsEnabled: boolean;
}

const EnvelopeAnimation = ({ isVisible, animationsEnabled }: EnvelopeAnimationProps) => {
  const [showPaper, setShowPaper] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setShowPaper(true);
      }, animationsEnabled ? 800 : 0);
      return () => clearTimeout(timer);
    } else {
      setShowPaper(false);
    }
  }, [isVisible, animationsEnabled]);

  return (
    <div className="relative flex items-center justify-center" data-testid="envelope-animation">
      {/* Envelope */}
      <motion.div
        className="relative z-10"
        initial={animationsEnabled ? { opacity: 0, scale: 0.5, y: 50 } : { opacity: 1, scale: 1, y: 0 }}
        animate={isVisible ? { 
          opacity: 1, 
          scale: 1, 
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" }
        } : { 
          opacity: 0, 
          scale: 0.5, 
          y: 50 
        }}
        data-testid="envelope-container"
      >
        {/* Envelope SVG */}
        <svg 
          width="120" 
          height="80" 
          viewBox="0 0 120 80" 
          className="drop-shadow-xl"
          data-testid="envelope-svg"
        >
          {/* Envelope body */}
          <rect
            x="10"
            y="20"
            width="100"
            height="50"
            fill="#f8f9fa"
            stroke="#e9ecef"
            strokeWidth="2"
            rx="4"
          />
          
          {/* Envelope flap (back) */}
          <polygon
            points="10,20 60,45 110,20"
            fill="#dee2e6"
            stroke="#e9ecef"
            strokeWidth="2"
          />
          
          {/* Envelope flap (front) */}
          <motion.polygon
            points="10,20 60,45 110,20 110,10 60,35 10,10"
            fill="#f8f9fa"
            stroke="#e9ecef"
            strokeWidth="2"
            style={{ transformBox: "fill-box", transformOrigin: "50% 0%" }}
            initial={false}
            animate={showPaper ? {
              rotateX: 45,
              transition: { duration: 0.5, ease: "easeInOut" }
            } : {}}
          />
          
          {/* Envelope opening line */}
          <line
            x1="10"
            y1="20"
            x2="110"
            y2="20"
            stroke="#e9ecef"
            strokeWidth="1"
          />
        </svg>
      </motion.div>

      {/* Paper sliding out */}
      <AnimatePresence>
        {showPaper && (
          <motion.div
            className="absolute z-20"
            initial={animationsEnabled ? { 
              y: 20, 
              opacity: 0, 
              scale: 0.8,
              rotateX: -20 
            } : { 
              y: 0, 
              opacity: 1, 
              scale: 1,
              rotateX: 0 
            }}
            animate={{ 
              y: -60, 
              opacity: 1, 
              scale: 1,
              rotateX: 0,
              transition: { 
                duration: animationsEnabled ? 0.8 : 0, 
                ease: "easeOut",
                delay: animationsEnabled ? 0.3 : 0
              }
            }}
            exit={{
              y: 20,
              opacity: 0,
              scale: 0.8,
              transition: { duration: 0.4 }
            }}
            data-testid="invitation-paper"
          >
            {/* Paper background */}
            <div className="bg-white rounded-lg shadow-2xl p-6 max-w-6xl border border-gray-200 transform">
              {/* Paper content */}
              <motion.div
                initial={animationsEnabled ? { opacity: 0, y: 10 } : { opacity: 1, y: 0 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    duration: animationsEnabled ? 0.6 : 0, 
                    delay: animationsEnabled ? 0.8 : 0 
                  }
                }}
                className="text-center"
              >
                <h2 className="text-3xl md:text-4xl font-display italic text-yellow-600 mb-4 leading-tight">
                  You're Invited!
                </h2>
                <p className="text-lg md:text-xl text-gray-700 font-script italic leading-relaxed">
                  Join us as we embark on our greatest adventure together - 
                  a celebration of love, laughter, and happily ever after
                </p>
                
                {/* Decorative elements */}
                <div className="mt-6 flex items-center justify-center space-x-2">
                  <div className="w-12 h-px bg-gray-400"></div>
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <div className="w-12 h-px bg-gray-400"></div>
                </div>
                
                {/* Paper texture lines */}
                <div className="absolute inset-0 pointer-events-none opacity-10">
                  <div className="h-full w-full bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EnvelopeAnimation;