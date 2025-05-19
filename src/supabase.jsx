import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uhajybbtprasgddztuir.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVoYWp5YmJ0cHJhc2dkZHp0dWlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2ODAyNjgsImV4cCI6MjA2MzI1NjI2OH0.f3iaRSAAG8EPovk7AeBl0fGE7jUd1cGRPLNzGSyfEig';
export const supabase = createClient(supabaseUrl, supabaseKey);