
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Video, BarChart2, AlertTriangle } from 'lucide-react';
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

const Telehealth = () => {
  const services = [
    { icon: Video, title: "Convenient Virtual Visits", description: "Initial evaluations, follow-ups, medication management, and therapy from the comfort of your home." },
    { icon: BarChart2, title: "Measurement-Based Care", description: "We use structured data from symptom scales and checklists to guide treatment decisions, acting on trends, not guesswork." },
    { icon: BarChart2, title: "Continuous Assessment", description: "Automated check-ins and data monitoring allow for faster interventions and proactive care adjustments." }
  ];

  const faqs = [
    {
      question: "What do I need for a telehealth visit?",
      answer: "You'll need a private, quiet space, a reliable internet connection, and a device with a camera and microphone (like a smartphone, tablet, or computer). You will also need to provide a photo ID for verification."
    },
    {
      question: "Is telehealth secure?",
      answer: "Yes. We use a HIPAA-compliant platform with encrypted video and data storage. Your privacy is protected, and information is only shared with your consent or as required by law."
    },
    {
      question: "Are there limitations to telehealth?",
      answer: "Telehealth is not for emergencies. Certain evaluations, like the ADOS-2 for autism, may require in-person visits. Your provider will always use their clinical judgment to determine the appropriate format for your care."
    }
  ];

  return (
    <TwoColumnLayout
      title="Telehealth, Telepsychiatry & Digital Care"
      navLinks={servicesLinks}
      navTitle="Our Services"
      pageType="services"
    >
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <DetailSection title="What It Is">
          <p>We provide secure virtual psychiatric care that meets the same high clinical standards as our in-person services. Our HIPAA-compliant platform allows for flexible access, faster follow-ups, and tighter, data-driven monitoring of your progress. All care is provided by state-licensed providers.</p>
        </DetailSection>
        
        <DetailSection title="Our Digital Care Services">
            <div className="grid md:grid-cols-3 gap-8">
                {services.map((item, index) => (
                     <div key={index} className="p-6 bg-gray-50 rounded-lg text-center">
                        <div className="inline-block bg-gradient-to-br from-indigo-500 to-purple-500 p-3 rounded-full mb-4">
                            <item.icon className="h-8 w-8 text-white" />
                        </div>
                        <h4 className="text-xl font-semibold text-[#2D6762] mb-2">{item.title}</h4>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </DetailSection>

        <div className="mt-10 bg-blue-50 border-l-4 border-blue-500 text-blue-800 p-6 rounded-r-lg">
          <div className="flex items-start">
            <Shield className="h-8 w-8 mr-4 text-blue-600 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-xl">Policies & Safety</h4>
              <p className="mt-1">You must be physically located in a state where your clinician is licensed at the time of service. Sessions may not be recorded. Standard missed appointment and refill policies apply. For emergencies, call 911 or 988.</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience Convenient, High-Quality Virtual Care</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Get the mental health support you need, wherever you are.
          </p>
          <Link to="/start">
            <Button size="lg" className="bg-white text-[#2D6762] hover:bg-white/90 text-lg px-8 py-6">
              Book a Virtual Visit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </section>
    </TwoColumnLayout>
  );
};

export default Telehealth;
  