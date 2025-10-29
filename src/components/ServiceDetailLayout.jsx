import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import OptimizedImage from '@/components/OptimizedImage';

const ServiceDetailLayout = ({ title, subtitle, imageUrl, children }) => {
  return (
    <>
      <Helmet>
        <title>{`${title} - Oasis Health Services`}</title>
        <meta name="description" content={subtitle} />
      </Helmet>
      <div className="bg-white">
        <header className="relative bg-gradient-to-t from-[#1a3a37] to-[#2D6762] text-white py-24 md:py-32 overflow-hidden">
          {imageUrl && (
            <div className="absolute inset-0 z-0 opacity-20">
              <OptimizedImage
                src={imageUrl}
                alt={`${title} service background`}
                className="w-full h-full object-cover"
                priority={true}
                loading="eager"
              />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a37] via-[#2d676280] to-transparent z-10" />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20"
          >
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">{title}</h1>
              {subtitle && <p className="mt-4 text-lg md:text-xl text-white/90">{subtitle}</p>}
              <div className="mt-8">
                <Link to="/start">
                  <Button size="lg" className="bg-white text-[#1a3a37] hover:bg-gray-200 transition-colors duration-300">
                    Get Started Today
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </header>

        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
           {children}
        </main>
      </div>
    </>
  );
};

export default ServiceDetailLayout;