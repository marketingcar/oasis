import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';
import ServiceDetailLayout from '@/components/ServiceDetailLayout';

const Anxiety = () => {
  const benefits = [
    'Personalized therapy',
    'Medication management (when needed)',
    'Integrated care (psychiatric + family practice)',
    'Telehealth convenience',
  ];

  const faqs = [
    {
      question: 'Do I need medication for anxiety?',
      answer: 'Not always. Many people benefit from therapy alone. Medication can be helpful when symptoms are severe or interfere significantly with daily life.',
    },
    {
      question: 'Can anxiety treatment be done online?',
      answer: 'Yes! We offer secure telehealth sessions that are just as effective as in-person visits for most anxiety disorders.',
    },
  ];

  return (
    <ServiceDetailLayout>
      <Helmet>
        <title>Anxiety Treatment - Oasis Health Services</title>
        <meta name="description" content="Professional anxiety treatment through evidence-based therapy and medication management. Overcome overwhelming worries and panic with personalized care." />
      </Helmet>
      
      <section className="relative bg-gradient-to-br from-[#2D6762] to-[#69A08B] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Anxiety Treatment
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Find relief from overwhelming worry and regain control of your life
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D6762] mb-6">Understanding Anxiety</h2>
            <p className="text-lg text-[#4A5455] mb-4 leading-relaxed">
              Anxiety disorders can feel overwhelming — racing thoughts, restlessness, sleep difficulties, or constant worry that interferes with daily life.
            </p>
            <p className="text-lg text-[#4A5455] leading-relaxed">
              Anxiety is one of the most common mental health concerns, but it is also highly treatable.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img alt="Person experiencing relief from anxiety through therapy" src="https://images.unsplash.com/photo-1611566620327-5e879d9b0955" />
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#90AB98]/20 to-[#69A08B]/20 rounded-2xl">
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
              <CheckCircle className="h-6 w-6 text-[#2D6762] flex-shrink-0 mt-1" />
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
              className="p-6 bg-gradient-to-br from-[#90AB98]/10 to-[#69A08B]/10 rounded-lg"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Take the First Step Toward Calmer Days</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Start your journey to managing anxiety with expert, compassionate care.
          </p>
          <Link to="/start">
            <Button size="lg" className="bg-white text-[#EB615C] hover:bg-white/90 text-lg px-8 py-6">
              Start Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </section>
    </ServiceDetailLayout>
  );
};

export default Anxiety;