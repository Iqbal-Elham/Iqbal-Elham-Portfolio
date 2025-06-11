const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, 'src', 'assets');
const targetDir = path.join(__dirname, 'src', 'assets', 'webp');

// Create target directory if it doesn't exist
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Convert all PNG images to WebP
async function convertImages() {
  const files = fs.readdirSync(sourceDir);
  
  for (const file of files) {
    if (file.endsWith('.png')) {
      const inputPath = path.join(sourceDir, file);
      const outputPath = path.join(targetDir, file.replace('.png', '.webp'));
      
      try {
        await sharp(inputPath)
          .webp({ quality: 80 })
          .toFile(outputPath);
        
        console.log(`Converted ${file} to WebP`);
      } catch (error) {
        console.error(`Error converting ${file}:`, error);
      }
    }
  }
}

convertImages(); 