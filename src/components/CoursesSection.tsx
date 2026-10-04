import React, { useState } from 'react';
import { COURSES } from '../data/courses';
import { Course } from '../types';
import {
  Clock,
  BookOpen,
  Monitor,
  Languages,
  Sparkles,
  Palette,
  Cpu,
  Cake,
  Check,
  ArrowRight,
  Sun,
  Sunset,
  Info
} from 'lucide-react';

interface CoursesSectionProps {
  onSelectCourse: (courseOptionValue: string) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({ onSelectCourse }) => {
  const [selectedShiftTab, setSelectedShiftTab] = useState<'all' | '1st' | '2nd'>('all');
  const [expandedCourseId, setExpandedCourseId] = useState<string | null>(null);

  const getCourseIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen className="w-6 h-6" />;
      case 'Monitor':
        return <Monitor className="w-6 h-6" />;
      case 'Languages':
        return <Languages className="w-6 h-6" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6" />;
      case 'Palette':
        return <Palette className="w-6 h-6" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6" />;
      case 'Cake':
        return <Cake className="w-6 h-6" />;
      default:
        return <BookOpen className="w-6 h-6" />;
    }
  };

  const filteredCourses = COURSES.filter((course) => {
    if (selectedShiftTab === '1st') return course.shift === '1st Shift';
    if (selectedShiftTab === '2nd') return course.shift === '2nd Shift';
    return true;
  });

  return (
    <section id="courses" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/15 text-[#0A5C36] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border border-[#D4AF37]/40">
            <span>🎓 Academic Programs & Timings</span>
          </div>
          <h2 className="font-urdu text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A5C36] leading-tight mb-2">
            شعبہ جات اور تدریسی شفٹس
          </h2>
          <p className="text-sm sm:text-base font-semibold text-gray-800 mb-2 font-sans-en">
            Shifts & Courses Offered
          </p>
          <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto leading-relaxed">
            Choose between our foundational morning Dars-e-Nizami (درسِ نظامی عصری تعلیم کے ساتھ) Islamic scholar program or our dynamic afternoon professional short courses. All courses have <strong>zero tuition fees</strong>.
          </p>
        </div>

        {/* Shift Filter Navigation Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-12 flex-wrap">
          <button
            onClick={() => setSelectedShiftTab('all')}
            id="tab-filter-all"
            className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
              selectedShiftTab === 'all'
                ? 'bg-[#0A5C36] text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Courses (تمام کورسز - 7)
          </button>

          <button
            onClick={() => setSelectedShiftTab('1st')}
            id="tab-filter-1st-shift"
            className={`inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
              selectedShiftTab === '1st'
                ? 'bg-[#0A5C36] text-white shadow-md'
                : 'bg-emerald-50 text-[#0A5C36] hover:bg-emerald-100 border border-emerald-200'
            }`}
          >
            <Sun className="w-4 h-4 text-amber-500" />
            <span>1st Shift: 8:30 AM - 2:00 PM (درسِ نظامی عصری تعلیم کے ساتھ)</span>
          </button>

          <button
            onClick={() => setSelectedShiftTab('2nd')}
            id="tab-filter-2nd-shift"
            className={`inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
              selectedShiftTab === '2nd'
                ? 'bg-[#0A5C36] text-white shadow-md'
                : 'bg-amber-50 text-amber-900 hover:bg-amber-100 border border-amber-200'
            }`}
          >
            <Sunset className="w-4 h-4 text-amber-600" />
            <span>2nd Shift: 2:00 PM - 5:00 PM (شارٹ کورسز)</span>
          </button>
        </div>

        {/* 1st Shift Highlight Notice Banner */}
        {selectedShiftTab !== '2nd' && (
          <div className="mb-10 bg-gradient-to-r from-emerald-900 to-[#0A5C36] text-white rounded-2xl p-4 sm:p-6 shadow-md border border-emerald-700/50 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="w-12 h-12 rounded-xl bg-amber-400/20 text-[#D4AF37] flex items-center justify-center flex-shrink-0 border border-amber-400/30">
                <Sun className="w-6 h-6 text-amber-300" />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 uppercase tracking-wider">
                  <Clock className="w-3.5 h-3.5" /> 1st Shift Timing: 8:30 AM to 2:00 PM
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mt-0.5">
                  Dars-e-Nizami (درسِ نظامی عصری تعلیم کے ساتھ) - Mandatory for 1st Shift
                </h3>
                <p className="text-xs text-emerald-100 font-urdu mt-1">
                  پہلی شفٹ میں داخلہ لینے والے تمام طلبہ کے لیے درسِ نظامی عصری تعلیم کے ساتھ لازمی کورس ہے۔
                </p>
              </div>
            </div>
            <button
              onClick={() => onSelectCourse(COURSES[0].formOptionValue)}
              className="bg-[#D4AF37] hover:bg-amber-400 text-[#0A5C36] font-bold px-5 py-2.5 rounded-lg text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 whitespace-nowrap"
            >
              <span>Apply for 1st Shift</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Courses Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => {
            const isMandatory = course.isMandatory;
            const isExpanded = expandedCourseId === course.id;

            return (
              <div
                key={course.id}
                id={`course-card-${course.id}`}
                className={`flex flex-col justify-between bg-white rounded-2xl border transition-all duration-300 hover:shadow-xl relative overflow-hidden group ${
                  isMandatory
                    ? 'border-2 border-[#0A5C36] shadow-md ring-1 ring-[#0A5C36]/20'
                    : 'border-gray-200 shadow-xs hover:border-[#D4AF37]'
                }`}
              >
                {/* Mandatory Tag for Dars-e-Nizami */}
                {isMandatory && (
                  <div className="bg-[#0A5C36] text-[#FFF9D2] text-[11px] font-bold px-3 py-1 flex items-center justify-between">
                    <span className="uppercase tracking-wider">★ 1st Shift Mandatory</span>
                    <span className="font-urdu text-xs">پہلی شفٹ کا لازمی کورس</span>
                  </div>
                )}

                {/* Card Main Body */}
                <div className="p-6">
                  {/* Top Metadata: Shift Badge & Timing */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide ${
                        course.shift === '1st Shift'
                          ? 'bg-emerald-100 text-[#0A5C36]'
                          : 'bg-amber-100 text-amber-900'
                      }`}
                    >
                      <Clock className="w-3 h-3" />
                      {course.shift}
                    </span>

                    <span className="text-[11px] font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                      {course.timing}
                    </span>
                  </div>

                  {/* Icon & Code Badge */}
                  <div className="flex items-start justify-between mb-3">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 shadow-xs ${
                        isMandatory
                          ? 'bg-[#0A5C36] text-white'
                          : 'bg-gray-50 text-[#0A5C36] border border-gray-200'
                      }`}
                    >
                      {getCourseIcon(course.icon)}
                    </div>
                    <span className="text-xs font-bold text-gray-400 bg-gray-50 border border-gray-200 px-2 py-1 rounded">
                      {course.code}
                    </span>
                  </div>

                  {/* Course Titles */}
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-[#0A5C36] transition-colors mb-1">
                    {course.titleEn}
                  </h3>
                  <div className="font-urdu text-sm sm:text-base font-bold text-[#0A5C36] mb-3 text-right leading-relaxed">
                    {course.titleUrdu}
                  </div>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                    {course.shortDescEn}
                  </p>

                  <div className="font-urdu text-xs text-gray-500 text-right mb-4 leading-relaxed border-t border-gray-100 pt-2.5">
                    {course.shortDescUrdu}
                  </div>

                  {/* Key Highlights / Curriculum Outline */}
                  <div className="bg-gray-50 rounded-xl p-3.5 mb-4 border border-gray-100">
                    <div className="text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-2 flex items-center justify-between">
                      <span>Key Curriculum Highlights</span>
                      <span className="font-urdu text-[11px] text-gray-500">نصاب کے اہم پہلو</span>
                    </div>
                    <ul className="space-y-1.5">
                      {course.featuresEn.slice(0, isExpanded ? course.featuresEn.length : 3).map((feat, idx) => (
                        <li key={idx} className="text-xs text-gray-700 flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#0A5C36] flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {course.featuresEn.length > 3 && (
                      <button
                        onClick={() => setExpandedCourseId(isExpanded ? null : course.id)}
                        className="mt-2 text-[11px] font-semibold text-[#0A5C36] hover:text-[#08482b] flex items-center gap-1 focus:outline-none"
                      >
                        <Info className="w-3 h-3" />
                        <span>{isExpanded ? 'Show less' : `View all ${course.featuresEn.length} topics`}</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-4 bg-gray-50/70 border-t border-gray-100 flex items-center justify-between gap-3">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-500 uppercase tracking-wider">Tuition Fee</span>
                    <span className="text-xs font-bold text-[#0A5C36]">100% Free (مفت)</span>
                  </div>

                  <button
                    onClick={() => onSelectCourse(course.formOptionValue)}
                    id={`apply-course-btn-${course.id}`}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all duration-200 shadow-xs ${
                      isMandatory
                        ? 'bg-[#0A5C36] hover:bg-[#08482b] text-white hover:shadow-md'
                        : 'bg-gradient-to-r from-[#D4AF37] to-[#E5A93C] hover:from-[#c29f2f] hover:to-[#d4972e] text-[#0A5C36] hover:shadow-md'
                    }`}
                  >
                    <span>Select & Apply</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Direct WhatsApp Consultation Callout */}
        <div className="mt-14 bg-emerald-50/70 border border-emerald-200 rounded-2xl p-6 text-center max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-3 font-sans-en">
            Need guidance regarding which course fits your academic background or career goals? Get personalized psychological & career advice from <strong>Sir Muhammad Hammad Qadri</strong>.
          </p>
          <a
            href="https://wa.me/923237121228?text=Hello%20Sir%20Muhammad%20Hammad%20Qadri,%20I%20need%20course%20guidance%20for%20Jamia%20Rushd-ul-Eman"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0A5C36] bg-white border border-emerald-300 hover:bg-emerald-100 px-4 py-2 rounded-lg transition-colors shadow-xs"
          >
            <span>💬 Ask Sir Muhammad Hammad Qadri on WhatsApp (0323-7121228)</span>
          </a>
        </div>
      </div>
    </section>
  );
};
