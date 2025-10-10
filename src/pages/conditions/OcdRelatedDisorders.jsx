
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

const DetailSection = ({ title, children }) => (
  <div className="mb-10">
    <h3 className="text-2xl font-bold text-[#2D6762] mb-4">{title}</h3>
    <div className="prose prose-lg max-w-none text-[#4A5455]">{children}</div>
  </div>
);

const OcdRelatedDisorders = () => {
    const faqs = [
    {
      question: "What is Exposure and Response Prevention (ERP) therapy?",
      answer: "ERP is a type of Cognitive Behavioral Therapy (CBT) that is considered the gold-standard treatment for OCD. It involves gradually exposing you to your feared thoughts or situations (exposure) while refraining from engaging in compulsive behaviors (response prevention). This process helps your brain learn that the anxiety will decrease on its own, without needing the compulsion."
    },
    {
      question: "Is hoarding just being messy?",
      answer: "No. Hoarding disorder is a distinct condition where a person has persistent difficulty discarding possessions, leading to an accumulation of items that clutter living areas and compromise their intended use. This is different from being messy, as it stems from a perceived need to save items and distress associated with discarding them."
    },
    {
      question: "How is Body Dysmorphic Disorder (BDD) different from just being insecure about my appearance?",
      answer: "While many people have insecurities, BDD involves a preoccupation with one or more perceived flaws in appearance that are not observable or appear only slight to others. This preoccupation causes significant distress and impairment in daily life, often leading to repetitive behaviors like mirror checking or excessive grooming."
    }
  ];

  return (
    <TwoColumnLayout
      title="Obsessive-Compulsive & Related Disorders"
      subtitle="OCD, Body Dysmorphic Disorder (BDD), Hoarding Disorder"
      navLinks={conditionsLinks}
      navTitle="Conditions We Treat"
      pageType="conditions"
    >
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <DetailSection title="Overview">
          <p>This group of disorders involves intrusive thoughts (obsessions) or preoccupations, which lead to repetitive behaviors (compulsions) or mental acts. While these compulsions provide short-term relief, they ultimately sustain and worsen the impairment over time.</p>
        </DetailSection>

        <DetailSection title="Core Symptoms">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>OCD:</strong> Unwanted, recurring thoughts and urges (obsessions) and repetitive behaviors (compulsions) performed to reduce anxiety.</li>
            <li><strong>BDD:</strong> Preoccupation with perceived flaws in physical appearance that are not observable or appear slight to others.</li>
            <li><strong>Hoarding Disorder:</strong> Persistent difficulty discarding or parting with possessions, regardless of their actual value, leading to cluttered living spaces.</li>
          </ul>
        </DetailSection>

        <DetailSection title="How We Assess">
          <p>We use specialized assessment tools like the Y-BOCS for OCD and BDD-YBOCS for BDD. Our evaluation rules out other conditions like psychosis or ASD, assesses safety risks (especially in hoarding), and develops a clear picture of the disorder's impact.</p>
        </DetailSection>

        <DetailSection title="Treatment">
          <p>Effective treatment often combines medication and specialized therapy:</p>
          <ul className="list-disc pl-5 space-y-2 mt-4">
            <li><strong>Therapy:</strong> Exposure and Response Prevention (ERP) is a highly effective form of CBT for OCD.</li>
            <li><strong>Medication Management:</strong> SSRIs and other medications can be very helpful in reducing obsessions and compulsions.</li>
          </ul>
        </DetailSection>

        <div className="bg-red-50 border-l-4 border-red-500 text-red-800 p-6 rounded-r-lg mb-10">
          <div className="flex items-center">
            <Zap className="h-8 w-8 mr-4 text-red-600" />
            <div>
              <h4 className="font-bold text-xl">When to Seek Urgent Help</h4>
              <p className="mt-1">Immediate help is needed for severe self-neglect, significant fire or safety hazards from hoarding, or suicidality, particularly in BDD. If you are in crisis, call 911 or 988.</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Regain Control from Intrusive Thoughts</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Find freedom from the cycle of obsessions and compulsions with expert, compassionate care.
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

export default OcdRelatedDisorders;
  