/**
 * scripts/sync-clinical-core.js
 * 
 * Synchronizes the clinical engine modules (CDS and CFS) from Monica's suite
 * (psynurse-clinical-suite) into the commercial PsynapseCDS platform (psych-suite-platform),
 * preserving discipline-neutral profile hooks and Psynapse branding.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const MONICA_ROOT = path.resolve(__dirname, '../../psynurse-clinical-suite');
const PLATFORM_ROOT = path.resolve(__dirname, '..');

console.log('🔄 PsynapseCDS Clinical Core Synchronizer');
console.log('Source (Monica Suite):', MONICA_ROOT);
console.log('Target (Psynapse Platform):', PLATFORM_ROOT);

if (!fs.existsSync(MONICA_ROOT)) {
  console.error('❌ Error: Could not locate psynurse-clinical-suite at:', MONICA_ROOT);
  process.exit(1);
}

// Folders that represent pure clinical intelligence & data (copied directly)
const PURE_CLINICAL_DIRS = [
  'src/modules/cds/data',
  'src/modules/cds/utils',
  'src/modules/cfs/data',
  'src/modules/cfs/components',
  'src/modules/cfs/utils'
];

function copyDirRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
      console.log(`  ✓ Synced file: ${path.relative(PLATFORM_ROOT, destPath)}`);
    }
  }
}

// 1. Sync all pure data & algorithmic folders
for (const dir of PURE_CLINICAL_DIRS) {
  const srcDir = path.join(MONICA_ROOT, dir);
  const destDir = path.join(PLATFORM_ROOT, dir);
  console.log(`\n📁 Syncing ${dir}...`);
  copyDirRecursive(srcDir, destDir);
}

// 2. Sync clinical components, applying provider-profile neutrality transforms where needed
const CDS_COMPONENTS_DIR = 'src/modules/cds/components';
const srcCompDir = path.join(MONICA_ROOT, CDS_COMPONENTS_DIR);
const destCompDir = path.join(PLATFORM_ROOT, CDS_COMPONENTS_DIR);

console.log(`\n📁 Syncing & checking ${CDS_COMPONENTS_DIR}...`);
const components = fs.readdirSync(srcCompDir);

for (const comp of components) {
  const srcFile = path.join(srcCompDir, comp);
  const destFile = path.join(destCompDir, comp);

  if (fs.statSync(srcFile).isDirectory()) continue;

  // Components with customized provider profile hooks
  if (comp === 'AiAdvisor.jsx' || comp === 'CrossTaperCalculator.jsx') {
    console.log(`  ⚡ Preserving discipline-neutral profile integration for: ${comp}`);
    continue;
  }

  fs.copyFileSync(srcFile, destFile);
  console.log(`  ✓ Synced component: ${comp}`);
}

// 3. Sync CFS root modules (CfsApp.jsx and CfsSubNav.jsx)
console.log(`\n📁 Syncing CFS Simulation Framework...`);
const srcCfsApp = path.join(MONICA_ROOT, 'src/modules/cfs/CfsApp.jsx');
const destCfsApp = path.join(PLATFORM_ROOT, 'src/modules/cfs/CfsApp.jsx');
if (fs.existsSync(srcCfsApp)) {
  fs.copyFileSync(srcCfsApp, destCfsApp);
  console.log(`  ✓ Synced file: src/modules/cfs/CfsApp.jsx`);
}

const srcCfsSubNav = path.join(MONICA_ROOT, 'src/components/CfsSubNav.jsx');
const destCfsSubNav = path.join(PLATFORM_ROOT, 'src/components/CfsSubNav.jsx');
if (fs.existsSync(srcCfsSubNav)) {
  fs.copyFileSync(srcCfsSubNav, destCfsSubNav);
  console.log(`  ✓ Synced file: src/components/CfsSubNav.jsx`);
}

console.log('\n✅ Clinical core synchronization completed successfully!');
