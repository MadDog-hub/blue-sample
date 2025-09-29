"use client";
import { motion, useMotionValue, useTransform, PanInfo } from "framer-motion";
import { useRef, useState } from "react";

interface DraggableCardBodyProps {
  className?: string;
  children: React.ReactNode;
  onDragEnd?: (info: PanInfo) => void;
  noCard?: boolean;
}

interface DraggableCardContainerProps {
  className?: string;
  children: React.ReactNode;
}

export const DraggableCardContainer = ({
  className,
  children,
}: DraggableCardContainerProps) => {
  return <div className={className}>{children}</div>;
};

export const DraggableCardBody = ({
  className,
  children,
  onDragEnd,
  noCard = false,
}: DraggableCardBodyProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);
  const [isDragged, setIsDragged] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleDragEnd = (event: any, info: PanInfo) => {
    const threshold = 150; // Distance threshold for removal
    const distance = Math.sqrt(info.offset.x ** 2 + info.offset.y ** 2);
    
    if (distance > threshold) {
      setIsDragged(true);
      if (onDragEnd) {
        onDragEnd(info);
      }
    }
  };

  if (isDragged) {
    return null; // Remove the card from DOM after drag
  }

  return (
    <motion.div
      ref={cardRef}
      className={`cursor-grab active:cursor-grabbing ${className}`}
      style={{ x, y, rotateX, rotateY, zIndex: 100 }}
      drag
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      dragElastic={0.6}
      whileDrag={{ 
        scale: 1.1, 
        zIndex: 1000,
        transition: { duration: 0.2 }
      }}
      onDragEnd={handleDragEnd}
      animate={isDragged ? { 
        opacity: 0, 
        scale: 0.8,
        transition: { duration: 0.3 }
      } : {}}
      data-testid={`draggable-card-${className?.includes('top-') ? 'positioned' : 'default'}`}
    >
      {noCard ? children : (
        <div className="bg-white dark:bg-neutral-800 p-4 rounded-xl shadow-xl">
          {children}
        </div>
      )}
    </motion.div>
  );
};