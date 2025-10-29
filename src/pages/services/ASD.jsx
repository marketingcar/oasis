import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';
import ServiceDetailLayout from '@/components/ServiceDetailLayout';
import OptimizedImage from '@/components/OptimizedImage';

const ASD = () => {
  const benefits = [
    'Personalized therapy',
    'Caregiver education',
    'Medication management for related conditions',
    'Early intervention (Holistic Wellness Intervention program)',
    'Telehealth access',
  ];

  const faqs = [
    {
      question: 'Do you see both children and adults with ASD?',
      answer: 'Yes. We provide comprehensive care for individuals of all ages on the autism spectrum.',
    },
    {
      question: 'Are complementary therapies recommended?',
      answer: 'We focus on evidence-based care that has been proven effective through research and clinical practice.',
    },
  ];

  return (
    <ServiceDetailLayout>
      <Helmet>
        <title>Autism Spectrum Disorder Treatment - Oasis Health Services</title>
        <meta name="description" content="Compassionate, evidence-based support for autism spectrum disorder. Personalized therapy, caregiver education, and coordinated care for all ages." />
      </Helmet>

      <section className="relative bg-gradient-to-br from-[#69A08B] to-[#90AB98] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Autism Spectrum Disorder
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Compassionate, evidence-based support for individuals and families
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D6762] mb-6">Understanding ASD</h2>
            <p className="text-lg text-[#4A5455] mb-4 leading-relaxed">
              Autism spectrum disorder affects communication, social interaction, and behavior. While there is no single cure, early intervention can help children develop key skills.
            </p>
            <p className="text-lg text-[#4A5455] leading-relaxed">
              Adults with ASD also benefit from therapy and coordinated support to navigate daily challenges and build on their strengths.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <OptimizedImage alt="Child with autism engaging in therapeutic activities" src="https://images.unsplash.com/photo-1631032024590-140cc8dd4b32" loading="lazy" />
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#69A08B]/10 to-[#90AB98]/10 rounded-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D6762] mb-6">How Oasis Helps</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm"
            >
              <CheckCircle className="h-6 w-6 text-[#69A08B] flex-shrink-0 mt-1" />
              <p className="text-lg text-[#4A5455]">{benefit}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D6762] mb-6">Frequently Asked Questions</h2>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-gradient-to-br from-[#69A08B]/10 to-[#90AB98]/10 rounded-lg"
            >
              <h3 className="text-xl font-bold text-[#2D6762] mb-3">{faq.question}</h3>
              <p className="text-[#4A5455] leading-relaxed">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 my-10 bg-gradient-to-br from-[#2D6762] to-[#69A08B] text-white rounded-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Discover Compassionate, Evidence-Based Support for ASD</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Get personalized care that helps individuals with ASD thrive at every stage of life.
          </p>
          <Link to="/start">
            <Button size="lg" className="bg-white text-[#69A08B] hover:bg-white/90 text-lg px-8 py-6">
              Start Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </section>
    </ServiceDetailLayout>
  );
};

export default ASD;