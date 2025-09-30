import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAnimationContext } from '@/contexts/AnimationContext';
import EnvelopeAnimation from './EnvelopeAnimation';
import QuizGame from './QuizGame';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

const InvitationRevealSection = () => {
  const { animationsEnabled } = useAnimationContext();
  const [showButton, setShowButton] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  const handleOpenInvitation = () => {
    setShowButton(false);
    setTimeout(() => {
      setShowQuiz(true);
    }, animationsEnabled ? 500 : 0);
  };

  const handleQuizComplete = (score: number) => {
    setFinalScore(score);
    setQuizCompleted(true);
    setShowQuiz(false);
  };

  return (
    <motion.section 
      className="section-hard-blue relative min-h-screen w-full overflow-hidden px-4"
      initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={animationsEnabled ? { duration: 1, delay: 2.5 } : { duration: 0 }}
      data-testid="section-invitation-reveal"
    >
      <div className="relative flex min-h-screen w-full items-center justify-center">
        {/* Open Invitation Button */}
        {showButton && (
          <motion.div
            initial={animationsEnabled ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="z-20"
          >
            <Button
              onClick={handleOpenInvitation}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white/30 text-white text-xl md:text-2xl px-12 py-8 rounded-full shadow-2xl transition-all duration-300 hover:scale-105"
              data-testid="button-open-invitation"
            >
              <Heart className="w-6 h-6 mr-3" />
              Open Invitation
            </Button>
          </motion.div>
        )}

        {/* Quiz Game */}
        {showQuiz && !quizCompleted && (
          <div className="relative z-30 w-full flex items-center justify-center">
            <QuizGame 
              onComplete={handleQuizComplete}
              animationsEnabled={animationsEnabled}
            />
          </div>
        )}

        {/* Envelope Animation */}
        {quizCompleted && (
          <div className="relative z-0 w-full flex items-center justify-center">
            <EnvelopeAnimation 
              isVisible={quizCompleted} 
              animationsEnabled={animationsEnabled}
              score={finalScore}
            />
          </div>
        )}

        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-white rounded-full"></div>
          <div className="absolute top-1/3 right-1/3 w-24 h-24 border-2 border-white rotate-45"></div>
        </div>
      </div>
    </motion.section>
  );
};

export default InvitationRevealSection;