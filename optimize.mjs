import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const IMG_DIR = 'public/img';
const OUT_DIR = 'public/optimized';
const THUMB_DIR = 'public/thumbnails';

async function run() {
  await fs.mkdir(OUT_DIR, { recursive: true });
  await fs.mkdir(THUMB_DIR, { recursive: true });

  const files = await fs.readdir(IMG_DIR);
  for (const file of files) {
    if (!file.match(/\.(jpg|jpeg|png)$/i)) continue;
    const inputPath = path.join(IMG_DIR, file);
    const basename = path.parse(file).name;
    
    // Main optimized
    await sharp(inputPath)
      .resize(1920, 1080, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 75 })
      .toFile(path.join(OUT_DIR, `${basename}.webp`));
      
    // Thumbnail
    await sharp(inputPath)
      .resize(480, 270, { fit: 'cover' })
      .webp({ quality: 60 })
      .toFile(path.join(THUMB_DIR, `${basename}.webp`));
      
    console.log(`Processed ${file}`);
  }
}
run().catch(console.error);
