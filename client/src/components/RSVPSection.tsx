import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAnimationContext } from '@/contexts/AnimationContext';

const RSVPSection = () => {
  const { animationsEnabled } = useAnimationContext();
  return (
    <motion.section 
      id="rsvp" 
      className="section-pastel-blue py-20 px-4 relative overflow-hidden"
      initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={animationsEnabled ? { duration: 1, delay: 10.5 } : { duration: 0 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 border border-[#333333] rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 border border-[#333333] rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
      </div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Section Header */}
        <motion.div 
          className="mb-16"
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 10.8 } : { duration: 0 }}
        >
          <h2 className="text-5xl font-script italic font-black text-gold mb-8" data-testid="text-rsvp-title">
            Please RSVP
          </h2>
        </motion.div>

        {/* Main RSVP Content */}
        <motion.div 
          className="mb-12"
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 11.1 } : { duration: 0 }}
        >
          <div className="bg-card/30 border border-border rounded-xl p-12 shadow-soft hover-elegant">
            {/* RSVP Deadline */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-gold mb-2">RSVP Deadline</h3>
              <p className="text-lg text-muted-foreground">August 20, 2025</p>
            </div>

            {/* RSVP Message */}
            <div className="space-y-6 mb-8">
              <p className="text-xl font-script italic leading-relaxed text-[#041b49]" data-testid="text-rsvp-message">
                Your presence would make our day complete
              </p>
              <p className="text-xl font-script italic text-[#041b49] leading-relaxed" data-testid="text-rsvp-details">
                Please confirm your attendance by clicking the button below. 
                We're excited to celebrate this special moment with you!
              </p>
            </div>

            {/* RSVP Button */}
            <Button
              asChild
              size="lg"
              className="group relative px-16 py-6 text-lg font-script font-medium tracking-wide bg-primary hover:bg-primary/80 text-primary-foreground shadow-lg transition-all duration-300 border-2 border-primary overflow-hidden rounded-lg"
              data-testid="button-rsvp"
            >
              <a 
                href="https://ejkrizzarsvp.replit.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center w-full h-full z-10"
              >
                <span className="relative z-10 font-script italic">RSVP Now</span>
                <div className="absolute inset-0 from-transparent via-primary-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform skew-x-12 group-hover:animate-pulse bg-primary-foreground/10"></div>
              </a>
            </Button>

            {/* Decorative Elements */}
            <div className="mt-8 flex justify-center items-center space-x-4">
              <div className="w-12 h-px bg-primary/30"></div>
              <div className={`w-3 h-3 bg-primary rounded-full ${animationsEnabled ? 'animate-float' : ''}`}></div>
              <div className="w-12 h-px bg-primary/30"></div>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div 
          className="text-center max-w-2xl mx-auto"
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 11.4 } : { duration: 0 }}
        >
          <p className="text-lg leading-relaxed text-[#041b49]">
            Can't wait to celebrate with you! If you have any questions or special dietary requirements, please let us know when you RSVP.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default RSVPSection;