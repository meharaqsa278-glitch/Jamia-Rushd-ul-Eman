import React, { useState, useMemo } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  BrainCircuit, 
  Code, 
  Globe2, 
  Palette, 
  Cake, 
  Sparkles, 
  Award, 
  CheckCircle2, 
  HeartHandshake, 
  PhoneCall, 
  Search, 
  Users, 
  ChevronRight,
  ShieldCheck,
  Star
} from 'lucide-react';
import { INSTITUTION_INFO } from '../data/courses';

interface FacultyMember {
  id: string;
  nameEn: string;
  nameUrdu: string;
  designationEn: string;
  designationUrdu: string;
  department: 'leadership' | 'islamic' | 'technology' | 'language' | 'vocational';
  qualificationEn: string;
  qualificationUrdu: string;
  experienceEn: string;
  experienceUrdu: string;
  subjectsEn: string[];
  subjectsUrdu: string[];
  bioEn: string;
  bioUrdu: string;
  avatarBg: string;
  avatarIcon: string;
  featured?: boolean;
}

const FACULTY_MEMBERS: FacultyMember[] = [
  {
    id: 'hammad-qadri',
    nameEn: 'Sir Muhammad Hammad Qadri',
    nameUrdu: 'سر محمد حماد قادری (ماہر نفسیات)',
    designationEn: 'Patron-in-Chief & Senior Educational Psychologist',
    designationUrdu: 'سرپرستِ اعلیٰ و ماہرِ نفسیات و رہنمائی',
    department: 'leadership',
    qualificationEn: 'M.Sc. Applied Psychology, Behavioral Counselor & Pedagogical Strategist',
    qualificationUrdu: 'ایم ایس سی اپلائیڈ سائیکالوجی، ماہرِ نفسیات و تربیت',
    experienceEn: '15+ Years in Psychological Counseling & Youth Mentorship',
    experienceUrdu: '15 سال سے زائد کونسلنگ و تربیتی تجربہ',
    subjectsEn: [
      'Applied Educational Psychology',
      'Student Mental Health & Emotional Resilience',
      'Personality Grooming & Public Speaking Confidence',
      'Ethical Tarbiyah & Akhlaq'
    ],
    subjectsUrdu: [
      'تعلیمی نفسیات و ذہنی صحت',
      'خود اعتمادی اور اسٹیج فیئر کا خاتمہ',
      'طلبہ کی انفرادی اخلاقی و فکری تربیت',
      'سیرت النبی ﷺ کی روشنی میں کردار سازی'
    ],
    bioEn: 'Spearheading the holistic vision of Jamia Rushd-ul-Eman & Education Center, Sir Muhammad Hammad Qadri provides dedicated counseling that overcomes academic anxiety, builds character, and bridges classical Islamic wisdom with modern cognitive behavioral techniques.',
    bioUrdu: 'جامعہ رشد الایمان و ایجوکیشن سینٹر کے سرپرستِ اعلیٰ ہیں۔ آپ طلبہ کی ذہنی صلاحیتوں کو نکھارنے، امتحانی خوف اور جھجھک دور کرنے اور باوقار اسلامی کردار کی تشکیل کے لیے ہمہ وقت رہنمائی فراہم کرتے ہیں۔',
    avatarBg: 'from-emerald-700 to-[#0A5C36]',
    avatarIcon: 'BrainCircuit',
    featured: true
  },
  {
    id: 'mufti-usman',
    nameEn: 'Mufti Hafiz Muhammad Usman Qadri',
    nameUrdu: 'مفتی حافظ محمد عثمان قادری',
    designationEn: 'Head of Dars-e-Nizami & Islamic Jurisprudence',
    designationUrdu: 'صدر مدرس شعبہ درسِ نظامی و علومِ فقہ',
    department: 'islamic',
    qualificationEn: 'Shahadat-ul-Almiyah (HEC Recognized M.A. Islamic Studies), Takhassus fil-Fiqh',
    qualificationUrdu: 'شہادت العالمیہ (ایم اے اسلامیات)، تخصص فی الفقہ الاسلامی',
    experienceEn: '14+ Years in Traditional Nizami & Classical Hadith Sciences',
    experienceUrdu: '14 سالہ تدریسی و فتاویٰ تجربہ',
    subjectsEn: [
      'Fiqh & Usul-ul-Fiqh (Islamic Jurisprudence)',
      'Classical Arabic Grammar (Sarf & Nahw)',
      'Hadith Sciences (Kutub-e-Sittah)',
      'Tafseer & Quranic Exegesis'
    ],
    subjectsUrdu: [
      'فقہ و اصولِ فقہ (اسلامی قانون)',
      'علم الصرف و النحو (عربی گرامر)',
      'حدیث و اصولِ حدیث',
      'تفسیر القرآن'
    ],
    bioEn: 'A distinguished Islamic scholar with deep mastery in classical jurisprudence and Arabic linguistics, dedicated to training scholars who embody traditional piety and practical wisdom.',
    bioUrdu: 'جامعہ میں درسِ نظامی کے سینئر مدرس ہیں، جو عربی گرامر، فقہ اور حدیث کے علوم کو آسان اور موثر فہم کے ساتھ طلبہ کے دل و دماغ میں راسخ کرتے ہیں۔',
    avatarBg: 'from-[#0A5C36] to-emerald-900',
    avatarIcon: 'GraduationCap'
  },
  {
    id: 'qari-bilal',
    nameEn: 'Qari Muhammad Bilal Raza',
    nameUrdu: 'قاری محمد بلال رضا قادری',
    designationEn: 'Senior Instructor – Tajweed, Hifz & Qira’at',
    designationUrdu: 'استاذ شعبہ تجوید و قرآت و حفظِ قرآن',
    department: 'islamic',
    qualificationEn: 'Sanad Hafiz-ul-Quran, Qari-e-Sab’ah wa Asharah (Canonical Recitations)',
    qualificationUrdu: 'سند حفظ القرآن، قاری سبعہ و عشرہ',
    experienceEn: '11+ Years in Quranic Phonetics & Makharij Training',
    experienceUrdu: '11 سالہ تدریسِ تجوید و حسنِ قرآت',
    subjectsEn: [
      'Makharij & Tajweed Rules (فنِ تجوید و مخارج)',
      'Husn-e-Qira’at & Arabic Phonetics',
      'Hifz Revision & Retention Strategies',
      'Daily Masnoon Duas & Namaz Correction'
    ],
    subjectsUrdu: [
      'مخارج الحروف و قواعدِ تجوید',
      'حسنِ صوت و قرآت کے لہجات',
      'حفظ و تکرارِ قرآن پاک',
      'مسنون دعائیں اور نماز کی تصحیح'
    ],
    bioEn: 'Renowned for immaculate pronunciation and gentle teaching methodology, ensuring every learner recites the Holy Quran with authentic Tajweed rules.',
    bioUrdu: 'قرآن مجید کی درست مخارج اور خوبصورت لحن میں تلاوت سکھانے میں خاص مہارت رکھتے ہیں، اور ابتدائی سے لے کر اعلیٰ درجے تک تجوید سکھاتے ہیں۔',
    avatarBg: 'from-amber-700 to-[#D4AF37]',
    avatarIcon: 'BookOpen'
  },
  {
    id: 'engr-hamza',
    nameEn: 'Engr. Muhammad Hamza Farooq',
    nameUrdu: 'انجینئر محمد حمزہ فاروق',
    designationEn: 'Lead IT Instructor – AI Tools & Computer Applications',
    designationUrdu: 'سینئر انسٹرکٹر شعبہ کمپیوٹر سائنس و مصنوعی ذہانت',
    department: 'technology',
    qualificationEn: 'BS Computer Science, Certified Microsoft & AI Prompt Specialist',
    qualificationUrdu: 'بی ایس کمپیوٹر سائنس، مائیکروسافٹ و اے آئی سرٹیفائیڈ',
    experienceEn: '7+ Years in Digital Literacy & Practical IT Bootcamps',
    experienceUrdu: '7 سالہ عملی سافٹ ویئر و آئی ٹی ٹریننگ',
    subjectsEn: [
      'Modern Artificial Intelligence (AI) Tools & Workflows',
      'Advanced MS Office (Word, Excel, PowerPoint, Access)',
      'Digital Office Management & Typing Speed Mastery',
      'Basic Graphic Design & Web Fundamentals'
    ],
    subjectsUrdu: [
      'مصنوعی ذہانت (AI) کے جدید ٹولز اور استعمال',
      'مائیکروسافٹ آفس (ورڈ، ایکسل، پاورپوائنٹ)',
      'کمپیوٹر ٹائپنگ اور دفتری آٹومیشن',
      'بنیادی ویب و گرافک ڈیزائننگ'
    ],
    bioEn: 'Passionate about equipping madrasah graduates and youth with in-demand 21st-century technological tools and digital competencies in the campus high-tech computer lab.',
    bioUrdu: 'کیمپس کی ایئرکنڈیشنڈ کمپیوٹر لیب میں طلبہ کو عملی طور پر کمپیوٹر چلانے، دفتری کام سنبھالنے اور جدید اے آئی ٹیکنالوجی استعمال کرنے کی تربیت دیتے ہیں۔',
    avatarBg: 'from-cyan-800 to-blue-900',
    avatarIcon: 'Code'
  },
  {
    id: 'prof-adeel',
    nameEn: 'Prof. M. Adeel Hussain',
    nameUrdu: 'پروفیسر ایم عدیل حسین',
    designationEn: 'Senior Lecturer – English Language & Global Communication',
    designationUrdu: 'لیکچرر شعبہ انگریزی زبان و مواصلاتی صلاحیتیں',
    department: 'language',
    qualificationEn: 'M.A. English Linguistics & Literature, TEFL / CELTA Framework Certified',
    qualificationUrdu: 'ایم اے انگلش لنگوسٹکس، ٹیفل سرٹیفائیڈ',
    experienceEn: '9+ Years in Spoken English & International Interview Preparation',
    experienceUrdu: '9 سالہ انگریزی بول چال و تدریسی تجربہ',
    subjectsEn: [
      'Spoken English & Real-World Fluency',
      'Practical English Grammar & Vocabulary Expansion',
      'Professional Email & Presentation Skills',
      'Confidence in Global Academic Communication'
    ],
    subjectsUrdu: [
      'انگریزی بول چال اور تلفظ کی درستگی',
      'عملی انگلش گرامر اور ذخیرہ الفاظ',
      'پریزنٹیشن اور انٹرویو کی تیاری',
      'بین الاقوامی روابط اور خط و کتابت'
    ],
    bioEn: 'Bridging local potential with global opportunities through interactive, conversational spoken English methods aligned with UK and USA pedagogical standards.',
    bioUrdu: 'طلبہ میں بلا جھجھک انگریزی بولنے، درست تلفظ اور پراعتماد انداز میں بات چیت کرنے کی صلاحیت پیدا کرنے کے لیے جدید عملی اسباق پڑھاتے ہیں۔',
    avatarBg: 'from-blue-800 to-indigo-900',
    avatarIcon: 'Globe2'
  },
  {
    id: 'ustadh-farhan',
    nameEn: 'Ustadh Muhammad Farhan Khatat',
    nameUrdu: 'استاذ محمد فرحان خطاط',
    designationEn: 'Master Instructor – Calligraphy & Fine Arts',
    designationUrdu: 'استاذ شعبہ خطاطی و فنونِ لطیفہ',
    department: 'vocational',
    qualificationEn: 'Diploma in Classical Fine Arts, National Calligraphy Guild Awardee',
    qualificationUrdu: 'ڈپلومہ فائن آرٹس، قومی ایوارڈ یافتہ خطاط',
    experienceEn: '10+ Years in Traditional Nastaliq, Thuluth & Canvas Art',
    experienceUrdu: '10 سالہ خطاطی و کینوس پینٹنگ تجربہ',
    subjectsEn: [
      'Classical Islamic Calligraphy (Thuluth, Nastaliq, Ruq’ah)',
      'Canvas Acrylic & Oil Painting Techniques',
      'Modern Calligraphic Art & Color Theory',
      'Exhibition & Commercial Artwork Production'
    ],
    subjectsUrdu: [
      'روایتی اسلامی خطاطی (ثلث، نستعلیق، رقعہ)',
      'کینوس پر ایکریلک و آئل پینٹنگ',
      'جدید خطاطی اور رنگوں کا امتزاج',
      'تجارتی نمائش اور آرٹ ورک کی تیاری'
    ],
    bioEn: 'Nurturing aesthetic talent and traditional Islamic calligraphy to preserve spiritual art heritage while preparing students for lucrative commercial art careers.',
    bioUrdu: 'کینوس پینٹنگ اور اسلامی خطاطی کے اسرار و رموز سکھاتے ہیں، جس سے طلبہ کو اپنے ہاتھوں سے شاندار اسلامی فن پارے تخلیق کرنے کی سند ملتی ہے۔',
    avatarBg: 'from-rose-800 to-pink-900',
    avatarIcon: 'Palette'
  },
  {
    id: 'madam-zainab',
    nameEn: 'Madam Zainab Bibi',
    nameUrdu: 'محترمہ زینب بی بی',
    designationEn: 'Senior Certified Instructor – Beautician & Aesthetic Care',
    designationUrdu: 'سینئر انسٹرکٹر شعبہ بیوٹیشن و بیوٹی پارلر کورس',
    department: 'vocational',
    qualificationEn: 'Diploma in Advanced Cosmetology, Hair Esthetics & Skin Care',
    qualificationUrdu: 'ڈپلومہ کاسمیٹولوجی و اسکن کیئر، سرٹیفائیڈ بیوٹیشن',
    experienceEn: '8+ Years in Professional Salon Management & Female Vocational Training',
    experienceUrdu: '8 سالہ پارلر مینجمنٹ اور عملی ٹریننگ تجربہ',
    subjectsEn: [
      'Bridal & Party Makeup Artistry',
      'Skin Care, Facials & Esthetic Treatments',
      'Hair Styling, Cutting & Coloring',
      'Home Salon Startup & Client Management'
    ],
    subjectsUrdu: [
      'برائیڈل اور پارٹی میک اپ',
      'اسکن کیئر، فیشل اور کلینزنگ',
      'ہیر اسٹائلنگ اور کٹنگ',
      'ہوم پارلر بزنس اور کلائنٹ ہینڈلنگ'
    ],
    bioEn: 'Dedicated to female empowerment through comprehensive, dignified vocational training in a secure, fully equipped studio setting on campus.',
    bioUrdu: 'طالبات کو باوقار انداز میں بیوٹیشن کی مکمل عملی مہارت سکھاتی ہیں تاکہ وہ خود کفیل ہو کر اپنا پارلر یا ہوم سروسز باآسانی شروع کر سکیں۔',
    avatarBg: 'from-purple-800 to-fuchsia-900',
    avatarIcon: 'Sparkles'
  },
  {
    id: 'madam-ayesha',
    nameEn: 'Chef Madam Ayesha Noor',
    nameUrdu: 'محترمہ عائشہ نور (شیف)',
    designationEn: 'Master Instructor – Baking, Confectionery & Pastry Arts',
    designationUrdu: 'ماہرِ بیکنگ و کنفیکشنری کورس انسٹرکٹر',
    department: 'vocational',
    qualificationEn: 'Certified Pastry Chef, Commercial Culinary & Food Hygiene Specialist',
    qualificationUrdu: 'سرٹیفائیڈ پیسٹری شیف، فوڈ سیفٹی ایکسپرٹ',
    experienceEn: '7+ Years in Artisan Baking & Bakery Business Mentorship',
    experienceUrdu: '7 سالہ بیکنگ و ہوم کیٹرنگ تجربہ',
    subjectsEn: [
      'Commercial Cake Baking & Fondant Artistry',
      'Artisan Cookies, Brownies & French Pastries',
      'Pizzas, Breads & Savory Snacks',
      'Kitchen Food Hygiene & Home Bakery Business Setup'
    ],
    subjectsUrdu: [
      'کیک بیکنگ، فونڈنٹ اور کریم ڈیکوریشن',
      'بسکٹس، براؤنیز اور پیسٹریز کی تیاری',
      'پیزا، بریڈ اور بیکری اسنیکس',
      'فوڈ ہائیجین اور آن لائن ہوم بیکری کاروبار'
    ],
    bioEn: 'Empowering students to turn creative culinary passions into profitable home enterprises with hands-on kitchen practicals and safety standards.',
    bioUrdu: 'بیکنگ اور کنفیکشنری کی لذیذ اور معیاری پروڈکٹس تیار کرنے کا ہنر سکھاتی ہیں، جس سے فارغ التحصیل افراد اپنا کامیاب ہوم بیکری سیٹ اپ چلا رہے ہیں۔',
    avatarBg: 'from-amber-800 to-orange-900',
    avatarIcon: 'Cake'
  }
];

interface FacultySectionProps {
  onApplyNow: () => void;
  onExploreCourses: () => void;
}

export const FacultySection: React.FC<FacultySectionProps> = ({ onApplyNow, onExploreCourses }) => {
  const [selectedDept, setSelectedDept] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredFaculty = useMemo(() => {
    return FACULTY_MEMBERS.filter((member) => {
      const matchesDept = selectedDept === 'all' || member.department === selectedDept;
      const matchesSearch =
        searchQuery === '' ||
        member.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.nameUrdu.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.designationEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.subjectsEn.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesDept && matchesSearch;
    });
  }, [selectedDept, searchQuery]);

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'BrainCircuit':
        return <BrainCircuit className="w-6 h-6 text-white" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-white" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-white" />;
      case 'Code':
        return <Code className="w-6 h-6 text-white" />;
      case 'Globe2':
        return <Globe2 className="w-6 h-6 text-white" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-white" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-white" />;
      case 'Cake':
        return <Cake className="w-6 h-6 text-white" />;
      default:
        return <GraduationCap className="w-6 h-6 text-white" />;
    }
  };

  return (
    <section id="faculty" className="py-14 sm:py-20 bg-[#F8F9FA] relative overflow-hidden">
      {/* Subtle Islamic Lattice Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="faculty-lattice" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M30 0 L60 30 L30 60 L0 30 Z" fill="none" stroke="#0A5C36" strokeWidth="1" />
              <circle cx="30" cy="30" r="10" fill="none" stroke="#D4AF37" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#faculty-lattice)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200/80 px-4 py-1.5 rounded-full text-xs font-bold text-[#0A5C36] uppercase tracking-wider mb-3 shadow-xs">
            <GraduationCap className="w-4 h-4 text-[#D4AF37]" />
            Faculty & Mentors / عملہ و ماہرین
          </div>

          <h2 className="font-urdu text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A5C36] leading-snug mb-2">
            عملہ اور علمی و فنی ماہرین
          </h2>
          <div className="text-lg sm:text-xl font-bold text-gray-900 font-sans-en mb-3">
            Our Distinguished Faculty & Mentors
          </div>
          <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed font-sans-en">
            Learn from accomplished Islamic scholars, educational psychologists, certified IT engineers, and creative industry masters dedicated to shaping knowledgeable, morally grounded, and self-sufficient leaders.
          </p>
        </div>

        {/* Highlight Banner: Psychological & Institutional Leadership */}
        <div className="bg-gradient-to-br from-[#0A5C36] via-[#0D4D2D] to-[#07361E] rounded-3xl p-6 sm:p-10 text-white shadow-xl border-t-4 border-[#D4AF37] relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Badge / Avatar representation */}
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="relative mb-4">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-3xl bg-gradient-to-tr from-[#D4AF37]/50 via-amber-200/20 to-[#0A5C36] p-1.5 shadow-2xl flex items-center justify-center">
                  <div className="w-full h-full rounded-2xl bg-[#042416] border-2 border-[#D4AF37] flex flex-col items-center justify-center p-4 text-center">
                    <BrainCircuit className="w-12 h-12 text-[#D4AF37] mb-2 drop-shadow" />
                    <span className="font-urdu text-lg font-bold text-amber-200 leading-tight">
                      سر محمد حماد قادری
                    </span>
                    <span className="text-[10px] text-emerald-200 font-semibold uppercase mt-0.5">
                      Psychologist
                    </span>
                  </div>
                </div>
                <div className="absolute -bottom-2 bg-gradient-to-r from-[#D4AF37] to-[#E5A93C] text-[#0A5C36] px-3 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow">
                  Patron & Counselor
                </div>
              </div>
              <div className="font-urdu text-sm font-semibold text-amber-200 mt-2">
                ماہرِ نفسیات و سرپرستِ ادارہ
              </div>
              <p className="text-xs text-emerald-200/80 font-sans-en">
                M.Sc. Applied Psychology
              </p>
            </div>

            {/* Right Information */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#D4AF37]/20 border border-[#D4AF37]/50 px-3.5 py-1 rounded-full text-xs font-semibold text-amber-300">
                <Star className="w-3.5 h-3.5 fill-amber-300" />
                Institutional Mentor & Psychological Director
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                Sir Muhammad Hammad Qadri (Psychologist)
              </h3>

              <div className="font-urdu text-base sm:text-lg text-emerald-50 bg-black/25 p-4 rounded-2xl border-r-4 border-[#D4AF37] leading-relaxed text-right">
                "تعلیم کا اصل مقصد محض معلومات کا ذخیرہ نہیں بلکہ کردار، تفکر اور اخلاق کو سنوارنا ہے۔ جامعہ رشد الایمان میں ہم ہر طالبعلم کی ذہنی و جذباتی صلاحیتوں کو نکھار کر خود اعتمادی عطا کرتے ہیں۔"
              </div>

              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-sans-en">
                Under his psychological stewardship, the faculty implements modern empathetic teaching methodologies, stress-free classroom environments, and continuous moral mentoring so that students excel both in sacred classical sciences and professional modern disciplines.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10 text-center">
                  <div className="text-amber-300 font-bold text-sm sm:text-base">1-on-1</div>
                  <div className="text-[11px] text-emerald-100">Private Counseling</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10 text-center">
                  <div className="text-amber-300 font-bold text-sm sm:text-base">100% مفت</div>
                  <div className="text-[11px] text-emerald-100">Free Guidance</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10 text-center col-span-2 sm:col-span-1">
                  <div className="text-amber-300 font-bold text-sm sm:text-base">21st Century</div>
                  <div className="text-[11px] text-emerald-100">Pedagogical Methods</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-200 mb-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search faculty by name, subject, or role..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0A5C36] focus:border-transparent bg-gray-50/50"
              />
            </div>

            {/* Department Filter Pills */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
              <button
                onClick={() => setSelectedDept('all')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedDept === 'all'
                    ? 'bg-[#0A5C36] text-white shadow-xs'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Faculty ({FACULTY_MEMBERS.length})
              </button>
              <button
                onClick={() => setSelectedDept('islamic')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedDept === 'islamic'
                    ? 'bg-[#0A5C36] text-white shadow-xs'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Islamic & Dars-e-Nizami
              </button>
              <button
                onClick={() => setSelectedDept('technology')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedDept === 'technology'
                    ? 'bg-[#0A5C36] text-white shadow-xs'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                IT & AI Tools
              </button>
              <button
                onClick={() => setSelectedDept('language')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedDept === 'language'
                    ? 'bg-[#0A5C36] text-white shadow-xs'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                English & Communication
              </button>
              <button
                onClick={() => setSelectedDept('vocational')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedDept === 'vocational'
                    ? 'bg-[#0A5C36] text-white shadow-xs'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Vocational & Arts
              </button>
            </div>
          </div>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredFaculty.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header card banner */}
                <div className={`p-5 bg-gradient-to-r ${member.avatarBg} text-white relative`}>
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-xs flex-shrink-0">
                      {renderIcon(member.avatarIcon)}
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-white/20 text-white">
                      {member.department === 'leadership' && 'Leadership'}
                      {member.department === 'islamic' && 'Dars-e-Nizami'}
                      {member.department === 'technology' && 'IT & AI'}
                      {member.department === 'language' && 'Languages'}
                      {member.department === 'vocational' && 'Vocational Skills'}
                    </span>
                  </div>

                  <div className="mt-3">
                    <h4 className="text-lg font-bold text-white tracking-tight">
                      {member.nameEn}
                    </h4>
                    <div className="font-urdu text-sm text-amber-200 font-semibold mt-0.5">
                      {member.nameUrdu}
                    </div>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 space-y-4">
                  {/* Designation & Qualifications */}
                  <div>
                    <div className="text-xs font-bold text-[#0A5C36] font-sans-en">
                      {member.designationEn}
                    </div>
                    <div className="font-urdu text-xs text-gray-600 mt-0.5">
                      {member.designationUrdu}
                    </div>
                    <div className="text-[11px] text-gray-500 font-medium mt-1 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
                      <span>{member.qualificationEn}</span>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-xs text-gray-600 leading-relaxed font-sans-en">
                    {member.bioEn}
                  </p>

                  {/* Subjects / Specialization tags */}
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">
                      Key Teaching Areas & Specializations
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {member.subjectsEn.map((subj, idx) => (
                        <span
                          key={idx}
                          className="bg-emerald-50 text-[#0A5C36] border border-emerald-100 text-[11px] font-medium px-2 py-0.5 rounded-md"
                        >
                          {subj}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer with experience & status */}
              <div className="p-4 bg-gray-50/70 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
                <span className="font-medium text-emerald-800 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0A5C36]" />
                  <span>{member.experienceEn}</span>
                </span>
                <span className="text-[10px] text-gray-400 font-urdu font-medium">
                  {member.experienceUrdu}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Institutional Faculty Standards & Philosophy Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-emerald-100 shadow-sm mb-16 relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
              Faculty Pillars & Pedagogical Ethics
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-1 mb-2">
              Why Our Faculty Is Distinctive
            </h3>
            <p className="font-urdu text-sm sm:text-base text-[#0A5C36] font-semibold">
              اساتذہ کے تدریسی اصول اور جامعہ کی روایات
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-emerald-50/50 rounded-2xl p-5 border border-emerald-100">
              <div className="w-10 h-10 rounded-xl bg-white text-[#0A5C36] flex items-center justify-center mb-3 shadow-xs border border-emerald-200">
                <ShieldCheck className="w-5 h-5 text-[#0A5C36]" />
              </div>
              <h4 className="text-sm font-bold text-gray-900 mb-1">Authentic Traditional Piety</h4>
              <p className="text-xs text-gray-600 leading-relaxed font-sans-en">
                Classical Dars-e-Nizami instructors carry authentic Sanads and HEC recognized degrees, ensuring traditional purity in Hadith, Fiqh, and Arabic grammar.
              </p>
              <div className="font-urdu text-xs text-[#0A5C36] mt-2 font-medium">
                مستند اسناد اور روایتی علومِ دینیہ میں پختگی۔
              </div>
            </div>

            <div className="bg-amber-50/50 rounded-2xl p-5 border border-amber-100">
              <div className="w-10 h-10 rounded-xl bg-white text-[#D4AF37] flex items-center justify-center mb-3 shadow-xs border border-amber-200">
                <BrainCircuit className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <h4 className="text-sm font-bold text-gray-900 mb-1">Psychological Empathy</h4>
              <p className="text-xs text-gray-600 leading-relaxed font-sans-en">
                Every teacher is trained under Sir Muhammad Hammad Qadri's psychological guidelines to mentor without harshness, boosting confidence and curiosity.
              </p>
              <div className="font-urdu text-xs text-[#D4AF37] mt-2 font-medium">
                شفقت، حوصلہ افزائی اور دوستانہ تعلیمی ماحول۔
              </div>
            </div>

            <div className="bg-blue-50/50 rounded-2xl p-5 border border-blue-100">
              <div className="w-10 h-10 rounded-xl bg-white text-blue-700 flex items-center justify-center mb-3 shadow-xs border border-blue-200">
                <Code className="w-5 h-5 text-blue-700" />
              </div>
              <h4 className="text-sm font-bold text-gray-900 mb-1">Practical 21st-Century Skills</h4>
              <p className="text-xs text-gray-600 leading-relaxed font-sans-en">
                Our technology and vocational trainers possess real market experience, enabling graduates to secure internships, jobs, or run home enterprises.
              </p>
              <div className="font-urdu text-xs text-blue-800 mt-2 font-medium">
                مارکیٹ کی طلب کے مطابق عملی مہارتیں اور خود روزگار۔
              </div>
            </div>
          </div>
        </div>

        {/* Action Banner */}
        <div className="bg-gradient-to-r from-[#0A5C36] to-[#0F5257] text-white rounded-2xl p-6 sm:p-8 shadow-md border border-[#D4AF37]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs text-amber-300 font-semibold uppercase tracking-wider">
              <HeartHandshake className="w-4 h-4" /> Free Admission Open Now
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-white">
              Study Under Our Esteemed Faculty – 100% Free
            </h4>
            <p className="text-xs sm:text-sm text-emerald-100/90 font-urdu">
              کسی قسم کی داخلہ یا ماہانہ فیس نہیں ہے۔ آج ہی آن لائن فارم پر کریں۔
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
              <span>Contact Admissions Office</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
