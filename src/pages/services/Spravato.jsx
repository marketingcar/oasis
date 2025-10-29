
import React from 'react';
import SEO, { getServiceSchema, getBreadcrumbSchema } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import TwoColumnLayout from '@/components/TwoColumnLayout';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { servicesLinks } from '@/lib/navLinks';

const Spravato = () => {
  const faqs = [
    {
      question: "What is Treatment-Resistant Depression (TRD)?",
      answer: "TRD is generally defined as major depressive disorder that hasn't responded adequately to at least two different antidepressant treatments taken for a sufficient length of time at an adequate dose."
    },
    {
      question: "What are the common side effects of Spravato®?",
      answer: "The most common side effects include dissociation (feeling disconnected from yourself, your thoughts, and the world), dizziness, nausea, sleepiness, and increased blood pressure. These effects are temporary and are monitored by our clinical team during the required observation period after treatment."
    },
    {
      question: "Why can't I drive after a Spravato® treatment?",
      answer: "Because of its potential side effects, particularly sedation and dissociation, you must not drive or operate heavy machinery until the day after your treatment session, following a restful sleep. You will need to plan for a ride home from the clinic."
    }
  ];

  return <TwoColumnLayout
      title="Spravato® (esketamine) Therapy"
      navLinks={servicesLinks}
      navTitle="Our Services"
      pageType="services"
    >
      <SEO
        title="Spravato (Esketamine) Therapy"
        description="Breakthrough treatment for treatment-resistant depression. FDA-approved Spravato therapy administered in REMS-certified clinic with comprehensive monitoring."
        url="/services/spravato"
        schema={[
          getServiceSchema(
            'Spravato® (Esketamine) Therapy',
            'We offer in-office Spravato® (esketamine) treatment for adults with treatment-resistant depression (TRD). Our team provides screening, administration, and monitoring in a calm, supportive environment to help improve mood and restore quality of life when other treatments haven\'t worked.'
          ),
          getBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Services', url: '/services' },
            { name: 'Spravato Therapy', url: '/services/spravato' }
          ])
        ]}
      />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <div className="mb-10">
            <h3 className="text-2xl font-bold text-[#2D6762] mb-4">A Breakthrough for Treatment-Resistant Depression</h3>
            <div className="prose prose-lg max-w-none text-[#4A5455]">
                <p>We offer in-office Spravato® (esketamine) treatment for adults with treatment-resistant depression (TRD). Our team provides screening, administration, and monitoring in a calm, supportive environment to help improve mood and restore quality of life when other treatments haven't worked.</p>
            </div>
        </div>

        <div className="mb-10">
            <h3 className="text-2xl font-bold text-[#2D6762] mb-4">Program Details</h3>
            <div className="prose prose-lg max-w-none text-[#4A5455]">
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Eligibility:</strong> For adults with TRD who have had an inadequate response to at least two different antidepressants. Must be on a current oral antidepressant.</li>
                    <li><strong>Administration:</strong> Administered only in our REMS-certified clinic.</li>
                    <li><strong>Induction Phase:</strong> Typically twice weekly for 4 weeks.</li>
                    <li><strong>Optimization & Maintenance:</strong> Weekly for 4 weeks, then spaced to every 1-2 weeks based on response.</li>
                </ul>
            </div>
        </div>

        <div className="mb-10">
            <h3 className="text-2xl font-bold text-[#2D6762] mb-4">What to Expect During a Visit</h3>
            <div className="prose prose-lg max-w-none text-[#4A5455]">
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Visit Flow:</strong> Pre-dose screening and vitals, supervised intranasal dosing, and observation for at least 2 hours.</li>
                    <li><strong>Safety:</strong> Continuous blood pressure monitoring, dissociation checks, and misuse risk screening. Contraindications are reviewed at each visit.</li>
                    <li><strong>Post-Treatment:</strong> Patients cannot drive or operate machinery until the next day after treatment.</li>
                </ul>
            </div>
        </div>

        <div className="mb-10">
            <h3 className="text-2xl font-bold text-[#2D6762] mb-4">Outcomes</h3>
            <div className="prose prose-lg max-w-none text-[#4A5455]">
                <p>We use measurement-based tracking to monitor your progress. Decisions about continuing or tapering treatment are based on the benefits you experience and your tolerability of the medication.</p>
            </div>
        </div>

        <div className="mb-10">
            <h3 className="text-2xl font-bold text-[#2D6762] mb-4">Frequently Asked Questions</h3>
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
        </div>

      </motion.div>

      <section className="py-16 my-10 bg-gradient-to-br from-[#EB615C] to-[#6D519D] text-white rounded-2xl">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ask If Spravato Is Right for You</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Discover if this breakthrough treatment can help when other options haven't worked.
          </p>
          <Link to="/start">
            <Button size="lg" className="bg-white text-[#6D519D] hover:bg-white/90 text-lg px-8 py-6">
              Start Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </section>
    </TwoColumnLayout>;
};
export default Spravato;
  