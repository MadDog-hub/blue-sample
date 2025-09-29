"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface LinkPreviewProps {
  children: React.ReactNode;
  url: string;
  className?: string;
}

export const LinkPreview = ({ children, url, className }: LinkPreviewProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(url, '_blank');
  };

  return (
    <>
      <button
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onClick={handleClick}
        className={cn(
          "cursor-pointer text-black dark:text-white underline underline-offset-2 hover:underline-offset-4 transition-all duration-200",
          className
        )}
      >
        {children}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.6 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.6,
            }}
            className="absolute z-50 max-w-sm p-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-xl"
            style={{
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
          >
            <div className="p-2">
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                Click to visit: {url}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};