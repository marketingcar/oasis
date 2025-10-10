import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/components/ui/use-toast';
import { ArrowRight, CheckCircle } from 'lucide-react';

const StartNow = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    concerns: '',
    insurance: '',
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.consent) {
      toast({
        title: "Consent Required",
        description: "Please agree to the terms before submitting.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Assessment Submitted Successfully! ✅",
      description: "Our team will review your information and contact you shortly.",
    });
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      dateOfBirth: '',
      concerns: '',
      insurance: '',
      consent: false,
    });
  };

  const steps = [
    'Complete our secure online assessment',
    'Our staff will review your responses and schedule a free consultation if needed',
    'Schedule your first visit through our secure portal',
    'Meet your provider virtually or in person',
  ];

  return (
    <>
      <Helmet>
        <title>Start Now - Oasis Health Services</title>
        <meta name="description" content="Begin your journey to better mental health. Complete our secure assessment and take the first step toward wellness with Oasis Health Services." />
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
              Your First Step Toward Wellness
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Begin your journey to better mental health today
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
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D6762] mb-6">How It Works</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#2D6762] to-[#69A08B] text-white text-xl font-bold mb-4">
                  {index + 1}
                </div>
                <p className="text-[#4A5455]">{step}</p>
              </motion.div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#90AB98]/10 to-[#69A08B]/10 p-8 md:p-12 rounded-2xl"
            >
              <h2 className="text-3xl font-bold text-[#2D6762] mb-6">Complete Your Assessment</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                  <Input
                    id="dateOfBirth"
                    name="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="insurance">Insurance Provider</Label>
                  <Input
                    id="insurance"
                    name="insurance"
                    value={formData.insurance}
                    onChange={handleChange}
                    className="mt-1"
                    placeholder="e.g., Aetna, BlueCross, Cigna"
                  />
                </div>

                <div>
                  <Label htmlFor="concerns">What brings you to Oasis today? *</Label>
                  <Textarea
                    id="concerns"
                    name="concerns"
                    value={formData.concerns}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="mt-1"
                    placeholder="Please describe your current concerns, symptoms, or what you hope to achieve through treatment..."
                  />
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) => setFormData({ ...formData, consent: checked })}
                  />
                  <Label htmlFor="consent" className="text-sm leading-relaxed cursor-pointer">
                    I consent to Oasis Health Services contacting me regarding my assessment and treatment options. I understand this form is secure and HIPAA-compliant.
                  </Label>
                </div>

                <div className="bg-[#EB615C]/10 border border-[#EB615C]/30 rounded-lg p-4">
                  <p className="text-sm text-[#4A5455]">
                    <strong className="text-[#EB615C]">Emergency Notice:</strong> If you are experiencing a medical or psychiatric emergency, please call 988 immediately instead of submitting this form.
                  </p>
                </div>

                <Button type="submit" size="lg" className="w-full bg-[#2D6762] hover:bg-[#2D6762]/90 text-white">
                  Submit Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#90AB98]/20 to-[#69A08B]/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <CheckCircle className="h-16 w-16 text-[#2D6762] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D6762] mb-4">What Happens Next?</h2>
            <p className="text-lg text-[#4A5455] mb-6">
              After you submit your assessment, our care team will review your information within 24-48 hours. We'll reach out to schedule a free consultation and answer any questions you may have.
            </p>
            <p className="text-lg text-[#4A5455]">
              You're taking an important step toward better mental health, and we're here to support you every step of the way.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default StartNow;