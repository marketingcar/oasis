
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Smartphone, UploadCloud, UserCheck } from 'lucide-react';
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

const Rpm = () => {
  const workflowSteps = [
    { icon: Smartphone, title: "Device Provisioning", description: "We provide you with cellular-enabled devices (like a blood pressure cuff) and help you get set up." },
    { icon: UploadCloud, title: "Automated Data Uploads", description: "Your data is automatically and securely uploaded to our HIPAA-compliant platform." },
    { icon: UserCheck, title: "Clinician Review", description: "Our clinicians review your data, respond to alerts, and integrate a summary into your regular visits." }
  ];

  const faqs = [
    {
      question: "What kind of devices do you use?",
      answer: "We typically use cellular-enabled devices, such as blood pressure cuffs. This means they don't require a smartphone or Wi-Fi connection to transmit data, making them very easy to use."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use a fully HIPAA-compliant platform with robust encryption for all data, both in transit and at rest. Only authorized members of your care team can view your information."
    },
    {
      question: "What happens if my blood pressure reading is high?",
      answer: "Our system has preset alert thresholds. If a reading falls outside your target range, our clinical team is automatically notified. A team member will then reach out to you to check in and determine if any action is needed, providing a faster response than waiting for your next appointment."
    }
  ];

  return (
    <TwoColumnLayout
      title="Remote Patient Monitoring (RPM)"
      navLinks={servicesLinks}
      navTitle="Our Services"
      pageType="services"
    >
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <DetailSection title="Purpose">
          <p>Remote Patient Monitoring (RPM) uses secure digital tools to track key health data, like blood pressure, between your appointments. This allows your provider to tighten safety protocols, adjust your care plan proactively, and support your progress in real time, enhancing the effectiveness of your treatment.</p>
        </DetailSection>

        <DetailSection title="Use Cases">
          <p>RPM is particularly useful for:</p>
          <ul className="list-disc pl-5 space-y-2 mt-4">
            <li>Monitoring blood pressure when starting or adjusting certain antidepressants or controlled medications.</li>
            <li>Tracking medication adherence to ensure you get the most benefit from your treatment.</li>
            <li>Providing a clearer picture of your health between visits for more informed decision-making.</li>
          </ul>
        </DetailSection>

        <DetailSection title="Workflow">
          <div className="grid md:grid-cols-3 gap-8">
            {workflowSteps.map((step, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-lg text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#90AB98] to-[#69A08B] text-white mb-4">
                  <step.icon className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-semibold text-[#2D6762] mb-2">{step.title}</h4>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </DetailSection>

        <div className="mt-10 bg-green-50 border-l-4 border-green-500 text-green-800 p-6 rounded-r-lg">
          <h4 className="font-bold text-xl">Your Privacy is Protected</h4>
          <p className="mt-1">We use a fully HIPAA-compliant platform, and only authorized clinical staff can view your data. Your privacy and security are paramount.</p>
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

      <section className="py-16 my-10 bg-gradient-to-br from-[#2D6762] to-[#6D519D] text-white rounded-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center container mx-auto px-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Connected to Your Care Team</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Experience the convenience and peace of mind that comes with continuous health monitoring.
          </p>
          <Link to="/start">
            <Button size="lg" className="bg-white text-[#2D6762] hover:bg-white/90 text-lg px-8 py-6">
              Ask About RPM
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </section>
    </TwoColumnLayout>
  );
};

export default Rpm;
  