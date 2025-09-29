import { useEffect, useRef, useState } from 'react';

import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ImageLoop from '@/components/ImageLoop';
import MusicConsentPopup from '@/components/MusicConsentPopup';
// Cover images from Cloudinary
const cover1Image = 'https://res.cloudinary.com/dbciwaal4/image/upload/v1759151636/cover1_zwn56x.png';
const cover2Image = 'https://res.cloudinary.com/dbciwaal4/image/upload/v1759151637/cover2_wafyjj.png';
const cover3Image = 'https://res.cloudinary.com/dbciwaal4/image/upload/v1759151637/cover3_iztttx.png';
import CountdownSection from '@/components/CountdownSection';
import StorySection from '@/components/StorySection';
import VideoSection from '@/components/VideoSection';
import ScrollTriggeredTimeline from '@/components/ScrollTriggeredTimeline';
import VenueSection from '@/components/VenueSection';
import DressCodeSection from '@/components/DressCodeSection';
import EntourageSection from '@/components/EntourageSection';
import GiftSection from '@/components/GiftSection';
import RSVPSection from '@/components/RSVPSection';
import MemorableMomentsSection from '@/components/MemorableMomentsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import CoverSection from '@/components/CoverSection';
import InvitationRevealSection from '@/components/InvitationRevealSection';
import MusicControl from '@/components/MusicControl';
import { AnimationContext } from '@/contexts/AnimationContext';

const Index = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [showMusicConsent, setShowMusicConsent] = useState(true);
  const [musicConsent, setMusicConsent] = useState<boolean | null>(null);
  const [animationsEnabled, setAnimationsEnabled] = useState(false);

  // Ensure audio is properly initialized
  useEffect(() => {
    if (audioRef.current) {
      const audio = audioRef.current;
      audio.volume = 0.3;
      audio.loop = true;
      
      // Handle audio loading
      const handleCanPlay = () => {
        console.log('Audio is ready to play');
      };
      
      const handleError = (e: Event) => {
        console.error('Audio loading error:', e);
      };
      
      const handleLoadedData = () => {
        console.log('Audio data loaded successfully');
      };
      
      audio.addEventListener('canplay', handleCanPlay);
      audio.addEventListener('error', handleError);
      audio.addEventListener('loadeddata', handleLoadedData);
      
      return () => {
        audio.removeEventListener('canplay', handleCanPlay);
        audio.removeEventListener('error', handleError);
        audio.removeEventListener('loadeddata', handleLoadedData);
      };
    }
  }, []);

  const handleMusicConsent = (consent: boolean) => {
    setMusicConsent(consent);
    setShowMusicConsent(false);
    // Enable animations regardless of music choice - user has interacted
    setAnimationsEnabled(true);
    
    // Music will now be controlled via the MusicControl component
    // No auto-start functionality
  };

  return (
    <AnimationContext.Provider value={{ animationsEnabled }}>
      {/* Background Music - Always present */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        crossOrigin="anonymous"
        style={{ display: 'none' }}
        data-testid="background-audio"
      >
        <source 
          src="https://res.cloudinary.com/dy7exe5ds/video/upload/v1757838604/ytmp3free.cc_brian-mcknight-marry-your-daughter-lyrics-youtubemp3free.org_rw2sfr.mp3" 
          type="audio/mpeg"
        />
        {/* Fallback for browsers that don't support MP3 */}
        <source 
          src="https://www.soundjay.com/misc/sounds/clock-ticking-5.wav" 
          type="audio/wav"
        />
        Your browser does not support the audio element.
      </audio>
      
      {/* Music Consent Popup */}
      {showMusicConsent && <MusicConsentPopup onConsent={handleMusicConsent} />}

      <div className="min-h-screen relative">
        <Navigation />
        
        {/* Main Content Sections */}
        <main className="relative z-10">
          <HeroSection />
          <InvitationRevealSection />
          <CountdownSection />
          <ImageLoop />
          <StorySection />
          <CoverSection 
            imageUrl={cover1Image}
            alt="Andrei & Sam Wedding Cover Image 1"
          />
          <VideoSection />
          <ScrollTriggeredTimeline />
          <VenueSection />
          <CoverSection 
            imageUrl={cover2Image}
            alt="Andrei & Sam Wedding Cover Image 2"
          />
          <DressCodeSection />
          <MemorableMomentsSection />
          <RSVPSection />
          <EntourageSection />
          <GiftSection />
          <CoverSection 
            imageUrl={cover3Image}
            alt="Andrei & Sam Wedding Cover Image 3"
          />
          <FAQSection />
          <Footer />
        </main>
        
        {/* Music Control - only show if music consent was given */}
        {musicConsent && <MusicControl audioRef={audioRef} />}
      </div>
    </AnimationContext.Provider>
  );
};

export default Index;