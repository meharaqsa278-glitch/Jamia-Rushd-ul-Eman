import React, { useState } from 'react';
import {
  BookOpen,
  Search,
  Download,
  Eye,
  FileText,
  Bookmark,
  Sparkles,
  Layers,
  GraduationCap,
  Clock,
  CheckCircle2,
  X,
  ExternalLink,
  BookMarked,
  Brain,
  ScrollText,
  Compass
} from 'lucide-react';
import { INSTITUTION_INFO } from '../data/courses';

export type LibraryCategory = 'all' | 'nisabi' | 'tafseer' | 'hadees' | 'research' | 'nafsiyat';

export interface BookItem {
  id: string;
  titleUrdu: string;
  titleEn: string;
  author: string;
  category: LibraryCategory;
  categoryName: string;
  language: string;
  pages: number;
  year: string;
  summary: string;
  tags: string[];
  pdfAvailable: boolean;
  featured?: boolean;
}

const LIBRARY_BOOKS: BookItem[] = [
  // --- 1. NISABI KUTAB (نصابی کتب - Dars-e-Nizami Syllabi) ---
  {
    id: 'nisabi-1',
    titleUrdu: 'الہدایۃ فی شرح بدایۃ المبتدی',
    titleEn: 'Al-Hidayah (Fiqh al-Hanafi)',
    author: 'علامہ برہان الدین المرغینانی (رح)',
    category: 'nisabi',
    categoryName: 'نصابی کتب (Dars-e-Nizami)',
    language: 'عربی',
    pages: 1420,
    year: 'کلاسیکل نصاب',
    summary: 'فقہ حنفی کا جامع اور بین الاقوامی طور پر تسلیم شدہ درسی شاہکار۔ دورہ حدیث سے قبل فقہی استدلال اور فروعی مسائل کی بنیاد۔',
    tags: ['فقہ حنفی', 'درسِ نظامی', 'اعلیٰ تعلیم'],
    pdfAvailable: true,
    featured: true
  },
  {
    id: 'nisabi-2',
    titleUrdu: 'مختصر القدوری مع التوضیحات',
    titleEn: 'Mukhtasar al-Quduri',
    author: 'امام ابو الحسین احمد بن محمد القدوری (رح)',
    category: 'nisabi',
    categoryName: 'نصابی کتب (Dars-e-Nizami)',
    language: 'عربی + اردو',
    pages: 450,
    year: 'درجہ ثانیہ و ثالثہ',
    summary: 'عبادات، معاملات، حدود، اور نکاح و طلاق کے احکام پر حنفی فقہ کا بنیادی و مستند ترین نصابی متن۔',
    tags: ['قدوری', 'متن فقہ', 'درسی کتاب'],
    pdfAvailable: true
  },
  {
    id: 'nisabi-3',
    titleUrdu: 'اصول الشاشی فی اصول الفقہ',
    titleEn: 'Usul al-Shashi',
    author: 'نظام الدین الشاشی (رح)',
    category: 'nisabi',
    categoryName: 'نصابی کتب (Dars-e-Nizami)',
    language: 'عربی',
    pages: 280,
    year: 'درجہ رابعہ',
    summary: 'اصولِ فقہ کی تدریس کے لیے جامع رسالہ جس میں قرآنی نصوص، سنت، اجماع اور قیاس کے بنیادی قواعد سہل انداز میں مدون ہیں۔',
    tags: ['اصول فقہ', 'نصابی کتاب', 'شاشی'],
    pdfAvailable: true
  },
  {
    id: 'nisabi-4',
    titleUrdu: 'الکافیۃ فی علم النحو مع شرح ملا جامی',
    titleEn: 'Al-Kafiyah with Sharh Jami',
    author: 'علامہ ابن حاجب (رح) و علامہ عبد الرحمن جامی (رح)',
    category: 'nisabi',
    categoryName: 'نصابی کتب (Dars-e-Nizami)',
    language: 'عربی',
    pages: 360,
    year: 'درجہ ثالثہ',
    summary: 'عربی گرامر (نحو) کی معرکتہ الآراء درسی کتاب، جو عربی عبارات فہمی اور کلامی ساخت کے ادراک کے لیے ناگزیر ہے۔',
    tags: ['علم النحو', 'ملا جامی', 'عربی زبان'],
    pdfAvailable: true
  },

  // --- 2. TAFSEER (تفاسیر و علوم القرآن) ---
  {
    id: 'tafseer-1',
    titleUrdu: 'تفسیر القرآن العظیم (تفسیر ابن کثیر)',
    titleEn: 'Tafseer Ibn Kathir (Complete)',
    author: 'عماد الدین اسماعیل بن عمر بن کثیر القرشی (رح)',
    category: 'tafseer',
    categoryName: 'تفاسیر و علوم القرآن',
    language: 'عربی + اردو',
    pages: 2850,
    year: 'مستند مرجع',
    summary: 'تفسیر بالماثور کا سب سے مستند اور معتبر مرجع، جس میں قرآنی آیات کی تفسیر احادیثِ نبویہ اور آثارِ صحابہ سے کی گئی ہے۔',
    tags: ['تفسیر بالماثور', 'علوم القرآن', 'ابن کثیر'],
    pdfAvailable: true,
    featured: true
  },
  {
    id: 'tafseer-2',
    titleUrdu: 'تفسیر الجلالین مع حاشیۃ الصاوی',
    titleEn: 'Tafseer al-Jalalayn',
    author: 'جلال الدین المحلی و جلال الدین السیوطی (رحمہما اللہ)',
    category: 'tafseer',
    categoryName: 'تفاسیر و علوم القرآن',
    language: 'عربی',
    pages: 620,
    year: 'درجہ خامسہ نصاب',
    summary: 'ایجاز و اختصار کے ساتھ جامع ترین درسی تفسیر، جس میں قرآنی الفاظ کے معانی، اسبابِ نزول اور اعرابی پہلو سموئے گئے ہیں۔',
    tags: ['جلالین', 'درسی تفسیر', 'قرآن فہمی'],
    pdfAvailable: true
  },
  {
    id: 'tafseer-3',
    titleUrdu: 'معارف القرآن (مفصل اردو تفسیر)',
    titleEn: 'Ma\'ariful Quran (8 Volumes)',
    author: 'مفتی اعظم محمد شفیع عثمانی (رح)',
    category: 'tafseer',
    categoryName: 'تفاسیر و علوم القرآن',
    language: 'اردو',
    pages: 5800,
    year: 'معاصر اردو مرجع',
    summary: 'اردو زبان میں عصری اسلوب پر مبنی فہمِ قرآن کا عظیم ذخیرہ، جس میں جدید تمدنی سوالات اور احکامِ قرآنیہ کا تشفی بخش حل موجود ہے۔',
    tags: ['معارف القرآن', 'اردو تفسیر', 'عصری رہنمائی'],
    pdfAvailable: true
  },
  {
    id: 'tafseer-4',
    titleUrdu: 'الاتقان فی علوم القرآن',
    titleEn: 'Al-Itqan fi Ulum al-Quran',
    author: 'امام جلال الدین عبد الرحمن السیوطی (رح)',
    category: 'tafseer',
    categoryName: 'تفاسیر و علوم القرآن',
    language: 'عربی',
    pages: 940,
    year: 'اصولِ تفسیر',
    summary: 'قرآنی علوم، وحی، ناسخ و منسوخ، قراءات، اور اعجازِ قرآن پر اسلامی تاریخ کا سب سے جامع علمی دائرۃ المعارف۔',
    tags: ['علوم القرآن', 'اصول تفسیر', 'سیوطی'],
    pdfAvailable: true
  },

  // --- 3. HADEES (کتب حدیث و شروحات) ---
  {
    id: 'hadees-1',
    titleUrdu: 'الجامع المسند الصحیح (صحیح البخاری)',
    titleEn: 'Sahih al-Bukhari (Complete with Arabic & Urdu)',
    author: 'امام محمد بن اسماعیل البخاری (رح)',
    category: 'hadees',
    categoryName: 'کتب حدیث و شروحات',
    language: 'عربی + اردو',
    pages: 3200,
    year: 'اصح الکتب بعد کتاب اللہ',
    summary: 'قرآن مجید کے بعد روئے زمین پر سب سے صحیح ترین کتاب۔ عقائد، عبادات، سیرت، اخلاق اور احکام کا بے نظیر حدیثی مجموعہ۔',
    tags: ['صحیح بخاری', 'دورہ حدیث', 'صحاح ستہ'],
    pdfAvailable: true,
    featured: true
  },
  {
    id: 'hadees-2',
    titleUrdu: 'صحیح مسلم مع شروحاتِ معتبرہ',
    titleEn: 'Sahih Muslim with Key Annotations',
    author: 'امام مسلم بن الحجاج النیسابوری (رح)',
    category: 'hadees',
    categoryName: 'کتب حدیث و شروحات',
    language: 'عربی + اردو',
    pages: 2600,
    year: 'دورہ حدیث نصاب',
    summary: 'حسنِ ترتیب اور سند کے کمال کا شاہکار۔ احادیث کے اسانید اور متون کا ایسا مربوط ذخیرہ جس پر امت کا اجماع ہے۔',
    tags: ['صحیح مسلم', 'حدیث نبوی', 'دورہ حدیث'],
    pdfAvailable: true
  },
  {
    id: 'hadees-3',
    titleUrdu: 'جامع الترمذی (السنن للترمذی)',
    titleEn: 'Jami\' at-Tirmidhi (Sunan at-Tirmidhi)',
    author: 'امام ابو عیسیٰ محمد بن عیسیٰ الترمذی (رح)',
    category: 'hadees',
    categoryName: 'کتب حدیث و شروحات',
    language: 'عربی + اردو',
    pages: 1850,
    year: 'صحاح ستہ',
    summary: 'احادیث کے فقہی استدلال اور ائمہ اربعہ کے مذاہب کے تفصیلی حوالوں پر مشتمل انمول مجموعہ جس میں عللِ حدیث کا خاص اہتمام ہے۔',
    tags: ['ترمذی', 'فقہ الحدیث', 'سنن'],
    pdfAvailable: true
  },
  {
    id: 'hadees-4',
    titleUrdu: 'مشکاۃ المصابیح مع التحقیقات',
    titleEn: 'Mishkat al-Masabih',
    author: 'علامہ محمد بن عبد اللہ الخطیب التبریزی (رح)',
    category: 'hadees',
    categoryName: 'کتب حدیث و شروحات',
    language: 'عربی + اردو',
    pages: 1480,
    year: 'درجہ سابعہ نصاب',
    summary: 'صحاح ستہ اور دیگر معتبر کتبِ حدیث کا منتخب گلدستہ، جو دورہ حدیث سے قبل جامع مطالعہ کے لیے درسِ نظامی میں رائج ہے۔',
    tags: ['مشکوٰۃ', 'درسی حدیث', 'احادیث احکام'],
    pdfAvailable: true
  },

  // --- 4. RESEARCH ARTICLES (تحقیقی مقالات و جرائد) ---
  {
    id: 'res-1',
    titleUrdu: 'معاصر مالیاتی معاملات اور اسلامی بینکاری: ایک تحقیقی و فقہی جائزہ',
    titleEn: 'Contemporary Islamic Banking & Digital Finance Rulings',
    author: 'مجلسِ تحقیق جامعہ رشد الایمان',
    category: 'research',
    categoryName: 'تحقیقی مقالات و جرائد',
    language: 'اردو',
    pages: 68,
    year: '2026ء - اشاعتِ جدید',
    summary: 'ڈیجیٹل کرنسی، کرپٹو، آن لائن ٹریڈنگ، فاریکس، اور کریڈٹ کارڈ کے فقہی اصول و شرعی ضوابط پر تفصیلی تحقیقی مقالہ۔',
    tags: ['جدید معیشت', 'اسلامی مالیات', 'تحقیق 2026'],
    pdfAvailable: true,
    featured: true
  },
  {
    id: 'res-2',
    titleUrdu: 'درسِ نظامی اور جدید عصری علوم کا ادغام: ماڈل اور نتائج',
    titleEn: 'Integration of Traditional Dars-e-Nizami & Modern Sciences',
    author: 'سر محمد حماد قادری (چیئرمین)',
    category: 'research',
    categoryName: 'تحقیقی مقالات و جرائد',
    language: 'اردو + English',
    pages: 52,
    year: '2025ء',
    summary: 'جامعہ رشد الایمان کے 2 شفٹ ماڈل کے تحت دینی علوم اور آئی ٹی/سائنسی تعلیم کے امتزاج کا علمی و تعلیمی خاکہ۔',
    tags: ['تعلیمی تحقیق', 'درس نظامی', 'عصری امتزاج'],
    pdfAvailable: true
  },
  {
    id: 'res-3',
    titleUrdu: 'جدید جینیات اور اعضاء کی پیوند کاری کا شرعی حکم',
    titleEn: 'Bioethics & Organ Donation in Classical and Contemporary Fiqh',
    author: 'شعبہ اختصاص فی الفقہ الاسلامی',
    category: 'research',
    categoryName: 'تحقیقی مقالات و جرائد',
    language: 'اردو',
    pages: 84,
    year: '2025ء',
    summary: 'طبی اصولوں، برین ڈیڈ مریضوں کے احکام اور اعضاء کے عطیہ پر فقہاء کے آراء کا مستند تقابلی جائزہ۔',
    tags: ['طبی فقہ', 'جدید مسائل', 'علمی مقالہ'],
    pdfAvailable: true
  },

  // --- 5. NAFSIYATI ILM (نفسیاتی علوم و اسلامی نفسیات) ---
  {
    id: 'nafs-1',
    titleUrdu: 'مصالح الابدان والانفس (طبِ نفسی اور حفظانِ صحتِ نفس)',
    titleEn: 'Sustenance of the Soul (Masalih al-Abdan wal-Anfus)',
    author: 'ابو زید احمد بن سہل البلخی (متوفی 322ھ)',
    category: 'nafsiyat',
    categoryName: 'نفسیاتی علوم و اسلامی نفسیات',
    language: 'عربی + اردو ترجمی',
    pages: 290,
    year: 'کلاسیکل اسلامی نفسیات',
    summary: 'دنیا کی تاریخ میں نفسیاتی امراض، ڈپریشن، اضطراب (Anxiety)، اور فوبیاز پر لکھی گئی پہلی سائنسی و اسلامی طبی کتاب۔ مغربی دنیا میں اس کے اصولوں کا اعتراف۔',
    tags: ['ابو زید بلخی', 'اسلامی نفسیات', 'دماغی صحت'],
    pdfAvailable: true,
    featured: true
  },
  {
    id: 'nafs-2',
    titleUrdu: 'احیاء علوم الدین: کتاب عجائب القلب و ریاضۃ النفس',
    titleEn: 'The Mysteries of the Heart & Spiritual Psychology',
    author: 'حجۃ الاسلام امام ابو حامد الغزالی (رح)',
    category: 'nafsiyat',
    categoryName: 'نفسیاتی علوم و اسلامی نفسیات',
    language: 'اردو',
    pages: 420,
    year: 'علم النفس و تزکیہ',
    summary: 'انسانی شعور، وسوسوں، باطنی محرکات، اور غصہ و حسد جیسے نفسیاتی عوارض کے روحانی و عملی علاج کا بے مثال علمی و نفسیاتی تجزیہ۔',
    tags: ['امام غزالی', 'تزکیہ نفس', 'روحانی نفسیات'],
    pdfAvailable: true
  },
  {
    id: 'nafs-3',
    titleUrdu: 'مداواۃ النفوس و تہذیب الاخلاق',
    titleEn: 'Purification of Souls & Moral Psychology',
    author: 'ابن حزم الاندلسی (رح)',
    category: 'nafsiyat',
    categoryName: 'نفسیاتی علوم و اسلامی نفسیات',
    language: 'اردو',
    pages: 210,
    year: 'اندلسی شاہکار',
    summary: 'انسانی طبائع، خوف، تنہائی، تعلقات کی الجھنوں اور اندرونی سکون کی تلاش پر ابن حزم کا گہرا نفسیاتی مشاہدہ۔',
    tags: ['ابن حزم', 'علم الاخلاق', 'نفسیاتی علاج'],
    pdfAvailable: true
  },
  {
    id: 'nafs-4',
    titleUrdu: 'اسلامی نفسیات اور معاصر اسلوبِ تربیت',
    titleEn: 'Islamic Psychology & Contemporary Youth Mentorship',
    author: 'سر محمد حماد قادری (ماہر نفسیات و چیئرمین)',
    category: 'nafsiyat',
    categoryName: 'نفسیاتی علوم و اسلامی نفسیات',
    language: 'اردو',
    pages: 180,
    year: '2026ء - جدید رہنما',
    summary: 'طلبہ اور نوجوانوں میں اسکرین کا نشہ، ذہنی دباؤ، اور عدمِ ارتکاز کے خاتمے کے لیے قرآنی طریقِ علاج اور معاصر کاگنیٹو بیہیویئرل تھیراپی (CBT) کا عملی مینوئل۔',
    tags: ['نوجوانوں کی تربیت', 'ذہنی سکون', 'محمد حماد قادری'],
    pdfAvailable: true
  }
];

export const LibrarySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<LibraryCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeBookModal, setActiveBookModal] = useState<BookItem | null>(null);
  const [downloadSuccessMessage, setDownloadSuccessMessage] = useState<string | null>(null);

  // Filter books based on category and search query
  const filteredBooks = LIBRARY_BOOKS.filter((book) => {
    const matchesCategory = selectedCategory === 'all' || book.category === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      query === '' ||
      book.titleUrdu.toLowerCase().includes(query) ||
      book.titleEn.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query) ||
      book.summary.toLowerCase().includes(query) ||
      book.tags.some((tag) => tag.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  const handleDownload = (book: BookItem) => {
    setDownloadSuccessMessage(`Accessing resource: ${book.titleUrdu} (${book.titleEn}). Preparing digital archive copy...`);
    setTimeout(() => {
      setDownloadSuccessMessage(null);
    }, 4000);
  };

  return (
    <div className="bg-[#F8F9FA] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/80 text-[#0A5C36] font-bold text-xs sm:text-sm border border-emerald-300 shadow-2xs mb-3">
            <BookMarked className="w-4 h-4 text-[#D4AF37]" />
            <span>دار المطالعہ و مکتبہ جامعہ رشد الایمان</span>
            <span className="text-emerald-400">|</span>
            <span>Central Digital & Physical Library</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A5C36] font-urdu leading-relaxed">
            مکتبہ، نصابی کتب، تفاسیر، احادیث و نفسیاتی علوم
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-700 font-sans-en">
            Access thousands of classical Dars-e-Nizami textbooks, authentic Hadith and Quranic exegesis, peer-reviewed research papers, and Islamic psychological literature.
          </p>
        </div>

        {/* Global Notification */}
        {downloadSuccessMessage && (
          <div className="max-w-2xl mx-auto mb-6 p-4 bg-emerald-50 border border-emerald-300 rounded-xl text-emerald-900 text-xs sm:text-sm flex items-center justify-between shadow-sm animate-in fade-in">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <span>{downloadSuccessMessage}</span>
            </div>
            <button
              onClick={() => setDownloadSuccessMessage(null)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Search & Category Filter Section */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-200 mb-8 space-y-4">
          {/* Search input */}
          <div className="relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by book name, author, topic, or keyword (کتاب، مصنف یا موضوع تلاش کریں)..."
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0A5C36] focus:bg-white transition-all text-gray-800"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Categories Tab Pills (Requested by user) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 no-scrollbar">
            {[
              { id: 'all', labelEn: 'All Books', labelUrdu: 'تمام کتب', icon: Layers, count: LIBRARY_BOOKS.length },
              { id: 'nisabi', labelEn: 'Nisabi Kutab', labelUrdu: 'نصابی کتب', icon: GraduationCap, count: LIBRARY_BOOKS.filter(b => b.category === 'nisabi').length },
              { id: 'tafseer', labelEn: 'Tafseer', labelUrdu: 'تفاسیر و علوم القرآن', icon: BookOpen, count: LIBRARY_BOOKS.filter(b => b.category === 'tafseer').length },
              { id: 'hadees', labelEn: 'Hadees', labelUrdu: 'کتبِ حدیث و شروحات', icon: ScrollText, count: LIBRARY_BOOKS.filter(b => b.category === 'hadees').length },
              { id: 'research', labelEn: 'Research Articles', labelUrdu: 'تحقیقی مقالات و جرائد', icon: FileText, count: LIBRARY_BOOKS.filter(b => b.category === 'research').length },
              { id: 'nafsiyat', labelEn: 'Nafsiyati Ilm', labelUrdu: 'نفسیاتی علوم و اسلامی نفسیات', icon: Brain, count: LIBRARY_BOOKS.filter(b => b.category === 'nafsiyat').length },
            ].map((cat) => {
              const IconComp = cat.icon;
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id as LibraryCategory)}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#0A5C36] text-white shadow-md ring-1 ring-[#0A5C36]'
                      : 'bg-gray-100 hover:bg-emerald-50 text-gray-700 hover:text-[#0A5C36] border border-gray-200'
                  }`}
                >
                  <IconComp className={`w-4 h-4 ${isSelected ? 'text-[#D4AF37]' : 'text-[#0A5C36]'}`} />
                  <span>{cat.labelEn}</span>
                  <span className={`font-urdu text-[11px] ${isSelected ? 'text-amber-200' : 'text-gray-500'}`}>
                    ({cat.labelUrdu})
                  </span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-600'}`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6 px-1">
          <div className="text-xs text-gray-600">
            Showing <span className="font-bold text-[#0A5C36]">{filteredBooks.length}</span> resources in library
            {selectedCategory !== 'all' && <span> under selected category</span>}
          </div>
          <div className="text-xs text-gray-500 hidden sm:block font-urdu">
            تمام نصابی و تحقیقی کتب جامعہ کے رجسٹرڈ طلبہ کے لیے بلامعاوضہ دستیاب ہیں
          </div>
        </div>

        {/* Books Grid */}
        {filteredBooks.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-gray-200 max-w-lg mx-auto">
            <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-gray-700">No resources found</h3>
            <p className="text-xs text-gray-500 mt-1">
              Try adjusting your search terms or clearing category filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-[#0A5C36] text-white text-xs font-semibold rounded-lg hover:bg-emerald-800 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBooks.map((book) => {
              return (
                <div
                  key={book.id}
                  className="bg-white rounded-2xl p-5 border border-gray-200 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Category & Badge */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#0A5C36] bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                        {book.category === 'nisabi' && <GraduationCap className="w-3.5 h-3.5 text-emerald-700" />}
                        {book.category === 'tafseer' && <BookOpen className="w-3.5 h-3.5 text-emerald-700" />}
                        {book.category === 'hadees' && <ScrollText className="w-3.5 h-3.5 text-emerald-700" />}
                        {book.category === 'research' && <FileText className="w-3.5 h-3.5 text-emerald-700" />}
                        {book.category === 'nafsiyat' && <Brain className="w-3.5 h-3.5 text-purple-700" />}
                        <span>{book.categoryName}</span>
                      </span>

                      <span className="text-[10px] font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                        {book.language}
                      </span>
                    </div>

                    {/* Book Titles */}
                    <h3 className="font-urdu text-lg sm:text-xl font-bold text-gray-900 group-hover:text-[#0A5C36] transition-colors leading-snug">
                      {book.titleUrdu}
                    </h3>
                    <h4 className="font-sans-en text-xs font-semibold text-gray-600 mt-1">
                      {book.titleEn}
                    </h4>

                    {/* Author & Specs */}
                    <div className="mt-3 flex items-center gap-2 text-xs text-amber-800 bg-amber-50/70 p-2 rounded-lg border border-amber-200/60">
                      <Bookmark className="w-3.5 h-3.5 text-amber-700 flex-shrink-0" />
                      <span className="font-medium truncate">{book.author}</span>
                    </div>

                    {/* Summary */}
                    <p className="mt-3 text-xs text-gray-600 leading-relaxed line-clamp-3">
                      {book.summary}
                    </p>

                    {/* Tags */}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {book.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-[10px] bg-gray-50 text-gray-600 px-2 py-0.5 rounded border border-gray-100"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between gap-2 text-xs">
                    <span className="text-[11px] text-gray-500">
                      {book.pages} Pages • {book.year}
                    </span>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => setActiveBookModal(book)}
                        className="p-2 text-gray-600 hover:text-[#0A5C36] hover:bg-emerald-50 rounded-lg transition-colors cursor-pointer"
                        title="View details & table of contents"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDownload(book)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#0A5C36] hover:bg-emerald-800 text-white font-semibold rounded-lg shadow-2xs transition-colors cursor-pointer text-xs"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Read / PDF</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Physical Library & Research Lab Info Box */}
        <div className="mt-14 bg-gradient-to-br from-[#0A5C36] to-[#0F5257] text-white rounded-3xl p-6 sm:p-10 shadow-lg border border-emerald-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 font-bold text-xs border border-amber-300/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>شعبہ مطالعہ و تصنیف و تحقیق</span>
              </div>
              <h3 className="font-urdu text-xl sm:text-3xl font-bold leading-tight text-white">
                جامعہ کی مرکزی فزیکل لائبریری و ڈیجیٹل ریسرچ لیب
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed font-sans-en">
                In addition to our online catalog, the campus library houses over 15,000 physical volumes, classical manuscript facsimiles, quiet reading halls, high-speed academic research workstations, and borrowing facilities for registered scholars and students.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                  <div className="font-bold text-amber-300">1st Shift Library Hours:</div>
                  <div className="text-emerald-100 mt-0.5">8:30 AM - 2:00 PM</div>
                </div>
                <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                  <div className="font-bold text-amber-300">2nd Shift Library Hours:</div>
                  <div className="text-emerald-100 mt-0.5">2:00 PM - 5:00 PM</div>
                </div>
                <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                  <div className="font-bold text-amber-300">Scholars Night Hall:</div>
                  <div className="text-emerald-100 mt-0.5">Till 9:00 PM for Hostelites</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white/10 backdrop-blur-xs p-6 rounded-2xl border border-white/20 text-center space-y-3">
              <BookOpen className="w-10 h-10 text-amber-300 mx-auto" />
              <h4 className="font-urdu text-lg font-bold text-white">کتاب کی درخواست یا استعارہ</h4>
              <p className="text-xs text-emerald-100">
                For research paper requests, thesis references, or rare book reservations, contact our Chief Librarian.
              </p>
              <a
                href={INSTITUTION_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#c29f2f] text-[#0A5C36] font-bold py-2.5 rounded-xl text-xs shadow-md transition-colors"
              >
                <span>Request Book on WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Book Detail Modal */}
      {activeBookModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-gray-200 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveBookModal(null)}
              className="absolute top-5 right-5 p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold text-[#0A5C36] bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                {activeBookModal.categoryName}
              </span>
              <span className="text-xs text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md">
                Language: {activeBookModal.language}
              </span>
            </div>

            <h3 className="font-urdu text-2xl font-bold text-gray-900 leading-snug">
              {activeBookModal.titleUrdu}
            </h3>
            <h4 className="font-sans-en text-sm font-semibold text-gray-600 mt-1">
              {activeBookModal.titleEn}
            </h4>

            <div className="my-4 p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 space-y-1">
              <div><span className="font-bold">Author / تصنیف:</span> {activeBookModal.author}</div>
              <div><span className="font-bold">Total Pages / صفحات:</span> {activeBookModal.pages} pages</div>
              <div><span className="font-bold">Curriculum Level:</span> {activeBookModal.year}</div>
            </div>

            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              {activeBookModal.summary}
            </p>

            <div className="mt-4">
              <h5 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">Subject Topics & Keywords:</h5>
              <div className="flex flex-wrap gap-2">
                {activeBookModal.tags.map((tag, i) => (
                  <span key={i} className="text-xs bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded-lg border border-emerald-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200 flex items-center justify-end gap-3">
              <button
                onClick={() => setActiveBookModal(null)}
                className="px-4 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-100 rounded-xl transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  handleDownload(activeBookModal);
                  setActiveBookModal(null);
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0A5C36] hover:bg-emerald-800 text-white text-xs font-bold rounded-xl shadow-md transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Open Digital PDF / ڈاؤن لوڈ</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
