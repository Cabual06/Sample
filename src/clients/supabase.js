import { createClient } from '@supabase/supabase-js';


const supabaseUrl = 'https://vptkpdvqfoajqpwyvbxp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZwdGtwZHZxZm9hanFwd3l2YnhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM0NTA0NTQsImV4cCI6MjAzOTAyNjQ1NH0.6glwP31M2uZjlN8n_ZvMyuyfpqsSJI6fPIVa74ojAkQ';

export const supabase = createClient(supabaseUrl, supabaseKey);

