import React from 'react';
import { Globe, Award, BookCheck, ShieldCheck, GraduationCap, Building2, CheckCircle2, ArrowRight } from 'lucide-react';
import { INSTITUTION_INFO } from '../data/courses';

interface InternationalRelationsProps {
  onApplyNow?: () => void;
  onExploreCourses?: () => void;
}

export const InternationalRelations: React.FC<InternationalRelationsProps> = ({
  onApplyNow,
  onExploreCourses,
}) => {
  return (
    <section id="international" className="py-12 sm:py-16 md:py-20 bg-[#F8F9FA] min-h-[calc(100vh-140px)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0A5C36]/10 border border-[#0A5C36]/20 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#0A5C36] mb-3">
            <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Global Academic Horizons</span>
            <span className="font-urdu text-[13px] text-[#0A5C36]">بین الاقوامی تعلیمی الحاق</span>
          </div>

          <h2 className="font-urdu text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A5C36] mb-2 leading-tight">
            بین الاقوامی تعلیمی الحاق و عالمی شناخت
          </h2>
          <p className="font-sans-en text-lg sm:text-xl font-bold text-gray-900 tracking-tight mb-3">
            International Relations & Global Academic Affiliations
          </p>
          <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed font-sans-en">
            Bridging classical scholarship with global standards. <strong>Jamia Rushd-ul-Eman & Education Center</strong> maintains academic affiliations and pedagogical synergy with renowned institutions in <strong>England (UK)</strong> and <strong>California University (USA)</strong>.
          </p>
        </div>

        {/* Highlight Banner / Institutional Prestige */}
        <div className="bg-gradient-to-br from-[#0A5C36] via-[#0D4B2E] to-[#0F5257] text-white rounded-3xl p-6 sm:p-10 shadow-xl border-t-4 border-[#D4AF37] mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-1.5 bg-[#D4AF37] text-[#0A5C36] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" /> Worldwide Standards in Gujranwala
              </span>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-snug">
                World-Class Quality Curricula Benchmarked with the UK and USA
              </h3>

              <p className="text-emerald-100 text-xs sm:text-sm leading-relaxed max-w-2xl font-sans-en">
                Under the strategic vision and psychological leadership of <strong>Sir Muhammad Hammad Qadri (Psychologist)</strong>, our learners receive training benchmarked to global academic requirements. Whether graduating from the first-shift <em>Dars-e-Nizami (درسِ نظامی عصری تعلیم کے ساتھ)</em> or modern vocational short courses, students earn prestigious credentials that command respect worldwide.
              </p>

              <div className="font-urdu text-sm sm:text-base text-amber-200 leading-relaxed pt-1">
                ہمارا مشن طلبہ کو انگلینڈ اور کیلیفورنیا یونیورسٹی جیسے عالمی تعلیمی اداروں کے معیار کے مطابق تربیت دینا ہے تاکہ وہ دینی و عصری دونوں میدانوں میں بین الاقوامی سطح پر سرخرو ہو سکیں۔
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-400 text-[#0A5C36] flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-md">
                  🇬🇧
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">England (UK) Affiliations</h4>
                  <p className="text-emerald-200 text-xs font-urdu">برطانیہ کے تعلیمی نیٹ ورک سے اشتراک</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-400 text-[#0A5C36] flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-md">
                  🇺🇸
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">California University (USA)</h4>
                  <p className="text-emerald-200 text-xs font-urdu">کیلیفورنیا یونیورسٹی کا تحقیقی اشتراک</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-base flex-shrink-0 shadow-md">
                  100%
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Free Quality Education</h4>
                  <p className="text-emerald-200 text-xs font-urdu">مفت داخلہ اور عالمی معیار کی تدریس</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Two Featured Affiliations Detail Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Card 1: England (UK) Affiliations */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110"></div>
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">🇬🇧</span>
                <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Academic Framework
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-1 font-sans-en">
                England (UK) Academic Affiliation
              </h3>
              <p className="font-urdu text-sm font-semibold text-[#0A5C36] mb-3">
                برطانیہ (انگلینڈ) کے تعلیمی و تدریسی نیٹ ورک کے ساتھ وابستگی
              </p>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-5 font-sans-en">
                Language and communication pedagogy, pedagogical benchmarks, and student assessment metrics are aligned with recognized British educational frameworks:
              </p>

              <ul className="space-y-2.5 text-xs text-gray-700 mb-6">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0A5C36] flex-shrink-0 mt-0.5" />
                  <span><strong>English Language & Speaking Standards:</strong> Curriculum structured after UK conversational and business English fluency guidelines.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0A5C36] flex-shrink-0 mt-0.5" />
                  <span><strong>Pedagogical Assessment & Teacher Training:</strong> Faculty upskilling workshops guided by British pedagogical methodologies.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0A5C36] flex-shrink-0 mt-0.5" />
                  <span><strong>Global Certificate Endorsement:</strong> Course completion awards that provide students with higher credibility for international remote freelance or study abroad.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0A5C36] flex-shrink-0 mt-0.5" />
                  <span><strong>Ethical Leadership & Character Framework:</strong> Integration of modern behavioral ethics alongside classical spiritual virtues.</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
              <span className="font-medium text-gray-700">Jurisdiction: United Kingdom</span>
              <span className="font-urdu text-[#0A5C36] font-semibold">عالمی تعلیمی تسلیم شدگی</span>
            </div>
          </div>

          {/* Card 2: California University (USA) */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-50 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110"></div>
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">🇺🇸</span>
                <span className="inline-flex items-center gap-1 bg-amber-100 text-amber-800 text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Technology & Research
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-1 font-sans-en">
                California University Affiliation
              </h3>
              <p className="font-urdu text-sm font-semibold text-[#0A5C36] mb-3">
                کیلیفورنیا یونیورسٹی (امریکہ) کے ساتھ تعلیمی و سائنسی ربط
              </p>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-5 font-sans-en">
                Connecting our students to the heart of technological innovation and modern psychological counseling methodologies through academic collaboration with California University:
              </p>

              <ul className="space-y-2.5 text-xs text-gray-700 mb-6">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <span><strong>AI & Advanced Computing Syllabus:</strong> Curricular content for our Artificial Intelligence and Computer courses modeled on California tech modules.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <span><strong>Applied Educational Psychology:</strong> Mentored by Sir Muhammad Hammad Qadri, incorporating modern cognitive behavioral techniques from top US institutions.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <span><strong>Practical Digital Economy Literacy:</strong> Training youth to engage in prompt engineering, global freelancing, and modern creative industries.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <span><strong>Academic Research & Knowledge Exchange:</strong> Access to contemporary educational resources and modular learning structures.</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
              <span className="font-medium text-gray-700">Jurisdiction: California, United States</span>
              <span className="font-urdu text-[#0A5C36] font-semibold">جدید ٹیکنالوجی و سائیکالوجی</span>
            </div>
          </div>
        </div>

        {/* Student Benefits Grid */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm mb-12">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
              How International Affiliations Benefit Every Student
            </h3>
            <div className="font-urdu text-sm text-[#0A5C36] font-semibold mb-2">
              بین الاقوامی الحاق سے طلبہ کو حاصل ہونے والے فوائد
            </div>
            <p className="text-xs text-gray-600">
              Every learner studying at the Gujranwala campus enjoys distinctive advantages designed for the 21st century.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-100">
              <div className="w-9 h-9 rounded-lg bg-[#0A5C36] text-white flex items-center justify-center mb-3">
                <GraduationCap className="w-5 h-5 text-amber-300" />
              </div>
              <h4 className="font-bold text-gray-900 text-sm mb-1">Globally Aligned Curriculum</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Courses updated with modern global syllabi so our graduates stay ahead in modern job markets.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-100">
              <div className="w-9 h-9 rounded-lg bg-[#D4AF37] text-[#0A5C36] flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-gray-900 text-sm mb-1">Recognized Certificates</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Completion certificates bearing institutional authentication, recognized by employers and institutions.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100">
              <div className="w-9 h-9 rounded-lg bg-blue-700 text-white flex items-center justify-center mb-3">
                <Building2 className="w-5 h-5 text-blue-200" />
              </div>
              <h4 className="font-bold text-gray-900 text-sm mb-1">Modern Pedagogical Vision</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Active learning methods combining teacher mentorship with practical real-world problem solving.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-purple-50/60 border border-purple-100">
              <div className="w-9 h-9 rounded-lg bg-purple-700 text-white flex items-center justify-center mb-3">
                <BookCheck className="w-5 h-5 text-purple-200" />
              </div>
              <h4 className="font-bold text-gray-900 text-sm mb-1">Harmonized Traditional & Modern</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                The perfect bridge between classical Islamic scholarship (Dars-e-Nizami) and contemporary international tools.
              </p>
            </div>
          </div>
        </div>

        {/* Call to action bar */}
        <div className="bg-gradient-to-r from-[#0A5C36] to-[#0F5257] rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
              Start Your International Standard Education Today — 100% Free
            </h3>
            <p className="text-emerald-100 text-xs sm:text-sm">
              Admissions are open on Mansoor Road, Arsal Colony, Gujranwala. Free admission for all deserving students.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            {onExploreCourses && (
              <button
                onClick={onExploreCourses}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm px-4 py-2.5 rounded-lg border border-white/20 transition-colors"
              >
                View Courses
              </button>
            )}
            {onApplyNow && (
              <button
                onClick={onApplyNow}
                className="bg-gradient-to-r from-[#D4AF37] to-[#E5A93C] text-[#0A5C36] font-bold text-xs sm:text-sm px-5 py-2.5 rounded-lg shadow-md hover:brightness-105 transition-all flex items-center gap-2"
              >
                <span>Apply Online Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
