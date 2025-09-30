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
            <div className={`rounded-lg shadow-2xl p-8 w-full max-w-6xl mx-auto transform ${
              isPremium 
                ? 'bg-gradient-to-br from-amber-50 via-white to-amber-50 border-4 border-amber-400' 
                : 'bg-white border border-gray-200'
            }`}>
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
                    <div className="absolute top-0 left-0 right-0 flex justify-center">
                      <div className="flex gap-4">
                        <span className="text-4xl animate-bounce" style={{ animationDelay: '0s' }}>✨</span>
                        <span className="text-4xl animate-bounce" style={{ animationDelay: '0.2s' }}>🎉</span>
                        <span className="text-4xl animate-bounce" style={{ animationDelay: '0.4s' }}>✨</span>
                      </div>
                    </div>
                    
                    <div className="mt-12 mb-6">
                      <motion.div
                        animate={animationsEnabled ? { 
                          scale: [1, 1.05, 1],
                          rotate: [0, 2, -2, 0]
                        } : {}}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                      >
                        <h2 className="text-5xl md:text-6xl font-display italic bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 bg-clip-text text-transparent mb-6 leading-tight">
                          You're Our VIP Guest!
                        </h2>
                      </motion.div>
                      
                      <div className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 h-1 w-32 mx-auto rounded-full mb-6"></div>
                      
                      <p className="text-xl md:text-2xl text-gray-800 italic leading-relaxed font-semibold mb-4" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                        🎊 Amazing! You know us so well! 🎊
                      </p>
                      
                      <p className="text-lg md:text-xl text-gray-700 italic leading-relaxed mb-6" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                        Come witness the moment we tie the knot and start our greatest adventure together — with love, laughter, and a lifetime of memories.
                      </p>
                      
                      <div className="bg-amber-100 rounded-xl p-6 border-2 border-amber-300 shadow-lg">
                        <p className="text-2xl font-bold text-amber-800 mb-2">
                          {score === 5 ? '🏆 Perfect Score!' : '⭐ Amazing Score!'}
                        </p>
                        <p className="text-lg text-amber-700">
                          {score === 5 
                            ? "You've earned the most spectacular invitation!" 
                            : `You got ${score}/5 correct! You really know them well!`}
                        </p>
                      </div>
                    </div>
                    
                    {/* Premium decorative elements */}
                    <div className="mt-8 flex items-center justify-center space-x-3">
                      <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full"
                      />
                      <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
                    </div>
                    
                    {/* Sparkle effects */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                      <motion.div
                        animate={{ 
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0.5],
                          y: [-10, -30]
                        }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                        className="absolute top-10 left-1/4 text-3xl"
                      >⭐</motion.div>
                      <motion.div
                        animate={{ 
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0.5],
                          y: [-10, -30]
                        }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1.5 }}
                        className="absolute top-20 right-1/4 text-3xl"
                      >💫</motion.div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Normal Design - 0-3 Score */}
                    <h2 className="text-3xl md:text-4xl font-display italic text-yellow-600 mb-4 leading-tight">
                      You're Invited!
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 italic leading-relaxed" style={{ fontFamily: 'Times, "Times New Roman", serif' }}>
                      Come witness the moment we tie the knot and start our greatest adventure together — with love, laughter, and a lifetime of memories.
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