
import React from 'react';
import SEO, { getServiceSchema, getBreadcrumbSchema } from '@/components/SEO';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Shield, FileText, Users } from 'lucide-react';
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

const AutismAssessment = () => {
  const deliverables = [
    { icon: FileText, title: "Written Report", description: "A detailed report with diagnostic rationale and a profile of strengths and needs." },
    { icon: Users, title: "Concrete Recommendations", description: "Actionable steps for home, school, and the workplace." },
    { icon: FileText, title: "Accommodation Letters", description: "Official letters to support accommodations when clinically indicated." }
  ];

  const faqs = [
    {
      question: "Can adults be assessed for Autism Spectrum Disorder?",
      answer: "Yes. We provide comprehensive assessments for adults, which include a detailed history, use of adult-specific measures, and input from family or partners where possible and with consent."
    },
    {
      question: "Is medication required for an ASD diagnosis?",
      answer: "No. The core features of ASD are best addressed with skills-based therapies and environmental supports. Medication may be used to target co-occurring symptoms like anxiety, depression, or ADHD, but it is not a primary treatment for ASD itself."
    },
    {
      question: "Do you write letters for school or work accommodations?",
      answer: "Yes. When our comprehensive assessment findings support the need for accommodations, we will provide official letters to help you get the support you need at school or in the workplace."
    }
  ];

  return (
    <TwoColumnLayout
      title="Autism Assessment & Management"
      navLinks={servicesLinks}
      navTitle="Our Services"
      pageType="services"
    >
      <SEO
        title="Autism Assessment & Management"
        description="Comprehensive autism spectrum disorder evaluation for children, teens, and adults. Professional ASD assessment with detailed reports and accommodation letters."
        url="/services/autism-assessment"
        schema={[
          getServiceSchema(
            'Autism Assessment & Management',
            'Our goal is to confirm or rule out autism spectrum disorder (ASD), map an individual\'s unique strengths and support needs, and identify any co-occurring conditions. We then translate these findings into a practical, actionable plan for home, school, work, and clinical care.'
          ),
          getBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Services', url: '/services' },
            { name: 'Autism Assessment', url: '/services/autism-assessment' }
          ])
        ]}
      />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <DetailSection title="Purpose">
          <p>Our goal is to confirm or rule out autism spectrum disorder (ASD), map an individual's unique strengths and support needs, and identify any co-occurring conditions. We then translate these findings into a practical, actionable plan for home, school, work, and clinical care.</p>
        </DetailSection>
        
        <DetailSection title="Who It’s For">
          <p>This service is for children, teens, and adults who experience differences in social communication, have restricted or repetitive behaviors, sensory sensitivities, or feel a long-standing sense of "social mismatch."</p>
        </DetailSection>

        <DetailSection title="What We Assess">
            <p>Our comprehensive evaluation looks at the whole person. We assess developmental, medical, and psychiatric history, early milestones, social patterns, sensory profiles, and co-occurring conditions like ADHD, anxiety, or depression. We offer both in-person (required for ADOS-2) and online formats.</p>
        </DetailSection>

        <DetailSection title="Deliverables">
            <div className="grid md:grid-cols-3 gap-8">
                {deliverables.map((item, index) => (
                     <div key={index} className="p-6 bg-gray-50 rounded-lg text-center">
                        <div className="inline-block bg-gradient-to-br from-blue-500 to-cyan-500 p-3 rounded-full mb-4">
                            <item.icon className="h-8 w-8 text-white" />
                        </div>
                        <h4 className="text-xl font-semibold text-[#2D6762] mb-2">{item.title}</h4>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
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

      <section className="py-16 my-10 bg-gradient-to-br from-[#2D6762] to-[#69A08B] text-white rounded-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center container mx-auto px-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Clarity and a Plan for a Thriving Future</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Our comprehensive ASD assessment provides the insights and recommendations you need to move forward with confidence.
          </p>
          <Link to="/start">
            <Button size="lg" className="bg-white text-[#2D6762] hover:bg-white/90 text-lg px-8 py-6">
              Schedule an Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </section>
    </TwoColumnLayout>
  );
};

export default AutismAssessment;
  