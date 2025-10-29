import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';
import ServiceDetailLayout from '@/components/ServiceDetailLayout';
import OptimizedImage from '@/components/OptimizedImage';

const SUD = () => {
  const benefits = [
    'Thorough assessment',
    'Therapy + medication support',
    'Telehealth flexibility',
    'Remote patient monitoring',
    'Collaborative referrals',
  ];

  const faqs = [
    {
      question: 'Do you provide medication for cravings?',
      answer: 'Yes. We offer medication-assisted treatment (MAT) to help manage cravings and support long-term recovery.',
    },
    {
      question: 'Can I do recovery care from home?',
      answer: 'Yes. Our telehealth services and remote patient monitoring allow you to receive quality care from the comfort of your home.',
    },
  ];

  return (
    <ServiceDetailLayout>
      <Helmet>
        <title>Substance Use Disorder Treatment - Oasis Health Services</title>
        <meta name="description" content="Safe, supportive path to recovery from substance use disorder. Therapy, medication support, and remote monitoring for lasting recovery." />
      </Helmet>

      <section className="relative bg-gradient-to-br from-[#EFAB2E] to-[#EB615C] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Substance Use Disorder
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              A safe, supportive path to recovery and lasting wellness
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D6762] mb-6">Understanding SUD</h2>
            <p className="text-lg text-[#4A5455] mb-4 leading-relaxed">
              Substance use disorder is a condition where substance use continues despite harmful consequences. It can involve cravings, loss of control, tolerance, and withdrawal symptoms.
            </p>
            <p className="text-lg text-[#4A5455] leading-relaxed">
              Recovery is possible with the right support, treatment, and commitment to change.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <OptimizedImage alt="Person in recovery from substance use disorder" src="https://images.unsplash.com/photo-1689689753565-3ee98e4cf3fd" loading="lazy" />
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#EFAB2E]/10 to-[#EB615C]/10 rounded-2xl">
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
              <CheckCircle className="h-6 w-6 text-[#EFAB2E] flex-shrink-0 mt-1" />
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
              className="p-6 bg-gradient-to-br from-[#EFAB2E]/10 to-[#EB615C]/10 rounded-lg"
            >
              <h3 className="text-xl font-bold text-[#2D6762] mb-3">{faq.question}</h3>
              <p className="text-[#4A5455] leading-relaxed">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 my-10 bg-gradient-to-br from-[#2D6762] to-[#6D519D] text-white rounded-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Begin a Safe, Supportive Path to Recovery</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Take the first step toward lasting recovery with expert care and compassionate support.
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

export default SUD;