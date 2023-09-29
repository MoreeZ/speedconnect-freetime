const fs = require("fs");

const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://znyskalimadbtlhjjgup.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpueXNrYWxpbWFkYnRsaGpqZ3VwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU5OTMxOTIsImV4cCI6MjAxMTU2OTE5Mn0.zXkuAOpPRxvudRdemWo8lPYYzMn8QvRe0757Vut6wzE"
const supabase = createClient(supabaseUrl, supabaseKey)

module.exports = supabase;