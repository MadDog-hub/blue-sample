"use client";
import { Button } from '@/components/ui/button';
import { MapPin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAnimationContext } from '@/contexts/AnimationContext';
import { LinkPreview } from '@/components/ui/link-preview';

const VenueSection = () => {
  const { animationsEnabled } = useAnimationContext();
  const venues = [
    {
      title: 'Ceremony',
      name: 'The Archdiocesan Shrine of the Most Sacred Heart of Jesus',
      address: 'Cebu City, Philippines',
      image: 'https://res.cloudinary.com/dpzxdmqqg/image/upload/v1755332551/Sacred_Heart_of_Jesus_Parish_zx6fb0.jpg',
      mapUrl: 'https://maps.app.goo.gl/FZX2vwdMSoH9J7VLA',
      description: 'We will exchange vows at the beautiful Archdiocesan Shrine of the Most Sacred Heart of Jesus.',
      details: 'Please arrive early to ensure you are seated before the ceremony begins.',
      additionalInfo: 'UNPLUGGED CEREMONY - We kindly ask that the ceremony be camera-free so everyone can be fully present in the moment.',
      startTime: '1:30 PM',
      locationGuide: 'Location Guide →'
    },
    {
      title: 'Reception',
      name: 'Summit Galleria Cebu',
      address: 'Cebu City, Philippines',
      image: 'https://res.cloudinary.com/dpzxdmqqg/image/upload/v1755332552/Summit_Galleria_s1wqmg.jpg',
      mapUrl: 'https://maps.app.goo.gl/PmoM3L4xdNqv2p4m6',
      description: 'Please join us for dinner, cocktails and dancing!',
      details: 'After the ceremony, we will move to the reception venue for the celebration.',
      website: '',
      startTime: '5:00 PM',
      locationGuide: 'Location Guide →'
    }
  ];

  return (
    <motion.section 
      id="venue" 
      className="section-hard-blue py-20 px-4"
      initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={animationsEnabled ? { duration: 1, delay: 6.5 } : { duration: 0 }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-20"
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 6.8 } : { duration: 0 }}
        >
          <h1 className="text-5xl font-display italic text-primary-foreground mb-8" data-testid="text-venue-section-title">
            Venue
          </h1>
        </motion.div>
        {/* Venues List */}
        <div className="space-y-20">
          {venues.map((venue, index) => (
            <motion.div 
              key={index}
              initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 6.8 + (index * 0.4) } : { duration: 0 }}
            >
              {/* Venue Title */}
              <motion.div 
                className="text-center mb-12"
                initial={animationsEnabled ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={animationsEnabled ? { duration: 0.6, ease: "easeOut", delay: 7.0 + (index * 0.4) } : { duration: 0 }}
              >
                <h2 className="font-script italic text-primary-foreground mb-4 text-[35px]" data-testid={`text-${venue.title.toLowerCase()}-title`}>
                  {venue.title}
                </h2>
                <h3 className="font-body text-primary-foreground mb-4 text-lg" data-testid={`text-${venue.title.toLowerCase()}-name`}>
                  {venue.name}
                </h3>
              </motion.div>

              {/* Venue Content */}
              <div className="max-w-lg mx-auto text-center space-y-6">
                {/* Venue Image */}
                <div className="mb-8">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-48 object-cover rounded-lg shadow-sm"
                    loading="lazy"
                    data-testid={`img-${venue.title.toLowerCase()}-venue`}
                  />
                </div>

                {/* Description */}
                <div className="space-y-3 mb-8">
                  {venue.description.split('\n').map((line, i) => (
                    <p key={i} className="text-base font-body text-primary-foreground/90 leading-relaxed" data-testid={`text-${venue.title.toLowerCase()}-description-${i + 1}`}>
                      {line}
                    </p>
                  ))}
                </div>

                {/* Details */}
                <p className="text-base font-body text-primary-foreground/90" data-testid={`text-${venue.title.toLowerCase()}-details`}>
                  {venue.details}
                </p>

                

                {venue.website && (
                  <p className="text-base font-body text-primary-foreground/90" data-testid={`text-${venue.title.toLowerCase()}-website`}>
                    {venue.website}
                  </p>
                )}

                {/* Time and Location Guide */}
                <div className="flex justify-between items-center pt-6 border-t border-primary-foreground/20">
                  <div className="text-left">
                    <p className="text-sm font-body text-primary-foreground/80 italic" data-testid={`text-${venue.title.toLowerCase()}-start-time`}>
                      Start time {venue.startTime}
                    </p>
                  </div>
                  <div className="text-right">
                    <LinkPreview
                      url={venue.mapUrl}
                      className="location-guide-btn font-body text-primary-foreground/90 hover:text-primary-foreground transition-colors duration-200"
                      data-testid={`button-${venue.title.toLowerCase()}-location`}
                    >
                      {venue.locationGuide}
                    </LinkPreview>
                  </div>
                </div>


              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Unplugged Ceremony Note */}
        <motion.div 
          className="mt-16 text-center bg-card/30 border border-border rounded-xl p-8 max-w-4xl mx-auto"
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 8.4 } : { duration: 0 }}
        >
          <h3 className="text-2xl font-display text-primary-foreground mb-4 font-medium">Unplugged Ceremony</h3>
          <p className="text-base font-body text-primary-foreground/90 leading-relaxed mb-4">
            We kindly ask that the ceremony be camera-free so everyone can be fully present in the moment. Once we move to the reception venue, please feel free to take as many photos and videos as you like—we'd love for you to help us capture more memories!
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default VenueSection;