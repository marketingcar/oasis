import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmergencyBanner from '@/components/EmergencyBanner';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <EmergencyBanner />
    </div>
  );
};

export default Layout;