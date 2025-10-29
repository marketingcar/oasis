
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

const PsychoticDisorders = () => {
    const faqs = [
    {
      question: "What is the difference between hallucinations and delusions?",
      answer: "A hallucination is a sensory experience that isn't real, such as hearing voices or seeing things that aren't there. A delusion is a fixed, false belief that a person holds despite evidence to the contrary, such as believing they are being spied on or have special powers."
    },
    {
      question: "Is schizophrenia the same as 'split personality'?",
      answer: "No, this is a common misconception. Schizophrenia does not involve multiple personalities. That condition is now known as Dissociative Identity Disorder, which is a completely different diagnosis. Schizophrenia involves a 'split' from reality."
    },
    {
      question: "What does 'integrated care' mean for psychotic disorders?",
      answer: "Integrated care means we treat the whole person, not just the illness. It involves a combination of antipsychotic medication, individual and family therapy, psychoeducation to help everyone understand the condition, social skills training, and support for employment or education. This comprehensive approach leads to better long-term outcomes."
    }
  ];

  return (
    <TwoColumnLayout
      title="Psychotic Disorders"
      subtitle="Schizophrenia, Schizoaffective Disorder, Brief Psychotic Disorder"
      navLinks={conditionsLinks}
      navTitle="Conditions We Treat"
      pageType="conditions"
    >
      <SEO
        title="Psychotic Disorders Treatment"
        description="Integrated care for psychotic disorders including schizophrenia and schizoaffective disorder. Expert medication management and therapy."
        url="/conditions/psychotic-disorders"
        schema={[
          {
            '@context': 'https://schema.org',
            '@type': 'MedicalCondition',
            name: 'Psychotic Disorders',
            description: 'Integrated care for psychotic disorders including schizophrenia and schizoaffective disorder with medication and therapy.',
            possibleTreatment: {
              '@type': 'MedicalTherapy',
              name: 'Psychiatric Treatment and Therapy'
            }
          },
          getBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Conditions', url: '/conditions' },
            { name: 'Psychotic Disorders', url: '/conditions/psychotic-disorders' }
          ])
        ]}
      />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <DetailSection title="Overview">
          <p>These are serious mental health conditions characterized by a disconnect from reality (psychosis). They can involve hallucinations, delusions, disorganized thought and behavior, as well as "negative" symptoms like a lack of motivation or emotional expression, leading to a significant decline in functioning.</p>
        </DetailSection>

        <DetailSection title="Core Symptoms">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Hallucinations:</strong> Seeing, hearing, or feeling things that are not there.</li>
            <li><strong>Delusions:</strong> Fixed, false beliefs that are not based in reality.</li>
            <li><strong>Disorganized Thinking/Speech:</strong> Incoherent or illogical speech and thought patterns.</li>
            <li><strong>Negative Symptoms:</strong> Reduced emotional expression, lack of motivation, and social withdrawal.</li>
          </ul>
        </DetailSection>

        <DetailSection title="How We Assess">
          <p>A comprehensive psychiatric and medical workup is essential. This includes lab tests (like CBC, CMP, TSH), a substance use screen, and a detailed risk review. Input from family is often critical. In some cases, neuroimaging may be considered to rule out other medical causes.</p>
        </DetailSection>

        <DetailSection title="Treatment">
          <p>An integrated approach is key to managing psychotic disorders. Treatment includes:</p>
          <ul className="list-disc pl-5 space-y-2 mt-4">
            <li><strong>Antipsychotic Medications:</strong> The primary treatment to manage psychotic symptoms.</li>
            <li><strong>Psychoeducation:</strong> Helping individuals and families understand the illness and treatment.</li>
            <li><strong>Therapy:</strong> Cognitive Behavioral Therapy for psychosis (CBT-p), social skills training, and family interventions.</li>
            <li><strong>Supported Employment/Education:</strong> Assisting with reintegration into work or school.</li>
          </ul>
        </DetailSection>

        <div className="bg-red-50 border-l-4 border-red-500 text-red-800 p-6 rounded-r-lg mb-10">
          <div className="flex items-center">
            <Zap className="h-8 w-8 mr-4 text-red-600" />
            <div>
              <h4 className="font-bold text-xl">When to Seek Urgent Help</h4>
              <p className="mt-1">Immediate psychiatric evaluation is needed for command hallucinations (voices telling you to harm yourself or others), inability to care for basic needs, aggression, or catatonia. Call 911 or go to the nearest emergency room.</p>
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

      <section className="py-16 my-10 bg-gradient-to-br from-[#2D6762] to-[#69A08B] text-white rounded-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center container mx-auto px-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Integrated Support for Psychotic Disorders</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Find stability and improve quality of life with our comprehensive, evidence-based care.
          </p>
          <Link to="/start">
            <Button size="lg" className="bg-white text-[#2D6762] hover:bg-white/90 text-lg px-8 py-6">
              Get Help Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </section>

    </TwoColumnLayout>
  );
};

export default PsychoticDisorders;
  