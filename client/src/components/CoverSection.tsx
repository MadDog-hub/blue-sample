interface CoverSectionProps {
  imageUrl: string;
  alt: string;
  className?: string;
}

const CoverSection = ({ imageUrl, alt, className = "" }: CoverSectionProps) => {
  return (
    <section className={`relative w-full h-auto md:h-screen overflow-hidden ${className}`}>
      <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden h-auto md:h-screen">
        <img 
          src={imageUrl}
          alt={alt}
          className="w-screen h-auto md:h-screen object-contain"
          style={{
            display: 'block',
            objectPosition: 'center',
            margin: 0,
            padding: 0
          }}
        />
      </div>
    </section>
  );
};

export default CoverSection;