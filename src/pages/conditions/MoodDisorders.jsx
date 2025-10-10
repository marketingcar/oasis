
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

const MoodDisorders = () => {
    const faqs = [
    {
      question: "What's the difference between depression and just feeling sad?",
      answer: "Sadness is a normal human emotion that usually passes with time. Clinical depression (Major Depressive Disorder) is a persistent low mood accompanied by other symptoms like loss of interest, changes in sleep or appetite, and feelings of worthlessness that significantly impair daily functioning for at least two weeks."
    },
    {
      question: "Is bipolar disorder just mood swings?",
      answer: "No. The mood shifts in bipolar disorder are more extreme and sustained than typical mood swings. They involve distinct episodes of depression and mania (or hypomania), which are periods of unusually elevated mood, energy, and activity that can last for days or weeks and cause significant disruption."
    },
    {
      question: "Can I manage a mood disorder without medication?",
      answer: "For some people, especially with mild to moderate depression or dysthymia, therapy and lifestyle changes can be very effective. For bipolar disorder and more severe depression, medication is often a crucial component of treatment to ensure mood stability and safety. We work with you to create a personalized plan."
    }
  ];
  return (
    <TwoColumnLayout
      title="Mood Disorders"
      subtitle="Major Depressive Disorder (MDD), Bipolar Disorders, Dysthymia"
      navLinks={conditionsLinks}
      navTitle="Conditions We Treat"
      pageType="conditions"
    >
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <DetailSection title="Overview">
          <p>Disorders characterized by disturbances in mood intensity, duration, or cycling that significantly impact daily functioning. These conditions go beyond typical sadness or happiness and involve persistent, debilitating changes in emotional state.</p>
        </DetailSection>

        <DetailSection title="Core Symptoms">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Depression:</strong> Persistent low mood, loss of interest or pleasure (anhedonia), changes in sleep or appetite, feelings of guilt or worthlessness, and slowed thinking.</li>
            <li><strong>Bipolar/Mania:</strong> Episodic elevated, expansive, or irritable mood, with increased energy, decreased need for sleep, racing thoughts, and impulsive or risky behaviors.</li>
          </ul>
        </DetailSection>

        <DetailSection title="How We Assess">
          <p>Our assessment involves validated screening tools like the PHQ-9 (for depression) and MDQ (for bipolar), along with mood charting to track patterns. We conduct a thorough suicide risk assessment and may recommend a medical workup to rule out other causes. For suspected bipolar disorder, input from family or close contacts (collateral) can be crucial.</p>
        </DetailSection>

        <DetailSection title="Treatment">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Depression & Dysthymia:</strong> Treatment often involves a combination of therapy (like CBT) and/or medication management to alleviate symptoms and build resilience.</li>
            <li><strong>Bipolar Disorder:</strong> Medication management is the cornerstone of treatment to stabilize mood and prevent episodes. Therapy is also a key component for skill-building and support.</li>
          </ul>
        </DetailSection>

        <div className="bg-red-50 border-l-4 border-red-500 text-red-800 p-6 rounded-r-lg mb-10">
          <div className="flex items-center">
            <Zap className="h-8 w-8 mr-4 text-red-600" />
            <div>
              <h4 className="font-bold text-xl">When to Seek Urgent Help</h4>
              <p className="mt-1">Seek immediate help for active suicidal intent, manic episodes with significant risk-taking behavior, or severe depression with psychotic features. If you are in crisis, please call 911 or 988.</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Regain Interest and Joy in Life</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Start your journey to recovery with professional support and compassionate care for mood disorders.
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

export default MoodDisorders;
  