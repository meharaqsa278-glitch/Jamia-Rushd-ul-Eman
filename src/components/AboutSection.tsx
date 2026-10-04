import React from 'react';
import { INSTITUTION_INFO } from '../data/courses';
import { BookMarked, BrainCircuit, HeartHandshake, Compass, Award, CheckCircle, Shield } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#F8F9FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-[#0A5C36] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-200">
            <Compass className="w-3.5 h-3.5 text-[#0A5C36]" />
            About Institution / تعارفِ جامعہ
          </div>
          <h2 className="font-urdu text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A5C36] leading-snug mb-3">
            دینی اقدار اور جدید سائنسی علوم کا بے مثال امتزاج
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-sans-en">
            Dedicated to providing free, high-caliber Islamic scholarship paired with in-demand digital and vocational skills to nurture balanced, ethical, and self-sufficient leaders for tomorrow.
          </p>
        </div>

        {/* Two-Column Mission & Vision Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          {/* Left Column: Mission Overview */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <BookMarked className="w-5 h-5 text-[#0A5C36]" />
                <span>Core Mission & Philosophy</span>
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 font-sans-en">
                <strong className="text-[#0A5C36]">Jamia Rushd-ul-Eman & Education Center</strong> was established with a singular, noble vision: to eliminate the divide between traditional religious education and contemporary career-oriented disciplines.
              </p>
              <div className="font-urdu text-base sm:text-lg text-gray-800 bg-emerald-50/60 p-4 rounded-xl border-r-4 border-[#0A5C36] leading-relaxed text-right mb-4">
                ہمارا مقصد ہر طالبعلم کو قرآن و سنت کے نور سے آراستہ کرنے کے ساتھ ساتھ کمپیوٹر، انگریزی زبان اور عملی ہنر مندیوں میں ماہر بنانا ہے تاکہ وہ باوقار اور بااخلاق زندگی گزار سکیں۔
              </div>
              <p className="text-sm text-gray-600 leading-relaxed font-sans-en">
                We believe financial constraints should never stand between an earnest seeker and quality education. Hence, <strong>all admissions across both 1st Shift and 2nd Shift remain 100% free of tuition fees</strong>.
              </p>
            </div>

            {/* Feature Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-xs border border-gray-100">
                <div className="p-2 rounded-lg bg-emerald-50 text-[#0A5C36]">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">100% Free Admissions</h4>
                  <p className="text-xs text-gray-600 font-urdu leading-snug">بغیر کسی فیس کے مفت داخلہ اور تعلیم</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-xs border border-gray-100">
                <div className="p-2 rounded-lg bg-amber-50 text-amber-700">
                  <Award className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Recognized Certification</h4>
                  <p className="text-xs text-gray-600 font-urdu leading-snug">کامیاب طلبہ کے لیے کورس سرٹیفکیٹ</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Leadership Profile - Sir Muhammad Hammad Qadri (Psychologist) */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-b from-[#0A5C36] to-[#0F5257] text-white rounded-2xl p-6 sm:p-8 shadow-xl border-t-4 border-[#D4AF37] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none"></div>

              <div className="inline-flex items-center gap-2 bg-[#D4AF37]/20 border border-[#D4AF37]/40 px-3 py-1 rounded-full text-xs font-semibold text-amber-300 mb-4">
                <Shield className="w-3.5 h-3.5" /> Institutional Leadership
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                Sir Muhammad Hammad Qadri
              </h3>
              <p className="text-amber-300 font-semibold text-sm sm:text-base mb-4 font-urdu">
                سر محمد حماد قادری (ماہر نفسیات / Psychologist)
              </p>

              <div className="space-y-3.5 text-xs sm:text-sm text-emerald-50 leading-relaxed font-sans-en">
                <p>
                  As an esteemed Psychologist and mentor, Sir Muhammad Hammad Qadri oversees the pedagogical atmosphere, infusing modern psychological principles into student development:
                </p>
                <div className="space-y-2 pt-1">
                  <div className="flex items-start gap-2.5">
                    <BrainCircuit className="w-4 h-4 text-amber-300 mt-0.5 flex-shrink-0" />
                    <span><strong>Personality Grooming & Confidence:</strong> Overcoming stage hesitation, social anxiety, and communication blocks.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <HeartHandshake className="w-4 h-4 text-amber-300 mt-0.5 flex-shrink-0" />
                    <span><strong>Mental Wellbeing & Counseling:</strong> Individual guidance for behavioral balance, study stress management, and emotional intelligence.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Compass className="w-4 h-4 text-amber-300 mt-0.5 flex-shrink-0" />
                    <span><strong>Career & Ethical Orientation:</strong> Helping students discover their natural aptitudes and channel them constructively.</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/20 flex items-center justify-between">
                <div className="text-xs text-emerald-200">
                  <span>Location: </span>
                  <span className="text-white font-medium">Arsal Colony, Gujranwala</span>
                </div>
                <a
                  href={INSTITUTION_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs bg-[#D4AF37] text-[#0A5C36] font-bold px-3 py-1.5 rounded-md hover:bg-amber-400 transition-colors"
                >
                  Direct Inquiry
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 text-[#0A5C36] flex items-center justify-center font-bold text-lg mb-4">
              1
            </div>
            <h4 className="text-base font-bold text-gray-900 mb-1">Dini Uloom & Akhlaq</h4>
            <div className="font-urdu text-sm text-[#0A5C36] font-semibold mb-2">دینی علوم اور اخلاقیات</div>
            <p className="text-xs text-gray-600 leading-relaxed font-sans-en">
              Grounded in Quran, Hadith, and Islamic jurisprudence to foster noble manners and deep spiritual awareness.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-lg mb-4">
              2
            </div>
            <h4 className="text-base font-bold text-gray-900 mb-1">Modern Digital Tools</h4>
            <div className="font-urdu text-sm text-blue-700 font-semibold mb-2">کمپیوٹر اور ڈیجیٹل اسکلز</div>
            <p className="text-xs text-gray-600 leading-relaxed font-sans-en">
              Practical computer proficiency, MS Office, and essential digital literacy for modern workplace readiness.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-lg mb-4">
              3
            </div>
            <h4 className="text-base font-bold text-gray-900 mb-1">Vocational Arts</h4>
            <div className="font-urdu text-sm text-purple-700 font-semibold mb-2">فنونِ لطیفہ و ہنر مندی</div>
            <p className="text-xs text-gray-600 leading-relaxed font-sans-en">
              Beautician skincare, fine arts canvas painting, and baking & confectionery to cultivate self-reliance and entrepreneurship.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-amber-100 text-[#D4AF37] flex items-center justify-center font-bold text-lg mb-4">
              4
            </div>
            <h4 className="text-base font-bold text-gray-900 mb-1">Psychological Care</h4>
            <div className="font-urdu text-sm text-amber-700 font-semibold mb-2">ذہنی صحت اور رہنمائی</div>
            <p className="text-xs text-gray-600 leading-relaxed font-sans-en">
              Mentorship under Sir Muhammad Hammad Qadri focusing on behavioral balance, stress reduction, and public confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
