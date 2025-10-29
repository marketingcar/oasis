
import React from 'react';
import SEO, { getServiceSchema, getBreadcrumbSchema } from '@/components/SEO';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Activity, Brain } from 'lucide-react';
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

const MedicationManagement = () => {
  const referrals = [
    { icon: Brain, title: 'ADHD Treatment', href: '/services/adhd-testing-and-management' },
    { icon: Brain, title: 'Spravato® Therapy', href: '/services/spravato' },
    { icon: Activity, title: 'Remote Patient Monitoring', href: '/services/remote-patient-monitoring' },
  ];

  const faqs = [
    {
      question: "How do you decide which medication is right for me?",
      answer: "It's a collaborative process based on your diagnosis, symptoms, medical history, and personal preferences. We use evidence-based guidelines and may consider genetic testing (PGx) to inform choices. We'll discuss the potential benefits, risks, and side effects of each option with you."
    },
    {
      question: "How often will I need to have appointments?",
      answer: "When starting a new medication or adjusting a dose, we typically schedule follow-up appointments every 2-4 weeks. Once you are stable and doing well on a medication, these appointments can be spaced out to every 1-3 months."
    },
    {
      question: "What is 'measurement-based care'?",
      answer: "It means we use standardized, validated rating scales to track your symptoms and side effects over time. This gives us objective data to see how well a treatment is working and helps us make more informed decisions about your care plan together."
    }
  ];

  return (
    <TwoColumnLayout
      title="Medication Management"
      navLinks={servicesLinks}
      navTitle="Our Services"
      pageType="services"
    >
      <SEO
        title="Medication Management"
        description="Personalized psychiatric medication management for depression, anxiety, ADHD, and mood disorders. Evidence-based treatment with regular monitoring and safety protocols."
        url="/services/medication-management"
        schema={[
          getServiceSchema(
            'Medication Management',
            'Our providers offer personalized psychiatric medication management for a range of conditions including depression, anxiety, ADHD, and mood disorders. Treatment decisions are always based on a comprehensive evaluation and shared decision-making, with regular follow-up to ensure safety and effectiveness.'
          ),
          getBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Services', url: '/services' },
            { name: 'Medication Management', url: '/services/medication-management' }
          ])
        ]}
      />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <DetailSection title="Our Approach">
          <p>Our providers offer personalized psychiatric medication management for a range of conditions including depression, anxiety, ADHD, and mood disorders. Treatment decisions are always based on a comprehensive evaluation and shared decision-making, with regular follow-up to ensure safety and effectiveness. When appropriate, this may include the careful use of controlled medications, always in accordance with state and federal guidelines.</p>
        </DetailSection>

        <DetailSection title="How It Works">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Comprehensive Evaluation:</strong> We start with a full diagnostic assessment to understand your needs.</li>
            <li><strong>Shared Decision-Making:</strong> We discuss the risks, benefits, and alternatives with you to choose the best path forward.</li>
            <li><strong>Measurement-Based Care:</strong> We use validated scales to track your progress objectively.</li>
            <li><strong>Safety Protocols:</strong> Our process includes PDMP checks, treatment agreements, and labs/vitals as needed.</li>
            <li><strong>Regular Follow-Up:</strong> Appointments are scheduled every 2-4 weeks during initial titration, then every 1-3 months for stable maintenance.</li>
            <li><strong>Coordinated Care:</strong> We collaborate with your therapist, primary care provider, and other specialists.</li>
          </ul>
        </DetailSection>
        
        <DetailSection title="Antidepressant and Mood Stabilizer Management">
            <p>This service focuses on treating depression, anxiety disorders, the bipolar spectrum, and related conditions. We conduct baseline and periodic labs/vitals as indicated, perform suicide risk checks during medication changes, and carefully review drug-drug interactions at each visit to ensure your safety.</p>
        </DetailSection>

        <DetailSection title="When We Recommend for Specialized Care">
          <p>For certain conditions, we may recommend one of our other specialized services:</p>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {referrals.map((item, index) => (
              <Link to={item.href} key={index} className="p-6 bg-white rounded-lg shadow-sm border hover:shadow-lg transition-shadow group">
                <item.icon className="h-8 w-8 text-[#2D6762] mb-3 group-hover:text-[#6D519D]" />
                <h4 className="text-lg font-semibold text-[#2D6762] group-hover:text-[#6D519D]">{item.title}</h4>
              </Link>
            ))}
          </div>
        </DetailSection>

        <div className="mt-10 bg-blue-50 border-l-4 border-blue-500 text-blue-800 p-6 rounded-r-lg">
          <div className="flex items-start">
            <Shield className="h-8 w-8 mr-4 text-blue-600 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-xl">Controlled Medication Policy</h4>
              <p className="mt-1">Controlled substances are prescribed only when clinically indicated after a full assessment. We strictly follow all state and federal rules and require ongoing monitoring for all patients receiving these medications.</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Find the Right Medication Plan for You</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Our expert medication management is designed to be safe, effective, and personalized to your needs.
          </p>
          <Link to="/start">
            <Button size="lg" className="bg-white text-[#2D6762] hover:bg-white/90 text-lg px-8 py-6">
              Book an Appointment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </section>
    </TwoColumnLayout>
  );
};

export default MedicationManagement;
  