import { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { FolderOpen, Images, Folder } from 'lucide-react';
import DomeGallery from './DomeGallery';

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
    { src: prenup1, alt: "Our Beginning - The moment it all started" },
    { src: prenup2, alt: "The Proposal - She said yes!" },
    { src: prenup3, alt: "Growing Together - Building our love story" },
    { src: prenup4, alt: "Adventures - Creating memories together" },
    { src: prenup5, alt: "Happy Moments - Sharing joy and laughter" },
    { src: prenup6, alt: "Perfect Day - Every moment with you" },
    { src: prenup7, alt: "Love Story - Writing our chapter" }
  ];

  const dialogImages = [
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
          <h2 className="text-5xl font-script italic font-black text-gold mb-8" data-testid="text-prenup-photos-title">
            Prenup Photos
          </h2>
          <p className="text-xl font-script italic text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Capturing our love story before we say 'I do'
          </p>
        </motion.div>

        {/* Dome Gallery */}
        <motion.div 
          className="w-full h-96 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.1 }}
        >
          <DomeGallery
            images={images}
            fit={0.6}
            grayscale={false}
            overlayBlurColor="#1a1a2e"
            imageBorderRadius="20px"
            openedImageBorderRadius="20px"
            maxVerticalRotationDeg={8}
            dragSensitivity={15}
          />
        </motion.div>

        {/* Open All Photos Button */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.4 }}
        >
          <Button
            size="lg"
            className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary font-script text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => setIsGalleryOpen(true)}
            data-testid="button-open-all-photos"
          >
            <Images className="w-5 h-5 mr-2" />
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
                    {selectedImageIndex + 1} of {dialogImages.length}
                  </span>
                </div>
              </div>

              {/* Main Image */}
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src={dialogImages[selectedImageIndex].src}
                  alt={dialogImages[selectedImageIndex].title}
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
                  <h4 className="text-lg font-script mb-1">{dialogImages[selectedImageIndex].title}</h4>
                  <p className="text-sm opacity-80">{dialogImages[selectedImageIndex].description}</p>
                </div>
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="p-4 bg-white dark:bg-gray-900">
              <div className="flex space-x-2 overflow-x-auto">
                {dialogImages.map((image, index) => (
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