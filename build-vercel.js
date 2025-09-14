#!/usr/bin/env node

// Simple build script for Vercel deployment
// This ensures the frontend builds correctly without server dependencies

import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('Building frontend for Vercel deployment...');

try {
  // Build the frontend only
  execSync('vite build', { 
    stdio: 'inherit', 
    cwd: __dirname,
    env: { 
      ...process.env, 
      NODE_ENV: 'production' 
    }
  });
  
  console.log('✅ Frontend build completed successfully!');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}