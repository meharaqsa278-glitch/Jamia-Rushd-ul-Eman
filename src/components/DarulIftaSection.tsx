import React, { useState } from 'react';
import {
  FileText,
  Search,
  Send,
  CheckCircle2,
  HelpCircle,
  ShieldCheck,
  Scale,
  Calendar,
  User,
  Phone,
  BookOpen,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  Copy,
  Check,
  Printer,
  Sparkles,
  Layers,
  HeartHandshake
} from 'lucide-react';
import { INSTITUTION_INFO } from '../data/courses';

export type FatwaCategory = 'all' | 'ibadat' | 'muamalat' | 'family' | 'medical' | 'social';

export interface FatwaItem {
  id: string;
  fatwaNumber: string;
  titleUrdu: string;
  titleEn: string;
  category: FatwaCategory;
  categoryName: string;
  question: string;
  answer: string;
  arabicReference: string;
  mufti: string;
  date: string;
  tags: string[];
}

const VERIFIED_FATWAS: FatwaItem[] = [
  {
    id: 'fatwa-1',
    fatwaNumber: 'JRG-2026/084',
    titleUrdu: 'آن لائن ٹریڈنگ، فاریکس اور کرپٹو کرنسی کا شرعی حکم',
    titleEn: 'Islamic Ruling on Online Forex Trading & Cryptocurrency',
    category: 'muamalat',
    categoryName: 'معاملات و مالیات (Trade & Finance)',
    question: 'کیا فرماتے ہیں مفتیانِ کرام اس مسئلہ کے بارے میں کہ کیا انٹرنیٹ پر فاریکس ٹریڈنگ (Forex) یا مختلف ڈیجیٹل کوائنز کی خرید و فروخت جائز ہے؟ کیا اس میں بیع قبل القبض (قبضہ سے قبل فروخت) یا سود کا عنصر پایا جاتا ہے؟',
    answer: 'الجواب وباللہ التوفیق:\nمروجہ فاریکس ٹریڈنگ اور ڈیجیٹل کوائنز میں اگر حقیقتاً کرنسی یا جنس پر شرعی قبضہ (حسی یا حکمی قبضہ) واقع نہ ہو، بلکہ محض نفع و نقصان کا تخمینہ یا سٹہ بازی ہو، تو ایسی ٹریڈنگ شرعاً جائز نہیں۔ البتہ اگر کوئی ڈیجیٹل اثاثہ مالِ متقوم ہو، کسی دھوکہ یا سٹے پر مبنی نہ ہو اور شرعی قواعدِ بیع و قبضہ پورے کیے جائیں تو گنجائش نکل سکتی ہے۔ موجودہ روایتی فاریکس بروکریج ایپس میں بیع قبل القبض، لیوریج (سودی قرض) اور قمار کی آمیزش کی وجہ سے اس سے اجتناب لازم ہے۔',
    arabicReference: 'قال فی رد المحتار (الشامی): "وشرط المعقود علیہ ان یکون موجوداً مقدور التسلیم غیر منہی عنہ، والقبض شرط فی بیع الاموال الربویۃ والصرف."',
    mufti: 'مفتی محمد حماد قادری (چیئرمین مجلس الافتاء)',
    date: '15 فروری 2026ء',
    tags: ['آن لائن کاروبار', 'فاریکس', 'کرپٹو', 'تجارت']
  },
  {
    id: 'fatwa-2',
    fatwaNumber: 'JRG-2026/061',
    titleUrdu: 'روزے کی حالت میں شوگر ٹیسٹ، ڈرپ اور انسولین کا حکم',
    titleEn: 'Validity of Fasting with Insulin, Injections, and Blood Tests',
    category: 'medical',
    categoryName: 'جدید طبی مسائل (Modern Bioethics)',
    question: 'محترم مفتی صاحب! ایک شوگر کا مریض جو روزانہ انسولین کا انجکشن چمڑے کے نیچے لگاتا ہے اور دن میں گلوکو میٹر سے شوگر چیک کرتا ہے، کیا اس کا روزہ ٹوٹ جاتا ہے یا قضا لازم ہے؟',
    answer: 'الجواب وباللہ التوفیق:\nروزے کی حالت میں خون کا نمونہ لینے (شوگر ٹیسٹ) سے روزہ فاسد نہیں ہوتا کیونکہ جسم سے خون نکلنے سے روزہ نہیں ٹوٹتا۔ اسی طرح عضلاتی (Intramuscular) یا جلدی (Subcutaneous) انسولین کے ٹیکے سے بھی روزہ نہیں ٹوٹتا کیونکہ یہ دوا معدہ یا دماغ کے اصل منافذ (حلق یا جوف) تک نہیں پہنچتی۔ البتہ ایسی مقوی ڈرپ جو غذا کا بدل ہو بغیر شدید مجبوری کے لگانا مکروہ ہے۔',
    arabicReference: 'قال فی الفتاوی الہندیۃ: "وما دخل فی جلد الانسان من غیر المسالک المعتادۃ لا یفسد الصوم، لان المفطر ہو الداخل فی الجوف من منفذ معتاد."',
    mufti: 'مفتی عبید اللہ عثمانی (دار الافتاء جامعہ رشد الایمان)',
    date: '28 جنوری 2026ء',
    tags: ['روزہ', 'انسولین', 'انجکشن', 'طبی مسائل']
  },
  {
    id: 'fatwa-3',
    fatwaNumber: 'JRG-2026/042',
    titleUrdu: 'والدین کی حیات میں اولاد کے درمیان جائیداد کی تقسیم',
    titleEn: 'Distribution of Property Among Children During Parents\' Lifetime (Hiba)',
    category: 'family',
    categoryName: 'عائلی و خاندانی مسائل (Family & Inheritance)',
    question: 'ایک شخص اپنی زندگی میں اپنی جائیداد اپنے بیٹوں اور بیٹیوں میں تقسیم کرنا چاہتا ہے۔ کیا وہ شریعت کے وراثتی اصول (مرد کے لیے دوگنا) کے مطابق تقسیم کرے یا تمام بیٹوں اور بیٹیوں کو برابر حصہ دے؟',
    answer: 'الجواب وباللہ التوفیق:\nوالدین کی زندگی میں جائیداد کی تقسیم وراثت نہیں بلکہ "ہبہ" (تحفہ/Gift) کہلاتی ہے۔ زندگی میں اپنی اولاد کو تحفہ دیتے وقت شریعت کا مستحب و افضل حکم یہ ہے کہ بیٹوں اور بیٹیوں کے درمیان برابری رکھی جائے، جیسا کہ حدیثِ نعمان بن بشیر (رضی اللہ عنہ) میں صراحت ہے۔ البتہ اگر کوئی بیٹا یا بیٹی زیادہ محتاج، معذور، یا دین کی خدمت میں مصروف ہو تو بغیر دوسروں کو نقصان پہنچائے کچھ ترجیح دینے کی بھی گنجائش ہے۔ کسی شرعی وجہ کے بغیر بیٹیوں کو محروم کرنا سخت گناہ ہے۔',
    arabicReference: 'فی صحیح مسلم عن النعمان بن بشیر قال: قال رسول اللہ ﷺ: "فاتقوا اللہ، واعدلوا بین اولادکم."',
    mufti: 'مفتی محمد حماد قادری (چیئرمین دار الافتاء)',
    date: '10 جنوری 2026ء',
    tags: ['وراثت', 'ہبہ', 'جائیداد', 'خاندانی مسائل']
  },
  {
    id: 'fatwa-4',
    fatwaNumber: 'JRG-2026/019',
    titleUrdu: 'موبائل ایپ سے صدقہ و زکوٰۃ کی ادائیگی اور وکالت کا حکم',
    titleEn: 'Paying Zakat & Sadaqah through Mobile Wallets & Charities',
    category: 'ibadat',
    categoryName: 'عبادات و طہارت (Worship & Zakat)',
    question: 'کیا ایزی پیسہ، جاز کیش یا بینک ایپ سے کسی مستحق کو زکوٰۃ منتقل کرنے سے زکوٰۃ ادا ہو جاتی ہے؟ کیا اس میں کسی کو وکیل بنانا درست ہے؟',
    answer: 'الجواب وباللہ التوفیق:\nجی ہاں! موبائل والٹس یا آن لائن بینکنگ سے زکوٰۃ کی رقم براہِ راست کسی شرعی مستحق (مسکین یا فقیر) کے اکاؤنٹ میں منتقل کر دی جائے تو اس کی ملکیت میں آنے کی وجہ سے زکوٰۃ بلا شبہ ادا ہو جاتی ہے۔ اسی طرح کسی معتبر رفاہی ادارے یا وکیل کو زکوٰۃ کی ادائیگی کے لیے وکیل بنانا بھی شرعاً درست ہے، بشرطیکہ وہ ادارہ یا وکیل رقم کو حقیقی مستحقین تک بحقِ تملیک پہنچائے۔',
    arabicReference: 'فی الدر المختار: "ویشترط ان یکون الصرف تملیکاً لا اباحۃ، وتصح الوکالۃ فی اداء الزکاۃ."',
    mufti: 'مولانا مفتی عبد الرشید (سینئر مفتی)',
    date: '02 جنوری 2026ء',
    tags: ['زکوٰۃ', 'صدقات', 'ڈیجیٹل ادائیگیاں', 'عبادات']
  },
  {
    id: 'fatwa-5',
    fatwaNumber: 'JRG-2025/395',
    titleUrdu: 'سوشل میڈیا پر غیر اخلاقی کمنٹس، غیبت اور کاپی رائٹ کی خلاف ورزی',
    titleEn: 'Islamic Ethics on Social Media, Backbiting & Digital Copyrights',
    category: 'social',
    categoryName: 'اخلاقیات و متفرقات (Social & Contemporary Ethics)',
    question: 'سوشل میڈیا پر کسی کی نجی تصاویر یا گفتگو بغیر اجازت شیئر کرنا، یا کسی کے ڈیجیٹل کورس اور سافٹ ویئر کو بغیر فیس ادا کیے کریک کر کے استعمال کرنا شرعاً کیسا ہے؟',
    answer: 'الجواب وباللہ التوفیق:\nسوشل میڈیا پر بھی اسلامی اخلاقیات کے تمام اصول ویسے ہی نافذ ہوتے ہیں جیسے عام زندگی میں۔ کسی مسلمان کی پردہ دری کرنا، نجی پیغامات کو بغیر اجازت افشاء کرنا شرعاً غیبت اور تجسس میں داخل ہے جو کہ حرام ہے۔ اسی طرح معاصر کبار فقہاء اور اسلامی فقہ اکیڈمیز کی رو سے انٹلیکچوئل پراپرٹی (Intellectual Property / حقِ تالیف و ایجاد) شرعی حق ہے، لہٰذا کسی کے لائسنس یافتہ مواد یا سافٹ ویئر کو بغیر اجازت کریک کر کے استعمال کرنا حق تلفی کے زمرے میں آتا ہے۔',
    arabicReference: 'قال اللہ تعالی: ﴿يَا أَيُّهَا الَّذِينَ آمَنُوا اجْتَنِبُوا كَثِيرًا مِّنَ الظَّنِّ إِنَّ بَعْضَ الظَّنِّ إِثْمٌ وَلَا تَجَسَّسُوا وَلَا يَغْتَب بَّعْضُكُم بَعْضًا﴾ [الحجرات: 12]',
    mufti: 'مجلس الافتاء جامعہ رشد الایمان',
    date: '18 دسمبر 2025ء',
    tags: ['سوشل میڈیا', 'حقوق العباد', 'کاپی رائٹ', 'اخلاقیات']
  }
];

export const DarulIftaSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<FatwaCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFatwaId, setExpandedFatwaId] = useState<string | null>('fatwa-1');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Istifta Form State
  const [istiftaForm, setIstiftaForm] = useState({
    name: '',
    phone: '',
    email: '',
    category: 'عبادات و طہارت',
    isConfidential: true,
    questionText: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionTrackingCode, setSubmissionTrackingCode] = useState<string | null>(null);

  const filteredFatwas = VERIFIED_FATWAS.filter((fatwa) => {
    const matchesCategory = selectedCategory === 'all' || fatwa.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      q === '' ||
      fatwa.titleUrdu.toLowerCase().includes(q) ||
      fatwa.titleEn.toLowerCase().includes(q) ||
      fatwa.fatwaNumber.toLowerCase().includes(q) ||
      fatwa.question.toLowerCase().includes(q) ||
      fatwa.answer.toLowerCase().includes(q) ||
      fatwa.tags.some((tag) => tag.toLowerCase().includes(q));

    return matchesCategory && matchesSearch;
  });

  const handleCopyFatwa = (fatwa: FatwaItem) => {
    const text = `دار الافتاء جامعہ رشد الایمان گوجرانوالہ\n${fatwa.fatwaNumber}\nعنوان: ${fatwa.titleUrdu}\n\nسوال:\n${fatwa.question}\n\nالجواب وباللہ التوفیق:\n${fatwa.answer}\n\nتصدیق: ${fatwa.mufti}`;
    navigator.clipboard.writeText(text);
    setCopiedId(fatwa.id);
    setTimeout(() => setCopiedId(null), 3000);
  };

  const handleIstiftaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!istiftaForm.name || !istiftaForm.phone || !istiftaForm.questionText) {
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const randomCode = 'IST-' + Math.floor(10000 + Math.random() * 90000);
      setSubmissionTrackingCode(randomCode);
      setIsSubmitting(false);
      setIstiftaForm({
        name: '',
        phone: '',
        email: '',
        category: 'عبادات و طہارت',
        isConfidential: true,
        questionText: ''
      });
    }, 1200);
  };

  return (
    <div className="bg-[#F8F9FA] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/90 text-[#0A5C36] font-bold text-xs sm:text-sm border border-emerald-300 shadow-2xs mb-3">
            <Scale className="w-4 h-4 text-[#D4AF37]" />
            <span>مجلس الافتاء و دار القضاء الشرعی</span>
            <span className="text-emerald-400">|</span>
            <span>Dar-ul-Ifta Jamia Rushd-ul-Eman</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A5C36] font-urdu leading-relaxed">
            دار الافتاء: شرعی و فقہی رہنمائی و مستند فتاویٰ
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-700 font-sans-en">
            Dedicated department of Islamic jurisprudence providing authentic answers to contemporary personal, commercial, medical, and family queries in accordance with Quran, Sunnah, and classical Hanafi jurisprudence.
          </p>
        </div>

        {/* Mufti Board Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-2xs flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-emerald-50 text-[#0A5C36] flex items-center justify-center flex-shrink-0 border border-emerald-200">
              <ShieldCheck className="w-6 h-6 text-emerald-700" />
            </div>
            <div>
              <h4 className="font-urdu text-base font-bold text-gray-900 leading-tight">مستند مفتیانِ کرام کا پینل</h4>
              <p className="text-xs text-gray-500 font-sans-en mt-0.5">Certified Muftis from recognized Wifaqul Madaris</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-2xs flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-amber-50 text-[#D4AF37] flex items-center justify-center flex-shrink-0 border border-amber-200">
              <Scale className="w-6 h-6 text-amber-700" />
            </div>
            <div>
              <h4 className="font-urdu text-base font-bold text-gray-900 leading-tight">معاصر مالیاتی و جدید مسائل پر تحقیق</h4>
              <p className="text-xs text-gray-500 font-sans-en mt-0.5">Fintech, Crypto, E-Commerce & Bioethics rulings</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-2xs flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-emerald-50 text-[#0A5C36] flex items-center justify-center flex-shrink-0 border border-emerald-200">
              <Sparkles className="w-6 h-6 text-[#0A5C36]" />
            </div>
            <div>
              <h4 className="font-urdu text-base font-bold text-gray-900 leading-tight">24 تا 48 گھنٹوں میں آن لائن جواب</h4>
              <p className="text-xs text-gray-500 font-sans-en mt-0.5">Confidential online fatwa tracking system</p>
            </div>
          </div>
        </div>

        {/* Two-Column Layout: Left (Fatwa Archive) | Right (Submit Question Form) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Search & Fatwa Archive (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Search Box */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-xs border border-gray-200 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-urdu text-lg font-bold text-gray-900 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-[#0A5C36]" />
                  <span>فتاویٰ کا آن لائن ذخیرہ تلاش کریں</span>
                </h3>
                <span className="text-xs text-gray-500 font-sans-en">
                  Total: {VERIFIED_FATWAS.length} Verified
                </span>
              </div>

              <div className="relative">
                <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search fatwa by topic, keyword, or number (مثال: روزہ، کرپٹو، وراثت، زکوٰۃ)..."
                  className="w-full pl-12 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0A5C36] focus:bg-white transition-all text-gray-800"
                />
              </div>

              {/* Category Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 no-scrollbar">
                {[
                  { id: 'all', label: 'تمام فتاویٰ' },
                  { id: 'ibadat', label: 'عبادات و طہارت' },
                  { id: 'muamalat', label: 'معاملات و مالیات' },
                  { id: 'family', label: 'عائلی و خاندانی' },
                  { id: 'medical', label: 'جدید طبی' },
                  { id: 'social', label: 'معاشرت و اخلاق' },
                ].map((cat) => {
                  const isSelected = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id as FatwaCategory)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                        isSelected
                          ? 'bg-[#0A5C36] text-white shadow-xs'
                          : 'bg-gray-100 hover:bg-emerald-50 text-gray-700 hover:text-[#0A5C36]'
                      }`}
                    >
                      {cat.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Fatwas Accordion List */}
            <div className="space-y-4">
              {filteredFatwas.length === 0 ? (
                <div className="bg-white rounded-2xl p-8 text-center border border-gray-200">
                  <HelpCircle className="w-10 h-10 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm font-bold text-gray-700">اس موضوع پر فتاویٰ دستیاب نہیں</p>
                  <p className="text-xs text-gray-500 mt-1">آپ دائیں جانب موجود فارم کے ذریعے اپنا سوال براہِ راست مفتی صاحب کو ارسال کر سکتے ہیں۔</p>
                </div>
              ) : (
                filteredFatwas.map((fatwa) => {
                  const isExpanded = expandedFatwaId === fatwa.id;
                  return (
                    <div
                      key={fatwa.id}
                      className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-2xs transition-all hover:border-emerald-300"
                    >
                      {/* Fatwa Header / Click to expand */}
                      <button
                        onClick={() => setExpandedFatwaId(isExpanded ? null : fatwa.id)}
                        className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-3 cursor-pointer bg-white hover:bg-emerald-50/40 transition-colors"
                      >
                        <div className="space-y-1.5 flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap text-xs">
                            <span className="font-mono text-[11px] font-bold text-[#0A5C36] bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                              {fatwa.fatwaNumber}
                            </span>
                            <span className="text-[11px] text-gray-500">
                              {fatwa.categoryName}
                            </span>
                            <span className="text-gray-400">•</span>
                            <span className="text-[11px] text-gray-500">{fatwa.date}</span>
                          </div>

                          <h3 className="font-urdu text-lg sm:text-xl font-bold text-gray-900 leading-snug">
                            {fatwa.titleUrdu}
                          </h3>
                          <p className="font-sans-en text-xs text-gray-600 truncate">
                            {fatwa.titleEn}
                          </p>
                        </div>

                        <div className="p-1 text-gray-400 hover:text-gray-600 rounded-lg">
                          {isExpanded ? <ChevronUp className="w-5 h-5 text-[#0A5C36]" /> : <ChevronDown className="w-5 h-5" />}
                        </div>
                      </button>

                      {/* Expanded Fatwa Details */}
                      {isExpanded && (
                        <div className="px-4 sm:px-6 pb-5 pt-1 border-t border-gray-100 bg-[#FAFCFB] space-y-4 animate-in fade-in duration-150">
                          
                          {/* Question Section */}
                          <div className="bg-amber-50/60 p-4 rounded-xl border border-amber-200/70 text-amber-950">
                            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 uppercase tracking-wider mb-1">
                              <HelpCircle className="w-4 h-4 text-amber-700" />
                              <span className="font-urdu text-sm">الاستفتاء (سوال):</span>
                            </div>
                            <p className="font-urdu text-sm sm:text-base leading-relaxed text-gray-900 pr-2">
                              {fatwa.question}
                            </p>
                          </div>

                          {/* Answer Section */}
                          <div className="bg-white p-4 rounded-xl border border-emerald-200/80 shadow-2xs space-y-3">
                            <div className="flex items-center gap-1.5 text-xs font-bold text-[#0A5C36] uppercase tracking-wider">
                              <Scale className="w-4 h-4 text-[#D4AF37]" />
                              <span className="font-urdu text-sm">الجواب وباللہ التوفیق:</span>
                            </div>
                            <p className="font-urdu text-sm sm:text-base leading-relaxed text-gray-800 whitespace-pre-line pr-2">
                              {fatwa.answer}
                            </p>

                            {/* Classical Arabic Reference */}
                            {fatwa.arabicReference && (
                              <div className="mt-3 p-3 bg-gray-50 rounded-lg border-r-4 border-[#0A5C36] text-right font-serif text-xs sm:text-sm text-gray-700 leading-relaxed">
                                <span className="font-bold text-[#0A5C36] block mb-0.5">النص الفقہی المعتمد:</span>
                                {fatwa.arabicReference}
                              </div>
                            )}

                            {/* Mufti Signature & Verification Badge */}
                            <div className="pt-3 border-t border-gray-100 flex flex-wrap items-center justify-between gap-2 text-xs text-gray-600">
                              <div className="flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                                <span className="font-bold text-[#0A5C36]">{fatwa.mufti}</span>
                              </div>

                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => handleCopyFatwa(fatwa)}
                                  className="inline-flex items-center gap-1 px-2.5 py-1 text-xs text-gray-600 hover:text-[#0A5C36] hover:bg-emerald-50 rounded-md border border-gray-200 transition-colors cursor-pointer"
                                  title="Copy Fatwa Text"
                                >
                                  {copiedId === fatwa.id ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                                  <span>{copiedId === fatwa.id ? 'کاپی ہوگیا' : 'Copy'}</span>
                                </button>
                              </div>
                            </div>
                          </div>

                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>

          </div>

          {/* RIGHT COLUMN: Submit Online Istifta Form (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-md border border-emerald-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full blur-2xl -z-10" />

              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-9 h-9 rounded-xl bg-[#0A5C36] text-white flex items-center justify-center shadow-xs">
                  <Send className="w-4 h-4 text-amber-300" />
                </div>
                <div>
                  <h3 className="font-urdu text-xl font-bold text-gray-900 leading-tight">
                    آن لائن فتویٰ پوچھیں (استفتاء)
                  </h3>
                  <p className="font-sans-en text-xs text-gray-500">
                    Ask a Fatwa / Confidential Islamic Inquiry
                  </p>
                </div>
              </div>

              <p className="text-xs text-gray-600 mb-5 leading-relaxed font-sans-en">
                Submit your question directly to the Dar-ul-Ifta board. Your question will be reviewed by qualified Muftis and answered within 24 to 48 hours.
              </p>

              {/* Success Notification */}
              {submissionTrackingCode ? (
                <div className="p-5 bg-emerald-50 border border-emerald-300 rounded-2xl space-y-3 text-center animate-in zoom-in-95">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="font-urdu text-lg font-bold text-emerald-950">آپ کا سوال کامیابی سے موصول ہو گیا ہے!</h4>
                  <p className="text-xs text-emerald-800 leading-relaxed">
                    Your inquiry has been logged with the Mufti Council. Your confidential tracking code is:
                  </p>
                  <div className="font-mono text-base font-extrabold text-[#0A5C36] bg-white py-2 px-4 rounded-xl border border-emerald-300 inline-block shadow-2xs">
                    {submissionTrackingCode}
                  </div>
                  <p className="text-[11px] text-gray-500">
                    We will send the verified fatwa text via WhatsApp/Email within 24-48 hours.
                  </p>
                  <button
                    onClick={() => setSubmissionTrackingCode(null)}
                    className="w-full mt-2 py-2 bg-[#0A5C36] text-white text-xs font-bold rounded-xl hover:bg-emerald-800 transition-colors cursor-pointer"
                  >
                    نیا سوال ارسال کریں (Ask Another Question)
                  </button>
                </div>
              ) : (
                <form onSubmit={handleIstiftaSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Full Name (نام سائل) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={istiftaForm.name}
                      onChange={(e) => setIstiftaForm({ ...istiftaForm, name: e.target.value })}
                      placeholder="e.g. Muhammad Abdullah / محمد عبداللہ"
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0A5C36] focus:bg-white transition-all text-gray-800"
                    />
                  </div>

                  {/* Phone / WhatsApp */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      WhatsApp / Mobile No (فون یا واٹس ایپ نمبر) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={istiftaForm.phone}
                      onChange={(e) => setIstiftaForm({ ...istiftaForm, phone: e.target.value })}
                      placeholder="0300-1234567"
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0A5C36] focus:bg-white transition-all text-gray-800"
                    />
                  </div>

                  {/* Category Selection */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Subject Category (موضوع سوال)
                    </label>
                    <select
                      value={istiftaForm.category}
                      onChange={(e) => setIstiftaForm({ ...istiftaForm, category: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0A5C36] focus:bg-white transition-all text-gray-800"
                    >
                      <option value="عبادات و طہارت">عبادات و طہارت (Worship, Salah, Fasting, Zakat)</option>
                      <option value="معاملات و مالیات">معاملات و مالیات (Trade, Business, Cryptocurrency, Loans)</option>
                      <option value="عائلی و خاندانی مسائل">عائلی و خاندانی مسائل (Nikah, Talaq, Custody, Inheritance)</option>
                      <option value="جدید طبی مسائل">جدید طبی مسائل (Bioethics, Medicine, Surgery, Fasting)</option>
                      <option value="اخلاقیات و متفرقات">اخلاقیات و متفرقات (Social, Digital Media, Food)</option>
                    </select>
                  </div>

                  {/* Question Text */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Detailed Question (سوال کی مکمل تفصیل) <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={istiftaForm.questionText}
                      onChange={(e) => setIstiftaForm({ ...istiftaForm, questionText: e.target.value })}
                      placeholder="اپنا شرعی سوال مکمل تفصیل و وضاحت کے ساتھ یہاں تحریر فرمائیں..."
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0A5C36] focus:bg-white transition-all text-gray-800"
                    />
                  </div>

                  {/* Confidentiality Checkbox */}
                  <div className="flex items-center gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="confidential-check"
                      checked={istiftaForm.isConfidential}
                      onChange={(e) => setIstiftaForm({ ...istiftaForm, isConfidential: e.target.checked })}
                      className="rounded text-[#0A5C36] focus:ring-[#0A5C36] h-4 w-4"
                    />
                    <label htmlFor="confidential-check" className="text-xs text-gray-600 cursor-pointer">
                      Keep this question confidential (میرا نام یا شناخت خفیہ رکھی جائے)
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#0A5C36] hover:bg-emerald-800 text-white font-bold py-3 rounded-xl shadow-md transition-all cursor-pointer text-xs sm:text-sm"
                  >
                    {isSubmitting ? (
                      <span>ارسال ہو رہا ہے...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-amber-300" />
                        <span>سوال ارسال کریں (Submit Fatwa Request)</span>
                      </>
                    )}
                  </button>
                </form>
              )}

              {/* Direct Urgent Fatwa Contact */}
              <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between text-xs">
                <span className="text-gray-500">Urgent Inquiries:</span>
                <a
                  href={INSTITUTION_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#0A5C36] hover:underline flex items-center gap-1"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>WhatsApp: {INSTITUTION_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* In-Person Campus Timings for Written Fatwa */}
            <div className="bg-emerald-900 text-white p-6 rounded-3xl space-y-3 shadow-md">
              <h4 className="font-urdu text-lg font-bold text-amber-300 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-amber-300" />
                <span>دفتری و تحریری فتاویٰ کے اوقات</span>
              </h4>
              <p className="text-xs text-emerald-100 leading-relaxed font-sans-en">
                For complex inheritance divisions (تقسیمِ ترکہ) and official verified stamp certificates, visit Dar-ul-Ifta in person at our Gujranwala campus:
              </p>
              <div className="bg-white/10 p-3 rounded-xl text-xs space-y-1 text-emerald-50">
                <div><span className="font-bold text-amber-200">Days:</span> Monday to Saturday (پیر تا ہفتہ)</div>
                <div><span className="font-bold text-amber-200">Hours:</span> 9:00 AM - 1:30 PM & 2:30 PM - 4:30 PM</div>
                <div><span className="font-bold text-amber-200">Location:</span> Mansoor Road, Arsal Colony, Gujranwala</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
