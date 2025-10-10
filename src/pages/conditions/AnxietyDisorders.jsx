
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

const AnxietyDisorders = () => {
    const faqs = [
    {
      question: "How do I know if my anxiety is a disorder?",
      answer: "While everyone feels anxious sometimes, it may be a disorder if your worry feels excessive, is difficult to control, and interferes with your daily life, work, or relationships for an extended period (e.g., six months or more)."
    },
    {
      question: "What is the difference between a panic attack and an anxiety attack?",
      answer: "Panic attacks are sudden, intense surges of fear that often occur without a clear trigger and peak within minutes. 'Anxiety attacks' isn't a clinical term, but it's often used to describe a period of high anxiety that can build up gradually in response to a stressor."
    },
    {
      question: "Can anxiety be cured?",
      answer: "While there may not be a 'cure,' anxiety disorders are highly treatable. Through therapy, medication, and lifestyle changes, most people can learn to manage their symptoms effectively and lead full, productive lives."
    }
  ];
  return (
    <TwoColumnLayout
      title="Anxiety Disorders"
      subtitle="Generalized Anxiety (GAD), Social Anxiety, Panic Disorders, Phobias"
      navLinks={conditionsLinks}
      navTitle="Conditions We Treat"
      pageType="conditions"
    >
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <DetailSection title="Overview">
          <p>Pathological fear and worry that impairs work, school, or relationships. Anxiety becomes a disorder when it's excessive, persistent, and disruptive to daily life, going beyond normal stress reactions.</p>
        </DetailSection>

        <DetailSection title="Core Symptoms">
          <ul className="list-disc pl-5 space-y-2">
            <li>Excessive, hard-to-control worry about various topics.</li>
            <li>Physical symptoms like restlessness, muscle tension, and fatigue.</li>
            <li>Sleep disturbances, including difficulty falling or staying asleep.</li>
            <li>Avoidance of situations that trigger anxiety.</li>
            <li>Sudden, intense episodes of fear known as panic attacks.</li>
            <li>Irrational fears of specific objects or situations (phobias).</li>
          </ul>
        </DetailSection>

        <DetailSection title="How We Assess">
          <p>Our assessment process is thorough and personalized, beginning with a comprehensive clinical interview to understand your unique symptoms, history, and life context. We explore the nature of your anxiety, its triggers, and its impact on your functioning.</p>
        </DetailSection>

        <DetailSection title="Treatment">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Therapy:</strong> We utilize evidence-based approaches like Cognitive Behavioral Therapy (CBT) to help you challenge anxious thought patterns and develop coping skills.</li>
            <li><strong>Medication:</strong> When appropriate, our providers may prescribe medication to help manage symptoms, with careful monitoring to ensure safety and effectiveness.</li>
          </ul>
        </DetailSection>

        <div className="bg-red-50 border-l-4 border-red-500 text-red-800 p-6 rounded-r-lg mb-10">
          <div className="flex items-center">
            <Zap className="h-8 w-8 mr-4 text-red-600" />
            <div>
              <h4 className="font-bold text-xl">When to Seek Urgent Help</h4>
              <p className="mt-1">Immediate attention is needed for suicidality, chest pain with medical risk (syncope), or a severe collapse in daily functioning. If you are in crisis, please call 911 or 988.</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Take the First Step Toward Calmer Days</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Start your journey to managing anxiety with expert, compassionate care.
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

export default AnxietyDisorders;
  