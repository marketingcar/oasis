import React from 'react';
import { AlertTriangle } from 'lucide-react';

const EmergencyBanner = () => {
  return (
    <div className="bg-[#EB615C] text-white py-2">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 text-sm font-medium">
          <AlertTriangle className="h-4 w-4" />
          <span>If you are experiencing a medical or psychiatric emergency, call or text 988 immediately.</span>
        </div>
      </div>
    </div>
  );
};

export default EmergencyBanner;