import { Cloudinary } from '@cloudinary/url-gen';

const cld = new Cloudinary({
  cloud: {
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
  }
});

export const getImageUrl = (publicId, options = {}) => {
  let image = cld.image(publicId);
  
  // Apply transformations based on options  // Build resize transformation
  if (options.width || options.height) {
    let resize = '';
    if (options.width) resize += `w_${options.width}`;
    if (options.height) resize += `,h_${options.height}`;
    if (options.crop) resize += `,c_${options.crop}`;
    image = image.addTransformation(`${resize}`);
  }
  
  if (options.quality) {
    image = image.quality(options.quality);
  }
  if (options.format) {
    image = image.format(options.format);
  }
  
  // Add automatic format and quality optimization
  image = image.format('auto').quality('auto');

  return image.toURL();
};

export const getVideoUrl = (publicId, options = {}) => {
  let video = cld.video(publicId);
  
  // Apply transformations based on options
  if (options.width) {
    video = video.resize(`w_${options.width}`);
  }
  if (options.quality) {
    video = video.quality(options.quality);
  }
  if (options.format) {
    video = video.format(options.format);
  }

  return video.toURL();
};
