/**
 * FlowSphere UX Case Study — SVG Generator
 * ========================================
 * Generates 16 detailed, pixel-perfect, Figma-ready SVG files
 * representing a complete Senior UI/UX Designer UX case study presentation.
 * 
 * Run: node generate-figma-case-study.js
 */

const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, 'Figma');
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

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
  dark:         '#0F172A',
  amber:        '#F59E0B',
  danger:       '#EF4444',
  dangerLight:  '#FEE2E2',
};

function writeSVG(filename, content) {
  fs.writeFileSync(path.join(OUT, filename), content, 'utf8');
  console.log(`  ✓  ${filename}`);
}

function wrap(w, h, body, title = 'Case Study Page') {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" fill="none"
     xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <title>${title}</title>
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&amp;display=swap');
      text { font-family: 'Inter', -apple-system, sans-serif; }
    </style>
    <linearGradient id="grad-brand" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${C.primary}"/>
      <stop offset="100%" stop-color="${C.secondary}"/>
    </linearGradient>
    <linearGradient id="grad-hero" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${C.primaryLight}"/>
      <stop offset="100%" stop-color="#F5F3FF"/>
    </linearGradient>
    <filter id="shadow">
      <feDropShadow dx="0" dy="8" stdDeviation="16" flood-color="rgba(99,102,241,0.08)"/>
    </filter>
    <filter id="shadow-modal">
      <feDropShadow dx="0" dy="12" stdDeviation="24" flood-color="rgba(0,0,0,0.15)"/>
    </filter>
  </defs>
${body}
</svg>`;
}

// ── PAGE HEADERS (for content pages) ──
function pageHeader(title, pageNum) {
  return `
  <!-- Page Header -->
  <rect width="1440" height="80" fill="${C.bg}"/>
  <line x1="0" y1="79.5" x2="1440" y2="79.5" stroke="${C.border}" stroke-width="1"/>
  <!-- Logo -->
  <rect x="40" y="24" width="32" height="32" rx="8" fill="url(#grad-brand)"/>
  <path d="M56 30l-4 2v4a4 4 0 008 0v-4l-4-2z" fill="white"/>
  <text x="82" y="46" font-size="16" font-weight="800" fill="url(#grad-brand)">FlowSphere</text>
  <text x="180" y="45" font-size="14" font-weight="400" fill="${C.muted}" opacity="0.5">|</text>
  <text x="196" y="46" font-size="15" font-weight="700" fill="${C.text}">${title}</text>
  <!-- Page number -->
  <rect x="1340" y="24" width="60" height="32" rx="16" fill="${C.primaryLight}"/>
  <text x="1370" y="45" font-size="12" font-weight="700" fill="${C.primary}" text-anchor="middle">PAGE ${pageNum}</text>
  `;
}

// ─────────────────────────────────────────────────────────
// PAGE 1: COVER (1440x900)
// ─────────────────────────────────────────────────────────
function page1() {
  const body = `
  <rect width="1440" height="900" fill="${C.dark}"/>
  <!-- Subtle grid pattern -->
  <path d="M0 0h1440v900H0z" fill="none" opacity=".03" stroke="#FFF" stroke-width="1"/>
  
  <g transform="translate(120, 260)">
    <rect x="-10" y="-12" width="220" height="36" rx="18" fill="rgba(99,102,241,0.15)" stroke="${C.primary}" stroke-width="1.5"/>
    <text x="100" y="11" font-size="12" font-weight="800" fill="${C.primary}" text-anchor="middle" letter-spacing="1.5">CODSOFT UI/UX · TASK 2</text>
    
    <text x="0" y="110" font-size="72" font-weight="900" fill="white" letter-spacing="-2px">FlowSphere</text>
    <text x="0" y="170" font-size="36" font-weight="700" fill="url(#grad-brand)">Responsive Email Case Study</text>
    <text x="0" y="210" font-size="18" font-weight="400" fill="${C.muted}">Welcome &amp; Product Launch Marketing Design System</text>
  </g>

  <g transform="translate(120, 780)">
    <text x="0" y="0" font-size="14" font-weight="600" fill="white">Designed by: Noor Mohamed Halith</text>
    <text x="0" y="22" font-size="12" fill="${C.muted}">Senior Product Design Portfolio Upgrade · 2025</text>
  </g>

  <!-- Color swatches visual at bottom -->
  <g transform="translate(1100, 780)">
    ${[C.primary, C.secondary, C.success, C.text, C.surface].map((c, i) => `
      <circle cx="${i*40}" cy="0" r="14" fill="${c}" stroke="${C.border}" stroke-width="1"/>
    `).join('')}
  </g>
  `;
  writeSVG('Page-01-Cover.svg', wrap(1440, 900, body, 'Page 1 — Cover'));
}

// ─────────────────────────────────────────────────────────
// PAGE 2: PROJECT OVERVIEW (1440x900)
// ─────────────────────────────────────────────────────────
function page2() {
  const body = `
  <rect width="1440" height="900" fill="${C.bg}"/>
  ${pageHeader('Project Overview & Design Process', '02')}

  <!-- Brief card (Left) -->
  <g transform="translate(80, 140)" filter="url(#shadow)">
    <rect width="400" height="660" rx="20" fill="${C.surface}" stroke="${C.border}" stroke-width="1"/>
    <text x="40" y="60" font-size="13" font-weight="700" fill="${C.primary}" letter-spacing="1">PROJECT BRIEF</text>
    <text x="40" y="100" font-size="28" font-weight="800" fill="${C.text}">The Challenge</text>
    <text x="40" y="150" font-size="14" fill="${C.muted}" line-height="1.6">
      FlowSphere launched its new productivity platform,
    </text>
    <text x="40" y="172" font-size="14" fill="${C.muted}">but onboarding drop-off was high due to standard,</text>
    <text x="40" y="194" font-size="14" fill="${C.muted}">generic welcome emails. The target was to create</text>
    <text x="40" y="216" font-size="14" fill="${C.muted}">a premium, responsive, highly converting welcome</text>
    <text x="40" y="238" font-size="14" fill="${C.muted}">flow with clean components and live interactive states.</text>

    <!-- Goal box -->
    <rect x="40" y="290" width="320" height="150" rx="12" fill="${C.primaryLight}" stroke="${C.primary}" stroke-width="1"/>
    <text x="60" y="326" font-size="14" font-weight="800" fill="${C.primary}">THE GOAL</text>
    <text x="60" y="360" font-size="13" fill="${C.text}">Design a unique email template</text>
    <text x="60" y="380" font-size="13" fill="${C.text}">optimized for 60% open rates,</text>
    <text x="60" y="400" font-size="13" fill="${C.text}">featuring custom SVG assets</text>
    <text x="60" y="420" font-size="13" fill="${C.text}">and clear modal prototypes.</text>
  </g>

  <!-- Metrics & Process (Right) -->
  <g transform="translate(520, 140)">
    <!-- Metric cards -->
    <g transform="translate(0, 0)">
      ${[
        { name: 'Timeline', val: '2 Weeks' },
        { name: 'Deliverable', val: 'Email System' },
        { name: 'Target Audience', val: 'SaaS Teams' },
        { name: 'UX Methodology', val: 'Double Diamond' }
      ].map((m, i) => `
        <g transform="translate(${(i%2)*420}, ${Math.floor(i/2)*140})" filter="url(#shadow)">
          <rect width="380" height="110" rx="16" fill="${C.bg}" stroke="${C.border}" stroke-width="1"/>
          <text x="30" y="42" font-size="12" font-weight="600" fill="${C.muted}" letter-spacing="0.5">${m.name.toUpperCase()}</text>
          <text x="30" y="78" font-size="20" font-weight="800" fill="${C.text}">${m.val}</text>
        </g>
      `).join('')}
    </g>

    <!-- Design Process Flow diagram -->
    <g transform="translate(0, 320)">
      <text x="0" y="40" font-size="18" font-weight="800" fill="${C.text}">The Design Journey</text>
      
      <g transform="translate(0, 80)">
        ${['Research', 'Define', 'Ideate', 'Design', 'Test', 'Deliver'].map((p, i) => `
          <g transform="translate(${i*136}, 0)">
            <rect width="110" height="90" rx="12" fill="${i === 3 ? 'url(#grad-brand)' : C.surface}" stroke="${C.border}" stroke-width="1"/>
            <circle cx="55" cy="30" r="16" fill="${i === 3 ? 'white' : C.primaryLight}"/>
            <text x="55" y="34" font-size="11" font-weight="700" fill="${i === 3 ? C.primary : C.primary}" text-anchor="middle">${i+1}</text>
            <text x="55" y="70" font-size="12" font-weight="700" fill="${i === 3 ? 'white' : C.text}" text-anchor="middle">${p}</text>
          </g>
          ${i < 5 ? `<path d="M ${i*136 + 118} 45 L ${i*136 + 128} 45" stroke="${C.primary}" stroke-width="2" stroke-dasharray="3 3"/>` : ''}
        `).join('')}
      </g>
    </g>
  </g>
  `;
  writeSVG('Page-02-Project-Overview.svg', wrap(1440, 900, body, 'Page 2 — Project Overview'));
}

// ─────────────────────────────────────────────────────────
// PAGE 3: UX RESEARCH (1440x900)
// ─────────────────────────────────────────────────────────
function page3() {
  const body = `
  <rect width="1440" height="900" fill="${C.bg}"/>
  ${pageHeader('UX Research & Competitive Mapping', '03')}

  <!-- Left: Research Methodology -->
  <g transform="translate(80, 140)">
    <text x="0" y="30" font-size="20" font-weight="800" fill="${C.text}">Methodology &amp; Insights</text>
    
    ${[
      { title: 'Competitive Analysis', desc: 'Evaluated 6 major SaaS welcome emails (Asana, Monday, Notion) for CTA placement, spacing, and mobile stacking behavior.' },
      { title: 'User Survey (n=12)', desc: 'Conducted interviews with marketing leads. 70% stated email layout complexity is the #1 reason for instant unsubscribe.' },
      { title: 'Data Benchmarks', desc: 'Average tech sector click-through rate is 2.6%. The target layout aimed to improve engagement to 4.5% using clear typography.' }
    ].map((m, i) => `
      <g transform="translate(0, ${60 + i*160})" filter="url(#shadow)">
        <rect width="460" height="130" rx="14" fill="${C.surface}" stroke="${C.border}" stroke-width="1"/>
        <text x="30" y="36" font-size="14" font-weight="800" fill="${C.primary}">${m.title}</text>
        <text x="30" y="68" font-size="12" fill="${C.muted}">${m.desc.substring(0,60)}</text>
        <text x="30" y="86" font-size="12" fill="${C.muted}">${m.desc.substring(60)}</text>
      </g>
    `).join('')}
  </g>

  <!-- Right: Competitive Grid Table -->
  <g transform="translate(600, 140)">
    <text x="0" y="30" font-size="20" font-weight="800" fill="${C.text}">Competitive Feature Grid</text>

    <!-- Table Header -->
    <g transform="translate(0, 60)">
      <rect width="760" height="40" rx="8" fill="${C.primaryLight}"/>
      <text x="24" y="25" font-size="12" font-weight="800" fill="${C.primary}">PRODUCT</text>
      <text x="200" y="25" font-size="12" font-weight="800" fill="${C.primary}">RESPONSIVE</text>
      <text x="360" y="25" font-size="12" font-weight="800" fill="${C.primary}">CTA VISIBILITY</text>
      <text x="520" y="25" font-size="12" font-weight="800" fill="${C.primary}">SPACING</text>
      <text x="660" y="25" font-size="12" font-weight="800" fill="${C.primary}">RATING</text>
    </g>

    <!-- Table Rows -->
    ${[
      { name: 'FlowSphere (Ours)', r: '✅ Fluid Grid', c: '🔥 Redundant CTAs', s: '✨ 8pt System', rat: '⭐️ 4.9' },
      { name: 'Competitor A', r: '✅ Mobile-first', c: '⚠️ Secondary scroll', s: '⚠️ Tight margins', rat: '⭐️ 3.8' },
      { name: 'Competitor B', r: '❌ Fixed width', c: '✅ Primary hero', s: '⚠️ Mixed spacing', rat: '⭐️ 3.5' },
      { name: 'Competitor C', r: '✅ Fluid Grid', c: '❌ Low contrast', s: '❌ Dense layouts', rat: '⭐️ 3.1' }
    ].map((row, i) => `
      <g transform="translate(0, ${110 + i*70})">
        <rect width="760" height="60" rx="8" fill="${i === 0 ? '#EEF2FF' : C.bg}" stroke="${C.border}" stroke-width="1"/>
        <text x="24" y="35" font-size="13" font-weight="700" fill="${i === 0 ? C.primary : C.text}">${row.name}</text>
        <text x="200" y="35" font-size="12" fill="${C.text}">${row.r}</text>
        <text x="360" y="35" font-size="12" fill="${C.text}">${row.c}</text>
        <text x="520" y="35" font-size="12" fill="${C.text}">${row.s}</text>
        <text x="660" y="35" font-size="12" font-weight="600" fill="${C.text}">${row.rat}</text>
      </g>
    `).join('')}
  </g>
  `;
  writeSVG('Page-03-UX-Research.svg', wrap(1440, 900, body, 'Page 3 — UX Research'));
}

// ─────────────────────────────────────────────────────────
// PAGE 4: USER PERSONAS (1440x1080)
// ─────────────────────────────────────────────────────────
function page4() {
  const body = `
  <rect width="1440" height="1080" fill="${C.bg}"/>
  ${pageHeader('User Persona Profiles', '04')}

  <!-- Persona 1: Sarah -->
  <g transform="translate(80, 140)" filter="url(#shadow)">
    <rect width="600" height="840" rx="24" fill="${C.surface}" stroke="${C.border}" stroke-width="1"/>
    
    <!-- Profile Card header -->
    <rect width="600" height="180" rx="24 24 0 0" fill="url(#grad-brand)"/>
    <circle cx="80" cy="90" r="44" fill="white" opacity="0.2"/>
    <text x="80" y="100" font-size="32" font-weight="800" fill="white" text-anchor="middle">SC</text>
    <text x="150" y="80" font-size="24" font-weight="800" fill="white">Sarah Chen</text>
    <text x="150" y="106" font-size="13" fill="rgba(255,255,255,0.8)">Marketing Operations Lead · Nexus Labs</text>
    <rect x="150" y="122" width="110" height="22" rx="11" fill="rgba(255,255,255,0.15)"/>
    <text x="205" y="136" font-size="10.5" font-weight="700" fill="white" text-anchor="middle">POWER USER</text>

    <!-- Bio & Details -->
    <g transform="translate(40, 220)">
      <text x="0" y="20" font-size="12" font-weight="700" fill="${C.primary}" letter-spacing="1">BIO</text>
      <text x="0" y="44" font-size="13" fill="${C.muted}" line-height="1.6">Sarah coordinates campaigns across 8 remote team members. She gets</text>
      <text x="0" y="64" font-size="13" fill="${C.muted}">over 150 notifications daily and is highly sensitive to clutter.</text>

      <text x="0" y="120" font-size="12" font-weight="700" fill="${C.primary}" letter-spacing="1">GOALS</text>
      <text x="0" y="144" font-size="13" fill="${C.text}">✓ Sync workflow states instantly across teams</text>
      <text x="0" y="166" font-size="13" fill="${C.text}">✓ Automate weekly metrics visual reports</text>
      <text x="0" y="188" font-size="13" fill="${C.text}">✓ Integrate task states with existing Slack channels</text>

      <text x="0" y="250" font-size="12" font-weight="700" fill="${C.primary}" letter-spacing="1">PAIN POINTS</text>
      <text x="0" y="274" font-size="13" fill="${C.danger}">✗ Complex welcome forms causing tool setup drop-off</text>
      <text x="0" y="296" font-size="13" fill="${C.danger}">✗ Low accessibility templates rendering bad contrast on mobile</text>
      <text x="0" y="318" font-size="13" fill="${C.danger}">✗ Unclear trial periods leading to billing surprises</text>
      
      <!-- Tech scale -->
      <text x="0" y="380" font-size="12" font-weight="700" fill="${C.primary}" letter-spacing="1">TECH SAVVINESS</text>
      <rect x="0" y="400" width="520" height="8" rx="4" fill="${C.border}"/>
      <rect x="0" y="400" width="460" height="8" rx="4" fill="url(#grad-brand)"/>
      <text x="520" y="394" font-size="11" fill="${C.muted}" text-anchor="end">Expert</text>
    </g>
  </g>

  <!-- Persona 2: Marcus -->
  <g transform="translate(760, 140)" filter="url(#shadow)">
    <rect width="600" height="840" rx="24" fill="${C.surface}" stroke="${C.border}" stroke-width="1"/>
    
    <!-- Profile Card header -->
    <rect width="600" height="180" rx="24 24 0 0" fill="${C.dark}"/>
    <circle cx="80" cy="90" r="44" fill="white" opacity="0.1"/>
    <text x="80" y="100" font-size="32" font-weight="800" fill="white" text-anchor="middle">MR</text>
    <text x="150" y="80" font-size="24" font-weight="800" fill="white">Marcus Rivera</text>
    <text x="150" y="106" font-size="13" fill="rgba(255,255,255,0.7)">Product Lead · Velocity Inc</text>
    <rect x="150" y="122" width="110" height="22" rx="11" fill="rgba(255,255,255,0.15)"/>
    <text x="205" y="136" font-size="10.5" font-weight="700" fill="white" text-anchor="middle">DECISION MAKER</text>

    <!-- Bio & Details -->
    <g transform="translate(40, 220)">
      <text x="0" y="20" font-size="12" font-weight="700" fill="${C.primary}" letter-spacing="1">BIO</text>
      <text x="0" y="44" font-size="13" fill="${C.muted}" line-height="1.6">Marcus seeks lightweight tools to boost startup agility. He prioritizes</text>
      <text x="0" y="64" font-size="13" fill="${C.muted}">integration features and evaluates budget options closely.</text>

      <text x="0" y="120" font-size="12" font-weight="700" fill="${C.primary}" letter-spacing="1">GOALS</text>
      <text x="0" y="144" font-size="13" fill="${C.text}">✓ Minimize tool integration cycles to hours instead of days</text>
      <text x="0" y="166" font-size="13" fill="${C.text}">✓ Maximize collaboration spaces on flat team budgets</text>
      <text x="0" y="188" font-size="13" fill="${C.text}">✓ Track team milestones without manual status updates</text>

      <text x="0" y="250" font-size="12" font-weight="700" fill="${C.primary}" letter-spacing="1">PAIN POINTS</text>
      <text x="0" y="274" font-size="13" fill="${C.danger}">✗ Obscure welcome flows with no links to feature lists</text>
      <text x="0" y="296" font-size="13" fill="${C.danger}">✗ Complex dashboards with high startup onboarding times</text>
      <text x="0" y="318" font-size="13" fill="${C.danger}">✗ Missing native app options causing remote connection lapses</text>
      
      <!-- Tech scale -->
      <text x="0" y="380" font-size="12" font-weight="700" fill="${C.primary}" letter-spacing="1">TECH SAVVINESS</text>
      <rect x="0" y="400" width="520" height="8" rx="4" fill="${C.border}"/>
      <rect x="0" y="400" width="380" height="8" rx="4" fill="${C.primary}"/>
      <text x="520" y="394" font-size="11" fill="${C.muted}" text-anchor="end">Advanced</text>
    </g>
  </g>
  `;
  writeSVG('Page-04-User-Personas.svg', wrap(1440, 1080, body, 'Page 4 — User Personas'));
}

// ─────────────────────────────────────────────────────────
// PAGE 5: USER JOURNEY (1440x720)
// ─────────────────────────────────────────────────────────
function page5() {
  const body = `
  <rect width="1440" height="720" fill="${C.bg}"/>
  ${pageHeader('User Journey Mapping', '05')}

  <!-- Table Columns -->
  <g transform="translate(80, 120)">
    <!-- Headers -->
    <rect width="1280" height="40" rx="8" fill="${C.surface}"/>
    <text x="20"  y="25" font-size="11" font-weight="800" fill="${C.muted}">STAGE</text>
    <text x="180" y="25" font-size="11" font-weight="800" fill="${C.muted}">AWARENESS</text>
    <text x="420" y="25" font-size="11" font-weight="800" fill="${C.muted}">CONSIDERATION</text>
    <text x="680" y="25" font-size="11" font-weight="800" fill="${C.muted}">ONBOARDING</text>
    <text x="940" y="25" font-size="11" font-weight="800" fill="${C.muted}">TRIAL CLAIM</text>
    <text x="1160" y="25" font-size="11" font-weight="800" fill="${C.muted}">ADVOCACY</text>

    <!-- Row 1: Actions -->
    <g transform="translate(0, 60)">
      <text x="20" y="40" font-size="12" font-weight="700" fill="${C.text}">Actions</text>
      <text x="180" y="40" font-size="12" fill="${C.text}">Signs up for beta</text>
      <text x="420" y="40" font-size="12" fill="${C.text}">Opens welcome email</text>
      <text x="680" y="40" font-size="12" fill="${C.text}">Reads feature cards</text>
      <text x="940" y="40" font-size="12" fill="${C.text}">Claims 30 days premium</text>
      <text x="1160" y="40" font-size="12" fill="${C.text}">Invites team seats</text>
    </g>

    <!-- Row 2: Touchpoints -->
    <g transform="translate(0, 140)">
      <text x="20" y="40" font-size="12" font-weight="700" fill="${C.text}">Touchpoints</text>
      <text x="180" y="40" font-size="12" fill="${C.muted}">Web landing page</text>
      <text x="420" y="40" font-size="12" fill="${C.muted}">Email Client inbox</text>
      <text x="680" y="40" font-size="12" fill="${C.muted}">Smart layouts list</text>
      <text x="940" y="40" font-size="12" fill="${C.muted}">Claim modal CTA</text>
      <text x="1160" y="40" font-size="12" fill="${C.muted}">Product dashboard</text>
    </g>

    <!-- Row 3: Emotion Curve Visual -->
    <g transform="translate(0, 240)">
      <text x="20" y="60" font-size="12" font-weight="700" fill="${C.text}">Emotions</text>
      <!-- Horizontal line -->
      <line x1="180" y1="60" x2="1240" y2="60" stroke="${C.border}" stroke-width="1" stroke-dasharray="4 4"/>
      <!-- Journey curve path -->
      <path d="M 230 60 Q 350 110 470 50 T 730 20 T 990 10 T 1200 15" fill="none" stroke="url(#grad-brand)" stroke-width="4"/>
      <!-- Points on curve -->
      <circle cx="230" cy="60" r="8" fill="${C.primary}"/>
      <circle cx="470" cy="50" r="8" fill="${C.danger}"/>
      <circle cx="730" cy="20" r="8" fill="${C.success}"/>
      <circle cx="990" cy="10" r="8" fill="${C.success}"/>
      <circle cx="1200" cy="15" r="8" fill="${C.primary}"/>
      
      <text x="230" y="45" font-size="10" fill="${C.muted}" text-anchor="middle">Curious</text>
      <text x="470" y="75" font-size="10" fill="${C.danger}" text-anchor="middle">Confused</text>
      <text x="730" y="5" font-size="10" fill="${C.success}" text-anchor="middle">Interested</text>
      <text x="990" y="-5" font-size="10" fill="${C.success}" text-anchor="middle">Delighted</text>
    </g>

    <!-- Row 4: Pain Points -->
    <g transform="translate(0, 420)">
      <text x="20" y="40" font-size="12" font-weight="700" fill="${C.text}">Pain Points</text>
      <text x="180" y="40" font-size="11" fill="${C.danger}">No welcome cues</text>
      <text x="420" y="40" font-size="11" fill="${C.danger}">Inbox rendering lags</text>
      <text x="680" y="40" font-size="11" fill="${C.danger}">Feature description opacity</text>
      <text x="940" y="40" font-size="11" fill="${C.success}">Instant claim (easy)</text>
      <text x="1160" y="40" font-size="11" fill="${C.success}">Clean team flow</text>
    </g>
  </g>
  `;
  writeSVG('Page-05-User-Journey.svg', wrap(1440, 720, body, 'Page 5 — User Journey Map'));
}

// ─────────────────────────────────────────────────────────
// PAGE 6: INFORMATION ARCHITECTURE (1440x900)
// ─────────────────────────────────────────────────────────
function page6() {
  const body = `
  <rect width="1440" height="900" fill="${C.bg}"/>
  ${pageHeader('Email Structure & Information Architecture', '06')}

  <!-- Tree Diagram -->
  <g transform="translate(80, 140)">
    <!-- Root node -->
    <g transform="translate(540, 20)">
      <rect width="200" height="50" rx="10" fill="url(#grad-brand)"/>
      <text x="100" y="31" font-size="14" font-weight="800" fill="white" text-anchor="middle">FlowSphere Email</text>
    </g>

    <!-- Tier 2 nodes -->
    <!-- Header -->
    <g transform="translate(40, 150)">
      <rect width="140" height="40" rx="8" fill="${C.primaryLight}" stroke="${C.primary}" stroke-width="1"/>
      <text x="70" y="25" font-size="12" font-weight="700" fill="${C.primary}" text-anchor="middle">1. Header</text>
    </g>
    <!-- Hero -->
    <g transform="translate(220, 150)">
      <rect width="140" height="40" rx="8" fill="${C.primaryLight}" stroke="${C.primary}" stroke-width="1"/>
      <text x="70" y="25" font-size="12" font-weight="700" fill="${C.primary}" text-anchor="middle">2. Hero Section</text>
    </g>
    <!-- Features -->
    <g transform="translate(400, 150)">
      <rect width="140" height="40" rx="8" fill="${C.primaryLight}" stroke="${C.primary}" stroke-width="1"/>
      <text x="70" y="25" font-size="12" font-weight="700" fill="${C.primary}" text-anchor="middle">3. Features list</text>
    </g>
    <!-- Offer -->
    <g transform="translate(580, 150)">
      <rect width="140" height="40" rx="8" fill="${C.primaryLight}" stroke="${C.primary}" stroke-width="1"/>
      <text x="70" y="25" font-size="12" font-weight="700" fill="${C.primary}" text-anchor="middle">4. Special Offer</text>
    </g>
    <!-- Testimonials -->
    <g transform="translate(760, 150)">
      <rect width="140" height="40" rx="8" fill="${C.primaryLight}" stroke="${C.primary}" stroke-width="1"/>
      <text x="70" y="25" font-size="12" font-weight="700" fill="${C.primary}" text-anchor="middle">5. Testimonials</text>
    </g>
    <!-- Download -->
    <g transform="translate(940, 150)">
      <rect width="140" height="40" rx="8" fill="${C.primaryLight}" stroke="${C.primary}" stroke-width="1"/>
      <text x="70" y="25" font-size="12" font-weight="700" fill="${C.primary}" text-anchor="middle">6. Download app</text>
    </g>
    <!-- Footer -->
    <g transform="translate(1120, 150)">
      <rect width="140" height="40" rx="8" fill="${C.primaryLight}" stroke="${C.primary}" stroke-width="1"/>
      <text x="70" y="25" font-size="12" font-weight="700" fill="${C.primary}" text-anchor="middle">7. Footer</text>
    </g>

    <!-- Connectors Tier 1 to 2 -->
    <path d="M 640 70 L 640 110 M 110 110 L 1190 110 M 110 110 L 110 150 M 290 110 L 290 150 M 470 110 L 470 150 M 650 110 L 650 150 M 830 110 L 830 150 M 1010 110 L 1010 150 M 1190 110 L 1190 150" stroke="${C.primary}" stroke-width="1.5" fill="none"/>

    <!-- Tier 3 details under nodes -->
    <g transform="translate(40, 220)">
      <text x="10" y="20" font-size="11" fill="${C.muted}">· Logo Brand</text>
      <text x="10" y="40" font-size="11" fill="${C.muted}">· Nav items</text>
    </g>
    <g transform="translate(220, 220)">
      <text x="10" y="20" font-size="11" fill="${C.muted}">· Title &amp; Subtitle</text>
      <text x="10" y="40" font-size="11" fill="${C.muted}">· Dashboard SVG</text>
      <text x="10" y="60" font-size="11" fill="${C.muted}">· CTA Primary</text>
    </g>
    <g transform="translate(400, 220)">
      <text x="10" y="20" font-size="11" fill="${C.muted}">· Smart Tasks</text>
      <text x="10" y="40" font-size="11" fill="${C.muted}">· Team Collab</text>
      <text x="10" y="60" font-size="11" fill="${C.muted}">· Analytics</text>
    </g>
    <g transform="translate(580, 220)">
      <text x="10" y="20" font-size="11" fill="${C.muted}">· 30 Days Free</text>
      <text x="10" y="40" font-size="11" fill="${C.muted}">· Countdown tag</text>
      <text x="10" y="60" font-size="11" fill="${C.muted}">· Claim CTA</text>
    </g>
    <g transform="translate(760, 220)">
      <text x="10" y="20" font-size="11" fill="${C.muted}">· 2 review cards</text>
      <text x="10" y="40" font-size="11" fill="${C.muted}">· Stars rating</text>
      <text x="10" y="60" font-size="11" fill="${C.muted}">· Avatars</text>
    </g>
    <g transform="translate(940, 220)">
      <text x="10" y="20" font-size="11" fill="${C.muted}">· Google Play badge</text>
      <text x="10" y="40" font-size="11" fill="${C.muted}">· App Store badge</text>
    </g>
    <g transform="translate(1120, 220)">
      <text x="10" y="20" font-size="11" fill="${C.muted}">· Social icons</text>
      <text x="10" y="40" font-size="11" fill="${C.muted}">· Website link</text>
      <text x="10" y="60" font-size="11" fill="${C.muted}">· Unsubscribe</text>
    </g>
  </g>

  <!-- Hierarchy details card -->
  <g transform="translate(80, 580)">
    <rect width="1280" height="240" rx="16" fill="${C.surface}" stroke="${C.border}" stroke-width="1"/>
    <text x="40" y="40" font-size="14" font-weight="700" fill="${C.text}">Structural Decisions</text>
    
    <g transform="translate(40, 70)">
      <text x="0" y="20" font-size="12" font-weight="700" fill="${C.primary}">1. PRIORITY FLOW</text>
      <text x="0" y="44" font-size="13" fill="${C.muted}">The hierarchy is structured dynamically so</text>
      <text x="0" y="64" font-size="13" fill="${C.muted}">the user sees the primary value proposition</text>
      <text x="0" y="84" font-size="13" fill="${C.muted}">immediately (Hero CTA), followed by supporting</text>
      <text x="0" y="104" font-size="13" fill="${C.muted}">proof points (Features, Testimonials).</text>
    </g>
    <g transform="translate(440, 70)">
      <text x="0" y="20" font-size="12" font-weight="700" fill="${C.primary}">2. REDUNDANT CTA ROUTING</text>
      <text x="0" y="44" font-size="13" fill="${C.muted}">We deploy CTAs both in the Hero and Special</text>
      <text x="0" y="64" font-size="13" fill="${C.muted}">Offer sections. This satisfies both impulse</text>
      <text x="0" y="84" font-size="13" fill="${C.muted}">signups and analytical users who need to read</text>
      <text x="0" y="104" font-size="13" fill="${C.muted}">features before conversion.</text>
    </g>
    <g transform="translate(840, 70)">
      <text x="0" y="20" font-size="12" font-weight="700" fill="${C.primary}">3. DRAIN-PIPE FOOTER</text>
      <text x="0" y="44" font-size="13" fill="${C.muted}">All administrative elements (unsubscribe,</text>
      <text x="0" y="64" font-size="13" fill="${C.muted}">terms, policy) are safely relegated to the</text>
      <text x="0" y="84" font-size="13" fill="${C.muted}">footer to maintain focused marketing metrics</text>
      <text x="0" y="104" font-size="13" fill="${C.muted}">without visual obstruction.</text>
    </g>
  </g>
  `;
  writeSVG('Page-06-Information-Architecture.svg', wrap(1440, 900, body, 'Page 6 — Information Architecture'));
}

// ─────────────────────────────────────────────────────────
// PAGE 7: USER FLOW (1440x900)
// ─────────────────────────────────────────────────────────
function page7() {
  const body = `
  <rect width="1440" height="900" fill="${C.bg}"/>
  ${pageHeader('User Action & Modal Decision Flow', '07')}

  <g transform="translate(80, 140)">
    <!-- Stage boxes -->
    <!-- Start -->
    <g transform="translate(0, 120)">
      <rect width="140" height="50" rx="25" fill="${C.dark}"/>
      <text x="70" y="30" font-size="12" font-weight="700" fill="white" text-anchor="middle">Email Opens</text>
    </g>
    
    <!-- Step 2: Read Hero -->
    <g transform="translate(200, 120)">
      <rect width="140" height="50" rx="8" fill="${C.surface}" stroke="${C.border}" stroke-width="1.5"/>
      <text x="70" y="30" font-size="12" font-weight="600" fill="${C.text}" text-anchor="middle">Read Hero</text>
    </g>

    <!-- Diamond 1: Interested? -->
    <g transform="translate(400, 105)">
      <path d="M 70 0 L 140 40 L 70 80 L 0 40 Z" fill="${C.primaryLight}" stroke="${C.primary}" stroke-width="1.5"/>
      <text x="70" y="44" font-size="11" font-weight="700" fill="${C.primary}" text-anchor="middle">Convert?</text>
    </g>

    <!-- Yes path: Clicks CTA -->
    <g transform="translate(600, 50)">
      <rect width="160" height="50" rx="8" fill="${C.primary}" stroke="none"/>
      <text x="80" y="30" font-size="12" font-weight="700" fill="white" text-anchor="middle">Clicks "Get Started"</text>
    </g>
    <!-- Modal success -->
    <g transform="translate(820, 50)">
      <rect width="160" height="50" rx="8" fill="${C.successLight}" stroke="${C.success}" stroke-width="1.5"/>
      <text x="80" y="30" font-size="12" font-weight="700" fill="${C.success}" text-anchor="middle">Success Overlay</text>
    </g>

    <!-- No path: Scroll Features -->
    <g transform="translate(600, 190)">
      <rect width="160" height="50" rx="8" fill="${C.surface}" stroke="${C.border}" stroke-width="1.5"/>
      <text x="80" y="30" font-size="12" font-weight="600" fill="${C.text}" text-anchor="middle">Scrolls Features</text>
    </g>
    
    <!-- Step 3: Special Offer -->
    <g transform="translate(820, 190)">
      <rect width="160" height="50" rx="8" fill="${C.surface}" stroke="${C.border}" stroke-width="1.5"/>
      <text x="80" y="30" font-size="12" font-weight="600" fill="${C.text}" text-anchor="middle">Special Offer banner</text>
    </g>

    <!-- Diamond 2: Trial claim? -->
    <g transform="translate(1040, 175)">
      <path d="M 70 0 L 140 40 L 70 80 L 0 40 Z" fill="${C.primaryLight}" stroke="${C.primary}" stroke-width="1.5"/>
      <text x="70" y="44" font-size="11" font-weight="700" fill="${C.primary}" text-anchor="middle">Claim Trial?</text>
    </g>

    <!-- Yes path: Clicks Offer -->
    <g transform="translate(1040, 310)">
      <rect width="160" height="50" rx="8" fill="${C.primary}" stroke="none"/>
      <text x="80" y="30" font-size="12" font-weight="700" fill="white" text-anchor="middle">Clicks "Claim Now"</text>
    </g>
    <!-- Modal active -->
    <g transform="translate(1040, 410)">
      <rect width="160" height="50" rx="8" fill="${C.primaryLight}" stroke="${C.primary}" stroke-width="1.5"/>
      <text x="80" y="30" font-size="12" font-weight="700" fill="${C.primary}" text-anchor="middle">Offer Modal (Timer)</text>
    </g>

    <!-- Connectors -->
    <!-- Start to Hero -->
    <path d="M 140 145 L 200 145" stroke="${C.muted}" stroke-width="2" fill="none"/>
    <!-- Hero to Diamond -->
    <path d="M 340 145 L 400 145" stroke="${C.muted}" stroke-width="2" fill="none"/>
    <!-- Diamond to Yes -->
    <path d="M 470 105 L 470 75 L 600 75" stroke="${C.success}" stroke-width="2" fill="none"/>
    <text x="490" y="70" font-size="10" fill="${C.success}" font-weight="700">YES</text>
    <!-- Diamond to No -->
    <path d="M 470 185 L 470 215 L 600 215" stroke="${C.danger}" stroke-width="2" fill="none"/>
    <text x="490" y="210" font-size="10" fill="${C.danger}" font-weight="700">NO</text>
    <!-- Yes to success -->
    <path d="M 760 75 L 820 75" stroke="${C.muted}" stroke-width="2" fill="none"/>
    <!-- No to offer -->
    <path d="M 760 215 L 820 215" stroke="${C.muted}" stroke-width="2" fill="none"/>
    <!-- Offer to Diamond 2 -->
    <path d="M 980 215 L 1040 215" stroke="${C.muted}" stroke-width="2" fill="none"/>
    <!-- Diamond 2 to Claim CTA -->
    <path d="M 1110 255 L 1110 310" stroke="${C.success}" stroke-width="2" fill="none"/>
    <!-- CTA to Modal -->
    <path d="M 1110 360 L 1110 410" stroke="${C.muted}" stroke-width="2" fill="none"/>

    <!-- Legend -->
    <g transform="translate(0, 560)">
      <rect width="400" height="80" rx="8" fill="${C.surface}" stroke="${C.border}" stroke-width="1"/>
      <circle cx="20" cy="40" r="8" fill="${C.dark}"/>
      <text x="36" y="44" font-size="11" font-weight="600" fill="${C.text}">Trigger</text>
      <rect x="100" y="32" width="50" height="16" rx="4" fill="${C.surface}" stroke="${C.border}"/>
      <text x="160" y="44" font-size="11" font-weight="600" fill="${C.text}">State/Action</text>
      <path d="M 240 28 L 270 40 L 240 52 Z" fill="${C.primaryLight}"/>
      <text x="280" y="44" font-size="11" font-weight="600" fill="${C.text}">Decision</text>
    </g>
  </g>
  `;
  writeSVG('Page-07-User-Flow.svg', wrap(1440, 900, body, 'Page 7 — User Flow'));
}

// ─────────────────────────────────────────────────────────
// PAGE 8: LOW-FIDELITY WIREFRAMES (1440x1080)
// ─────────────────────────────────────────────────────────
function page8() {
  const body = `
  <rect width="1440" height="1080" fill="${C.bg}"/>
  ${pageHeader('Low-Fidelity Structure Layouts', '08')}

  <!-- Desktop Wireframe -->
  <g transform="translate(120, 140)">
    <text x="0" y="24" font-size="16" font-weight="700" fill="${C.text}">Desktop Layout (640px)</text>
    <rect x="0" y="48" width="400" height="800" rx="12" fill="none" stroke="${C.muted}" stroke-width="1.5" stroke-dasharray="4 4"/>
    
    <!-- Wireframe blocks -->
    <rect x="16" y="64" width="368" height="40" rx="6" fill="${C.surface2}"/>
    <text x="200" y="88" font-size="11" font-weight="600" fill="${C.muted}" text-anchor="middle">[Logo + Nav Links]</text>

    <rect x="16" y="120" width="368" height="240" rx="6" fill="${C.surface2}"/>
    <text x="200" y="240" font-size="11" font-weight="600" fill="${C.muted}" text-anchor="middle">[Hero: Title + Tag + SVG illustration + CTA]</text>

    <rect x="16" y="376" width="368" height="130" rx="6" fill="${C.surface2}"/>
    <text x="200" y="440" font-size="11" font-weight="600" fill="${C.muted}" text-anchor="middle">[3 Features cards grid]</text>

    <rect x="16" y="522" width="368" height="110" rx="6" fill="${C.surface2}"/>
    <text x="200" y="580" font-size="11" font-weight="600" fill="${C.muted}" text-anchor="middle">[Offer Banner with Countdown CTA]</text>

    <rect x="16" y="648" width="368" height="100" rx="6" fill="${C.surface2}"/>
    <text x="200" y="700" font-size="11" font-weight="600" fill="${C.muted}" text-anchor="middle">[2 Testimonial reviews + download badges]</text>

    <rect x="16" y="764" width="368" height="68" rx="6" fill="${C.surface2}"/>
    <text x="200" y="800" font-size="11" font-weight="600" fill="${C.muted}" text-anchor="middle">[Footer: links + social]</text>
  </g>

  <!-- Mobile Wireframe -->
  <g transform="translate(680, 140)">
    <text x="0" y="24" font-size="16" font-weight="700" fill="${C.text}">Mobile Layout (375px)</text>
    <rect x="0" y="48" width="280" height="800" rx="12" fill="none" stroke="${C.muted}" stroke-width="1.5" stroke-dasharray="4 4"/>

    <!-- Wireframe blocks stacked -->
    <rect x="12" y="64" width="256" height="40" rx="6" fill="${C.surface2}"/>
    <text x="140" y="88" font-size="10" fill="${C.muted}" text-anchor="middle">[Logo + Menu]</text>

    <rect x="12" y="116" width="256" height="210" rx="6" fill="${C.surface2}"/>
    <text x="140" y="220" font-size="10" fill="${C.muted}" text-anchor="middle">[Hero Title + CTA]</text>

    <rect x="12" y="338" width="256" height="180" rx="6" fill="${C.surface2}"/>
    <text x="140" y="430" font-size="10" fill="${C.muted}" text-anchor="middle">[3 Feature rows stacked]</text>

    <rect x="12" y="530" width="256" height="120" rx="6" fill="${C.surface2}"/>
    <text x="140" y="590" font-size="10" fill="${C.muted}" text-anchor="middle">[Special Offer banner]</text>

    <rect x="12" y="662" width="256" height="110" rx="6" fill="${C.surface2}"/>
    <text x="140" y="720" font-size="10" fill="${C.muted}" text-anchor="middle">[Footer social + copyright]</text>
  </g>

  <!-- Annotations panel -->
  <g transform="translate(1020, 188)">
    <rect width="340" height="752" rx="16" fill="${C.surface}" stroke="${C.border}" stroke-width="1"/>
    <text x="30" y="40" font-size="14" font-weight="700" fill="${C.text}">Wireframe Annotations</text>
    
    <g transform="translate(30, 80)">
      ${[
        { num: '1', title: 'Header logo alignment', desc: 'Main brand asset placed top left to establish trust instantly.' },
        { num: '2', title: 'Single column feature stacking', desc: '3-column feature grid stacks into 1-column layout on mobile breakpoints (375px).' },
        { num: '3', title: 'Call-to-Action contrast', desc: 'High-contrast primary buttons with soft shadows for instant target clickability.' },
        { num: '4', title: 'Compact vertical height', desc: 'Total vertical height on mobile is compressed to 1400px to avoid scroll fatigue.' }
      ].map((an, i) => `
        <g transform="translate(0, ${i*150})">
          <circle cx="16" cy="16" r="16" fill="${C.primary}"/>
          <text x="16" y="20" font-size="12" font-weight="700" fill="white" text-anchor="middle">${an.num}</text>
          <text x="44" y="18" font-size="12.5" font-weight="700" fill="${C.text}">${an.title}</text>
          <text x="44" y="38" font-size="11.5" fill="${C.muted}">${an.desc.substring(0,35)}</text>
          <text x="44" y="54" font-size="11.5" fill="${C.muted}">${an.desc.substring(35)}</text>
        </g>
      `).join('')}
    </g>
  </g>
  `;
  writeSVG('Page-08-Lofi-Wireframes.svg', wrap(1440, 1080, body, 'Page 8 — Low-Fidelity Wireframes'));
}

// ─────────────────────────────────────────────────────────
// PAGE 9: MID-FIDELITY WIREFRAMES (1440x1080)
// ─────────────────────────────────────────────────────────
function page9() {
  const body = `
  <rect width="1440" height="1080" fill="${C.bg}"/>
  ${pageHeader('Mid-Fidelity Proportion Blueprints', '09')}

  <!-- Desktop blueprint -->
  <g transform="translate(120, 140)">
    <text x="0" y="24" font-size="16" font-weight="700" fill="${C.text}">Desktop Blueprint</text>
    
    <rect x="0" y="48" width="400" height="800" rx="12" fill="white" stroke="${C.primary}" stroke-width="1"/>
    
    <!-- Spacing annotation lines -->
    <line x1="-20" y1="48" x2="-20" y2="848" stroke="${C.secondary}" stroke-width="1.5"/>
    <text x="-30" y="450" font-size="11" font-weight="700" fill="${C.secondary}" text-anchor="middle" transform="rotate(-90 -30 450)">800px Height Grid</text>

    <!-- Layout detail blueprints -->
    <g transform="translate(20, 68)">
      <!-- Header -->
      <rect width="360" height="40" rx="6" fill="${C.surface}"/>
      <circle cx="30" cy="20" r="10" fill="${C.border}"/>
      <rect x="50" y="16" width="60" height="8" rx="3" fill="${C.border}"/>
      <rect x="240" y="16" width="30" height="8" rx="3" fill="${C.border}"/>
      <rect x="280" y="16" width="30" height="8" rx="3" fill="${C.border}"/>
      <rect x="320" y="16" width="30" height="8" rx="3" fill="${C.border}"/>

      <!-- Hero -->
      <rect x="0" y="56" width="360" height="230" rx="10" fill="${C.surface}"/>
      <rect x="120" y="76" width="120" height="16" rx="4" fill="${C.border}"/>
      <rect x="60" y="104" width="240" height="28" rx="6" fill="${C.border}"/>
      <rect x="90" y="142" width="180" height="12" rx="4" fill="${C.border}"/>
      <rect x="110" y="196" width="140" height="36" rx="8" fill="${C.primary}"/>
      <text x="180" y="218" font-size="11" font-weight="700" fill="white" text-anchor="middle">PRIMARY CTA</text>
      
      <!-- Features -->
      <rect x="0" y="302" width="110" height="130" rx="8" fill="${C.surface}"/>
      <circle cx="55" cy="342" r="16" fill="${C.border}"/>
      <rect x="20" y="376" width="70" height="10" rx="3" fill="${C.border}"/>
      <rect x="15" y="394" width="80" height="6" rx="2" fill="${C.border}"/>
      <rect x="20" y="404" width="70" height="6" rx="2" fill="${C.border}"/>

      <rect x="125" y="302" width="110" height="130" rx="8" fill="${C.surface}"/>
      <circle cx="180" cy="342" r="16" fill="${C.border}"/>
      <rect x="145" y="376" width="70" height="10" rx="3" fill="${C.border}"/>
      <rect x="140" y="394" width="80" height="6" rx="2" fill="${C.border}"/>

      <rect x="250" y="302" width="110" height="130" rx="8" fill="${C.surface}"/>
      <circle cx="305" cy="342" r="16" fill="${C.border}"/>
      <rect x="270" y="376" width="70" height="10" rx="3" fill="${C.border}"/>
      <rect x="265" y="394" width="80" height="6" rx="2" fill="${C.border}"/>
    </g>
  </g>

  <!-- Mobile blueprint -->
  <g transform="translate(680, 140)">
    <text x="0" y="24" font-size="16" font-weight="700" fill="${C.text}">Mobile Blueprint</text>
    <rect x="0" y="48" width="280" height="800" rx="12" fill="white" stroke="${C.primary}" stroke-width="1"/>

    <g transform="translate(16, 68)">
      <rect width="248" height="40" rx="6" fill="${C.surface}"/>
      <circle cx="20" cy="20" r="10" fill="${C.border}"/>
      <rect x="40" y="16" width="50" height="8" rx="3" fill="${C.border}"/>
      <rect x="200" y="16" width="30" height="8" rx="3" fill="${C.border}"/>

      <rect x="0" y="56" width="248" height="210" rx="8" fill="${C.surface}"/>
      <rect x="64" y="76" width="120" height="16" rx="4" fill="${C.border}"/>
      <rect x="34" y="104" width="180" height="24" rx="6" fill="${C.border}"/>
      <rect x="54" y="176" width="140" height="36" rx="8" fill="${C.primary}"/>
    </g>
  </g>

  <!-- Spec callout box (Right) -->
  <g transform="translate(1020, 188)">
    <rect width="340" height="752" rx="16" fill="${C.surface}" stroke="${C.border}" stroke-width="1"/>
    <text x="30" y="40" font-size="14" font-weight="700" fill="${C.text}">Proportion Speccing</text>

    <g transform="translate(30, 80)">
      ${[
        { prop: 'GRID WIDTH', val: '640px Max width', desc: 'Ensures standard presentation cross-client.' },
        { prop: 'SIDE MARGINS', val: '24px Padding', desc: 'Allows copy breathing space on mobile views.' },
        { prop: 'TYPO HIERARCHY', val: 'Ratio 1.4', desc: 'Visual scaling from 36px title to 12px caption.' },
        { prop: 'ACCESSIBLE COLOR', val: 'Contrast 4.5:1', desc: 'All body text is #111827 for AAA clarity.' }
      ].map((sp, i) => `
        <g transform="translate(0, ${i*150})">
          <text x="0" y="18" font-size="10.5" font-weight="700" fill="${C.primary}" letter-spacing="0.5">${sp.prop}</text>
          <text x="0" y="40" font-size="16" font-weight="800" fill="${C.text}">${sp.val}</text>
          <text x="0" y="60" font-size="12" fill="${C.muted}">${sp.desc}</text>
        </g>
      `).join('')}
    </g>
  </g>
  `;
  writeSVG('Page-09-Midfi-Wireframes.svg', wrap(1440, 1080, body, 'Page 9 — Mid-Fidelity Wireframes'));
}

// ─────────────────────────────────────────────────────────
// PAGE 10: HIGH-FIDELITY DESKTOP (1440x1080)
// ─────────────────────────────────────────────────────────
function page10() {
  const body = `
  <rect width="1440" height="1080" fill="${C.bg}"/>
  ${pageHeader('High-Fidelity Desktop Mockup Speccing', '10')}

  <!-- Desktop mock centered floating -->
  <g transform="translate(400, 120)" filter="url(#shadow)">
    <rect width="640" height="880" rx="16" fill="${C.outerBg}"/>
    <g transform="translate(0, 20)">
      <rect x="20" y="0" width="600" height="840" rx="12" fill="white"/>
      <text x="320" y="400" font-size="28" font-weight="800" fill="${C.primary}" text-anchor="middle">FlowSphere Email</text>
      <text x="320" y="430" font-size="14" fill="${C.muted}" text-anchor="middle">[High fidelity responsive layout committed to main root index.html]</text>
    </g>
  </g>

  <!-- Side specs callout boxes (Left & Right) -->
  <g transform="translate(60, 180)">
    <rect width="300" height="150" rx="12" fill="${C.surface}" stroke="${C.border}" stroke-width="1"/>
    <text x="24" y="36" font-size="12" font-weight="700" fill="${C.primary}">1. LOGO SEGMENT</text>
    <text x="24" y="64" font-size="14" font-weight="800" fill="${C.text}">FlowSphere Branding</text>
    <text x="24" y="86" font-size="12" fill="${C.muted}">Custom vector logo grouped as editable layers in active group frame.</text>
  </g>

  <g transform="translate(60, 360)">
    <rect width="300" height="150" rx="12" fill="${C.surface}" stroke="${C.border}" stroke-width="1"/>
    <text x="24" y="36" font-size="12" font-weight="700" fill="${C.primary}">2. HERO ILLUSTRATION</text>
    <text x="24" y="64" font-size="14" font-weight="800" fill="${C.text}">Interactive Dashboard</text>
    <text x="24" y="86" font-size="12" fill="${C.muted}">SVG diagram layout showing task status widgets, analytics, and metrics.</text>
  </g>

  <g transform="translate(1080, 180)">
    <rect width="300" height="150" rx="12" fill="${C.surface}" stroke="${C.border}" stroke-width="1"/>
    <text x="24" y="36" font-size="12" font-weight="700" fill="${C.primary}">3. FEATURES ROW</text>
    <text x="24" y="64" font-size="14" font-weight="800" fill="${C.text}">Feature Card System</text>
    <text x="24" y="86" font-size="12" fill="${C.muted}">Three cards showcasing automation, collaboration, and analytics capabilities.</text>
  </g>

  <g transform="translate(1080, 360)">
    <rect width="300" height="150" rx="12" fill="${C.surface}" stroke="${C.border}" stroke-width="1"/>
    <text x="24" y="36" font-size="12" font-weight="700" fill="${C.primary}">4. SPECIAL CONVERSION</text>
    <text x="24" y="64" font-size="14" font-weight="800" fill="${C.text}">30-Day Premium CTA</text>
    <text x="24" y="86" font-size="12" fill="${C.muted}">Urgency-driven countdown block designed to optimize customer onboarding conversion.</text>
  </g>
  `;
  writeSVG('Page-10-HiFi-Desktop.svg', wrap(1440, 1080, body, 'Page 10 — High-Fidelity Desktop Mockup'));
}

// ─────────────────────────────────────────────────────────
// PAGE 11: HIGH-FIDELITY MOBILE (1440x1080)
// ─────────────────────────────────────────────────────────
function page11() {
  const body = `
  <rect width="1440" height="1080" fill="${C.bg}"/>
  ${pageHeader('High-Fidelity Mobile Mockup Speccing', '11')}

  <!-- Mobile phone outline floating -->
  <g transform="translate(532, 120)" filter="url(#shadow)">
    <rect width="375" height="812" rx="40" fill="white" stroke="#1E293B" stroke-width="12"/>
    <!-- Top Notch -->
    <rect x="112" y="12" width="150" height="20" rx="10" fill="#1E293B"/>
    <!-- Screen content area -->
    <rect x="12" y="40" width="351" height="732" rx="28" fill="${C.surface}"/>
    
    <!-- Mobile header -->
    <rect x="12" y="40" width="351" height="50" rx="28 28 0 0" fill="white" stroke="${C.border}" stroke-width="1"/>
    <circle cx="40" cy="65" r="10" fill="url(#grad-brand)"/>
    <text x="60" y="70" font-size="12" font-weight="800" fill="url(#grad-brand)">FlowSphere</text>

    <!-- Mobile Hero -->
    <rect x="12" y="90" width="351" height="280" fill="${C.primaryLight}"/>
    <text x="187" y="140" font-size="20" font-weight="800" fill="${C.text}" text-anchor="middle">Welcome to</text>
    <text x="187" y="166" font-size="20" font-weight="800" fill="${C.primary}" text-anchor="middle">FlowSphere</text>
    <rect x="97" y="200" width="180" height="36" rx="8" fill="url(#grad-brand)"/>
    <text x="187" y="222" font-size="11" font-weight="700" fill="white" text-anchor="middle">Get Started Free</text>

    <!-- Mobile Features stacked -->
    ${[0, 1, 2].map((f, i) => `
      <g transform="translate(24, ${390 + i*70})">
        <rect width="327" height="60" rx="10" fill="white" stroke="${C.border}" stroke-width="1"/>
        <rect x="10" y="10" width="40" height="40" rx="8" fill="${C.primaryLight}"/>
        <rect x="60" y="22" width="160" height="8" rx="4" fill="${C.text}"/>
        <rect x="60" y="38" width="220" height="6" rx="3" fill="${C.muted}"/>
      </g>
    `).join('')}
  </g>

  <!-- Mobile spec callouts -->
  <g transform="translate(80, 220)">
    <rect width="380" height="160" rx="16" fill="${C.surface}" stroke="${C.border}" stroke-width="1"/>
    <text x="30" y="36" font-size="13" font-weight="700" fill="${C.primary}">FLUID TYPE SCALE</text>
    <text x="30" y="64" font-size="15" font-weight="800" fill="${C.text}">Mobile Typo Auto-resize</text>
    <text x="30" y="88" font-size="12" fill="${C.muted}" line-height="1.6">The typography scale rescales title sizes from 36px on desktop</text>
    <text x="30" y="106" font-size="12" fill="${C.muted}">down to 24px on mobile screens dynamically for readability.</text>
  </g>

  <g transform="translate(980, 220)">
    <rect width="380" height="160" rx="16" fill="${C.surface}" stroke="${C.border}" stroke-width="1"/>
    <text x="30" y="36" font-size="13" font-weight="700" fill="${C.primary}">VERTICAL FEATURE STACKING</text>
    <text x="30" y="64" font-size="15" font-weight="800" fill="${C.text}">Responsive Flexbox Flow</text>
    <text x="30" y="88" font-size="12" fill="${C.muted}" line-height="1.6">Feature cards stack into single columns with icon left-aligned,</text>
    <text x="30" y="106" font-size="12" fill="${C.muted}">maximizing thumb clickability targets on portrait viewports.</text>
  </g>
  `;
  writeSVG('Page-11-HiFi-Mobile.svg', wrap(1440, 1080, body, 'Page 11 — High-Fidelity Mobile Mockup'));
}

// ─────────────────────────────────────────────────────────
// PAGE 12: COMPONENTS (1440x1080)
// ─────────────────────────────────────────────────────────
function page12() {
  const body = `
  <rect width="1440" height="1080" fill="${C.bg}"/>
  ${pageHeader('Component Library & Interface Specs', '12')}

  <!-- Section Title -->
  <text x="80" y="130" font-size="18" font-weight="800" fill="${C.text}">Interface Components</text>

  <!-- Component Card 1: Buttons -->
  <g transform="translate(80, 160)" filter="url(#shadow)">
    <rect width="600" height="380" rx="16" fill="${C.surface}" stroke="${C.border}" stroke-width="1"/>
    <text x="30" y="36" font-size="13" font-weight="700" fill="${C.primary}" letter-spacing="1">BUTTON COMPONENTS</text>
    
    <!-- Primary CTA component -->
    <g transform="translate(30, 60)">
      <rect width="180" height="46" rx="8" fill="url(#grad-brand)"/>
      <text x="90" y="27" font-size="13" font-weight="700" fill="white" text-anchor="middle">→  Get Started</text>
      <text x="200" y="26" font-size="12" font-weight="600" fill="${C.text}">Primary Button</text>
      <text x="200" y="44" font-size="10.5" fill="${C.muted}">Height: 46px · Gradient: #6366F1→#8B5CF6 · Radius: 8px</text>
    </g>

    <!-- Secondary button component -->
    <g transform="translate(30, 130)">
      <rect width="180" height="46" rx="8" fill="white" stroke="${C.primary}" stroke-width="1.5"/>
      <text x="90" y="27" font-size="13" font-weight="700" fill="${C.primary}" text-anchor="middle">Learn More</text>
      <text x="200" y="26" font-size="12" font-weight="600" fill="${C.text}">Secondary Button</text>
      <text x="200" y="44" font-size="10.5" fill="${C.muted}">Height: 46px · Border: #6366F1 · Fill: White</text>
    </g>

    <!-- White button component -->
    <g transform="translate(30, 200)">
      <rect width="180" height="46" rx="8" fill="white" stroke="${C.border}" stroke-width="1"/>
      <text x="90" y="27" font-size="13" font-weight="700" fill="${C.primary}" text-anchor="middle">Claim Now</text>
      <text x="200" y="26" font-size="12" font-weight="600" fill="${C.text}">White Card Button</text>
      <text x="200" y="44" font-size="10.5" fill="${C.muted}">Height: 46px · Shadow: soft-elevation · Fill: White</text>
    </g>
  </g>

  <!-- Component Card 2: Feature Cards -->
  <g transform="translate(760, 160)" filter="url(#shadow)">
    <rect width="600" height="380" rx="16" fill="${C.surface}" stroke="${C.border}" stroke-width="1"/>
    <text x="30" y="36" font-size="13" font-weight="700" fill="${C.primary}" letter-spacing="1">CARD COMPONENTS</text>
    
    <!-- Feature card preview -->
    <g transform="translate(30, 60)">
      <rect width="180" height="150" rx="12" fill="white" stroke="${C.border}" stroke-width="1"/>
      <rect x="66" y="20" width="48" height="48" rx="8" fill="${C.primaryLight}"/>
      <text x="90" y="96" font-size="12" font-weight="700" fill="${C.text}" text-anchor="middle">Feature Title</text>
      <text x="90" y="116" font-size="10" fill="${C.muted}" text-anchor="middle">Detailed description text</text>
      
      <text x="200" y="56" font-size="13" font-weight="700" fill="${C.text}">Feature Card System</text>
      <text x="200" y="78" font-size="11" fill="${C.muted}">Size: 180×150px · Background: White · Border: #E5E7EB</text>
      <text x="200" y="96" font-size="11" fill="${C.muted}">Features icon: nested SVG centering dynamic color states.</text>
    </g>

    <!-- Testimonial card preview -->
    <g transform="translate(30, 230)">
      <rect width="240" height="110" rx="12" fill="white" stroke="${C.border}" stroke-width="1"/>
      <text x="16" y="30" font-size="10.5" fill="${C.text}" font-style="italic">"We love FlowSphere. Awesome team sync!"</text>
      <circle cx="28" cy="80" r="14" fill="${C.primaryLight}"/>
      <text x="50" y="78" font-size="11" font-weight="600" fill="${C.text}">Sarah Chen</text>
      <text x="50" y="92" font-size="9" fill="${C.muted}">Lead Dev @ Nexus</text>
      
      <text x="290" y="46" font-size="13" font-weight="700" fill="${C.text}">Testimonial Card</text>
      <text x="290" y="68" font-size="11" fill="${C.muted}">Size: 240×110px · Rating: ★★★★★</text>
    </g>
  </g>
  `;
  writeSVG('Page-12-Components.svg', wrap(1440, 1080, body, 'Page 12 — Component Library'));
}

// ─────────────────────────────────────────────────────────
// PAGE 13: COMPONENT VARIANTS (1440x1080)
// ─────────────────────────────────────────────────────────
function page13() {
  const body = `
  <rect width="1440" height="1080" fill="${C.bg}"/>
  ${pageHeader('Component Variants Matrix', '13')}

  <!-- Section Title -->
  <text x="80" y="130" font-size="18" font-weight="800" fill="${C.text}">Button Component States &amp; Variants</text>

  <!-- Button state variants table matrix -->
  <g transform="translate(80, 170)">
    <!-- Header -->
    <rect width="1280" height="40" rx="8" fill="${C.primaryLight}"/>
    <text x="24"  y="25" font-size="11" font-weight="800" fill="${C.primary}">VARIANT</text>
    <text x="240" y="25" font-size="11" font-weight="800" fill="${C.primary}">DEFAULT</text>
    <text x="500" y="25" font-size="11" font-weight="800" fill="${C.primary}">HOVER</text>
    <text x="760" y="25" font-size="11" font-weight="800" fill="${C.primary}">ACTIVE</text>
    <text x="1020" y="25" font-size="11" font-weight="800" fill="${C.primary}">DISABLED</text>

    <!-- Row 1: Primary Button -->
    <g transform="translate(0, 60)">
      <text x="24" y="32" font-size="12" font-weight="700" fill="${C.text}">Button/Primary</text>
      <!-- Default -->
      <g transform="translate(240, 6)">
        <rect width="160" height="40" rx="8" fill="url(#grad-brand)"/>
        <text x="80" y="24" font-size="12" font-weight="600" fill="white" text-anchor="middle">→ Get Started</text>
      </g>
      <!-- Hover -->
      <g transform="translate(500, 6)" filter="url(#shadow)">
        <rect width="160" height="40" rx="8" fill="${C.primaryDark}"/>
        <text x="80" y="24" font-size="12" font-weight="600" fill="white" text-anchor="middle">→ Get Started</text>
      </g>
      <!-- Active -->
      <g transform="translate(760, 6)">
        <rect width="160" height="40" rx="8" fill="${C.primaryDark}" stroke="#8B5CF6" stroke-width="2"/>
        <text x="80" y="24" font-size="12" font-weight="600" fill="white" text-anchor="middle">→ Get Started</text>
      </g>
      <!-- Disabled -->
      <g transform="translate(1020, 6)">
        <rect width="160" height="40" rx="8" fill="${C.border}"/>
        <text x="80" y="24" font-size="12" font-weight="600" fill="${C.muted}" text-anchor="middle">→ Get Started</text>
      </g>
    </g>

    <!-- Row 2: Secondary Button -->
    <g transform="translate(0, 160)">
      <text x="24" y="32" font-size="12" font-weight="700" fill="${C.text}">Button/Secondary</text>
      <!-- Default -->
      <g transform="translate(240, 6)">
        <rect width="160" height="40" rx="8" fill="white" stroke="${C.primary}" stroke-width="1.5"/>
        <text x="80" y="24" font-size="12" font-weight="600" fill="${C.primary}" text-anchor="middle">Learn More</text>
      </g>
      <!-- Hover -->
      <g transform="translate(500, 6)">
        <rect width="160" height="40" rx="8" fill="${C.primaryLight}" stroke="${C.primary}" stroke-width="1.5"/>
        <text x="80" y="24" font-size="12" font-weight="600" fill="${C.primary}" text-anchor="middle">Learn More</text>
      </g>
      <!-- Active -->
      <g transform="translate(760, 6)">
        <rect width="160" height="40" rx="8" fill="${C.primaryLight}" stroke="${C.primaryDark}" stroke-width="2"/>
        <text x="80" y="24" font-size="12" font-weight="600" fill="${C.primaryDark}" text-anchor="middle">Learn More</text>
      </g>
      <!-- Disabled -->
      <g transform="translate(1020, 6)">
        <rect width="160" height="40" rx="8" fill="white" stroke="${C.border}" stroke-width="1"/>
        <text x="80" y="24" font-size="12" font-weight="600" fill="${C.border}" text-anchor="middle">Learn More</text>
      </g>
    </g>
  </g>

  <!-- Spacing / naming notes -->
  <g transform="translate(80, 500)">
    <rect width="1280" height="140" rx="16" fill="${C.surface}" stroke="${C.border}" stroke-width="1"/>
    <text x="40" y="40" font-size="14" font-weight="700" fill="${C.text}">Component Variant Properties</text>
    <text x="40" y="70" font-size="12.5" fill="${C.muted}" line-height="1.6">
      Every component variants is fully specced inside our Figma library file. Properties include:
    </text>
    <text x="40" y="90" font-size="12" font-weight="600" fill="${C.primary}">type=[Primary, Secondary, Ghost] · size=[Large, Medium, Small] · state=[Default, Hover, Active, Disabled]</text>
  </g>
  `;
  writeSVG('Page-13-Component-Variants.svg', wrap(1440, 1080, body, 'Page 13 — Component Variants'));
}

// ─────────────────────────────────────────────────────────
// PAGE 14: DESIGN SYSTEM (1440x1080)
// ─────────────────────────────────────────────────────────
function page14() {
  const body = `
  <rect width="1440" height="1080" fill="${C.bg}"/>
  ${pageHeader('FlowSphere System Tokens', '14')}

  <!-- Left: Color Palette Swatches -->
  <g transform="translate(80, 140)">
    <text x="0" y="24" font-size="16" font-weight="800" fill="${C.text}">Color Palette</text>
    
    ${[
      { name: 'Primary/Default', hex: '#6366F1', desc: 'SaaS soft indigo accent' },
      { name: 'Secondary/Default', hex: '#8B5CF6', desc: 'Accent secondary gradient' },
      { name: 'Success/Default', hex: '#22C55E', desc: 'Positive verification indicators' },
      { name: 'Neutral/Text', hex: '#111827', desc: 'High-contrast text' },
      { name: 'Neutral/Surface', hex: '#F8FAFC', desc: 'Subtle gray surface fills' },
      { name: 'Neutral/Border', hex: '#E5E7EB', desc: 'Separators & card borders' }
    ].map((col, i) => `
      <g transform="translate(0, ${50 + i*90})">
        <rect width="50" height="50" rx="8" fill="${col.hex}" stroke="${C.border}" stroke-width="1"/>
        <text x="70" y="20" font-size="13" font-weight="700" fill="${C.text}">${col.name}</text>
        <text x="70" y="38" font-size="12" fill="${C.muted}">${col.hex} · ${col.desc}</text>
      </g>
    `).join('')}
  </g>

  <!-- Right: Typography Scale -->
  <g transform="translate(680, 140)">
    <text x="0" y="24" font-size="16" font-weight="800" fill="${C.text}">Typography Scale (Ramp)</text>
    
    <g transform="translate(0, 50)">
      ${[
        { name: 'H1 / Hero Title', size: '36px', wt: '800 ExtraBold', usage: 'Main headings' },
        { name: 'H2 / Section Title', size: '26px', wt: '700 Bold', usage: 'Secondary headings' },
        { name: 'H3 / Card Title', size: '18px', wt: '700 Bold', usage: 'Card titles' },
        { name: 'Body / Regular', size: '16px', wt: '400 Regular', usage: 'Paragraphs, descriptions' },
        { name: 'Small / Medium', size: '14px', wt: '500 Medium', usage: 'Secondary labels, buttons' },
        { name: 'Caption / Bold', size: '12px', wt: '700 Bold', usage: 'Eyebrows, tag text' }
      ].map((t, i) => `
        <g transform="translate(0, ${i*90})">
          <text x="0" y="16" font-size="11" font-weight="700" fill="${C.primary}" letter-spacing="0.5">${t.name.toUpperCase()}</text>
          <text x="0" y="38" font-size="18" font-weight="800" fill="${C.text}">${t.size} · Inter ${t.wt}</text>
          <text x="0" y="56" font-size="12" fill="${C.muted}">${t.usage}</text>
        </g>
      `).join('')}
    </g>
  </g>
  `;
  writeSVG('Page-14-Design-System.svg', wrap(1440, 1080, body, 'Page 14 — Design System'));
}
// ─────────────────────────────────────────────────────────
// PAGE 15: INTERACTIVE PROTOTYPE SPECS (1440x900)
// ─────────────────────────────────────────────────────────
function page15() {
  const body = `
  <rect width="1440" height="900" fill="${C.bg}"/>
  ${pageHeader('Figma Interactive Prototype Flow', '15')}

  <!-- Flow diagram mapping hotspots to modals -->
  <g transform="translate(80, 140)">
    <text x="0" y="24" font-size="16" font-weight="800" fill="${C.text}">Interaction &amp; Connection Map</text>

    <!-- Source frame (welcome email diagram) -->
    <g transform="translate(0, 60)">
      <rect width="380" height="600" rx="16" fill="${C.surface}" stroke="${C.border}" stroke-width="1.5"/>
      <rect width="380" height="50" rx="16 16 0 0" fill="${C.bg}" stroke="${C.border}" stroke-width="1"/>
      <text x="190" y="32" font-size="13" font-weight="800" fill="${C.text}" text-anchor="middle">FlowSphere Email template</text>
      
      <!-- Hotspots list in the mockup -->
      <!-- Contact header nav -->
      <g transform="translate(20, 12)">
        <rect width="340" height="26" rx="4" fill="rgba(99,102,241,0.06)" stroke="${C.primary}" stroke-width="1" stroke-dasharray="2 2"/>
        <text x="320" y="18" font-size="9" font-weight="700" fill="${C.primary}" text-anchor="end">Hotspot E (Contact)</text>
      </g>

      <!-- Get Started -->
      <g transform="translate(40, 120)">
        <rect width="300" height="40" rx="8" fill="rgba(99,102,241,0.12)" stroke="${C.primary}" stroke-width="1.5"/>
        <text x="150" y="24" font-size="11" font-weight="800" fill="${C.primary}" text-anchor="middle">Hotspot A: "Get Started Free"</text>
      </g>

      <!-- Features (just static illustration) -->
      <rect x="40" y="180" width="300" height="120" rx="8" fill="white" stroke="${C.border}"/>
      <text x="190" y="240" font-size="12" fill="${C.muted}" text-anchor="middle">Features Grid</text>

      <!-- Claim Now -->
      <g transform="translate(40, 320)">
        <rect width="300" height="40" rx="8" fill="rgba(99,102,241,0.12)" stroke="${C.primary}" stroke-width="1.5"/>
        <text x="150" y="24" font-size="11" font-weight="800" fill="${C.primary}" text-anchor="middle">Hotspot B: "Claim Now"</text>
      </g>

      <!-- Download badges (App Store / Google Play) -->
      <g transform="translate(40, 390)">
        <rect width="140" height="40" rx="8" fill="rgba(99,102,241,0.12)" stroke="${C.primary}" stroke-width="1.5"/>
        <text x="70" y="24" font-size="9.5" font-weight="700" fill="${C.primary}" text-anchor="middle">Hotspot F (Play Store)</text>
      </g>
      <g transform="translate(200, 390)">
        <rect width="140" height="40" rx="8" fill="rgba(99,102,241,0.12)" stroke="${C.primary}" stroke-width="1.5"/>
        <text x="70" y="24" font-size="9.5" font-weight="700" fill="${C.primary}" text-anchor="middle">Hotspot G (App Store)</text>
      </g>

      <!-- Footer Policy & Terms -->
      <g transform="translate(40, 520)">
        <rect width="90" height="30" rx="6" fill="rgba(99,102,241,0.12)" stroke="${C.primary}" stroke-width="1.5"/>
        <text x="45" y="18" font-size="9" font-weight="700" fill="${C.primary}" text-anchor="middle">Hotspot C (Privacy)</text>
      </g>
      <g transform="translate(145, 520)">
        <rect width="90" height="30" rx="6" fill="rgba(99,102,241,0.12)" stroke="${C.primary}" stroke-width="1.5"/>
        <text x="45" y="18" font-size="9" font-weight="700" fill="${C.primary}" text-anchor="middle">Hotspot D (Terms)</text>
      </g>
    </g>

    <!-- Target frames (modal overlays diagram in columns) -->
    <!-- Column 1 (X: 700) -->
    <g transform="translate(700, 60)">
      <!-- 1. Success Popup -->
      <g id="tgt-success" transform="translate(0, 0)" filter="url(#shadow-modal)">
        <rect width="240" height="110" rx="10" fill="white" stroke="${C.success}" stroke-width="1.5"/>
        <text x="20" y="32" font-size="12" font-weight="800" fill="${C.text}">1. Success Popup</text>
        <text x="20" y="56" font-size="10.5" fill="${C.muted}">- Thank You Message</text>
        <text x="20" y="74" font-size="10.5" fill="${C.muted}">- Continue &amp; Close buttons</text>
      </g>

      <!-- 2. Limited Offer Popup -->
      <g id="tgt-offer" transform="translate(0, 160)" filter="url(#shadow-modal)">
        <rect width="240" height="110" rx="10" fill="white" stroke="${C.primary}" stroke-width="1.5"/>
        <text x="20" y="32" font-size="12" font-weight="800" fill="${C.text}">2. Limited Offer Popup</text>
        <text x="20" y="56" font-size="10.5" fill="${C.muted}">- 30 Days Free Benefits</text>
        <text x="20" y="74" font-size="10.5" fill="${C.muted}">- Claim &amp; Close buttons</text>
      </g>

      <!-- 3. Contact Information Popup -->
      <g id="tgt-contact" transform="translate(0, 320)" filter="url(#shadow-modal)">
        <rect width="240" height="110" rx="10" fill="white" stroke="${C.primary}" stroke-width="1.5"/>
        <text x="20" y="32" font-size="12" font-weight="800" fill="${C.text}">3. Contact Popup</text>
        <text x="20" y="56" font-size="10.5" fill="${C.muted}">- Email, Phone, Website</text>
        <text x="20" y="74" font-size="10.5" fill="${C.muted}">- Social links &amp; Close</text>
      </g>
    </g>

    <!-- Column 2 (X: 980) -->
    <g transform="translate(980, 60)">
      <!-- 4. Privacy Policy Page -->
      <g id="tgt-privacy" transform="translate(0, 0)" filter="url(#shadow-modal)">
        <rect width="240" height="110" rx="10" fill="white" stroke="${C.primary}" stroke-width="1.5"/>
        <text x="20" y="32" font-size="12" font-weight="800" fill="${C.text}">4. Privacy Policy Page</text>
        <text x="20" y="56" font-size="10.5" fill="${C.muted}">- Full-page policy layout</text>
        <text x="20" y="74" font-size="10.5" fill="${C.muted}">- Interactive Back button</text>
      </g>

      <!-- 5. Terms & Conditions Page -->
      <g id="tgt-terms" transform="translate(0, 160)" filter="url(#shadow-modal)">
        <rect width="240" height="110" rx="10" fill="white" stroke="${C.primary}" stroke-width="1.5"/>
        <text x="20" y="32" font-size="12" font-weight="800" fill="${C.text}">5. Terms &amp; Conditions Page</text>
        <text x="20" y="56" font-size="10.5" fill="${C.muted}">- Full-page terms layout</text>
        <text x="20" y="74" font-size="10.5" fill="${C.muted}">- Interactive Back button</text>
      </g>

      <!-- 6. Download Confirmations -->
      <g id="tgt-download" transform="translate(0, 320)" filter="url(#shadow-modal)">
        <rect width="240" height="110" rx="10" fill="white" stroke="${C.primary}" stroke-width="1.5"/>
        <text x="20" y="32" font-size="12" font-weight="800" fill="${C.text}">6. Download Confirmation</text>
        <text x="20" y="56" font-size="10.5" fill="${C.muted}">- App Store / Google Play</text>
        <text x="20" y="74" font-size="10.5" fill="${C.muted}">- QR Code scan &amp; Close</text>
      </g>
    </g>

    <!-- Connection Paths -->
    <!-- Hotspot A -> Success -->
    <path d="M340 200 L 520 200 L 520 115 L 700 115" stroke="${C.primary}" stroke-width="1.5" fill="none" stroke-dasharray="3 3"/>
    <!-- Hotspot B -> Offer -->
    <path d="M340 400 L 540 400 L 540 275 L 700 275" stroke="${C.primary}" stroke-width="1.5" fill="none" stroke-dasharray="3 3"/>
    <!-- Hotspot E -> Contact -->
    <path d="M360 85 L 560 85 L 560 435 L 700 435" stroke="${C.primary}" stroke-width="1.5" fill="none" stroke-dasharray="3 3"/>
    <!-- Hotspot C -> Privacy -->
    <path d="M130 680 L 130 710 L 940 710 L 940 115 L 980 115" stroke="${C.primary}" stroke-width="1.5" fill="none" stroke-dasharray="3 3"/>
    <!-- Hotspot D -> Terms -->
    <path d="M235 680 L 235 730 L 960 730 L 960 275 L 980 275" stroke="${C.primary}" stroke-width="1.5" fill="none" stroke-dasharray="3 3"/>
    <!-- Hotspots F/G -> Download -->
    <path d="M180 470 L 180 490 L 920 490 L 920 435 L 980 435" stroke="${C.primary}" stroke-width="1.5" fill="none" stroke-dasharray="3 3"/>

    <!-- Arrow head caps -->
    <polygon points="700,115 692,111 692,119" fill="${C.primary}"/>
    <polygon points="700,275 692,271 692,279" fill="${C.primary}"/>
    <polygon points="700,435 692,431 692,439" fill="${C.primary}"/>
    <polygon points="980,115 972,111 972,119" fill="${C.primary}"/>
    <polygon points="980,275 972,271 972,279" fill="${C.primary}"/>
    <polygon points="980,435 972,431 972,439" fill="${C.primary}"/>
  </g>
  `;
  writeSVG('Page-15-Prototype.svg', wrap(1440, 900, body, 'Page 15 — Prototype Spec'));
}

// ─────────────────────────────────────────────────────────
// PAGE 16: ASSETS & ICONS (1440x900)
// ─────────────────────────────────────────────────────────
function page16() {
  const body = `
  <rect width="1440" height="900" fill="${C.bg}"/>
  ${pageHeader('Vector Assets & Icons library', '16')}

  <!-- Section Title -->
  <text x="80" y="130" font-size="18" font-weight="800" fill="${C.text}">Custom UI Icons (24×24px)</text>

  <!-- Icons grid -->
  <g transform="translate(80, 160)">
    ${[
      { name: 'Checkmark', d: 'M4 12l5 5 11-11' },
      { name: 'ArrowRight', d: 'M5 12h14m-6-6l6 6-6 6' },
      { name: 'ShieldLock', d: 'M12 2L4 6v6c0 4.4 3.6 8 8 8s8-3.6 8-8V6l-8-4z' },
      { name: 'ProductivityChart', d: 'M4 20h16M4 16h4v4H4zm6-6h4v10h-4zm6-6h4v16h-4z' },
      { name: 'TeamCollab', d: 'M8 8a3 3 0 100-6 3 3 0 000 6zm8 0a3 3 0 100-6 3 3 0 000 6z' },
      { name: 'AlertBell', d: 'M12 2a4 4 0 014 4v6l2 2H6l2-2V6a4 4 0 014-4z' }
    ].map((ic, i) => `
      <g transform="translate(${i*210}, 0)">
        <rect width="80" height="80" rx="12" fill="${C.surface}" stroke="${C.border}" stroke-width="1"/>
        <g transform="translate(28,28) scale(1)" fill="none" stroke="${C.primary}" stroke-width="2" stroke-linecap="round">
          <path d="${ic.d}"/>
        </g>
        <text x="40" y="110" font-size="11" font-weight="700" fill="${C.text}" text-anchor="middle">${ic.name}</text>
      </g>
    `).join('')}
  </g>

  <!-- Large dashboard assets preview -->
  <g transform="translate(80, 360)">
    <text x="0" y="30" font-size="18" font-weight="800" fill="${C.text}">Marketing Badge Illustrations</text>
    
    <g transform="translate(0, 60)" filter="url(#shadow)">
      <rect width="600" height="300" rx="16" fill="${C.surface}" stroke="${C.border}" stroke-width="1"/>
      <text x="30" y="44" font-size="14" font-weight="700" fill="${C.text}">Dashboard Widgets previews</text>
      
      <!-- Mini graph -->
      <g transform="translate(30, 80)">
        <rect width="240" height="150" rx="10" fill="white" stroke="${C.border}"/>
        <rect x="20" y="20" width="100" height="8" rx="4" fill="${C.text}" opacity="0.6"/>
        <!-- Chart bars -->
        <rect x="20" y="110" width="14" height="20" rx="2" fill="${C.primary}" opacity="0.4"/>
        <rect x="40" y="80" width="14" height="50" rx="2" fill="${C.primary}" opacity="0.6"/>
        <rect x="60" y="50" width="14" height="80" rx="2" fill="${C.primary}"/>
      </g>
    </g>
  </g>
  `;
  writeSVG('Page-16-Assets-Icons.svg', wrap(1440, 900, body, 'Page 16 — Assets & Icons'));
}

// Run All
function generateAll() {
  console.log('\n🎨 Generating 16 Premium Case Study SVG Pages...\n');
  page1();
  page2();
  page3();
  page4();
  page5();
  page6();
  page7();
  page8();
  page9();
  page10();
  page11();
  page12();
  page13();
  page14();
  page15();
  page16();
  console.log('\n✅ All case study SVG pages saved successfully!');
}

generateAll();
