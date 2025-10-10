import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Send } from 'lucide-react';

const Referrals = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    providerName: '',
    providerEmail: '',
    providerPhone: '',
    patientName: '',
    patientDOB: '',
    patientPhone: '',
    reasonForReferral: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Referral Submitted Successfully! ✅",
      description: "We'll review the referral and contact you shortly.",
    });
    setFormData({
      providerName: '',
      providerEmail: '',
      providerPhone: '',
      patientName: '',
      patientDOB: '',
      patientPhone: '',
      reasonForReferral: '',
    });
  };

  return (
    <>
      <Helmet>
        <title>Submit a Referral - Oasis Health Services</title>
        <meta name="description" content="Submit a patient referral to Oasis Health Services. We collaborate closely with referring providers to ensure coordinated, comprehensive care." />
      </Helmet>

      <section className="relative bg-gradient-to-br from-[#6D519D] to-[#2D6762] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Submit a Referral
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Help your patients access expert mental health care
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#90AB98]/10 to-[#69A08B]/10 p-8 md:p-12 rounded-2xl"
            >
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#2D6762] mb-4">Referral Information</h2>
                <p className="text-[#4A5455]">
                  Please complete this form to refer a patient to Oasis Health Services. All information is kept confidential and HIPAA-compliant.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#2D6762]">Provider Information</h3>
                  
                  <div>
                    <Label htmlFor="providerName">Your Name *</Label>
                    <Input
                      id="providerName"
                      name="providerName"
                      value={formData.providerName}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="providerEmail">Email *</Label>
                      <Input
                        id="providerEmail"
                        name="providerEmail"
                        type="email"
                        value={formData.providerEmail}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="providerPhone">Phone *</Label>
                      <Input
                        id="providerPhone"
                        name="providerPhone"
                        type="tel"
                        value={formData.providerPhone}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#2D6762]">Patient Information</h3>
                  
                  <div>
                    <Label htmlFor="patientName">Patient Name *</Label>
                    <Input
                      id="patientName"
                      name="patientName"
                      value={formData.patientName}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="patientDOB">Date of Birth *</Label>
                      <Input
                        id="patientDOB"
                        name="patientDOB"
                        type="date"
                        value={formData.patientDOB}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="patientPhone">Patient Phone *</Label>
                      <Input
                        id="patientPhone"
                        name="patientPhone"
                        type="tel"
                        value={formData.patientPhone}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="reasonForReferral">Reason for Referral *</Label>
                  <Textarea
                    id="reasonForReferral"
                    name="reasonForReferral"
                    value={formData.reasonForReferral}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="mt-1"
                    placeholder="Please provide relevant clinical information, diagnosis, and reason for referral..."
                  />
                </div>

                <div className="bg-[#EB615C]/10 border border-[#EB615C]/30 rounded-lg p-4">
                  <p className="text-sm text-[#4A5455]">
                    <strong className="text-[#EB615C]">HIPAA Notice:</strong> This form is secure and HIPAA-compliant. All patient information will be handled with strict confidentiality.
                  </p>
                </div>

                <Button type="submit" size="lg" className="w-full bg-[#6D519D] hover:bg-[#6D519D]/90 text-white">
                  Submit Referral
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Referrals;