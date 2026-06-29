/**
 * FlowSphere Email Template — Screenshot & PDF Generator
 * CODSOFT UI/UX Internship Task 2
 *
 * Uses Puppeteer to:
 *   1. Capture PNG screenshots of desktop and mobile views
 *   2. Generate PDF exports of both views
 *
 * Usage:
 *   npm install puppeteer
 *   node generate-pdf.js
 */

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const BASE_DIR    = __dirname;
const INDEX_HTML  = path.join(BASE_DIR, 'index.html');
const MOBILE_HTML = path.join(BASE_DIR, 'mobile.html');
const SCREENSHOTS_DIR = path.join(BASE_DIR, 'Screenshots');
const PDF_DIR     = path.join(BASE_DIR, 'Exports', 'PDF');

// Ensure output directories exist
[SCREENSHOTS_DIR, PDF_DIR].forEach(d => {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
});

async function captureDesktop(browser) {
  console.log('📸 Capturing Desktop view...');
  const page = await browser.newPage();

  // Set desktop viewport
  await page.setViewport({ width: 1280, height: 900, deviceScaleFactor: 2 });

  // Load the email template
  await page.goto(`file://${INDEX_HTML}`, { waitUntil: 'networkidle0' });

  // Wait for fonts to load
  await page.evaluateHandle('document.fonts.ready');
  await new Promise(resolve => setTimeout(resolve, 1200));

  // Screenshot — full page
  const screenshotPath = path.join(SCREENSHOTS_DIR, 'Desktop_Email.png');
  await page.screenshot({
    path: screenshotPath,
    fullPage: true,
    type: 'png'
  });
  console.log(`  ✓ PNG: ${path.relative(BASE_DIR, screenshotPath)}`);

  // PDF Export
  const pdfPath = path.join(PDF_DIR, 'FlowSphere-Email-Desktop.pdf');
  await page.emulateMediaType('screen');
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' }
  });
  console.log(`  ✓ PDF: ${path.relative(BASE_DIR, pdfPath)}`);

  await page.close();
}

async function captureMobile(browser) {
  console.log('📱 Capturing Mobile view...');
  const page = await browser.newPage();

  // Set mobile viewport (iPhone 13)
  await page.setViewport({ width: 375, height: 812, deviceScaleFactor: 3 });

  // Load mobile template
  await page.goto(`file://${MOBILE_HTML}`, { waitUntil: 'networkidle0' });

  // Wait for fonts
  await page.evaluateHandle('document.fonts.ready');
  await new Promise(resolve => setTimeout(resolve, 1200));

  // Screenshot — full page
  const screenshotPath = path.join(SCREENSHOTS_DIR, 'Mobile_Email.png');
  await page.screenshot({
    path: screenshotPath,
    fullPage: true,
    type: 'png'
  });
  console.log(`  ✓ PNG: ${path.relative(BASE_DIR, screenshotPath)}`);

  // PDF Export
  const pdfPath = path.join(PDF_DIR, 'FlowSphere-Email-Mobile.pdf');
  await page.emulateMediaType('screen');
  await page.pdf({
    path: pdfPath,
    width: '375px',
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' }
  });
  console.log(`  ✓ PDF: ${path.relative(BASE_DIR, pdfPath)}`);

  await page.close();
}

async function captureDesignSystem(browser) {
  console.log('🎨 Capturing Design System SVG previews as PNG...');
  const svgFiles = [
    { file: path.join(BASE_DIR, 'Design-System', 'color-palette.svg'),    out: 'Color_Palette.png',    w: 760, h: 340 },
    { file: path.join(BASE_DIR, 'Design-System', 'typography-scale.svg'), out: 'Typography_Scale.png', w: 760, h: 510 },
    { file: path.join(BASE_DIR, 'Design-System', 'spacing-tokens.svg'),   out: 'Spacing_Tokens.png',  w: 760, h: 530 },
    { file: path.join(BASE_DIR, 'Design-System', 'design-system.svg'),    out: 'Design_System.png',   w: 1000, h: 700 },
  ];

  for (const item of svgFiles) {
    if (!fs.existsSync(item.file)) {
      console.log(`  ⚠ Skipping (not found): ${item.file}`);
      continue;
    }

    const page = await browser.newPage();
    await page.setViewport({ width: item.w, height: item.h, deviceScaleFactor: 2 });
    await page.goto(`file://${item.file}`, { waitUntil: 'networkidle0' });

    const outPath = path.join(SCREENSHOTS_DIR, item.out);
    await page.screenshot({ path: outPath, type: 'png' });
    console.log(`  ✓ ${item.out}`);
    await page.close();
  }
}

async function main() {
  console.log('\n🖨️  FlowSphere Email Template — Screenshot & PDF Generator');
  console.log('============================================================\n');

  let browser;
  try {
    browser = await puppeteer.launch({
      headless: 'new',
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--font-render-hinting=none',
        '--disable-web-security'
      ]
    });

    await captureDesktop(browser);
    await captureMobile(browser);
    await captureDesignSystem(browser);

    console.log('\n✅ All screenshots and PDFs generated!\n');
    console.log(`  Screenshots : ${SCREENSHOTS_DIR}`);
    console.log(`  PDFs        : ${PDF_DIR}`);

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    console.log('\n💡 To install Puppeteer: npm install puppeteer');
    console.log('   Then run: node generate-pdf.js\n');
    process.exit(1);
  } finally {
    if (browser) await browser.close();
  }

  console.log('\n============================================================\n');
}

main();
