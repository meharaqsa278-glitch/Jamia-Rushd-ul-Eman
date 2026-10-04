import React from 'react';
import { INSTITUTION_INFO } from '../data/courses';
import { GraduationCap, Phone, MapPin, Clock, Heart, ArrowUp, MessageCircle, ChevronRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#052b19] text-gray-300 pt-16 pb-12 border-t border-[#D4AF37]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-emerald-900/80">
          {/* Col 1: Brand & Mission */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0A5C36] to-[#0F5257] text-[#D4AF37] flex items-center justify-center border border-[#D4AF37]/40 shadow-md">
                <GraduationCap className="w-6 h-6 text-amber-300" />
              </div>
              <div>
                <h3 className="font-urdu text-lg font-bold text-white leading-snug">
                  {INSTITUTION_INFO.nameUrdu}
                </h3>
                <p className="font-sans-en text-xs font-semibold text-emerald-200">
                  {INSTITUTION_INFO.nameEn}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed font-sans-en max-w-md">
              A premier educational sanctuary in Gujranwala offering 100% free Islamic scholars' program (Dars-e-Nizami / درسِ نظامی عصری تعلیم کے ساتھ) and modern technical, vocational, and IT courses under the psychological stewardship of Sir Muhammad Hammad Qadri.
            </p>

            <div className="font-urdu text-xs text-amber-300 leading-relaxed">
              داخلہ بالکل مفت ہے • قرآن و سنت، جدید ٹیکنالوجی، اور اخلاقی تربیت
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-emerald-800/80 pb-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-amber-300 transition-colors text-left flex items-center gap-1.5"
                >
                  <span>›</span> <span>Home (صفحہ اول)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-amber-300 transition-colors text-left flex items-center gap-1.5"
                >
                  <span>›</span> <span>About Us (ہمارے بارے میں)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('courses')}
                  className="hover:text-amber-300 transition-colors text-left flex items-center gap-1.5"
                >
                  <span>›</span> <span>Courses & Shifts (کورسز و اوقات)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('library')}
                  className="hover:text-amber-300 transition-colors text-left flex items-center gap-1.5"
                >
                  <span>›</span> <span>Library (مکتبہ و کتب خانہ)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('darulifta')}
                  className="hover:text-amber-300 transition-colors text-left flex items-center gap-1.5"
                >
                  <span>›</span> <span>Dar-ul-Ifta (دار الافتاء)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faculty')}
                  className="hover:text-amber-300 transition-colors text-left flex items-center gap-1.5"
                >
                  <span>›</span> <span>Our Faculty (عملہ)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('facilities')}
                  className="hover:text-amber-300 transition-colors text-left flex items-center gap-1.5"
                >
                  <span>›</span> <span>Facilities (سہولیات)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('hikma')}
                  className="hover:text-amber-300 transition-colors text-left flex items-center gap-1.5"
                >
                  <span>›</span> <span>HIKMA Society (حکمہ سوسائٹی)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('international')}
                  className="hover:text-amber-300 transition-colors text-left flex items-center gap-1.5"
                >
                  <span>›</span> <span>International Relations (بین الاقوامی تعلقات)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('admission')}
                  className="hover:text-amber-300 transition-colors text-left flex items-center gap-1.5 text-amber-300 font-semibold"
                >
                  <span>›</span> <span>Apply Online (آن لائن داخلہ)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-amber-300 transition-colors text-left flex items-center gap-1.5"
                >
                  <span>›</span> <span>Contact & Location (پتہ و رابطہ)</span>
                </button>
              </li>
            </ul>

            {/* Quick Navigation Apply CTA */}
            <div className="pt-3">
              <button
                onClick={() => onNavigate('admission')}
                id="footer-apply-cta-btn"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#E5A93C] hover:from-[#c29f2f] hover:to-[#d4972e] text-[#0A5C36] font-bold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 text-xs border border-amber-300/40"
              >
                <span>Apply Now</span>
                <span className="font-urdu font-normal text-xs text-[#0A5C36]">/ آن لائن داخلہ</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Col 3: Contact & Timings summary */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-emerald-800/80 pb-2">
              Campus Information
            </h4>
            <div className="space-y-2.5 text-xs text-emerald-100/90">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span>Mansoor Road, Arsal Colony, Gujranwala, Punjab</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <a href={INSTITUTION_INFO.whatsappLink} className="hover:text-amber-300 transition-colors">
                  WhatsApp: {INSTITUTION_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <div>1st Shift: 8:30 AM – 2:00 PM</div>
                  <div>2nd Shift: 2:00 PM – 5:00 PM</div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={INSTITUTION_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-lg font-bold text-xs hover:bg-[#20bd5a] transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Message on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright and Back-to-top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-200/70">
          <div>
            © {new Date().getFullYear()} Jamia Rushd-ul-Eman & Education Center. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="font-urdu text-amber-300/80 text-xs">
              زیرِ سرپرستی: سر محمد حماد قادری (ماہر نفسیات)
            </span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-emerald-200 hover:text-white transition-colors bg-emerald-900/60 px-3 py-1 rounded-md border border-emerald-800"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
