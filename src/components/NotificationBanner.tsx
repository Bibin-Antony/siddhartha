
import React, { useState } from 'react';
import { Bell, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotificationBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-emerald-100 to-emerald-200 py-3 px-4 text-emerald-800 relative">
      <div className="container-wide flex items-center justify-center">
        <Bell size={18} className="mr-2 flex-shrink-0" />
        <p className="text-sm font-medium">
          Final Round Applications for 2025 are now open! Limited Seats Available.{' '}
          <a href="#admission-form" className="text-emerald-700 underline hover:text-emerald-800">
            Apply today
          </a>
        </p>
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute right-4 text-emerald-700 hover:bg-emerald-200 hover:text-emerald-800"
          onClick={() => setIsVisible(false)}
        >
          <X size={18} />
        </Button>
      </div>
    </div>
  );
};

export default NotificationBanner;
