const fs = require('fs');
const data = fs.readFileSync('image_files.txt', 'utf8');
const imagesImported = data.split('\n').filter(line => line.trim());
module.exports = {
  inputDir: "src/images",
  outputDir: "test",
  //sizes: [100, 200, 400, 800],
  formats: ['avif', 'webp'],
  //imageFiles: ['images.jpg']
  imageFiles: imagesImported
};