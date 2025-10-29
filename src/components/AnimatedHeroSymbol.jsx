import React from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from '@/components/OptimizedImage';

const AnimatedHeroSymbol = ({ className, size, initial, animate, transition }) => {
  return (
    <motion.div
      className={`absolute ${className}`}
      initial={initial}
      animate={animate}
      transition={transition}
    >
      <OptimizedImage
        src="https://horizons-cdn.hostinger.com/0bf89f29-e8e8-4300-9c8a-627c22f53622/52237afc919c4f505556230775298bb7.png"
        alt="Decorative symbol"
        style={{ width: size, height: size }}
        className="opacity-0"
        loading="lazy"
      />
    </motion.div>
  );
};

export default AnimatedHeroSymbol;