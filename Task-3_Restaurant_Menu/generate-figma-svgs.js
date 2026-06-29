// generate-figma-svgs.js
// Node.js script to dynamically generate standalone, editable Figma SVGs for GreenLife Café Mobile App

const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, 'Figma');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Common styles & definitions
const STYLES = `
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&amp;family=Inter:wght@400;500;600&amp;display=swap');
      .title-pop { font-family: 'Poppins', sans-serif; font-weight: 700; fill: #2E7D32; }
      .body-int { font-family: 'Inter', sans-serif; font-weight: 400; fill: #263238; }
      .body-int-med { font-family: 'Inter', sans-serif; font-weight: 500; fill: #263238; }
      .body-int-semi { font-family: 'Inter', sans-serif; font-weight: 600; fill: #263238; }
      .muted { fill: #546E7A; }
      .white-text { fill: #FFFFFF; }
      .accent-text { fill: #FF9800; }
      .shadow-filter { filter: drop-shadow(0px 8px 24px rgba(46, 125, 50, 0.08)); }
      .shadow-medium { filter: drop-shadow(0px 12px 32px rgba(46, 125, 50, 0.12)); }
    </style>
    <clipPath id="screen-clip">
      <rect x="0" y="0" width="375" height="812" rx="40" />
    </clipPath>
    <linearGradient id="gradient-orange" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FF9800" />
      <stop offset="100%" stop-color="#F57C00" />
    </linearGradient>
    <linearGradient id="gradient-green" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2E7D32" />
      <stop offset="100%" stop-color="#1B5E20" />
    </linearGradient>
  </defs>
`;

// Helper to wrap SVG screens
function wrapScreen(content, frameName) {
  return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg width="375" height="812" viewBox="0 0 375 812" fill="none" xmlns="http://www.w3.org/2000/svg" style="background-color:#000000; border-radius:48px;">
  ${STYLES}
  <!-- Outer Device Mockup Frame -->
  <rect x="0" y="0" width="375" height="812" rx="40" fill="#FFF8E7" />
  
  <!-- Content Area clipped for rounded mobile corners -->
  <g clip-path="url(#screen-clip)">
    ${content}
    
    <!-- Top Notch -->
    <rect x="112" y="0" width="150" height="30" rx="15" fill="#000000" />
    
    <!-- Status Bar Icons -->
    <text x="36" y="20" font-family="'Inter', sans-serif" font-weight="600" font-size="12" fill="#263238">9:41</text>
    <path d="M320 12h12v12h-12z" fill="#263238" opacity="0.1" /> <!-- Battery placeholder -->
    <circle cx="340" cy="18" r="3" fill="#263238" />
    
    <!-- Bottom Indicator -->
    <rect x="120" y="798" width="135" height="5" rx="2.5" fill="#263238" opacity="0.3" />
  </g>
</svg>
`;
}

// 1. Cover Screen
const cover = wrapScreen(`
  <!-- Cover Graphic -->
  <g id="Cover_Screen">
    <!-- Leaves Background Patterns -->
    <path d="M375 100 C320 80, 280 150, 300 200 C320 250, 380 220, 375 100 Z" fill="#81C784" opacity="0.15" />
    <path d="M0 700 C60 720, 100 650, 80 600 C60 550, 0 580, 0 700 Z" fill="#2E7D32" opacity="0.1" />
    
    <!-- Central Logo -->
    <g transform="translate(147, 120)">
      <circle cx="40" cy="40" r="40" fill="#FFFFFF" class="shadow-filter" />
      <path d="M40 20 C28.95 20 20 28.95 20 40 C20 45.5 22.25 50.5 25.86 54.14 C29.47 50.5 35 47 40 47 C45 47 50.53 50.5 54.14 54.14 C57.75 50.5 60 45.5 60 40 C60 28.95 51.05 20 40 20 Z" fill="#2E7D32" />
      <circle cx="40" cy="35" r="5" fill="#FF9800" />
    </g>
    
    <!-- App Names -->
    <text x="187" y="240" text-anchor="middle" font-size="28" class="title-pop">GreenLife Café</text>
    <text x="187" y="265" text-anchor="middle" font-size="12" class="body-int muted" letter-spacing="3">FRESH • HEALTHY • DELICIOUS</text>
    
    <!-- Hero Salad Illustration -->
    <g transform="translate(67, 320)">
      <circle cx="120" cy="120" r="110" fill="#FFFFFF" class="shadow-medium" />
      <!-- Stylized Salad Bowl -->
      <circle cx="120" cy="120" r="90" fill="#E8F5E9" />
      <!-- Salad Greens -->
      <circle cx="100" cy="100" r="30" fill="#81C784" opacity="0.8" />
      <circle cx="140" cy="110" r="25" fill="#4CAF50" opacity="0.9" />
      <circle cx="110" cy="140" r="35" fill="#2E7D32" opacity="0.7" />
      <!-- Tomato Slices -->
      <circle cx="95" cy="130" r="12" fill="#E53935" />
      <circle cx="95" cy="130" r="8" fill="#FF8A80" />
      <circle cx="145" cy="135" r="12" fill="#E53935" />
      <!-- Orange segment / Dressing -->
      <path d="M120 70 Q130 90 120 110" stroke="#FF9800" stroke-width="6" stroke-linecap="round" fill="none" />
      <circle cx="120" cy="120" r="10" fill="#FFB74D" />
    </g>
    
    <!-- Start Exploring CTA Button -->
    <g transform="translate(47, 650)">
      <rect x="0" y="0" width="280" height="56" rx="28" fill="url(#gradient-orange)" class="shadow-medium" />
      <text x="140" y="34" text-anchor="middle" font-size="16" font-family="'Poppins', sans-serif" font-weight="600" class="white-text">Start Exploring</text>
    </g>
  </g>
`, 'Cover');

// 2. About Screen
const about = wrapScreen(`
  <g id="About_Screen">
    <!-- Header Back/Title -->
    <rect x="20" y="50" width="36" height="36" rx="18" fill="#FFFFFF" class="shadow-filter" />
    <path d="M42 68 L34 68 M38 64 L34 68 L38 72" stroke="#263238" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <text x="187" y="74" text-anchor="middle" font-size="16" class="title-pop">Our Story</text>
    
    <!-- Interior Banner -->
    <rect x="20" y="110" width="335" height="150" rx="20" fill="#E8F5E9" />
    <text x="187" y="195" text-anchor="middle" font-size="14" class="body-int muted">Premium Interior Photo Area</text>
    
    <!-- Mission Statement -->
    <text x="20" y="300" font-size="18" class="title-pop">Pure Organic Love</text>
    <rect x="20" y="310" width="40" height="4" rx="2" fill="#FF9800" />
    <text x="20" y="335" font-size="13" class="body-int muted">
      <tspan x="20" dy="0">We serve 100% plant-based organic meals</tspan>
      <tspan x="20" dy="18">sourced directly from sustainable local farms.</tspan>
      <tspan x="20" dy="18">No preservatives, no refined sugar, just fresh</tspan>
      <tspan x="20" dy="18">nutritional energy cooked with extra olive oil.</tspan>
    </text>
    
    <!-- Chef Profile Card -->
    <g transform="translate(20, 420)">
      <rect x="0" y="0" width="335" height="90" rx="16" fill="#FFFFFF" class="shadow-filter" />
      <circle cx="45" cy="45" r="28" fill="#81C784" />
      <text x="45" y="49" text-anchor="middle" font-size="12" class="white-text body-int-semi">CHEF</text>
      <text x="90" y="40" font-size="14" class="body-int-semi">Chef Marcus Rivera</text>
      <text x="90" y="58" font-size="11" class="body-int-semi accent-text">Head Culinary Director</text>
    </g>
    
    <!-- Photo Gallery Grid Row -->
    <g transform="translate(20, 530)">
      <rect x="0" y="0" width="160" height="90" rx="12" fill="#E8F5E9" />
      <text x="80" y="50" text-anchor="middle" font-size="11" class="body-int muted">Kitchen</text>
      
      <rect x="175" y="0" width="160" height="90" rx="12" fill="#E8F5E9" />
      <text x="255" y="50" text-anchor="middle" font-size="11" class="body-int muted">Farm Fresh</text>
    </g>
    
    <!-- Navigation Buttons -->
    <g transform="translate(20, 640)" class="interactive-hotspot">
      <rect x="0" y="0" width="335" height="48" rx="24" fill="url(#gradient-green)" class="shadow-medium" />
      <text x="167" y="28" text-anchor="middle" font-size="14" font-family="'Poppins', sans-serif" font-weight="600" class="white-text">Explore Menu</text>
    </g>
    <g transform="translate(20, 700)" class="interactive-hotspot">
      <rect x="0" y="0" width="335" height="48" rx="24" stroke="#2E7D32" stroke-width="2" fill="none" />
      <text x="167" y="28" text-anchor="middle" font-size="14" font-family="'Poppins', sans-serif" font-weight="600" fill="#2E7D32">Book a Table</text>
    </g>
  </g>
`, 'About');

// 3. Categories Screen
const categories = wrapScreen(`
  <g id="Categories_Screen">
    <!-- Header -->
    <text x="20" y="100" font-size="22" class="title-pop">What would you like?</text>
    <text x="20" y="120" font-size="12" class="body-int muted">Choose healthy fresh choices</text>
    
    <!-- Cards grid layout -->
    <!-- 1. Salads Card -->
    <g transform="translate(20, 150)" class="interactive-hotspot">
      <rect x="0" y="0" width="160" height="150" rx="20" fill="#FFFFFF" class="shadow-filter" />
      <rect x="0" y="0" width="160" height="95" rx="20" fill="#E8F5E9" />
      <!-- salad graphic -->
      <circle cx="80" cy="48" r="30" fill="#81C784" />
      <text x="80" y="125" text-anchor="middle" font-size="13" class="body-int-semi">Healthy Salads</text>
    </g>
    
    <!-- 2. Burgers Card -->
    <g transform="translate(195, 150)" class="interactive-hotspot">
      <rect x="0" y="0" width="160" height="150" rx="20" fill="#FFFFFF" class="shadow-filter" />
      <rect x="0" y="0" width="160" height="95" rx="20" fill="#FFE0B2" />
      <!-- burger graphic -->
      <circle cx="80" cy="48" r="30" fill="#FFB74D" />
      <text x="80" y="125" text-anchor="middle" font-size="13" class="body-int-semi">Gourmet Burgers</text>
    </g>

    <!-- 3. Pizza Card -->
    <g transform="translate(20, 320)" class="interactive-hotspot">
      <rect x="0" y="0" width="160" height="150" rx="20" fill="#FFFFFF" class="shadow-filter" />
      <rect x="0" y="0" width="160" height="95" rx="20" fill="#FFCCBC" />
      <!-- pizza graphic -->
      <circle cx="80" cy="48" r="30" fill="#FF8A65" />
      <text x="80" y="125" text-anchor="middle" font-size="13" class="body-int-semi">Wood-Fired Pizza</text>
    </g>

    <!-- 4. Drinks Card -->
    <g transform="translate(195, 320)" class="interactive-hotspot">
      <rect x="0" y="0" width="160" height="150" rx="20" fill="#FFFFFF" class="shadow-filter" />
      <rect x="0" y="0" width="160" height="95" rx="20" fill="#E1F5FE" />
      <!-- juice graphic -->
      <circle cx="80" cy="48" r="30" fill="#4FC3F7" />
      <text x="80" y="125" text-anchor="middle" font-size="13" class="body-int-semi">Fresh Juices</text>
    </g>

    <!-- 5. Desserts Card -->
    <g transform="translate(20, 490)" class="interactive-hotspot">
      <rect x="0" y="0" width="160" height="150" rx="20" fill="#FFFFFF" class="shadow-filter" />
      <rect x="0" y="0" width="160" height="95" rx="20" fill="#F3E5F5" />
      <!-- dessert graphic -->
      <circle cx="80" cy="48" r="30" fill="#BA68C8" />
      <text x="80" y="125" text-anchor="middle" font-size="13" class="body-int-semi">Organic Desserts</text>
    </g>
    
    <!-- App bottom navigation mockup -->
    <g transform="translate(0, 715)">
      <rect x="0" y="0" width="375" height="64" fill="#FFFFFF" class="shadow-medium" />
      <!-- Menu Item -->
      <g transform="translate(47, 10)">
        <circle cx="12" cy="12" r="12" fill="#2E7D32" opacity="0.1" />
        <text x="12" y="38" text-anchor="middle" font-size="10" class="body-int-semi" fill="#2E7D32">Menu</text>
      </g>
      <!-- Reserve Item -->
      <g transform="translate(167, 10)">
        <circle cx="12" cy="12" r="12" fill="#263238" opacity="0.05" />
        <text x="12" y="38" text-anchor="middle" font-size="10" class="body-int muted">Reserve</text>
      </g>
      <!-- About Story Item -->
      <g transform="translate(287, 10)">
        <circle cx="12" cy="12" r="12" fill="#263238" opacity="0.05" />
        <text x="12" y="38" text-anchor="middle" font-size="10" class="body-int muted">Story</text>
      </g>
    </g>
  </g>
`, 'Categories');

// 4. Salads Screen
const salads = wrapScreen(`
  <g id="Salads_Screen">
    <!-- Title -->
    <text x="20" y="100" font-size="20" class="title-pop">Healthy Salads</text>
    
    <!-- Food Card 1 -->
    <g transform="translate(20, 130)">
      <rect x="0" y="0" width="335" height="130" rx="20" fill="#FFFFFF" class="shadow-filter" />
      <rect x="0" y="0" width="120" height="130" rx="20" fill="#C8E6C9" />
      <text x="60" y="70" text-anchor="middle" font-size="12" class="body-int-semi" fill="#2E7D32">Salad Image</text>
      
      <!-- details -->
      <text x="136" y="32" font-size="14" class="body-int-semi">Avocado Quinoa Salad</text>
      <text x="136" y="50" font-size="11" class="body-int muted">320 kcal • ★ 4.9</text>
      <text x="136" y="75" font-size="11" class="body-int muted">Fresh avocado, organic red quinoa</text>
      
      <text x="136" y="108" font-size="16" class="title-pop">$12.90</text>
      <!-- Add Plus Button -->
      <g transform="translate(285, 82)" class="interactive-hotspot">
        <circle cx="18" cy="18" r="18" fill="#2E7D32" />
        <path d="M18 10 L18 26 M10 18 L26 18" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" />
      </g>
    </g>

    <!-- Food Card 2 -->
    <g transform="translate(20, 280)">
      <rect x="0" y="0" width="335" height="130" rx="20" fill="#FFFFFF" class="shadow-filter" />
      <rect x="0" y="0" width="120" height="130" rx="20" fill="#FFE0B2" />
      <text x="60" y="70" text-anchor="middle" font-size="12" class="body-int-semi" fill="#E65100">Feta Salad</text>
      
      <text x="136" y="32" font-size="14" class="body-int-semi">Greek Feta Garden Salad</text>
      <text x="136" y="50" font-size="11" class="body-int muted">280 kcal • ★ 4.8</text>
      <text x="136" y="75" font-size="11" class="body-int muted">Classic cucumber, Greek feta cheese</text>
      
      <text x="136" y="108" font-size="16" class="title-pop">$11.50</text>
      <g transform="translate(285, 82)">
        <circle cx="18" cy="18" r="18" fill="#2E7D32" />
        <path d="M18 10 L18 26 M10 18 L26 18" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" />
      </g>
    </g>
  </g>
`, 'Salads');

// 5. Burgers Screen
const burgers = wrapScreen(`
  <g id="Burgers_Screen">
    <text x="20" y="100" font-size="20" class="title-pop">Gourmet Burgers</text>
    
    <g transform="translate(20, 130)">
      <rect x="0" y="0" width="335" height="130" rx="20" fill="#FFFFFF" class="shadow-filter" />
      <rect x="0" y="0" width="120" height="130" rx="20" fill="#FFE0B2" />
      <text x="60" y="70" text-anchor="middle" font-size="12" class="body-int-semi" fill="#E65100">Burger Image</text>
      
      <text x="136" y="32" font-size="14" class="body-int-semi">GreenLife Avocado Burger</text>
      <text x="136" y="50" font-size="11" class="body-int muted">580 kcal • ★ 4.9 • Veg</text>
      <text x="136" y="75" font-size="11" class="body-int muted">Plant-based patty with avocado</text>
      
      <text x="136" y="108" font-size="16" class="title-pop">$14.50</text>
      <g transform="translate(285, 82)">
        <circle cx="18" cy="18" r="18" fill="#2E7D32" />
        <path d="M18 10 L18 26 M10 18 L26 18" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" />
      </g>
    </g>
  </g>
`, 'Burgers');

// 6. Pizza Screen
const pizza = wrapScreen(`
  <g id="Pizza_Screen">
    <text x="20" y="100" font-size="20" class="title-pop">Wood-Fired Pizza</text>
    
    <g transform="translate(20, 130)">
      <rect x="0" y="0" width="335" height="130" rx="20" fill="#FFFFFF" class="shadow-filter" />
      <rect x="0" y="0" width="120" height="130" rx="20" fill="#FFCCBC" />
      <text x="60" y="70" text-anchor="middle" font-size="12" class="body-int-semi" fill="#D84315">Pizza Image</text>
      
      <text x="136" y="32" font-size="14" class="body-int-semi">Rustic Tomato Basil Pesto</text>
      <text x="136" y="50" font-size="11" class="body-int muted">720 kcal • ★ 4.8 • Veg</text>
      <text x="136" y="75" font-size="11" class="body-int muted">Thin sourdough with fresh mozzarella</text>
      
      <text x="136" y="108" font-size="16" class="title-pop">$15.50</text>
      <g transform="translate(285, 82)">
        <circle cx="18" cy="18" r="18" fill="#2E7D32" />
        <path d="M18 10 L18 26 M10 18 L26 18" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" />
      </g>
    </g>
  </g>
`, 'Pizza');

// 7. Drinks Screen
const drinks = wrapScreen(`
  <g id="Drinks_Screen">
    <text x="20" y="100" font-size="20" class="title-pop">Cold Pressed Juices</text>
    
    <g transform="translate(20, 130)">
      <rect x="0" y="0" width="335" height="130" rx="20" fill="#FFFFFF" class="shadow-filter" />
      <rect x="0" y="0" width="120" height="130" rx="20" fill="#E1F5FE" />
      <text x="60" y="70" text-anchor="middle" font-size="12" class="body-int-semi" fill="#0277BD">Juice Image</text>
      
      <text x="136" y="32" font-size="14" class="body-int-semi">Detox Cold Pressed Juice</text>
      <text x="136" y="50" font-size="11" class="body-int muted">90 kcal • ★ 4.9</text>
      <text x="136" y="75" font-size="11" class="body-int muted">Kale, green apple, ginger, celery</text>
      
      <text x="136" y="108" font-size="16" class="title-pop">$7.50</text>
      <g transform="translate(285, 82)">
        <circle cx="18" cy="18" r="18" fill="#2E7D32" />
        <path d="M18 10 L18 26 M10 18 L26 18" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" />
      </g>
    </g>
  </g>
`, 'Drinks');

// 8. Desserts Screen
const desserts = wrapScreen(`
  <g id="Desserts_Screen">
    <text x="20" y="100" font-size="20" class="title-pop">Organic Desserts</text>
    
    <g transform="translate(20, 130)">
      <rect x="0" y="0" width="335" height="130" rx="20" fill="#FFFFFF" class="shadow-filter" />
      <rect x="0" y="0" width="120" height="130" rx="20" fill="#F3E5F5" />
      <text x="60" y="70" text-anchor="middle" font-size="12" class="body-int-semi" fill="#6A1B9A">Matcha Pudding</text>
      
      <text x="136" y="32" font-size="14" class="body-int-semi">Matcha Chia Seed Pudding</text>
      <text x="136" y="50" font-size="11" class="body-int muted">210 kcal • ★ 4.8</text>
      <text x="136" y="75" font-size="11" class="body-int muted">Almond milk, green tea matcha pudding</text>
      
      <text x="136" y="108" font-size="16" class="title-pop">$8.90</text>
      <g transform="translate(285, 82)">
        <circle cx="18" cy="18" r="18" fill="#2E7D32" />
        <path d="M18 10 L18 26 M10 18 L26 18" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" />
      </g>
    </g>
  </g>
`, 'Desserts');

// 9. Reservation Screen
const reservation = wrapScreen(`
  <g id="Reservation_Screen">
    <text x="20" y="100" font-size="20" class="title-pop">Book a Table</text>
    <text x="20" y="120" font-size="12" class="body-int muted">Enter booking parameters below</text>
    
    <g transform="translate(20, 150)">
      <!-- Name input -->
      <text x="0" y="15" font-size="12" class="body-int-semi muted">Full Name</text>
      <rect x="0" y="25" width="335" height="48" rx="12" fill="#FFFFFF" stroke="#E8F5E9" stroke-width="1" />
      <text x="16" y="54" font-size="14" class="body-int">Noor Mohamed Halith</text>
      
      <!-- Phone input -->
      <text x="0" y="95" font-size="12" class="body-int-semi muted">Phone Number</text>
      <rect x="0" y="105" width="335" height="48" rx="12" fill="#FFFFFF" stroke="#E8F5E9" stroke-width="1" />
      <text x="16" y="134" font-size="14" class="body-int">+91 98765 43210</text>

      <!-- Guests and Date row -->
      <g transform="translate(0, 175)">
        <text x="0" y="15" font-size="12" class="body-int-semi muted">Guests</text>
        <rect x="0" y="25" width="160" height="48" rx="12" fill="#FFFFFF" stroke="#E8F5E9" stroke-width="1" />
        <text x="16" y="54" font-size="14" class="body-int">4 Guests</text>
        
        <text x="175" y="15" font-size="12" class="body-int-semi muted">Date</text>
        <rect x="175" y="25" width="160" height="48" rx="12" fill="#FFFFFF" stroke="#E8F5E9" stroke-width="1" />
        <text x="191" y="54" font-size="14" class="body-int">2025-07-12</text>
      </g>
      
      <!-- Time slot -->
      <g transform="translate(0, 270)">
        <text x="0" y="15" font-size="12" class="body-int-semi muted">Preferred Time</text>
        <rect x="0" y="25" width="335" height="48" rx="12" fill="#FFFFFF" stroke="#E8F5E9" stroke-width="1" />
        <text x="16" y="54" font-size="14" class="body-int">7:30 PM (Dinner)</text>
      </g>
    </g>
    
    <!-- Submit Button -->
    <g transform="translate(20, 520)" class="interactive-hotspot">
      <rect x="0" y="0" width="335" height="52" rx="26" fill="url(#gradient-orange)" class="shadow-medium" />
      <text x="167" y="31" text-anchor="middle" font-size="15" font-family="'Poppins', sans-serif" font-weight="600" class="white-text">Book Table</text>
    </g>
  </g>
`, 'Reservation');

// 10. Booking Success Screen
const bookingSuccess = wrapScreen(`
  <g id="Success_Screen">
    <!-- Checked success circle icon -->
    <g transform="translate(147, 120)">
      <circle cx="40" cy="40" r="40" fill="#2E7D32" class="shadow-medium" />
      <path d="M28 40 L36 48 L52 32" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none" />
    </g>
    
    <text x="187" y="230" text-anchor="middle" font-size="20" class="title-pop">Table Reserved!</text>
    <text x="187" y="255" text-anchor="middle" font-size="13" class="body-int muted">Your reservation and preorder are verified.</text>
    
    <!-- Booking card -->
    <g transform="translate(20, 300)">
      <rect x="0" y="0" width="335" height="180" rx="20" fill="#FFFFFF" class="shadow-filter" />
      
      <text x="24" y="40" font-size="12" class="body-int muted">Booking ID</text>
      <text x="311" y="40" text-anchor="end" font-size="14" class="title-pop" fill="#FF9800">GLC-9874</text>
      
      <text x="24" y="80" font-size="12" class="body-int muted">Guest Count</text>
      <text x="311" y="80" text-anchor="end" font-size="13" class="body-int-semi">4 Guests</text>

      <text x="24" y="120" font-size="12" class="body-int muted">Date &amp; Time</text>
      <text x="311" y="120" text-anchor="end" font-size="13" class="body-int-semi">July 12, 2025 at 7:30 PM</text>

      <text x="24" y="156" font-size="12" class="body-int muted">Preorder Total</text>
      <text x="311" y="156" text-anchor="end" font-size="14" class="title-pop">$29.40</text>
    </g>
    
    <!-- Back to Home CTA -->
    <g transform="translate(20, 560)" class="interactive-hotspot">
      <rect x="0" y="0" width="335" height="48" rx="24" stroke="#2E7D32" stroke-width="2" fill="none" />
      <text x="167" y="28" text-anchor="middle" font-size="14" font-family="'Poppins', sans-serif" font-weight="600" fill="#2E7D32">Back to Home</text>
    </g>
  </g>
`, 'Success');

// 11. Components Frame
const components = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg width="600" height="400" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" style="background-color:#FFF8E7;">
  ${STYLES}
  <text x="30" y="50" font-size="22" class="title-pop">GreenLife UI Components</text>
  
  <!-- Buttons -->
  <g transform="translate(30, 90)">
    <text x="0" y="-10" font-size="12" class="body-int muted">Primary Buttons</text>
    <rect x="0" y="0" width="200" height="44" rx="22" fill="url(#gradient-orange)" />
    <text x="100" y="26" text-anchor="middle" font-size="13" class="white-text body-int-semi">Primary CTA</text>
    
    <rect x="0" y="60" width="200" height="44" rx="22" fill="#2E7D32" />
    <text x="100" y="86" text-anchor="middle" font-size="13" class="white-text body-int-semi">Green Action</text>
  </g>
  
  <!-- Cards -->
  <g transform="translate(300, 90)">
    <text x="0" y="-10" font-size="12" class="body-int muted">Standard Food Card</text>
    <rect x="0" y="0" width="260" height="110" rx="16" fill="#FFFFFF" class="shadow-filter" />
    <rect x="0" y="0" width="90" height="110" rx="16" fill="#C8E6C9" />
    <text x="106" y="28" font-size="13" class="body-int-semi">Healthy Salad</text>
    <text x="106" y="44" font-size="10" class="body-int muted">320 kcal • ★ 4.9</text>
    <text x="106" y="86" font-size="14" class="title-pop">$12.90</text>
  </g>
</svg>
`;

// 12. Variants Frame
const variants = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg width="600" height="400" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" style="background-color:#FFF8E7;">
  ${STYLES}
  <text x="30" y="50" font-size="22" class="title-pop">Button Component Variants</text>
  
  <!-- Columns: State Titles -->
  <text x="50" y="110" font-size="12" class="body-int muted">Default</text>
  <text x="220" y="110" font-size="12" class="body-int muted">Hover / Glow</text>
  <text x="400" y="110" font-size="12" class="body-int muted">Disabled</text>
  
  <!-- Row 1: Orange Gradient -->
  <g transform="translate(0, 130)">
    <!-- Default -->
    <rect x="50" y="0" width="130" height="40" rx="20" fill="url(#gradient-orange)" />
    <text x="115" y="24" text-anchor="middle" font-size="12" class="white-text body-int-semi">Claim Offer</text>
    
    <!-- Hover -->
    <rect x="220" y="0" width="130" height="40" rx="20" fill="url(#gradient-orange)" class="shadow-medium" />
    <text x="285" y="24" text-anchor="middle" font-size="12" class="white-text body-int-semi">Claim Offer</text>
    
    <!-- Disabled -->
    <rect x="400" y="0" width="130" height="40" rx="20" fill="#CFD8DC" />
    <text x="465" y="24" text-anchor="middle" font-size="12" class="white-text body-int-semi" fill="#90A4AE">Claim Offer</text>
  </g>

  <!-- Row 2: Green Solid -->
  <g transform="translate(0, 220)">
    <!-- Default -->
    <rect x="50" y="0" width="130" height="40" rx="20" fill="#2E7D32" />
    <text x="115" y="24" text-anchor="middle" font-size="12" class="white-text body-int-semi">Add Item</text>
    
    <!-- Hover -->
    <rect x="220" y="0" width="130" height="40" rx="20" fill="#1B5E20" />
    <text x="285" y="24" text-anchor="middle" font-size="12" class="white-text body-int-semi">Add Item</text>
    
    <!-- Disabled -->
    <rect x="400" y="0" width="130" height="40" rx="20" fill="#CFD8DC" />
    <text x="465" y="24" text-anchor="middle" font-size="12" class="white-text body-int-semi" fill="#90A4AE">Add Item</text>
  </g>
</svg>
`;

// 13. Design System Frame
const designSystem = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg width="600" height="400" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" style="background-color:#FFF8E7;">
  ${STYLES}
  <text x="30" y="50" font-size="22" class="title-pop">GreenLife Design System Specs</text>
  
  <!-- Color cards -->
  <g transform="translate(30, 90)">
    <text x="0" y="-10" font-size="12" class="body-int muted">Color Palette</text>
    <!-- Primary Green -->
    <rect x="0" y="0" width="100" height="60" rx="8" fill="#2E7D32" />
    <text x="8" y="78" font-size="10" class="body-int-semi">Primary Green</text>
    <text x="8" y="90" font-size="9" class="body-int muted">#2E7D32</text>
    
    <!-- Secondary Green -->
    <rect x="120" y="0" width="100" height="60" rx="8" fill="#81C784" />
    <text x="128" y="78" font-size="10" class="body-int-semi">Secondary</text>
    <text x="128" y="90" font-size="9" class="body-int muted">#81C784</text>

    <!-- Accent Orange -->
    <rect x="240" y="0" width="100" height="60" rx="8" fill="#FF9800" />
    <text x="248" y="78" font-size="10" class="body-int-semi">Accent Orange</text>
    <text x="248" y="90" font-size="9" class="body-int muted">#FF9800</text>
  </g>
  
  <!-- Typography scale -->
  <g transform="translate(30, 240)">
    <text x="0" y="-10" font-size="12" class="body-int muted">Typography Ramp (Poppins / Inter)</text>
    <text x="0" y="20" font-size="22" class="title-pop">Heading 1 (22px Poppins Bold)</text>
    <text x="0" y="45" font-size="16" class="body-int-semi">Subheading (16px Inter Semi-Bold)</text>
    <text x="0" y="65" font-size="13" class="body-int">Body Text (13px Inter Regular)</text>
  </g>
</svg>
`;

// 14. Assets Frame (Logo & Icons)
const assetsLogo = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg width="600" height="400" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" style="background-color:#FFF8E7;">
  ${STYLES}
  <text x="30" y="50" font-size="22" class="title-pop">GreenLife Brand Assets &amp; Icons</text>
  
  <!-- Vector Brand Logo -->
  <g transform="translate(30, 100)">
    <rect x="0" y="0" width="120" height="120" rx="24" fill="#FFFFFF" class="shadow-filter" />
    <path d="M60 25 C45 25 35 37 35 55 C35 70 45 85 60 95 C75 85 85 70 85 55 C85 37 75 25 60 25 Z" fill="#2E7D32" />
    <circle cx="60" cy="50" r="8" fill="#FF9800" />
    <text x="60" y="140" text-anchor="middle" font-size="14" class="title-pop">GreenLife Logo</text>
  </g>
  
  <!-- Shared Icons list -->
  <g transform="translate(220, 100)">
    <text x="0" y="-10" font-size="12" class="body-int muted">Interactive UI Icons</text>
    
    <!-- Heart icon -->
    <g transform="translate(0, 10)">
      <rect x="0" y="0" width="40" height="40" rx="8" fill="#FFFFFF" class="shadow-filter" />
      <path d="M20 32 L18.55 30.68 C13.4 26.01 10 22.93 10 19.5 C10 16.74 12.16 14.58 14.92 14.58 C16.48 14.58 17.97 15.3 19 16.42 C20.03 15.3 21.52 14.58 23.08 14.58 C25.84 14.58 28 16.74 28 19.5 C28 22.93 24.6 26.01 19.45 30.68 L20 32 Z" fill="#E53935" />
      <text x="50" y="24" font-size="12" class="body-int-semi">Favorite</text>
    </g>

    <!-- Star icon -->
    <g transform="translate(0, 70)">
      <rect x="0" y="0" width="40" height="40" rx="8" fill="#FFFFFF" class="shadow-filter" />
      <path d="M20 12 L22.47 17.51 L28.5 18.15 L23.97 22.18 L25.24 28.1 L20 25.04 L14.76 28.1 L16.03 22.18 L11.5 18.15 L17.53 17.51 Z" fill="#FF9800" />
      <text x="50" y="24" font-size="12" class="body-int-semi">Star Review</text>
    </g>
  </g>
</svg>
`;

// Write to files
fs.writeFileSync(path.join(OUTPUT_DIR, 'Frame-01-Cover.svg'), cover);
fs.writeFileSync(path.join(OUTPUT_DIR, 'Frame-02-About.svg'), about);
fs.writeFileSync(path.join(OUTPUT_DIR, 'Frame-03-Categories.svg'), categories);
fs.writeFileSync(path.join(OUTPUT_DIR, 'Frame-04-Salads.svg'), salads);
fs.writeFileSync(path.join(OUTPUT_DIR, 'Frame-05-Burgers.svg'), burgers);
fs.writeFileSync(path.join(OUTPUT_DIR, 'Frame-06-Pizza.svg'), pizza);
fs.writeFileSync(path.join(OUTPUT_DIR, 'Frame-07-Drinks.svg'), drinks);
fs.writeFileSync(path.join(OUTPUT_DIR, 'Frame-08-Desserts.svg'), desserts);
fs.writeFileSync(path.join(OUTPUT_DIR, 'Frame-09-Reservation.svg'), reservation);
fs.writeFileSync(path.join(OUTPUT_DIR, 'Frame-10-Booking-Success.svg'), bookingSuccess);
fs.writeFileSync(path.join(OUTPUT_DIR, 'Frame-11-Components.svg'), components);
fs.writeFileSync(path.join(OUTPUT_DIR, 'Frame-12-Variants.svg'), variants);
fs.writeFileSync(path.join(OUTPUT_DIR, 'Frame-13-Design-System.svg'), designSystem);
fs.writeFileSync(path.join(OUTPUT_DIR, 'Frame-14-Assets-Logo.svg'), assetsLogo);

console.log('✅ Standalone Figma SVG Frames generated successfully!');
