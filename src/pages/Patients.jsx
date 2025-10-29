
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, HelpCircle } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import OptimizedImage from '@/components/OptimizedImage';

const Patients = () => {
  const steps = [
    {
      number: '01',
      title: 'Complete a Secure Online Assessment',
      description: 'Fill out our confidential intake form to help us understand your needs.',
    },
    {
      number: '02',
      title: 'Receive a Free Consultation',
      description: 'Our team will review your responses and schedule a consultation if needed.',
    },
    {
      number: '03',
      title: 'Schedule Easily',
      description: 'Book your appointment through our secure online portal.',
    },
    {
      number: '04',
      title: 'Attend Your Session',
      description: 'Meet with your provider virtually or in person.',
    },
  ];

  const insurancePartners = [
    { name: 'Aetna', alt: 'Aetna logo', logo: 'https://horizons-cdn.hostinger.com/0bf89f29-e8e8-4300-9c8a-627c22f53622/a1da4b7ea507773a15fc0f9d0afda54e.webp' },
    { name: 'BlueCross BlueShield', alt: 'BlueCross BlueShield logo', logo: 'https://horizons-cdn.hostinger.com/0bf89f29-e8e8-4300-9c8a-627c22f53622/b4915d726b2da1904d14ac200e95ba27.webp' },
    { name: 'Cigna', alt: 'Cigna logo', logo: 'https://horizons-cdn.hostinger.com/0bf89f29-e8e8-4300-9c8a-627c22f53622/f778db83833b190c40c7e1eb8598b165.webp' },
    { name: 'Optum', alt: 'Optum logo', logo: 'https://horizons-cdn.hostinger.com/0bf89f29-e8e8-4300-9c8a-627c22f53622/cc8d5c1f30422780fab79fe1bfe8d7bb.webp' },
    { name: 'UnitedHealthcare', alt: 'UnitedHealthcare logo', logo: 'https://horizons-cdn.hostinger.com/0bf89f29-e8e8-4300-9c8a-627c22f53622/35b8e2b9fb67ed7f4f91564249adc06b.webp' },
    { name: 'UMR', alt: 'UMR logo', logo: 'https://horizons-cdn.hostinger.com/0bf89f29-e8e8-4300-9c8a-627c22f53622/1e3cc13010bffe27f18829d2a50f5e4c.webp' },
  ];

  const allInsuranceProviders = [
    'Aetna', 'Anthem', 'Beacon', 'Blue Cross Blue Shield', 'CareSource', 
    'Cigna Health Plans', 'Compsych', 'Coordinated Care', 'Humana', 
    'Magellan Health', 'Meritain Health', 'Optum', 'Oscar', 'Premera', 
    'Regence', 'TriCare', 'UMR', 'United Healthcare'
  ];

  return (
    <>
      <Helmet>
        <title>For Patients - Oasis Health Services</title>
        <meta name="description" content="Get started with Oasis Health Services. Complete our secure assessment, schedule your visit, and access patient resources." />
      </Helmet>

      <section className="relative bg-gradient-to-br from-[#2D6762] to-[#69A08B] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              For Patients
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Your journey to better mental health starts here
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D6762] mb-6">Getting Started</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#2D6762] to-[#69A08B] text-white text-2xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-[#2D6762] mb-2">{step.title}</h3>
                <p className="text-[#4A5455]">{step.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/start">
              <Button size="lg" className="bg-[#2D6762] hover:bg-[#2D6762]/90 text-white">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#90AB98]/20 to-[#69A08B]/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D6762] mb-4">Insurance Partners</h2>
            <p className="text-lg text-[#4A5455]">We work with major insurers to make care accessible</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {insurancePartners.map((partner, index) => (
              <motion.div key={partner.name} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="flex items-center justify-center p-4 bg-gray-50 rounded-lg h-24 grayscale hover:grayscale-0 transition-all">
                <OptimizedImage alt={partner.alt} className="max-h-12 object-contain" src={partner.logo} loading="lazy" />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Sheet>
              <SheetTrigger asChild>
                <button className="inline-flex items-center text-[#2D6762] text-lg hover:text-[#6D519D] transition-colors duration-300 group">
                  <span className="animated-underline">More insurance providers</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-white flex flex-col">
                <SheetHeader className="flex-shrink-0">
                  <SheetTitle className="text-2xl font-bold text-[#2D6762]">Insurance Providers We Work With</SheetTitle>
                </SheetHeader>
                <div className="flex-1 overflow-y-auto py-4 -mr-6 pr-6">
                  <ul className="space-y-3 text-lg text-[#4A5455]">
                    {allInsuranceProviders.map((provider) => (
                      <li key={provider} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-[#2D6762] mr-3 flex-shrink-0" />
                        {provider}
                      </li>
                    ))}
                  </ul>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-block p-4 bg-gradient-to-br from-[#2D6762] to-[#69A08B] rounded-full mb-6">
                <HelpCircle className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D6762] mb-6">Have Questions?</h2>
            <p className="text-lg text-[#4A5455] mb-8">
              We've compiled a list of frequently asked questions to help you get the information you need. Visit our FAQ page for answers about our services, insurance, and what to expect.
            </p>
            <Link to="/patients/faqs">
              <Button size="lg" className="bg-[#6D519D] hover:bg-[#6D519D]/90 text-white">
                View All FAQs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Patients;
