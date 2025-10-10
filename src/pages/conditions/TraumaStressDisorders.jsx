
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

const TraumaStressDisorders = () => {
    const faqs = [
    {
      question: "What is the difference between PTSD and Acute Stress Disorder?",
      answer: "They have very similar symptoms, but the main difference is timing. Acute Stress Disorder is diagnosed when symptoms last from three days to one month after a traumatic event. If the symptoms persist for more than a month and cause significant distress or impairment, the diagnosis may be changed to Post-Traumatic Stress Disorder (PTSD)."
    },
    {
      question: "What is an Adjustment Disorder?",
      answer: "An Adjustment Disorder involves developing emotional or behavioral symptoms in response to an identifiable stressor (like a divorce, job loss, or serious illness). The distress is considered out of proportion to the severity of the stressor, and it significantly impairs social, occupational, or other important areas of functioning."
    },
    {
      question: "What does 'trauma-informed care' mean?",
      answer: "Trauma-informed care is an approach that assumes an individual is more likely than not to have a history of trauma. It recognizes the presence of trauma symptoms and acknowledges the role trauma may play in a person's life. This means we prioritize creating a physically and emotionally safe environment, fostering trust, and empowering you with choice and collaboration in your treatment."
    }
  ];

  return (
    <TwoColumnLayout
      title="Trauma & Stress-Related Disorders"
      subtitle="PTSD, Acute Stress, and Adjustment Disorders"
      navLinks={conditionsLinks}
      navTitle="Conditions We Treat"
      pageType="conditions"
    >
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <DetailSection title="Overview">
          <p>These disorders develop following exposure to a traumatic or significantly stressful event. They involve a psychological response characterized by intrusive memories, avoidance of reminders, negative changes in mood and thinking, and significant alterations in arousal and reactivity.</p>
        </DetailSection>

        <DetailSection title="Core Symptoms">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Intrusion:</strong> Recurrent, involuntary memories, flashbacks, or nightmares of the event.</li>
            <li><strong>Avoidance:</strong> Efforts to avoid distressing memories, thoughts, feelings, or external reminders of the event.</li>
            <li><strong>Negative Alterations in Cognition and Mood:</strong> Persistent negative beliefs, distorted blame, and feelings of detachment or estrangement.</li>
            <li><strong>Arousal and Reactivity:</strong> Irritable behavior, angry outbursts, hypervigilance, and an exaggerated startle response.</li>
          </ul>
        </DetailSection>

        <DetailSection title="How We Assess">
          <p>We use validated screening tools like the PCL-5 for PTSD and assess for acute stress and adjustment disorders based on DSM-5 criteria. Our assessment carefully differentiates these conditions from grief, traumatic brain injury (TBI), or substance use, and includes a thorough review of risks and available supports.</p>
        </DetailSection>

        <DetailSection title="Treatment">
          <p>Our trauma-informed approach prioritizes safety and stabilization. Treatment includes:</p>
          <ul className="list-disc pl-5 space-y-2 mt-4">
            <li><strong>Therapy:</strong> Trauma-focused therapies are central to processing the event and reducing symptoms. We may also refer for specialized treatments like EMDR when appropriate.</li>
            <li><strong>Medication Management:</strong> Medications can be effective in managing symptoms like anxiety, depression, and sleep disturbances associated with trauma.</li>
          </ul>
        </DetailSection>

        <div className="bg-red-50 border-l-4 border-red-500 text-red-800 p-6 rounded-r-lg mb-10">
          <div className="flex items-center">
            <Zap className="h-8 w-8 mr-4 text-red-600" />
            <div>
              <h4 className="font-bold text-xl">When to Seek Urgent Help</h4>
              <p className="mt-1">Immediate care is necessary for active suicidality, severe dissociation, or if you are in an unsafe environment. Please call 911 or 988, or go to the nearest emergency room.</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Find Healing and Resilience After Trauma</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Our compassionate, trauma-informed care can help you process difficult experiences and move forward.
          </p>
          <Link to="/start">
            <Button size="lg" className="bg-white text-[#2D6762] hover:bg-white/90 text-lg px-8 py-6">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </section>

    </TwoColumnLayout>
  );
};

export default TraumaStressDisorders;
  