import { motion } from 'framer-motion';

import semiformalImage from "@assets/39c08e20-9c26-49c2-94e3-894e60b153d4_1757834960927.png";

import formalImage from "@assets/4193ce13-9e83-49e8-9beb-45be60110fd7_1757834960927.png";

const DressCodeSection = () => {
  const dressCodeColors = [
    { name: 'Navy Blue', color: '#1e3a8a', hex: '#1e3a8a' },
    { name: 'Royal Blue', color: '#2563eb', hex: '#2563eb' },
    { name: 'Sky Blue', color: '#3b82f6', hex: '#3b82f6' },
    { name: 'Light Blue', color: '#60a5fa', hex: '#60a5fa' },
    { name: 'Powder Blue', color: '#93c5fd', hex: '#93c5fd' },
    { name: 'Ice Blue', color: '#dbeafe', hex: '#dbeafe' }
  ];

  return (
    <motion.section 
      id="dresscode" 
      className="section-pastel-blue py-20 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 7.5 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 border border-[#333333] rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 border border-[#333333] rounded-full"></div>
      </div>
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 7.8 }}
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 left-1/4 w-8 h-8 border-2 border-[#333333]/30 rounded-full"></div>
          <div className="absolute top-4 right-1/4 w-4 h-4 bg-[#333333]/20 rounded-full"></div>
          <div className="absolute bottom-0 left-1/3 w-6 h-6 border border-[#333333]/40 rounded-full"></div>
          <div className="absolute bottom-2 right-1/3 w-3 h-3 bg-[#333333]/30 rounded-full"></div>

          <h2 className="font-display italic text-primary mb-8 text-[48px]" data-testid="text-dresscode-title">
            Attire Guide
          </h2>
          <div className="bg-[#333333]/10 border border-[#333333]/20 rounded-xl p-4 max-w-lg mx-auto relative">
            <p className="text-lg font-script text-foreground mb-1">
              FORMAL for Principal Sponsors | SEMI-FORMAL for Guests
            </p>
            <p className="text-sm text-foreground">
              Elegance is the only beauty that never fades
            </p>
          </div>
        </motion.div>

        {/* Modern Dress Code Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Principal Sponsors */}
          <motion.div 
            className="group"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 8.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-card/30 border border-border rounded-xl p-8 shadow-soft hover-elegant transition-all duration-500 h-full">
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 8.3 }}
                >
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-2xl"></div>
                    <h3 className="text-xl font-display font-medium text-foreground mb-4 relative z-10">
                      FOR PRINCIPAL SPONSORS
                    </h3>
                    <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                      <span className="text-sm font-normal text-foreground">FORMAL ATTIRE</span>
                    </div>
                  </div>
                </motion.div>
                <motion.img 
                  src={formalImage}
                  alt="Principal Sponsors attire guide"
                  className="w-full max-w-md mx-auto object-contain rounded-2xl shadow-md group-hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 8.5 }}
                />
              </div>
            </div>
          </motion.div>

          {/* Guests */}
          <motion.div 
            className="group"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 8.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-card/30 border border-border rounded-xl p-8 shadow-soft hover-elegant transition-all duration-500 h-full">
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 8.6 }}
                >
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-l from-primary/10 to-transparent rounded-2xl"></div>
                    <h3 className="text-xl font-display font-medium text-foreground mb-4 relative z-10">
                      FOR GUESTS
                    </h3>
                    <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                      <span className="text-sm font-normal text-foreground">SEMI-FORMAL ATTIRE</span>
                    </div>
                  </div>
                </motion.div>
                <motion.img 
                  src={semiformalImage}
                  alt="Guests attire guide"
                  className="w-full max-w-md mx-auto object-contain rounded-2xl shadow-md group-hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 8.8 }}
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Color Palette */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.7 }}
        >
          <div className="bg-card/30 border border-border rounded-xl p-8 shadow-soft hover-elegant transition-all duration-500">
            <h3 className="text-xl font-body font-medium text-foreground mb-6 text-center">
              Recommended Color Palette
            </h3>
            <p className="text-foreground text-center mb-8">
              Consider these elegant colors when choosing your attire
            </p>
            <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto">
              {dressCodeColors.map((colorItem, index) => (
                <div key={index} className="text-center group">
                  <div 
                    className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full border-2 border-border shadow-soft group-hover:scale-105 transition-transform duration-300"
                    style={{ backgroundColor: colorItem.color }}
                  ></div>
                  <p className="text-sm font-medium text-foreground mt-2 sm:mt-3 mb-1">
                    {colorItem.name}
                  </p>
                  <p className="text-xs text-foreground/80 font-mono">
                    {colorItem.hex}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Modern Additional Guidelines */}
        <motion.div 
          className="bg-card/30 border border-border rounded-xl p-8 shadow-soft max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.0 }}
        >
          <motion.h3 
            className="text-xl font-body font-medium text-foreground mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 9.2 }}
          >
            Additional Guidelines
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-6 relative z-10">
            {[
              { 
                title: "Principal Sponsors: Formal attire required", 
                description: "Please dress elegantly for this special occasion.",
                delay: 9.4
              },
              { 
                title: "Guests: Semi-formal attire", 
                description: "Elegant and tasteful outfits are encouraged.",
                delay: 9.5
              },
              { 
                title: "No cream or white colors", 
                description: "Avoid wearing cream or white, as these colors are reserved for the bride.",
                delay: 9.6
              },
              { 
                title: "Respectful attire", 
                description: "Kindly ensure your attire is respectful and appropriate for a religious ceremony.",
                delay: 9.7
              }
            ].map((guideline, index) => (
              <motion.div 
                key={index}
                className="bg-card/20 rounded-xl p-4 border border-border/50 hover:bg-card/40 transition-all duration-300"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: guideline.delay }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">{guideline.title}</h4>
                    <p className="text-foreground text-sm leading-relaxed">{guideline.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default DressCodeSection;