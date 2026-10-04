import React from 'react';
import { 
  Monitor, 
  BrainCircuit, 
  Sparkles, 
  Wind, 
  Zap, 
  Droplets, 
  BookOpen, 
  Check, 
  ShieldCheck, 
  Clock,
  ArrowRight,
  UserCheck
} from 'lucide-react';
import { INSTITUTION_INFO } from '../data/courses';

interface FacilitiesSectionProps {
  onApplyNow?: () => void;
  onExploreCourses?: () => void;
}

export const FacilitiesSection: React.FC<FacilitiesSectionProps> = ({
  onApplyNow,
  onExploreCourses,
}) => {
  const facilities = [
    {
      id: 'computer-ai-labs',
      titleEn: 'Computer & AI Labs',
      titleUrdu: 'جدید کمپیوٹر اور مصنوعی ذہانت لیبز',
      tagline: 'High-Performance Workstations & Generative AI Infrastructure',
      icon: Monitor,
      accentColor: 'emerald',
      badge: 'High-Tech Facility',
      description:
        'State-of-the-art computing laboratory equipped with modern multi-core workstations, high-speed dedicated optical fiber internet, and specialized AI development environments. Designed to provide hands-on experience in office computing, web tools, prompt engineering, and generative AI workflow automation.',
      features: [
        'High-spec desktop stations with fast SSDs and HD displays',
        'Uninterrupted optical fiber broadband connection',
        'Generative AI prompting & practical modern digital literacy setup',
        'Interactive smart projector screen for live coding & software demos',
        'Individual practice stations ensuring 1-on-1 computer access'
      ],
      urduFeatureSummary: 'ہر طالب علم کے لیے علیحدہ کمپیوٹر، تیز رفتار انٹرنیٹ اور مصنوعی ذہانت کی عملی تربیت'
    },
    {
      id: 'psychological-counseling',
      titleEn: 'Psychological Counseling Center',
      titleUrdu: 'سائیکولوجیکل کاؤنسلنگ و رہنمائی سینٹر',
      tagline: 'Personalized Mentorship under Sir Muhammad Hammad Qadri (Psychologist)',
      icon: BrainCircuit,
      accentColor: 'amber',
      badge: 'Supervised by Sir Muhammad Hammad Qadri',
      description:
        'An exclusive, serene psychological counseling sanctuary spearheaded by esteemed mentor and psychologist Sir Muhammad Hammad Qadri. Dedicated to nurturing emotional stability, resolving academic anxiety, developing public speaking confidence, and fostering wholesome psychological resilience.',
      features: [
        'Confidential 1-on-1 counseling and mental well-being chambers',
        'Academic stress reduction and memory retention optimization',
        'Personality grooming, stage fright elimination & speech coaching',
        'Career aptitude psychometric assessments & guidance',
        'Parent-student counseling sessions for holistic family harmony'
      ],
      urduFeatureSummary: 'سر محمد حماد قادری (ماہر نفسیات) کی زیرِ نگرانی ذہنی سکون، خود اعتمادی اور کیریئر کونسلنگ'
    },
    {
      id: 'skill-workshops',
      titleEn: 'Skill Training Workshops',
      titleUrdu: 'پیشہ ورانہ ہنر و پریکٹیکل ورک شاپس',
      tagline: 'Fully Equipped Studios for Hands-on Vocational Excellence',
      icon: Sparkles,
      accentColor: 'purple',
      badge: 'Hands-on Practice',
      description:
        'Dedicated vocational workshop chambers purpose-built for practical craftsmanship, female empowerment, and self-employment. Features specialized setups for Beautician & Skincare, Canvas Fine Arts & Painting, and Commercial Baking & Confectionery.',
      features: [
        'Beautician & Skincare Clinical Stations with salon-grade cosmetology tools',
        'Fine Arts & Painting Studio with specialized wooden easels & mediums',
        'Commercial Baking Suite equipped with professional ovens & culinary mixers',
        'Hygienic, certified practical lab environment meeting safety standards',
        'Real-world portfolio and product building to launch self-run businesses'
      ],
      urduFeatureSummary: 'بیوٹیشن، فائن آرٹس اور بیکنگ کی باقاعدہ پریکٹیکل مشینیں اور ورک شاپس'
    },
    {
      id: 'ac-classrooms',
      titleEn: 'Air-Conditioned Classrooms',
      titleUrdu: 'ائیر کنڈیشنڈ و جدید کلاس رومز',
      tagline: 'Climate-Controlled, Peaceful Ambiance for Optimal Focus',
      icon: Wind,
      accentColor: 'blue',
      badge: 'Climate Controlled',
      description:
        'Spacious, brightly lit, and completely air-conditioned lecture halls engineered for long hours of focused learning. Shields students from Gujranwala’s summer heat waves, maintaining cool temperatures and pure airflow so students can absorb sacred Dars-e-Nizami and technical knowledge peacefully.',
      features: [
        'Heavy-duty inverter air conditioning in every lecture room',
        'Ergonomic, spacious posture-friendly seating and study desks',
        'Acoustically treated quiet rooms minimizing external road noise',
        'Audio-visual teaching aids & crisp magnetic whiteboards',
        'Proper ambient lighting designed to prevent eye fatigue'
      ],
      urduFeatureSummary: 'گرمی کے اثرات سے محفوظ، پرسکون اور مکمل ائیر کنڈیشنڈ تدریسی کمرے'
    }
  ];

  return (
    <section id="facilities" className="py-12 sm:py-16 md:py-20 bg-[#F8F9FA] min-h-[calc(100vh-140px)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0A5C36]/10 border border-[#0A5C36]/20 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#0A5C36] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Campus Infrastructure & Amenities</span>
            <span className="font-urdu text-[13px] text-[#0A5C36]">جدید سہولیات</span>
          </div>

          <h2 className="font-urdu text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A5C36] mb-2 leading-tight">
            جدید تعلیمی و تدریسی سہولیات
          </h2>
          <p className="font-sans-en text-lg sm:text-xl font-bold text-gray-900 tracking-tight mb-3">
            World-Class Campus Facilities
          </p>
          <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed font-sans-en">
            Experience an educational environment purpose-built for holistic human flourishing. From advanced AI labs to air-conditioned halls and specialized counseling chambers, the Gujranwala campus sets a new benchmark in student care.
          </p>
        </div>

        {/* 4 Core Facilities Showcased in Detail */}
        <div className="space-y-8 sm:space-y-10 mb-16">
          {facilities.map((fac, idx) => {
            const IconComponent = fac.icon;
            const isEven = idx % 2 === 0;

            return (
              <div
                key={fac.id}
                id={fac.id}
                className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-gray-200 shadow-md hover:shadow-lg transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Visual Left / Details */}
                  <div className={`lg:col-span-7 space-y-4 ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0A5C36] to-[#0F5257] text-white flex items-center justify-center shadow-md">
                        <IconComponent className="w-5 h-5 text-amber-300" />
                      </div>
                      <span className="inline-flex items-center gap-1 bg-emerald-50 border border-emerald-200 text-[#0A5C36] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        {fac.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 font-sans-en">
                        {fac.titleEn}
                      </h3>
                      <div className="font-urdu text-base sm:text-lg font-bold text-[#0A5C36] mt-0.5">
                        {fac.titleUrdu}
                      </div>
                      <div className="text-xs sm:text-sm font-medium text-amber-700 mt-1">
                        {fac.tagline}
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans-en">
                      {fac.description}
                    </p>

                    <div className="p-3 bg-amber-50/70 border border-amber-200/70 rounded-xl font-urdu text-xs text-amber-900 text-right">
                      💡 {fac.urduFeatureSummary}
                    </div>
                  </div>

                  {/* Features List Right */}
                  <div className={`lg:col-span-5 ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                    <div className="bg-[#F8F9FA] border border-gray-200 rounded-2xl p-5 sm:p-6 space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-800 border-b border-gray-200 pb-2 flex items-center justify-between">
                        <span>Key Specifications</span>
                        <ShieldCheck className="w-4 h-4 text-[#0A5C36]" />
                      </h4>

                      <ul className="space-y-2.5 text-xs text-gray-700">
                        {fac.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5">
                            <span className="w-4 h-4 rounded-full bg-[#0A5C36] text-white flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px]">
                              ✓
                            </span>
                            <span className="leading-snug">{feat}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-2 text-[11px] text-gray-500 flex items-center justify-between">
                        <span>Maintenance: Daily inspection</span>
                        <span className="text-[#0A5C36] font-semibold">100% Student Access</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Campus Additional Utilities Grid */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-sm mb-12">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
              Campus Amenities & Operational Reliability
            </h3>
            <div className="font-urdu text-sm text-[#0A5C36] font-semibold mb-2">
              بنیادی سہولیات اور مسلسل بجلی کا انتظام
            </div>
            <p className="text-xs text-gray-600">
              Reliable infrastructure located on Mansoor Road, Arsal Colony, Gujranwala.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/60 text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center mb-3 shadow-sm">
                <Zap className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-gray-900 text-sm mb-1">24/7 Power Backup</h4>
              <p className="font-urdu text-xs text-[#0A5C36] font-semibold mb-1">بلاتعطل سولر و جنریٹر پاور</p>
              <p className="text-xs text-gray-600">
                Continuous solar generator systems ensuring computers and air conditioning never shut down during load-shedding.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-200/60 text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-3 shadow-sm">
                <Droplets className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-gray-900 text-sm mb-1">Purified RO Drinking Water</h4>
              <p className="font-urdu text-xs text-[#0A5C36] font-semibold mb-1">صاف فلٹر شدہ پینے کا پانی</p>
              <p className="text-xs text-gray-600">
                Multi-stage reverse osmosis filtration plant providing hygienic, chilled drinking water for all students and faculty.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200/60 text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-[#0A5C36] text-white flex items-center justify-center mb-3 shadow-sm">
                <BookOpen className="w-6 h-6 text-amber-300" />
              </div>
              <h4 className="font-bold text-gray-900 text-sm mb-1">Dars & Study Library</h4>
              <p className="font-urdu text-xs text-[#0A5C36] font-semibold mb-1">کتب خانہ و مطالعہ گاہ</p>
              <p className="text-xs text-gray-600">
                Extensive collection of classical Islamic books, reference commentaries, English textbooks, and IT manuals.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-200/60 text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-purple-700 text-white flex items-center justify-center mb-3 shadow-sm">
                <UserCheck className="w-6 h-6 text-purple-200" />
              </div>
              <h4 className="font-bold text-gray-900 text-sm mb-1">Psychological Chambers</h4>
              <p className="font-urdu text-xs text-[#0A5C36] font-semibold mb-1">ماہر نفسیات کا نجی چیمبر</p>
              <p className="text-xs text-gray-600">
                Specialized sound-insulated counseling suite where Sir Muhammad Hammad Qadri conducts private sessions.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-[#0A5C36] to-[#0F5257] rounded-3xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300">Experience Campus</span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Visit Facilities at Mansoor Road, Arsal Colony, Gujranwala
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100 mt-1 max-w-xl">
              Classes are conducted across 1st Shift (8:30 AM – 2:00 PM for Dars-e-Nizami) and 2nd Shift (2:00 PM – 5:00 PM for Technical Courses). Admissions are 100% free!
            </p>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            {onApplyNow && (
              <button
                onClick={onApplyNow}
                className="bg-gradient-to-r from-[#D4AF37] to-[#E5A93C] text-[#0A5C36] font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-md hover:brightness-105 transition-all flex items-center gap-2"
              >
                <span>Apply for Free Admission</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
