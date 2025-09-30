import { motion } from 'framer-motion';

interface OceanStickersProps {
  variant?: 'hero' | 'section' | 'navigation' | 'footer';
  density?: 'light' | 'medium' | 'heavy';
  className?: string;
}

const OceanStickers = ({ variant = 'section', density = 'medium', className = '' }: OceanStickersProps) => {
  const stickers = [
    'https://res.cloudinary.com/dbciwaal4/image/upload/v1759151728/fish-element_uwneg1.png',
    'https://res.cloudinary.com/dbciwaal4/image/upload/v1759151728/ocean-creature2_f3mkao.png',
    'https://res.cloudinary.com/dbciwaal4/image/upload/v1759151728/ocean-creature_nfhpgk.png',
    'https://res.cloudinary.com/dbciwaal4/image/upload/v1759151724/ocean-creature3_v5mkxe.png',
    'https://res.cloudinary.com/dbciwaal4/image/upload/v1759151723/ocean-creature4_xymcyc.png',
    'https://res.cloudinary.com/dbciwaal4/image/upload/v1759151723/ocean-creature5_iwewvu.png',
    'https://res.cloudinary.com/dbciwaal4/image/upload/v1759151722/ocean-creature6_evnb5h.png',
    'https://res.cloudinary.com/dbciwaal4/image/upload/v1759151722/ocean-creature7_qn5zyz.png',
    'https://res.cloudinary.com/dbciwaal4/image/upload/v1759151722/ocean-creature8_poizdd.png'
  ];

  const getVariantPositions = () => {
    switch (variant) {
      case 'hero':
        return [
          { top: '15%', left: '5%', size: 'w-8 h-8', rotate: 'rotate-12', opacity: 'opacity-40' },
          { top: '25%', right: '8%', size: 'w-10 h-10', rotate: 'rotate-[-18deg]', opacity: 'opacity-50' },
          { top: '65%', left: '10%', size: 'w-12 h-12', rotate: 'rotate-[25deg]', opacity: 'opacity-45' },
          { top: '75%', right: '15%', size: 'w-8 h-8', rotate: 'rotate-[-10deg]', opacity: 'opacity-35' },
          { top: '40%', left: '3%', size: 'w-6 h-6', rotate: 'rotate-[35deg]', opacity: 'opacity-30' },
          { top: '55%', right: '5%', size: 'w-7 h-7', rotate: 'rotate-[-25deg]', opacity: 'opacity-40' },
        ];
      case 'navigation':
        return [
          { top: '20%', left: '2%', size: 'w-4 h-4', rotate: 'rotate-12', opacity: 'opacity-60' },
          { top: '60%', right: '3%', size: 'w-5 h-5', rotate: 'rotate-[-15deg]', opacity: 'opacity-50' },
        ];
      case 'section':
        return [
          { top: '10%', left: '5%', size: 'w-8 h-8', rotate: 'rotate-12', opacity: 'opacity-60' },
          { top: '20%', right: '7%', size: 'w-10 h-10', rotate: 'rotate-[-18deg]', opacity: 'opacity-70' },
          { top: '80%', left: '8%', size: 'w-9 h-9', rotate: 'rotate-[25deg]', opacity: 'opacity-65' },
          { top: '85%', right: '10%', size: 'w-7 h-7', rotate: 'rotate-[-10deg]', opacity: 'opacity-55' },
          { top: '40%', left: '3%', size: 'w-6 h-6', rotate: 'rotate-[35deg]', opacity: 'opacity-50' },
          { top: '60%', right: '5%', size: 'w-8 h-8', rotate: 'rotate-[-25deg]', opacity: 'opacity-60' },
        ];
      case 'footer':
        return [
          { top: '15%', left: '5%', size: 'w-10 h-10', rotate: 'rotate-12', opacity: 'opacity-50' },
          { top: '25%', right: '8%', size: 'w-12 h-12', rotate: 'rotate-[-18deg]', opacity: 'opacity-60' },
          { top: '65%', left: '10%', size: 'w-8 h-8', rotate: 'rotate-[25deg]', opacity: 'opacity-45' },
          { top: '75%', right: '15%', size: 'w-9 h-9', rotate: 'rotate-[-10deg]', opacity: 'opacity-55' },
          { top: '40%', left: '3%', size: 'w-7 h-7', rotate: 'rotate-[35deg]', opacity: 'opacity-40' },
        ];
      default:
        return [];
    }
  };

  const getDensityCount = () => {
    switch (density) {
      case 'light':
        return Math.min(3, getVariantPositions().length);
      case 'heavy':
        return getVariantPositions().length;
      default: // medium
        return Math.min(4, getVariantPositions().length);
    }
  };

  const positions = getVariantPositions().slice(0, getDensityCount());

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {positions.map((position, index) => {
        const stickerIndex = index % stickers.length;
        return (
          <motion.div
            key={index}
            className={`absolute ${position.size} ${position.rotate} ${position.opacity}`}
            style={{ 
              top: position.top, 
              left: position.left, 
              right: position.right 
            }}
            initial={{ scale: 0, rotate: 0 }}
            animate={{ 
              scale: 1, 
              rotate: [0, 5, -5, 0],
            }}
            transition={{ 
              scale: { duration: 0.8, delay: index * 0.2 },
              rotate: { 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: index * 0.5 
              }
            }}
          >
            <img
              src={stickers[stickerIndex]}
              alt={`Ocean decoration ${index + 1}`}
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default OceanStickers;