import React, { useState } from 'react';
    import { Link, useLocation } from 'react-router-dom';
    import { Menu, X, ChevronDown } from 'lucide-react';
    import { motion, AnimatePresence } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import {
      DropdownMenu,
      DropdownMenuContent,
      DropdownMenuItem,
      DropdownMenuTrigger,
    } from "@/components/ui/dropdown-menu"
    import {
      Accordion,
      AccordionContent,
      AccordionItem,
      AccordionTrigger,
    } from "@/components/ui/accordion"

    const Header = () => {
      const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
      const [openMenu, setOpenMenu] = useState(null);
      const location = useLocation();

      const conditionsLinks = [
        { name: 'Anxiety Disorders', href: '/conditions/anxiety-disorders' },
        { name: 'Mood Disorders', href: '/conditions/mood-disorders' },
        { name: 'Neurodevelopmental Disorders', href: '/conditions/neurodevelopmental-disorders' },
        { name: 'Personality Disorders', href: '/conditions/personality-disorders' },
        { name: 'Psychotic Disorders', href: '/conditions/psychotic-disorders' },
        { name: 'Obsessive-Compulsive & Related', href: '/conditions/ocd-related-disorders' },
        { name: 'Substance-Related Disorders', href: '/conditions/substance-related-disorders' },
        { name: 'Trauma & Stress-Related', href: '/conditions/trauma-stress-disorders' },
      ];

      const servicesLinks = [
        { name: 'Comprehensive Assessment', href: '/services/comprehensive-psychiatric-assessment' },
        { name: 'Genetic Testing', href: '/services/genetic-testing' },
        { name: 'ADHD Testing & Management', href: '/services/adhd-testing-and-management' },
        { name: 'Autism Assessment & Management', href: '/services/autism-assessment-and-management' },
        { name: 'Therapy & Counseling', href: '/services/therapy-and-counseling' },
        { name: 'Medication Management', href: '/services/medication-management' },
        { name: 'Substance Use Disorder Treatment', href: '/services/substance-use-disorder-treatment' },
        { name: 'Spravato® Treatment', href: '/services/spravato' },
        { name: 'Remote Patient Monitoring', href: '/services/remote-patient-monitoring' },
        { name: 'Telehealth & Digital Care', href: '/services/telehealth' },
      ];

      const aboutSublinks = [
        { name: 'Our Story', href: '/about' },
        { name: 'Blog', href: '/blog' },
      ];

      const navigation = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about', sublinks: aboutSublinks },
        { name: 'Conditions', href: '/conditions', sublinks: conditionsLinks },
        { name: 'Services', href: '/services', sublinks: servicesLinks },
        { name: 'Patients', href: '/patients' },
        { name: 'Providers', href: '/providers' },
        { name: 'Contact', href: '/contact' },
        { name: 'Shop', href: 'http://shop.oasishealthservices.com/', external: true },
      ];

      const isActive = (path) => location.pathname === path;
      const isServicesActive = () => location.pathname.startsWith('/services');
      const isConditionsActive = () => location.pathname.startsWith('/conditions');
      const isAboutActive = () => location.pathname.startsWith('/about') || location.pathname.startsWith('/blog');

      const getActiveState = (item) => {
        if (item.name === 'About') return isAboutActive();
        if (item.name === 'Conditions') return isConditionsActive();
        if (item.name === 'Services') return isServicesActive();
        return isActive(item.href);
      }

      const MobileNavLink = ({ href, children, onClick }) => (
        <Link
          to={href}
          onClick={onClick}
          className={`block py-3 text-base font-medium transition-colors hover:text-[#2D6762] ${
            isActive(href) ? 'text-[#2D6762]' : 'text-[#4A5455]'
          }`}
        >
          {children}
        </Link>
      );

      return (
        <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
          <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <Link to="/" className="flex items-center">
                <img 
                  src="https://horizons-cdn.hostinger.com/0bf89f29-e8e8-4300-9c8a-627c22f53622/2245c4f857f206a62cf1e8d030229d5c.png" 
                  alt="Oasis Health Services Logo" 
                  className="h-12 w-auto"
                />
              </Link>

              <div className="hidden lg:flex items-center space-x-1">
                {navigation.map((item) => {
                  if (item.sublinks) {
                    return (
                      <div key={item.name}>
                        <DropdownMenu open={openMenu === item.name} onOpenChange={(isOpen) => setOpenMenu(isOpen ? item.name : null)}>
                          <DropdownMenuTrigger asChild>
                            <Button 
                              variant="ghost"
                              onMouseEnter={() => setOpenMenu(item.name)} 
                              className={`flex items-center text-sm font-medium transition-colors hover:bg-gray-100 hover:text-[#2D6762] px-3 py-2 ${getActiveState(item) ? 'text-[#2D6762]' : 'text-[#4A5455]'}`}
                            >
                               <span className="animated-underline">{item.name}</span>
                               <ChevronDown className="ml-1 h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            {(item.name === 'Services' || item.name === 'Conditions') && (
                              <DropdownMenuItem asChild>
                                <Link to={item.href}>All {item.name}</Link>
                              </DropdownMenuItem>
                            )}
                            {item.sublinks.map((sublink) => (
                              <DropdownMenuItem key={sublink.name} asChild>
                                {sublink.external ? (
                                  <a href={sublink.href} target="_blank" rel="noopener noreferrer">{sublink.name}</a>
                                ) : (
                                  <Link to={sublink.href}>{sublink.name}</Link>
                                )}
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    )
                  }
                  return (
                    <Button 
                      asChild 
                      variant="ghost" 
                      key={item.name} 
                      className="px-3 py-2"
                      onMouseEnter={() => setOpenMenu(null)}
                    >
                      {item.external ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium transition-colors text-[#4A5455] hover:text-[#2D6762]"
                        >
                          <span className="animated-underline">{item.name}</span>
                        </a>
                      ) : (
                        <Link
                          to={item.href}
                          className={`text-sm font-medium transition-colors hover:text-[#2D6762] ${
                            isActive(item.href) ? 'text-[#2D6762]' : 'text-[#4A5455]'
                          }`}
                        >
                          <span className="animated-underline">{item.name}</span>
                        </Link>
                      )}
                    </Button>
                  );
                })}
                <div className="pl-2" onMouseEnter={() => setOpenMenu(null)}>
                    <Link to="/start">
                        <Button className="gradient-button">
                            <span>Start Now</span>
                        </Button>
                    </Link>
                </div>
              </div>

              <button
                className="lg:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6 text-[#2D6762]" />
                ) : (
                  <Menu className="h-6 w-6 text-[#2D6762]" />
                )}
              </button>
            </div>

            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="lg:hidden overflow-hidden"
                >
                  <div className="py-4 divide-y divide-gray-200">
                    <Accordion type="multiple" className="w-full">
                      {navigation.map((item) => {
                        if (item.sublinks) {
                          return (
                            <AccordionItem value={item.name} key={item.name} className="border-b-0">
                              <AccordionTrigger className={`py-3 text-base font-medium hover:no-underline ${getActiveState(item) ? 'text-[#2D6762]' : 'text-[#4A5455]'}`}>
                                {item.name}
                              </AccordionTrigger>
                              <AccordionContent className="pl-4 pb-0">
                                <div className="flex flex-col space-y-2">
                                   {(item.name === 'Services' || item.name === 'Conditions') && (
                                    <MobileNavLink href={item.href} onClick={() => setMobileMenuOpen(false)}>All {item.name}</MobileNavLink>
                                   )}
                                   {item.sublinks.map((sublink) => (
                                    <MobileNavLink key={sublink.name} href={sublink.href} onClick={() => setMobileMenuOpen(false)}>
                                      {sublink.name}
                                    </MobileNavLink>
                                   ))}
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          );
                        }
                        if (item.external) {
                          return (
                            <div key={item.name} className="py-3">
                              <a
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-base font-medium text-[#4A5455] transition-colors hover:text-[#2D6762]"
                              >
                                {item.name}
                              </a>
                            </div>
                          );
                        }
                        return (
                          <div key={item.name} className="py-3">
                            <MobileNavLink href={item.href} onClick={() => setMobileMenuOpen(false)}>{item.name}</MobileNavLink>
                          </div>
                        );
                      })}
                    </Accordion>
                    <div className="pt-4">
                      <Link to="/start" onClick={() => setMobileMenuOpen(false)}>
                        <Button className="w-full gradient-button">
                          <span>Start Now</span>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </nav>
        </header>
      );
    };

    export default Header;