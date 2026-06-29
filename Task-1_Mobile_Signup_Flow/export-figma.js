// export-figma.js
// Node.js script to dynamically query Figma REST API and download screens as PNG and SVG

const https = require('https');
const fs = require('fs');
const path = require('path');

const FIGMA_TOKEN = process.env.FIGMA_TOKEN || 'YOUR_FIGMA_TOKEN_HERE';
const FILE_KEY = 'F7fBowz7kiVxKLdu0F0YN4';

const TARGET_SCREENS = [
  { name: 'Splash', keys: ['splash'] },
  { name: 'Welcome', keys: ['welcome'] },
  { name: 'Create Account', keys: ['create account', 'create_account', 'sign up', 'signup'] },
  { name: 'OTP Verification', keys: ['otp verification', 'otp_verification', 'otp', 'verification'] },
  { name: 'Profile Setup', keys: ['profile setup', 'profile_setup', 'profile'] },
  { name: 'Choose Interests', keys: ['choose interests', 'choose_interests', 'interests', 'choose interest'] },
  { name: 'Success', keys: ['success'] }
];

const headers = {
  'X-Figma-Token': FIGMA_TOKEN
};

const rootDir = __dirname;
const screenshotsDir = path.join(rootDir, 'Screenshots');
const assetsDir = path.join(rootDir, 'Assets');

// Make sure target folders exist
if (!fs.existsSync(screenshotsDir)) fs.mkdirSync(screenshotsDir, { recursive: true });
if (!fs.existsSync(assetsDir)) fs.mkdirSync(assetsDir, { recursive: true });

function apiRequest(urlPath) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.figma.com',
      path: urlPath,
      method: 'GET',
      headers: headers
    };
    
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode !== 200) {
          reject(new Error(`Figma API returned status ${res.statusCode}: ${data}`));
        } else {
          resolve(JSON.parse(data));
        }
      });
    });
    
    req.on('error', reject);
    req.end();
  });
}

function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to download file from ${url}, status ${res.statusCode}`));
        return;
      }
      const fileStream = fs.createWriteStream(destPath);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });
      fileStream.on('error', (err) => {
        fs.unlink(destPath, () => {});
        reject(err);
      });
    }).on('error', reject);
  });
}

// Deep search the Figma document tree for matching frames
function findFrames(node, matched = {}) {
  if (!node) return matched;
  
  if (node.type === 'FRAME' || node.type === 'COMPONENT' || node.type === 'INSTANCE') {
    const nodeName = node.name.toLowerCase().trim();
    for (const screen of TARGET_SCREENS) {
      if (screen.keys.some(k => nodeName === k || nodeName.startsWith(k + ' ') || nodeName.endsWith(' ' + k))) {
        // If not already matched, or if this is a top-level match
        if (!matched[screen.name]) {
          matched[screen.name] = {
            id: node.id,
            name: node.name
          };
        }
      }
    }
  }
  
  if (node.children) {
    node.children.forEach(child => findFrames(child, matched));
  }
  
  return matched;
}

async function run() {
  try {
    console.log('Fetching Figma file structure...');
    const fileData = await apiRequest(`/v1/files/${FILE_KEY}`);
    
    console.log('Searching file for screens...');
    const matched = findFrames(fileData.document);
    
    console.log('\nMatched screens found in Figma file:');
    Object.keys(matched).forEach(name => {
      console.log(`- ${name}: ID = ${matched[name].id} (Figma Name: "${matched[name].name}")`);
    });
    
    // Check if we missed any screens
    const missing = TARGET_SCREENS.filter(s => !matched[s.name]);
    if (missing.length > 0) {
      console.log('\nWarning: The following screens were not explicitly found by name matching:');
      missing.forEach(m => console.log(`- ${m.name}`));
      console.log('Attempting to use first available top-level frames for unmatched items...');
      
      // Fallback: collect top-level frames in the canvas to assign to missing screens
      const canvasFrames = [];
      const collectTopFrames = (node) => {
        if (node.type === 'CANVAS') {
          node.children.forEach(c => {
            if (c.type === 'FRAME') canvasFrames.push(c);
          });
        } else if (node.children) {
          node.children.forEach(collectTopFrames);
        }
      };
      collectTopFrames(fileData.document);
      
      let frameIdx = 0;
      missing.forEach(m => {
        // Find a frame that hasn't been matched yet
        while (frameIdx < canvasFrames.length) {
          const frame = canvasFrames[frameIdx++];
          const alreadyMatched = Object.values(matched).some(v => v.id === frame.id);
          if (!alreadyMatched) {
            matched[m.name] = { id: frame.id, name: frame.name };
            console.log(`Assigned fallback Frame "${frame.name}" (ID: ${frame.id}) to screen "${m.name}"`);
            break;
          }
        }
      });
    }

    const matchedNames = Object.keys(matched);
    if (matchedNames.length === 0) {
      throw new Error('No frames could be identified in the Figma file. Ensure there are frames on the canvas.');
    }

    const ids = matchedNames.map(name => matched[name].id);
    
    console.log('\nRequesting PNG render URLs from Figma...');
    const pngResult = await apiRequest(`/v1/images/${FILE_KEY}?ids=${ids.join(',')}&format=png&scale=2`);
    
    console.log('Requesting SVG render URLs from Figma...');
    const svgResult = await apiRequest(`/v1/images/${FILE_KEY}?ids=${ids.join(',')}&format=svg`);
    
    console.log('\nDownloading assets...');
    for (const name of matchedNames) {
      const id = matched[name].id;
      const pngUrl = pngResult.images[id];
      const svgUrl = svgResult.images[id];
      
      const safeName = name.replace(/\s+/g, '_');
      
      if (pngUrl) {
        const dest = path.join(screenshotsDir, `${safeName}.png`);
        console.log(`Downloading PNG: ${name} -> Screenshots/${safeName}.png`);
        await downloadFile(pngUrl, dest);
      } else {
        console.log(`Warning: No PNG URL returned for ${name}`);
      }
      
      if (svgUrl) {
        const dest = path.join(assetsDir, `${safeName}.svg`);
        console.log(`Downloading SVG: ${name} -> Assets/${safeName}.svg`);
        await downloadFile(svgUrl, dest);
      } else {
        console.log(`Warning: No SVG URL returned for ${name}`);
      }
    }
    
    console.log('\nAll assets exported successfully!');
    
  } catch (error) {
    console.error('Error during Figma export process:', error.message);
    process.exit(1);
  }
}

run();
