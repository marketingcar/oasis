import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';
import ServiceDetailLayout from '@/components/ServiceDetailLayout';

const Depression = () => {
  const benefits = [
    'Compassionate therapy',
    'Medication management',
    'Integrated care',
    'Telehealth access',
  ];

  const faqs = [
    {
      question: 'How long does treatment take?',
      answer: 'Treatment duration varies by individual, but most people begin to see improvement within a few weeks. Long-term recovery is a journey we support every step of the way.',
    },
    {
      question: 'Is therapy alone effective for depression?',
      answer: 'Yes, therapy can be highly effective for many people. Some individuals benefit from combining therapy with medication for optimal results.',
    },
  ];

  return (
    <ServiceDetailLayout>
      <Helmet>
        <title>Depression Treatment - Oasis Health Services</title>
        <meta name="description" content="Compassionate depression treatment that restores energy, interest, and joy. Professional care combining therapy and medication management." />
      </Helmet>

      <section className="relative bg-gradient-to-br from-[#EB615C] to-[#EFAB2E] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Depression Treatment
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Regain your energy, interest, and joy in life
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D6762] mb-6">Understanding Depression</h2>
            <p className="text-lg text-[#4A5455] mb-4 leading-relaxed">
              Depression is more than sadness — it can drain energy, reduce motivation, and impact relationships.
            </p>
            <p className="text-lg text-[#4A5455] leading-relaxed">
              Symptoms may include loss of interest, difficulty concentrating, changes in sleep or appetite, or feelings of hopelessness. With professional support, recovery is possible.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img alt="Person recovering from depression with renewed energy" src="https://images.unsplash.com/photo-1691649252065-1add93155f24" />
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#EB615C]/10 to-[#EFAB2E]/10 rounded-2xl">
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
              <CheckCircle className="h-6 w-6 text-[#EB615C] flex-shrink-0 mt-1" />
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
              className="p-6 bg-gradient-to-br from-[#EB615C]/10 to-[#EFAB2E]/10 rounded-lg"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Regain Interest and Joy in Life</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Start your journey to recovery with professional support and compassionate care.
          </p>
          <Link to="/start">
            <Button size="lg" className="bg-white text-[#2D6762] hover:bg-white/90 text-lg px-8 py-6">
              Start Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </section>
    </ServiceDetailLayout>
  );
};

export default Depression;