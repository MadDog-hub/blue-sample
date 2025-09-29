// Image loop images from Cloudinary
const imageLoop1 = 'https://res.cloudinary.com/dbciwaal4/image/upload/v1759151638/imageloop1_o4jrga.png';
const imageLoop2 = 'https://res.cloudinary.com/dbciwaal4/image/upload/v1759151637/imageloop2_iijitc.png';
const imageLoop3 = 'https://res.cloudinary.com/dbciwaal4/image/upload/v1759151638/imageloop3_oujpxp.png';
const imageLoop4 = 'https://res.cloudinary.com/dbciwaal4/image/upload/v1759151638/imageloop4_ygwlj7.png';
import { useAnimationContext } from '@/contexts/AnimationContext';

const ImageLoop = () => {
  const { animationsEnabled } = useAnimationContext();
  const images = [
    imageLoop1,
    imageLoop2,
    imageLoop3,
    imageLoop4,
    imageLoop1,
    imageLoop2,
    imageLoop3,
    imageLoop4,
    imageLoop1
  ];

  return (
    <section id="slideshow" className="image-loop-section w-full overflow-hidden py-4">
      <div className="image-loop-container">
        <div className={`${animationsEnabled ? 'image-loop-track' : 'image-loop-track-static'}`}>
          {/* First set of images */}
          {images.map((image, index) => (
            <div key={`set1-${index}`} className="image-loop-item">
              <img
                src={image}
                alt={`Andrei & Sam moment ${index + 1}`}
                className="image-loop-img"
                loading="lazy"
                data-testid={`img-loop-${index + 1}`}
              />
            </div>
          ))}
          {/* Duplicate set for seamless looping */}
          {images.map((image, index) => (
            <div key={`set2-${index}`} className="image-loop-item">
              <img
                src={image}
                alt={`Andrei & Sam moment ${index + 1} duplicate`}
                className="image-loop-img"
                loading="lazy"
                data-testid={`img-loop-dup-${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageLoop;