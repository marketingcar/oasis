
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Heart, Brain, Users, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import SEO, { getOrganizationSchema } from '@/components/SEO';
const Home = () => {
  const heroImages = [{
    src: 'https://horizons-cdn.hostinger.com/0bf89f29-e8e8-4300-9c8a-627c22f53622/72a4f4151125d938323fb2854f493120.jpg',
    alt: 'A group therapy session with a counselor offering tissues.'
  }, {
    src: 'https://horizons-cdn.hostinger.com/0bf89f29-e8e8-4300-9c8a-627c22f53622/c3bc08bf35fdf6c4ba923f2da2a38fe2.jpg',
    alt: 'Two women laughing and talking on a couch.'
  }, {
    src: 'https://horizons-cdn.hostinger.com/0bf89f29-e8e8-4300-9c8a-627c22f53622/b1069cd7a46868103f15c08f72cb9a17.jpg',
    alt: 'A group of people laughing together in a support group setting.'
  }, {
    src: 'https://horizons-cdn.hostinger.com/0bf89f29-e8e8-4300-9c8a-627c22f53622/d86919b972fa24b155bce6b8937ba94c.jpg',
    alt: 'A man talking to his therapist in a one-on-one session.'
  }];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [heroImages.length]);
  const conditions = [
    { name: 'Anxiety Disorders', href: '/conditions/anxiety-disorders', icon: Brain },
    { name: 'Mood Disorders', href: '/conditions/mood-disorders', icon: Heart },
    { name: 'ADHD', href: '/conditions/neurodevelopmental-disorders', icon: Brain },
    { name: 'Autism Spectrum Disorder', href: '/conditions/neurodevelopmental-disorders', icon: Users },
    { name: 'Substance-Related Disorders', href: '/conditions/substance-related-disorders', icon: Shield },
    { name: 'Trauma & Stress-Related', href: '/conditions/trauma-stress-disorders', icon: Heart },
    { name: 'Personality Disorders', href: '/conditions/personality-disorders', icon: Users },
    { name: 'OCD & Related Disorders', href: '/conditions/ocd-related-disorders', icon: Brain },
    { name: 'Psychotic Disorders', href: '/conditions/psychotic-disorders', icon: Brain },
  ];
  const insurancePartners = [{
    name: 'Aetna',
    alt: 'Aetna logo',
    logo: 'https://horizons-cdn.hostinger.com/0bf89f29-e8e8-4300-9c8a-627c22f53622/a1da4b7ea507773a15fc0f9d0afda54e.webp'
  }, {
    name: 'BlueCross BlueShield',
    alt: 'BlueCross BlueShield logo',
    logo: 'https://horizons-cdn.hostinger.com/0bf89f29-e8e8-4300-9c8a-627c22f53622/b4915d726b2da1904d14ac200e95ba27.webp'
  }, {
    name: 'Cigna',
    alt: 'Cigna logo',
    logo: 'https://horizons-cdn.hostinger.com/0bf89f29-e8e8-4300-9c8a-627c22f53622/f778db83833b190c40c7e1eb8598b165.webp'
  }, {
    name: 'Optum',
    alt: 'Optum logo',
    logo: 'https://horizons-cdn.hostinger.com/0bf89f29-e8e8-4300-9c8a-627c22f53622/cc8d5c1f30422780fab79fe1bfe8d7bb.webp'
  }, {
    name: 'UnitedHealthcare',
    alt: 'UnitedHealthcare logo',
    logo: 'https://horizons-cdn.hostinger.com/0bf89f29-e8e8-4300-9c8a-627c22f53622/35b8e2b9fb67ed7f4f91564249adc06b.webp'
  }, {
    name: 'UMR',
    alt: 'UMR logo',
    logo: 'https://horizons-cdn.hostinger.com/0bf89f29-e8e8-4300-9c8a-627c22f53622/1e3cc13010bffe27f18829d2a50f5e4c.webp'
  }];
  const allInsuranceProviders = ['Aetna', 'Anthem', 'Beacon', 'Blue Cross Blue Shield', 'CareSource', 'Cigna Health Plans', 'Compsych', 'Coordinated Care', 'Humana', 'Magellan Health', 'Meritain Health', 'Optum', 'Oscar', 'Premera', 'Regence', 'TriCare', 'UMR', 'United Healthcare'];
  const whyChoose = ['Commitment to holistic health', 'Personalized, integrative treatment plans', 'Telehealth convenience and accessibility', 'Evidence-based therapy and safe medication management'];
  const steps = [{
    number: '01',
    title: 'Online Assessment',
    description: 'Complete our secure online form'
  }, {
    number: '02',
    title: 'Free Consultation',
    description: 'Speak with our care team'
  }, {
    number: '03',
    title: 'Schedule Your Visit',
    description: 'Book your first appointment'
  }, {
    number: '04',
    title: 'Meet Your Provider',
    description: 'Begin your healing journey'
  }];
  return <>
      <SEO
        title="Oasis Health Services - Virtual Mental Health Care"
        description="Expert mental health care tailored for you, combining psychiatric and primary care for whole-person healing. Covered by insurance."
        keywords="mental health, psychiatry, therapy, telehealth, medication management, Georgia"
        url="/"
        schema={getOrganizationSchema()}
      />

      <section className="relative text-white pt-24 pb-32 lg:pt-32 lg:pb-40 overflow-hidden bg-gradient-to-br from-[#2d6762] to-[#1a3a37]">
         <div className="absolute inset-0 z-0">
          <svg className="absolute bottom-0 w-full h-auto text-[#1a3a37]/30" width="100%" height="100%" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <defs>
              <motion.path id="wave-path" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,176C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" animate={{
              d: ["M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,176C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,320L0,320Z", "M0,160L48,176C96,192,192,224,288,218.7C384,213,480,171,576,149.3C672,128,768,128,864,154.7C960,181,1056,235,1152,240C1248,245,1344,203,1392,181.3L1440,160L1440,320L0,320Z", "M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,176C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,320L0,320Z"]
            }} transition={{
              duration: 10,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror"
            }} />
            </defs>
            <use href="#wave-path" fill="currentColor" />
          </svg>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8
          }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-balance">
                Convenient, virtual care covered by insurance
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-white/90">
                A Fresh Perspective on Mental Health
              </p>
              <p className="text-lg mb-8 text-white/80 max-w-xl">
                Expert care tailored for you, combining psychiatric and primary care for whole-person healing.
              </p>
              <Link to="/start">
                <Button size="lg" className="gradient-button text-lg px-8 py-6 shadow-lg">
                  <span className="flex items-center">
                    Start Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                </Button>
              </Link>
            </motion.div>
            <motion.div className="hidden lg:block relative h-96 w-full" initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }}>
              <AnimatePresence>
                <motion.div key={currentImageIndex} className="absolute inset-0" initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} exit={{
                opacity: 0
              }} transition={{
                opacity: {
                  duration: 2,
                  ease: "easeInOut"
                }
              }}>
                  <img className="rounded-xl shadow-2xl object-cover w-full h-full" alt={heroImages[currentImageIndex].alt} src={heroImages[currentImageIndex].src} />
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D6762] mb-4">Insurance Partners</h2>
            <p className="text-lg text-[#4A5455]">We work with major insurers to make care accessible</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {insurancePartners.map((partner, index) => <motion.div key={partner.name} initial={{
            opacity: 0,
            scale: 0.8
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="flex items-center justify-center p-4 bg-gray-50 rounded-lg h-24 grayscale hover:grayscale-0 transition-all">
                <img alt={partner.alt} className="max-h-12 object-contain" src={partner.logo} />
              </motion.div>)}
          </div>

          <div className="text-center mt-4">
            <Sheet>
              <SheetTrigger asChild>
                <button className="inline-flex items-center text-[#2D6762] text-lg hover:text-[#6D519D] transition-colors duration-300 group">
                  <span className="animated-underline">More insurance providers</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-white">
                <SheetHeader>
                  <SheetTitle className="text-2xl font-bold text-[#2D6762]">Insurance Providers We Work With</SheetTitle>
                </SheetHeader>
                <div className="py-4">
                  <ul className="space-y-3 text-lg text-[#4A5455]">
                    {allInsuranceProviders.map(provider => <li key={provider} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-[#2D6762] mr-3" />
                        {provider}
                      </li>)}
                  </ul>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#2D6762]/20 to-[#69A08B]/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D6762] mb-6">Why Choose Oasis</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whyChoose.map((item, index) => <motion.div key={index} initial={{
            opacity: 0,
            x: index % 2 === 0 ? -20 : 20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <CheckCircle className="h-6 w-6 text-[#2D6762] flex-shrink-0 mt-1" />
                <p className="text-lg text-[#4A5455]">{item}</p>
              </motion.div>)}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D6762] mb-4">Your Path to Mental Wellness</h2>
            <p className="text-lg text-[#4A5455] max-w-3xl mx-auto">Achieving mental wellness is a journey, not a sprint. 

At Oasis Health Services, we walk alongside you with personalized care and guidance, supporting lasting well-being at your own pace.</p>
          </motion.div>

          <div className="text-center">
            <Link to="/start">
              <Button size="lg" className="gradient-button">
                <span>Start Now</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#2D6762]/30 to-[#6D519D]/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D6762] mb-6">Conditions We Treat</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map((condition, index) => {
            const Icon = condition.icon;
            return <motion.div key={condition.name} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.05
            }}>
                  <Link to={condition.href} className="h-full flex">
                    <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 group flex flex-col items-center justify-center text-center h-full w-full">
                      <Icon className="h-10 w-10 text-[#2D6762] mb-4 group-hover:text-[#6D519D] transition-colors" />
                      <h3 className="text-lg font-semibold text-[#2D6762] group-hover:text-[#6D519D] transition-colors">
                        {condition.name}
                      </h3>
                    </div>
                  </Link>
                </motion.div>;
          })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D6762] mb-6">How It Works</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => <motion.div key={step.number} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#2D6762] to-[#69A08B] text-white text-2xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-[#2D6762] mb-2">{step.title}</h3>
                <p className="text-[#4A5455]">{step.description}</p>
              </motion.div>)}
          </div>

          <div className="text-center mt-12">
            <Link to="/start">
              <Button size="lg" className="gradient-button">
                <span>Get Started Today</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>;
};
export default Home;
