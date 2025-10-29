
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Target, Users, ArrowRight } from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';

const About = () => {
  const providers = [
    {
      name: 'Olajumoke Akinyele, DNP, PMHNP-BC, FNP-C',
      title: 'Board-Certified Nurse Practitioner',
      bio: 'Board-certified nurse practitioner with 20+ years of experience, dually certified in family practice and psychiatric mental health. Specializes in integrated care for children and adults.',
      img: 'https://horizons-cdn.hostinger.com/0bf89f29-e8e8-4300-9c8a-627c22f53622/80ad63f8667e4b31d0ddc190e412e19f.png',
    },
    {
      name: 'Ann-Marie Taylor',
      title: 'Clinical Counselor',
      bio: 'Clinical counselor offering online therapy for anxiety, depression, trauma, and life transitions. Focuses on equipping clients with tools to reach their fullest potential. This provider only offers online therapy for patients in Georgia.',
      img: 'https://horizons-cdn.hostinger.com/0bf89f29-e8e8-4300-9c8a-627c22f53622/7de41d1a354e2c40d55bfdb7b2bd7de0.png',
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Oasis Health Services</title>
        <meta name="description" content="Learn about our mission, vision, and expert providers at Oasis Health Services. Bringing a fresh perspective to mental health care." />
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
              Bringing a Fresh Perspective to Mental Health Care
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#2D6762]/10 to-[#69A08B]/10 p-8 rounded-2xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[#2D6762] rounded-lg">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-[#2D6762]">Our Mission</h2>
              </div>
              <p className="text-lg text-[#4A5455] leading-relaxed">
                To be a trusted oasis of healing where individuals and families find balance, resilience, and hope through compassionate, integrative care.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#6D519D]/10 to-[#EFAB2E]/10 p-8 rounded-2xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[#6D519D] rounded-lg">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-[#2D6762]">Our Vision</h2>
              </div>
              <p className="text-lg text-[#4A5455] leading-relaxed">
                We empower every person to thrive in mind and body through holistic, evidence-based mental health and medical services. With compassion and respect, we create safe spaces — both virtual and in-person — where healing begins.
              </p>
            </motion.div>
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
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="h-10 w-10 text-[#2D6762]" />
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D6762]">Meet Our Providers</h2>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {providers.map((provider, index) => (
              <motion.div
                key={provider.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4 aspect-square">
                  <OptimizedImage
                    alt={`${provider.name} - ${provider.title}`}
                    className="rounded-lg object-cover w-full h-full"
                    src={provider.img}
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#2D6762] mb-2">{provider.name}</h3>
                <p className="text-[#6D519D] font-semibold mb-4">{provider.title}</p>
                <p className="text-[#4A5455] leading-relaxed">{provider.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D6762] mb-6">Explore What We Treat and How We Help</h2>
              <p className="text-xl mb-8 text-[#4A5455] max-w-3xl mx-auto">
                We offer specialized care for a wide range of mental health conditions and provide a variety of services to support your journey to wellness.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/conditions">
                   <button className="w-full sm:w-auto px-8 py-3 bg-[#2D6762] text-white font-semibold rounded-lg shadow-md hover:bg-[#2D6762]/90 transition-colors flex items-center justify-center gap-2">
                    Conditions We Treat <ArrowRight className="h-5 w-5" />
                  </button>
                </Link>
                <Link to="/services">
                   <button className="w-full sm:w-auto px-8 py-3 bg-[#6D519D] text-white font-semibold rounded-lg shadow-md hover:bg-[#6D519D]/90 transition-colors flex items-center justify-center gap-2">
                    Our Services <ArrowRight className="h-5 w-5" />
                  </button>
                </Link>
              </div>
            </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
