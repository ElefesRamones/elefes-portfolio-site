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

// Define the folders to upload
const folders = {
  thumbnails: {
    local: 'public/thumbnails',
    cloudinary: 'portfolio/thumbnails'
  },
  media: {
    local: 'public/media',
    cloudinary: 'portfolio/projects'
  }
};

async function uploadFile(filepath, folder) {
  try {
    console.log(`Uploading ${filepath} to ${folder}...`);
    const result = await cloudinary.uploader.upload(filepath, {
      folder: folder,
      resource_type: "auto", // Automatically detect if it's an image or video
      use_filename: true,
      unique_filename: false,
    });
    console.log(`✅ Uploaded successfully: ${result.public_id}`);
    return result;
  } catch (error) {
    console.error(`❌ Failed to upload ${filepath}:`, error);
  }
}

async function uploadAllFiles() {
  // Upload thumbnails
  const thumbnailFiles = fs.readdirSync(folders.thumbnails.local);
  for (const file of thumbnailFiles) {
    const filepath = path.join(folders.thumbnails.local, file);
    await uploadFile(filepath, folders.thumbnails.cloudinary);
  }

  // Upload media files
  const mediaFiles = fs.readdirSync(folders.media.local);
  for (const file of mediaFiles) {
    const filename = path.parse(file).name;
    const filepath = path.join(folders.media.local, file);
    // Create a specific folder for each project
    const projectFolder = `${folders.media.cloudinary}/${filename}`;
    await uploadFile(filepath, projectFolder);
  }
}

uploadAllFiles().then(() => {
  console.log('🎉 All files uploaded successfully!');
}).catch(console.error);
