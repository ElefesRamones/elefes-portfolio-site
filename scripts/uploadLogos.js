require('dotenv').config({ path: '.env.local' });
const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const logoDir = path.join(process.cwd(), 'public', 'logo');

async function uploadFile(filepath, publicId) {
  try {
    console.log(`Uploading ${filepath} to ${publicId}...`);
    const result = await cloudinary.uploader.upload(filepath, {
      public_id: publicId,
      resource_type: 'auto'
    });
    console.log(`Successfully uploaded ${filepath}`);
    return result;
  } catch (error) {
    console.error(`Failed to upload ${filepath}:`, error);
  }
}

async function main() {
  try {
    // Upload logo files
    const files = fs.readdirSync(logoDir);
    
    for (const file of files) {
      const filepath = path.join(logoDir, file);
      const filename = path.parse(file).name;
      const publicId = `logo/${filename}`;
      
      await uploadFile(filepath, publicId);
    }
    
    console.log('All uploads completed!');
  } catch (error) {
    console.error('Upload process failed:', error);
  }
}

main();
