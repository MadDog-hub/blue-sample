import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { useAnimationContext } from '@/contexts/AnimationContext';
import OceanStickers from '@/components/OceanStickers';
// Story images from new Cloudinary collection
const storyImage1 = 'https://res.cloudinary.com/dbciwaal4/image/upload/v1759151637/prenup1_uy0r6d.png';
const storyImage2 = 'https://res.cloudinary.com/dbciwaal4/image/upload/v1759151635/prenup2_ip3kvf.png';
const storyImage3 = 'https://res.cloudinary.com/dbciwaal4/image/upload/v1759151638/imageloop1_o4jrga.png';
const storyImage4 = 'https://res.cloudinary.com/dbciwaal4/image/upload/v1759151638/imageloop3_oujpxp.png';
const storyImage5 = 'https://res.cloudinary.com/dbciwaal4/image/upload/v1759151635/prenup4_qg5qgx.png';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const StorySection = () => {
  const { animationsEnabled } = useAnimationContext();
  const containerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState<{ [key: number]: { x: number; y: number } }>({});

  const storyCards = [
    {
      id: 1,
      title: "First Meeting",
      text: "Two hearts found each other in the most unexpected way. From strangers to friends, we discovered something special.",
      image: storyImage1
    },
    {
      id: 2, 
      title: "Growing Together",
      text: "We learned that love isn't just about the big moments—it's in the daily laughter, shared dreams, and quiet support.",
      image: storyImage2
    },
    {
      id: 3,
      title: "Adventures & Challenges", 
      text: "Through every adventure and challenge, we've grown stronger. Running side by side through life's journey.",
      image: storyImage3
    },
    {
      id: 4,
      title: "The Decision",
      text: "We knew we wanted to spend forever together. This isn't just our wedding day—it's the beginning of our greatest adventure.",
      image: storyImage4
    },
    {
      id: 5,
      title: "Our Future",
      text: "Today we celebrate not just our love, but all the beautiful tomorrows waiting for us. Hand in hand, heart to heart.",
      image: storyImage5
    }
  ];

  useEffect(() => {
    const container = containerRef.current;
    const horizontal = horizontalRef.current;

    if (!container || !horizontal || !animationsEnabled) return;

    // Create horizontal scrolling animation with dynamic width calculation
    const horizontalScrollTween = gsap.to(horizontal, {
      x: () => -(horizontal.scrollWidth - container.offsetWidth),
      ease: "none",
    });

    // Create ScrollTrigger with dynamic end calculation
    const scrollTriggerInstance = ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: () => `+=${horizontal.scrollWidth - container.offsetWidth}`,
      pin: true,
      scrub: 1,
      animation: horizontalScrollTween,
      invalidateOnRefresh: true,
      anticipatePin: 1,
    });

    // Refresh ScrollTrigger after images and fonts load
    const handleRefresh = () => {
      ScrollTrigger.refresh();
    };

    // Add load listener for window to refresh after fonts and lazy images
    window.addEventListener('load', handleRefresh);

    // Add load listeners to all images to refresh after each image loads
    const images = horizontal.querySelectorAll('img');
    images.forEach(img => {
      if (!img.complete) {
        img.addEventListener('load', handleRefresh, { once: true });
      }
    });

    // Initial refresh to handle any already loaded content
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    // Animate story cards on load
    gsap.fromTo(".story-card", {
      opacity: 0,
      y: 50,
      scale: 0.9
    }, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".story-card",
        start: "top 80%",
      }
    });

    return () => {
      window.removeEventListener('load', handleRefresh);
      images.forEach(img => {
        img.removeEventListener('load', handleRefresh);
      });
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [animationsEnabled]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, cardId: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition(prev => ({
      ...prev,
      [cardId]: { x, y }
    }));
  };

  const handleMouseLeave = (cardId: number) => {
    setMousePosition(prev => {
      const newPosition = { ...prev };
      delete newPosition[cardId];
      return newPosition;
    });
  };

  return (
    <motion.section 
      id="story" 
      className="section-hard-blue relative overflow-hidden"
      initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={animationsEnabled ? { duration: 1, delay: 3.5 } : { duration: 0 }}
    >
      {/* Ocean Stickers */}
      <OceanStickers variant="section" density="light" />
      {/* SVG Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating SVG Elements */}
        <svg className="absolute top-20 right-20 w-24 h-24 text-primary-foreground/30 animate-pulse" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.04L12,21.35Z"/>
        </svg>

        <svg className="absolute bottom-32 left-16 w-16 h-16 text-primary-foreground/20 animate-bounce" viewBox="0 0 24 24" style={{ animationDelay: '1s' }}>
          <path fill="currentColor" d="M9,11H15L13,13L15,15H9L11,13L9,11M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z"/>
        </svg>
      </div>
      {/* Header */}
      <div className="text-center py-16 sm:py-20 px-4 relative z-10">
        <motion.div
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 3.8 } : { duration: 0 }}
        >
          <h2 className="text-4xl sm:text-5xl font-script italic font-black text-gold-bright mb-6 sm:mb-8" data-testid="text-story-title">
            Our Story
          </h2>
          <p className="text-base sm:text-lg text-primary-foreground max-w-2xl mx-auto mb-4">
            Scroll vertically to journey through our love story horizontally
          </p>
          
          {/* SVG Arrow Indicator */}
          <div className="flex items-center justify-center space-x-4 mt-6 sm:mt-8">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground animate-bounce" viewBox="0 0 24 24">
              <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
            </svg>
            <span className="text-xs sm:text-sm text-primary-foreground">Scroll down</span>
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground animate-pulse" viewBox="0 0 24 24">
              <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
            </svg>
          </div>
        </motion.div>
      </div>
      {/* Horizontal Scrolling Container */}
      <div 
        ref={containerRef} 
        className="relative overflow-x-hidden overflow-y-visible"
        style={{ height: '100vh' }}
      >
        <div 
          ref={horizontalRef}
          className="flex h-full items-center"
          style={{ width: `${storyCards.length * 100 + 100}vw` }}
        >
          {/* Story Cards */}
          {storyCards.map((card, index) => (
            <div
              key={card.id}
              className="story-card flex-shrink-0 w-screen h-full flex items-center justify-center px-4 sm:px-8 py-8 sm:py-12"
            >
              <div 
                className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center h-full relative overflow-hidden rounded-3xl p-8 transition-all duration-300 bg-black/5 dark:bg-white/5 border border-white/10 backdrop-blur-sm"
                style={{
                  background: mousePosition[card.id] 
                    ? `radial-gradient(600px circle at ${mousePosition[card.id].x}px ${mousePosition[card.id].y}px, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.02) 40%), rgba(0, 0, 0, 0.05)`
                    : 'rgba(0, 0, 0, 0.05)'
                }}
                onMouseMove={(e) => handleMouseMove(e, card.id)}
                onMouseLeave={() => handleMouseLeave(card.id)}
                data-testid={`card-story-${card.id}`}
              >
                {/* Content */}
                <div className={`space-y-6 sm:space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary-foreground rounded-full mb-4 sm:mb-6">
                    <span className="font-bold text-lg sm:text-xl md:text-2xl text-[#ffcb1f]">{card.id}</span>
                  </div>
                  
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-script italic text-gold-bright mb-4 sm:mb-6" data-testid={`text-story-card-${card.id}-title`}>
                    {card.title}
                  </h3>
                  
                  <p className="text-lg sm:text-xl text-primary-foreground leading-relaxed" data-testid={`text-story-card-${card.id}-text`}>
                    {card.text}
                  </p>

                  {/* SVG Decorative Element */}
                  <div className="flex items-center space-x-4 pt-4 sm:pt-6">
                    <div className="w-12 sm:w-16 h-px bg-primary-foreground/60"></div>
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary-foreground/70" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.04L12,21.35Z"/>
                    </svg>
                    <div className="w-12 sm:w-16 h-px bg-primary-foreground/60"></div>
                  </div>
                </div>

                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-square max-w-[70vw] sm:max-w-sm md:max-w-md mx-auto relative">
                    {/* Square image with rounded corners on all screen sizes */}
                    <img
                      src={card.image}
                      alt={`Story moment ${index + 1}`}
                      className="w-full h-full object-cover rounded-2xl shadow-lg"
                      data-testid={`img-story-card-${card.id}`}
                    />

                    {/* Floating decorative elements */}
                    <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground/70 animate-spin" style={{ animationDuration: '10s' }} viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12,2L13.09,8.26L22,9L13.09,9.74L12,16L10.91,9.74L2,9L10.91,8.26L12,2Z"/>
                      </svg>
                    </div>

                    <div className="absolute -bottom-1 sm:-bottom-2 -left-1 sm:-left-2">
                      <svg className="w-4 h-4 sm:w-6 sm:h-6 text-primary-foreground/60 animate-pulse" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.04L12,21.35Z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Final "The Vow" Section */}
          <div className="story-card flex-shrink-0 w-screen h-full flex items-center justify-center px-4 sm:px-8 py-8 sm:py-12">
            <div className="max-w-4xl mx-auto text-center relative">
              {/* Background SVG */}
              <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 800 600">
                <defs>
                  <radialGradient id="vowGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="hsl(var(--primary-foreground))" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="hsl(var(--primary-foreground))" stopOpacity="0"/>
                  </radialGradient>
                </defs>
                <circle cx="400" cy="300" r="250" fill="url(#vowGradient)"/>
                
                {/* Decorative hearts */}
                <g className="animate-pulse">
                  <path d="M200,150 C200,140 185,130 175,140 C165,130 155,140 155,150 C155,160 175,180 200,200 C225,180 245,160 245,150 C245,140 235,130 225,140 C215,130 200,140 200,150 Z" 
                        fill="hsl(var(--primary-foreground))" opacity="0.2"/>
                  <path d="M600,450 C600,440 585,430 575,440 C565,430 555,440 555,450 C555,460 575,480 600,500 C625,480 645,460 645,450 C645,440 635,430 625,440 C615,430 600,440 600,450 Z" 
                        fill="hsl(var(--primary-foreground))" opacity="0.2"/>
                </g>
              </svg>

              <div className="relative z-10 space-y-6 sm:space-y-8">
                <h3 className="text-4xl sm:text-5xl md:text-6xl font-script italic font-black text-gold-bright mb-6 sm:mb-8" data-testid="text-story-vow-title">
                  The Vow
                </h3>
                
                <div className="max-w-2xl mx-auto">
                  <p className="text-xl sm:text-2xl text-primary-foreground leading-relaxed italic">
                    "To love, to cherish, and to build a beautiful life together—this is our promise, today and always."
                  </p>
                </div>
                
                {/* SVG Hearts decoration */}
                <div className="flex justify-center items-center space-x-4 sm:space-x-6 mt-8 sm:mt-12">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground animate-pulse" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.04L12,21.35Z"/>
                  </svg>
                  <div className="w-16 sm:w-24 h-px bg-primary-foreground/60"></div>
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground animate-pulse" viewBox="0 0 24 24" style={{ animationDelay: '0.5s' }}>
                    <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.04L12,21.35Z"/>
                  </svg>
                  <div className="w-16 sm:w-24 h-px bg-primary-foreground/60"></div>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground animate-pulse" viewBox="0 0 24 24" style={{ animationDelay: '1s' }}>
                    <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.04L12,21.35Z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default StorySection;