import React, { useState, useEffect } from 'react';
import { INSTITUTION_INFO } from '../data/courses';
import {
  GraduationCap,
  MapPin,
  Menu,
  X,
  Phone,
  ChevronRight,
  Megaphone,
} from 'lucide-react';
import { AnnouncementBanner } from './AnnouncementBanner';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bannerHidden, setBannerHidden] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Primary desktop navigation tabs
  const primaryNavItems = [
    { id: 'home', labelEn: 'Home', labelUrdu: 'صفحہ اول' },
    { id: 'about', labelEn: 'About Us', labelUrdu: 'ہمارے بارے میں' },
    { id: 'courses', labelEn: 'Courses & Shifts', labelUrdu: 'کورسز و شفٹس' },
    { id: 'library', labelEn: 'Library', labelUrdu: 'مکتبہ و کتب خانہ' },
    { id: 'darulifta', labelEn: 'Dar-ul-Ifta', labelUrdu: 'دار الافتاء' },
    { id: 'faculty', labelEn: 'Our Faculty', labelUrdu: 'عملہ' },
    { id: 'facilities', labelEn: 'Facilities', labelUrdu: 'سہولیات' },
    { id: 'hikma', labelEn: 'HIKMA Society', labelUrdu: 'حکمہ سوسائٹی' },
    { id: 'international', labelEn: 'International Relations', labelUrdu: 'بین الاقوامی تعلقات' },
    { id: 'admission', labelEn: 'Online Admission', labelUrdu: 'آن لائن داخلہ' },
  ];

  // Complete nav items for mobile drawer
  const allNavItems = [
    ...primaryNavItems,
    { id: 'contact', labelEn: 'Contact & Location', labelUrdu: 'رابطہ و پتہ' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Official Responsive Government/PTA-Style Announcement Banner with .hidden support */}
      <AnnouncementBanner
        hidden={bannerHidden}
        onClose={() => setBannerHidden(true)}
      />

      {/* Main Sticky Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100 py-2.5'
            : 'bg-white shadow-sm border-b border-gray-100 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 xl:gap-6">
          {/* Logo & Brand Identity */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 sm:gap-3 text-left group focus:outline-none flex-shrink-0 cursor-pointer"
            id="brand-logo-btn"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#0A5C36] to-[#0F5257] text-[#D4AF37] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform border border-[#D4AF37]/30 flex-shrink-0">
              <GraduationCap className="w-6 h-6 text-amber-300" />
            </div>
            <div className="flex flex-col justify-center">
              <div className="font-urdu text-base sm:text-lg lg:text-xl font-bold text-[#0A5C36] leading-snug whitespace-nowrap">
                {INSTITUTION_INFO.nameUrdu}
              </div>
              <div className="font-sans-en text-xs sm:text-xs font-semibold text-gray-700 tracking-tight leading-none mt-0.5 whitespace-nowrap">
                {INSTITUTION_INFO.nameEn}
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-0.5 xl:space-x-1">
            {primaryNavItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-1.5 xl:px-2 py-1 rounded-lg text-[10px] xl:text-[11px] font-medium transition-all duration-200 flex flex-col items-center leading-tight cursor-pointer ${
                    isActive
                      ? 'bg-[#0A5C36] text-white shadow-sm'
                      : 'text-gray-700 hover:text-[#0A5C36] hover:bg-emerald-50'
                  }`}
                >
                  <span className="font-sans-en font-semibold whitespace-nowrap">{item.labelEn}</span>
                  <span className={`font-urdu text-[9px] xl:text-[10px] leading-none mt-0.5 ${isActive ? 'text-amber-200' : 'text-gray-500'}`}>
                    {item.labelUrdu}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg text-gray-700 hover:text-[#0A5C36] hover:bg-gray-100 focus:outline-none cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Downward Sub-Bar for Contact & Location Tag */}
        <div className="bg-[#F0FDF4] border-t border-gray-100 py-1.5 px-4 sm:px-6 lg:px-8 text-xs text-gray-700 shadow-2xs">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              {/* The moved downward Contact and Location tag */}
              <button
                onClick={() => handleNavClick('contact')}
                id="downward-contact-tag-btn"
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  activeSection === 'contact'
                    ? 'bg-[#0A5C36] text-white shadow-xs'
                    : 'bg-white hover:bg-emerald-100/90 text-[#0A5C36] border border-emerald-300 shadow-2xs'
                }`}
              >
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="font-sans-en font-bold">Contact & Location</span>
                <span className="font-urdu text-[11px]">/ رابطہ و پتہ</span>
              </button>

              <span className="text-emerald-300 hidden sm:inline">|</span>
              <span className="text-gray-600 text-[11px] sm:text-xs hidden sm:inline-flex items-center gap-1">
                <span className="font-medium text-gray-700">Campus:</span> Mansoor Road, Arsal Colony, Gujranwala
              </span>

              {bannerHidden && (
                <button
                  type="button"
                  onClick={() => setBannerHidden(false)}
                  id="reopen-announcement-banner-btn"
                  className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300 transition-colors shadow-2xs animate-in fade-in cursor-pointer"
                  title="Show Notice Banner (Removes .hidden class)"
                >
                  <Megaphone className="w-3.5 h-3.5 text-amber-700" />
                  <span>Show Notice Banner</span>
                  <span className="font-urdu text-[10px]">/ نوٹیفکیشن</span>
                </button>
              )}
            </div>

            <div className="flex items-center gap-3 text-[11px] sm:text-xs">
              <span className="text-gray-500 hidden md:inline">
                1st Shift (8:30 AM - 2:00 PM) | 2nd Shift (2:00 PM - 5:00 PM)
              </span>
              <button
                onClick={() => handleNavClick('contact')}
                className="text-[#0A5C36] font-semibold hover:text-[#074026] flex items-center gap-1 hover:underline cursor-pointer"
              >
                <span>View Campus Map & Visiting Hours</span>
                <ChevronRight className="w-3 h-3 text-[#D4AF37]" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-4 pt-3 pb-5 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-2">
              {allNavItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    id={`mobile-nav-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors text-left cursor-pointer ${
                      isActive
                        ? 'bg-[#0A5C36] text-white'
                        : 'text-gray-800 hover:bg-emerald-50 hover:text-[#0A5C36]'
                    }`}
                  >
                    <span className="font-sans-en font-semibold">{item.labelEn}</span>
                    <span className={`font-urdu text-sm ${isActive ? 'text-amber-200' : 'text-gray-500'}`}>
                      {item.labelUrdu}
                    </span>
                  </button>
                );
              })}

              {/* Apply Now button moved under navigation links */}
              <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
                <button
                  onClick={() => handleNavClick('admission')}
                  id="header-apply-cta-btn"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#E5A93C] hover:from-[#c29f2f] hover:to-[#d4972e] text-[#0A5C36] font-bold py-2.5 rounded-lg shadow-sm text-sm border border-amber-300/40 cursor-pointer"
                >
                  <span>Apply Now</span>
                  <span className="font-urdu font-normal text-xs text-[#0A5C36]">/ آن لائن داخلہ</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <a
                  href={INSTITUTION_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-emerald-50 text-[#0A5C36] py-2.5 rounded-lg font-semibold text-xs border border-emerald-200"
                >
                  <Phone className="w-4 h-4 text-emerald-700" />
                  <span>Call/WhatsApp: {INSTITUTION_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
