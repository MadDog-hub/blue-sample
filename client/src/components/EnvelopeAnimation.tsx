import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface EnvelopeAnimationProps {
  isVisible: boolean;
  animationsEnabled: boolean;
  score?: number;
}

const EnvelopeAnimation = ({ isVisible, animationsEnabled, score = 0 }: EnvelopeAnimationProps) => {
  const [showPaper, setShowPaper] = useState(false);
  const isPremium = score >= 4;

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
          width="250" 
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
            <div className={`rounded-lg shadow-2xl p-4 md:p-6 w-full max-w-6xl mx-auto transform ${
              isPremium 
                ? 'bg-gradient-to-br from-amber-50 via-white to-amber-50 border-4 border-amber-400' 
                : 'bg-white border border-gray-200'
            }`} style={{ maxHeight: '80vh', overflowY: 'auto' }}>
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
                className="text-center relative"
              >
                {isPremium ? (
                  <>
                    {/* Premium Design - 4-5 Score */}
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <span className="text-2xl animate-bounce" style={{ animationDelay: '0s' }}>✨</span>
                      <span className="text-2xl animate-bounce" style={{ animationDelay: '0.2s' }}>🎉</span>
                      <span className="text-2xl animate-bounce" style={{ animationDelay: '0.4s' }}>✨</span>
                    </div>
                    
                    <motion.div
                      animate={animationsEnabled ? { 
                        scale: [1, 1.05, 1],
                        rotate: [0, 2, -2, 0]
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                    >
                      <h2 className="text-2xl md:text-3xl font-display italic bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 bg-clip-text text-transparent mb-2 leading-tight">
                        You Know Us So Well!
                      </h2>
                    </motion.div>
                    
                    <div className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 h-1 w-24 mx-auto rounded-full mb-3"></div>
                    
                    <p className="text-sm md:text-base text-gray-700 italic leading-relaxed mb-3" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                      Come witness the moment we tie the knot and start our greatest adventure together — with love, laughter, and a lifetime of memories.
                    </p>
                    
                    <div className="bg-amber-100 rounded-lg p-3 border-2 border-amber-300 shadow-lg inline-block">
                      <p className="text-base md:text-lg font-bold text-amber-800 mb-1">
                        {score === 5 ? '🏆 Perfect Score!' : '⭐ Amazing Score!'}
                      </p>
                      <p className="text-xs md:text-sm text-amber-700">
                        {score === 5 
                          ? "Your knowledge of our love story is incredible! We're touched by how well you know us." 
                          : `You got ${score}/5 correct! You really know us well!`}
                      </p>
                    </div>
                    
                    {/* Premium decorative elements */}
                    <div className="mt-4 flex items-center justify-center space-x-3">
                      <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="w-3 h-3 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full"
                      />
                      <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Normal Design - 0-3 Score */}
                    <h2 className="text-2xl md:text-3xl font-display italic text-yellow-600 mb-2 leading-tight">
                      You're Invited!
                    </h2>
                    <p className="text-sm md:text-base text-gray-700 italic leading-relaxed" style={{ fontFamily: 'Times, "Times New Roman", serif' }}>
                      Come witness the moment we tie the knot and start our greatest adventure together — with love, laughter, and a lifetime of memories.
                    </p>
                    
                    {/* Decorative elements */}
                    <div className="mt-4 flex items-center justify-center space-x-2">
                      <div className="w-12 h-px bg-gray-400"></div>
                      <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                      <div className="w-12 h-px bg-gray-400"></div>
                    </div>
                    
                    {/* Paper texture lines */}
                    <div className="absolute inset-0 pointer-events-none opacity-10">
                      <div className="h-full w-full bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
                    </div>
                  </>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EnvelopeAnimation;