import { useEffect, useRef, useState } from 'react';

import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ImageLoop from '@/components/ImageLoop';
import MusicConsentPopup from '@/components/MusicConsentPopup';
import loop2Image from '@assets/loop2_1757830927003.png';
import loop3Image from '@assets/loop3_1757830927004.png';
import loop4Image from '@assets/loop4_1757830927004.png';
import CountdownSection from '@/components/CountdownSection';
import StorySection from '@/components/StorySection';
import VideoSection from '@/components/VideoSection';
import TimelineSection from '@/components/TimelineSection';
import VenueSection from '@/components/VenueSection';
import DressCodeSection from '@/components/DressCodeSection';
import EntourageSection from '@/components/EntourageSection';
import GiftSection from '@/components/GiftSection';
import RSVPSection from '@/components/RSVPSection';
import MemorableMomentsSection from '@/components/MemorableMomentsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import CoverSection from '@/components/CoverSection';
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
    
    if (consent && audioRef.current) {
      const audio = audioRef.current;
      
      // Set audio properties
      audio.volume = 0.3;
      audio.loop = true;
      
      // First check if the audio source is valid
      console.log('Checking audio source:', audio.src);
      console.log('Audio ready state:', audio.readyState);
      
      // Function to attempt playing
      const attemptPlay = () => {
        console.log('Attempting to play background music...');
        
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise.then(() => {
            console.log('Background music started successfully');
          }).catch((error) => {
            console.error('Music play failed:', {
              message: error.message,
              name: error.name,
              code: error.code
            });
            
            // Set up interaction listeners with better cleanup
            setupInteractionListeners();
          });
        } else {
          console.log('Play promise is undefined, setting up interaction listeners');
          setupInteractionListeners();
        }
      };
      
      // Function to set up interaction listeners
      const setupInteractionListeners = () => {
        console.log('Setting up interaction listeners...');
        
        const interactionEvents = ['click', 'touchstart', 'keydown', 'mousedown'];
        const playOnInteraction = () => {
          console.log('User interaction detected, attempting to play music...');
          
          const retryPromise = audio.play();
          if (retryPromise !== undefined) {
            retryPromise.then(() => {
              console.log('Music started successfully on user interaction');
              // Remove all listeners
              interactionEvents.forEach(event => {
                document.removeEventListener(event, playOnInteraction);
              });
            }).catch((err) => {
              console.error('Failed to play music on interaction:', {
                message: err.message,
                name: err.name,
                readyState: audio.readyState,
                networkState: audio.networkState
              });
            });
          }
        };
        
        // Add listeners
        interactionEvents.forEach(event => {
          document.addEventListener(event, playOnInteraction, { 
            passive: true, 
            once: true 
          });
        });
      };
      
      // Check if audio is ready
      if (audio.readyState >= 2) {
        // Audio is loaded enough to play
        attemptPlay();
      } else {
        // Wait for audio to be ready
        const onCanPlay = () => {
          audio.removeEventListener('canplay', onCanPlay);
          attemptPlay();
        };
        
        const onError = (e: Event) => {
          audio.removeEventListener('error', onError);
          console.error('Audio loading failed:', e);
          console.log('Audio network state:', audio.networkState);
          console.log('Audio error:', audio.error);
        };
        
        audio.addEventListener('canplay', onCanPlay);
        audio.addEventListener('error', onError);
        
        // Force load the audio
        audio.load();
      }
    }
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
          <CountdownSection />
          <ImageLoop />
          <StorySection />
          <CoverSection 
            imageUrl={loop2Image}
            alt="Andrei & Sam Wedding Cover Image 1"
          />
          <VideoSection />
          <TimelineSection />
          <VenueSection />
          <CoverSection 
            imageUrl={loop3Image}
            alt="Andrei & Sam Wedding Cover Image 2"
          />
          <DressCodeSection />
          <MemorableMomentsSection />
          <RSVPSection />
          <EntourageSection />
          <GiftSection />
          <CoverSection 
            imageUrl={loop4Image}
            alt="Andrei & Sam Wedding Cover Image 3"
          />
          <FAQSection />
          <Footer />
        </main>
      </div>
    </AnimationContext.Provider>
  );
};

export default Index;