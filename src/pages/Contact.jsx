import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
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
      title: "Message Sent Successfully! ✅",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: '11285 Elkins Road Unit J-6, Roswell, GA 30076',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '(509) 381-6035',
    },
    {
      icon: Phone,
      title: 'Fax',
      content: '(209) 290-3019',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'support@oasishealthservices.com',
    },
    {
      icon: Clock,
      title: 'Hours',
      content: 'Mon–Fri, 8:00 AM – 5:00 PM',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Oasis Health Services</title>
        <meta name="description" content="Get in touch with Oasis Health Services. We're here to help answer your questions and support your mental health journey." />
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
              We're Here to Help
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Reach out to us with any questions or to schedule an appointment
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-[#2D6762] mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="p-3 bg-gradient-to-br from-[#2D6762] to-[#69A08B] rounded-lg">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#2D6762] mb-1">{item.title}</h3>
                        <p className="text-[#4A5455]">{item.content}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-8 p-6 bg-[#EB615C]/10 border border-[#EB615C]/30 rounded-lg">
                <h3 className="font-bold text-[#EB615C] mb-2 flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Emergency Notice
                </h3>
                <p className="text-[#4A5455]">
                  If you are experiencing a medical or psychiatric emergency, call 988 immediately.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-[#90AB98]/10 to-[#69A08B]/10 p-8 rounded-2xl">
                <h2 className="text-3xl font-bold text-[#2D6762] mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>

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
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="mt-1"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div className="bg-white/50 border border-[#2D6762]/20 rounded-lg p-4">
                    <p className="text-sm text-[#4A5455]">
                      <strong className="text-[#2D6762]">Privacy Notice:</strong> This form is secure and HIPAA-compliant. Please do not include sensitive health information in your message.
                    </p>
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-[#2D6762] hover:bg-[#2D6762]/90 text-white">
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;