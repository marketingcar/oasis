
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Zap, UserCheck, Repeat, Users, Star, Heart } from 'lucide-react';
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

const TherapyCounseling = () => {
    const modalities = [
        { icon: Brain, title: "Cognitive Behavioral Therapy (CBT)", description: "Structured, skills-based therapy linking thoughts, emotions, and behaviors. Targets depression, anxiety, panic, and more." },
        { icon: UserCheck, title: "Motivational Interviewing", description: "Client-centered method to resolve ambivalence and strengthen motivation for change. Ideal for substance use and medication adherence." },
        { icon: Star, title: "Solution-Focused Therapy", description: "Future-oriented therapy that amplifies strengths and finds exceptions to problems. Great for acute stress and relationship challenges." },
        { icon: Heart, title: "Trauma-Focused Care", description: "Utilizes PTSD frameworks, grounding techniques, and paced exposure to process trauma safely." },
        { icon: Repeat, title: "Acceptance & Commitment Therapy (ACT)", description: "Focuses on values-based action, cognitive defusion, and mindfulness to increase psychological flexibility." },
        { icon: Users, title: "Parent Coaching/Family Sessions", description: "Provides tools for behavior plans, communication, and school collaboration for child and teen care." }
    ];

  const faqs = [
    {
      question: "How do I know which type of therapy is right for me?",
      answer: "You don't have to figure that out on your own! During your initial assessment, your provider will discuss your goals and symptoms to recommend the therapeutic approach that best fits your needs. Our therapists are skilled in multiple modalities and often integrate techniques for a personalized experience."
    },
    {
      question: "How long does therapy take?",
      answer: "The duration of therapy is unique to each individual. Some people benefit from short-term, solution-focused therapy for a specific issue, while others engage in longer-term therapy to work on deeper patterns. We'll set goals together and regularly review your progress."
    },
    {
      question: "Can I do therapy and medication management at the same time?",
      answer: "Yes, absolutely. For many conditions, the combination of therapy and medication is the most effective treatment. Our team provides integrated care, meaning your therapist and medication provider can coordinate to ensure your treatment plan is seamless and effective."
    }
  ];

  return (
    <TwoColumnLayout
      title="Therapy & Counseling"
      navLinks={servicesLinks}
      navTitle="Our Services"
      pageType="services"
    >
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <DetailSection title="Purpose">
          <p>We offer evidence-based talk therapies designed to reduce symptoms, build practical skills, and improve your daily functioning. Therapy can be a stand-alone treatment or used in combination with medication management to create a comprehensive care plan.</p>
        </DetailSection>
        
        <DetailSection title="Formats">
          <p>Our therapy sessions are available both in-person (Georgia only) and via secure, HIPAA-compliant telehealth. We offer individual sessions, typically 45-60 minutes, on a weekly or bi-weekly basis, adjusting frequency as you make progress.</p>
        </DetailSection>

        <DetailSection title="Therapeutic Modalities">
            <div className="grid md:grid-cols-2 gap-6">
                {modalities.map((mod, index) => (
                    <div key={index} className="p-6 bg-white rounded-lg shadow-sm border h-full">
                        <mod.icon className="h-10 w-10 text-[#69A08B] mb-4" />
                        <h4 className="text-xl font-semibold text-[#2D6762] mb-2">{mod.title}</h4>
                        <p className="text-[#4A5455]">{mod.description}</p>
                    </div>
                ))}
            </div>
        </DetailSection>

        <div className="mt-10 bg-green-50 border-l-4 border-green-500 text-green-800 p-6 rounded-r-lg">
          <h4 className="font-bold text-xl">Psychoeducation: The Foundation of Care</h4>
          <p className="mt-1">A key part of all our therapy is providing clear, practical information about your condition, triggers, and treatment options. This empowers you to make informed decisions and actively participate in your healing journey.</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Skills and Find Relief?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Our evidence-based therapies can provide the tools and support you need.
          </p>
          <Link to="/start">
            <Button size="lg" className="bg-white text-[#EB615C] hover:bg-white/90 text-lg px-8 py-6">
              Start Therapy
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </section>
    </TwoColumnLayout>
  );
};

export default TherapyCounseling;
  