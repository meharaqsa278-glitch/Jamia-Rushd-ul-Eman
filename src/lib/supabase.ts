/// <reference types="vite/client" />
import { createClient } from '@supabase/supabase-js';

export const SUPABASE_PROJECT_ID = 'xowpbzwnwrpfuregppcu';
export const SUPABASE_URL =
  import.meta.env.VITE_SUPABASE_URL || 'https://xowpbzwnwrpfuregppcu.supabase.co';
export const SUPABASE_ANON_KEY =
  import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_jjReSMMXsHybxwAclVxG_w_8GE8IwcD';

// Initialize Supabase Client
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export interface AdmissionRecord {
  id?: string;
  created_at?: string;
  application_ref_id: string;
  full_name: string;
  father_name: string;
  student_cnic: string;
  parent_cnic: string;
  whatsapp_number: string;
  selected_course: string;
  education_level: string;
  additional_message?: string;
  status?: string;
}

// SQL Schema for user to initialize table in their Supabase SQL editor
export const SUPABASE_SQL_SCHEMA = `-- Run this in your Supabase SQL Editor (Project: xowpbzwnwrpfuregppcu)
-- 1. Create admissions table
CREATE TABLE IF NOT EXISTS public.admissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT now(),
    application_ref_id TEXT UNIQUE NOT NULL,
    full_name TEXT NOT NULL,
    father_name TEXT NOT NULL,
    student_cnic TEXT,
    parent_cnic TEXT,
    whatsapp_number TEXT NOT NULL,
    selected_course TEXT NOT NULL,
    education_level TEXT,
    additional_message TEXT,
    status TEXT DEFAULT 'pending'
);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE public.admissions ENABLE ROW LEVEL SECURITY;

-- 3. Policy: Allow public anonymous insertion for online applicants
CREATE POLICY "Allow public inserts to admissions" 
ON public.admissions 
FOR INSERT 
TO anon, authenticated
WITH CHECK (true);

-- 4. Policy: Allow reading applications
CREATE POLICY "Allow public select on admissions" 
ON public.admissions 
FOR SELECT 
TO anon, authenticated
USING (true);
`;

/**
 * Checks if the 'admissions' table is created and accessible in Supabase
 */
export async function checkSupabaseConnection(): Promise<{ connected: boolean; tableExists: boolean; message: string }> {
  try {
    const { data, error } = await supabase.from('admissions').select('id').limit(1);
    if (!error) {
      return {
        connected: true,
        tableExists: true,
        message: 'Connected & admissions table is ready.'
      };
    }

    if (error.message.includes('schema cache') || error.message.includes('does not exist') || error.message.includes('404')) {
      return {
        connected: true,
        tableExists: false,
        message: "Supabase connected. The 'admissions' table needs to be created in your Supabase SQL Editor."
      };
    }

    return {
      connected: false,
      tableExists: false,
      message: error.message
    };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Connection failed';
    return {
      connected: false,
      tableExists: false,
      message: msg
    };
  }
}

/**
 * Saves admission details into the Supabase database.
 */
export async function saveAdmissionToSupabase(record: AdmissionRecord): Promise<{
  success: boolean;
  data?: AdmissionRecord[];
  error?: string;
  tableMissing?: boolean;
}> {
  // Always keep local backup so data is never lost
  try {
    const existing = JSON.parse(localStorage.getItem('jamia_admissions_backup') || '[]');
    existing.unshift({ ...record, savedLocallyAt: new Date().toISOString() });
    localStorage.setItem('jamia_admissions_backup', JSON.stringify(existing.slice(0, 50)));
  } catch {
    // ignore storage quota errors
  }

  try {
    // 1. Primary insert (snake_case)
    const { data, error } = await supabase
      .from('admissions')
      .insert([record])
      .select();

    if (!error) {
      return { success: true, data: data as AdmissionRecord[] };
    }

    // Check if table is not created yet in Supabase
    if (error.message.includes('schema cache') || error.message.includes('does not exist')) {
      return {
        success: false,
        error: error.message,
        tableMissing: true
      };
    }

    // 2. Fallback attempt with camelCase in case table was created with camelCase
    const camelRecord = {
      applicationRefId: record.application_ref_id,
      fullName: record.full_name,
      fatherName: record.father_name,
      studentCnic: record.student_cnic,
      parentCnic: record.parent_cnic,
      whatsappNumber: record.whatsapp_number,
      selectedCourse: record.selected_course,
      educationLevel: record.education_level,
      additionalMessage: record.additional_message,
      status: record.status || 'pending',
      createdAt: record.created_at
    };

    const fallbackResult = await supabase
      .from('admissions')
      .insert([camelRecord])
      .select();

    if (!fallbackResult.error) {
      return { success: true, data: fallbackResult.data as AdmissionRecord[] };
    }

    return { success: false, error: error.message };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Database error';
    return { success: false, error: msg };
  }
}

/**
 * Fetch all admissions from Supabase (for admin review)
 */
export async function fetchAdmissionsFromSupabase(): Promise<{ data: AdmissionRecord[] | null; error: string | null }> {
  try {
    const { data, error } = await supabase
      .from('admissions')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      return { data: null, error: error.message };
    }
    return { data: data as AdmissionRecord[], error: null };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Failed to fetch';
    return { data: null, error: msg };
  }
}
