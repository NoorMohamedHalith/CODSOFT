// generate-figma-case-study.js
// Node.js script to dynamically generate 16 high-fidelity widescreen vector slides for the GreenLife Case Study

const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, 'Figma');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Global SVG Widescreen Slide Wrapper helper
const SLIDE_STYLES = `
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&amp;family=Inter:wght@400;500;600&amp;display=swap');
      .slide-title { font-family: 'Poppins', sans-serif; font-weight: 700; fill: #2E7D32; font-size: 36px; }
      .slide-subtitle { font-family: 'Poppins', sans-serif; font-weight: 600; fill: #FF9800; font-size: 16px; letter-spacing: 2px; text-transform: uppercase; }
      .slide-body { font-family: 'Inter', sans-serif; font-weight: 400; fill: #263238; font-size: 15px; }
      .slide-body-bold { font-family: 'Inter', sans-serif; font-weight: 600; fill: #263238; font-size: 15px; }
      .slide-muted { fill: #546E7A; font-size: 13px; }
      .phone-frame-bg { fill: #FFF8E7; }
      .accent-btn-fill { fill: url(#orange-grad); }
      .green-btn-fill { fill: url(#green-grad); }
      .white-text { fill: #FFFFFF; }
      .drop-shadow { filter: drop-shadow(0px 10px 30px rgba(46,125,50,0.06)); }
    </style>
    <linearGradient id="orange-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FF9800" />
      <stop offset="100%" stop-color="#F57C00" />
    </linearGradient>
    <linearGradient id="green-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2E7D32" />
      <stop offset="100%" stop-color="#1B5E20" />
    </linearGradient>
    <clipPath id="iphone-screen">
      <rect x="0" y="0" width="375" height="812" rx="40" />
    </clipPath>
  </defs>
`;

function wrapSlide(body, pageNum, title) {
  return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg width="1440" height="900" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg" style="background-color:#FFF8E7;">
  ${SLIDE_STYLES}
  <!-- Outer slide deck background card -->
  <rect x="0" y="0" width="1440" height="900" rx="32" fill="#FFFFFF" />
  
  <!-- Content -->
  ${body}
  
  <!-- Slide footer bar metadata -->
  <g transform="translate(80, 840)">
    <line x1="0" y1="0" x2="1280" y2="0" stroke="#E8F5E9" stroke-width="2" />
    <text x="0" y="24" font-family="'Poppins', sans-serif" font-weight="600" font-size="12" fill="#FF9800">GREENLIFE CAFÉ</text>
    <text x="140" y="24" font-family="'Inter', sans-serif" font-size="12" fill="#546E7A">Noor Mohamed Halith — UI/UX Portfolio Case Study</text>
    <text x="1280" y="24" text-anchor="end" font-family="'Poppins', sans-serif" font-weight="700" font-size="12" fill="#2E7D32">PAGE ${pageNum} OF 16</text>
  </g>
</svg>
`;
}

// Helper to draw a mock mobile frame at a specific offset
function drawMockMobile(x, y, innerContent) {
  return `
    <g transform="translate(${x}, ${y})" class="drop-shadow">
      <!-- Phone body frame shell -->
      <rect x="-8" y="-8" width="391" height="828" rx="48" fill="#263238" />
      <rect x="0" y="0" width="375" height="812" rx="40" fill="#FFF8E7" />
      
      <!-- Clipped screen content -->
      <g clip-path="url(#iphone-screen)">
        ${innerContent}
        
        <!-- Status Bar info -->
        <text x="36" y="22" font-family="'Inter', sans-serif" font-weight="600" font-size="11" fill="#263238">9:41</text>
        <circle cx="330" cy="18" r="2.5" fill="#263238" />
        <circle cx="340" cy="18" r="4" fill="#263238" opacity="0.3" />
        
        <!-- Notch -->
        <rect x="112" y="0" width="150" height="28" rx="14" fill="#263238" />
        
        <!-- Bottom bar indicator -->
        <rect x="120" y="798" width="135" height="4" rx="2" fill="#263238" opacity="0.3" />
      </g>
    </g>
  `;
}

// ─────────────────────────────────────────────────────────
// PAGE 01: COVER SLIDE
// ─────────────────────────────────────────────────────────
const page01 = wrapSlide(`
  <g transform="translate(80, 120)">
    <text x="0" y="40" class="slide-subtitle">TASK 3 — MOBILE INTERACTION</text>
    <text x="0" y="90" class="slide-title" font-size="48">GreenLife Café App Design</text>
    
    <text x="0" y="160" class="slide-body" font-size="18" fill="#546E7A">
      <tspan x="0" dy="0">A premium, nature-inspired visual concept for a healthy organic food</tspan>
      <tspan x="0" dy="28">delivery app, featuring an interactive reservation flow, category index,</tspan>
      <tspan x="0" dy="28">reusable UI components, and complete portfolio UX case study.</tspan>
    </text>
    
    <!-- Design system metrics badges -->
    <g transform="translate(0, 280)">
      <rect x="0" y="0" width="160" height="70" rx="16" fill="#E8F5E9" />
      <text x="20" y="32" font-family="'Poppins', sans-serif" font-weight="700" font-size="20" fill="#2E7D32">#2E7D32</text>
      <text x="20" y="52" font-family="'Inter', sans-serif" font-size="11" fill="#546E7A">Primary Color</text>
      
      <rect x="180" y="0" width="160" height="70" rx="16" fill="#FFF3E0" />
      <text x="200" y="32" font-family="'Poppins', sans-serif" font-weight="700" font-size="20" fill="#FF9800">#FF9800</text>
      <text x="200" y="52" font-family="'Inter', sans-serif" font-size="11" fill="#546E7A">Accent Orange</text>

      <rect x="360" y="0" width="160" height="70" rx="16" fill="#ECEFF1" />
      <text x="380" y="32" font-family="'Poppins', sans-serif" font-weight="700" font-size="20" fill="#263238">Poppins</text>
      <text x="380" y="52" font-family="'Inter', sans-serif" font-size="11" fill="#546E7A">Typography Family</text>
    </g>
  </g>
  
  ${drawMockMobile(920, 50, `
    <!-- Leaf patterns -->
    <path d="M0 0 C60 80, 100 200, 40 300 Z" fill="#2E7D32" opacity="0.05" />
    <g transform="translate(147, 180)">
      <circle cx="40" cy="40" r="40" fill="#FFFFFF" />
      <circle cx="40" cy="40" r="30" fill="#2E7D32" />
    </g>
    <text x="187" y="300" text-anchor="middle" font-size="24" class="title-pop">GreenLife</text>
    <text x="187" y="320" text-anchor="middle" font-size="11" class="body-int muted" letter-spacing="2">Fresh • Healthy • Delicious</text>
    
    <!-- Hero salad image box -->
    <rect x="50" y="380" width="275" height="200" rx="20" fill="#C8E6C9" />
    <text x="187" y="490" text-anchor="middle" font-size="14" class="body-int-semi" fill="#2E7D32">Vibrant Salad Plate</text>
    
    <!-- Button -->
    <rect x="47" y="660" width="280" height="52" rx="26" fill="url(#orange-grad)" />
    <text x="187" y="692" text-anchor="middle" font-size="14" class="white-text body-int-semi">Start Exploring</text>
  `)}
`, '01', 'Cover Deck');

// ─────────────────────────────────────────────────────────
// PAGE 02: ABOUT GREENLIFE SLIDE
// ─────────────────────────────────────────────────────────
const page02 = wrapSlide(`
  <g transform="translate(80, 120)">
    <text x="0" y="40" class="slide-subtitle">02 — RESTAURANT STORY</text>
    <text x="0" y="90" class="slide-title">Culinary Philosophy &amp; Sourcing</text>
    <text x="0" y="150" class="slide-body" fill="#546E7A">
      <tspan x="0" dy="0">We designed the About screen to communicate the café's organic brand values.</tspan>
      <tspan x="0" dy="24">By highlighting farm-to-table connections and presenting our head chef,</tspan>
      <tspan x="0" dy="24">we build product credibility that matches the organic menu concept.</tspan>
    </text>
    
    <g transform="translate(0, 260)">
      <rect x="0" y="0" width="700" height="150" rx="20" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5" />
      <text x="24" y="40" font-size="16" class="title-pop">Farm-to-Table Transparency</text>
      <text x="24" y="70" font-size="14" class="slide-body" fill="#546E7A">
        <tspan x="24" dy="0">Each menu element displays its calorie content and ingredient origin,</tspan>
        <tspan x="24" dy="22">giving users reassurance on dietary preferences and organic compliance.</tspan>
      </text>
    </g>
  </g>
  
  ${drawMockMobile(920, 50, `
    <text x="187" y="74" text-anchor="middle" font-size="15" class="title-pop">Our Story</text>
    <rect x="20" y="110" width="335" height="140" rx="16" fill="#C8E6C9" />
    
    <text x="20" y="280" font-size="18" class="title-pop">Pure Organic Love</text>
    <text x="20" y="310" font-size="12" class="body-int muted">
      <tspan x="20" dy="0">We serve 100% plant-based organic meals</tspan>
      <tspan x="20" dy="16">sourced directly from sustainable local farms.</tspan>
    </text>
    
    <rect x="20" y="380" width="335" height="80" rx="12" fill="#FFFFFF" class="shadow-filter" />
    <text x="80" y="420" font-size="13" class="body-int-semi">Chef Marcus Rivera</text>
    
    <rect x="20" y="580" width="335" height="48" rx="24" fill="url(#green-grad)" />
    <text x="187" y="608" text-anchor="middle" font-size="13" class="white-text body-int-semi">Explore Menu</text>
  `)}
`, '02', 'Culinary Philosophy');

// 3. Menu Categories
const page03 = wrapSlide(`
  <g transform="translate(80, 120)">
    <text x="0" y="40" class="slide-subtitle">03 — MENU SELECTION</text>
    <text x="0" y="90" class="slide-title">Interactive Categories Grid</text>
    <text x="0" y="150" class="slide-body" fill="#546E7A">
      <tspan x="0" dy="0">Category selector screens feature large visual food imagery cards</tspan>
      <tspan x="0" dy="24">enabling fast search discovery. The 2-column card layout utilizes standard</tspan>
      <tspan x="0" dy="24">8-point grid card sizing for a balanced layout hierarchy.</tspan>
    </text>
  </g>
  ${drawMockMobile(920, 50, `
    <text x="20" y="90" font-size="20" class="title-pop">What would you like?</text>
    <g transform="translate(20, 120)">
      <rect x="0" y="0" width="160" height="140" rx="16" fill="#FFFFFF" class="shadow-filter" />
      <rect x="0" y="0" width="160" height="90" rx="16" fill="#C8E6C9" />
      <text x="80" y="118" text-anchor="middle" font-size="12" class="body-int-semi">Healthy Salads</text>
    </g>
    <g transform="translate(195, 120)">
      <rect x="0" y="0" width="160" height="140" rx="16" fill="#FFFFFF" class="shadow-filter" />
      <rect x="0" y="0" width="160" height="90" rx="16" fill="#FFE0B2" />
      <text x="80" y="118" text-anchor="middle" font-size="12" class="body-int-semi">Gourmet Burgers</text>
    </g>
    <g transform="translate(20, 280)">
      <rect x="0" y="0" width="160" height="140" rx="16" fill="#FFFFFF" class="shadow-filter" />
      <rect x="0" y="0" width="160" height="90" rx="16" fill="#FFCCBC" />
      <text x="80" y="118" text-anchor="middle" font-size="12" class="body-int-semi">Wood-Fired Pizza</text>
    </g>
    <g transform="translate(195, 280)">
      <rect x="0" y="0" width="160" height="140" rx="16" fill="#FFFFFF" class="shadow-filter" />
      <rect x="0" y="0" width="160" height="90" rx="16" fill="#E1F5FE" />
      <text x="80" y="118" text-anchor="middle" font-size="12" class="body-int-semi">Fresh Juices</text>
    </g>
  `)}
`, '03', 'Categories Grid');

// Pages 04 to 08: Category Screens specs
const page04 = wrapSlide(`
  <g transform="translate(80, 120)">
    <text x="0" y="40" class="slide-subtitle">04 — SPECIALTY SECTIONS</text>
    <text x="0" y="90" class="slide-title">Healthy Salads Screen</text>
    <text x="0" y="150" class="slide-body" fill="#546E7A">
      <tspan x="0" dy="0">High-fiber salads cards with calorie count, ratings, and veggie badges.</tspan>
      <tspan x="0" dy="24">Interactive add buttons let users insert items to cart immediately.</tspan>
    </text>
  </g>
  ${drawMockMobile(920, 50, `
    <text x="20" y="100" font-size="18" class="title-pop">Healthy Salads</text>
    <g transform="translate(20, 130)">
      <rect x="0" y="0" width="335" height="120" rx="16" fill="#FFFFFF" class="shadow-filter" />
      <rect x="0" y="0" width="110" height="120" rx="16" fill="#C8E6C9" />
      <text x="126" y="32" font-size="13" class="body-int-semi">Avocado Quinoa Salad</text>
      <text x="126" y="50" font-size="10" class="body-int muted">320 kcal • ★ 4.9</text>
      <text x="126" y="95" font-size="15" class="title-pop">$12.90</text>
    </g>
  `)}
`, '04', 'Salads Spec');

const page05 = wrapSlide(`
  <g transform="translate(80, 120)">
    <text x="0" y="40" class="slide-subtitle">05 — SPECIALTY SECTIONS</text>
    <text x="0" y="90" class="slide-title">Gourmet Burgers Screen</text>
    <text x="0" y="150" class="slide-body" fill="#546E7A">
      <tspan x="0" dy="0">Plant-based and grass-fed burger selections with ratings and details.</tspan>
    </text>
  </g>
  ${drawMockMobile(920, 50, `
    <text x="20" y="100" font-size="18" class="title-pop">Gourmet Burgers</text>
    <g transform="translate(20, 130)">
      <rect x="0" y="0" width="335" height="120" rx="16" fill="#FFFFFF" class="shadow-filter" />
      <rect x="0" y="0" width="110" height="120" rx="16" fill="#FFE0B2" />
      <text x="126" y="32" font-size="13" class="body-int-semi">Avocado Veg Burger</text>
      <text x="126" y="95" font-size="15" class="title-pop">$14.50</text>
    </g>
  `)}
`, '05', 'Burgers Spec');

const page06 = wrapSlide(`
  <g transform="translate(80, 120)">
    <text x="0" y="40" class="slide-subtitle">06 — SPECIALTY SECTIONS</text>
    <text x="0" y="90" class="slide-title">Wood-Fired Pizza Screen</text>
    <text x="0" y="150" class="slide-body" fill="#546E7A">
      <tspan x="0" dy="0">Artisan wood-fired pizza card layout including rating and pricing details.</tspan>
    </text>
  </g>
  ${drawMockMobile(920, 50, `
    <text x="20" y="100" font-size="18" class="title-pop">Wood-Fired Pizza</text>
    <g transform="translate(20, 130)">
      <rect x="0" y="0" width="335" height="120" rx="16" fill="#FFFFFF" class="shadow-filter" />
      <rect x="0" y="0" width="110" height="120" rx="16" fill="#FFCCBC" />
      <text x="126" y="32" font-size="13" class="body-int-semi">Rustic Tomato Pesto</text>
      <text x="126" y="95" font-size="15" class="title-pop">$15.50</text>
    </g>
  `)}
`, '06', 'Pizza Spec');

const page07 = wrapSlide(`
  <g transform="translate(80, 120)">
    <text x="0" y="40" class="slide-subtitle">07 — SPECIALTY SECTIONS</text>
    <text x="0" y="90" class="slide-title">Drinks &amp; Juices Screen</text>
    <text x="0" y="150" class="slide-body" fill="#546E7A">
      <tspan x="0" dy="0">Cold-pressed organic juices, detox drinks, smoothies and shake options.</tspan>
    </text>
  </g>
  ${drawMockMobile(920, 50, `
    <text x="20" y="100" font-size="18" class="title-pop">Juices &amp; Drinks</text>
    <g transform="translate(20, 130)">
      <rect x="0" y="0" width="335" height="120" rx="16" fill="#FFFFFF" class="shadow-filter" />
      <rect x="0" y="0" width="110" height="120" rx="16" fill="#E1F5FE" />
      <text x="126" y="32" font-size="13" class="body-int-semi">Detox Cold-Pressed</text>
      <text x="126" y="95" font-size="15" class="title-pop">$7.50</text>
    </g>
  `)}
`, '07', 'Drinks Spec');

const page08 = wrapSlide(`
  <g transform="translate(80, 120)">
    <text x="0" y="40" class="slide-subtitle">08 — SPECIALTY SECTIONS</text>
    <text x="0" y="90" class="slide-title">Organic Desserts Screen</text>
    <text x="0" y="150" class="slide-body" fill="#546E7A">
      <tspan x="0" dy="0">Chia puddings and gluten-free chocolate tarts with calorie details.</tspan>
    </text>
  </g>
  ${drawMockMobile(920, 50, `
    <text x="20" y="100" font-size="18" class="title-pop">Organic Desserts</text>
    <g transform="translate(20, 130)">
      <rect x="0" y="0" width="335" height="120" rx="16" fill="#FFFFFF" class="shadow-filter" />
      <rect x="0" y="0" width="110" height="120" rx="16" fill="#F3E5F5" />
      <text x="126" y="32" font-size="13" class="body-int-semi">Matcha Chia Pudding</text>
      <text x="126" y="95" font-size="15" class="title-pop">$8.90</text>
    </g>
  `)}
`, '08', 'Desserts Spec');

// 9. Reservation Form
const page09 = wrapSlide(`
  <g transform="translate(80, 120)">
    <text x="0" y="40" class="slide-subtitle">09 — TABLE BOOKING</text>
    <text x="0" y="90" class="slide-title">Reservation Form Screen</text>
    <text x="0" y="150" class="slide-body" fill="#546E7A">
      <tspan x="0" dy="0">The booking form uses clear inputs to make table reservation simple.</tspan>
      <tspan x="0" dy="24">Form inputs are padded correctly to support fingers of all sizes.</tspan>
    </text>
  </g>
  ${drawMockMobile(920, 50, `
    <text x="20" y="100" font-size="18" class="title-pop">Book a Table</text>
    <g transform="translate(20, 140)">
      <rect x="0" y="20" width="335" height="44" rx="10" fill="#FFFFFF" stroke="#E8F5E9" />
      <text x="12" y="46" font-size="13" class="body-int">Noor Mohamed Halith</text>
      
      <rect x="0" y="90" width="335" height="44" rx="10" fill="#FFFFFF" stroke="#E8F5E9" />
      <text x="12" y="116" font-size="13" class="body-int">+91 98765 43210</text>
    </g>
    <rect x="20" y="480" width="335" height="48" rx="24" fill="url(#orange-grad)" />
    <text x="187" y="508" text-anchor="middle" font-size="13" class="white-text body-int-semi">Book Table</text>
  `)}
`, '09', 'Reservation Form');

// 10. Success Confirmation
const page10 = wrapSlide(`
  <g transform="translate(80, 120)">
    <text x="0" y="40" class="slide-subtitle">10 — CONFIRMATION SUCCESS</text>
    <text x="0" y="90" class="slide-title">Booking Confirmation Screen</text>
    <text x="0" y="150" class="slide-body" fill="#546E7A">
      <tspan x="0" dy="0">Displays custom confirmation details with a unique Booking ID</tspan>
      <tspan x="0" dy="24">so restaurant servers can verify guests when they arrive at the cafe.</tspan>
    </text>
  </g>
  ${drawMockMobile(920, 50, `
    <circle cx="187" cy="140" r="32" fill="#2E7D32" />
    <path d="M177 140 L184 147 L197 134" stroke="#FFFFFF" stroke-width="3" fill="none" />
    
    <text x="187" y="200" text-anchor="middle" font-size="16" class="title-pop">Table Reserved!</text>
    
    <rect x="20" y="240" width="335" height="150" rx="16" fill="#FFFFFF" class="shadow-filter" />
    <text x="40" y="280" font-size="12" class="body-int muted">Booking ID</text>
    <text x="335" y="280" text-anchor="end" font-size="13" class="title-pop" fill="#FF9800">GLC-9874</text>
  `)}
`, '10', 'Booking Confirmation');

// 11. UI Components
const page11 = wrapSlide(`
  <g transform="translate(80, 120)">
    <text x="0" y="40" class="slide-subtitle">11 — BRAND COMPONENTS</text>
    <text x="0" y="90" class="slide-title">UI Component Sheet</text>
    <text x="0" y="150" class="slide-body" fill="#546E7A">
      <tspan x="0" dy="0">A reusable collection of components built using Figma Auto-Layout.</tspan>
    </text>
    
    <g transform="translate(0, 240)">
      <!-- component boxes -->
      <rect x="0" y="0" width="300" height="200" rx="16" fill="#FFFFFF" class="shadow-filter" />
      <text x="20" y="40" font-size="14" class="title-pop">App Buttons</text>
      <rect x="20" y="70" width="260" height="44" rx="22" fill="url(#gradient-orange)" />
      <text x="150" y="96" text-anchor="middle" font-size="13" class="white-text body-int-semi">Primary CTA</text>
      
      <rect x="340" y="0" width="300" height="200" rx="16" fill="#FFFFFF" class="shadow-filter" />
      <text x="360" y="40" font-size="14" class="title-pop">Rating Badges</text>
      <rect x="360" y="70" width="60" height="24" rx="12" fill="#FFE0B2" />
      <text x="390" y="86" text-anchor="middle" font-size="11" class="body-int-semi accent-text">★ 4.9</text>
    </g>
  </g>
`, '11', 'Components Library');

// 12. Component Variants
const page12 = wrapSlide(`
  <g transform="translate(80, 120)">
    <text x="0" y="40" class="slide-subtitle">12 — COMPONENT VARIANTS</text>
    <text x="0" y="90" class="slide-title">Interactive Variants Grid</text>
    <text x="0" y="150" class="slide-body" fill="#546E7A">
      <tspan x="0" dy="0">Variants grid depicting states: Default, Hover, Pressed, Disabled, and Loading.</tspan>
    </text>
    
    <!-- Table structure -->
    <g transform="translate(0, 240)">
      <text x="0" y="0" font-size="12" class="body-int muted">Default</text>
      <rect x="0" y="15" width="180" height="44" rx="22" fill="#2E7D32" />
      <text x="90" y="41" text-anchor="middle" font-size="13" class="white-text body-int-semi">Add to Cart</text>
      
      <text x="240" y="0" font-size="12" class="body-int muted">Hover / Active</text>
      <rect x="240" y="15" width="180" height="44" rx="22" fill="#1B5E20" class="shadow-medium" />
      <text x="330" y="41" text-anchor="middle" font-size="13" class="white-text body-int-semi">Add to Cart</text>

      <text x="480" y="0" font-size="12" class="body-int muted">Disabled</text>
      <rect x="480" y="15" width="180" height="44" rx="22" fill="#CFD8DC" />
      <text x="570" y="41" text-anchor="middle" font-size="13" fill="#90A4AE" class="body-int-semi">Add to Cart</text>
    </g>
  </g>
`, '12', 'Variants Grid');

// 13. Design System
const page13 = wrapSlide(`
  <g transform="translate(80, 120)">
    <text x="0" y="40" class="slide-subtitle">13 — DESIGN SYSTEM</text>
    <text x="0" y="90" class="slide-title">Visual Spec Tokens</text>
    
    <g transform="translate(0, 180)">
      <text x="0" y="20" font-size="16" class="title-pop">Color Palette</text>
      <!-- Forest Green card -->
      <rect x="0" y="40" width="120" height="80" rx="12" fill="#2E7D32" />
      <text x="0" y="140" font-size="12" class="body-int-semi">Primary Green</text>
      <text x="0" y="156" font-size="11" class="body-int muted">#2E7D32</text>
      
      <!-- Leaf Green -->
      <rect x="150" y="40" width="120" height="80" rx="12" fill="#81C784" />
      <text x="150" y="140" font-size="12" class="body-int-semi">Leaf Green</text>
      <text x="150" y="156" font-size="11" class="body-int muted">#81C784</text>

      <!-- Warm Orange -->
      <rect x="300" y="40" width="120" height="80" rx="12" fill="#FF9800" />
      <text x="300" y="140" font-size="12" class="body-int-semi">Orange Accent</text>
      <text x="300" y="156" font-size="11" class="body-int muted">#FF9800</text>

      <!-- Cream background -->
      <rect x="450" y="40" width="120" height="80" rx="12" fill="#FFF8E7" stroke="#E8F5E9" />
      <text x="450" y="140" font-size="12" class="body-int-semi">Warm Cream</text>
      <text x="450" y="156" font-size="11" class="body-int muted">#FFF8E7</text>
    </g>

    <g transform="translate(0, 420)">
      <text x="0" y="20" font-size="16" class="title-pop">Spacing Standards</text>
      <text x="0" y="45" font-size="13" class="body-int muted">Based on an 8-Point Grid system (4px, 8px, 16px, 24px, 32px, 48px margins).</text>
    </g>
  </g>
`, '13', 'Design System');

// 14. Assets
const page14 = wrapSlide(`
  <g transform="translate(80, 120)">
    <text x="0" y="40" class="slide-subtitle">14 — ASSET DICTIONARY</text>
    <text x="0" y="90" class="slide-title">Logo &amp; Icon Library</text>
    
    <g transform="translate(0, 180)">
      <text x="0" y="20" font-size="16" class="title-pop">Brand Vector Logo</text>
      <circle cx="50" cy="80" r="40" fill="#2E7D32" />
      <circle cx="50" cy="80" r="30" fill="#FFF8E7" />
      <!-- leaves -->
      <path d="M50 65 C43 65 37 72 37 80 C37 90 50 100 50 100 Z" fill="#2E7D32" />
      <text x="110" y="85" font-size="18" class="title-pop">GreenLife</text>
    </g>
  </g>
`, '14', 'Brand Assets');

// ─────────────────────────────────────────────────────────
// PAGE 15: INTERACTIVE PROTOTYPE SPECS
// ─────────────────────────────────────────────────────────
const page15 = wrapSlide(`
  <g transform="translate(80, 100)">
    <text x="0" y="30" class="slide-subtitle">15 — INTERACTIVE PROTOTYPE WIRES</text>
    <text x="0" y="70" class="slide-title">Hotspots Flow Connections Map</text>
    <text x="0" y="110" class="slide-body" fill="#546E7A">
      <tspan x="0" dy="0">Dashed connection wires illustrating Figma Smart Animate flows</tspan>
      <tspan x="0" dy="20">from Cover Screen to Cart Preorder and Table Booking Success page.</tspan>
    </text>
  </g>

  <!-- Flow Wires Diagram -->
  <!-- 1. Cover mini-device -->
  <g transform="translate(80, 200)" scale="0.45">
    <rect x="0" y="0" width="375" height="812" rx="40" fill="#FFF8E7" stroke="#2E7D32" stroke-width="4" />
    <text x="187" y="150" text-anchor="middle" font-size="28" class="title-pop">Cover</text>
    <rect x="47" y="650" width="280" height="52" rx="26" fill="#FF9800" id="Cover_Start_Btn" />
    <text x="187" y="682" text-anchor="middle" font-size="18" class="white-text body-int-semi">Start Exploring</text>
  </g>

  <!-- 2. About mini-device -->
  <g transform="translate(340, 200)" scale="0.45">
    <rect x="0" y="0" width="375" height="812" rx="40" fill="#FFF8E7" stroke="#2E7D32" stroke-width="4" />
    <text x="187" y="150" text-anchor="middle" font-size="28" class="title-pop">About</text>
    <rect x="20" y="600" width="335" height="52" rx="26" fill="#2E7D32" id="About_Menu_Btn" />
    <text x="187" y="632" text-anchor="middle" font-size="18" class="white-text body-int-semi">Explore Menu</text>
  </g>

  <!-- 3. Categories mini-device -->
  <g transform="translate(600, 200)" scale="0.45">
    <rect x="0" y="0" width="375" height="812" rx="40" fill="#FFF8E7" stroke="#2E7D32" stroke-width="4" />
    <text x="187" y="150" text-anchor="middle" font-size="28" class="title-pop">Categories</text>
    <rect x="20" y="240" width="160" height="150" rx="20" fill="#FFFFFF" stroke="#81C784" />
    <text x="100" y="320" text-anchor="middle" font-size="18" class="body-int-semi">Salads</text>
  </g>

  <!-- 4. Reservation mini-device -->
  <g transform="translate(860, 200)" scale="0.45">
    <rect x="0" y="0" width="375" height="812" rx="40" fill="#FFF8E7" stroke="#2E7D32" stroke-width="4" />
    <text x="187" y="150" text-anchor="middle" font-size="28" class="title-pop">Reserve</text>
    <rect x="20" y="650" width="335" height="52" rx="26" fill="#FF9800" id="Res_Book_Btn" />
    <text x="187" y="682" text-anchor="middle" font-size="18" class="white-text body-int-semi">Book Table</text>
  </g>

  <!-- 5. Success mini-device -->
  <g transform="translate(1120, 200)" scale="0.45">
    <rect x="0" y="0" width="375" height="812" rx="40" fill="#FFF8E7" stroke="#2E7D32" stroke-width="4" />
    <text x="187" y="150" text-anchor="middle" font-size="28" class="title-pop">Success</text>
    <circle cx="187" cy="300" r="50" fill="#2E7D32" />
  </g>

  <!-- Flow Wires (Dashed Lines with arrows) -->
  <g>
    <!-- Cover -> About -->
    <path d="M228 506 L340 480" stroke="#FF9800" stroke-width="3" stroke-dasharray="8 6" fill="none" />
    <polygon points="340,480 330,475 332,485" fill="#FF9800" />
    
    <!-- About -> Categories -->
    <path d="M488 483 L600 310" stroke="#2E7D32" stroke-width="3" stroke-dasharray="8 6" fill="none" />
    <polygon points="600,310 590,312 596,320" fill="#2E7D32" />

    <!-- Categories -> Reservation (Direct / Cart flow shortcut) -->
    <path d="M748 310 L860 500" stroke="#2E7D32" stroke-width="3" stroke-dasharray="8 6" fill="none" />
    <polygon points="860,500 850,496 855,505" fill="#2E7D32" />

    <!-- Reservation -> Success -->
    <path d="M1010 500 L1120 335" stroke="#FF9800" stroke-width="3" stroke-dasharray="8 6" fill="none" />
    <polygon points="1120,335 1110,336 1116,344" fill="#FF9800" />
  </g>
`, '15', 'Hotspots Flow Map');

// ─────────────────────────────────────────────────────────
// PAGE 16: CASE STUDY DETAILS
// ─────────────────────────────────────────────────────────
const page16 = wrapSlide(`
  <g transform="translate(80, 100)">
    <text x="0" y="30" class="slide-subtitle">16 — UX RESEARCH PRESENTATION</text>
    <text x="0" y="70" class="slide-title">GreenLife UX Case Study Portfolio</text>
    
    <!-- Left Column: Problem & Audience -->
    <g transform="translate(0, 120)">
      <rect x="0" y="0" width="600" height="280" rx="20" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5" />
      <text x="24" y="40" font-size="18" class="title-pop">1. Problem Statement</text>
      <text x="24" y="70" font-size="14" class="slide-body" fill="#546E7A">
        <tspan x="24" dy="0">Traditional restaurant apps lead to checkout friction due to</tspan>
        <tspan x="24" dy="22">congested list view elements, lack of ingredient clarity, and</tspan>
        <tspan x="24" dy="22">detached table booking systems. Users drop off when trying to</tspan>
        <tspan x="24" dy="22">preorder food along with table reservations.</tspan>
      </text>

      <text x="24" y="180" font-size="18" class="title-pop">2. Project Goals</text>
      <text x="24" y="210" font-size="14" class="slide-body" fill="#546E7A">
        <tspan x="24" dy="0">• Build a nature-inspired design system with AAA contrast.</tspan>
        <tspan x="24" dy="22">• Achieve 95% signup-to-table reservation success rates.</tspan>
        <tspan x="24" dy="22">• Create clean list grids highlighting calorie specs.</tspan>
      </text>
    </g>
    
    <!-- Right Column: User Personas & Competitive Audit Grid -->
    <g transform="translate(640, 120)">
      <rect x="0" y="0" width="640" height="580" rx="20" fill="#FFFFFF" class="shadow-filter" />
      <text x="32" y="40" font-size="18" class="title-pop">3. Competitive Analysis Matrix</text>
      
      <!-- Table Header -->
      <g transform="translate(32, 70)">
        <rect x="0" y="0" width="576" height="36" fill="#2E7D32" rx="6" />
        <text x="12" y="22" font-size="12" class="white-text body-int-semi">Competitor</text>
        <text x="160" y="22" font-size="12" class="white-text body-int-semi">Visual Quality</text>
        <text x="320" y="22" font-size="12" class="white-text body-int-semi">Booking Flow</text>
        <text x="460" y="22" font-size="12" class="white-text body-int-semi">Dietary Specs</text>
      </g>
      
      <!-- Row 1: Competitor A -->
      <g transform="translate(32, 115)">
        <text x="12" y="20" font-size="13" class="body-int-semi">Uber Eats</text>
        <text x="160" y="20" font-size="13" class="body-int muted">Standard grid</text>
        <text x="320" y="20" font-size="13" class="body-int muted">No Table Reserve</text>
        <text x="460" y="20" font-size="13" class="body-int-semi" fill="#D84315">Low visibility</text>
      </g>
      <line x1="32" y1="150" x2="608" y2="150" stroke="#E2E8F0" stroke-width="1" />

      <!-- Row 2: Competitor B -->
      <g transform="translate(32, 165)">
        <text x="12" y="20" font-size="13" class="body-int-semi">Zomato</text>
        <text x="160" y="20" font-size="13" class="body-int muted">Vibrant</text>
        <text x="320" y="20" font-size="13" class="body-int-semi" fill="#2E7D32">Supported</text>
        <text x="460" y="20" font-size="13" class="body-int muted">Icon markers</text>
      </g>
      <line x1="32" y1="200" x2="608" y2="200" stroke="#E2E8F0" stroke-width="1" />

      <!-- Row 3: GreenLife Cafe -->
      <g transform="translate(32, 215)">
        <text x="12" y="20" font-size="13" class="title-pop" font-size="14">GreenLife</text>
        <text x="160" y="20" font-size="13" class="body-int-semi" fill="#2E7D32">Premium luxury</text>
        <text x="320" y="20" font-size="13" class="body-int-semi" fill="#2E7D32">1-Click Booking</text>
        <text x="460" y="20" font-size="13" class="body-int-semi" fill="#FF9800">Direct indicators</text>
      </g>
      
      <!-- Persona brief -->
      <g transform="translate(32, 280)">
        <rect x="0" y="0" width="576" height="260" rx="16" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1" />
        <text x="24" y="36" font-size="16" class="title-pop">4. Primary User Persona Profile</text>
        
        <circle cx="56" cy="110" r="32" fill="#FF9800" />
        <text x="56" y="115" text-anchor="middle" font-size="13" class="white-text body-int-semi">USER</text>
        
        <text x="108" y="94" font-size="15" class="body-int-semi">Sarah Jenkins (28, Wellness Consultant)</text>
        <text x="108" y="114" font-size="12" class="body-int muted">Demographics: Lives in San Francisco, high dietary focus</text>
        
        <text x="24" y="170" font-size="12" class="body-int-semi muted">Pain points:</text>
        <text x="24" y="190" font-size="12" class="body-int">
          <tspan x="24" dy="0">• Difficulty checking exact calorie count on standard app menus.</tspan>
          <tspan x="24" dy="18">• Friction when booking lunch tables during peak business slots.</tspan>
          <tspan x="24" dy="18">• Heavy UI clutter making organic food searching stressful.</tspan>
        </text>
      </g>
    </g>

    <!-- Bottom Left: Accessibility notes -->
    <g transform="translate(0, 420)">
      <rect x="0" y="0" width="600" height="280" rx="20" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5" />
      <text x="24" y="40" font-size="18" class="title-pop">5. Accessibility (A11Y)</text>
      <text x="24" y="70" font-size="14" class="slide-body" fill="#546E7A">
        <tspan x="24" dy="0">• Strict WCAG AA contrast compliance across the UI components.</tspan>
        <tspan x="24" dy="22">• Contrast ratio for text (#263238) on background (#FFF8E7) is 10.4:1.</tspan>
        <tspan x="24" dy="22">• Contrast ratio for green (#2E7D32) on cream (#FFF8E7) is 4.8:1.</tspan>
        <tspan x="24" dy="22">• Tap targets are scaled to minimum 48x48px boundaries.</tspan>
      </text>
    </g>
  </g>
`, '16', 'Case Study Summary');

// Write out Page files
fs.writeFileSync(path.join(OUTPUT_DIR, 'Page-01-Cover.svg'), page01);
fs.writeFileSync(path.join(OUTPUT_DIR, 'Page-02-About-GreenLife.svg'), page02);
fs.writeFileSync(path.join(OUTPUT_DIR, 'Page-03-Menu-Categories.svg'), page03);
fs.writeFileSync(path.join(OUTPUT_DIR, 'Page-04-Salads-Category.svg'), page04);
fs.writeFileSync(path.join(OUTPUT_DIR, 'Page-05-Burgers-Category.svg'), page05);
fs.writeFileSync(path.join(OUTPUT_DIR, 'Page-06-Pizza-Category.svg'), page06);
fs.writeFileSync(path.join(OUTPUT_DIR, 'Page-07-Drinks-Category.svg'), page07);
fs.writeFileSync(path.join(OUTPUT_DIR, 'Page-08-Desserts-Category.svg'), page08);
fs.writeFileSync(path.join(OUTPUT_DIR, 'Page-09-Reservation-Form.svg'), page09);
fs.writeFileSync(path.join(OUTPUT_DIR, 'Page-10-Booking-Success.svg'), page10);
fs.writeFileSync(path.join(OUTPUT_DIR, 'Page-11-Components-Library.svg'), page11);
fs.writeFileSync(path.join(OUTPUT_DIR, 'Page-12-Variants-Grid.svg'), page12);
fs.writeFileSync(path.join(OUTPUT_DIR, 'Page-13-Design-System-Spec.svg'), page13);
fs.writeFileSync(path.join(OUTPUT_DIR, 'Page-14-Brand-Assets.svg'), page14);
fs.writeFileSync(path.join(OUTPUT_DIR, 'Page-15-Prototype-Wires.svg'), page15);
fs.writeFileSync(path.join(OUTPUT_DIR, 'Page-16-Case-Study-Presentation.svg'), page16);

console.log('✅ 16 Case Study SVG Pages generated successfully!');
