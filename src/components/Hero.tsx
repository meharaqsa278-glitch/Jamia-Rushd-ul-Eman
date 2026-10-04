import React from 'react';
import { INSTITUTION_INFO } from '../data/courses';
import { BookOpen, UserCheck, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Building, Globe, Wind, GraduationCap, MapPin, Scale } from 'lucide-react';

interface HeroProps {
  onExploreCourses: () => void;
  onApplyNow: () => void;
  onNavigateTab?: (tabId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreCourses, onApplyNow, onNavigateTab }) => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-[#0A5C36] to-[#08482b] text-white pt-7 pb-16 lg:pt-12 lg:pb-24"
    >
      {/* Delicate Islamic Geometric Lattice Background Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="islamic-star-pattern" width="80" height="80" patternUnits="userSpaceOnUse">
              <path
                d="M40 0 L49 26 L76 17 L62 40 L88 49 L62 58 L76 81 L49 72 L40 98 L31 72 L4 81 L18 58 L-8 49 L18 40 L4 17 L31 26 Z"
                fill="none"
                stroke="#D4AF37"
                strokeWidth="1.2"
              />
              <circle cx="40" cy="40" r="14" fill="none" stroke="#D4AF37" strokeWidth="0.8" strokeDasharray="3 3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#islamic-star-pattern)" />
        </svg>
      </div>

      {/* Decorative Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#D4AF37]/20 to-emerald-400/20 blur-3xl pointer-events-none rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Free Admission Prominent Pill Badge */}
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/20 border border-[#D4AF37] px-4 py-2 rounded-full mb-5 backdrop-blur-md shadow-lg animate-fade-in relative -top-3 sm:-top-4 -mt-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block animate-pulse"></span>
            <span className="font-urdu text-sm sm:text-base font-bold text-amber-200 tracking-wide">
              🎉 داخلہ بالکل مفت ہے (Free Admissions)
            </span>
          </div>

          {/* Main Urdu Headline */}
          <h1 className="font-urdu text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wide leading-tight mb-4 drop-shadow-md">
            جامعہ رشد الایمان و ایجوکیشن سینٹر
          </h1>

          {/* English Institution Title */}
          <p className="font-sans-en text-lg sm:text-xl md:text-2xl font-semibold text-emerald-100 mb-4 tracking-normal">
            Jamia Rushd-ul-Eman & Education Center
          </p>

          {/* Subheading: Hosted by Sir Muhammad Hammad Qadri */}
          <div className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl px-5 py-2.5 mb-8 backdrop-blur-sm transition-colors">
            <UserCheck className="w-5 h-5 text-amber-300 flex-shrink-0" />
            <div className="text-left sm:text-center">
              <span className="text-xs sm:text-sm font-medium text-emerald-100 block sm:inline">Hosted & Supervised by: </span>
              <span className="text-sm sm:text-base font-bold text-white block sm:inline ml-0 sm:ml-1">
                Sir Muhammad Hammad Qadri <span className="text-amber-300 font-semibold">(Psychologist / ماہر نفسیات)</span>
              </span>
            </div>
          </div>

          {/* Educational Statement / Value proposition */}
          <p className="text-sm sm:text-base md:text-lg text-emerald-100/90 leading-relaxed mb-10 max-w-2xl mx-auto font-sans-en">
            Empowering students through authentic Islamic scholarship (Dars-e-Nizami / درسِ نظامی عصری تعلیم کے ساتھ), modern technical proficiencies (AI, IT), practical vocational arts, and professional psychological development.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-14">
            <button
              onClick={onApplyNow}
              id="hero-fill-admission-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#D4AF37] to-[#E5A93C] hover:from-[#c29f2f] hover:to-[#d4972e] text-[#0A5C36] font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-1 text-base border border-amber-300/60"
            >
              <Sparkles className="w-5 h-5 text-[#0A5C36]" />
              <span>Fill Admission Form</span>
              <span className="font-urdu text-sm font-normal text-[#0A5C36]">/ آن لائن داخلہ فارم</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onExploreCourses}
              id="hero-explore-courses-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-4 rounded-xl border border-white/30 backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 text-base"
            >
              <BookOpen className="w-5 h-5 text-amber-300" />
              <span>Explore Courses & Shifts</span>
              <span className="font-urdu text-sm font-normal text-emerald-200">/ کورسز دیکھیں</span>
            </button>
          </div>

          {/* Quick Pillars Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto text-left">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-3.5 border border-white/15">
              <div className="flex items-center gap-2 text-amber-300 mb-1">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span className="text-xs font-bold uppercase tracking-wider text-white">100% Free</span>
              </div>
              <p className="text-xs text-emerald-100/80 leading-snug">
                مکمل مفت داخلہ و تعلیم برائے تمام کورسز
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-3.5 border border-white/15">
              <div className="flex items-center gap-2 text-amber-300 mb-1">
                <BookOpen className="w-4 h-4 flex-shrink-0" />
                <span className="text-xs font-bold uppercase tracking-wider text-white">Dars-e-Nizami</span>
              </div>
              <p className="text-xs text-emerald-100/80 leading-snug font-urdu">
                صبح کی پہلی شفٹ میں باقاعدہ درسِ نظامی عصری تعلیم کے ساتھ
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-3.5 border border-white/15">
              <div className="flex items-center gap-2 text-amber-300 mb-1">
                <Sparkles className="w-4 h-4 flex-shrink-0" />
                <span className="text-xs font-bold uppercase tracking-wider text-white">Modern Skills</span>
              </div>
              <p className="text-xs text-emerald-100/80 leading-snug">
                کمپیوٹر، AI، انگلش، بیوٹیشن اور آرٹس
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-3.5 border border-white/15">
              <div className="flex items-center gap-2 text-amber-300 mb-1">
                <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                <span className="text-xs font-bold uppercase tracking-wider text-white">Mental Health</span>
              </div>
              <p className="text-xs text-emerald-100/80 leading-snug">
                ماہر نفسیات کی نگرانی میں اخلاقی و ذہنی نشوونما
              </p>
            </div>
          </div>

          {/* Quick Tab Exploration Links for Facilities & Affiliations */}
          {onNavigateTab && (
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => onNavigateTab('library')}
                className="inline-flex items-center gap-2 bg-[#D4AF37]/20 hover:bg-[#D4AF37]/30 border border-[#D4AF37]/40 text-amber-200 hover:text-white px-4 py-2 rounded-xl text-xs font-semibold backdrop-blur-sm transition-all shadow-sm cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-amber-300" />
                <span>Library (مکتبہ)</span>
                <span className="font-urdu text-[11px] text-amber-200">/ تفاسیر، حدیث، نفسیات</span>
              </button>

              <button
                onClick={() => onNavigateTab('darulifta')}
                className="inline-flex items-center gap-2 bg-[#D4AF37]/20 hover:bg-[#D4AF37]/30 border border-[#D4AF37]/40 text-amber-200 hover:text-white px-4 py-2 rounded-xl text-xs font-semibold backdrop-blur-sm transition-all shadow-sm cursor-pointer"
              >
                <Scale className="w-4 h-4 text-amber-300" />
                <span>Dar-ul-Ifta (دار الافتاء)</span>
                <span className="font-urdu text-[11px] text-amber-200">/ شرعی فتاویٰ</span>
              </button>

              <button
                onClick={() => onNavigateTab('faculty')}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-emerald-100 hover:text-white px-4 py-2 rounded-xl text-xs font-medium backdrop-blur-sm transition-all shadow-sm cursor-pointer"
              >
                <GraduationCap className="w-4 h-4 text-amber-300" />
                <span>Our Faculty</span>
                <span className="font-urdu text-[11px] text-amber-200">/ عملہ</span>
              </button>

              <button
                onClick={() => onNavigateTab('facilities')}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-emerald-100 hover:text-white px-4 py-2 rounded-xl text-xs font-medium backdrop-blur-sm transition-all shadow-sm"
              >
                <Wind className="w-4 h-4 text-cyan-300" />
                <span>Facilities (AC Classrooms & AI Labs)</span>
                <span className="font-urdu text-[11px] text-amber-200">/ سہولیات</span>
              </button>

              <button
                onClick={() => onNavigateTab('hikma')}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-emerald-100 hover:text-white px-4 py-2 rounded-xl text-xs font-medium backdrop-blur-sm transition-all shadow-sm"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-300" />
                <span>HIKMA Society (Executive Management)</span>
                <span className="font-urdu text-[11px] text-amber-200">/ حکمت و انتظام</span>
              </button>

              <button
                onClick={() => onNavigateTab('international')}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-emerald-100 hover:text-white px-4 py-2 rounded-xl text-xs font-medium backdrop-blur-sm transition-all shadow-sm"
              >
                <Globe className="w-4 h-4 text-amber-300" />
                <span>International Relations (UK & California)</span>
                <span className="font-urdu text-[11px] text-amber-200">/ عالمی الحاق</span>
              </button>

              <button
                onClick={() => onNavigateTab('contact')}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-emerald-100 hover:text-white px-4 py-2 rounded-xl text-xs font-medium backdrop-blur-sm transition-all shadow-sm"
              >
                <MapPin className="w-4 h-4 text-emerald-300" />
                <span>Contact & Location</span>
                <span className="font-urdu text-[11px] text-amber-200">/ رابطہ و پتہ</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Decorative Wave Transition */}
      <div className="absolute bottom-0 inset-x-0 h-8 sm:h-12 bg-[#F8F9FA] [clip-path:polygon(0_100%,100%_100%,100%_0,0_100%)]"></div>
    </section>
  );
};
