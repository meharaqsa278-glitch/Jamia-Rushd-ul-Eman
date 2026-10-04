import React, { useState } from 'react';
import { INSTITUTION_INFO } from '../data/courses';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {/* Quick popup tooltip */}
      {isOpen && (
        <div className="mb-3 bg-white rounded-2xl p-4 shadow-2xl border border-gray-200 w-72 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-gray-100 mb-2.5">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse"></div>
              <span className="text-xs font-bold text-gray-800">Online Admission Helpline</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600 p-0.5"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-gray-600 mb-3 font-sans-en">
            Questions regarding free admission, Dars-e-Nizami (درسِ نظامی عصری تعلیم کے ساتھ), or short courses? Chat with our administration directly on WhatsApp.
          </p>

          <div className="font-urdu text-xs text-gray-700 text-right mb-3">
            داخلے اور کورسز کے بارے میں رہنمائی حاصل کریں
          </div>

          <a
            href={INSTITUTION_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Open WhatsApp ({INSTITUTION_INFO.phoneDisplay})</span>
          </a>
        </div>
      )}

      {/* Trigger Button */}
      <div className="flex items-center gap-2">
        {!isOpen && (
          <div className="hidden sm:inline-block bg-white text-[#0A5C36] text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border border-emerald-100">
            <span>Free Admission Help? 💬</span>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          id="floating-whatsapp-btn"
          aria-label="Contact Admissions via WhatsApp"
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200 relative group"
        >
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-amber-400"></span>
          </span>
          <MessageCircle className="w-7 h-7" />
        </button>
      </div>
    </div>
  );
};
