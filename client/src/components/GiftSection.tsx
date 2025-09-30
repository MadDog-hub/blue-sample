import { Heart, Gift, Home } from 'lucide-react';
import { motion } from 'framer-motion';

const GiftSection = () => {
  return (
    <motion.section 
      className="section-hard-blue py-20 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 9.5 }}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-[#333333] rounded-full animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-[#333333] rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 left-3/4 w-24 h-24 border border-[#333333] rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Section Header */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.8 }}
        >
          <h2 className="text-5xl font-display italic text-gold-bright mb-8" data-testid="text-gifts-title">
            Wedding Gifts
          </h2>
        </motion.div>

        {/* Main Gift Message */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 10.1 }}
        >
          <div className="bg-card/30 border border-border rounded-xl p-12 shadow-soft hover-elegant">
            {/* Icon */}
            <div className="w-20 h-20 bg-[#333333]/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <Heart className="w-10 h-10 text-[#ffffff]" />
            </div>

            {/* Main Message */}
            <div className="space-y-6">
              <p className="text-xl font-body text-primary-foreground leading-relaxed">
                As love is what the night is all about, your presence is one we can't celebrate without. But should you still believe that gift is worth giving, monetary gift for our future is a delightful blessing.
              </p>
            </div>

            {/* Decorative Elements */}
            <div className="mt-8 flex justify-center items-center space-x-4">
              <div className="w-12 h-px bg-[#ffffff]/30"></div>
              <div className="w-3 h-3 bg-[#ffffff] rounded-full animate-float"></div>
              <div className="w-12 h-px bg-[#ffffff]/30"></div>
            </div>
          </div>
        </motion.div>

        {/* Payment Options */}
        <motion.div 
          className="max-w-md mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 10.4 }}
        >
          {/* GCash Payment */}
          <div>
            <div className="bg-card/30 border border-border rounded-xl p-8 shadow-soft hover-elegant">
              <h3 className="text-lg font-display font-semibold text-gold-bright mb-4 text-center">GCash</h3>
              <div className="text-center mb-4">
                <img 
                  src="https://res.cloudinary.com/dpzxdmqqg/image/upload/v1755332552/532087756_3192844410882952_149850844084049446_n_v5dj7e.jpg"
                  alt="GCash QR Code"
                  className="w-64 h-64 mx-auto object-contain"
                />
              </div>
              <p className="text-primary-foreground leading-relaxed text-center">
                Scan the QR code above to send your generous gift via GCash
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default GiftSection;