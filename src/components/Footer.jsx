import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const locations = ['Arizona', 'California', 'Colorado', 'Florida', 'Georgia', 'Maryland', 'Massachusetts', 'New York', 'New Jersey', 'Oregon', 'Texas', 'Washington'];
  const quickLinks = [{
    name: 'About Us',
    href: '/about'
  }, {
    name: 'Services',
    href: '/services'
  }, {
    name: 'Conditions',
    href: '/conditions'
  }, {
    name: 'Patients',
    href: '/patients'
  }, {
    name: 'Providers',
    href: '/providers'
  }, {
    name: 'Contact',
    href: '/contact'
  }, {
    name: 'FAQs',
    href: '/patients/faqs'
  }, {
    name: 'Blog',
    href: '/blog'
  }];
  const socialLinks = [{
    name: 'Facebook',
    href: 'https://www.facebook.com/oasishealthserv',
    icon: Facebook
  }, {
    name: 'Instagram',
    href: 'https://www.instagram.com/oasishealthserv/',
    icon: Instagram
  }, {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/oasis-health-service',
    icon: Linkedin
  }, {
    name: 'X',
    href: 'https://x.com/OasisHealthSer1',
    icon: Twitter
  }];
  return <footer className="bg-[#1a3a37] text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="md:col-span-2 lg:col-span-1">
                <Link to="/" className="inline-block mb-4">
                  <OptimizedImage
                    src="https://horizons-cdn.hostinger.com/0bf89f29-e8e8-4300-9c8a-627c22f53622/white-logo-kDbrD.png"
                    alt="Oasis Health Services Logo"
                    className="h-12 w-auto"
                    loading="lazy"
                  />
                </Link>
                <p className="text-white/70 text-sm">
                  Your trusted partner in mental wellness. We provide compassionate, integrative care to help you find balance and hope.
                </p>
                <div className="flex space-x-4 mt-6">
                  {socialLinks.map(social => {
              const Icon = social.icon;
              return <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors" aria-label={social.name}>
                        <Icon className="h-6 w-6" />
                      </a>;
            })}
                </div>
              </div>
              <div>
                <p className="font-semibold text-white mb-4">Quick Links</p>
                <ul className="space-y-2">
                  {quickLinks.map(link => <li key={link.name}>
                      <Link to={link.href} className="text-white/70 hover:text-white transition-colors text-sm">
                        {link.name}
                      </Link>
                    </li>)}
                </ul>
              </div>
              <div>
                <p className="font-semibold text-white mb-4">Contact Us</p>
                <ul className="space-y-2 text-sm text-white/70">
                  <li><p>Email: support@oasishealthservices.com</p></li>
                  <li><p>Phone: (509) 381-6035</p></li>
                  <li><p>Hours: Mon - Sat 8:30 AM - 5:30 PM EST</p></li>
                </ul>
              </div>
               <div>
                <p className="font-semibold text-white mb-4">Locations Served</p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {locations.map(location => <p key={location} className="text-white/70 text-sm">{location}</p>)}
                </div>
                <p className="text-white/70 text-xs mt-4">(In-person & virtual available in Georgia, telehealth/virtual visits in the rest of our states served.)</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm text-white/50">
              <p>&copy; {currentYear} Oasis Health Services. All Rights Reserved.</p>
              <div className="flex justify-center items-center space-x-4 mt-2">
                <Link to="/policies" className="hover:text-white">Consent, Notices & Policies</Link>
                <span className="text-white/30">|</span>
                <Link to="/terms-and-conditions" className="hover:text-white">Terms & Conditions</Link>
              </div>
            </div>
          </div>
        </footer>;
};
export default Footer;