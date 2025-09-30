import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Heart, Smile, Star, Sparkles, PartyPopper } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  correctReaction: string;
  incorrectReaction: string;
}

interface QuizGameProps {
  onComplete: (score: number) => void;
  animationsEnabled: boolean;
}

const QuizGame = ({ onComplete, animationsEnabled }: QuizGameProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showReaction, setShowReaction] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const questions: Question[] = [
    {
      id: 1,
      question: "Who made the first move?",
      options: ["The Bride", "The Groom", "It was mutual", "Still debating!"],
      correctAnswer: 1,
      correctReaction: "🎯 Spot on! That's exactly how it happened!",
      incorrectReaction: "😄 Nice try! But that's not quite how it went!"
    },
    {
      id: 2,
      question: "Who said 'I love you' first?",
      options: ["The Bride", "The Groom", "It was mutual", "Still debating!"],
      correctAnswer: 1,
      correctReaction: "✨ Amazing! You know the story well!",
      incorrectReaction: "💫 Not quite, but good guess!"
    },
    {
      id: 3,
      question: "Who's more likely to start a fight over food?",
      options: ["The Bride", "The Groom", "Both equally", "Depends on the meal"],
      correctAnswer: 0,
      correctReaction: "💕 Perfect! You're really paying attention!",
      incorrectReaction: "💭 Ooh, so close but not quite!"
    },
    {
      id: 4,
      question: "Who planned more of the wedding?",
      options: ["The Bride", "The Groom", "Split 50/50", "The internet"],
      correctAnswer: 0,
      correctReaction: "🌟 Excellent! You've got this down!",
      incorrectReaction: "🎪 Good thinking, but that's not it!"
    },
    {
      id: 5,
      question: "Who's the better cook?",
      options: ["The Bride", "The Groom", "We survive on takeout", "Still figuring it out"],
      correctAnswer: 1,
      correctReaction: "🎉 Brilliant! You really know them!",
      incorrectReaction: "🎈 Almost there, but not quite!"
    }
  ];

  const handleAnswer = (answerIndex: number) => {
    if (selectedAnswer !== null) return; // Prevent multiple selections
    
    setSelectedAnswer(answerIndex);
    const correct = answerIndex === questions[currentQuestion].correctAnswer;
    setIsCorrect(correct);
    
    let nextScore = score;
    if (correct) {
      nextScore = score + 1;
      setScore((prev) => prev + 1);
    }
    
    setShowReaction(true);
    
    // Move to next question or complete quiz
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowReaction(false);
      } else {
        // Quiz complete
        setTimeout(() => {
          onComplete(nextScore);
        }, 1000);
      }
    }, 2500);
  };

  const currentQ = questions[currentQuestion];

  return (
    <motion.div
      className="w-full max-w-2xl mx-auto px-4"
      initial={animationsEnabled ? { opacity: 0, scale: 0.9 } : { opacity: 1, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      data-testid="quiz-game"
    >
      {/* Quiz Header */}
      <div className="text-center mb-8">
        <motion.div
          initial={animationsEnabled ? { y: -20, opacity: 0 } : { y: 0, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-4"
        >
          <Heart className="w-5 h-5 text-pink-300" />
          <span className="text-white font-medium">
            Question {currentQuestion + 1} of {questions.length}
          </span>
        </motion.div>
        
        <div className="flex justify-center gap-2 mb-4">
          {questions.map((_, idx) => (
            <div
              key={idx}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx < currentQuestion
                  ? 'w-8 bg-green-400'
                  : idx === currentQuestion
                  ? 'w-12 bg-white'
                  : 'w-8 bg-white/30'
              }`}
              data-testid={`progress-dot-${idx}`}
            />
          ))}
        </div>
      </div>

      {/* Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={animationsEnabled ? { x: 50, opacity: 0 } : { x: 0, opacity: 1 }}
          animate={{ x: 0, opacity: 1 }}
          exit={animationsEnabled ? { x: -50, opacity: 0 } : { x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl shadow-2xl p-8 mb-6"
          data-testid={`question-${currentQuestion}`}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            {currentQ.question}
          </h2>

          <div className="space-y-3">
            {currentQ.options.map((option, index) => (
              <motion.div
                key={index}
                initial={animationsEnabled ? { x: -20, opacity: 0 } : { x: 0, opacity: 1 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
              >
                <Button
                  onClick={() => handleAnswer(index)}
                  disabled={selectedAnswer !== null}
                  className={`w-full py-6 text-lg font-medium transition-all duration-300 ${
                    selectedAnswer === null
                      ? 'bg-blue-500 hover:bg-blue-600 text-white hover:scale-105'
                      : selectedAnswer === index
                      ? isCorrect
                        ? 'bg-green-500 text-white scale-105'
                        : 'bg-red-500 text-white scale-105'
                      : index === currentQ.correctAnswer && selectedAnswer !== null
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-300 text-gray-600'
                  }`}
                  data-testid={`answer-${index}`}
                >
                  {option}
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Reaction Feedback */}
      <AnimatePresence>
        {showReaction && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.8 }}
            className="text-center"
            data-testid="reaction-feedback"
          >
            <motion.div
              animate={animationsEnabled ? {
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0]
              } : {}}
              transition={{ duration: 0.5, repeat: 2 }}
              className={`inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-lg ${
                isCorrect ? 'bg-green-500' : 'bg-orange-500'
              }`}
            >
              {isCorrect ? (
                <Sparkles className="w-6 h-6" />
              ) : (
                <Smile className="w-6 h-6" />
              )}
              <span data-testid="reaction-text">
                {isCorrect ? currentQ.correctReaction : currentQ.incorrectReaction}
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Score indicator */}
      <div className="mt-6 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
          <Star className="w-4 h-4 text-yellow-300" />
          <span className="text-white text-sm font-medium" data-testid="text-current-score">
            Score: {score}/{questions.length}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default QuizGame;
