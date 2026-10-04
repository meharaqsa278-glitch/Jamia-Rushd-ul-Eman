export interface Course {
  id: string;
  code: string;
  shift: '1st Shift' | '2nd Shift';
  shiftUrdu: string;
  timing: string;
  timingUrdu: string;
  titleEn: string;
  titleUrdu: string;
  category: 'Islamic' | 'Technical' | 'Language' | 'Vocational' | 'Creative';
  icon: string;
  shortDescEn: string;
  shortDescUrdu: string;
  isMandatory?: boolean;
  featuresEn: string[];
  featuresUrdu: string[];
  badgeColor?: string;
  formOptionValue: string;
}

export interface AdmissionFormData {
  fullName: string;
  fatherName: string;
  studentCnic: string;
  parentCnic: string;
  whatsappNumber: string;
  selectedCourse: string;
  educationLevel?: string;
  notes?: string;
}
