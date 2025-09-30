"use client";
import { motion, useMotionValue, useTransform, PanInfo } from "framer-motion";
import { useRef, useState } from "react";

interface DraggableCardBodyProps {
  className?: string;
  children: React.ReactNode;
  onDragEnd?: (info: PanInfo) => void;
  onClick?: () => void;
  noCard?: boolean;
  clickMode?: boolean;
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
  onClick,
  noCard = false,
  clickMode = false,
}: DraggableCardBodyProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);
  const [isDragged, setIsDragged] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [showXMark, setShowXMark] = useState(false);
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

  const handleClick = () => {
    if (clickMode && !isClicked) {
      setIsClicked(true);
      setShowXMark(true);
      
      // Show X mark for a moment then fade out
      setTimeout(() => {
        setIsDragged(true);
        if (onClick) {
          onClick();
        }
      }, 800);
    }
  };

  if (isDragged && !showXMark) {
    return null; // Remove the card from DOM after drag/click
  }

  return (
    <motion.div
      ref={cardRef}
      className={`${clickMode ? 'cursor-pointer' : 'cursor-grab active:cursor-grabbing'} ${className}`}
      style={{ x, y, rotateX, rotateY, zIndex: 100 }}
      drag={!clickMode}
      dragConstraints={!clickMode ? { top: 0, left: 0, right: 0, bottom: 0 } : undefined}
      dragElastic={!clickMode ? 0.6 : undefined}
      whileDrag={!clickMode ? { 
        scale: 1.1, 
        zIndex: 1000,
        transition: { duration: 0.2 }
      } : undefined}
      whileHover={clickMode ? {
        scale: 1.05,
        transition: { duration: 0.2 }
      } : undefined}
      onDragEnd={!clickMode ? handleDragEnd : undefined}
      onClick={clickMode ? handleClick : undefined}
      animate={isDragged ? { 
        opacity: 0, 
        scale: 0.8,
        transition: { duration: 0.5, delay: showXMark ? 0.3 : 0 }
      } : {}}
      data-testid={`${clickMode ? 'clickable' : 'draggable'}-card-${className?.includes('top-') ? 'positioned' : 'default'}`}
    >
      <div className="relative">
        {noCard ? children : (
          <div className="bg-white dark:bg-neutral-800 p-4 rounded-xl shadow-xl">
            {children}
          </div>
        )}
        
        {/* X Mark Blood Effect */}
        {showXMark && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
            initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
            animate={{ 
              opacity: 1, 
              scale: 1.2, 
              rotate: 0,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            data-testid="x-mark-blood"
          >
            <div className="text-red-600 text-6xl font-bold drop-shadow-lg transform rotate-12" style={{
              textShadow: '2px 2px 4px rgba(139, 0, 0, 0.8), 0 0 10px rgba(220, 20, 60, 0.6)'
            }}>
              ✗
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};