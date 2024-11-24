import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SplineEmbed } from './SplineEmbed';

interface SplashScreenProps {
  onEnter: () => void;
}

export function SplashScreen({ onEnter }: SplashScreenProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative w-full h-screen bg-[#2C1810] overflow-hidden"
    >
      <SplineEmbed 
        url="YOUR_SPLINE_URL_HERE"
        className="absolute inset-0"
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2C1810]/10 to-[#2C1810]/40" />

      <div className="relative h-full flex flex-col items-center justify-between py-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-4xl md:text-6xl font-bold text-[#E6D5B8] mt-8"
        >
          Creative Space
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{ marginTop: '75vh' }}
          className="mb-16"
        >
          <motion.button
            onClick={onEnter}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full"
            style={{
              backgroundColor: 'rgba(230, 213, 184, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(230, 213, 184, 0.2)',
              boxShadow: '0 8px 32px rgba(44, 24, 16, 0.2)'
            }}
          >
            <span className="text-[#E6D5B8] text-lg font-medium">Enter</span>
            <motion.div
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="w-5 h-5 text-[#E6D5B8]" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}