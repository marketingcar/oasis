import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
  const faqItems = [
    { question: 'What conditions do you treat?', answer: 'We treat a wide range of mental health conditions, including major depression, anxiety disorders, ADHD, OCD, PTSD, bipolar disorder, personality disorders, substance use disorders, and autism spectrum disorder. Services are available for adolescents and adults.' },
    { question: 'What services do you offer?', answer: 'We offer therapy and counseling, psychiatric medication management, comprehensive psychiatric assessments, ADHD and autism assessments, genetic testing, Spravato® treatments, telehealth, and RPM-enabled follow-up care.' },
    { question: 'Do you accept insurance?', answer: 'Yes—many major plans are accepted. Coverage depends on your specific plan and benefits; contact our team or your insurer to verify coverage for psychiatry and telehealth.' },
    { question: 'How do I get started?', answer: 'Begin with the secure online intake on our Start page. After we review your intake, our team will contact you to schedule a consultation and recommend next steps.' },
    { question: 'What should I expect during a comprehensive psychiatric assessment?', answer: 'Expect a detailed clinical interview, medical and psychiatric history review, rating scales, and a collaborative discussion of differential diagnoses and an initial treatment plan.' },
    { question: 'Do you offer telehealth visits and are they secure?', answer: 'Yes—telehealth visits are supported and delivered over secure, HIPAA-compliant platforms. You must be located in a state where the provider is licensed at the time of the appointment.' },
    { question: 'What is Remote Patient Monitoring (RPM)?', answer: 'RPM uses connected devices to transmit vitals like blood pressure to your care team between visits, which helps safety monitoring and measurement-based medication adjustments.' },
    { question: 'How long do evaluations and testing take (ADHD, autism, genetic testing)?', answer: 'Timing varies: initial clinical assessments often take 60–90 minutes. ADHD/autism testing and comprehensive assessments may take additional sessions and standardized testing; genetic test results typically return in 1–3 weeks depending on the lab.' },
    { question: 'Are stimulant medications safe?', answer: 'When prescribed and monitored by a qualified clinician, stimulants can be safe and effective. We perform safety checks, consider medical history, and provide ongoing monitoring.' },
    { question: 'Can therapy and medication be used together?', answer: 'Yes. Many patients benefit from an integrated approach combining evidence-based psychotherapy with medication management when indicated.' },
    { question: 'What is Spravato® (esketamine)?', answer: 'Spravato® is a supervised, FDA-approved nasal therapy for treatment-resistant depression given in-office with monitoring before you may leave.' },
    { question: 'Do you provide care for substance use and MAT (Medication-Assisted Treatment)?', answer: 'Yes—we offer integrated care for SUD, including MAT when appropriate, counseling, and coordination with higher levels of care when needed.' },
    { question: 'Is my information confidential?', answer: 'Yes. We use secure systems and follow HIPAA requirements to protect your health information.' },
    { question: 'What if I have an emergency?', answer: 'If you are in immediate danger or a medical emergency, call 911. For psychiatric crisis support, call or text 988. Our services are not a replacement for emergency care.' },
    { question: 'How do I know which therapy is right for me?', answer: 'Your clinician will work with you to select evidence-based modalities (CBT, ERP, DBT-informed skills) based on diagnosis, preferences, and goals.' },
    { question: 'Are evaluations available for adults?', answer: 'Yes. We perform assessments for adults and adolescents across neurodevelopmental and mood/anxiety presentations.' },
    { question: 'How often will I have appointments for medication management?', answer: 'Follow-up frequency depends on clinical need—initially more frequent (weeks) while stabilizing, then typically every 1–3 months for maintenance.' },
    { question: 'How is genetic testing collected and how long do results take?', answer: 'Genetic testing is usually a cheek swab or blood sample; results return per the lab timeline (commonly 1–3 weeks).' },
    { question: 'What if I need a higher level of care?', answer: 'If you need detox, inpatient care, or urgent stabilization, we will help coordinate a safe transfer to an appropriate setting.' },
  ];

  return (
    <>
      <Helmet>
        <title>FAQs - Oasis Health Services</title>
        <meta name="description" content="Find answers to frequently asked questions about our services, insurance, how to get started, and more at Oasis Health Services." />
      </Helmet>

      <section className="relative bg-gradient-to-br from-[#2D6762] to-[#69A08B] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Find answers to common questions about our services and approach to care.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
                 
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.01 }}
                >
                  <AccordionItem 
                    value={`item-${index}`} 
                    className="bg-gradient-to-br from-[#90AB98]/10 to-[#69A08B]/10 rounded-xl px-6 border-b-0"
                  >
                    <AccordionTrigger className="text-lg font-semibold text-left text-[#2D6762] hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-[#4A5455] leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default FAQs;