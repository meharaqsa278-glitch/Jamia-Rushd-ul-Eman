import React from 'react';
import { INSTITUTION_INFO } from '../data/courses';
import {
  MapPin,
  Phone,
  Clock,
  UserCheck,
  Navigation,
  ExternalLink,
  MessageCircle,
  Sparkles
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="pt-10 sm:pt-14 pb-16 sm:pb-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 pt-2">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-[#0A5C36] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200 shadow-2xs">
            <MapPin className="w-3.5 h-3.5 text-[#0A5C36]" />
            Location & Contact Details / پتہ اور رابطہ
          </div>
          <h2 className="font-urdu text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A5C36] leading-tight mb-2">
            ہم سے رابطہ کریں اور کیمپس تشریف لائیں
          </h2>
          <p className="text-sm sm:text-base font-semibold text-gray-800 mb-2 font-sans-en">
            Get in Touch & Visit Campus
          </p>
          <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto leading-relaxed">
            Located conveniently on Mansoor Road in Arsal Colony, Gujranwala. We invite students and parents to visit during shifts or connect via WhatsApp for admission counseling.
          </p>
        </div>

        {/* 2-Column Grid: Contact Information Cards vs Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Cards Column */}
          <div className="lg:col-span-5 space-y-5">
            {/* Campus Address Card */}
            <div className="bg-[#F8F9FA] rounded-2xl p-6 border border-gray-200 shadow-xs hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#0A5C36] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#0A5C36]" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-0.5">
                    Physical Address / کیمپس کا پتہ
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
                    Mansoor Road, Arsal Colony, Gujranwala
                  </h3>
                  <div className="font-urdu text-base font-bold text-[#0A5C36] mt-1 text-right">
                    منصور روڈ، ارسل کالونی، گوجرانوالہ، پنجاب
                  </div>
                  <p className="text-xs text-gray-600 mt-2 font-sans-en">
                    Easy access from all major arteries of Gujranwala city. Secure and disciplined academic environment.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp & Call Card */}
            <div className="bg-gradient-to-br from-[#0A5C36] to-[#0F5257] text-white rounded-2xl p-6 shadow-md border-t-4 border-[#D4AF37]">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-amber-300 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider block mb-0.5">
                    Official Admissions Helpline
                  </span>
                  <div className="text-xl sm:text-2xl font-bold font-mono tracking-tight text-white">
                    {INSTITUTION_INFO.phoneDisplay}
                  </div>
                  <div className="font-urdu text-xs text-emerald-100 mt-1">
                    براہِ راست کال یا واٹس ایپ میسج کریں
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href={INSTITUTION_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-whatsapp-btn"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href={`tel:${INSTITUTION_INFO.phoneRaw}`}
                  id="contact-call-btn"
                  className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white font-semibold py-3 px-4 rounded-xl text-xs sm:text-sm border border-white/20 transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-300" />
                  <span>Call Directly</span>
                </a>
              </div>
            </div>

            {/* Timings & Supervision info */}
            <div className="bg-[#F8F9FA] rounded-2xl p-6 border border-gray-200 shadow-xs space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#0A5C36] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">Institution Shifts & Timings</h4>
                  <div className="text-xs text-gray-700 mt-1 space-y-1">
                    <p><strong className="text-[#0A5C36]">1st Shift (درسِ نظامی عصری تعلیم کے ساتھ):</strong> 8:30 AM to 2:00 PM</p>
                    <p><strong className="text-amber-700">2nd Shift (Short Courses):</strong> 2:00 PM to 5:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 border-t border-gray-200 pt-3">
                <UserCheck className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">Institutional Host</h4>
                  <p className="text-xs text-gray-800 font-medium">Sir Muhammad Hammad Qadri <span className="text-[#0A5C36] font-semibold">(Psychologist)</span></p>
                  <p className="font-urdu text-xs text-gray-600 mt-0.5">سر محمد حماد قادری (ماہر نفسیات و کاؤنسلر)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Google Map Embed and Directions */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-4 sm:p-6 border border-gray-200 shadow-lg overflow-hidden">
              <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></div>
                  <span className="text-xs sm:text-sm font-bold text-gray-900">
                    Interactive Campus Map (Arsal Colony, Gujranwala)
                  </span>
                </div>

                <a
                  href="https://maps.google.com/?q=Mansoor+Road+Arsal+Colony+Gujranwala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A5C36] hover:text-[#08482b] bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Styled Responsive Google Map Embed */}
              <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-gray-200 relative bg-gray-100">
                <iframe
                  title="Campus Location Map - Mansoor Road, Arsal Colony, Gujranwala"
                  src="https://maps.google.com/maps?q=Mansoor%20Road,%20Arsal%20Colony,%20Gujranwala,%20Punjab,%20Pakistan&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                ></iframe>
              </div>

              {/* Map Footer Helper */}
              <div className="mt-4 pt-3 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                  <span>Landmark: Near Mansoor Road main stop, Arsal Colony, Gujranwala</span>
                </div>
                <span className="font-urdu text-xs text-gray-500">
                  منصور روڈ، ارسل کالونی، گوجرانوالہ میں جامعہ کا کیمپس واقع ہے
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
