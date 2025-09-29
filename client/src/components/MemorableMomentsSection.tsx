import { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { FolderOpen, Folder } from 'lucide-react';

// Prenup photos from Cloudinary
const prenup1 = 'https://res.cloudinary.com/dbciwaal4/image/upload/v1759151637/prenup1_uy0r6d.png';
const prenup2 = 'https://res.cloudinary.com/dbciwaal4/image/upload/v1759151635/prenup2_ip3kvf.png';
const prenup3 = 'https://res.cloudinary.com/dbciwaal4/image/upload/v1759151635/prenup3_szk2ej.png';
const prenup4 = 'https://res.cloudinary.com/dbciwaal4/image/upload/v1759151635/prenup4_qg5qgx.png';
const prenup5 = 'https://res.cloudinary.com/dbciwaal4/image/upload/v1759151634/prenup5_kcn3sd.png';
const prenup6 = 'https://res.cloudinary.com/dbciwaal4/image/upload/v1759151634/prenup6_cwynrp.png';
const prenup7 = 'https://res.cloudinary.com/dbciwaal4/image/upload/v1759151634/prenup7_b3jyd6.png';

const MemorableMomentsSection = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const images = [
    { src: prenup1, title: "Our Beginning", description: "The moment it all started" },
    { src: prenup2, title: "The Proposal", description: "She said yes!" },
    { src: prenup3, title: "Growing Together", description: "Building our love story" },
    { src: prenup4, title: "Adventures", description: "Creating memories together" },
    { src: prenup5, title: "Happy Moments", description: "Sharing joy and laughter" },
    { src: prenup6, title: "Perfect Day", description: "Every moment with you" },
    { src: prenup7, title: "Love Story", description: "Writing our chapter" }
  ];

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.section 
      id="prenup-photos" 
      className="section-hard-blue py-20 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 border border-[#333333] rounded-full transform -translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 border border-[#333333] rounded-full transform translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        >
          <h2 className="text-5xl font-script italic font-black text-primary-foreground mb-8" data-testid="text-prenup-photos-title">
            Prenup Photos
          </h2>
          <p className="text-xl font-script italic text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Capturing our love story before we say 'I do'
          </p>
        </motion.div>

        {/* Animated Folder Component with React Bits Style */}
        <motion.div 
          className="flex flex-col items-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.1 }}
        >
          {/* Interactive Folder Display */}
          <motion.div 
            className="relative group cursor-pointer"
            onClick={() => setIsGalleryOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ rotateY: 0 }}
            animate={{ rotateY: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Folder Background with Gradient */}
            <motion.div
              className="relative"
              whileHover={{ rotateY: 10, rotateX: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/40 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-500" />
              
              {/* Main Folder Icon */}
              <motion.div
                className="relative bg-gradient-to-br from-primary to-primary/80 p-8 rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500"
                whileHover={{ 
                  background: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary))/0.9 100%)",
                }}
              >
                <Folder 
                  className="w-24 h-24 text-white drop-shadow-lg"
                  data-testid="folder-prenup-photos"
                />
                
                {/* Floating Images Preview */}
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
                  initial={{ scale: 0.8, y: 10 }}
                  whileHover={{ scale: 1, y: 0 }}
                >
                  <div className="grid grid-cols-3 gap-1 p-4">
                    {images.slice(0, 6).map((image, index) => (
                      <motion.div
                        key={index}
                        className="w-6 h-6 rounded-sm overflow-hidden shadow-md"
                        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <img
                          src={image.src}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Floating Count Badge */}
            <motion.div 
              className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 1.5 }}
              whileHover={{ scale: 1.1 }}
            >
              {images.length}
            </motion.div>

            {/* Hover Tooltip */}
            <motion.div 
              className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300"
              initial={{ y: 10 }}
              whileHover={{ y: 0 }}
            >
              <div className="bg-black text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg">
                Click to view all photos
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-black"></div>
              </div>
            </motion.div>
          </motion.div>

          {/* Open Gallery Button */}
          <Button
            size="lg"
            className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary font-script text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => setIsGalleryOpen(true)}
            data-testid="button-open-gallery"
          >
            <FolderOpen className="w-5 h-5 mr-2" />
            Open All Photos
          </Button>
        </motion.div>

        {/* Gallery Modal */}
        <Dialog open={isGalleryOpen} onOpenChange={setIsGalleryOpen}>
          <DialogContent className="max-w-5xl w-full h-[80vh] flex flex-col p-0">
            <DialogTitle className="sr-only">Prenup Photos Gallery</DialogTitle>
            <DialogDescription className="sr-only">Browse through our prenup photo collection capturing our love story</DialogDescription>
            <div className="flex-1 relative bg-black/95 rounded-lg overflow-hidden">
              {/* Header */}
              <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/50 to-transparent p-4">
                <div className="flex items-center justify-between text-white">
                  <h3 className="text-xl font-script">Prenup Photos</h3>
                  <span className="text-sm">
                    {selectedImageIndex + 1} of {images.length}
                  </span>
                </div>
              </div>

              {/* Main Image */}
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src={images[selectedImageIndex].src}
                  alt={images[selectedImageIndex].title}
                  className="max-w-full max-h-full object-contain"
                  data-testid={`img-gallery-main-${selectedImageIndex}`}
                />
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors duration-200"
                data-testid="button-prev-image"
              >
                ←
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors duration-200"
                data-testid="button-next-image"
              >
                →
              </button>

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                <div className="text-white text-center">
                  <h4 className="text-lg font-script mb-1">{images[selectedImageIndex].title}</h4>
                  <p className="text-sm opacity-80">{images[selectedImageIndex].description}</p>
                </div>
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="p-4 bg-white dark:bg-gray-900">
              <div className="flex space-x-2 overflow-x-auto">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => handleImageClick(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded overflow-hidden border-2 transition-all duration-200 ${
                      selectedImageIndex === index 
                        ? 'border-primary shadow-lg' 
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                    data-testid={`img-thumbnail-${index}`}
                  >
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </motion.section>
  );
};

export default MemorableMomentsSection;