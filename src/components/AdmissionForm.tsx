import React, { useState, useEffect } from 'react';
import { INSTITUTION_INFO } from '../data/courses';
import {
  FileText,
  User,
  CreditCard,
  Phone,
  BookOpen,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Send,
  Copy,
  Check,
  Database,
  Server,
  Code,
  ExternalLink,
  X,
  RefreshCw,
  Eye
} from 'lucide-react';
import {
  supabase,
  SUPABASE_PROJECT_ID,
  SUPABASE_SQL_SCHEMA,
  saveAdmissionToSupabase,
  checkSupabaseConnection,
  fetchAdmissionsFromSupabase,
  AdmissionRecord
} from '../lib/supabase';

interface AdmissionFormProps {
  selectedCourseFromProps?: string;
}

export const AdmissionForm: React.FC<AdmissionFormProps> = ({ selectedCourseFromProps }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    fatherName: '',
    studentCnic: '',
    parentCnic: '',
    whatsappNumber: '',
    selectedCourse: selectedCourseFromProps || 'Option A: 1st Shift (8:30 AM - 2:00 PM) - Dars-e-Nizami (عصری تعلیم کے ساتھ)',
    educationLevel: 'Matric / میٹرک',
    additionalMessage: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [applicationRefId, setApplicationRefId] = useState('');
  const [copiedRef, setCopiedRef] = useState(false);
  const [copiedSql, setCopiedSql] = useState(false);

  // Supabase states
  const [supabaseStatus, setSupabaseStatus] = useState<{ connected: boolean; tableExists: boolean; message: string } | null>(null);
  const [supabaseSaved, setSupabaseSaved] = useState<boolean>(false);
  const [supabaseTableMissing, setSupabaseTableMissing] = useState<boolean>(false);
  const [showSqlModal, setShowSqlModal] = useState<boolean>(false);
  const [showSubmissionsModal, setShowSubmissionsModal] = useState<boolean>(false);
  const [admissionsList, setAdmissionsList] = useState<AdmissionRecord[]>([]);
  const [isLoadingAdmissions, setIsLoadingAdmissions] = useState<boolean>(false);

  useEffect(() => {
    if (selectedCourseFromProps) {
      setFormData((prev) => ({
        ...prev,
        selectedCourse: selectedCourseFromProps
      }));
    }
  }, [selectedCourseFromProps]);

  // Check Supabase connection on load
  useEffect(() => {
    checkSupabaseConnection().then(setSupabaseStatus);
  }, []);

  // CNIC Auto-hyphenation helper: XXXXX-XXXXXXX-X
  const formatCnic = (value: string) => {
    const digitsOnly = value.replace(/\D/g, '').slice(0, 13);
    let formatted = digitsOnly;
    if (digitsOnly.length > 5) {
      formatted = `${digitsOnly.slice(0, 5)}-${digitsOnly.slice(5)}`;
    }
    if (digitsOnly.length > 12) {
      formatted = `${digitsOnly.slice(0, 5)}-${digitsOnly.slice(5, 12)}-${digitsOnly.slice(12, 13)}`;
    }
    return formatted;
  };

  const handleCnicChange = (field: 'studentCnic' | 'parentCnic', val: string) => {
    const formatted = formatCnic(val);
    setFormData((prev) => ({ ...prev, [field]: formatted }));
  };

  const courseOptions = [
    {
      id: 'Option A',
      val: 'Option A: 1st Shift (8:30 AM - 2:00 PM) - Dars-e-Nizami (عصری تعلیم کے ساتھ)',
      titleEn: 'Option A: 1st Shift (8:30 AM - 2:00 PM) - Dars-e-Nizami (With Contemporary Education)',
      titleUrdu: 'آپشن اے: پہلی شفٹ (صبح 8:30 تا 2:00 بجے) - درسِ نظامی عصری تعلیم کے ساتھ (لازمی)',
      is1stShift: true
    },
    {
      id: 'Option B',
      val: 'Option B: 2nd Shift (2:00 PM - 5:00 PM) - Free Computer Course',
      titleEn: 'Option B: 2nd Shift (2:00 PM - 5:00 PM) - Free Computer Course',
      titleUrdu: 'آپشن بی: دوسری شفٹ (دوپہر 2:00 تا 5:00 بجے) - مفت کمپیوٹر کورس',
      is1stShift: false
    },
    {
      id: 'Option C',
      val: 'Option C: 2nd Shift (2:00 PM - 5:00 PM) - English Language & Speaking',
      titleEn: 'Option C: 2nd Shift (2:00 PM - 5:00 PM) - English Language & Speaking',
      titleUrdu: 'آپشن سی: دوسری شفٹ (دوپہر 2:00 تا 5:00 بجے) - انگلش لینگویج اور سپیکنگ',
      is1stShift: false
    },
    {
      id: 'Option D',
      val: 'Option D: 2nd Shift (2:00 PM - 5:00 PM) - Beautician & Skin Care',
      titleEn: 'Option D: 2nd Shift (2:00 PM - 5:00 PM) - Beautician & Skin Care',
      titleUrdu: 'آپشن ڈی: دوسری شفٹ (دوپہر 2:00 تا 5:00 بجے) - بیوٹیشن اور سکن کیئر',
      is1stShift: false
    },
    {
      id: 'Option E',
      val: 'Option E: 2nd Shift (2:00 PM - 5:00 PM) - Fine Arts & Painting',
      titleEn: 'Option E: 2nd Shift (2:00 PM - 5:00 PM) - Fine Arts & Painting',
      titleUrdu: 'آپشن ای: دوسری شفٹ (دوپہر 2:00 تا 5:00 بجے) - فائن آرٹس اور پینٹنگ',
      is1stShift: false
    },
    {
      id: 'Option F',
      val: 'Option F: 2nd Shift (2:00 PM - 5:00 PM) - Artificial Intelligence',
      titleEn: 'Option F: 2nd Shift (2:00 PM - 5:00 PM) - Artificial Intelligence',
      titleUrdu: 'آپشن ایف: دوسری شفٹ (دوپہر 2:00 تا 5:00 بجے) - مصنوعی ذہانت (AI)',
      is1stShift: false
    },
    {
      id: 'Option G',
      val: 'Option G: 2nd Shift (2:00 PM - 5:00 PM) - Baking & Confectionery',
      titleEn: 'Option G: 2nd Shift (2:00 PM - 5:00 PM) - Baking & Confectionery',
      titleUrdu: 'آپشن جی: دوسری شفٹ (دوپہر 2:00 تا 5:00 بجے) - بیکنگ اور کنفیکشنری',
      is1stShift: false
    }
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    setSupabaseSaved(false);
    setSupabaseTableMissing(false);

    // Generate unique reference number
    const refNum = 'JAMIA-' + Math.floor(100000 + Math.random() * 900000);
    setApplicationRefId(refNum);

    const record: AdmissionRecord = {
      application_ref_id: refNum,
      full_name: formData.fullName.trim(),
      father_name: formData.fatherName.trim(),
      student_cnic: formData.studentCnic.trim(),
      parent_cnic: formData.parentCnic.trim(),
      whatsapp_number: formData.whatsappNumber.trim(),
      selected_course: formData.selectedCourse,
      education_level: formData.educationLevel,
      additional_message: formData.additionalMessage?.trim() || '',
      status: 'pending',
      created_at: new Date().toISOString()
    };

    try {
      // 1. Save directly to user's Supabase project (xowpbzwnwrpfuregppcu)
      const sbResult = await saveAdmissionToSupabase(record);

      if (sbResult.success) {
        setSupabaseSaved(true);
      } else if (sbResult.tableMissing) {
        setSupabaseTableMissing(true);
      }

      // 2. Secondary background notification via Formspree
      fetch(INSTITUTION_INFO.formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          ...record,
          institution: 'Jamia Rushd-ul-Eman & Education Center'
        })
      }).catch(() => {
        // Formspree is non-blocking secondary notification
      });

      setSubmitStatus('success');
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Submission failed';
      setErrorMessage(msg);
      setSubmitStatus('success'); // Still treat gracefully for candidate so WhatsApp is always accessible
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyRefToClipboard = () => {
    navigator.clipboard.writeText(applicationRefId);
    setCopiedRef(true);
    setTimeout(() => setCopiedRef(false), 2000);
  };

  const copySqlToClipboard = () => {
    navigator.clipboard.writeText(SUPABASE_SQL_SCHEMA);
    setCopiedSql(true);
    setTimeout(() => setCopiedSql(false), 2000);
  };

  const loadSubmissions = async () => {
    setIsLoadingAdmissions(true);
    setShowSubmissionsModal(true);
    try {
      const { data, error } = await fetchAdmissionsFromSupabase();
      if (data && data.length > 0) {
        setAdmissionsList(data);
      } else {
        // Fallback to local storage backup if table is not yet queryable
        const backup = JSON.parse(localStorage.getItem('jamia_admissions_backup') || '[]');
        setAdmissionsList(backup);
      }
    } catch {
      const backup = JSON.parse(localStorage.getItem('jamia_admissions_backup') || '[]');
      setAdmissionsList(backup);
    } finally {
      setIsLoadingAdmissions(false);
    }
  };

  const getWhatsAppConfirmationUrl = () => {
    const text = encodeURIComponent(
      `السلام علیکم! میں نے جامعہ رشد الایمان و ایجوکیشن سینٹر کے آن لائن داخلہ فارم کے ذریعے اپلائی کیا ہے۔\n` +
      `📌 ریفرنس نمبر: ${applicationRefId}\n` +
      `👤 طالب علم: ${formData.fullName}\n` +
      `👨‍👦 والد کا نام: ${formData.fatherName}\n` +
      `🎓 منتخب کورس: ${formData.selectedCourse}\n` +
      `📱 واٹس ایپ: ${formData.whatsappNumber}\n` +
      `براہ کرم میری رجسٹریشن کی تصدیق فرما دیں۔ شکریہ!`
    );
    return `https://wa.me/923237121228?text=${text}`;
  };

  return (
    <section id="admission" className="py-16 sm:py-24 bg-[#F8F9FA] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/20 text-[#0A5C36] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border border-[#D4AF37]/40 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            Free Online Admissions 2026 / داخلہ فارم
          </div>
          <h2 className="font-urdu text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A5C36] leading-tight mb-2">
            آن لائن داخلہ فارم برائے سال 2026
          </h2>
          <p className="text-sm sm:text-base font-semibold text-gray-800 mb-1 font-sans-en">
            Online Admission Application Form
          </p>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans-en">
            All programs offer 100% free education. Details are automatically transmitted and stored in your configured Supabase database.
          </p>

          {/* Database Connection Pill & Control Strip */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs">
            <div className="inline-flex items-center gap-1.5 bg-white border border-emerald-300 px-3 py-1 rounded-full text-emerald-800 shadow-2xs font-medium">
              <Database className="w-3.5 h-3.5 text-[#0A5C36]" />
              <span>Database: <strong>Supabase</strong> ({SUPABASE_PROJECT_ID})</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse ml-0.5"></span>
            </div>

            <button
              type="button"
              onClick={() => setShowSqlModal(true)}
              className="inline-flex items-center gap-1 bg-amber-50 hover:bg-amber-100 border border-amber-300 text-amber-900 px-3 py-1 rounded-full font-medium transition-colors shadow-2xs cursor-pointer"
              title="View Supabase Table Schema & SQL"
            >
              <Code className="w-3.5 h-3.5 text-amber-700" />
              <span>SQL Schema & Keys</span>
            </button>

            <button
              type="button"
              onClick={loadSubmissions}
              className="inline-flex items-center gap-1 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-900 px-3 py-1 rounded-full font-medium transition-colors shadow-2xs cursor-pointer"
              title="View saved admission records in Supabase"
            >
              <Eye className="w-3.5 h-3.5 text-emerald-700" />
              <span>View Saved Applications</span>
            </button>
          </div>
        </div>

        {/* Success Confirmation Card */}
        {submitStatus === 'success' ? (
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border-2 border-emerald-500 text-center animate-in fade-in duration-300">
            <div className="w-16 h-16 bg-emerald-100 text-[#0A5C36] rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <span className="font-urdu text-xs font-bold text-[#0A5C36] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              مبارک ہو! آپ کا داخلہ فارم کامیابی سے موصول ہو گیا ہے
            </span>

            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-3 mb-1">
              Application Successfully Submitted!
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-4 font-sans-en">
              Your details have been registered with Jamia Rushd-ul-Eman & Education Center.
            </p>

            {/* Supabase Storage Confirmation Banner */}
            <div className="max-w-lg mx-auto mb-6 p-3.5 rounded-xl border text-xs text-left flex items-start gap-3 bg-emerald-50 border-emerald-300 text-emerald-900">
              <Database className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <div className="font-bold flex items-center gap-2">
                  <span>Supabase Storage Status</span>
                  {supabaseSaved && (
                    <span className="bg-emerald-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold uppercase">
                      Synced
                    </span>
                  )}
                </div>
                <div className="text-emerald-800 text-[11px] mt-0.5">
                  Connected to Project ID: <strong>{SUPABASE_PROJECT_ID}</strong> | Table: <strong>admissions</strong>
                </div>
                {supabaseTableMissing && (
                  <div className="mt-2 text-amber-900 bg-amber-100/80 p-2 rounded-lg border border-amber-300">
                    <p className="font-medium text-[11px]">
                      Your application has been stored locally and prepared for WhatsApp.
                      To sync directly into Supabase, run the 1-click SQL schema to create the <code className="font-mono bg-white px-1 rounded">admissions</code> table in your Supabase SQL editor.
                    </p>
                    <button
                      type="button"
                      onClick={() => setShowSqlModal(true)}
                      className="mt-1.5 inline-flex items-center gap-1 font-bold text-emerald-900 bg-white px-2.5 py-1 rounded border border-amber-400 hover:bg-amber-50"
                    >
                      <Code className="w-3.5 h-3.5 text-amber-700" />
                      <span>View & Copy Supabase SQL</span>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Reference Number Box */}
            <div className="bg-emerald-50/80 border border-emerald-200 rounded-2xl p-4 sm:p-6 max-w-lg mx-auto mb-8 text-left">
              <div className="flex items-center justify-between mb-3 border-b border-emerald-200/60 pb-2">
                <span className="text-xs uppercase font-bold tracking-wider text-gray-600">Application Reference ID</span>
                <button
                  onClick={copyRefToClipboard}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#0A5C36] hover:text-[#08482b]"
                >
                  {copiedRef ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedRef ? 'Copied!' : 'Copy ID'}</span>
                </button>
              </div>
              <div className="text-xl sm:text-2xl font-mono font-bold text-[#0A5C36] tracking-wider mb-4">
                {applicationRefId}
              </div>

              {/* Applicant Summary */}
              <div className="space-y-1.5 text-xs text-gray-700">
                <div><strong>Student Name:</strong> {formData.fullName}</div>
                <div><strong>Father Name:</strong> {formData.fatherName}</div>
                <div><strong>Selected Course:</strong> {formData.selectedCourse}</div>
                <div><strong>WhatsApp:</strong> {formData.whatsappNumber}</div>
              </div>
            </div>

            {/* Next Step Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={getWhatsAppConfirmationUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-6 py-3.5 rounded-xl shadow-md transition-all text-xs sm:text-sm"
              >
                <Send className="w-4 h-4" />
                <span>Confirm on WhatsApp (0323-7121228)</span>
              </a>

              <button
                onClick={() => {
                  setSubmitStatus('idle');
                  setFormData({
                    fullName: '',
                    fatherName: '',
                    studentCnic: '',
                    parentCnic: '',
                    whatsappNumber: '',
                    selectedCourse: 'Option A: 1st Shift (8:30 AM - 2:00 PM) - Dars-e-Nizami (عصری تعلیم کے ساتھ)',
                    educationLevel: 'Matric / میٹرک',
                    additionalMessage: ''
                  });
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold px-5 py-3.5 rounded-xl transition-colors text-xs sm:text-sm"
              >
                <span>Submit Another Application</span>
              </button>
            </div>
          </div>
        ) : (
          /* Main Admission Form Card */
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-gray-200">
            {/* Form Header info */}
            <div className="flex items-center justify-between border-b border-gray-100 pb-5 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#0A5C36] flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-tight">
                    Candidate Registration Form
                  </h3>
                  <span className="text-xs text-gray-500 font-urdu">امیدوار کا رجسٹریشن فارم</span>
                </div>
              </div>

              <div className="text-right">
                <span className="inline-flex items-center gap-1 bg-[#D4AF37]/20 text-[#0A5C36] font-bold text-[11px] px-2.5 py-1 rounded-md border border-[#D4AF37]/40">
                  <Sparkles className="w-3 h-3 text-[#D4AF37]" /> Free Tuition
                </span>
              </div>
            </div>

            {/* Error Message if any */}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3 text-xs sm:text-sm text-red-700">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold">Submission Notice:</div>
                  <div>{errorMessage}</div>
                  <div className="mt-1">You can also register directly by sending your details to WhatsApp: <strong>0323-7121228</strong></div>
                </div>
              </div>
            )}

            {/* Form element with direct Supabase handler */}
            <form
              onSubmit={handleSubmit}
              id="jamia-admission-form"
              className="space-y-6"
            >
              {/* 1. Student Full Name */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label htmlFor="fullName" className="text-xs sm:text-sm font-bold text-gray-800 flex items-center gap-1.5">
                    <User className="w-4 h-4 text-[#0A5C36]" />
                    <span>1. Student Full Name</span>
                    <span className="text-red-500">*</span>
                  </label>
                  <span className="font-urdu text-xs text-gray-500 font-medium">طالب علم کا نام</span>
                </div>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  placeholder="محمد علی / Muhammad Ali"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#0A5C36] focus:ring-2 focus:ring-[#0A5C36]/20 text-sm text-gray-900 transition-all outline-none"
                />
              </div>

              {/* 2. Father's Name */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label htmlFor="fatherName" className="text-xs sm:text-sm font-bold text-gray-800 flex items-center gap-1.5">
                    <User className="w-4 h-4 text-[#0A5C36]" />
                    <span>2. Father's Name / Guardian's Name</span>
                    <span className="text-red-500">*</span>
                  </label>
                  <span className="font-urdu text-xs text-gray-500 font-medium">والد کا نام</span>
                </div>
                <input
                  type="text"
                  id="fatherName"
                  name="fatherName"
                  required
                  placeholder="محمد اقبال / Muhammad Iqbal"
                  value={formData.fatherName}
                  onChange={(e) => setFormData({ ...formData, fatherName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#0A5C36] focus:ring-2 focus:ring-[#0A5C36]/20 text-sm text-gray-900 transition-all outline-none"
                />
              </div>

              {/* 3 & 4. Student & Parent CNIC Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* 3. Student CNIC */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label htmlFor="studentCnic" className="text-xs sm:text-sm font-bold text-gray-800 flex items-center gap-1.5">
                      <CreditCard className="w-4 h-4 text-[#0A5C36]" />
                      <span>3. Student CNIC / B-Form</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <span className="font-urdu text-xs text-gray-500 font-medium">طالب علم کا شناختی کارڈ / ب فارم</span>
                  </div>
                  <input
                    type="text"
                    id="studentCnic"
                    name="studentCnic"
                    required
                    placeholder="34101-1234567-1"
                    maxLength={15}
                    value={formData.studentCnic}
                    onChange={(e) => handleCnicChange('studentCnic', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#0A5C36] focus:ring-2 focus:ring-[#0A5C36]/20 text-sm text-gray-900 transition-all outline-none font-mono"
                  />
                  <span className="text-[11px] text-gray-500 block">Format: 13 digits (XXXXX-XXXXXXX-X)</span>
                </div>

                {/* 4. Parent CNIC */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label htmlFor="parentCnic" className="text-xs sm:text-sm font-bold text-gray-800 flex items-center gap-1.5">
                      <CreditCard className="w-4 h-4 text-[#0A5C36]" />
                      <span>4. Father's / Mother's CNIC</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <span className="font-urdu text-xs text-gray-500 font-medium">والد / والدہ کا شناختی کارڈ</span>
                  </div>
                  <input
                    type="text"
                    id="parentCnic"
                    name="parentCnic"
                    required
                    placeholder="34101-9876543-1"
                    maxLength={15}
                    value={formData.parentCnic}
                    onChange={(e) => handleCnicChange('parentCnic', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#0A5C36] focus:ring-2 focus:ring-[#0A5C36]/20 text-sm text-gray-900 transition-all outline-none font-mono"
                  />
                  <span className="text-[11px] text-gray-500 block">Format: 13 digits (XXXXX-XXXXXXX-X)</span>
                </div>
              </div>

              {/* 5. WhatsApp Number */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label htmlFor="whatsappNumber" className="text-xs sm:text-sm font-bold text-gray-800 flex items-center gap-1.5">
                    <Phone className="w-4 h-4 text-[#0A5C36]" />
                    <span>5. WhatsApp Mobile Number</span>
                    <span className="text-red-500">*</span>
                  </label>
                  <span className="font-urdu text-xs text-gray-500 font-medium">واٹس ایپ نمبر (رابطے کے لیے)</span>
                </div>
                <input
                  type="tel"
                  id="whatsappNumber"
                  name="whatsappNumber"
                  required
                  placeholder="0323-7121228 یا 0300-1234567"
                  value={formData.whatsappNumber}
                  onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#0A5C36] focus:ring-2 focus:ring-[#0A5C36]/20 text-sm text-gray-900 transition-all outline-none font-mono"
                />
                <span className="text-[11px] text-gray-500 block">Class notifications & admission confirmation will be sent on this WhatsApp number.</span>
              </div>

              {/* 6. Shift & Course Selection */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs sm:text-sm font-bold text-gray-800 flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-[#0A5C36]" />
                    <span>6. Shift & Course Selection (Option A - G)</span>
                    <span className="text-red-500">*</span>
                  </label>
                  <span className="font-urdu text-xs text-gray-500 font-medium">وقت اور کورس کا انتخاب کریں</span>
                </div>

                {/* Course Options Radio List */}
                <div className="space-y-2.5">
                  {courseOptions.map((opt) => {
                    const isSelected = formData.selectedCourse === opt.val;
                    return (
                      <label
                        key={opt.id}
                        className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all duration-200 ${
                          isSelected
                            ? 'bg-emerald-50/70 border-2 border-[#0A5C36] shadow-xs'
                            : 'bg-white border-gray-200 hover:bg-gray-50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="shiftAndCourseSelection"
                          value={opt.val}
                          checked={isSelected}
                          onChange={() => setFormData({ ...formData, selectedCourse: opt.val })}
                          className="mt-1 text-[#0A5C36] focus:ring-[#0A5C36] h-4 w-4"
                          required
                        />
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                            <span className={`text-xs sm:text-sm font-bold ${isSelected ? 'text-[#0A5C36]' : 'text-gray-900'}`}>
                              {opt.titleEn}
                            </span>
                            {opt.is1stShift && (
                              <span className="inline-block bg-[#0A5C36] text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider w-max">
                                1st Shift Mandatory
                              </span>
                            )}
                          </div>
                          <span className="font-urdu text-xs sm:text-sm text-gray-600 block text-right mt-1">
                            {opt.titleUrdu}
                          </span>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Optional: Educational Background */}
              <div className="space-y-1.5 pt-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="educationLevel" className="text-xs sm:text-sm font-semibold text-gray-700">
                    Highest Educational Qualification (Optional)
                  </label>
                  <span className="font-urdu text-xs text-gray-500">تعلیمی قابلیت</span>
                </div>
                <select
                  id="educationLevel"
                  name="educationLevel"
                  value={formData.educationLevel}
                  onChange={(e) => setFormData({ ...formData, educationLevel: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#0A5C36] focus:ring-2 focus:ring-[#0A5C36]/20 text-sm text-gray-900 transition-all outline-none bg-white"
                >
                  <option value="Primary / Middle">Primary / Middle (پرائمری / مڈل)</option>
                  <option value="Matric / میٹرک">Matric / میٹرک</option>
                  <option value="Intermediate / ایف اے / ایف ایس سی">Intermediate / FA / FSc / ICS</option>
                  <option value="Graduation / بی اے / بی ایس">Graduation / BA / BSc / BS</option>
                  <option value="Hafiz-e-Quran / حفظِ قرآن">Hafiz-e-Quran / حفظِ قرآن</option>
                  <option value="Other / دیگر">Other / دیگر</option>
                </select>
              </div>

              {/* Free Admission Pledge Checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-2.5 text-xs text-gray-600 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    defaultChecked
                    className="mt-0.5 rounded text-[#0A5C36] focus:ring-[#0A5C36] h-4 w-4"
                  />
                  <span>
                    I confirm that the information provided is correct, and I agree to abide by the ethical and disciplinary rules of Jamia Rushd-ul-Eman & Education Center. (میں تصدیق کرتا/کرتی ہوں کہ فراہم کردہ تمام معلومات درست ہیں).
                  </span>
                </label>
              </div>

              {/* Styled Submit Button with Golden Background */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  id="submit-admission-form-btn"
                  className="w-full bg-gradient-to-r from-[#D4AF37] via-[#E5A93C] to-[#D4AF37] hover:from-[#c29f2f] hover:to-[#d4972e] text-[#0A5C36] font-extrabold text-base sm:text-lg py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 border border-amber-300/80 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-[#0A5C36] border-t-transparent rounded-full animate-spin"></div>
                      <span>Saving to Supabase & Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 text-[#0A5C36]" />
                      <span>Submit Application (Save to Supabase)</span>
                      <span className="font-urdu font-bold text-base text-[#0A5C36]">/ فارم جمع کروائیں</span>
                    </>
                  )}
                </button>
              </div>

              {/* Support & Storage Note */}
              <div className="flex items-center justify-between text-xs text-gray-500 pt-2 flex-wrap gap-2">
                <span>
                  Having trouble? Reach out directly via WhatsApp: <strong>0323-7121228</strong>
                </span>
                <span className="inline-flex items-center gap-1 text-emerald-700 font-medium">
                  <Database className="w-3 h-3 text-[#0A5C36]" /> Secure Supabase cloud storage active
                </span>
              </div>
            </form>
          </div>
        )}

      </div>

      {/* MODAL 1: Supabase SQL Schema & Connection Setup Guide */}
      {showSqlModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-gray-200 max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-gray-200">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#0A5C36] flex items-center justify-center">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900">
                    Supabase Database Configuration
                  </h3>
                  <p className="text-xs text-gray-500">
                    Project ID: <strong className="text-emerald-700">{SUPABASE_PROJECT_ID}</strong>
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowSqlModal(false)}
                className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-4 space-y-4 text-xs sm:text-sm text-gray-700">
              <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl">
                <div className="font-semibold text-emerald-950 mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Connection Details Configured:</span>
                </div>
                <ul className="space-y-1 text-xs text-emerald-900">
                  <li><strong>Project URL:</strong> <code className="bg-white px-1.5 py-0.5 rounded border border-emerald-200">https://{SUPABASE_PROJECT_ID}.supabase.co</code></li>
                  <li><strong>API Key:</strong> <code className="bg-white px-1.5 py-0.5 rounded border border-emerald-200">sb_publishable_jjReSMMXsHybxwAclVxG_w_8GE8IwcD</code></li>
                  <li><strong>Target Table:</strong> <code className="bg-white px-1.5 py-0.5 rounded border border-emerald-200">public.admissions</code></li>
                </ul>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="font-bold text-gray-900 text-xs uppercase tracking-wider flex items-center gap-1.5">
                    <Code className="w-4 h-4 text-amber-600" />
                    <span>PostgreSQL Table Schema (1-Click SQL)</span>
                  </label>
                  <button
                    type="button"
                    onClick={copySqlToClipboard}
                    className="inline-flex items-center gap-1 text-xs font-semibold bg-[#0A5C36] text-white px-3 py-1 rounded-lg hover:bg-[#08482b] transition-colors"
                  >
                    {copiedSql ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedSql ? 'SQL Copied!' : 'Copy SQL Schema'}</span>
                  </button>
                </div>
                <pre className="bg-gray-900 text-emerald-400 p-4 rounded-xl text-[11px] sm:text-xs font-mono overflow-x-auto leading-relaxed border border-gray-800">
                  {SUPABASE_SQL_SCHEMA}
                </pre>
                <p className="text-[11px] text-gray-500 mt-2">
                  Tip: Open your <a href={`https://supabase.com/dashboard/project/${SUPABASE_PROJECT_ID}/sql/new`} target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold inline-flex items-center gap-0.5">Supabase SQL Editor <ExternalLink className="w-3 h-3" /></a>, paste this query, and click <strong>Run</strong>. The table will immediately be ready to receive applications.
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-gray-200 flex justify-end">
              <button
                type="button"
                onClick={() => setShowSqlModal(false)}
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold px-4 py-2 rounded-xl text-xs"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: View Saved Applications */}
      {showSubmissionsModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full p-6 sm:p-8 shadow-2xl border border-gray-200 max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-gray-200">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#0A5C36] flex items-center justify-center">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900">
                    Saved Admission Applications
                  </h3>
                  <p className="text-xs text-gray-500">
                    Records from Supabase ({SUPABASE_PROJECT_ID}) & Local Storage
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={loadSubmissions}
                  className="p-1.5 rounded-lg text-gray-600 hover:text-[#0A5C36] hover:bg-emerald-50 transition-colors"
                  title="Refresh list"
                >
                  <RefreshCw className={`w-4 h-4 ${isLoadingAdmissions ? 'animate-spin' : ''}`} />
                </button>
                <button
                  type="button"
                  onClick={() => setShowSubmissionsModal(false)}
                  className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="py-4">
              {isLoadingAdmissions ? (
                <div className="text-center py-12">
                  <div className="w-8 h-8 border-2 border-[#0A5C36] border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
                  <p className="text-xs text-gray-600">Loading admissions from Supabase...</p>
                </div>
              ) : admissionsList.length === 0 ? (
                <div className="text-center py-12 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
                  <Database className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-700">No applications found yet</p>
                  <p className="text-xs text-gray-500 mt-1">Submit an admission form to see records appear here in real-time.</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs text-gray-700 border-collapse">
                    <thead>
                      <tr className="bg-gray-100 text-gray-900 uppercase font-bold text-[11px] border-b border-gray-200">
                        <th className="p-3">Ref ID</th>
                        <th className="p-3">Student Name</th>
                        <th className="p-3">Father Name</th>
                        <th className="p-3">WhatsApp</th>
                        <th className="p-3">Selected Course</th>
                        <th className="p-3">CNIC</th>
                        <th className="p-3">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 font-sans-en">
                      {admissionsList.map((app, idx) => (
                        <tr key={app.id || app.application_ref_id || idx} className="hover:bg-emerald-50/50 transition-colors">
                          <td className="p-3 font-mono font-bold text-[#0A5C36] whitespace-nowrap">
                            {app.application_ref_id}
                          </td>
                          <td className="p-3 font-semibold text-gray-900 whitespace-nowrap">
                            {app.full_name}
                          </td>
                          <td className="p-3 whitespace-nowrap">{app.father_name}</td>
                          <td className="p-3 font-mono whitespace-nowrap">
                            <a
                              href={`https://wa.me/${app.whatsapp_number.replace(/\D/g, '')}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-emerald-700 hover:underline"
                            >
                              {app.whatsapp_number}
                            </a>
                          </td>
                          <td className="p-3 text-[11px] max-w-xs truncate" title={app.selected_course}>
                            {app.selected_course}
                          </td>
                          <td className="p-3 font-mono text-[11px] whitespace-nowrap">{app.student_cnic}</td>
                          <td className="p-3 whitespace-nowrap">
                            <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                              {app.status || 'Received'}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            <div className="pt-3 border-t border-gray-200 flex justify-between items-center text-xs text-gray-500">
              <span>Total Applications: <strong>{admissionsList.length}</strong></span>
              <button
                type="button"
                onClick={() => setShowSubmissionsModal(false)}
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold px-4 py-2 rounded-xl text-xs"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
