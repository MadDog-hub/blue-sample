import { Heart, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      className="bg-primary text-primary-foreground py-16 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 12.5 }}
    >
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <motion.div 
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 12.8 }}
        >
          {/* Couple Names */}
          <div>
            <h2 className="text-3xl sm:text-4xl mb-2 text-gold" style={{ fontFamily: 'Boska, serif', fontWeight: 300 }}>
              Andrei
              <span className="text-primary-foreground mx-3">&</span>
              Sam
            </h2>
            <p className="text-primary-foreground text-lg">
              September 07, 2025 • Sacred Heart of Jesus
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="flex justify-center items-center space-x-4 py-6">
            <div className="w-16 h-px bg-primary-foreground/30"></div>
            <Heart className="w-6 h-6 text-primary-foreground animate-float" />
            <div className="w-16 h-px bg-primary-foreground/30"></div>
          </div>

          {/* Thank You Message */}
          <div className="max-w-2xl mx-auto">
            <p className="text-primary-foreground leading-relaxed italic">
              We're grateful to have you as part of our story. You've made our journey more beautiful, and we can't wait to share our special day with you.
            </p>
          </div>

          {/* Bottom Border */}
          <div className="border-t border-primary-foreground/20 pt-8">
            <p className="text-primary-foreground text-sm">
              With love and gratitude,
            </p>
            <p className="text-primary-foreground" style={{ fontFamily: 'Boska, serif', fontWeight: 300 }}>
              Andrei & Sam
            </p>
          </div>
        </motion.div>
      </div>
      {/* Background Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent opacity-50 pointer-events-none"></div>
    </motion.footer>
  );
};

export default Footer;