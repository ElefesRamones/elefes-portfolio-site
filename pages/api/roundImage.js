import { createCanvas, loadImage } from 'canvas'
import fs from 'fs'
import path from 'path'

export default async function handler(req, res) {
  try {
    // Load the original image
    const imagePath = path.join(process.cwd(), 'public', 'logo', 'isda.png')
    const originalImage = await loadImage(imagePath)

    // Create a smaller canvas (32x32 is standard favicon size)
    const size = 32
    const canvas = createCanvas(size, size)
    const ctx = canvas.getContext('2d')

    // Create circular clipping path
    ctx.beginPath()
    ctx.arc(size/2, size/2, size/2, 0, Math.PI * 2)
    ctx.clip()

    // Draw the image centered and scaled down
    ctx.drawImage(originalImage, 0, 0, originalImage.width, originalImage.height, 0, 0, size, size)

    // Save the round image with maximum compression
    const roundImagePath = path.join(process.cwd(), 'public', 'logo', 'isda-round.png')
    const buffer = canvas.toBuffer('image/png', { compressionLevel: 9, filters: canvas.PNG_ALL_FILTERS })
    fs.writeFileSync(roundImagePath, buffer)

    res.status(200).json({ success: true })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}
