import React from 'react';
import { 
  ShieldCheck, 
  Compass, 
  BrainCircuit, 
  Sparkles, 
  Users, 
  Award, 
  GraduationCap, 
  CheckCircle2, 
  HeartHandshake, 
  BookOpen, 
  ArrowRight, 
  ChevronRight,
  PhoneCall
} from 'lucide-react';
import { INSTITUTION_INFO } from '../data/courses';

interface HikmaSectionProps {
  onApplyNow: () => void;
  onExploreCourses: () => void;
}

export const HikmaSection: React.FC<HikmaSectionProps> = ({ onApplyNow, onExploreCourses }) => {
  return (
    <section id="hikma" className="py-14 sm:py-20 bg-[#F8F9FA] relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hikma-bg-lattice" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M30 0 L60 30 L30 60 L0 30 Z" fill="none" stroke="#0A5C36" strokeWidth="1" />
              <circle cx="30" cy="30" r="10" fill="none" stroke="#D4AF37" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hikma-bg-lattice)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200/80 px-4 py-1.5 rounded-full text-xs font-bold text-[#0A5C36] uppercase tracking-wider mb-3 shadow-xs">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
            Governing & Management Body / انتظامی کونسل
          </div>

          <h2 className="font-urdu text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A5C36] leading-snug mb-2">
            حکمہ سوسائٹی (HIKMA)
          </h2>
          <div className="text-sm sm:text-base font-semibold text-[#D4AF37] font-sans-en uppercase tracking-wider mb-3">
            Hub for Islamic Knowledge, Mentorship and Advancement
          </div>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-sans-en">
            The executive managing society entrusted with overseeing campus operations, fostering student leadership, and providing personalized psychological and academic mentorship at Jamia Rushd-ul-Eman.
          </p>
        </div>

        {/* Hero Emblem & Governance Showcase Card */}
        <div className="bg-gradient-to-br from-[#0A5C36] via-[#0B4D2F] to-[#073822] text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl border-t-4 border-[#D4AF37] relative overflow-hidden mb-16">
          {/* Decorative ambient orbs */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Emblem / Crest Badge Visual */}
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="relative mb-4">
                {/* Outer glowing ring */}
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-tr from-[#D4AF37]/40 via-amber-200/20 to-[#0A5C36] p-1.5 flex items-center justify-center shadow-2xl animate-pulse">
                  {/* Inner emblem container */}
                  <div className="w-full h-full rounded-full bg-[#052617] border-2 border-[#D4AF37] flex flex-col items-center justify-center p-3 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#D4AF37]/5 pointer-events-none"></div>
                    <GraduationCap className="w-10 h-10 sm:w-12 sm:h-12 text-[#D4AF37] mb-1 drop-shadow" />
                    <span className="font-urdu text-xl sm:text-2xl font-black text-amber-200 leading-tight">
                      حِکْمَہ
                    </span>
                    <span className="text-[10px] sm:text-xs font-bold tracking-widest text-emerald-200 uppercase mt-0.5">
                      HIKMA
                    </span>
                    <span className="text-[8px] sm:text-[9px] text-amber-300/80 font-medium">EST. 2024</span>
                  </div>
                </div>
                {/* Crown accent badge */}
                <div className="absolute -bottom-2 bg-gradient-to-r from-[#D4AF37] to-[#E5A93C] text-[#0A5C36] px-3 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-md">
                  Governing Body
                </div>
              </div>

              <div className="font-urdu text-sm font-bold text-amber-200 mt-2">
                مرکز برائے اسلامی علوم، رہنمائی اور ترقی
              </div>
              <p className="text-xs text-emerald-100/80 font-sans-en mt-1">
                Executive Student & Management Council
              </p>
            </div>

            {/* Right: Purpose & Statement */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#D4AF37]/20 border border-[#D4AF37]/50 px-3.5 py-1 rounded-full text-xs font-semibold text-amber-300">
                <Sparkles className="w-3.5 h-3.5" /> Society Overview & Mandate
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                Empowering Students Through Islamic Wisdom & Institutional Excellence
              </h3>

              <div className="font-urdu text-base sm:text-lg text-emerald-50 bg-black/25 p-4 rounded-2xl border-r-4 border-[#D4AF37] leading-relaxed text-right">
                حکمہ سوسائٹی (HIKMA) جامعہ رشد الایمان و ایجوکیشن سینٹر کی مرکزی انتظامی اور تربیتی سوسائٹی ہے، جو جامعہ کے روزمرہ امور، نظم و ضبط، تعلیمی معیار، اور طلبہ کی ذہنی و اخلاقی رہنمائی کی نگرانی کرتی ہے۔
              </div>

              <p className="text-sm text-emerald-100/90 leading-relaxed font-sans-en">
                Operating under the institutional patronship of <strong>Sir Muhammad Hammad Qadri (Psychologist)</strong>, HIKMA provides a structured bridge between classical Islamic scholarship and modern educational methodologies. Its leadership body ensures that students receive not only free, high-caliber instruction but also the individual counseling and developmental opportunities needed to thrive in modern society.
              </p>

              {/* Society Core Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10 text-center">
                  <div className="font-urdu text-lg font-bold text-amber-300 leading-tight">100% مفت</div>
                  <div className="text-[11px] text-emerald-100 font-medium">Free Student Mentorship</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10 text-center">
                  <div className="font-urdu text-lg font-bold text-amber-300 leading-tight">ذہنی نشوونما</div>
                  <div className="text-[11px] text-emerald-100 font-medium">Psychological Counseling</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10 text-center col-span-2 sm:col-span-1">
                  <div className="font-urdu text-lg font-bold text-amber-300 leading-tight">قیادت و نظم</div>
                  <div className="text-[11px] text-emerald-100 font-medium">Student Leadership</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Responsibilities & Vision Cards */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 font-sans-en mb-2">
              Three Pillars of HIKMA Society
            </h3>
            <p className="font-urdu text-sm sm:text-base text-[#0A5C36] font-semibold">
              حکمہ سوسائٹی کے بنیادی مقاصد اور ذمہ داریاں
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1: Management & Oversight */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#0A5C36] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform border border-emerald-100">
                  <ShieldCheck className="w-6 h-6 text-[#0A5C36]" />
                </div>
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">Pillar 1</span>
                <h4 className="text-lg font-bold text-gray-900 mb-1 font-sans-en">
                  Management & Oversight
                </h4>
                <div className="font-urdu text-sm font-semibold text-[#0A5C36] mb-3">
                  انتظامی نگرانی اور نظم و ضبط
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans-en mb-4">
                  Ensuring smooth daily operations, academic timetables, attendance monitoring, and top-tier facility maintenance across both morning and afternoon shifts.
                </p>

                <ul className="space-y-2 text-xs text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0A5C36] flex-shrink-0 mt-0.5" />
                    <span>Daily classroom and IT lab readiness and maintenance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0A5C36] flex-shrink-0 mt-0.5" />
                    <span>Maintaining student discipline, code of conduct, and Islamic decorum</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0A5C36] flex-shrink-0 mt-0.5" />
                    <span>Smooth coordination between administration, faculty, and parents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0A5C36] flex-shrink-0 mt-0.5" />
                    <span>Resource allocation, library support, and security protocols</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 font-urdu text-xs text-gray-600 text-right leading-relaxed">
                کیمپس کے نظم و ضبط، کمپیوٹر لیبز اور کلاس رومز کی مستقل دیکھ بھال۔
              </div>
            </div>

            {/* Card 2: Mentorship & Counseling */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow border border-amber-200/80 bg-gradient-to-b from-white to-amber-50/20 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#D4AF37] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform border border-amber-100">
                  <BrainCircuit className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">Pillar 2</span>
                <h4 className="text-lg font-bold text-gray-900 mb-1 font-sans-en">
                  Mentorship & Counseling
                </h4>
                <div className="font-urdu text-sm font-semibold text-[#0A5C36] mb-3">
                  رہنمائی اور ذہنی و اخلاقی تربیت
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans-en mb-4">
                  Providing individualized academic, psychological, and personal development guidance to help every student overcome challenges and build self-assurance.
                </p>

                <ul className="space-y-2 text-xs text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span>One-on-one psychological counseling and stress management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span>Personality grooming, overcoming stage hesitation and fear</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span>Ethical Tarbiyah grounded in Sunnah and classical Akhlaq</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span>Study guidance, focus improvement, and time-management workshops</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 font-urdu text-xs text-gray-600 text-right leading-relaxed">
                ماہر نفسیات کی زیرِ نگرانی طلبہ کے ذہنی مسائل کا حل اور خود اعتمادی۔
              </div>
            </div>

            {/* Card 3: Islamic & Modern Advancement */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform border border-blue-100">
                  <Compass className="w-6 h-6 text-blue-700" />
                </div>
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">Pillar 3</span>
                <h4 className="text-lg font-bold text-gray-900 mb-1 font-sans-en">
                  Islamic & Modern Advancement
                </h4>
                <div className="font-urdu text-sm font-semibold text-[#0A5C36] mb-3">
                  دینی اقدار اور جدید سائنسی ترقی
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans-en mb-4">
                  Bridging traditional Islamic values with modern digital competencies, vocational entrepreneurship, and active student leadership programs.
                </p>

                <ul className="space-y-2 text-xs text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
                    <span>Organizing seminars, Qiraat & Naat contests, and speech competitions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
                    <span>Hands-on digital skills bootcamps and MS Office certifications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
                    <span>Vocational workshops (Beautician, Fine Arts, Confectionery)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
                    <span>Cultivating responsible community ambassadors and moral leadership</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 font-urdu text-xs text-gray-600 text-right leading-relaxed">
                اسلامی تعلیمات کو جدید ٹیکنالوجی اور عملی مہارتوں کے ساتھ ہم آہنگ کرنا۔
              </div>
            </div>
          </div>
        </div>

        {/* Inspiring Quote Box on Hikmah & Mentorship */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-emerald-100 shadow-sm relative overflow-hidden mb-16">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="inline-block p-3 rounded-2xl bg-emerald-50 text-[#0A5C36] shadow-xs">
              <BookOpen className="w-7 h-7 text-[#0A5C36]" />
            </span>

            {/* Quranic Verse on Wisdom (Hikmah) */}
            <div className="font-urdu text-2xl sm:text-3xl lg:text-4xl text-[#0A5C36] font-bold leading-relaxed tracking-wide pt-1">
              "وَمَن يُؤْتَ الْحِكْمَةَ فَقَدْ أُوتِيَ خَيْرًا كَثِيرًا"
            </div>

            <p className="font-urdu text-base sm:text-lg text-gray-700 leading-relaxed">
              "اور جس شخص کو حکمت عطا کی گئی، یقیناً اُسے بہت بڑی بھلائی اور خیرِ کثیر عطا کر دی گئی۔"
              <span className="block text-xs sm:text-sm text-[#D4AF37] font-semibold mt-1">
                (سورۃ البقرۃ: 269)
              </span>
            </p>

            <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto my-3"></div>

            <p className="text-xs sm:text-sm text-gray-600 italic font-sans-en max-w-2xl mx-auto leading-relaxed">
              "True education is not merely the transmission of facts, but the ignition of intellect, moral compass, and compassion. Through HIKMA, we mentor minds and nurture souls for an honorable life here and in the hereafter."
            </p>

            <div className="text-xs font-semibold text-[#0A5C36]">
              — Institutional Mentorship Philosophy | Jamia Rushd-ul-Eman
            </div>
          </div>
        </div>

        {/* Society Action Banner */}
        <div className="bg-gradient-to-r from-emerald-950 via-[#0A5C36] to-emerald-900 text-white rounded-2xl p-6 sm:p-8 shadow-md border border-[#D4AF37]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs text-amber-300 font-semibold uppercase tracking-wider">
              <HeartHandshake className="w-4 h-4" /> Comprehensive Student Welfare
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-white">
              Enroll Today & Benefit from HIKMA Mentorship
            </h4>
            <p className="text-xs sm:text-sm text-emerald-100/90 font-urdu">
              داخلہ بالکل مفت ہے — تمام کورسز اور تربیتی رہنمائی بغیر کسی فیس کے دستیاب ہیں۔
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 flex-shrink-0">
            <button
              onClick={onApplyNow}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#E5A93C] hover:from-[#c29f2f] hover:to-[#d4972e] text-[#0A5C36] font-bold px-5 py-2.5 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5 text-xs sm:text-sm border border-amber-300/40"
            >
              <span>Apply Online Now</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <a
              href={INSTITUTION_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-medium px-4 py-2.5 rounded-xl text-xs sm:text-sm backdrop-blur-sm transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-emerald-300" />
              <span>Contact HIKMA Office</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
