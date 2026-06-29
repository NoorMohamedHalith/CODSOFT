/**
 * FlowSphere — Figma-Ready SVG Generator
 * ========================================
 * Generates complete, high-fidelity SVG files for each email section
 * AND full-email SVGs (Desktop + Mobile) ready for Figma import.
 *
 * Figma Import: File → Import  OR  drag-and-drop the SVG file into Figma canvas.
 * Each SVG uses named groups so Figma creates proper layers automatically.
 *
 * Output:
 *   Figma/
 *     Email-Desktop-Full.svg      ← Full 640px desktop email (Figma-ready)
 *     Email-Mobile-Full.svg       ← Full 375px mobile email (Figma-ready)
 *     Section-01-Header.svg
 *     Section-02-Hero.svg
 *     Section-03-Features.svg
 *     Section-04-Special-Offer.svg
 *     Section-05-Testimonials.svg
 *     Section-06-Download-App.svg
 *     Section-07-Footer.svg
 *     Component-Buttons.svg
 *     Component-Feature-Card.svg
 *     Component-Testimonial-Card.svg
 *     Design-System-Colors.svg
 *     Design-System-Typography.svg
 */

const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, 'Figma');
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

// ─────────────────────────────────────────────────────────
// DESIGN TOKENS
// ─────────────────────────────────────────────────────────
const C = {
  primary:      '#6366F1',
  primaryDark:  '#4F46E5',
  primaryLight: '#EEF2FF',
  secondary:    '#8B5CF6',
  bg:           '#FFFFFF',
  surface:      '#F8FAFC',
  surface2:     '#F1F5F9',
  text:         '#111827',
  muted:        '#6B7280',
  border:       '#E5E7EB',
  success:      '#22C55E',
  successLight: '#DCFCE7',
  outerBg:      '#EAECF8',
  dark:         '#0F172A',
  amber:        '#F59E0B',
  purpleLight:  '#F5F3FF',
  purpleEde:    '#EDE9FE',
  greenEcf:     '#ECFDF5',
};

function write(filename, content) {
  const fp = path.join(OUT, filename);
  fs.writeFileSync(fp, content, 'utf8');
  console.log(`  ✓  ${filename}`);
}

// ─────────────────────────────────────────────────────────
// SVG WRAPPER — adds font embed + Figma metadata
// ─────────────────────────────────────────────────────────
function wrap(w, h, body, title = 'FlowSphere') {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}"
     fill="none" xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink">
  <title>${title}</title>
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&amp;display=swap');
      text { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
    </style>
    <!-- Brand gradient -->
    <linearGradient id="grad-brand" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%"   stop-color="${C.primary}"/>
      <stop offset="100%" stop-color="${C.secondary}"/>
    </linearGradient>
    <!-- Hero bg gradient -->
    <linearGradient id="grad-hero-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%"   stop-color="${C.primaryLight}"/>
      <stop offset="100%" stop-color="${C.purpleLight}"/>
    </linearGradient>
    <!-- White fade gradient for offer orbs -->
    <radialGradient id="orb1" cx="50%" cy="50%" r="50%">
      <stop offset="0%"   stop-color="rgba(255,255,255,0.12)"/>
      <stop offset="100%" stop-color="rgba(255,255,255,0)"/>
    </radialGradient>
    <!-- Drop shadows -->
    <filter id="shadow-card" x="-8%" y="-8%" width="116%" height="116%">
      <feDropShadow dx="0" dy="2" stdDeviation="8" flood-color="rgba(99,102,241,0.10)"/>
    </filter>
    <filter id="shadow-btn" x="-20%" y="-40%" width="140%" height="180%">
      <feDropShadow dx="0" dy="6" stdDeviation="12" flood-color="rgba(99,102,241,0.35)"/>
    </filter>
    <filter id="shadow-float" x="-15%" y="-15%" width="130%" height="130%">
      <feDropShadow dx="0" dy="8" stdDeviation="20" flood-color="rgba(99,102,241,0.18)"/>
    </filter>
    <filter id="shadow-sm" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="1" stdDeviation="3" flood-color="rgba(0,0,0,0.08)"/>
    </filter>
  </defs>
${body}
</svg>`;
}

// ─────────────────────────────────────────────────────────
// SHARED COMPONENTS (reusable SVG snippets)
// ─────────────────────────────────────────────────────────

// Logo mark + wordmark at position (x,y)
function logo(x, y, scale = 1) {
  const s = scale;
  return `
  <g id="Logo" transform="translate(${x},${y}) scale(${s})">
    <!-- Icon -->
    <rect width="36" height="36" rx="9" fill="url(#grad-brand)"/>
    <path d="M18 6L10 10V16C10 20.4183 13.5817 24 18 24C22.4183 24 26 20.4183 26 16V10L18 6Z" fill="white" fill-opacity="0.95"/>
    <path d="M15 16L17 18L21 14" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <!-- Wordmark -->
    <text x="44" y="22" font-size="17" font-weight="800" fill="${C.primary}" letter-spacing="-0.4">FlowSphere</text>
    <text x="44" y="22" font-size="17" font-weight="800" fill="url(#grad-brand)" letter-spacing="-0.4">FlowSphere</text>
  </g>`;
}

// Primary CTA button
function btnPrimary(x, y, w, h, label) {
  return `
  <g id="Button-Primary" transform="translate(${x},${y})" filter="url(#shadow-btn)">
    <rect width="${w}" height="${h}" rx="10" fill="url(#grad-brand)"/>
    <text x="${w/2}" y="${h/2+5}" text-anchor="middle" font-size="15" font-weight="600" fill="white">${label}</text>
  </g>`;
}

// Feature card at (x,y) with given icon bg, icon path, title, desc
function featureCard(x, y, w, h, iconBg, iconContent, title, desc1, desc2) {
  return `
  <g id="FeatureCard-${title.replace(/\s/g,'')}" transform="translate(${x},${y})" filter="url(#shadow-card)">
    <rect width="${w}" height="${h}" rx="14" fill="${C.surface}" stroke="${C.border}" stroke-width="1"/>
    <!-- Icon bg -->
    <rect x="${(w-52)/2}" y="20" width="52" height="52" rx="10" fill="${iconBg}"/>
    <!-- Icon -->
    <g transform="translate(${(w-52)/2+13},33)">${iconContent}</g>
    <!-- Title -->
    <text x="${w/2}" y="96" text-anchor="middle" font-size="13" font-weight="700" fill="${C.text}">${title}</text>
    <!-- Desc -->
    <text x="${w/2}" y="113" text-anchor="middle" font-size="10.5" fill="${C.muted}">${desc1}</text>
    <text x="${w/2}" y="127" text-anchor="middle" font-size="10.5" fill="${C.muted}">${desc2}</text>
  </g>`;
}

// Star rating row at (x,y)
function stars(x, y, count = 5) {
  return Array.from({length: count}, (_, i) =>
    `<path d="M${x + i*18} ${y} l2.7 5.5 6.1.9-4.4 4.3 1.0 6-5.4-2.8-5.4 2.8 1.0-6-4.4-4.3 6.1-.9z" fill="${C.amber}"/>`
  ).join('\n');
}

// ─────────────────────────────────────────────────────────
// 1. SECTION: HEADER (640 × 70)
// ─────────────────────────────────────────────────────────
function sectionHeader(w = 640) {
  return `
  <g id="Section-Header">
    <rect width="${w}" height="70" fill="${C.bg}" stroke="${C.border}" stroke-width="0" stroke-dasharray="0 0"/>
    <line x1="0" y1="69.5" x2="${w}" y2="69.5" stroke="${C.border}" stroke-width="1"/>
    ${logo(24, 17)}
    <!-- Nav links -->
    <g id="Nav">
      <text x="${w-158}" y="40" font-size="13" font-weight="500" fill="${C.muted}">Features</text>
      <text x="${w-103}" y="40" font-size="13" font-weight="500" fill="${C.muted}">Pricing</text>
      <text x="${w-55}"  y="40" font-size="13" font-weight="500" fill="${C.muted}">Contact</text>
    </g>
  </g>`;
}

// ─────────────────────────────────────────────────────────
// 2. SECTION: HERO (640 × 480)
// ─────────────────────────────────────────────────────────
function sectionHero(w = 640, yOff = 0) {
  return `
  <g id="Section-Hero" transform="translate(0,${yOff})">
    <!-- BG -->
    <rect width="${w}" height="480" fill="url(#grad-hero-bg)"/>
    <!-- Decorative orbs -->
    <circle cx="${w-60}" cy="60" r="120" fill="url(#orb1)"/>
    <circle cx="60" cy="420" r="90"  fill="url(#orb1)"/>

    <!-- Launch badge -->
    <g id="Hero-Badge" transform="translate(${w/2},48)" >
      <rect x="-100" y="-15" width="200" height="30" rx="15" fill="${C.bg}" stroke="${C.primaryLight}" stroke-width="1.5"/>
      <circle cx="-82" cy="0" r="5" fill="${C.success}"/>
      <text x="-72" y="5" font-size="11" font-weight="600" fill="${C.primary}">🚀  Product Launch — Now Live</text>
    </g>

    <!-- Title line 1 -->
    <text x="${w/2}" y="108" text-anchor="middle" font-size="34" font-weight="800" fill="${C.text}" letter-spacing="-0.8">Welcome to</text>
    <!-- Title line 2 — gradient -->
    <text x="${w/2}" y="150" text-anchor="middle" font-size="34" font-weight="800" fill="url(#grad-brand)" letter-spacing="-0.8">FlowSphere</text>

    <!-- Subtitle -->
    <text x="${w/2}" y="182" text-anchor="middle" font-size="15" font-weight="400" fill="${C.muted}">Organize your work smarter and achieve more every day.</text>
    <text x="${w/2}" y="200" text-anchor="middle" font-size="15" font-weight="400" fill="${C.muted}">The all-in-one productivity platform built for modern teams.</text>

    <!-- Dashboard Illustration -->
    <g id="Hero-Illustration" transform="translate(${(w-460)/2}, 220)" filter="url(#shadow-float)">
      <rect width="460" height="188" rx="14" fill="${C.surface}"/>
      <!-- Sidebar -->
      <rect width="112" height="188" rx="14" fill="${C.bg}"/>
      <rect x="10" y="12" width="92" height="32" rx="8" fill="${C.primaryLight}"/>
      <rect x="17" y="17" width="16" height="16" rx="5" fill="url(#grad-brand)"/>
      <rect x="38" y="21" width="48" height="7" rx="3" fill="${C.primary}"/>
      <!-- sidebar nav dots -->
      <circle cx="22" cy="64" r="4" fill="${C.primary}"/>
      <rect x="32" y="60" width="50" height="7" rx="3" fill="${C.primary}" opacity="0.6"/>
      <circle cx="22" cy="84" r="4" fill="${C.secondary}" opacity="0.5"/>
      <rect x="32" y="80" width="38" height="7" rx="3" fill="${C.muted}" opacity="0.35"/>
      <circle cx="22" cy="104" r="4" fill="${C.success}" opacity="0.7"/>
      <rect x="32" y="100" width="55" height="7" rx="3" fill="${C.muted}" opacity="0.35"/>
      <circle cx="22" cy="124" r="4" fill="${C.amber}" opacity="0.6"/>
      <rect x="32" y="120" width="42" height="7" rx="3" fill="${C.muted}" opacity="0.35"/>
      <!-- Main stats row -->
      <rect x="120" y="10" width="76" height="60" rx="10" fill="${C.bg}" stroke="${C.border}" stroke-width="1"/>
      <rect x="130" y="20" width="40" height="6" rx="3" fill="${C.muted}" opacity="0.3"/>
      <rect x="130" y="32" width="56" height="14" rx="4" fill="${C.primary}" opacity="0.85"/>
      <rect x="130" y="52" width="28" height="6" rx="3" fill="${C.success}" opacity="0.7"/>
      <rect x="204" y="10" width="76" height="60" rx="10" fill="${C.bg}" stroke="${C.border}" stroke-width="1"/>
      <rect x="214" y="20" width="50" height="6" rx="3" fill="${C.muted}" opacity="0.3"/>
      <rect x="214" y="32" width="42" height="14" rx="4" fill="${C.secondary}" opacity="0.8"/>
      <rect x="214" y="52" width="34" height="6" rx="3" fill="${C.success}" opacity="0.7"/>
      <rect x="288" y="10" width="76" height="60" rx="10" fill="${C.bg}" stroke="${C.border}" stroke-width="1"/>
      <rect x="298" y="20" width="56" height="6" rx="3" fill="${C.muted}" opacity="0.3"/>
      <rect x="298" y="32" width="36" height="14" rx="4" fill="${C.success}" opacity="0.8"/>
      <rect x="298" y="52" width="44" height="6" rx="3" fill="${C.muted}" opacity="0.3"/>
      <rect x="372" y="10" width="76" height="60" rx="10" fill="${C.primaryLight}" stroke="${C.primary}" stroke-width="1"/>
      <rect x="382" y="26" width="56" height="6" rx="3" fill="${C.primary}" opacity="0.5"/>
      <rect x="390" y="38" width="40" height="16" rx="5" fill="url(#grad-brand)"/>
      <!-- Task list -->
      <rect x="120" y="78" width="186" height="100" rx="10" fill="${C.bg}" stroke="${C.border}" stroke-width="1"/>
      <rect x="132" y="89" width="72" height="8" rx="4" fill="${C.text}" opacity="0.7"/>
      <rect x="132" y="107" width="12" height="12" rx="3" fill="${C.primary}"/>
      <rect x="150" y="109" width="100" height="7" rx="3" fill="${C.muted}" opacity="0.4"/>
      <rect x="132" y="126" width="12" height="12" rx="3" fill="${C.success}"/>
      <rect x="150" y="128" width="80" height="7" rx="3" fill="${C.muted}" opacity="0.4"/>
      <rect x="132" y="145" width="12" height="12" rx="3" fill="${C.amber}" opacity="0.8"/>
      <rect x="150" y="147" width="112" height="7" rx="3" fill="${C.muted}" opacity="0.4"/>
      <!-- Chart panel -->
      <rect x="314" y="78" width="134" height="100" rx="10" fill="${C.bg}" stroke="${C.border}" stroke-width="1"/>
      <rect x="326" y="89" width="64" height="8" rx="4" fill="${C.text}" opacity="0.7"/>
      <rect x="326" y="132" width="12" height="36" rx="3" fill="${C.primary}" opacity="0.25"/>
      <rect x="344" y="120" width="12" height="48" rx="3" fill="${C.primary}" opacity="0.45"/>
      <rect x="362" y="110" width="12" height="58" rx="3" fill="${C.primary}" opacity="0.65"/>
      <rect x="380" y="104" width="12" height="64" rx="3" fill="${C.primary}"/>
      <rect x="398" y="118" width="12" height="50" rx="3" fill="${C.secondary}" opacity="0.6"/>
      <polyline points="332,132 350,120 368,110 386,104 404,118" stroke="${C.success}" stroke-width="2" stroke-linecap="round" fill="none"/>
      <!-- Floating notification -->
      <g filter="url(#shadow-sm)">
        <rect x="190" y="108" width="136" height="46" rx="10" fill="${C.bg}" stroke="${C.border}" stroke-width="0.5"/>
        <circle cx="208" cy="131" r="10" fill="${C.successLight}"/>
        <path d="M203 131l3.5 3.5 7-7" stroke="${C.success}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="224" y="122" width="72" height="7" rx="3" fill="${C.text}" opacity="0.8"/>
        <rect x="224" y="134" width="90" height="6" rx="3" fill="${C.muted}" opacity="0.4"/>
      </g>
    </g>

    <!-- CTA Button -->
    ${btnPrimary((w-180)/2, 418, 180, 46, '→  Get Started Free')}
  </g>`;
}

// ─────────────────────────────────────────────────────────
// 3. SECTION: FEATURES (640 × 240)
// ─────────────────────────────────────────────────────────
function sectionFeatures(w = 640, yOff = 0) {
  const cardW = 176, cardH = 160, gap = 16;
  const totalW = 3 * cardW + 2 * gap;
  const startX = (w - totalW) / 2;

  const taskIcon = `<rect width="26" height="3" rx="1.5" fill="${C.primary}"/>
    <rect y="8" width="26" height="3" rx="1.5" fill="${C.primary}" opacity="0.6"/>
    <rect y="16" width="18" height="3" rx="1.5" fill="${C.primary}" opacity="0.35"/>
    <circle cx="24" cy="17" r="5" fill="${C.success}"/>
    <path d="M21.5 17l2 2 3-3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`;

  const teamIcon = `<circle cx="10" cy="8" r="5" fill="${C.secondary}"/>
    <circle cx="20" cy="8" r="5" fill="${C.secondary}" opacity="0.5"/>
    <path d="M1 26C1 21 5 18 10 18c1.7 0 3.3.5 4.5 1.3" stroke="${C.secondary}" stroke-width="2" stroke-linecap="round"/>
    <path d="M25 26C25 21 21 18 16 18c-1.7 0-3.3.5-4.5 1.3" stroke="${C.secondary}" stroke-width="2" stroke-linecap="round" opacity="0.6"/>`;

  const analyticsIcon = `<rect y="14" width="8" height="12" rx="2" fill="${C.success}" opacity="0.4"/>
    <rect x="10" y="10" width="8" height="16" rx="2" fill="${C.success}" opacity="0.65"/>
    <rect x="20" y="6" width="8" height="20" rx="2" fill="${C.success}"/>
    <polyline points="4,8 14,4 24,2" stroke="#16A34A" stroke-width="2" stroke-linecap="round" fill="none"/>
    <circle cx="4" cy="8" r="2" fill="#16A34A"/>
    <circle cx="14" cy="4" r="2" fill="#16A34A"/>
    <circle cx="24" cy="2" r="2" fill="#16A34A"/>`;

  return `
  <g id="Section-Features" transform="translate(0,${yOff})">
    <rect width="${w}" height="240" fill="${C.bg}"/>
    <!-- Eyebrow -->
    <text x="${w/2}" y="32" text-anchor="middle" font-size="10.5" font-weight="700" fill="${C.primary}" letter-spacing="1.2">EVERYTHING YOU NEED</text>
    <!-- Title -->
    <text x="${w/2}" y="58" text-anchor="middle" font-size="24" font-weight="700" fill="${C.text}" letter-spacing="-0.3">Powerful Features</text>
    <!-- Subtitle -->
    <text x="${w/2}" y="78" text-anchor="middle" font-size="13" fill="${C.muted}">Built for teams of all sizes to collaborate, track, and deliver.</text>

    <!-- Cards -->
    ${featureCard(startX,         96, cardW, cardH, C.primaryLight, taskIcon,     'Smart Task',   'AI-powered task', 'management.')}
    ${featureCard(startX+cardW+gap, 96, cardW, cardH, C.purpleLight,  teamIcon,     'Team Collab',  'Real-time collab', 'anywhere.')}
    ${featureCard(startX+2*(cardW+gap), 96, cardW, cardH, C.greenEcf, analyticsIcon,'Analytics',    'Deep productivity', 'insights.')}
  </g>`;
}

// ─────────────────────────────────────────────────────────
// 4. SECTION: SPECIAL OFFER (640 × 200) — with outer margin
// ─────────────────────────────────────────────────────────
function sectionOffer(w = 640, yOff = 0) {
  const mx = 24, innerW = w - 2*mx;
  return `
  <g id="Section-Special-Offer" transform="translate(0,${yOff})">
    <rect width="${w}" height="200" fill="${C.bg}"/>
    <!-- Offer card -->
    <rect x="${mx}" y="16" width="${innerW}" height="168" rx="20" fill="url(#grad-brand)"/>
    <!-- Decorative orbs -->
    <circle cx="${w-mx-40}" cy="40" r="100" fill="url(#orb1)"/>
    <circle cx="${mx+40}"   cy="185" r="80"  fill="url(#orb1)"/>

    <!-- Limited time badge -->
    <rect x="${w/2-74}" y="28" width="148" height="24" rx="12" fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.30)" stroke-width="1"/>
    <text x="${w/2}" y="44" text-anchor="middle" font-size="10.5" font-weight="700" fill="white" letter-spacing="0.3">✨  Limited Time Offer</text>

    <!-- 30 days big number -->
    <text x="${w/2}" y="100" text-anchor="middle" font-size="56" font-weight="900" fill="white" letter-spacing="-2" opacity="0.95">30</text>

    <!-- Label -->
    <text x="${w/2}" y="124" text-anchor="middle" font-size="20" font-weight="700" fill="white">Days Premium Free</text>

    <!-- Sub -->
    <text x="${w/2}" y="144" text-anchor="middle" font-size="12" fill="rgba(255,255,255,0.80)">No credit card required. Start your free trial today.</text>

    <!-- White CTA button -->
    <rect x="${w/2-92}" y="156" width="184" height="18" rx="0" fill="none"/>
    <g id="Offer-CTA" transform="translate(${w/2-90},152)">
      <rect width="180" height="30" rx="8" fill="${C.bg}"/>
      <text x="90" y="20" text-anchor="middle" font-size="13" font-weight="700" fill="${C.primary}">⭐  Claim Now — It's Free</text>
    </g>
  </g>`;
}

// ─────────────────────────────────────────────────────────
// 5. SECTION: TESTIMONIALS (640 × 220)
// ─────────────────────────────────────────────────────────
function sectionTestimonials(w = 640, yOff = 0) {
  const cardW = (w - 24*3) / 2, cardH = 148;
  const x1 = 24, x2 = 24 + cardW + 24;

  function tCard(x, avatarFill, avatarCircle, quote, name, role) {
    return `
    <g id="Testimonial-${name.replace(' ','-')}" transform="translate(${x},72)" filter="url(#shadow-card)">
      <rect width="${cardW}" height="${cardH}" rx="14" fill="${C.bg}" stroke="${C.border}" stroke-width="1"/>
      <!-- Big quote mark -->
      <text x="${cardW-18}" y="42" font-size="52" fill="${C.primaryLight}" font-weight="900">"</text>
      <!-- Stars -->
      ${[0,1,2,3,4].map(i=>`<path d="M${14+i*17} 18 l2.2 4.5 5 .7-3.6 3.5.85 5-4.45-2.3-4.45 2.3.85-5-3.6-3.5 5-.7z" fill="${C.amber}"/>`).join('')}
      <!-- Quote text -->
      <text x="14" y="56" font-size="10.5" fill="${C.text}" font-style="italic">${quote.substring(0,40)}</text>
      <text x="14" y="70" font-size="10.5" fill="${C.text}" font-style="italic">${quote.substring(40,80)}</text>
      <text x="14" y="84" font-size="10.5" fill="${C.text}" font-style="italic">${quote.substring(80)}</text>
      <!-- Author -->
      <circle cx="28" cy="122" r="16" fill="${avatarFill}"/>
      <circle cx="28" cy="118" r="6"  fill="${avatarCircle}"/>
      <path d="M14 136C14 130.477 20.268 127 28 127s14 3.477 14 9" fill="${avatarCircle}" opacity="0.5"/>
      <text x="50" y="117" font-size="12" font-weight="600" fill="${C.text}">${name}</text>
      <text x="50" y="131" font-size="10.5" fill="${C.muted}">${role}</text>
    </g>`;
  }

  return `
  <g id="Section-Testimonials" transform="translate(0,${yOff})">
    <rect width="${w}" height="248" fill="${C.surface}"/>
    <text x="${w/2}" y="30" text-anchor="middle" font-size="10.5" font-weight="700" fill="${C.primary}" letter-spacing="1.2">WHAT PEOPLE SAY</text>
    <text x="${w/2}" y="54" text-anchor="middle" font-size="22" font-weight="700" fill="${C.text}">Loved by Teams</text>
    ${tCard(x1, C.primaryLight, C.primary,
      `"FlowSphere completely transformed how our remote team operates. We ship 40% faster now."`,
      'Sarah Chen', 'Engineering Lead @ Nexus Labs')}
    ${tCard(x2, C.purpleLight, C.secondary,
      `"We replaced 3 different tools with FlowSphere. Setup took 10 minutes. Incredible product!"`,
      'Marcus Rivera', 'Product Manager @ Velocity Inc')}
  </g>`;
}

// ─────────────────────────────────────────────────────────
// 6. SECTION: DOWNLOAD APP (640 × 160)
// ─────────────────────────────────────────────────────────
function sectionDownload(w = 640, yOff = 0) {
  const bW = 168, bH = 48;
  const gap = 16;
  const x1 = (w - 2*bW - gap) / 2;
  const x2 = x1 + bW + gap;
  const by = 100;

  function badge(x, label1, label2) {
    return `
    <g transform="translate(${x},${by})">
      <rect width="${bW}" height="${bH}" rx="10" fill="${C.dark}"/>
      <rect width="${bW}" height="${bH}" rx="10" fill="none" stroke="rgba(255,255,255,0.10)" stroke-width="1"/>
      <path d="M24 16L34 24L24 32V16Z" fill="white"/>
      <text x="48" y="25" font-size="9.5" fill="rgba(255,255,255,0.65)">${label1}</text>
      <text x="48" y="40" font-size="16" font-weight="700" fill="white">${label2}</text>
    </g>`;
  }

  return `
  <g id="Section-Download-App" transform="translate(0,${yOff})">
    <rect width="${w}" height="160" fill="${C.bg}"/>
    <text x="${w/2}" y="30" text-anchor="middle" font-size="10.5" font-weight="700" fill="${C.primary}" letter-spacing="1.2">GET THE APP</text>
    <text x="${w/2}" y="54" text-anchor="middle" font-size="22" font-weight="700" fill="${C.text}">Work From Anywhere</text>
    <text x="${w/2}" y="74" text-anchor="middle" font-size="13" fill="${C.muted}">Available for iOS and Android.</text>
    ${badge(x1, 'GET IT ON',         'Google Play')}
    ${badge(x2, 'DOWNLOAD ON THE',   'App Store')}
  </g>`;
}

// ─────────────────────────────────────────────────────────
// 7. SECTION: FOOTER (640 × 180)
// ─────────────────────────────────────────────────────────
function sectionFooter(w = 640, yOff = 0) {
  const socialSize = 32, socialGap = 10;
  const socialCount = 4;
  const socialTotalW = socialCount * socialSize + (socialCount-1) * socialGap;
  const sx = (w - socialTotalW) / 2;

  const socialIcons = [
    { label: 'Twitter', path: 'M4 2h3l-7.3 8.3 8.6 11.4H5l-5.3-6.9L-1 2H2l4.8 6.3z' },
    { label: 'LinkedIn', path: 'M1 1h2.7v9H1zm1.35-1.5a1.35 1.35 0 100-2.7 1.35 1.35 0 000 2.7zm4.15 1.5h2.6v1.2h.04C9.5 1.5 10.4.8 11.8.8c2.8 0 3.2 1.8 3.2 4.2V10H12.4V5.5c0-1.1-.5-2.3-1.8-2.3-1.6 0-2 1.3-2 2.3V10H6z' },
    { label: 'GitHub', path: 'M8 0C3.6 0 0 3.6 0 8c0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4v-1.4c-2.2.5-2.7-1-2.7-1-.4-1-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.8.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.2-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.5 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.2 0 3.1-1.9 3.8-3.7 4 .3.3.6.8.6 1.6v2.4c0 .2.1.5.6.4C13.7 14.5 16 11.5 16 8c0-4.4-3.6-8-8-8z' },
    { label: 'Instagram', path: 'M8 0C5.8 0 5.6 0 4.7 0 3.9 0 3.3.2 2.9.3 2.4.5 2 .8 1.6 1.2 1.2 1.6.9 2 .7 2.5.6 3 .5 3.6.5 4.4c0 .9 0 1.2 0 3.6s0 2.7 0 3.6c0 .8.1 1.4.3 1.9.1.5.4.9.8 1.3.4.4.8.7 1.3.8.5.2 1.1.3 1.9.3.9 0 1.2 0 3.6 0s2.7 0 3.6 0c.8 0 1.4-.1 1.9-.3.5-.1.9-.4 1.3-.8.4-.4.7-.8.8-1.3.2-.5.3-1.1.3-1.9 0-.9 0-1.2 0-3.6s0-2.7 0-3.6c0-.8-.1-1.4-.3-1.9-.1-.5-.4-.9-.8-1.3C14.6.9 14.2.6 13.7.5 13.2.3 12.6.2 11.8.2 10.9.2 10.7.2 8.3.2 5.9.2 5.7.2 4.8.2c0 0-.7 0 0 0zM8 2a6 6 0 100 12A6 6 0 008 2zm0 2a4 4 0 110 8 4 4 0 010-8zm6.4-2.2a1.4 1.4 0 100 2.8 1.4 1.4 0 000-2.8z' },
  ];

  return `
  <g id="Section-Footer" transform="translate(0,${yOff})">
    <rect width="${w}" height="180" rx="0" fill="${C.dark}"/>

    <!-- Footer Logo -->
    <g transform="translate(${w/2-75},20)">
      <rect x="0" y="0" width="28" height="28" rx="7" fill="url(#grad-brand)"/>
      <path d="M14 4L8 7v5c0 3.3 2.7 6 6 6s6-2.7 6-6V7l-6-3z" fill="white" fill-opacity="0.9"/>
      <text x="36" y="20" font-size="15" font-weight="700" fill="white">FlowSphere</text>
    </g>

    <!-- Social icons row -->
    ${socialIcons.map((ic, i) => `
    <g id="Social-${ic.label}" transform="translate(${sx + i*(socialSize+socialGap)},60)">
      <rect width="${socialSize}" height="${socialSize}" rx="8" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
      <g transform="translate(8,8) scale(1)" fill="rgba(255,255,255,0.75)">
        <path d="${ic.path}"/>
      </g>
    </g>`).join('')}

    <!-- Contact -->
    <text x="${w/2}" y="114" text-anchor="middle" font-size="12" fill="rgba(255,255,255,0.55)">hello@flowsphere.io  ·  flowsphere.io</text>

    <!-- Footer links -->
    <text x="${w/2-110}" y="135" font-size="11" fill="rgba(255,255,255,0.35)">Privacy Policy</text>
    <text x="${w/2-18}"  y="135" font-size="11" fill="rgba(255,255,255,0.25)">·</text>
    <text x="${w/2-10}"  y="135" font-size="11" fill="rgba(255,255,255,0.35)">Terms of Service</text>
    <text x="${w/2+85}"  y="135" font-size="11" fill="rgba(255,255,255,0.25)">·</text>
    <text x="${w/2+95}"  y="135" font-size="11" fill="rgba(255,255,255,0.35)">Unsubscribe</text>

    <!-- Copyright -->
    <text x="${w/2}" y="158" text-anchor="middle" font-size="10" fill="rgba(255,255,255,0.22)">© 2025 FlowSphere, Inc. All rights reserved.</text>
    <text x="${w/2}" y="172" text-anchor="middle" font-size="10" fill="rgba(255,255,255,0.18)">CODSOFT UI/UX Internship · Task 2 · Designed by Noor Mohamed Halith</text>
  </g>`;
}

// ─────────────────────────────────────────────────────────
// GENERATE INDIVIDUAL SECTION SVGs
// ─────────────────────────────────────────────────────────
function generateSectionSVGs() {
  const W = 640;

  write('Section-01-Header.svg',
    wrap(W, 70, sectionHeader(W), 'FlowSphere — Header'));

  write('Section-02-Hero.svg',
    wrap(W, 480, sectionHero(W, 0), 'FlowSphere — Hero'));

  write('Section-03-Features.svg',
    wrap(W, 240, sectionFeatures(W, 0), 'FlowSphere — Features'));

  write('Section-04-Special-Offer.svg',
    wrap(W, 200, sectionOffer(W, 0), 'FlowSphere — Special Offer'));

  write('Section-05-Testimonials.svg',
    wrap(W, 248, sectionTestimonials(W, 0), 'FlowSphere — Testimonials'));

  write('Section-06-Download-App.svg',
    wrap(W, 160, sectionDownload(W, 0), 'FlowSphere — Download App'));

  write('Section-07-Footer.svg',
    wrap(W, 180, sectionFooter(W, 0), 'FlowSphere — Footer'));
}

// ─────────────────────────────────────────────────────────
// GENERATE FULL EMAIL SVG — DESKTOP (640px)
// ─────────────────────────────────────────────────────────
function generateDesktopFullSVG() {
  const W = 640;
  // Heights: header=70, hero=480, features=240, divider=1, offer=200, testimonials=248, divider=1, download=160, footer=180
  const sections = [70, 480, 240, 1, 200, 248, 1, 160, 180];
  const totalH = sections.reduce((a, b) => a + b, 0) + 80; // +80 for outer padding

  let y = 40; // top padding
  const body = `
  <!-- Outer background -->
  <rect width="${W+80}" height="${totalH}" fill="${C.outerBg}"/>

  <!-- Email container shadow -->
  <g filter="url(#shadow-float)" transform="translate(40,40)">
    <rect width="${W}" height="${totalH-80}" rx="20" fill="${C.bg}"/>
  </g>

  <!-- Email container clip -->
  <g transform="translate(40,40)">
    <clipPath id="email-clip"><rect width="${W}" height="${totalH-80}" rx="20"/></clipPath>
    <g clip-path="url(#email-clip)">
      ${sectionHeader(W)}
      ${sectionHero(W, 70)}
      ${sectionFeatures(W, 550)}
      <rect y="790" width="${W}" height="1" fill="${C.border}"/>
      ${sectionOffer(W, 791)}
      ${sectionTestimonials(W, 991)}
      <rect y="1239" width="${W}" height="1" fill="${C.border}"/>
      ${sectionDownload(W, 1240)}
      ${sectionFooter(W, 1400)}
    </g>
  </g>
  `;

  write('Email-Desktop-Full.svg',
    wrap(W+80, totalH, body, 'FlowSphere — Full Desktop Email (640px)'));
}

// ─────────────────────────────────────────────────────────
// GENERATE FULL EMAIL SVG — MOBILE (375px)
// ─────────────────────────────────────────────────────────
function generateMobileFullSVG() {
  const W = 375;

  function mobileHero(yOff) {
    return `
    <g id="M-Hero" transform="translate(0,${yOff})">
      <rect width="${W}" height="400" fill="url(#grad-hero-bg)"/>
      <circle cx="${W-30}" cy="30" r="80" fill="url(#orb1)"/>
      <rect x="${(W-140)/2}" y="18" width="140" height="24" rx="12" fill="${C.bg}" stroke="${C.primaryLight}" stroke-width="1"/>
      <circle cx="${(W-140)/2+18}" cy="30" r="4" fill="${C.success}"/>
      <text x="${(W-140)/2+30}" y="34" font-size="10" font-weight="600" fill="${C.primary}">🚀 Product Launch</text>
      <text x="${W/2}" y="78" text-anchor="middle" font-size="24" font-weight="800" fill="${C.text}" letter-spacing="-0.5">Welcome to</text>
      <text x="${W/2}" y="108" text-anchor="middle" font-size="24" font-weight="800" fill="url(#grad-brand)" letter-spacing="-0.5">FlowSphere</text>
      <text x="${W/2}" y="130" text-anchor="middle" font-size="13" fill="${C.muted}">Organize your work smarter</text>
      <text x="${W/2}" y="146" text-anchor="middle" font-size="13" fill="${C.muted}">and achieve more every day.</text>
      <!-- Mini dashboard illustration -->
      <g transform="translate(${(W-280)/2},158)">
        <rect width="280" height="170" rx="12" fill="${C.surface}"/>
        <rect width="90" height="170" rx="12" fill="${C.bg}"/>
        <rect x="8" y="10" width="74" height="26" rx="7" fill="${C.primaryLight}"/>
        <rect x="14" y="14" width="13" height="13" rx="4" fill="url(#grad-brand)"/>
        <rect x="32" y="17" width="40" height="6" rx="3" fill="${C.primary}"/>
        <circle cx="18" cy="52" r="3.5" fill="${C.primary}"/>
        <rect x="27" y="48" width="40" height="6" rx="3" fill="${C.primary}" opacity="0.5"/>
        <circle cx="18" cy="68" r="3.5" fill="${C.secondary}" opacity="0.5"/>
        <rect x="27" y="64" width="32" height="6" rx="3" fill="${C.muted}" opacity="0.35"/>
        <circle cx="18" cy="84" r="3.5" fill="${C.success}" opacity="0.7"/>
        <rect x="27" y="80" width="45" height="6" rx="3" fill="${C.muted}" opacity="0.35"/>
        <!-- Stats on right -->
        <rect x="98" y="10" width="84" height="52" rx="8" fill="${C.bg}" stroke="${C.border}" stroke-width="1"/>
        <rect x="108" y="20" width="40" height="5" rx="2.5" fill="${C.muted}" opacity="0.3"/>
        <rect x="108" y="30" width="58" height="12" rx="3" fill="${C.primary}" opacity="0.8"/>
        <rect x="108" y="48" width="30" height="5" rx="2.5" fill="${C.success}" opacity="0.6"/>
        <rect x="190" y="10" width="82" height="52" rx="8" fill="${C.bg}" stroke="${C.border}" stroke-width="1"/>
        <rect x="200" y="20" width="50" height="5" rx="2.5" fill="${C.muted}" opacity="0.3"/>
        <rect x="200" y="30" width="44" height="12" rx="3" fill="${C.secondary}" opacity="0.7"/>
        <rect x="200" y="48" width="36" height="5" rx="2.5" fill="${C.success}" opacity="0.6"/>
        <!-- Task list -->
        <rect x="98" y="70" width="174" height="90" rx="8" fill="${C.bg}" stroke="${C.border}" stroke-width="1"/>
        <rect x="108" y="80" width="60" height="7" rx="3" fill="${C.text}" opacity="0.7"/>
        <rect x="108" y="96" width="10" height="10" rx="3" fill="${C.primary}"/>
        <rect x="124" y="98" width="100" height="6" rx="3" fill="${C.muted}" opacity="0.4"/>
        <rect x="108" y="114" width="10" height="10" rx="3" fill="${C.success}"/>
        <rect x="124" y="116" width="80" height="6" rx="3" fill="${C.muted}" opacity="0.4"/>
        <rect x="108" y="132" width="10" height="10" rx="3" fill="${C.amber}" opacity="0.8"/>
        <rect x="124" y="134" width="110" height="6" rx="3" fill="${C.muted}" opacity="0.4"/>
      </g>
      <!-- CTA -->
      <g transform="translate(${(W-160)/2},342)" filter="url(#shadow-btn)">
        <rect width="160" height="42" rx="10" fill="url(#grad-brand)"/>
        <text x="80" y="26" text-anchor="middle" font-size="13.5" font-weight="600" fill="white">→ Get Started Free</text>
      </g>
    </g>`;
  }

  function mobileFeatures(yOff) {
    const cards = [
      { color: C.primaryLight, icon: C.primary,    title: 'Smart Task Management',   desc: 'AI-powered task management.' },
      { color: C.purpleLight,  icon: C.secondary,  title: 'Team Collaboration',       desc: 'Real-time collaboration.' },
      { color: C.greenEcf,     icon: C.success,    title: 'Productivity Analytics',  desc: 'Deep insights & reports.' },
    ];
    return `
    <g id="M-Features" transform="translate(0,${yOff})">
      <rect width="${W}" height="${16 + cards.length * 76}" fill="${C.bg}"/>
      <text x="${W/2}" y="26" text-anchor="middle" font-size="10" font-weight="700" fill="${C.primary}" letter-spacing="1.1">EVERYTHING YOU NEED</text>
      ${cards.map((c,i)=>`
      <g transform="translate(16,${38 + i*76})">
        <rect width="${W-32}" height="64" rx="12" fill="${C.surface}" stroke="${C.border}" stroke-width="1"/>
        <rect x="12" y="12" width="40" height="40" rx="9" fill="${c.color}"/>
        <rect x="20" y="26" width="24" height="4" rx="2" fill="${c.icon}"/>
        <rect x="20" y="34" width="16" height="4" rx="2" fill="${c.icon}" opacity="0.5"/>
        <text x="68" y="30" font-size="12.5" font-weight="700" fill="${C.text}">${c.title}</text>
        <text x="68" y="46" font-size="11" fill="${C.muted}">${c.desc}</text>
      </g>`).join('')}
    </g>`;
  }

  function mobileOffer(yOff) {
    return `
    <g id="M-Offer" transform="translate(0,${yOff})">
      <rect width="${W}" height="176" fill="${C.bg}"/>
      <rect x="14" y="12" width="${W-28}" height="152" rx="18" fill="url(#grad-brand)"/>
      <circle cx="${W-14-30}" cy="36" r="80" fill="url(#orb1)"/>
      <rect x="${W/2-62}" y="24" width="124" height="22" rx="11" fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.28)" stroke-width="1"/>
      <text x="${W/2}" y="39" text-anchor="middle" font-size="10" font-weight="700" fill="white" letter-spacing="0.3">✨ Limited Time Offer</text>
      <text x="${W/2}" y="85" text-anchor="middle" font-size="48" font-weight="900" fill="white" letter-spacing="-2">30</text>
      <text x="${W/2}" y="110" text-anchor="middle" font-size="18" font-weight="700" fill="white">Days Premium Free</text>
      <text x="${W/2}" y="128" text-anchor="middle" font-size="11" fill="rgba(255,255,255,0.75)">No credit card required.</text>
      <g transform="translate(${W/2-80},138)">
        <rect width="160" height="26" rx="7" fill="${C.bg}"/>
        <text x="80" y="17" text-anchor="middle" font-size="12" font-weight="700" fill="${C.primary}">Claim Now — Free</text>
      </g>
    </g>`;
  }

  function mobileTestimonials(yOff) {
    return `
    <g id="M-Testimonials" transform="translate(0,${yOff})">
      <rect width="${W}" height="316" fill="${C.surface}"/>
      <text x="${W/2}" y="26" text-anchor="middle" font-size="10" font-weight="700" fill="${C.primary}" letter-spacing="1.1">WHAT PEOPLE SAY</text>
      <text x="${W/2}" y="48" text-anchor="middle" font-size="20" font-weight="700" fill="${C.text}">Loved by Teams</text>
      <!-- Card 1 -->
      <g transform="translate(16,60)">
        <rect width="${W-32}" height="114" rx="12" fill="${C.bg}" stroke="${C.border}" stroke-width="1"/>
        ${[0,1,2,3,4].map(i=>`<path d="M${14+i*15} 14l1.9 3.8 4.2.6-3 3 .7 4.2-3.8-2-3.8 2 .7-4.2-3-3 4.2-.6z" fill="${C.amber}"/>`).join('')}
        <text x="14" y="50" font-size="10.5" fill="${C.text}" font-style="italic">"FlowSphere transformed how our remote</text>
        <text x="14" y="63" font-size="10.5" fill="${C.text}" font-style="italic">team operates. We ship 40% faster now."</text>
        <circle cx="28" cy="92" r="12" fill="${C.primaryLight}"/>
        <circle cx="28" cy="88" r="5" fill="${C.primary}"/>
        <text x="46" y="88" font-size="11" font-weight="600" fill="${C.text}">Sarah Chen</text>
        <text x="46" y="100" font-size="10" fill="${C.muted}">Engineering Lead @ Nexus Labs</text>
      </g>
      <!-- Card 2 -->
      <g transform="translate(16,184)">
        <rect width="${W-32}" height="114" rx="12" fill="${C.bg}" stroke="${C.border}" stroke-width="1"/>
        ${[0,1,2,3,4].map(i=>`<path d="M${14+i*15} 14l1.9 3.8 4.2.6-3 3 .7 4.2-3.8-2-3.8 2 .7-4.2-3-3 4.2-.6z" fill="${C.amber}"/>`).join('')}
        <text x="14" y="50" font-size="10.5" fill="${C.text}" font-style="italic">"We replaced 3 different tools with</text>
        <text x="14" y="63" font-size="10.5" fill="${C.text}" font-style="italic">FlowSphere. Setup took 10 minutes!"</text>
        <circle cx="28" cy="92" r="12" fill="${C.purpleLight}"/>
        <circle cx="28" cy="88" r="5" fill="${C.secondary}"/>
        <text x="46" y="88" font-size="11" font-weight="600" fill="${C.text}">Marcus Rivera</text>
        <text x="46" y="100" font-size="10" fill="${C.muted}">Product Manager @ Velocity Inc</text>
      </g>
    </g>`;
  }

  function mobileDownload(yOff) {
    return `
    <g id="M-Download" transform="translate(0,${yOff})">
      <rect width="${W}" height="186" fill="${C.bg}"/>
      <text x="${W/2}" y="28" text-anchor="middle" font-size="10" font-weight="700" fill="${C.primary}" letter-spacing="1.1">GET THE APP</text>
      <text x="${W/2}" y="52" text-anchor="middle" font-size="20" font-weight="700" fill="${C.text}">Work From Anywhere</text>
      <text x="${W/2}" y="72" text-anchor="middle" font-size="12" fill="${C.muted}">Available for iOS and Android.</text>
      <!-- Stacked badges -->
      <g transform="translate(${(W-168)/2},86)">
        <rect width="168" height="42" rx="9" fill="${C.dark}"/>
        <path d="M20 13L28 21L20 29V13Z" fill="white"/>
        <text x="40" y="24" font-size="8.5" fill="rgba(255,255,255,0.65)">GET IT ON</text>
        <text x="40" y="35" font-size="14" font-weight="700" fill="white">Google Play</text>
      </g>
      <g transform="translate(${(W-168)/2},136)">
        <rect width="168" height="42" rx="9" fill="${C.dark}"/>
        <path d="M20 13L28 21L20 29V13Z" fill="white"/>
        <text x="40" y="24" font-size="8.5" fill="rgba(255,255,255,0.65)">DOWNLOAD ON THE</text>
        <text x="40" y="35" font-size="14" font-weight="700" fill="white">App Store</text>
      </g>
    </g>`;
  }

  function mobileFooter(yOff) {
    const sx = (W - (4*30 + 3*10)) / 2;
    return `
    <g id="M-Footer" transform="translate(0,${yOff})">
      <rect width="${W}" height="160" fill="${C.dark}"/>
      <g transform="translate(${W/2-65},14)">
        <rect width="24" height="24" rx="6" fill="url(#grad-brand)"/>
        <text x="30" y="18" font-size="14" font-weight="700" fill="white">FlowSphere</text>
      </g>
      ${[0,1,2,3].map(i=>`
      <g transform="translate(${sx+i*40},50)">
        <rect width="30" height="30" rx="7" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
        <circle cx="15" cy="15" r="5" fill="rgba(255,255,255,0.5)"/>
      </g>`).join('')}
      <text x="${W/2}" y="98" text-anchor="middle" font-size="11" fill="rgba(255,255,255,0.50)">hello@flowsphere.io · flowsphere.io</text>
      <text x="${W/2}" y="116" text-anchor="middle" font-size="10" fill="rgba(255,255,255,0.30)">Privacy · Terms · Unsubscribe</text>
      <text x="${W/2}" y="136" text-anchor="middle" font-size="9.5" fill="rgba(255,255,255,0.18)">© 2025 FlowSphere, Inc. All rights reserved.</text>
      <text x="${W/2}" y="150" text-anchor="middle" font-size="9" fill="rgba(255,255,255,0.14)">CODSOFT UI/UX Task 2 · Noor Mohamed Halith</text>
    </g>`;
  }

  // Heights: header=56, hero=400, features=268, offer=176, testimonials=316, download=186, footer=160
  const heights = [56, 400, 268, 176, 316, 186, 160];
  const totalH  = heights.reduce((a,b)=>a+b,0) + 80;
  let ys = [0];
  heights.forEach((h,i) => ys.push(ys[i] + h));

  const body = `
  <rect width="${W+40}" height="${totalH}" fill="${C.outerBg}"/>
  <g filter="url(#shadow-float)" transform="translate(20,40)">
    <rect width="${W}" height="${totalH-80}" rx="0" fill="${C.bg}"/>
  </g>
  <g transform="translate(20,40)">
    <clipPath id="email-clip-m"><rect width="${W}" height="${totalH-80}"/></clipPath>
    <g clip-path="url(#email-clip-m)">
      <!-- Mobile header (simplified) -->
      <rect width="${W}" height="56" fill="${C.bg}"/>
      <line x1="0" y1="55.5" x2="${W}" y2="55.5" stroke="${C.border}" stroke-width="1"/>
      <rect x="12" y="12" width="28" height="28" rx="7" fill="url(#grad-brand)"/>
      <path d="M26 14l-6 3v5a8 8 0 0012 0v-5l-6-3z" fill="white" fill-opacity="0.9"/>
      <text x="46" y="31" font-size="15" font-weight="800" fill="url(#grad-brand)">FlowSphere</text>
      <text x="${W-78}" y="31" font-size="10.5" font-weight="500" fill="${C.muted}">Features</text>
      <text x="${W-35}" y="31" font-size="10.5" font-weight="500" fill="${C.muted}">Menu</text>

      ${mobileHero(56)}
      ${mobileFeatures(456)}
      ${mobileOffer(724)}
      ${mobileTestimonials(900)}
      ${mobileDownload(1216)}
      ${mobileFooter(1402)}
    </g>
  </g>`;

  write('Email-Mobile-Full.svg',
    wrap(W+40, totalH, body, 'FlowSphere — Full Mobile Email (375px)'));
}

// ─────────────────────────────────────────────────────────
// COMPONENT SHEET: Buttons
// ─────────────────────────────────────────────────────────
function generateComponentButtons() {
  const body = `
  <rect width="700" height="200" fill="${C.surface}"/>
  <!-- Header -->
  <rect width="700" height="50" fill="url(#grad-brand)"/>
  <text x="24" y="32" font-size="16" font-weight="700" fill="white">FlowSphere — Button Components</text>
  <text x="570" y="32" font-size="11" fill="rgba(255,255,255,0.65)">CODSOFT Task 2</text>

  <!-- Labels -->
  <text x="90"  y="76" text-anchor="middle" font-size="10" fill="${C.muted}" font-weight="600">PRIMARY</text>
  <text x="262" y="76" text-anchor="middle" font-size="10" fill="${C.muted}" font-weight="600">SECONDARY</text>
  <text x="426" y="76" text-anchor="middle" font-size="10" fill="${C.muted}" font-weight="600">OFFER (on dark)</text>
  <text x="590" y="76" text-anchor="middle" font-size="10" fill="${C.muted}" font-weight="600">GHOST</text>

  <!-- Primary -->
  <g transform="translate(24,84)" filter="url(#shadow-btn)">
    <rect width="132" height="46" rx="10" fill="url(#grad-brand)"/>
    <text x="66" y="28" text-anchor="middle" font-size="14" font-weight="600" fill="white">→ Get Started</text>
  </g>

  <!-- Secondary -->
  <g transform="translate(196,84)">
    <rect width="132" height="46" rx="10" fill="${C.bg}" stroke="${C.primary}" stroke-width="1.5"/>
    <text x="66" y="28" text-anchor="middle" font-size="14" font-weight="600" fill="${C.primary}">Learn More</text>
  </g>

  <!-- Offer on dark -->
  <g transform="translate(360,80)">
    <rect width="132" height="54" rx="12" fill="url(#grad-brand)"/>
    <rect x="8" y="8" width="116" height="38" rx="8" fill="${C.bg}"/>
    <text x="66" y="32" text-anchor="middle" font-size="13" font-weight="700" fill="${C.primary}">Claim Now</text>
  </g>

  <!-- Ghost -->
  <g transform="translate(524,84)">
    <rect width="132" height="46" rx="10" fill="transparent" stroke="${C.border}" stroke-width="1.5"/>
    <text x="66" y="28" text-anchor="middle" font-size="14" font-weight="500" fill="${C.muted}">Cancel</text>
  </g>

  <!-- State labels -->
  <text x="24"  y="148" font-size="9.5" fill="${C.muted}">Default state</text>
  <text x="196" y="148" font-size="9.5" fill="${C.muted}">Default state</text>
  <text x="360" y="148" font-size="9.5" fill="${C.muted}">Dark bg context</text>
  <text x="524" y="148" font-size="9.5" fill="${C.muted}">Default state</text>

  <!-- Radius / specs -->
  <text x="24" y="170" font-size="10" fill="${C.muted}">radius: 10px · height: 46px · Inter 600</text>
  <text x="360" y="170" font-size="10" fill="${C.muted}">Gradient: #6366F1→#8B5CF6 · shadow: 0 6px 20px</text>
  `;
  write('Component-Buttons.svg', wrap(700, 200, body, 'FlowSphere — Buttons'));
}

// ─────────────────────────────────────────────────────────
// STANDALONE INTERACTION FRAMES
// ─────────────────────────────────────────────────────────
function generateInteractionFrames() {
  // 1. Success Popup Frame
  const successBody = `
  <rect width="440" height="320" rx="16" fill="${C.bg}" stroke="${C.border}" stroke-width="1.5"/>
  <g transform="translate(192, 40)">
    <circle cx="28" cy="28" r="28" fill="${C.successLight}"/>
    <path d="M20 28l5 5 11-11" stroke="${C.success}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  </g>
  <text x="220" y="136" text-anchor="middle" font-size="18" font-weight="800" fill="${C.text}">Thank You!</text>
  <text x="220" y="166" text-anchor="middle" font-size="13" fill="${C.muted}">Your free trial has been activated.</text>
  
  <g transform="translate(24, 210)">
    <rect width="392" height="46" rx="8" fill="url(#grad-brand)"/>
    <text x="196" y="27" text-anchor="middle" font-size="13" font-weight="700" fill="white">Continue</text>
  </g>
  
  <!-- Close Button X -->
  <g transform="translate(396, 16)">
    <circle cx="14" cy="14" r="14" fill="${C.surface}" stroke="${C.border}" stroke-width="1"/>
    <path d="M9 9l10 10M19 9L9 19" stroke="${C.muted}" stroke-width="1.5" stroke-linecap="round"/>
  </g>
  `;
  write('Frame-Success-Popup.svg', wrap(440, 320, successBody, 'FlowSphere — Success Popup'));

  // 2. Limited Offer Popup Frame
  const offerBody = `
  <rect width="440" height="420" rx="16" fill="${C.bg}" stroke="${C.border}" stroke-width="1.5"/>
  <rect width="440" height="80" rx="16 16 0 0" fill="url(#grad-brand)"/>
  <rect x="145" y="16" width="150" height="20" rx="10" fill="rgba(255,255,255,0.2)"/>
  <text x="220" y="30" text-anchor="middle" font-size="11" font-weight="700" fill="white" letter-spacing="0.5">PROMO ACTIVATED</text>
  <text x="220" y="58" text-anchor="middle" font-size="20" font-weight="800" fill="white">30 Days Premium Free</text>
  
  <text x="24" y="116" font-size="12" fill="${C.muted}">Congratulations! You have unlocked unlimited access to FlowSphere Pro for 30 days. No credit card required.</text>
  
  <g transform="translate(24, 150)">
    <rect width="392" height="110" rx="10" fill="${C.surface}" stroke="${C.border}" stroke-width="1"/>
    <text x="16" y="26" font-size="11" font-weight="700" fill="${C.primary}" letter-spacing="0.5">BENEFITS INCLUDE:</text>
    <text x="16" y="52" font-size="12" fill="${C.text}">✓ Unlimited project spaces &amp; dashboard views</text>
    <text x="16" y="72" font-size="12" fill="${C.text}">✓ Real-time collaboration with up to 50 members</text>
    <text x="16" y="92" font-size="12" fill="${C.text}">✓ Advanced analytics and support channels</text>
  </g>
  
  <g transform="translate(24, 290)">
    <rect width="392" height="46" rx="8" fill="url(#grad-brand)"/>
    <text x="196" y="27" text-anchor="middle" font-size="13" font-weight="700" fill="white">Claim Now</text>
  </g>
  <g transform="translate(24, 350)">
    <rect width="392" height="46" rx="8" fill="white" stroke="${C.border}" stroke-width="1"/>
    <text x="196" y="27" text-anchor="middle" font-size="13" font-weight="700" fill="${C.text}">Close</text>
  </g>
  
  <!-- Close Button X -->
  <g transform="translate(396, 16)">
    <circle cx="14" cy="14" r="14" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
    <path d="M9 9l10 10M19 9L9 19" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
  </g>
  `;
  write('Frame-Limited-Offer-Popup.svg', wrap(440, 420, offerBody, 'FlowSphere — Limited Offer Popup'));

  // 3. Privacy Policy Page Frame
  const privacyBody = `
  <rect width="640" height="800" fill="${C.bg}" stroke="${C.border}" stroke-width="1.5"/>
  <g transform="translate(24, 24)">
    <rect width="130" height="36" rx="8" fill="${C.surface}" stroke="${C.border}" stroke-width="1"/>
    <text x="65" y="22" text-anchor="middle" font-size="12" font-weight="600" fill="${C.primary}">← Back to Email</text>
  </g>
  <text x="24" y="96" font-size="24" font-weight="800" fill="${C.text}">Privacy Policy</text>
  <line x1="24" y1="116" x2="616" y2="116" stroke="${C.border}" stroke-width="1"/>
  
  <g transform="translate(24, 140)">
    <text x="0" y="20" font-size="14" font-weight="700" fill="${C.text}">1. Consent</text>
    <text x="0" y="42" font-size="12.5" fill="${C.muted}">By subscribing to FlowSphere updates, you agree to our data policy terms.</text>
    
    <text x="0" y="90" font-size="14" font-weight="700" fill="${C.text}">2. Information We Collect</text>
    <text x="0" y="112" font-size="12.5" fill="${C.muted}">We collect basic email addresses and user workflow preferences to customize</text>
    <text x="0" y="130" font-size="12.5" fill="${C.muted}">onboarding dashboards and dashboard layouts.</text>
    
    <text x="0" y="180" font-size="14" font-weight="700" fill="${C.text}">3. Data Usage</text>
    <text x="0" y="202" font-size="12.5" fill="${C.muted}">We do not distribute data to third parties. Information is used exclusively to</text>
    <text x="0" y="220" font-size="12.5" fill="${C.muted}">deliver productivity updates and notify you of feature releases.</text>
    
    <text x="0" y="270" font-size="14" font-weight="700" fill="${C.text}">4. Telemetry and Protection</text>
    <text x="0" y="292" font-size="12.5" fill="${C.muted}">Telemetry stats are securely isolated using industrial TLS standards.</text>
  </g>
  `;
  write('Frame-Privacy-Policy-Page.svg', wrap(640, 800, privacyBody, 'FlowSphere — Privacy Policy Page'));

  // 4. Terms & Conditions Page Frame
  const termsBody = `
  <rect width="640" height="800" fill="${C.bg}" stroke="${C.border}" stroke-width="1.5"/>
  <g transform="translate(24, 24)">
    <rect width="130" height="36" rx="8" fill="${C.surface}" stroke="${C.border}" stroke-width="1"/>
    <text x="65" y="22" text-anchor="middle" font-size="12" font-weight="600" fill="${C.primary}">← Back to Email</text>
  </g>
  <text x="24" y="96" font-size="24" font-weight="800" fill="${C.text}">Terms &amp; Conditions</text>
  <line x1="24" y1="116" x2="616" y2="116" stroke="${C.border}" stroke-width="1"/>
  
  <g transform="translate(24, 140)">
    <text x="0" y="20" font-size="14" font-weight="700" fill="${C.text}">1. Terms of Use</text>
    <text x="0" y="42" font-size="12.5" fill="${C.muted}">These terms specify access permissions and licensing for FlowSphere SaaS templates.</text>
    
    <text x="0" y="90" font-size="14" font-weight="700" fill="${C.text}">2. Accounts</text>
    <text x="0" y="112" font-size="12.5" fill="${C.muted}">Accounts are restricted to individual or team use. Shared logins violate our</text>
    <text x="0" y="130" font-size="12.5" fill="${C.muted}">terms and may lead to workspace locking.</text>
    
    <text x="0" y="180" font-size="14" font-weight="700" fill="${C.text}">3. Limitations</text>
    <text x="0" y="202" font-size="12.5" fill="${C.muted}">FlowSphere is not liable for data lapses caused by third-party integrations.</text>
  </g>
  `;
  write('Frame-Terms-Conditions-Page.svg', wrap(640, 800, termsBody, 'FlowSphere — Terms & Conditions Page'));

  // 5. Contact Information Popup Frame
  const contactBody = `
  <rect width="440" height="400" rx="16" fill="${C.bg}" stroke="${C.border}" stroke-width="1.5"/>
  <text x="24" y="40" font-size="18" font-weight="800" fill="${C.text}">Contact Information</text>
  <text x="24" y="64" font-size="12" fill="${C.muted}">Get in touch with the FlowSphere team. We're here to help.</text>
  
  <!-- Email Info row -->
  <g transform="translate(24, 100)">
    <rect width="36" height="36" rx="8" fill="${C.primaryLight}"/>
    <text x="18" y="22" text-anchor="middle" font-size="14">✉️</text>
    <text x="50" y="16" font-size="10" font-weight="700" fill="${C.muted}">EMAIL US</text>
    <text x="50" y="32" font-size="13" font-weight="700" fill="${C.primary}">support@flowsphere.io</text>
  </g>
  
  <!-- Phone Info row -->
  <g transform="translate(24, 156)">
    <rect width="36" height="36" rx="8" fill="${C.primaryLight}"/>
    <text x="18" y="22" text-anchor="middle" font-size="14">📞</text>
    <text x="50" y="16" font-size="10" font-weight="700" fill="${C.muted}">CALL US</text>
    <text x="50" y="32" font-size="13" font-weight="700" fill="${C.text}">+1 (555) 019-2834</text>
  </g>
  
  <!-- Web Info row -->
  <g transform="translate(24, 212)">
    <rect width="36" height="36" rx="8" fill="${C.primaryLight}"/>
    <text x="18" y="22" text-anchor="middle" font-size="14">🌐</text>
    <text x="50" y="16" font-size="10" font-weight="700" fill="${C.muted}">OFFICIAL WEBSITE</text>
    <text x="50" y="32" font-size="13" font-weight="700" fill="${C.primary}">www.flowsphere.io</text>
  </g>
  
  <!-- Social Title -->
  <text x="24" y="286" font-size="11" font-weight="700" fill="${C.muted}">FOLLOW US</text>
  <g transform="translate(24, 296)">
    ${[0,1,2].map(i=>`
    <g transform="translate(${i*40},0)">
      <rect width="32" height="32" rx="8" fill="${C.surface}" stroke="${C.border}" stroke-width="1"/>
      <circle cx="16" cy="16" r="4" fill="${C.primary}"/>
    </g>`).join('')}
  </g>
  
  <g transform="translate(24, 340)">
    <rect width="392" height="40" rx="8" fill="white" stroke="${C.border}" stroke-width="1"/>
    <text x="196" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="${C.text}">Close</text>
  </g>
  
  <!-- Close Button X -->
  <g transform="translate(396, 16)">
    <circle cx="14" cy="14" r="14" fill="${C.surface}" stroke="${C.border}" stroke-width="1"/>
    <path d="M9 9l10 10M19 9L9 19" stroke="${C.muted}" stroke-width="1.5" stroke-linecap="round"/>
  </g>
  `;
  write('Frame-Contact-Popup.svg', wrap(440, 400, contactBody, 'FlowSphere — Contact Popup'));

  // 6. Download Play Store Frame
  const playBody = `
  <rect width="440" height="340" rx="16" fill="${C.bg}" stroke="${C.border}" stroke-width="1.5"/>
  <g transform="translate(160, 30)">
    <rect width="120" height="120" rx="10" fill="${C.surface}" stroke="${C.border}" stroke-width="1"/>
    <rect x="15" y="15" width="30" height="30" fill="${C.primary}"/>
    <rect x="75" y="15" width="30" height="30" fill="${C.primary}"/>
    <rect x="15" y="75" width="30" height="30" fill="${C.primary}"/>
  </g>
  <text x="220" y="180" text-anchor="middle" font-size="16" font-weight="800" fill="${C.text}">Get FlowSphere for Android</text>
  <text x="220" y="204" text-anchor="middle" font-size="12" fill="${C.muted}">Scan this QR code with your phone camera to download.</text>
  
  <g transform="translate(24, 230)">
    <rect width="392" height="36" rx="8" fill="${C.surface}"/>
    <text x="196" y="22" text-anchor="middle" font-size="11" fill="${C.muted}">⭐️ Rating: 4.9/5 · 28K reviews · Verified Safe</text>
  </g>
  
  <g transform="translate(24, 280)">
    <rect width="392" height="40" rx="8" fill="white" stroke="${C.border}" stroke-width="1"/>
    <text x="196" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="${C.text}">Close</text>
  </g>
  `;
  write('Frame-Download-Play-Store.svg', wrap(440, 340, playBody, 'FlowSphere — Google Play Popup'));

  // 7. Download App Store Frame
  const appBody = `
  <rect width="440" height="340" rx="16" fill="${C.bg}" stroke="${C.border}" stroke-width="1.5"/>
  <g transform="translate(160, 30)">
    <rect width="120" height="120" rx="10" fill="${C.surface}" stroke="${C.border}" stroke-width="1"/>
    <rect x="15" y="15" width="30" height="30" fill="${C.secondary}"/>
    <rect x="75" y="15" width="30" height="30" fill="${C.secondary}"/>
    <rect x="15" y="75" width="30" height="30" fill="${C.secondary}"/>
  </g>
  <text x="220" y="180" text-anchor="middle" font-size="16" font-weight="800" fill="${C.text}">Get FlowSphere for iOS</text>
  <text x="220" y="204" text-anchor="middle" font-size="12" fill="${C.muted}">Scan this QR code with your iPhone camera to download.</text>
  
  <g transform="translate(24, 230)">
    <rect width="392" height="36" rx="8" fill="${C.surface}"/>
    <text x="196" y="22" text-anchor="middle" font-size="11" fill="${C.muted}">⭐️ Rating: 4.8/5 · 41K reviews · Compatible with iOS 15+</text>
  </g>
  
  <g transform="translate(24, 280)">
    <rect width="392" height="40" rx="8" fill="white" stroke="${C.border}" stroke-width="1"/>
    <text x="196" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="${C.text}">Close</text>
  </g>
  `;
  write('Frame-Download-App-Store.svg', wrap(440, 340, appBody, 'FlowSphere — App Store Popup'));
}

// ─────────────────────────────────────────────────────────
// RUN ALL GENERATORS
// ─────────────────────────────────────────────────────────
function main() {
  console.log('\n🎨  FlowSphere — Figma SVG Generator');
  console.log('======================================\n');
  console.log('📐 Individual Sections:\n');
  generateSectionSVGs();

  console.log('\n📄 Full Email SVGs:\n');
  generateDesktopFullSVG();
  generateMobileFullSVG();

  console.log('\n🧩 Component Sheets:\n');
  generateComponentButtons();
  
  console.log('\n📱 Interactive Prototype Frames:\n');
  generateInteractionFrames();

  console.log('\n✅  Done! All Figma-ready SVGs saved to: Figma/');
  console.log('\nHow to import into Figma:');
  console.log('  1. Open Figma → Create new file');
  console.log('  2. Menu → File → Place Image (or drag SVG onto canvas)');
  console.log('  3. Each SVG becomes a fully editable frame with layers');
  console.log('  4. For full email: use Email-Desktop-Full.svg or Email-Mobile-Full.svg');
  console.log('  5. For sections: import each Section-0X-*.svg separately\n');
}

main();

