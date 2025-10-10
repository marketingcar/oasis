
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, XCircle } from 'lucide-react';
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

const GeneticTesting = () => {
  const whoBenefits = [
    "History of medication side effects or poor response",
    "Complex medication regimens with interaction risks",
    "Atypical dose requirements (either very high or very low)",
  ];

  const faqs = [
    {
      question: "How is the genetic sample collected?",
      answer: "The process is simple and non-invasive. The external lab we partner with will typically send you a kit to collect a DNA sample using a simple cheek swab, which you can do from the comfort of your own home."
    },
    {
      question: "Is genetic testing covered by insurance?",
      answer: "Coverage for pharmacogenomic (PGx) testing varies widely by insurance plan. Some plans cover it, especially if you have a history of failed medication trials. We can provide you with the necessary information to check with your insurance provider."
    },
    {
      question: "How long does it take to get the results?",
      answer: "After the lab receives your sample, it typically takes 1-2 weeks to process the test and generate the report. Once we receive the report, we will schedule a follow-up appointment with you to review the findings in detail."
    }
  ];

  return (
    <TwoColumnLayout
      title="Genetic Testing (PGx)"
      navLinks={servicesLinks}
      navTitle="Our Services"
      pageType="services"
    >
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <DetailSection title="Purpose">
          <p>We use validated pharmacogenomic (PGx) insights to help inform safer and more effective medication choices. By understanding your unique genetic profile, we can personalize your care plan, potentially reducing trial-and-error with medications.</p>
        </DetailSection>
        
        <DetailSection title="Scope & Process">
          <p>Our role is to facilitate and interpret. We assess if PGx testing is a good fit for you, obtain your consent, and refer you to a trusted, CLIA-certified external lab. The lab collects your sample (usually a simple cheek swab) and runs the test. We then review the detailed report with you, explain the findings, and use that information to update your treatment plan.</p>
        </DetailSection>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
                <h3 className="text-2xl font-bold text-[#2D6762] mb-4">What It Informs</h3>
                <ul className="space-y-3">
                    <li className="flex items-start"><CheckCircle className="h-6 w-6 mr-3 text-green-600 flex-shrink-0 mt-1" /><span>Your likely metabolizer status for key psychiatric medications.</span></li>
                    <li className="flex items-start"><CheckCircle className="h-6 w-6 mr-3 text-green-600 flex-shrink-0 mt-1" /><span>Optimal dose ranges, titration speed, and potential interaction risks.</span></li>
                    <li className="flex items-start"><CheckCircle className="h-6 w-6 mr-3 text-green-600 flex-shrink-0 mt-1" /><span>Guidance on when to avoid or prefer specific medications based on your genetics.</span></li>
                </ul>
            </div>
            <div>
                <h3 className="text-2xl font-bold text-[#2D6762] mb-4">What It Does NOT Do</h3>
                <ul className="space-y-3">
                    <li className="flex items-start"><XCircle className="h-6 w-6 mr-3 text-red-600 flex-shrink-0 mt-1" /><span>It does not diagnose a mental illness.</span></li>
                    <li className="flex items-start"><XCircle className="h-6 w-6 mr-3 text-red-600 flex-shrink-0 mt-1" /><span>It does not guarantee a specific response to a medication.</span></li>
                </ul>
            </div>
        </div>

        <DetailSection title="Who Benefits Most?">
          <div className="space-y-4">
            {whoBenefits.map((item, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-[#6D519D] mr-4 flex-shrink-0"/>
                    <p className="text-lg">{item}</p>
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

      <section className="py-16 my-10 bg-gradient-to-br from-[#EFAB2E] to-[#EB615C] text-white rounded-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center container mx-auto px-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in More Personalized Medication Management?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Ask your provider if genetic testing is right for you to help guide your treatment plan.
          </p>
          <Link to="/start">
            <Button size="lg" className="bg-white text-[#EB615C] hover:bg-white/90 text-lg px-8 py-6">
              Book a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </section>
    </TwoColumnLayout>
  );
};

export default GeneticTesting;
  