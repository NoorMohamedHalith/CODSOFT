/**
 * FlowSphere Email Template — SVG Asset Generator
 * CODSOFT UI/UX Internship Task 2
 * Author: Noor Mohamed Halith
 *
 * Generates all SVG assets for the email template:
 *   - Hero illustration
 *   - Feature icons (3x)
 *   - Customer avatars (2x)
 *   - App store badges (2x)
 *   - Design System overview SVG
 *   - Color palette SVG
 *   - Typography scale SVG
 */

const fs = require('fs');
const path = require('path');

const SVG_DIR = path.join(__dirname, 'Assets', 'SVG');
const DS_DIR  = path.join(__dirname, 'Design-System');

// ──────────────────────────────────────────────
// Utilities
// ──────────────────────────────────────────────
function writeSVG(filename, content, dir = SVG_DIR) {
  const filepath = path.join(dir, filename);
  fs.writeFileSync(filepath, content, 'utf8');
  console.log(`✓ Generated: ${path.relative(__dirname, filepath)}`);
}

function svgWrap(width, height, content, viewBox = `0 0 ${width} ${height}`) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="${viewBox}" fill="none"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
${content}
</svg>`;
}

// ──────────────────────────────────────────────
// 1. Hero Illustration
// ──────────────────────────────────────────────
function generateHeroIllustration() {
  const content = `
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#6366F1;stop-opacity:1"/>
      <stop offset="100%" style="stop-color:#8B5CF6;stop-opacity:1"/>
    </linearGradient>
    <filter id="shadow1">
      <feDropShadow dx="0" dy="6" stdDeviation="12" flood-color="rgba(99,102,241,0.20)"/>
    </filter>
    <filter id="shadow2">
      <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="rgba(0,0,0,0.08)"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="540" height="320" rx="16" fill="#F8FAFC"/>

  <!-- Decorative circles -->
  <circle cx="480" cy="40" r="80" fill="#EEF2FF" opacity="0.4"/>
  <circle cx="60" cy="280" r="60" fill="#F5F3FF" opacity="0.3"/>

  <!-- Sidebar panel -->
  <rect x="0" y="0" width="132" height="320" rx="16" fill="white" filter="url(#shadow2)"/>
  <!-- Sidebar brand -->
  <rect x="12" y="18" width="108" height="38" rx="10" fill="#EEF2FF"/>
  <rect x="20" y="26" width="20" height="20" rx="6" fill="url(#grad1)"/>
  <rect x="48" y="31" width="54" height="8" rx="4" fill="#6366F1"/>
  <!-- Nav items -->
  <circle cx="26" cy="82" r="5" fill="#6366F1"/>
  <rect x="40" y="78" width="60" height="8" rx="4" fill="#6366F1" opacity="0.7"/>
  <circle cx="26" cy="108" r="5" fill="#8B5CF6" opacity="0.5"/>
  <rect x="40" y="104" width="44" height="8" rx="4" fill="#6B7280" opacity="0.35"/>
  <circle cx="26" cy="134" r="5" fill="#22C55E" opacity="0.7"/>
  <rect x="40" y="130" width="68" height="8" rx="4" fill="#6B7280" opacity="0.35"/>
  <circle cx="26" cy="160" r="5" fill="#F59E0B" opacity="0.6"/>
  <rect x="40" y="156" width="50" height="8" rx="4" fill="#6B7280" opacity="0.35"/>
  <!-- User avatar in sidebar -->
  <circle cx="66" cy="296" r="14" fill="#EEF2FF" stroke="#6366F1" stroke-width="1.5"/>
  <circle cx="66" cy="291" r="6" fill="#6366F1"/>
  <path d="M52 308C52 302.477 58.268 299 66 299C73.732 299 80 302.477 80 308" fill="#8B5CF6" opacity="0.5"/>

  <!-- Header bar -->
  <rect x="152" y="18" width="372" height="46" rx="10" fill="white" filter="url(#shadow2)"/>
  <rect x="168" y="30" width="130" height="9" rx="4" fill="#6B7280" opacity="0.25"/>
  <rect x="168" y="43" width="90" height="7" rx="3" fill="#E5E7EB"/>
  <!-- Search icon area -->
  <circle cx="420" cy="41" r="10" fill="#EEF2FF"/>
  <!-- User dots -->
  <circle cx="447" cy="41" r="11" fill="#F5F3FF" stroke="#E5E7EB" stroke-width="1"/>
  <circle cx="447" cy="38" r="4" fill="#8B5CF6"/>
  <path d="M439 52C439 48.686 442.686 46 447 46C451.314 46 455 48.686 455 52" fill="#8B5CF6" opacity="0.4"/>
  <circle cx="474" cy="41" r="11" fill="#ECFDF5" stroke="#E5E7EB" stroke-width="1"/>
  <circle cx="474" cy="38" r="4" fill="#22C55E"/>
  <path d="M466 52C466 48.686 469.686 46 474 46C478.314 46 482 48.686 482 52" fill="#22C55E" opacity="0.4"/>
  <!-- Notification bell -->
  <circle cx="510" cy="41" r="11" fill="#FEF3C7" stroke="#E5E7EB" stroke-width="1"/>
  <path d="M510 35v1m0 0a4 4 0 0 1 4 4v2l1 2h-10l1-2v-2a4 4 0 0 1 4-4zm-1.5 9h3" stroke="#F59E0B" stroke-width="1.5" stroke-linecap="round"/>

  <!-- Stats cards row -->
  <!-- Card 1 -->
  <rect x="152" y="78" width="90" height="74" rx="12" fill="white" filter="url(#shadow2)"/>
  <rect x="164" y="90" width="50" height="7" rx="3" fill="#6B7280" opacity="0.35"/>
  <rect x="164" y="104" width="66" height="18" rx="5" fill="url(#grad1)" opacity="0.9"/>
  <rect x="164" y="130" width="40" height="7" rx="3" fill="#22C55E"/>
  <!-- Card 2 -->
  <rect x="254" y="78" width="90" height="74" rx="12" fill="white" filter="url(#shadow2)"/>
  <rect x="266" y="90" width="60" height="7" rx="3" fill="#6B7280" opacity="0.35"/>
  <rect x="266" y="104" width="52" height="18" rx="5" fill="#8B5CF6" opacity="0.85"/>
  <rect x="266" y="130" width="48" height="7" rx="3" fill="#22C55E"/>
  <!-- Card 3 -->
  <rect x="356" y="78" width="90" height="74" rx="12" fill="white" filter="url(#shadow2)"/>
  <rect x="368" y="90" width="66" height="7" rx="3" fill="#6B7280" opacity="0.35"/>
  <rect x="368" y="104" width="44" height="18" rx="5" fill="#22C55E" opacity="0.85"/>
  <rect x="368" y="130" width="56" height="7" rx="3" fill="#6B7280" opacity="0.3"/>
  <!-- Card 4: CTA -->
  <rect x="458" y="78" width="66" height="74" rx="12" fill="#EEF2FF" stroke="#6366F1" stroke-width="1"/>
  <rect x="468" y="96" width="46" height="7" rx="3" fill="#6366F1" opacity="0.5"/>
  <rect x="474" y="110" width="34" height="18" rx="6" fill="url(#grad1)"/>

  <!-- Main Task List panel -->
  <rect x="152" y="166" width="224" height="148" rx="12" fill="white" filter="url(#shadow2)"/>
  <rect x="166" y="180" width="90" height="10" rx="4" fill="#111827" opacity="0.7"/>
  <rect x="166" y="178" width="32" height="32" rx="8" fill="#EEF2FF"/>
  <rect x="206" y="185" width="90" height="8" rx="4" fill="#111827" opacity="0.5"/>
  <!-- Task items -->
  <rect x="166" y="204" width="14" height="14" rx="4" fill="#6366F1"/>
  <path d="M168 211L170 213L174 209" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="188" y="206" width="120" height="8" rx="4" fill="#6B7280" opacity="0.4"/>
  <rect x="188" y="218" width="80" height="6" rx="3" fill="#6B7280" opacity="0.25"/>
  <rect x="166" y="234" width="14" height="14" rx="4" fill="#22C55E"/>
  <path d="M168 241L170 243L174 239" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="188" y="236" width="140" height="8" rx="4" fill="#6B7280" opacity="0.4"/>
  <rect x="166" y="256" width="14" height="14" rx="4" fill="#F59E0B" opacity="0.8"/>
  <rect x="188" y="258" width="100" height="8" rx="4" fill="#6B7280" opacity="0.4"/>
  <rect x="166" y="278" width="14" height="14" rx="4" fill="#EEF2FF" stroke="#6366F1" stroke-width="1"/>
  <rect x="188" y="280" width="75" height="8" rx="4" fill="#6B7280" opacity="0.25"/>
  <!-- Progress at bottom -->
  <rect x="166" y="300" width="196" height="4" rx="2" fill="#E5E7EB"/>
  <rect x="166" y="300" width="128" height="4" rx="2" fill="url(#grad1)"/>

  <!-- Analytics Chart panel -->
  <rect x="388" y="166" width="136" height="148" rx="12" fill="white" filter="url(#shadow2)"/>
  <rect x="400" y="180" width="80" height="10" rx="4" fill="#111827" opacity="0.7"/>
  <!-- Donut / bar area -->
  <rect x="400" y="256" width="14" height="36" rx="4" fill="#6366F1" opacity="0.25"/>
  <rect x="420" y="236" width="14" height="56" rx="4" fill="#6366F1" opacity="0.45"/>
  <rect x="440" y="220" width="14" height="72" rx="4" fill="#6366F1" opacity="0.65"/>
  <rect x="460" y="210" width="14" height="82" rx="4" fill="#6366F1"/>
  <rect x="480" y="230" width="14" height="62" rx="4" fill="#8B5CF6" opacity="0.6"/>
  <!-- Trend line -->
  <polyline points="407,256 427,236 447,220 467,210 487,230" stroke="#22C55E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="407" cy="256" r="3" fill="#22C55E"/>
  <circle cx="427" cy="236" r="3" fill="#22C55E"/>
  <circle cx="447" cy="220" r="3" fill="#22C55E"/>
  <circle cx="467" cy="210" r="3" fill="#22C55E"/>
  <circle cx="487" cy="230" r="3" fill="#22C55E"/>

  <!-- Floating notification card -->
  <rect x="260" y="200" width="148" height="52" rx="12" fill="white" filter="url(#shadow1)" stroke="#E5E7EB" stroke-width="0.5"/>
  <circle cx="278" cy="226" r="12" fill="#DCFCE7"/>
  <path d="M272 226L276 230L284 222" stroke="#22C55E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="296" y="216" width="80" height="8" rx="4" fill="#111827" opacity="0.8"/>
  <rect x="296" y="230" width="100" height="7" rx="3" fill="#6B7280" opacity="0.4"/>
  <!-- Time label -->
  <rect x="362" y="212" width="32" height="7" rx="3" fill="#EEF2FF"/>
`;
  writeSVG('hero-illustration.svg', svgWrap(540, 320, content));
}

// ──────────────────────────────────────────────
// 2. Feature Icons
// ──────────────────────────────────────────────
function generateFeatureIcons() {
  // Task Management
  writeSVG('icon-task.svg', svgWrap(52, 52, `
  <rect width="52" height="52" rx="10" fill="#EEF2FF"/>
  <rect x="13" y="17" width="26" height="3" rx="1.5" fill="#6366F1"/>
  <rect x="13" y="24" width="26" height="3" rx="1.5" fill="#6366F1" opacity="0.6"/>
  <rect x="13" y="31" width="18" height="3" rx="1.5" fill="#6366F1" opacity="0.35"/>
  <circle cx="38" cy="32" r="5" fill="#22C55E"/>
  <path d="M35.5 32L37 33.5L40.5 30" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  `));

  // Team Collaboration
  writeSVG('icon-team.svg', svgWrap(52, 52, `
  <rect width="52" height="52" rx="10" fill="#F5F3FF"/>
  <circle cx="22" cy="22" r="6" fill="#8B5CF6"/>
  <circle cx="32" cy="22" r="6" fill="#8B5CF6" opacity="0.5"/>
  <path d="M10 40C10 34.477 15.373 30 22 30C24.2 30 26.27 30.6 28 31.6" stroke="#8B5CF6" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M44 40C44 34.477 38.627 30 32 30C29.8 30 27.73 30.6 26 31.6" stroke="#8B5CF6" stroke-width="2.5" stroke-linecap="round" opacity="0.5"/>
  <circle cx="27" cy="22" r="2" fill="white"/>
  `));

  // Productivity Analytics
  writeSVG('icon-analytics.svg', svgWrap(52, 52, `
  <rect width="52" height="52" rx="10" fill="#ECFDF5"/>
  <rect x="10" y="32" width="8" height="12" rx="3" fill="#22C55E" opacity="0.4"/>
  <rect x="22" y="26" width="8" height="18" rx="3" fill="#22C55E" opacity="0.65"/>
  <rect x="34" y="18" width="8" height="26" rx="3" fill="#22C55E"/>
  <polyline points="14,24 26,18 38,14" stroke="#16A34A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="14" cy="24" r="2.5" fill="#16A34A"/>
  <circle cx="26" cy="18" r="2.5" fill="#16A34A"/>
  <circle cx="38" cy="14" r="2.5" fill="#16A34A"/>
  `));

  console.log('✓ Feature icons generated (3)');
}

// ──────────────────────────────────────────────
// 3. Customer Avatars
// ──────────────────────────────────────────────
function generateAvatars() {
  // Avatar 1 - Sarah Chen
  writeSVG('avatar-1.svg', svgWrap(80, 80, `
  <circle cx="40" cy="40" r="40" fill="#EEF2FF"/>
  <circle cx="40" cy="32" r="14" fill="#6366F1"/>
  <path d="M10 72C10 57.641 23.431 46 40 46C56.569 46 70 57.641 70 72" fill="#8B5CF6" opacity="0.5"/>
  <!-- Subtle face details -->
  <circle cx="35" cy="30" r="2" fill="white" opacity="0.6"/>
  <circle cx="45" cy="30" r="2" fill="white" opacity="0.6"/>
  <path d="M36 36C36 36 38 38 40 38C42 38 44 36 44 36" stroke="white" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.7"/>
  `));

  // Avatar 2 - Marcus Rivera
  writeSVG('avatar-2.svg', svgWrap(80, 80, `
  <circle cx="40" cy="40" r="40" fill="#F5F3FF"/>
  <circle cx="40" cy="32" r="14" fill="#8B5CF6"/>
  <path d="M10 72C10 57.641 23.431 46 40 46C56.569 46 70 57.641 70 72" fill="#6366F1" opacity="0.5"/>
  <!-- Subtle face details -->
  <circle cx="35" cy="30" r="2" fill="white" opacity="0.6"/>
  <circle cx="45" cy="30" r="2" fill="white" opacity="0.6"/>
  <path d="M36 36C36 36 38 38 40 38C42 38 44 36 44 36" stroke="white" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.7"/>
  `));

  console.log('✓ Customer avatars generated (2)');
}

// ──────────────────────────────────────────────
// 4. App Store Badges
// ──────────────────────────────────────────────
function generateAppBadges() {
  // Google Play Badge
  writeSVG('badge-google-play.svg', svgWrap(200, 60, `
  <defs>
    <linearGradient id="gp-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1A1F2E;stop-opacity:1"/>
      <stop offset="100%" style="stop-color:#0F172A;stop-opacity:1"/>
    </linearGradient>
  </defs>
  <rect width="200" height="60" rx="12" fill="url(#gp-bg)"/>
  <rect width="200" height="60" rx="12" stroke="rgba(255,255,255,0.10)" stroke-width="1" fill="none"/>
  <!-- Play triangle -->
  <path d="M22 20L38 30L22 40V20Z" fill="#4ADE80" opacity="0.3"/>
  <path d="M24 22L36 30L24 38V22Z" fill="white"/>
  <!-- Text -->
  <text x="52" y="26" font-family="Inter,sans-serif" font-size="11" fill="rgba(255,255,255,0.65)" font-weight="400" letter-spacing="0.5">GET IT ON</text>
  <text x="52" y="46" font-family="Inter,sans-serif" font-size="19" fill="white" font-weight="700" letter-spacing="-0.3">Google Play</text>
  `));

  // App Store Badge
  writeSVG('badge-app-store.svg', svgWrap(200, 60, `
  <defs>
    <linearGradient id="as-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1A1F2E;stop-opacity:1"/>
      <stop offset="100%" style="stop-color:#0F172A;stop-opacity:1"/>
    </linearGradient>
  </defs>
  <rect width="200" height="60" rx="12" fill="url(#as-bg)"/>
  <rect width="200" height="60" rx="12" stroke="rgba(255,255,255,0.10)" stroke-width="1" fill="none"/>
  <!-- Apple logo (simplified) -->
  <path d="M33 15C33 15 28 15 26 20C24 25 26 35 31 39C33.5 41.5 36 41 38 39C40 37 40 35 38 35C36 35 36 37 34 37C31.5 32 29 25 31.5 20C34 15 36.5 15 36.5 15C36.5 15 35 17.5 35 20" fill="white" opacity="0.95"/>
  <ellipse cx="37.5" cy="13" rx="2.5" ry="2.5" fill="white" opacity="0.95"/>
  <!-- Text -->
  <text x="52" y="26" font-family="Inter,sans-serif" font-size="9" fill="rgba(255,255,255,0.65)" font-weight="400" letter-spacing="0.5">DOWNLOAD ON THE</text>
  <text x="52" y="46" font-family="Inter,sans-serif" font-size="19" fill="white" font-weight="700" letter-spacing="-0.3">App Store</text>
  `));

  console.log('✓ App store badges generated (2)');
}

// ──────────────────────────────────────────────
// 5. Design System — Color Palette SVG
// ──────────────────────────────────────────────
function generateColorPalette() {
  const colors = [
    { name: 'Primary',    hex: '#6366F1', text: '#FFFFFF' },
    { name: 'Secondary',  hex: '#8B5CF6', text: '#FFFFFF' },
    { name: 'Success',    hex: '#22C55E', text: '#FFFFFF' },
    { name: 'Background', hex: '#FFFFFF', text: '#111827', border: true },
    { name: 'Surface',    hex: '#F8FAFC', text: '#111827', border: true },
    { name: 'Text',       hex: '#111827', text: '#FFFFFF' },
    { name: 'Gray',       hex: '#6B7280', text: '#FFFFFF' },
    { name: 'Border',     hex: '#E5E7EB', text: '#111827' },
  ];

  const swatches = colors.map((c, i) => {
    const x = 20 + (i % 4) * 180;
    const y = 60 + Math.floor(i / 4) * 130;
    const border = c.border ? ` stroke="#E5E7EB" stroke-width="1"` : '';
    return `
    <g transform="translate(${x}, ${y})">
      <rect width="160" height="90" rx="12" fill="${c.hex}"${border}/>
      <rect width="160" height="30" rx="0 0 12 12" fill="rgba(0,0,0,0.08)" transform="translate(0,60)"/>
      <text x="12" y="82" font-family="Inter,sans-serif" font-size="12" fill="${c.text}" font-weight="600">${c.name}</text>
      <text x="12" y="97" font-family="Inter,sans-serif" font-size="11" fill="${c.text}" opacity="0.7">${c.hex}</text>
    </g>`;
  }).join('\n');

  const content = `
  <defs>
    <linearGradient id="header-grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#6366F1"/>
      <stop offset="100%" style="stop-color:#8B5CF6"/>
    </linearGradient>
  </defs>
  <!-- Header -->
  <rect width="760" height="50" fill="url(#header-grad)"/>
  <text x="24" y="32" font-family="Inter,sans-serif" font-size="18" fill="white" font-weight="700">FlowSphere — Color Palette</text>
  <text x="620" y="32" font-family="Inter,sans-serif" font-size="12" fill="rgba(255,255,255,0.7)">Task 2 Design System</text>
  ${swatches}
  `;

  writeSVG('color-palette.svg', svgWrap(760, 340, content), DS_DIR);
}

// ──────────────────────────────────────────────
// 6. Design System — Typography Scale SVG
// ──────────────────────────────────────────────
function generateTypographyScale() {
  const styles = [
    { label: 'H1 — Hero Title',     size: '36px', weight: '800 ExtraBold', sample: 'Welcome to FlowSphere' },
    { label: 'H2 — Section Title',  size: '26px', weight: '700 Bold',       sample: 'Powerful Features' },
    { label: 'H3 — Card Title',     size: '18px', weight: '700 Bold',       sample: 'Smart Task Management' },
    { label: 'Body — Regular',      size: '16px', weight: '400 Regular',    sample: 'Organize your work smarter every day.' },
    { label: 'Small — Secondary',   size: '14px', weight: '500 Medium',     sample: 'Real-time collaboration with your team.' },
    { label: 'Caption — Metadata',  size: '12px', weight: '600 SemiBold',   sample: 'EVERYTHING YOU NEED — FEATURES' },
    { label: 'Button — CTA',        size: '16px', weight: '600 SemiBold',   sample: 'Get Started Free' },
  ];

  const rows = styles.map((s, i) => {
    const y = 80 + i * 60;
    return `
    <rect x="20" y="${y}" width="720" height="52" rx="8" fill="${i % 2 === 0 ? '#F8FAFC' : 'white'}"/>
    <text x="36" y="${y + 18}" font-family="Inter,sans-serif" font-size="11" fill="#6366F1" font-weight="600">${s.label}</text>
    <text x="36" y="${y + 36}" font-family="Inter,sans-serif" font-size="10" fill="#6B7280">${s.size}  ·  Inter ${s.weight}</text>
    <text x="320" y="${y + 32}" font-family="Inter,sans-serif" font-size="13" fill="#111827" font-weight="500">${s.sample}</text>
    `;
  }).join('\n');

  const content = `
  <defs>
    <linearGradient id="ty-grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#6366F1"/>
      <stop offset="100%" style="stop-color:#8B5CF6"/>
    </linearGradient>
  </defs>
  <rect width="760" height="50" fill="url(#ty-grad)"/>
  <text x="24" y="32" font-family="Inter,sans-serif" font-size="18" fill="white" font-weight="700">FlowSphere — Typography Scale</text>
  <text x="620" y="32" font-family="Inter,sans-serif" font-size="12" fill="rgba(255,255,255,0.7)">Inter Font Family</text>
  <!-- Column headers -->
  <rect x="20" y="56" width="720" height="20" fill="#EEF2FF"/>
  <text x="36" y="70" font-family="Inter,sans-serif" font-size="10" fill="#6366F1" font-weight="700">STYLE</text>
  <text x="200" y="70" font-family="Inter,sans-serif" font-size="10" fill="#6366F1" font-weight="700">SPECS</text>
  <text x="320" y="70" font-family="Inter,sans-serif" font-size="10" fill="#6366F1" font-weight="700">SAMPLE TEXT</text>
  ${rows}
  `;

  writeSVG('typography-scale.svg', svgWrap(760, 510, content), DS_DIR);
}

// ──────────────────────────────────────────────
// 7. Design System — Spacing Tokens SVG
// ──────────────────────────────────────────────
function generateSpacingTokens() {
  const tokens = [
    { name: '--sp-1',  px: '4px',  size: 4 },
    { name: '--sp-2',  px: '8px',  size: 8 },
    { name: '--sp-3',  px: '12px', size: 12 },
    { name: '--sp-4',  px: '16px', size: 16 },
    { name: '--sp-5',  px: '20px', size: 20 },
    { name: '--sp-6',  px: '24px', size: 24 },
    { name: '--sp-8',  px: '32px', size: 32 },
    { name: '--sp-10', px: '40px', size: 40 },
    { name: '--sp-12', px: '48px', size: 48 },
    { name: '--sp-16', px: '64px', size: 64 },
  ];

  const bars = tokens.map((t, i) => {
    const y = 80 + i * 44;
    return `
    <rect x="20" y="${y}" width="720" height="36" rx="6" fill="${i % 2 === 0 ? '#F8FAFC' : 'white'}"/>
    <text x="36" y="${y + 22}" font-family="Inter,sans-serif" font-size="11" fill="#6366F1" font-weight="600">${t.name}</text>
    <text x="160" y="${y + 22}" font-family="Inter,sans-serif" font-size="11" fill="#6B7280">${t.px}</text>
    <rect x="220" y="${y + 10}" width="${t.size * 3}" height="16" rx="4" fill="#6366F1" opacity="0.75"/>
    `;
  }).join('\n');

  const content = `
  <defs>
    <linearGradient id="sp-grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#6366F1"/>
      <stop offset="100%" style="stop-color:#8B5CF6"/>
    </linearGradient>
  </defs>
  <rect width="760" height="50" fill="url(#sp-grad)"/>
  <text x="24" y="32" font-family="Inter,sans-serif" font-size="18" fill="white" font-weight="700">FlowSphere — Spacing Tokens</text>
  <rect x="20" y="56" width="720" height="20" fill="#EEF2FF"/>
  <text x="36" y="70" font-family="Inter,sans-serif" font-size="10" fill="#6366F1" font-weight="700">TOKEN</text>
  <text x="160" y="70" font-family="Inter,sans-serif" font-size="10" fill="#6366F1" font-weight="700">VALUE</text>
  <text x="220" y="70" font-family="Inter,sans-serif" font-size="10" fill="#6366F1" font-weight="700">VISUAL</text>
  ${bars}
  `;

  writeSVG('spacing-tokens.svg', svgWrap(760, 530, content), DS_DIR);
}

// ──────────────────────────────────────────────
// 8. Design System Overview (Component Sheet)
// ──────────────────────────────────────────────
function generateDesignSystemOverview() {
  const content = `
  <defs>
    <linearGradient id="ds-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#6366F1"/>
      <stop offset="100%" style="stop-color:#8B5CF6"/>
    </linearGradient>
    <linearGradient id="btn-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#6366F1"/>
      <stop offset="100%" style="stop-color:#8B5CF6"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1000" height="700" fill="#F8FAFC"/>

  <!-- Header -->
  <rect width="1000" height="70" fill="url(#ds-grad)"/>
  <text x="30" y="44" font-family="Inter,sans-serif" font-size="22" fill="white" font-weight="800">FlowSphere — Design System</text>
  <text x="700" y="44" font-family="Inter,sans-serif" font-size="13" fill="rgba(255,255,255,0.7)">CODSOFT UI/UX Task 2 · Email Template</text>

  <!-- ── Section: Buttons ── -->
  <text x="30" y="110" font-family="Inter,sans-serif" font-size="13" fill="#6366F1" font-weight="700">BUTTONS</text>
  <!-- Primary Button -->
  <rect x="30" y="120" width="160" height="44" rx="10" fill="url(#btn-grad)"/>
  <text x="90" y="148" font-family="Inter,sans-serif" font-size="14" fill="white" font-weight="600" text-anchor="middle">Get Started Free</text>
  <!-- Secondary Button -->
  <rect x="210" y="120" width="160" height="44" rx="10" fill="white" stroke="#6366F1" stroke-width="1.5"/>
  <text x="290" y="148" font-family="Inter,sans-serif" font-size="14" fill="#6366F1" font-weight="600" text-anchor="middle">Learn More</text>
  <!-- Offer Button -->
  <rect x="390" y="120" width="160" height="44" rx="10" fill="white"/>
  <text x="470" y="148" font-family="Inter,sans-serif" font-size="14" fill="#6366F1" font-weight="700" text-anchor="middle">Claim Now</text>
  <!-- Ghost Button -->
  <rect x="570" y="120" width="140" height="44" rx="10" fill="transparent" stroke="#E5E7EB" stroke-width="1.5"/>
  <text x="640" y="148" font-family="Inter,sans-serif" font-size="14" fill="#6B7280" font-weight="500" text-anchor="middle">Cancel</text>

  <!-- ── Section: Feature Cards ── -->
  <text x="30" y="200" font-family="Inter,sans-serif" font-size="13" fill="#6366F1" font-weight="700">FEATURE CARDS</text>
  <!-- Card 1 -->
  <rect x="30" y="210" width="200" height="140" rx="14" fill="white" stroke="#E5E7EB" stroke-width="1"/>
  <rect x="52" y="228" width="52" height="52" rx="10" fill="#EEF2FF"/>
  <rect x="52" y="294" width="100" height="12" rx="4" fill="#111827" opacity="0.7"/>
  <rect x="52" y="312" width="150" height="8" rx="4" fill="#6B7280" opacity="0.35"/>
  <rect x="52" y="324" width="130" height="8" rx="4" fill="#6B7280" opacity="0.25"/>
  <!-- Card 2 -->
  <rect x="250" y="210" width="200" height="140" rx="14" fill="white" stroke="#E5E7EB" stroke-width="1"/>
  <rect x="272" y="228" width="52" height="52" rx="10" fill="#F5F3FF"/>
  <rect x="272" y="294" width="90" height="12" rx="4" fill="#111827" opacity="0.7"/>
  <rect x="272" y="312" width="150" height="8" rx="4" fill="#6B7280" opacity="0.35"/>
  <rect x="272" y="324" width="120" height="8" rx="4" fill="#6B7280" opacity="0.25"/>
  <!-- Card 3 -->
  <rect x="470" y="210" width="200" height="140" rx="14" fill="white" stroke="#E5E7EB" stroke-width="1"/>
  <rect x="492" y="228" width="52" height="52" rx="10" fill="#ECFDF5"/>
  <rect x="492" y="294" width="120" height="12" rx="4" fill="#111827" opacity="0.7"/>
  <rect x="492" y="312" width="150" height="8" rx="4" fill="#6B7280" opacity="0.35"/>
  <rect x="492" y="324" width="140" height="8" rx="4" fill="#6B7280" opacity="0.25"/>

  <!-- ── Section: Offer Banner (mini) ── -->
  <text x="30" y="390" font-family="Inter,sans-serif" font-size="13" fill="#6366F1" font-weight="700">OFFER BANNER</text>
  <rect x="30" y="400" width="400" height="100" rx="16" fill="url(#ds-grad)"/>
  <text x="60" y="434" font-family="Inter,sans-serif" font-size="11" fill="rgba(255,255,255,0.75)" font-weight="600">✨ LIMITED TIME OFFER</text>
  <text x="60" y="458" font-family="Inter,sans-serif" font-size="24" fill="white" font-weight="900">30 Days Premium Free</text>
  <rect x="290" y="422" width="120" height="36" rx="8" fill="white"/>
  <text x="350" y="446" font-family="Inter,sans-serif" font-size="13" fill="#6366F1" font-weight="700" text-anchor="middle">Claim Now</text>

  <!-- ── Section: Testimonial Card ── -->
  <text x="460" y="390" font-family="Inter,sans-serif" font-size="13" fill="#6366F1" font-weight="700">TESTIMONIAL CARD</text>
  <rect x="460" y="400" width="280" height="140" rx="14" fill="white" stroke="#E5E7EB" stroke-width="1"/>
  <!-- Stars -->
  <text x="476" y="426" font-family="serif" font-size="14" fill="#F59E0B">★★★★★</text>
  <rect x="476" y="436" width="240" height="7" rx="3" fill="#6B7280" opacity="0.25"/>
  <rect x="476" y="448" width="220" height="7" rx="3" fill="#6B7280" opacity="0.20"/>
  <rect x="476" y="460" width="180" height="7" rx="3" fill="#6B7280" opacity="0.15"/>
  <!-- Author -->
  <circle cx="490" cy="498" r="16" fill="#EEF2FF"/>
  <circle cx="490" cy="494" r="6" fill="#6366F1"/>
  <rect x="512" y="490" width="80" height="8" rx="4" fill="#111827" opacity="0.7"/>
  <rect x="512" y="504" width="120" height="6" rx="3" fill="#6B7280" opacity="0.35"/>

  <!-- ── Section: Color Swatches (mini) ── -->
  <text x="30" y="540" font-family="Inter,sans-serif" font-size="13" fill="#6366F1" font-weight="700">COLOR TOKENS</text>
  <rect x="30" y="552" width="60" height="30" rx="6" fill="#6366F1"/>
  <rect x="100" y="552" width="60" height="30" rx="6" fill="#8B5CF6"/>
  <rect x="170" y="552" width="60" height="30" rx="6" fill="#22C55E"/>
  <rect x="240" y="552" width="60" height="30" rx="6" fill="#111827"/>
  <rect x="310" y="552" width="60" height="30" rx="6" fill="#F8FAFC" stroke="#E5E7EB" stroke-width="1"/>
  <rect x="380" y="552" width="60" height="30" rx="6" fill="#6B7280"/>
  <text x="55" y="600" font-family="Inter,sans-serif" font-size="9" fill="#6B7280" text-anchor="middle">Primary</text>
  <text x="125" y="600" font-family="Inter,sans-serif" font-size="9" fill="#6B7280" text-anchor="middle">Secondary</text>
  <text x="195" y="600" font-family="Inter,sans-serif" font-size="9" fill="#6B7280" text-anchor="middle">Success</text>
  <text x="265" y="600" font-family="Inter,sans-serif" font-size="9" fill="#6B7280" text-anchor="middle">Text</text>
  <text x="335" y="600" font-family="Inter,sans-serif" font-size="9" fill="#6B7280" text-anchor="middle">Surface</text>
  <text x="405" y="600" font-family="Inter,sans-serif" font-size="9" fill="#6B7280" text-anchor="middle">Gray</text>

  <!-- Footer label -->
  <text x="500" y="682" font-family="Inter,sans-serif" font-size="11" fill="#6B7280" text-anchor="middle">CODSOFT UI/UX Internship Task 2 · Designed by Noor Mohamed Halith · 2025</text>
  `;

  writeSVG('design-system.svg', svgWrap(1000, 700, content), DS_DIR);
}

// ──────────────────────────────────────────────
// Run All Generators
// ──────────────────────────────────────────────
function main() {
  console.log('\n🎨 FlowSphere Email Template — Asset Generator');
  console.log('================================================\n');

  // Ensure dirs exist
  [SVG_DIR, DS_DIR].forEach(d => {
    if (!fs.existsSync(d)) {
      fs.mkdirSync(d, { recursive: true });
    }
  });

  console.log('Generating SVG Assets...\n');
  generateHeroIllustration();
  generateFeatureIcons();
  generateAvatars();
  generateAppBadges();

  console.log('\nGenerating Design System SVGs...\n');
  generateColorPalette();
  generateTypographyScale();
  generateSpacingTokens();
  generateDesignSystemOverview();

  console.log('\n✅ All assets generated successfully!\n');
  console.log(`  SVG Assets : ${SVG_DIR}`);
  console.log(`  Design Sys : ${DS_DIR}`);
  console.log('\n================================================\n');
}

main();
