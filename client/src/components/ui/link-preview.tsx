"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface LinkPreviewProps {
  children: React.ReactNode;
  url: string;
  className?: string;
}

export const LinkPreview = ({ children, url, className }: LinkPreviewProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  
  // Convert Google Maps URL to embed URL
  const getEmbedUrl = (originalUrl: string) => {
    if (originalUrl.includes('maps.app.goo.gl') || originalUrl.includes('maps.google.com')) {
      // For Google Maps URLs, use the basic embed format without API key
      // This works for basic location embedding
      return `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15000.0!2d123.9!3d10.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sph!4v1640000000000!5m2!1sen!2sph&q=${encodeURIComponent(originalUrl)}`;
    }
    return originalUrl;
  };

  const embedUrl = getEmbedUrl(url);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isOpen) {
      // Delay loading the iframe slightly to avoid unnecessary requests
      timeoutId = setTimeout(() => setShouldLoad(true), 300);
    } else {
      setShouldLoad(false);
    }
    return () => clearTimeout(timeoutId);
  }, [isOpen]);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(url, '_blank');
  };

  return (
    <div className="relative inline-block">
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
            className="absolute z-50 w-80 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-xl overflow-hidden"
            style={{
              top: '100%',
              left: '50%',
              transform: 'translateX(-50%)',
              marginTop: '10px',
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
          >
            <div className="w-full h-48 bg-neutral-100 dark:bg-neutral-800 relative">
              {shouldLoad ? (
                <>
                  <iframe
                    src={embedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Map Preview"
                    className="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-transparent" /> {/* Prevent iframe interactions */}
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-neutral-600 dark:border-neutral-400"></div>
                </div>
              )}
            </div>
            <div className="p-4">
              <p className="text-sm text-neutral-600 dark:text-neutral-400 truncate">
                {url.includes('maps') ? 'Google Maps Location' : 'Website Preview'}
              </p>
              <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-1">
                Click to open in new tab
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};