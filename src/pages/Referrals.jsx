import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Send, UserPlus, FileText } from 'lucide-react';

const Referrals = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('refer');
  const [collaborationData, setCollaborationData] = useState({
    providerName: '',
    practiceName: '',
    email: '',
    phone: '',
    address: '',
    specialty: '',
    message: '',
  });

  const handleCollaborationChange = (e) => {
    setCollaborationData({
      ...collaborationData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCollaborationSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/manprzlz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(collaborationData),
      });

      if (response.ok) {
        toast({
          title: "Request Submitted Successfully!",
          description: "We'll contact you soon to discuss establishing a collaboration agreement.",
        });
        setCollaborationData({
          providerName: '',
          practiceName: '',
          email: '',
          phone: '',
          address: '',
          specialty: '',
          message: '',
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast({
        title: "Submission Error",
        description: "There was an issue submitting your request. Please try again.",
        variant: "destructive",
      });
    }
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
              Provider Collaboration
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Help your patients access expert mental health care
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-center gap-4 mb-8">
              <Button
                onClick={() => setActiveTab('refer')}
                className={`flex items-center gap-2 ${
                  activeTab === 'refer'
                    ? 'bg-[#6D519D] hover:bg-[#6D519D]/90'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                <FileText className="h-5 w-5" />
                Submit a Referral
              </Button>
              <Button
                onClick={() => setActiveTab('collaborate')}
                className={`flex items-center gap-2 ${
                  activeTab === 'collaborate'
                    ? 'bg-[#6D519D] hover:bg-[#6D519D]/90'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                <UserPlus className="h-5 w-5" />
                Request Collaboration Agreement
              </Button>
            </div>

            {activeTab === 'refer' ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="h-[1000px]"
              >
                <iframe
                  src="https://vpm-portal.web.app/providers/refer-a-patient"
                  className="w-full h-full rounded-2xl border-0"
                  title="Referral Form"
                />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-3xl mx-auto"
              >
                <div className="bg-gradient-to-br from-[#90AB98]/10 to-[#69A08B]/10 p-8 md:p-12 rounded-2xl">
                  <h2 className="text-2xl font-bold text-[#2D6762] mb-4">
                    Establish a Collaboration Agreement
                  </h2>
                  <p className="text-[#4A5455] mb-8">
                    Interested in partnering with Oasis Health Services? Complete this form and our team will reach out to discuss establishing a collaboration agreement.
                  </p>

                  <form onSubmit={handleCollaborationSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="providerName">Provider Name *</Label>
                      <Input
                        id="providerName"
                        name="providerName"
                        value={collaborationData.providerName}
                        onChange={handleCollaborationChange}
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="practiceName">Practice/Organization Name *</Label>
                      <Input
                        id="practiceName"
                        name="practiceName"
                        value={collaborationData.practiceName}
                        onChange={handleCollaborationChange}
                        required
                        className="mt-1"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={collaborationData.email}
                          onChange={handleCollaborationChange}
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
                          value={collaborationData.phone}
                          onChange={handleCollaborationChange}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="address">Practice Address</Label>
                      <Input
                        id="address"
                        name="address"
                        value={collaborationData.address}
                        onChange={handleCollaborationChange}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="specialty">Specialty/Area of Practice *</Label>
                      <Input
                        id="specialty"
                        name="specialty"
                        value={collaborationData.specialty}
                        onChange={handleCollaborationChange}
                        required
                        className="mt-1"
                        placeholder="e.g., Primary Care, Psychiatry, Psychology"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Tell us about your collaboration interests</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={collaborationData.message}
                        onChange={handleCollaborationChange}
                        rows={5}
                        className="mt-1"
                        placeholder="Please describe what type of collaboration you're interested in and any specific needs or questions..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[#6D519D] hover:bg-[#6D519D]/90 text-white"
                    >
                      Submit Request
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Referrals;