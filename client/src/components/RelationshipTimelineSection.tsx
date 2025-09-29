import { motion } from 'framer-motion';
import { Timeline } from "@/components/ui/timeline";
import { useAnimationContext } from '@/contexts/AnimationContext';

// Relationship milestone images
const milestone1 = 'https://res.cloudinary.com/dbciwaal4/image/upload/v1759151635/prenup2_ip3kvf.png';
const milestone2 = 'https://res.cloudinary.com/dbciwaal4/image/upload/v1759151635/prenup3_szk2ej.png';
const milestone3 = 'https://res.cloudinary.com/dbciwaal4/image/upload/v1759151637/prenup1_uy0r6d.png';
const milestone4 = 'https://res.cloudinary.com/dbciwaal4/image/upload/v1759151635/prenup4_qg5qgx.png';

const RelationshipTimelineSection = () => {
  const { animationsEnabled } = useAnimationContext();

  const data = [
    {
      title: "2019",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Our paths crossed in the most unexpected way. What started as a chance encounter 
            became the beginning of something beautiful. Two hearts finding each other 
            among millions of people.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={milestone1}
              alt="Our first meeting"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              data-testid="img-timeline-2019"
            />
            <img
              src={milestone2}
              alt="Getting to know each other"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              data-testid="img-timeline-2019-2"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Through adventures and quiet moments, challenges and celebrations, 
            we discovered that love isn't just about the butterflies - it's about 
            choosing each other every single day.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            From late-night conversations to weekend adventures, we built a foundation 
            of friendship that would become the cornerstone of our love story.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={milestone3}
              alt="Growing together"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              data-testid="img-timeline-2021"
            />
            <img
              src={milestone4}
              alt="Adventures together"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              data-testid="img-timeline-2021-2"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            The year everything changed. The proposal, the planning, the dreams becoming reality.
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              💍 The proposal that started it all
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              💒 Choosing our perfect venue
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              👗 Finding the perfect dress
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              📸 Capturing our love story in photos
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              💌 Sending invitations to our loved ones
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={milestone1}
              alt="Engagement photos"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              data-testid="img-timeline-2024"
            />
            <img
              src={milestone3}
              alt="Wedding planning"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              data-testid="img-timeline-2024-2"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <motion.section 
      id="relationship-timeline" 
      className="section-pastel-blue relative w-full overflow-hidden"
      initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={animationsEnabled ? { duration: 1, delay: 3.5 } : { duration: 0 }}
    >
      {/* Section Header */}
      <div className="text-center py-12 px-4 bg-gradient-to-b from-white/5 to-transparent">
        <motion.h2 
          className="text-5xl font-script italic font-black text-primary mb-4" 
          data-testid="text-relationship-timeline-title"
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 3.8 } : { duration: 0 }}
        >
          Our Journey Together
        </motion.h2>
        <motion.p 
          className="text-lg text-primary/80 max-w-2xl mx-auto"
          initial={animationsEnabled ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 4.0 } : { duration: 0 }}
        >
          From strangers to soulmates - every step of our love story
        </motion.p>
      </div>
      
      {/* Timeline Component */}
      <motion.div 
        className="relative w-full overflow-clip"
        initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={animationsEnabled ? { duration: 0.8, delay: 4.2 } : { duration: 0 }}
      >
        <Timeline data={data} />
      </motion.div>
    </motion.section>
  );
};

export default RelationshipTimelineSection;