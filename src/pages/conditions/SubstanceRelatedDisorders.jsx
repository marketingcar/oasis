
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

const SubstanceRelatedDisorders = () => {
    const faqs = [
    {
      question: "What is 'harm reduction'?",
      answer: "Harm reduction is a practical and compassionate approach that aims to reduce the negative consequences associated with substance use. Instead of demanding immediate abstinence, it focuses on meeting people where they are and supporting any positive change. This can include strategies like reducing use, using more safely, and preventing overdose."
    },
    {
      question: "What is Medication-Assisted Treatment (MAT)?",
      answer: "MAT combines behavioral therapy and medications to treat substance use disorders. It's most commonly used for opioid use disorder (e.g., with buprenorphine) and alcohol use disorder (e.g., with naltrexone). The medications help reduce cravings and withdrawal symptoms, which allows individuals to focus on their recovery in therapy."
    },
    {
      question: "Will I be treated if I'm using multiple substances (polysubstance abuse)?",
      answer: "Yes. Our integrated approach is designed to handle complex cases, including polysubstance use. We prioritize safety risks first and then develop a stepwise plan to address each substance, carefully checking for medication interactions and combining therapies to support your overall recovery."
    }
  ];

  return (
    <TwoColumnLayout
      title="Substance-Related & Addictive Disorders"
      subtitle="Alcohol, Drugs, Gambling"
      navLinks={conditionsLinks}
      navTitle="Conditions We Treat"
      pageType="conditions"
    >
      <SEO
        title="Substance Use Disorder Treatment"
        description="Compassionate treatment for substance use and addictive disorders. Harm reduction approach with MAT, therapy, and comprehensive support."
        url="/conditions/substance-related-disorders"
        schema={[
          {
            '@context': 'https://schema.org',
            '@type': 'MedicalCondition',
            name: 'Substance-Related & Addictive Disorders',
            description: 'Compassionate treatment for substance use and addictive disorders with harm reduction, MAT, and therapy.',
            possibleTreatment: {
              '@type': 'MedicalTherapy',
              name: 'Psychiatric Treatment and Therapy'
            }
          },
          getBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Conditions', url: '/conditions' },
            { name: 'Substance-Related Disorders', url: '/conditions/substance-related-disorders' }
          ])
        ]}
      />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <DetailSection title="Overview">
          <p>These disorders involve the compulsive use of a substance or engagement in a behavior (like gambling) despite significant harm to one's health, relationships, and life roles. Key features include intense cravings, loss of control, and often tolerance and withdrawal.</p>
        </DetailSection>

        <DetailSection title="Core Symptoms">
          <ul className="list-disc pl-5 space-y-2">
            <li>Using more of a substance or for longer than intended.</li>
            <li>Unsuccessful efforts to cut down or control use.</li>
            <li>Spending a great deal of time obtaining, using, or recovering from the substance.</li>
            <li>Craving, or a strong desire or urge to use.</li>
            <li>Failure to fulfill major role obligations at work, school, or home.</li>
            <li>Continued use despite having persistent social or interpersonal problems.</li>
          </ul>
        </DetailSection>

        <DetailSection title="How We Assess">
          <p>Our assessment follows DSM-5 criteria and includes a comprehensive review of co-occurring mental health conditions. We use lab tests (like LFTs), Prescription Drug Monitoring Program (PDMP) checks, and urine drug screens (UDS) as needed. A key part of our assessment is stratifying withdrawal risk to ensure safety.</p>
        </DetailSection>

        <DetailSection title="Treatment">
          <p>We provide an integrated, harm-reduction approach that combines:</p>
          <ul className="list-disc pl-5 space-y-2 mt-4">
            <li><strong>Therapy:</strong> Modalities like Motivational Interviewing and CBT to build skills and support change.</li>
            <li><strong>Medication Management:</strong> Including Medication-Assisted Treatment (MAT) to manage cravings and withdrawal for certain substance use disorders.</li>
          </ul>
          <Link to="/services/substance-use-disorder-treatment" className="text-[#2D6762] hover:text-[#6D519D] font-bold inline-flex items-center mt-4">
              Learn more about our SUD Treatment services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
        </DetailSection>

        <div className="bg-red-50 border-l-4 border-red-500 text-red-800 p-6 rounded-r-lg mb-10">
          <div className="flex items-center">
            <Zap className="h-8 w-8 mr-4 text-red-600" />
            <div>
              <h4 className="font-bold text-xl">When to Seek Urgent Help</h4>
              <p className="mt-1">Immediate medical attention is required for severe withdrawal symptoms (e.g., seizures, delirium tremens), overdose, or active suicidality. Please call 911 or go to the nearest emergency room.</p>
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

    </TwoColumnLayout>
  );
};

export default SubstanceRelatedDisorders;
  