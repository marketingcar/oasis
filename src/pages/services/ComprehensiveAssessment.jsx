
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, User, FilePlus, MessageSquare } from 'lucide-react';
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

const ComprehensiveAssessment = () => {
  const steps = [
    {
      icon: FilePlus,
      title: "Digital Intake",
      description: "Complete digital intake, consent, and releases (ROI)."
    },
    {
      icon: User,
      title: "Upload Documents",
      description: "Securely upload your ID and insurance card."
    },
    {
      icon: MessageSquare,
      title: "Meet Your Provider",
      description: "Engage in a thorough evaluation via telehealth or in-person (GA only)."
    }
  ];

  const faqs = [
    {
      question: "What should I expect during my first appointment?",
      answer: "Your first appointment is a conversation. Your provider will ask about your current concerns, symptoms, personal and family history, and what you hope to achieve. It's a collaborative process to understand your unique situation. Be prepared to talk openly and honestly."
    },
    {
      question: "How long does a comprehensive assessment take?",
      answer: "A typical initial assessment lasts between 60 and 90 minutes. This allows us enough time to be thorough and ensure we have a good understanding of your needs without you feeling rushed."
    },
    {
      question: "Will I get a diagnosis and treatment plan in the first session?",
      answer: "In many cases, yes. The goal of the assessment is to establish a working diagnosis and an initial treatment plan. This plan might include therapy, medication, lifestyle recommendations, or further testing. It's a starting point that we will refine together over time."
    }
  ];

  return (
    <TwoColumnLayout
      title="Comprehensive Psychiatric Assessment & Diagnosis"
      navLinks={servicesLinks}
      navTitle="Our Services"
      pageType="services"
    >
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <DetailSection title="Purpose">
          <p>Our comprehensive assessment is the crucial first step in your mental wellness journey. This thorough initial appointment is designed to deeply understand your symptoms, history, risks, strengths, and goals. The outcome is a collaborative working diagnosis and a personalized initial care plan tailored just for you.</p>
        </DetailSection>

        <DetailSection title="Who It’s For">
          <p>This service is for adults and adolescents seeking a professional evaluation for a wide range of concerns, including:</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mt-4">
            <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-2 text-[#2D6762]" /> Mood & Anxiety</li>
            <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-2 text-[#2D6762]" /> Trauma & Stress</li>
            <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-2 text-[#2D6762]" /> Psychosis</li>
            <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-2 text-[#2D6762]" /> ADHD & OCD</li>
            <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-2 text-[#2D6762]" /> Sleep Concerns</li>
            <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-2 text-[#2D6762]" /> Substance-Related Issues</li>
            <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-2 text-[#2D6762]" /> Complex Presentations</li>
          </ul>
        </DetailSection>

        <DetailSection title="How It Works">
            <div className="grid md:grid-cols-3 gap-8">
                {steps.map((step, index) => (
                    <div key={index} className="text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#2D6762] to-[#69A08B] text-white mb-4">
                            <step.icon className="h-8 w-8" />
                        </div>
                        <h4 className="text-xl font-semibold text-[#2D6762] mb-2">{step.title}</h4>
                        <p>{step.description}</p>
                    </div>
                ))}
            </div>
        </DetailSection>
        
        <DetailSection title="Format">
            <p>We offer flexible formats to meet your needs, including HIPAA-compliant telehealth sessions with state-licensed providers. For those in Georgia, in-person appointments are also available.</p>
        </DetailSection>

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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Clarity and a Path Forward?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            A thorough assessment is the first step toward effective treatment. Schedule your comprehensive evaluation today.
          </p>
          <Link to="/start">
            <Button size="lg" className="bg-white text-[#EB615C] hover:bg-white/90 text-lg px-8 py-6">
              Start Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </section>
    </TwoColumnLayout>
  );
};

export default ComprehensiveAssessment;
  