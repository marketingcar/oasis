import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';
import ServiceDetailLayout from '@/components/ServiceDetailLayout';

const ADHD = () => {
  const benefits = [
    'Comprehensive testing',
    'Tailored strategies',
    'Medication support',
    'Support for all ages',
  ];

  const faqs = [
    {
      question: 'Do you offer ADHD evaluations?',
      answer: 'Yes! We provide thorough ADHD assessments for children, teens, and adults to ensure accurate diagnosis and personalized treatment planning.',
    },
    {
      question: 'Can adults be diagnosed with ADHD?',
      answer: 'Absolutely. Many adults discover they have ADHD later in life. We specialize in adult ADHD diagnosis and treatment.',
    },
  ];

  return (
    <ServiceDetailLayout>
      <Helmet>
        <title>ADHD Treatment - Oasis Health Services</title>
        <meta name="description" content="Comprehensive ADHD evaluations and individualized treatment for children, teens, and adults. Expert care to help you thrive." />
      </Helmet>

      <section className="relative bg-gradient-to-br from-[#6D519D] to-[#2D6762] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              ADHD Treatment
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Personalized support to help you focus, organize, and thrive
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D6762] mb-6">Understanding ADHD</h2>
            <p className="text-lg text-[#4A5455] mb-4 leading-relaxed">
              Attention-Deficit/Hyperactivity Disorder (ADHD) affects both children and adults. Symptoms may include trouble focusing, forgetfulness, impulsivity, or restlessness.
            </p>
            <p className="text-lg text-[#4A5455] leading-relaxed">
              Left untreated, ADHD can affect school, work, and relationships. With the right support, individuals with ADHD can thrive.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img alt="Person with ADHD successfully focusing on work" src="https://images.unsplash.com/photo-1620206299315-db98c1578420" />
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#6D519D]/10 to-[#2D6762]/10 rounded-2xl">
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
              <CheckCircle className="h-6 w-6 text-[#6D519D] flex-shrink-0 mt-1" />
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
              className="p-6 bg-gradient-to-br from-[#6D519D]/10 to-[#2D6762]/10 rounded-lg"
            >
              <h3 className="text-xl font-bold text-[#2D6762] mb-3">{faq.question}</h3>
              <p className="text-[#4A5455] leading-relaxed">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 my-10 bg-gradient-to-br from-[#EFAB2E] to-[#EB615C] text-white rounded-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Learn How Personalized ADHD Support Can Help You Thrive</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Get the comprehensive evaluation and tailored treatment you deserve.
          </p>
          <Link to="/start">
            <Button size="lg" className="bg-white text-[#6D519D] hover:bg-white/90 text-lg px-8 py-6">
              Start Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </section>
    </ServiceDetailLayout>
  );
};

export default ADHD;