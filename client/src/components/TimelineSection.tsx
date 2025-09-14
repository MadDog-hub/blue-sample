import { Clock, Camera, Coffee, Utensils, Music, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAnimationContext } from '@/contexts/AnimationContext';


// Simple Timeline Item Component
const TimelineItem = ({ event, index }: { event: any; index: number }) => {
  const { animationsEnabled } = useAnimationContext();
  const IconComponent = event.icon;

  return (
    <motion.div 
      className="flex items-center justify-center mb-8"
      initial={animationsEnabled ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={animationsEnabled ? { duration: 0.6, delay: index * 0.1 } : { duration: 0 }}
      data-testid={`item-timeline-${index}`}
    >
      <div className="flex items-center gap-4 px-2 py-2 min-w-fit">
        <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
          <IconComponent className="w-5 h-5 text-primary" />
        </div>
        <div className="text-xl font-display font-medium text-primary">
          {event.time}
        </div>
        <div className="hidden sm:block w-px h-6 bg-border mx-2"></div>
        <div className="text-lg font-body text-muted-foreground">
          {event.event}
        </div>
      </div>
    </motion.div>
  );
};

const TimelineSection = () => {
  const { animationsEnabled } = useAnimationContext();
  const timelineEvents = [
    {
      time: '1:00 PM',
      event: 'Guest Arrival & Processional',
      icon: Clock
    },
    {
      time: '1:30 PM',
      event: 'Sacred Wedding Ceremony',
      icon: Heart
    },
    {
      time: '3:00 PM',
      event: 'Cocktails & Photography',
      icon: Camera
    },
    {
      time: '5:00 PM',
      event: 'Dinner & Heartfelt Toasts',
      icon: Utensils
    },
    {
      time: '8:00 PM',
      event: 'Dancing Under the Stars',
      icon: Music
    }
  ];


  return (
    <motion.section 
      id="timeline" 
      className="section-pastel-blue relative py-20 px-4 overflow-hidden"
      initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={animationsEnabled ? { duration: 0.8, ease: "easeOut" } : { duration: 0 }}
    >
      {/* Enhanced Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-[#333333] rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-[#333333] rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 border-2 border-[#333333] rotate-45"></div>
        <div className="absolute bottom-1/3 left-1/5 w-16 h-16 border border-[#333333] rounded-full"></div>
        <div className={`absolute top-1/2 left-1/6 w-6 h-6 bg-[#333333] rounded-full ${animationsEnabled ? 'animate-pulse' : ''}`}></div>
        <div className="absolute bottom-1/2 right-1/5 w-8 h-8 bg-[#333333] rotate-45"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 left-10 w-2 h-2 bg-white/20 rounded-full ${animationsEnabled ? 'animate-bounce' : ''}`} style={{animationDelay: '0s', animationDuration: '3s'}}></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-white/30 rounded-full animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-white/15 rounded-full animate-bounce" style={{animationDelay: '2s', animationDuration: '3.5s'}}></div>
        <div className="absolute bottom-20 right-32 w-1.5 h-1.5 bg-white/25 rounded-full animate-bounce" style={{animationDelay: '0.5s', animationDuration: '2.5s'}}></div>
      </div>

      {/* Header Section */}
      <div className="relative z-10 text-center mb-16">
        <motion.div 
          className="text-center max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-5xl font-display italic text-primary mb-8" data-testid="text-timeline-title">
            Wedding Timeline
          </h2>
        </motion.div>
      </div>

      {/* Simple Timeline List */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 space-y-4">
        {timelineEvents.map((event, index) => (
          <TimelineItem key={index} event={event} index={index} />
        ))}
      </div>

      {/* Bottom Decorative */}
      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="inline-flex items-center space-x-2">
          <div className="w-8 h-px bg-[#ffffff]"></div>
          <div className="w-2 h-2 bg-[#ffffff] rounded-full animate-pulse"></div>
          <div className="w-8 h-px bg-[#ffffff]"></div>
        </div>
        <p className="mt-4 text-muted-foreground font-body italic">
          A celebration of love from dusk till dawn
        </p>
      </motion.div>
    </motion.section>
  );
};

export default TimelineSection;