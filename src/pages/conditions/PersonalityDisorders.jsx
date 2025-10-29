
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

const PersonalityDisorders = () => {
    const faqs = [
    {
      question: "Why is therapy the first-line treatment for personality disorders?",
      answer: "Personality disorders involve deeply ingrained patterns of thinking and behavior. Therapy, especially long-term and structured modalities like Dialectical Behavior Therapy (DBT), is essential for building self-awareness, learning new coping skills, improving emotional regulation, and fostering healthier relationship patterns. Medication can help with co-occurring symptoms but doesn't change the underlying personality structure."
    },
    {
      question: "Is a personality disorder diagnosis permanent?",
      answer: "While personality traits are stable, a diagnosis is not necessarily a life sentence. With commitment to therapy and hard work, individuals can learn to manage their symptoms so effectively that they may no longer meet the diagnostic criteria for the disorder. The goal is to reduce distress and improve functioning."
    },
    {
      question: "What is the difference between Obsessive-Compulsive Personality Disorder (OCPD) and OCD?",
      answer: "While they sound similar, they are different. OCD involves unwanted, intrusive thoughts (obsessions) and repetitive behaviors (compulsions) to relieve anxiety. OCPD is a pervasive pattern of preoccupation with orderliness, perfectionism, and control. People with OCPD often see their way of thinking as 'the right way,' whereas people with OCD are typically distressed by their obsessions."
    }
  ];

  return (
    <TwoColumnLayout
      title="Personality Disorders"
      subtitle="Borderline (BPD), Obsessive-Compulsive (OCPD), Anti-Social (ASPD)"
      navLinks={conditionsLinks}
      navTitle="Conditions We Treat"
      pageType="conditions"
    >
      <SEO
        title="Personality Disorders Treatment"
        description="Specialized therapy for personality disorders including Borderline, Obsessive-Compulsive, and Anti-Social personality disorders. Expert DBT and care."
        url="/conditions/personality-disorders"
        schema={[
          {
            '@context': 'https://schema.org',
            '@type': 'MedicalCondition',
            name: 'Personality Disorders',
            description: 'Specialized therapy for personality disorders including Borderline, Obsessive-Compulsive, and Anti-Social personality disorders.',
            possibleTreatment: {
              '@type': 'MedicalTherapy',
              name: 'Psychiatric Treatment and Therapy'
            }
          },
          getBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Conditions', url: '/conditions' },
            { name: 'Personality Disorders', url: '/conditions/personality-disorders' }
          ])
        ]}
      />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <DetailSection title="Overview">
          <p>These are enduring, inflexible patterns of cognition, affect, and behavior that deviate markedly from cultural expectations, causing significant distress and impairment in social, occupational, or other important areas of functioning.</p>
        </DetailSection>

        <DetailSection title="Core Symptoms">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>BPD:</strong> Intense fear of abandonment, unstable relationships, chronic feelings of emptiness, impulsivity, and risk of self-harm.</li>
            <li><strong>OCPD:</strong> Preoccupation with perfectionism, orderliness, and control, at the expense of flexibility, openness, and efficiency.</li>
            <li><strong>ASPD:</strong> A pervasive pattern of disregard for and violation of the rights of others, occurring since age 15.</li>
          </ul>
        </DetailSection>

        <DetailSection title="How We Assess">
          <p>Assessment includes a structured clinical interview, screening for trauma, ADHD, and substance use, and a thorough risk assessment. When appropriate and with consent, input from family or partners can provide valuable context.</p>
        </DetailSection>

        <DetailSection title="Treatment">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Therapy:</strong> Therapy is the first-line treatment, with modalities like Dialectical Behavior Therapy (DBT) for BPD being highly effective.</li>
            <li><strong>Medication Management:</strong> While there are no medications specifically for personality disorders, we can treat co-occurring conditions like depression or anxiety to help stabilize mood and improve overall functioning.</li>
          </ul>
        </DetailSection>

        <div className="bg-red-50 border-l-4 border-red-500 text-red-800 p-6 rounded-r-lg mb-10">
          <div className="flex items-center">
            <Zap className="h-8 w-8 mr-4 text-red-600" />
            <div>
              <h4 className="font-bold text-xl">When to Seek Urgent Help</h4>
              <p className="mt-1">Immediate care is critical for active self-harm, suicidal behaviors, or significant risk of violence. If you or someone you know is in crisis, call 911 or 988.</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Build Healthier Relationship Patterns</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Find stability and develop effective coping skills with specialized, compassionate care.
          </p>
          <Link to="/start">
            <Button size="lg" className="bg-white text-[#2D6762] hover:bg-white/90 text-lg px-8 py-6">
              Start Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </section>

    </TwoColumnLayout>
  );
};

export default PersonalityDisorders;
  