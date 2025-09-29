interface CoverSectionProps {
  imageUrl: string;
  alt: string;
  className?: string;
}

const CoverSection = ({ imageUrl, alt, className = "" }: CoverSectionProps) => {
  return (
    <section className={`relative w-full overflow-hidden ${className}`}>
      {/* Full Width Image Container */}
      <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden">
        <img 
          src={imageUrl}
          alt={alt}
          style={{
            display: 'block',
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
            objectPosition: 'top',
            margin: 0,
            padding: 0
          }}
        />
      </div>
    </section>
  );
};

export default CoverSection;