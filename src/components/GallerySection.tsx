import React, { useState } from 'react';
import {
  Camera,
  ZoomIn,
  Download,
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
  CheckCircle2,
  ExternalLink,
  Eye,
  Sparkles,
  Building
} from 'lucide-react';
import { INSTITUTION_INFO } from '../data/courses';

export interface GalleryItem {
  id: string;
  url: string;
  fallbackUrl?: string;
  titleEn: string;
  titleUrdu: string;
}

export const galleryImages: GalleryItem[] = [
  {
    id: '1',
    url: 'https://i.postimg.cc/L6bqLNnd/center1.png',
    fallbackUrl: '/gallery/center1.png',
    titleEn: 'Main Building Elevation – Education Center',
    titleUrdu: 'مرکزی عمارت - ایجوکیشن سینٹر',
  },
  {
    id: '2',
    url: 'https://i.postimg.cc/W42P3PT6/center2.png',
    fallbackUrl: '/gallery/center2.png',
    titleEn: 'Academic Corridor & Admissions Guidance',
    titleUrdu: 'مرکزی تعلیمی راہداری و داخلہ سینٹر',
  },
  {
    id: '3',
    url: 'https://i.postimg.cc/85cQRBFs/center3.png',
    fallbackUrl: '/gallery/center3.png',
    titleEn: 'Classroom Corridor & Campus Facilities',
    titleUrdu: 'کلاس رومز کا راستہ و تعلیمی ماحول',
  },
  {
    id: '4',
    url: 'https://i.postimg.cc/NMnhp9T4/center3rdfloor.png',
    fallbackUrl: '/gallery/center3rdfloor.png',
    titleEn: 'Upper Floor Corridor & Stairs',
    titleUrdu: 'اوپری منزل اور سیڑھیاں',
  },
  {
    id: '5',
    url: 'https://i.postimg.cc/PJvgcXzS/center4.png',
    fallbackUrl: '/gallery/center4.png',
    titleEn: 'Main Hallway & Surveillance Corridor',
    titleUrdu: 'مین ہال و سی سی ٹی وی نگرانی',
  },
  {
    id: '6',
    url: 'https://i.postimg.cc/DyLZ4nkB/center5.png',
    fallbackUrl: '/gallery/center5.png',
    titleEn: 'Campus Notice Board & Library Section',
    titleUrdu: 'نوٹس بورڈ و کتب خانہ',
  },
  {
    id: '7',
    url: 'https://i.postimg.cc/VNLLhtSg/center6.jpg',
    fallbackUrl: '/gallery/center6.jpg',
    titleEn: 'Smart Classroom & Learning Environment',
    titleUrdu: 'سمارٹ کلاس روم و تدریسی ہال',
  },
  {
    id: '8',
    url: 'https://i.postimg.cc/HxrWYC94/center7.png',
    fallbackUrl: '/gallery/center7.png',
    titleEn: 'Main Hallway & Classroom Access',
    titleUrdu: 'داخلی راہداری و تدریسی راستے',
  },
  {
    id: '9',
    url: 'https://i.postimg.cc/d1gsDSWs/center8CC.png',
    fallbackUrl: '/gallery/center8CC.png',
    titleEn: 'Computer Lab Facility & Practical Workstations',
    titleUrdu: 'کمپیوٹر لیب و پریکٹیکل ٹریننگ روم',
  },
  {
    id: '10',
    url: 'https://i.postimg.cc/pVnV3Rdw/center9.png',
    fallbackUrl: '/gallery/center9.png',
    titleEn: 'Multi-purpose Seminar Room & Hall',
    titleUrdu: 'سیمینار روم و فکری نشست گاہ',
  },
  {
    id: '11',
    url: 'https://i.postimg.cc/MK76K5VD/center10.png',
    fallbackUrl: '/gallery/center10.png',
    titleEn: 'Security and CCTV Monitoring',
    titleUrdu: 'سیکیورٹی و سی سی ٹی وی مانیٹرنگ',
  },
  {
    id: '12',
    url: 'https://i.postimg.cc/fRvYvsd2/center11.png',
    fallbackUrl: '/gallery/center11.png',
    titleEn: 'Rooftop Solar System',
    titleUrdu: 'روف ٹاپ سولر سسٹم و شمسی توانائی',
  },
];

export const GallerySection: React.FC = () => {
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const activeImage = activeModalIndex !== null ? galleryImages[activeModalIndex] : null;

  const handlePrev = () => {
    if (activeModalIndex !== null) {
      setActiveModalIndex((prev) => (prev! > 0 ? prev! - 1 : galleryImages.length - 1));
    }
  };

  const handleNext = () => {
    if (activeModalIndex !== null) {
      setActiveModalIndex((prev) => (prev! < galleryImages.length - 1 ? prev! + 1 : 0));
    }
  };

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="bg-[#F8F9FA] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/90 text-[#0A5C36] font-bold text-xs sm:text-sm border border-emerald-300 shadow-2xs mb-3">
            <Camera className="w-4 h-4 text-[#D4AF37]" />
            <span>تصویری گیلری و کیمپس جھلکیاں</span>
            <span className="text-emerald-400">|</span>
            <span>Campus Photo Gallery</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A5C36] font-urdu leading-relaxed">
            کیمپس کی تصویری جھلکیاں
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-700 font-sans-en">
            Official photograph of Education Center / Jamia Rushd-ul-Eman campus building on Mansoor Road, Gujranwala.
          </p>
        </div>

        {/* Gallery Showcase Grid */}
        <div className={`grid gap-6 sm:gap-8 mb-16 ${galleryImages.length === 1 ? 'max-w-2xl mx-auto' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}>
          {galleryImages.map((image, idx) => {
            const hasError = failedImages[image.id];
            const itemNumber = String(idx + 1).padStart(2, '0');

            return (
              <div
                key={image.id}
                onClick={() => setActiveModalIndex(idx)}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer hover:border-emerald-400 hover:-translate-y-1"
              >
                {/* Image Viewport */}
                <div className="relative aspect-4/3 bg-zinc-900 overflow-hidden">
                  {!hasError ? (
                    <img
                      src={image.url}
                      alt={image.titleEn}
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (image.fallbackUrl && !target.src.includes(image.fallbackUrl)) {
                          target.src = image.fallbackUrl;
                        } else {
                          handleImageError(image.id);
                        }
                      }}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    /* Seamless Fallback */
                    <div className="w-full h-full bg-gradient-to-br from-emerald-900 via-emerald-800 to-zinc-900 flex flex-col items-center justify-center p-6 text-white text-center">
                      <Building className="w-10 h-10 text-amber-300 mb-2 opacity-80" />
                      <span className="font-urdu text-lg font-bold text-amber-200">{image.titleUrdu}</span>
                      <span className="text-xs text-emerald-100 font-sans-en mt-1">{image.titleEn}</span>
                      <span className="text-[10px] text-emerald-300/80 mt-2 bg-white/10 px-2 py-0.5 rounded">Campus Image</span>
                    </div>
                  )}

                  {/* Top Left Number Badge */}
                  <div className="absolute top-3.5 left-3.5 bg-black/60 backdrop-blur-md text-amber-300 text-xs font-bold px-2.5 py-1 rounded-lg border border-white/20 flex items-center gap-1 shadow-xs">
                    <Sparkles className="w-3 h-3 text-amber-300" />
                    <span>#{itemNumber}</span>
                  </div>

                  {/* Hover Overlay with Eye / Zoom Icon */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 text-white backdrop-blur-2xs">
                    <span className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-bold border border-white/40">
                      <ZoomIn className="w-4 h-4 text-amber-300" />
                      <span>View Photo / بڑی تصویر دیکھیں</span>
                    </span>
                  </div>
                </div>

                {/* Card Information */}
                <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 space-y-2 bg-white">
                  <div>
                    <h3 className="font-urdu text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-[#0A5C36] transition-colors leading-snug">
                      {image.titleUrdu}
                    </h3>
                    <h4 className="font-sans-en text-xs sm:text-sm font-semibold text-emerald-800 mt-1">
                      {image.titleEn}
                    </h4>
                  </div>

                  {/* Card Bottom Row */}
                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                    <span className="text-[11px] bg-emerald-50 text-emerald-700 font-medium px-2 py-0.5 rounded-md">
                      Official Campus Photo
                    </span>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveModalIndex(idx);
                      }}
                      className="inline-flex items-center gap-1 text-[#0A5C36] font-bold hover:underline"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Open Preview</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Campus Visit & In-Person Experience Box */}
        <div className="bg-gradient-to-br from-[#0A5C36] to-[#0F5257] text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-emerald-700/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 font-bold text-xs border border-amber-300/30">
                <MapPin className="w-3.5 h-3.5" />
                <span>کیمپس کا دورہ فرمائیں</span>
              </div>
              <h3 className="font-urdu text-2xl sm:text-3xl font-bold leading-tight text-white">
                ایجوکیشن سینٹر / جامعہ رشد الایمان تشریف لائیں
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed font-sans-en">
                Parents, prospective scholars, and visitors are warmly invited to visit our campus during official admission hours. Inspect our classrooms, computer lab, and library facilities firsthand.
              </p>
              <div className="flex flex-wrap gap-3 pt-2 text-xs">
                <div className="bg-white/10 px-3.5 py-2 rounded-xl border border-white/10 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-300" />
                  <span>Mansoor Road, Arsal Colony, Gujranwala</span>
                </div>
                <div className="bg-white/10 px-3.5 py-2 rounded-xl border border-white/10 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                  <span>Visiting Hours: 8:30 AM - 5:00 PM</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white/10 backdrop-blur-xs p-6 rounded-2xl border border-white/20 text-center space-y-3">
              <Camera className="w-10 h-10 text-amber-300 mx-auto" />
              <h4 className="font-urdu text-lg font-bold text-white">شیڈول کیمپس وزٹ</h4>
              <p className="text-xs text-emerald-100">
                Contact our admissions coordinator to schedule a guided tour for yourself or your family.
              </p>
              <a
                href={INSTITUTION_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#c29f2f] text-[#0A5C36] font-bold py-2.5 rounded-xl text-xs shadow-md transition-colors"
              >
                <span>WhatsApp Admissions Office</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Fullscreen Interactive Lightbox Modal */}
      {activeImage && activeModalIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in">
          {/* Close Button */}
          <button
            onClick={() => setActiveModalIndex(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20 cursor-pointer"
            aria-label="Close photo preview"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Prev Button (if multiple images) */}
          {galleryImages.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors z-20 cursor-pointer"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors z-20 cursor-pointer"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>
            </>
          )}

          {/* Modal Content Box */}
          <div className="max-w-4xl w-full max-h-[92vh] flex flex-col bg-zinc-950 rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl relative">
            
            {/* Image Viewport */}
            <div className="relative flex-1 bg-black flex items-center justify-center min-h-[350px] max-h-[65vh] overflow-hidden">
              <img
                src={activeImage.url}
                alt={activeImage.titleEn}
                onError={(e) => {
                  const target = e.currentTarget;
                  if (activeImage.fallbackUrl && !target.src.includes(activeImage.fallbackUrl)) {
                    target.src = activeImage.fallbackUrl;
                  }
                }}
                referrerPolicy="no-referrer"
                className="max-h-[62vh] max-w-full object-contain mx-auto"
              />
            </div>

            {/* Captions and Details Bottom Bar */}
            <div className="p-5 sm:p-6 bg-zinc-900 text-white space-y-2 border-t border-zinc-800">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-bold text-amber-300 bg-amber-400/10 px-2.5 py-1 rounded-md border border-amber-400/20">
                  Campus Photo #{activeModalIndex + 1} of {galleryImages.length}
                </span>
                <span className="text-xs text-zinc-400">
                  Education Center, Gujranwala
                </span>
              </div>

              <h3 className="font-urdu text-xl sm:text-2xl font-bold text-amber-200">
                {activeImage.titleUrdu}
              </h3>
              <h4 className="font-sans-en text-sm font-semibold text-zinc-200">
                {activeImage.titleEn}
              </h4>

              <div className="pt-2 flex items-center justify-between gap-3">
                <span className="text-xs text-zinc-400 font-sans-en">
                  Direct URL: {activeImage.url}
                </span>

                <a
                  href={activeImage.url}
                  download="center1.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-amber-300 hover:text-amber-200 bg-white/10 px-3 py-1.5 rounded-lg border border-white/20 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Photo</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
