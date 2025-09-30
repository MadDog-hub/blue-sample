import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAnimationContext } from '@/contexts/AnimationContext';
import OceanStickers from '@/components/OceanStickers';

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const { animationsEnabled } = useAnimationContext();

  useEffect(() => {
    const targetDate = new Date('September 7, 2026 13:00:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section 
      id="countdown" 
      className="section-pastel-blue pt-[10px] pb-20 px-4 relative overflow-hidden"
      initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={animationsEnabled ? { duration: 1, delay: 2.5 } : { duration: 0 }}
    >
      {/* Ocean Stickers */}
      <OceanStickers variant="section" density="medium" />
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <motion.div 
          className="mb-16"
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 0.3 } : { duration: 0 }}
        >
          <h2 className="text-5xl font-display italic text-gold mb-8" data-testid="text-countdown-title">
            Forever starts soon
          </h2>
        </motion.div>



        {/* Countdown Timer Grid */}
        <motion.div 
          className="grid grid-cols-4 gap-4 md:gap-8 max-w-lg mx-auto text-[#be7c09]"
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 0.6 } : { duration: 0 }}
        >
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds }
          ].map((item, index) => (
            <motion.div
              key={item.label}
              className="text-center"
              initial={animationsEnabled ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={animationsEnabled ? { 
                duration: 0.6, 
                ease: "easeOut", 
                delay: 0.8 + (index * 0.1) 
              } : { duration: 0 }}
              data-testid={`countdown-${item.label.toLowerCase()}`}
            >
              <motion.div 
                className="text-4xl md:text-5xl font-display font-bold mb-2 text-[#be7c09]"
                key={item.value}
                initial={animationsEnabled ? { opacity: 0.7, scale: 0.9 } : { opacity: 1, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={animationsEnabled ? { duration: 0.3 } : { duration: 0 }}
              >
                {item.value.toString().padStart(2, '0')}
              </motion.div>
              <div className="text-xs md:text-sm font-body uppercase tracking-wider text-foreground/60">
                {item.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative Elements */}
        <motion.div 
          className="mt-16 flex justify-center space-x-4"
          initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 1.4 } : { duration: 0 }}
        >
          <div className="w-12 h-px bg-[#1754cf]"></div>
          <div className={`w-2 h-2 rounded-full text-[#1754cf] bg-[#1754cf] ${animationsEnabled ? 'animate-float' : ''}`}></div>
          <div className="w-12 h-px bg-[#1754cf]"></div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CountdownSection;