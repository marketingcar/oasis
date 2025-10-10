
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileCheck, Brain, MessageCircle, Shield, ListChecks } from 'lucide-react';
import TwoColumnLayout from '@/components/TwoColumnLayout';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { servicesLinks } from '@/lib/navLinks';

const DetailSection = ({ title, children }) => (
  <div className="mb-10">
    <h3 className="text-2xl font-bold text-[#2D6762] mb-4">{title}</h3>
    <div className="prose prose-lg max-w-none text-[#4A5455]">{children}</div>
  </div>
);

const AdhdTesting = () => {
    const treatmentOptions = [
        { icon: Brain, title: 'Medication', description: 'Stimulant and non-stimulant options, with a clear dosing and monitoring plan.' },
        { icon: MessageCircle, title: 'Therapies', description: 'CBT for ADHD, skills coaching, and organizational strategies.' },
        { icon: ListChecks, title: 'Care Coordination', description: 'Collaboration with primary care, therapists, and schools.' }
    ];

    const faqs = [
    {
      question: "How long does ADHD testing take?",
      answer: "The process varies but typically involves an initial comprehensive interview (60-90 minutes), completing standardized rating scales, and then a feedback session to discuss the results and treatment plan. Some cases may require more extensive neuropsychological testing."
    },
    {
      question: "Are stimulant medications safe?",
      answer: "When prescribed and monitored correctly by a qualified provider, stimulant medications are generally safe and effective for treating ADHD. We have a strict safety policy that includes reviewing your medical history, monitoring vital signs like blood pressure, and regular follow-ups to manage any potential side effects."
    },
    {
      question: "What if I don't want to take medication?",
      answer: "That's perfectly fine. Medication is just one tool. We also offer highly effective non-medication treatments, including Cognitive Behavioral Therapy (CBT) for ADHD, skills coaching to improve organization and time management, and lifestyle interventions. We will work with you to create a plan that you are comfortable with."
    }
  ];

  return (
    <TwoColumnLayout
      title="ADHD Testing & Management"
      navLinks={servicesLinks}
      navTitle="Our Services"
      pageType="services"
    >
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <DetailSection title="Purpose">
          <p>This specialized service is designed to thoroughly evaluate concerns related to attention, impulsivity, and executive function. Our goal is to confirm or rule out ADHD and build a clear, actionable plan to improve symptom control and daily performance at school, work, and home.</p>
        </DetailSection>
        
        <DetailSection title="Who It’s For">
          <p>This service is for adults and adolescents experiencing persistent challenges with inattention, hyperactivity, impulsivity, disorganization, or task-completion that impact their quality of life.</p>
        </DetailSection>

        <DetailSection title="What We Assess">
            <p>Our comprehensive assessment includes a detailed symptom history, evaluation of functional impact, and careful screening for other conditions that can mimic ADHD, such as anxiety, depression, sleep issues, or substance use. We offer both in-person and online testing formats.</p>
        </DetailSection>

        <DetailSection title="Treatment Options">
            <div className="grid md:grid-cols-3 gap-8">
                {treatmentOptions.map((option, index) => (
                     <div key={index} className="p-6 bg-gray-50 rounded-lg">
                        <option.icon className="h-10 w-10 text-[#EB615C] mb-4" />
                        <h4 className="text-xl font-semibold text-[#2D6762] mb-2">{option.title}</h4>
                        <p>{option.description}</p>
                    </div>
                ))}
            </div>
        </DetailSection>

         <div className="mt-12 mb-12 bg-blue-50 border-l-4 border-blue-500 text-blue-800 p-8 rounded-r-lg">
          <div className="flex items-center">
            <Shield className="h-8 w-8 mr-4 text-blue-600 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-xl">Medication Safety & Controlled Substance Policy</h4>
              <p className="mt-1">Patient safety is our top priority. Our policy includes PDMP checks, informed consent, baseline vitals with RPM, possible urine drug screens, and secure e-prescribing. We require regular follow-ups and do not replace lost prescriptions.</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Improve Focus and Performance?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Our specialized ADHD testing and management can provide the clarity and tools you need to thrive.
          </p>
          <Link to="/start">
            <Button size="lg" className="bg-white text-[#2D6762] hover:bg-white/90 text-lg px-8 py-6">
              Schedule an Evaluation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </section>
    </TwoColumnLayout>
  );
};

export default AdhdTesting;
  