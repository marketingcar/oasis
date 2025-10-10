
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, CheckCircle, Activity, Brain } from 'lucide-react';
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

const SudTreatment = () => {
    const treatments = [
        { title: 'Alcohol Use Disorder (AUD)', description: 'Medications like Naltrexone and Acamprosate, combined with relapse-prevention skills and lab monitoring.' },
        { title: 'Nicotine Dependence', description: 'Varenicline, Bupropion, and nicotine-replacement therapy, supported by quit-date planning and coping skills.' },
        { title: 'Opioid Dependency (Buprenorphine/Naloxone)', description: 'Office-based induction and maintenance for eligible patients, including overdose education and counseling.' },
        { title: 'Stimulant Use Disorder', description: 'Focus on evidence-based behavioral strategies like contingency management, addressing sleep, mood, and co-occurring ADHD.' },
        { title: 'Dual Diagnosis', description: 'Integrated plans for SUD plus co-occurring depression, anxiety, PTSD, or other disorders, prioritizing safety and stabilization.' },
    ];
    
  const faqs = [
    {
      question: "What is a 'dual diagnosis'?",
      answer: "A dual diagnosis (or co-occurring disorder) is when someone experiences a mental health disorder and a substance use disorder at the same time. We offer integrated treatment that addresses both conditions simultaneously, as they often influence each other."
    },
    {
      question: "Do you require abstinence?",
      answer: "Our approach is harm-reduction oriented, meaning we meet you where you are. While abstinence is often the goal, we focus on any positive change, whether it's reducing use, using more safely, or entering a formal recovery program. We support your goals."
    },
    {
      question: "What happens if I need a higher level of care, like detox?",
      answer: "Our services are for outpatient care. If our assessment determines that you require a higher level of care, such as medical detoxification or residential treatment, we will provide you with a referral and help coordinate that transition to ensure you get the appropriate level of support."
    }
  ];

  return (
    <TwoColumnLayout
      title="Substance Use Disorder (SUD) Treatment"
      navLinks={servicesLinks}
      navTitle="Our Services"
      pageType="services"
    >
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <DetailSection title="Our Approach">
          <p>We provide integrated, harm-reduction oriented care for substance use disorders. Our approach combines therapy and recovery supports with careful monitoring. We handle crisis and withdrawal protocols according to clinical need and arrange for higher levels of care when required, ensuring you have a safe and supportive path to recovery.</p>
        </DetailSection>

        <DetailSection title="Treatment for Specific Disorders">
            <div className="space-y-6">
                {treatments.map((item, index) => (
                    <div key={index} className="p-6 bg-gray-50 rounded-lg border">
                        <h4 className="text-xl font-semibold text-[#2D6762] mb-2">{item.title}</h4>
                        <p className="text-[#4A5455]">{item.description}</p>
                    </div>
                ))}
            </div>
        </DetailSection>

        <div className="mt-10 bg-blue-50 border-l-4 border-blue-500 text-blue-800 p-6 rounded-r-lg">
          <div className="flex items-start">
            <Shield className="h-8 w-8 mr-4 text-blue-600 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-xl">Safety, Monitoring, and Policies</h4>
              <p className="mt-1">Our policy requires informed consent, treatment agreements, and may include urine drug screens or pill counts. We use secure e-prescribing and do not replace lost or stolen prescriptions. This is not an emergency service; for imminent risk, call 911 or 988.</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Begin a Safe, Supportive Path to Recovery</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Take the first step toward lasting recovery with our expert care and compassionate support.
          </p>
          <Link to="/start">
            <Button size="lg" className="bg-white text-[#EB615C] hover:bg-white/90 text-lg px-8 py-6">
              Start Your Recovery
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </section>
    </TwoColumnLayout>
  );
};

export default SudTreatment;
  