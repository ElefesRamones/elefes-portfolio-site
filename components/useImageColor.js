import { useState, useEffect } from 'react';

export function getAverageRGB(imgEl) {
  const blockSize = 5;
  const defaultRGB = { r: 0, g: 0, b: 0 };
  
  try {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext && canvas.getContext('2d');
    
    if (!context) {
      return defaultRGB;
    }

    const height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
    const width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

    context.drawImage(imgEl, 0, 0);

    // Sample the bottom part of the image where the text is
    const imageData = context.getImageData(0, height - height/4, width, height/4);
    const data = imageData.data;
    const length = data.length;

    let rgb = { r: 0, g: 0, b: 0 };
    let count = 0;

    for (let i = 0; i < length; i += blockSize * 4) {
      rgb.r += data[i];
      rgb.g += data[i + 1];
      rgb.b += data[i + 2];
      count++;
    }

    rgb.r = Math.floor(rgb.r/count);
    rgb.g = Math.floor(rgb.g/count);
    rgb.b = Math.floor(rgb.b/count);

    return rgb;
  } catch (e) {
    return defaultRGB;
  }
}

export function shouldUseWhiteText(rgb) {
  // Calculate relative luminance using the formula from WCAG 2.0
  const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
  // Use white text if the background is dark (luminance < 0.5)
  return luminance < 0.5;
}

export function useImageColor(imageRef) {
  const [textColor, setTextColor] = useState('text-black');

  useEffect(() => {
    if (!imageRef.current) return;

    const updateTextColor = () => {
      const rgb = getAverageRGB(imageRef.current);
      setTextColor(shouldUseWhiteText(rgb) ? 'text-white' : 'text-black');
    };

    if (imageRef.current.complete) {
      updateTextColor();
    } else {
      imageRef.current.addEventListener('load', updateTextColor);
    }

    return () => {
      if (imageRef.current) {
        imageRef.current.removeEventListener('load', updateTextColor);
      }
    };
  }, [imageRef]);

  return textColor;
}
