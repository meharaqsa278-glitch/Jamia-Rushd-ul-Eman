import React, { useState } from 'react';
import { Megaphone, FileDown, ShieldCheck, Phone, X, Eye } from 'lucide-react';
import { INSTITUTION_INFO } from '../data/courses';

export interface AnnouncementBannerProps {
  /**
   * Set to true to hide the banner using the CSS class .hidden.
   * Toggle between false (visible) and true (hidden) whenever you have a new notice.
   */
  hidden?: boolean;
  /** Optional callback triggered when the user dismisses/hides the banner */
  onClose?: () => void;
  /** Custom badge text (defaults to 'Important Update') */
  badgeText?: string;
  badgeUrdu?: string;
  /** Notice title / headline */
  title?: string;
  /** Notice description text */
  message?: string;
  /** Optional Urdu text */
  urduMessage?: string;
  /** Link to downloadable PDF file */
  pdfUrl?: string;
  /** Default filename for downloaded file */
  pdfFilename?: string;
  /** Text for the download button */
  buttonText?: string;
  /** Allow users to close / hide the banner */
  dismissible?: boolean;
  /** Additional custom class names */
  className?: string;
}

export const AnnouncementBanner: React.FC<AnnouncementBannerProps> = ({
  hidden = false,
  onClose,
  badgeText = 'Important Update',
  badgeUrdu = 'اہم اطلاع',
  title = 'Official Admission Notice (Session 2026–27):',
  message = '100% Free Dars-e-Nizami & Modern Vocational Courses under Sir Muhammad Hammad Qadri (Psychologist).',
  urduMessage = 'جامعہ رشد الایمان میں سال 2026 کے لیے 100٪ مفت داخلوں کا نوٹیفکیشن جاری',
  pdfUrl = '/official-admission-notice.pdf',
  pdfFilename = 'Jamia-Rushd-ul-Eman-Official-Admission-Notice-2026.pdf',
  buttonText = 'Download Notice (PDF)',
  dismissible = true,
  className = '',
}) => {
  const [internalHidden, setInternalHidden] = useState<boolean>(false);

  // If externally hidden via prop or internally dismissed, apply .hidden class
  const isCurrentlyHidden = hidden || internalHidden;

  const handleDismiss = () => {
    setInternalHidden(true);
    if (onClose) {
      onClose();
    }
  };

  return (
    <aside
      id="announcement-banner"
      role="region"
      aria-label="Important Official Announcement"
      className={`announcement-banner-root transition-all duration-300 ${
        isCurrentlyHidden ? 'hidden' : 'block'
      } bg-gradient-to-r from-[#042413] via-[#0A5C36] to-[#06381e] text-white border-b-2 border-[#D4AF37] shadow-md relative z-50 ${className}`.trim()}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2 sm:py-2.5">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-2.5 lg:gap-4">
          
          {/* Left / Center Content: Badge & Brief Notice */}
          <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-2 sm:gap-3 flex-1 min-w-0">
            {/* 'Important Update' Badge with live beacon */}
            <div className="inline-flex items-center gap-1.5 bg-[#D4AF37] text-[#0A5C36] font-extrabold px-2.5 py-1 rounded-md text-[11px] sm:text-xs uppercase tracking-wider shadow-xs flex-shrink-0 animate-pulse">
              <Megaphone className="w-3.5 h-3.5 fill-[#0A5C36]" />
              <span>{badgeText}</span>
              {badgeUrdu && <span className="font-urdu text-[11px] font-bold">/ {badgeUrdu}</span>}
            </div>

            {/* Brief Official Text */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-2 gap-y-0.5 text-xs sm:text-sm text-emerald-50 leading-snug">
              {title && <span className="font-semibold text-white">{title}</span>}
              <span>{message}</span>
              {urduMessage && (
                <span className="font-urdu text-xs text-amber-200 font-medium hidden xl:inline">
                  {urduMessage}
                </span>
              )}
            </div>
          </div>

          {/* Right Action: Download Notice Button & Quick Helpline */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 flex-shrink-0 w-full sm:w-auto">
            {/* Downloadable PDF Button with standard download attribute */}
            <a
              id="announcement-pdf-download-btn"
              href={pdfUrl}
              download={pdfFilename}
              className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#c39f2f] active:bg-[#b08e28] text-[#0A5C36] font-bold px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs tracking-wide transition-all duration-200 shadow-md hover:shadow-lg border border-amber-300 transform active:scale-95 flex-shrink-0 w-full sm:w-auto text-center"
              title="Download Notice (PDF)"
            >
              <FileDown className="w-4 h-4 text-[#0A5C36]" />
              <span>{buttonText}</span>
              <span className="text-[10px] font-semibold bg-[#0A5C36]/15 px-1.5 py-0.5 rounded text-[#0A5C36] hidden sm:inline">
                PDF
              </span>
            </a>

            {/* Quick WhatsApp Link */}
            <a
              href={INSTITUTION_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 text-xs text-amber-300 hover:text-white font-medium transition-colors border-l border-emerald-700/70 pl-3 flex-shrink-0"
              title="Official Admissions WhatsApp Helpline"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Helpline: {INSTITUTION_INFO.phoneDisplay}</span>
            </a>

            {/* Official Verification Seal (desktop only) */}
            <div className="hidden 2xl:inline-flex items-center gap-1 text-[11px] text-emerald-200/90 pl-1 border-l border-emerald-700/60">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Official Release</span>
            </div>

            {/* Dismiss / Hide Button (Adds .hidden class) */}
            {dismissible && (
              <button
                type="button"
                onClick={handleDismiss}
                id="announcement-banner-close-btn"
                className="p-1 sm:p-1.5 text-emerald-200 hover:text-white hover:bg-emerald-800/60 rounded-md transition-colors border border-emerald-700/50 flex items-center justify-center flex-shrink-0"
                title="Hide announcement banner (adds .hidden class)"
                aria-label="Hide announcement"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

        </div>
      </div>
    </aside>
  );
};
