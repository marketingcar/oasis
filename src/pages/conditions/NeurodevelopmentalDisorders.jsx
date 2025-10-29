
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap } from 'lucide-react';
import TwoColumnLayout from '@/components/TwoColumnLayout';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { conditionsLinks } from '@/lib/navLinks';
import SEO, { getBreadcrumbSchema } from '@/components/SEO';

const DetailSection = ({ title, children }) => (
  <div className="mb-10">
    <h3 className="text-2xl font-bold text-[#2D6762] mb-4">{title}</h3>
    <div className="prose prose-lg max-w-none text-[#4A5455]">{children}</div>
  </div>
);

const NeurodevelopmentalDisorders = () => {
    const faqs = [
    {
      question: "Is it possible to have both ADHD and Autism?",
      answer: "Yes, it is very common for ADHD and Autism Spectrum Disorder (ASD) to co-occur. Our comprehensive assessments are designed to evaluate for both conditions and understand how they interact, which allows us to create a more effective and holistic treatment plan."
    },
    {
      question: "I'm an adult, can I still be diagnosed with ADHD or ASD?",
      answer: "Absolutely. Many adults live with undiagnosed neurodevelopmental disorders. Our assessments are tailored for adults and include a thorough review of your childhood history and current challenges to provide an accurate diagnosis and guide treatment."
    },
    {
      question: "What kind of support is available besides medication?",
      answer: "Treatment is about more than just medication. We emphasize skills-based therapies (like CBT for ADHD), coaching for executive functions (planning, organization), social skills training, and creating supportive environments at home, school, and work."
    }
  ];

  return (
    <TwoColumnLayout
      title="Neurodevelopmental Disorders"
      subtitle="Attention-Deficit/Hyperactivity Disorder (ADHD), Autism Spectrum Disorder (ASD)"
      navLinks={conditionsLinks}
      navTitle="Conditions We Treat"
      pageType="conditions"
    >
      <SEO
        title="Neurodevelopmental Disorders Treatment"
        description="Comprehensive care for ADHD and Autism Spectrum Disorder. Expert assessment, therapy, and medication management for neurodevelopmental conditions."
        url="/conditions/neurodevelopmental-disorders"
        schema={[
          {
            '@context': 'https://schema.org',
            '@type': 'MedicalCondition',
            name: 'Neurodevelopmental Disorders',
            description: 'Comprehensive care for ADHD and Autism Spectrum Disorder including assessment, therapy, and medication management.',
            possibleTreatment: {
              '@type': 'MedicalTherapy',
              name: 'Psychiatric Treatment and Therapy'
            }
          },
          getBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Conditions', url: '/conditions' },
            { name: 'Neurodevelopmental Disorders', url: '/conditions/neurodevelopmental-disorders' }
          ])
        ]}
      />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <DetailSection title="Overview">
          <p>These are lifelong conditions that typically begin in childhood and affect attention, executive function, and social communication. They represent differences in brain development that lead to unique strengths and challenges.</p>
        </DetailSection>

        <DetailSection title="Core Symptoms">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>ADHD:</strong> A persistent pattern of inattention, impulsivity, and/or hyperactivity that interferes with functioning or development.</li>
            <li><strong>ASD:</strong> Characterized by differences in social communication and interaction, along with restricted interests, repetitive behaviors, and distinct sensory profiles.</li>
          </ul>
        </DetailSection>

        <DetailSection title="How We Assess">
          <p>Assessment includes a structured history, the use of standardized rating scales, and specialized testing like ADOS-2 for ASD or dedicated ADHD testing when indicated. This comprehensive approach ensures an accurate diagnosis and informs a personalized treatment plan.</p>
        </DetailSection>

        <DetailSection title="Treatment">
          <p>For both ADHD and ASD, treatment is multi-faceted and may include:</p>
          <ul className="list-disc pl-5 space-y-2 mt-4">
            <li><strong>Therapy:</strong> To build skills, develop coping strategies, and address co-occurring conditions like anxiety or depression.</li>
            <li><strong>Medication Management:</strong> To manage core symptoms and improve daily functioning, with careful monitoring and adjustment.</li>
          </ul>
        </DetailSection>

        <div className="bg-red-50 border-l-4 border-red-500 text-red-800 p-6 rounded-r-lg mb-10">
          <div className="flex items-center">
            <Zap className="h-8 w-8 mr-4 text-red-600" />
            <div>
              <h4 className="font-bold text-xl">When to Seek Urgent Help</h4>
              <p className="mt-1">Immediate intervention is necessary in cases of severe agitation, self-harm, or other significant safety concerns. If you are in crisis, please call 911 or 988.</p>
            </div>
          </div>
        </div>

        <DetailSection title="Frequently Asked Questions">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-gray-50 rounded-xl px-6 border-b-0">
                <AccordionTrigger className="text-lg font-semibold text-left text-[#2D6762] hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-[#4A5455] leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </DetailSection>
      </motion.div>

      <section className="py-16 my-10 bg-gradient-to-br from-[#EFAB2E] to-[#EB615C] text-white rounded-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center container mx-auto px-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Learn How Personalized Support Can Help You Thrive</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Get the comprehensive evaluation and tailored treatment you deserve for ADHD and ASD.
          </p>
          <Link to="/start">
            <Button size="lg" className="bg-white text-[#6D519D] hover:bg-white/90 text-lg px-8 py-6">
              Start Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </section>

    </TwoColumnLayout>
  );
};

export default NeurodevelopmentalDisorders;
  