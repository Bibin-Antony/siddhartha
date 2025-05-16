
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

const NotificationBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 border-b border-emerald-200 text-emerald-800 py-2 relative">
      <div className="container-wide flex items-center justify-between">
        <div className="flex flex-wrap items-center justify-center w-full pr-8">
          <p className="text-sm font-medium text-center w-full sm:w-auto">
            <span className="hidden sm:inline">🎓 Fall 2024 Admissions Open!</span> Secure your future in medicine today.
          </p>
          <Link 
            to="/admissions" 
            className="ml-0 sm:ml-3 mt-1 sm:mt-0 text-sm bg-emerald-700 hover:bg-emerald-800 text-white px-3 py-1 rounded-md transition-all duration-300 hover:shadow-md transform hover:-translate-y-0.5 inline-block"
          >
            Apply Today
          </Link>
        </div>
        <button 
          onClick={() => setIsVisible(false)} 
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-emerald-700 hover:text-emerald-900 transition-colors"
          aria-label="Dismiss notification"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
};

export default NotificationBanner;
