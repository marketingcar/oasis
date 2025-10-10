import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, Brain, Shield, TestTube, Pill, Users, FileText, Wifi } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      title: 'Comprehensive Psychiatric Assessment & Diagnosis',
      description: 'A thorough first appointment to understand your symptoms, history, and goals, leading to a diagnosis and initial care plan.',
      href: '/services/comprehensive-psychiatric-assessment',
      icon: FileText,
      color: 'from-[#2D6762] to-[#69A08B]',
    },
    {
      title: 'Genetic Testing',
      description: 'Utilizing validated genetic insights to inform safer and more effective medication choices for your treatment.',
      href: '/services/genetic-testing',
      icon: TestTube,
      color: 'from-[#6D519D] to-[#2D6762]',
    },
    {
      title: 'ADHD Testing & Management',
      description: 'Specialized evaluation and treatment for attention, impulsivity, and executive function concerns in adults and adolescents.',
      href: '/services/adhd-testing-and-management',
      icon: Brain,
      color: 'from-[#EB615C] to-[#EFAB2E]',
    },
    {
      title: 'Autism Assessment & Management',
      description: 'Confirm or rule out ASD, map strengths and support needs, and create a practical plan for home, school, and work.',
      href: '/services/autism-assessment-and-management',
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Therapy & Counseling',
      description: 'Evidence-based talk therapies designed to reduce symptoms, build skills, and improve daily functioning.',
      href: '/services/therapy-and-counseling',
      icon: Users,
      color: 'from-[#69A08B] to-[#90AB98]',
    },
    {
      title: 'Medication Management',
      description: 'Personalized psychiatric medication plans for depression, anxiety, ADHD, and mood disorders with regular follow-up.',
      href: '/services/medication-management',
      icon: Pill,
      color: 'from-[#EFAB2E] to-[#EB615C]',
    },
    {
      title: 'Substance Use Disorder Treatment',
      description: 'Integrated, harm-reduction oriented care with therapy, medication, and recovery supports for addiction.',
      href: '/services/substance-use-disorder-treatment',
      icon: Shield,
      color: 'from-[#2D6762] to-[#6D519D]',
    },
    {
      title: 'Spravato® (esketamine) Therapy',
      description: 'An FDA-approved nasal spray treatment for adults with treatment-resistant depression, administered in-office.',
      href: '/services/spravato',
      icon: Pill,
      color: 'from-[#90AB98] to-[#69A08B]',
    },
    {
      title: 'Remote Patient Monitoring (RPM)',
      description: 'Secure digital tools to track your blood pressure between appointments, allowing for proactive care adjustments.',
      href: '/services/remote-patient-monitoring',
      icon: Activity,
      color: 'from-[#6D519D] to-[#EB615C]',
    },
    {
      title: 'Telehealth & Digital Care',
      description: 'Secure virtual psychiatric care with continuous, data-driven follow-up, offering flexible access and faster monitoring.',
      href: '/services/telehealth',
      icon: Wifi,
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - Oasis Health Services</title>
        <meta name="description" content="Explore our comprehensive mental health services, including psychiatric assessments, therapy, medication management, and specialized treatments like Spravato® and ADHD testing." />
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
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              At Oasis, we treat the whole person with coordinated, evidence-based services designed for your unique needs.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link to={service.href} className="h-full flex">
                    <div className="h-full p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 group border border-gray-100 flex flex-col items-start text-left w-full">
                      <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${service.color} mb-4`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h2 className="text-xl font-bold text-[#2D6762] mb-3 group-hover:text-[#6D519D] transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-[#4A5455] mb-4 flex-grow">{service.description}</p>
                      <div className="flex items-center text-[#2D6762] group-hover:text-[#6D519D] transition-colors font-medium mt-auto">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#624399] to-[#7355A2] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Journey?</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Take the first step toward better mental health with personalized, compassionate care.
            </p>
            <Link to="/start">
              <Button size="lg" className="bg-white text-[#624399] hover:bg-white/90 text-lg px-8 py-6">
                Start Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;