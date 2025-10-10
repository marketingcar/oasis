
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Users, FileText, ArrowRight } from 'lucide-react';
const Providers = () => {
  return <>
      <Helmet>
        <title>For Providers - Oasis Health Services</title>
        <meta name="description" content="Partner with Oasis Health Services. We work with physicians and specialists to coordinate care and improve patient outcomes." />
      </Helmet>

      <section className="relative bg-gradient-to-br from-[#6D519D] to-[#2D6762] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              For Providers
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Partner with us to deliver exceptional patient care
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }}>
              <div className="flex items-center gap-4 mb-6">
                <Users className="h-12 w-12 text-[#6D519D]" />
                <h2 className="text-3xl md:text-4xl font-bold text-[#2D6762]">Partner With Oasis</h2>
              </div>
              <p className="text-lg text-[#4A5455] mb-4 leading-relaxed">
                We work with physicians and specialists to coordinate care and improve outcomes for shared patients.
              </p>
              <p className="text-lg text-[#4A5455] leading-relaxed">
                Our collaborative approach ensures seamless communication and comprehensive treatment plans that address both mental and physical health needs.
              </p>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            x: 20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }}>
              <img alt="Healthcare providers collaborating on patient care" src="https://horizons-cdn.hostinger.com/0bf89f29-e8e8-4300-9c8a-627c22f53622/img_5295-OC9dF.jpeg" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#6D519D]/10 to-[#2D6762]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="bg-white p-8 md:p-12 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <FileText className="h-12 w-12 text-[#6D519D]" />
                <h2 className="text-3xl md:text-4xl font-bold text-[#2D6762]">Referrals</h2>
              </div>
              <p className="text-lg text-[#4A5455] mb-6 leading-relaxed">
                Submit a patient referral through our online form or call our office. We'll collaborate closely and keep you informed about your patient's care.
              </p>
              <p className="text-lg text-[#4A5455] mb-8 leading-relaxed">
                Our team is committed to maintaining open lines of communication, providing regular updates, and ensuring coordinated treatment that benefits your patients.
              </p>
              <Link to="/providers/referrals">
                <Button size="lg" className="bg-[#6D519D] hover:bg-[#6D519D]/90 text-white">
                  Submit a Referral
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }}>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D6762] mb-6">Questions About Partnering?</h2>
            <p className="text-lg text-[#4A5455] mb-8 max-w-2xl mx-auto">
              Contact us to learn more about how we can work together to provide exceptional care for your patients.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-[#2D6762] hover:bg-[#2D6762]/90 text-white">
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>;
};
export default Providers;
