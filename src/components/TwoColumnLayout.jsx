
import React from 'react';
import { motion } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronsRight } from 'lucide-react';

const TwoColumnLayout = ({ title, subtitle, children, navLinks, navTitle, pageType }) => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="grid lg:grid-cols-4 gap-8 xl:gap-12">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="sticky top-28 p-6 bg-gradient-to-br from-gray-50 to-gray-100/60 rounded-2xl border border-gray-200/80"
            >
              <h3 className="text-xl font-bold text-[#2D6762] mb-4 flex items-center">
                <ChevronsRight className="h-6 w-6 mr-2" />
                {navTitle}
              </h3>
              <nav>
                <ul className="space-y-2">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <NavLink
                        to={link.href}
                        className={({ isActive }) =>
                          `block px-4 py-2 rounded-lg text-base transition-colors duration-200 ${
                            isActive
                              ? 'bg-[#2D6762] text-white font-semibold shadow-md'
                : 'text-gray-700 hover:bg-[#2D6762]/12 hover:text-[#265e58] hover:shadow-sm hover:bg-gradient-to-r hover:from-[#f0fbfa] hover:to-transparent'
                          }`
                        }
                      >
                        {link.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <section className="relative bg-gradient-to-br from-[#2D6762] to-[#69A08B] text-white py-12 md:py-16 px-6 md:px-10 rounded-2xl mb-10 text-center">
                <div className="max-w-3xl mx-auto">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                    {title}
                  </h1>
                  {subtitle && (
                    <p className="text-lg md:text-xl text-white/90">
                      {subtitle}
                    </p>
                  )}
                      <div className="mt-8 flex flex-col sm:flex-row sm:flex-nowrap justify-center items-center gap-4 md:gap-6 min-w-0">
                        <Button size="lg" className="gradient-button-yellow text-white w-full sm:w-auto whitespace-nowrap flex-shrink-0 shadow-lg" asChild>
                          <Link to="/start" className="inline-flex items-center gap-1 sm:gap-2 whitespace-nowrap leading-none">
                            <span className="relative z-20">Get Started Today</span>
                            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 align-middle relative z-20" />
                          </Link>
                        </Button>
                    {pageType === 'conditions' && (
                      <Link to="/services" className="text-white/80 hover:text-white transition-colors duration-200 inline-flex items-center group animated-underline-2 gap-1 sm:gap-2 whitespace-nowrap flex-shrink-0">
                        Explore all treatments
                        <ArrowRight className="h-4 w-4 flex-shrink-0 align-middle group-hover:translate-x-1 transition-transform" />
                      </Link>
                    )}
                    {pageType === 'services' && (
                      <Link to="/services" className="text-white/80 hover:text-white transition-colors duration-200 inline-flex items-center group animated-underline-2 gap-1 sm:gap-2 whitespace-nowrap flex-shrink-0">
                        Explore all services
                        <ArrowRight className="h-4 w-4 flex-shrink-0 align-middle group-hover:translate-x-1 transition-transform" />
                      </Link>
                    )}
                  </div>
                </div>
              </section>
            </motion.div>
            
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default TwoColumnLayout;
