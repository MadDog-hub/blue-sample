import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import { useAnimationContext } from '@/contexts/AnimationContext';

// Pirate images
import pirate1 from "@assets/image-removebg-preview_1759155973200.png";
import pirate2 from "@assets/image-removebg-preview (1)_1759155973199.png";
import pirate3 from "@assets/image-removebg-preview (2)_1759155973199.png";
import pirate4 from "@assets/image-removebg-preview (3)_1759155973198.png";
import pirate5 from "@assets/1f0bcba1-aa26-4aa2-867f-f86795755d62-removebg-preview (2)_1759155973200.png";

const InvitationRevealSection = () => {
  const { animationsEnabled } = useAnimationContext();
  const [removedCards, setRemovedCards] = useState<Set<number>>(new Set());
  
  const pirates = [
    {
      id: 1,
      image: pirate1,
      className: "relative",
    },
    {
      id: 2,
      image: pirate2,
      className: "relative",
    },
    {
      id: 3,
      image: pirate3,
      className: "relative",
    },
    {
      id: 4,
      image: pirate4,
      className: "relative",
    },
    {
      id: 5,
      image: pirate5,
      className: "relative",
    },
  ];

  const handleCardRemoved = (pirateId: number) => {
    setRemovedCards(prev => new Set(Array.from(prev).concat(pirateId)));
  };

  const allCardsRemoved = removedCards.size === pirates.length;

  return (
    <motion.section 
      className="section-hard-blue relative min-h-screen w-full overflow-hidden"
      initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={animationsEnabled ? { duration: 1, delay: 2.5 } : { duration: 0 }}
      data-testid="section-invitation-reveal"
    >
      {/* Instruction Text */}
      <motion.div 
        className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20 w-full max-w-md"
        initial={animationsEnabled ? { opacity: 0, y: -20 } : { opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={animationsEnabled ? { duration: 0.8, delay: 3.0 } : { duration: 0 }}
      >
        <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 mx-auto">
          <p className="text-white text-sm md:text-base font-medium text-center" data-testid="text-drag-instruction">
            🏴‍☠️ Drag away the pirates to reveal your invitation
          </p>
        </div>
      </motion.div>

      <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
        {/* Hidden Invitation Message */}
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center max-w-2xl mx-auto px-4 w-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={allCardsRemoved ? { 
            opacity: 1, 
            scale: 1,
            transition: { duration: 0.8, ease: "easeOut" }
          } : { 
            opacity: 0, 
            scale: 0.8 
          }}
          data-testid="text-invitation-message"
        >
          <h2 className="text-4xl md:text-6xl font-display italic text-white mb-6 leading-tight">
            You're Invited!
          </h2>
          <p className="text-xl md:text-2xl text-white/90 font-script italic leading-relaxed">
            Join us as we embark on our greatest adventure together - 
            a celebration of love, laughter, and happily ever after
          </p>
          <div className="mt-8 inline-flex items-center space-x-2">
            <div className="w-12 h-px bg-white/50"></div>
            <div className="w-3 h-3 bg-white/70 rounded-full animate-pulse"></div>
            <div className="w-12 h-px bg-white/50"></div>
          </div>
        </motion.div>

        {/* Draggable Pirate Images */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-0 flex-wrap">
          {pirates.map((pirate) => {
            if (removedCards.has(pirate.id)) return null;
            
            return (
              <DraggableCardBody 
                key={pirate.id}
                className={pirate.className}
                onDragEnd={() => handleCardRemoved(pirate.id)}
                noCard={true}
              >
                <img
                  src={pirate.image}
                  alt={`Pirate ${pirate.id}`}
                  className="pointer-events-none relative z-10 h-24 w-24 md:h-32 md:w-32 object-contain"
                  data-testid={`img-pirate-${pirate.id}`}
                />
              </DraggableCardBody>
            );
          })}
        </div>

        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-white rounded-full"></div>
          <div className="absolute top-1/3 right-1/3 w-24 h-24 border-2 border-white rotate-45"></div>
        </div>
      </DraggableCardContainer>
    </motion.section>
  );
};

export default InvitationRevealSection;