import { motion } from 'framer-motion';
import entourageImage from "@assets/Entourage1_1757835155828.webp";

const EntourageSection = () => {
  return (
    <motion.section 
      id="entourage" 
      className="section-hard-blue py-20 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 8.5 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 border border-[#333333] rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 border border-[#333333] rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gold mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.5 }}
        >
          Entourage
        </motion.h2>

        <motion.div 
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.8 }}
        >
          <img 
            src={entourageImage}
            alt="Brian - Lawson Wedding Entourage"
            className="w-full max-w-4xl mx-auto object-contain"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EntourageSection;