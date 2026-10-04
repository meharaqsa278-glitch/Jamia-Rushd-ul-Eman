import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { CoursesSection } from './components/CoursesSection';
import { FacultySection } from './components/FacultySection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { HikmaSection } from './components/HikmaSection';
import { InternationalRelations } from './components/InternationalRelations';
import { AdmissionForm } from './components/AdmissionForm';
import { ContactSection } from './components/ContactSection';
import { LibrarySection } from './components/LibrarySection';
import { DarulIftaSection } from './components/DarulIftaSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  // Active tab state: 'home' | 'about' | 'courses' | 'faculty' | 'facilities' | 'hikma' | 'international' | 'admission' | 'contact'
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedCourseForForm, setSelectedCourseForForm] = useState<string>(
    'Option A: 1st Shift (8:30 AM - 2:00 PM) - Dars-e-Nizami (عصری تعلیم کے ساتھ)'
  );

  // Strict Tab-Switching: updates active tab and smoothly scrolls to top
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Handler when user clicks "Select & Apply" on any course card
  const handleSelectCourse = (courseOptionValue: string) => {
    setSelectedCourseForForm(courseOptionValue);
    handleNavigate('admission');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA] text-[#1A202C] selection:bg-[#D4AF37]/30 selection:text-[#0A5C36]">
      {/* Sticky Header with glowing top announcement bar and 8 navigation tabs */}
      <Header activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Content Area - Strict Single-Tab View: Only the active tab is displayed */}
      <main className="flex-1">
        {/* 1. Home / Hero Tab */}
        <div
          id="section-home"
          style={{ display: activeSection === 'home' ? 'block' : 'none' }}
          className={activeSection === 'home' ? 'block animate-in fade-in duration-200' : 'hidden'}
        >
          <Hero
            onExploreCourses={() => handleNavigate('courses')}
            onApplyNow={() => handleNavigate('admission')}
            onNavigateTab={handleNavigate}
          />
        </div>

        {/* 2. About Us Tab */}
        <div
          id="section-about"
          style={{ display: activeSection === 'about' ? 'block' : 'none' }}
          className={activeSection === 'about' ? 'block animate-in fade-in duration-200' : 'hidden'}
        >
          <AboutSection />
        </div>

        {/* 3. Courses & Shifts Tab */}
        <div
          id="section-courses"
          style={{ display: activeSection === 'courses' ? 'block' : 'none' }}
          className={activeSection === 'courses' ? 'block animate-in fade-in duration-200' : 'hidden'}
        >
          <CoursesSection onSelectCourse={handleSelectCourse} />
        </div>

        {/* 4. Library Tab (Nisabi Kutab, Tafseer, Hadees, Research Articles, Nafsiyati Ilm) */}
        <div
          id="section-library"
          style={{ display: activeSection === 'library' ? 'block' : 'none' }}
          className={activeSection === 'library' ? 'block animate-in fade-in duration-200' : 'hidden'}
        >
          <LibrarySection />
        </div>

        {/* 5. Dar-ul-Ifta Tab (Fatwa Search, Categories & Online Istifta) */}
        <div
          id="section-darulifta"
          style={{ display: activeSection === 'darulifta' ? 'block' : 'none' }}
          className={activeSection === 'darulifta' ? 'block animate-in fade-in duration-200' : 'hidden'}
        >
          <DarulIftaSection />
        </div>

        {/* 6. Our Faculty Tab */}
        <div
          id="section-faculty"
          style={{ display: activeSection === 'faculty' ? 'block' : 'none' }}
          className={activeSection === 'faculty' ? 'block animate-in fade-in duration-200' : 'hidden'}
        >
          <FacultySection
            onApplyNow={() => handleNavigate('admission')}
            onExploreCourses={() => handleNavigate('courses')}
          />
        </div>

        {/* 5. Facilities Tab */}
        <div
          id="section-facilities"
          style={{ display: activeSection === 'facilities' ? 'block' : 'none' }}
          className={activeSection === 'facilities' ? 'block animate-in fade-in duration-200' : 'hidden'}
        >
          <FacilitiesSection
            onApplyNow={() => handleNavigate('admission')}
            onExploreCourses={() => handleNavigate('courses')}
          />
        </div>

        {/* 5. HIKMA Society Tab */}
        <div
          id="section-hikma"
          style={{ display: activeSection === 'hikma' ? 'block' : 'none' }}
          className={activeSection === 'hikma' ? 'block animate-in fade-in duration-200' : 'hidden'}
        >
          <HikmaSection
            onApplyNow={() => handleNavigate('admission')}
            onExploreCourses={() => handleNavigate('courses')}
          />
        </div>

        {/* 6. International Relations Tab */}
        <div
          id="section-international"
          style={{ display: activeSection === 'international' ? 'block' : 'none' }}
          className={activeSection === 'international' ? 'block animate-in fade-in duration-200' : 'hidden'}
        >
          <InternationalRelations
            onApplyNow={() => handleNavigate('admission')}
            onExploreCourses={() => handleNavigate('courses')}
          />
        </div>

        {/* 6. Online Admission Tab */}
        <div
          id="section-admission"
          style={{ display: activeSection === 'admission' ? 'block' : 'none' }}
          className={activeSection === 'admission' ? 'block animate-in fade-in duration-200' : 'hidden'}
        >
          <AdmissionForm selectedCourseFromProps={selectedCourseForForm} />
        </div>

        {/* 8. Contact & Location Tab */}
        <div
          id="section-contact"
          style={{ display: activeSection === 'contact' ? 'block' : 'none' }}
          className={activeSection === 'contact' ? 'block animate-in fade-in duration-200' : 'hidden'}
        >
          <ContactSection />
        </div>
      </main>

      {/* Footer with quick navigation tabs and campus information */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating WhatsApp Assistance Widget */}
      <FloatingWhatsApp />
    </div>
  );
}
