const projects = [
  {
    id: 1,
    title: 'Punk Event Poster',
    thumbnail: '/thumbnails/poster1.jpg',
    description: 'A gritty punk-style event poster featuring heavy textures, bold typography, and rebellious energy that captures the raw essence of underground music culture.',
    category: 'Poster Design',
    tags: ['Poster', 'Punk', 'Typography'],
    media: [
      '/media/poster1_main.jpg',
      '/media/poster1_detail.jpg',
      '/media/poster1_process.jpg',
      '/media/poster1_mockup.jpg'
    ]
  },
  {
    id: 2,
    title: 'Band Performance Reel',
    thumbnail: '/thumbnails/reel1.jpg',
    description: 'A fast-paced edit showcasing video highlights from a local band performance, featuring dynamic cuts, synchronized beats, and atmospheric lighting effects.',
    category: 'Video Editing',
    tags: ['Video', 'Music', 'Performance'],
    media: [
      '/media/reel1_main.mp4',
      '/media/reel1_behind.mp4',
      '/media/reel1_cuts.mp4',
      '/media/reel1_final.mp4'
    ]
  },
  {
    id: 3,
    title: 'Social Media Kit',
    thumbnail: '/thumbnails/template1.jpg',
    description: 'Comprehensive branded social media layout package for Instagram posts and stories, featuring a punk twist with consistent visual identity across all formats.',
    category: 'Social Media',
    tags: ['Social', 'Branding', 'Instagram'],
    media: [
      '/media/social_posts.jpg',
      '/media/social_stories.jpg',
      '/media/social_covers.jpg',
      '/media/social_mockups.jpg'
    ]
  },
  {
    id: 4,
    title: 'Collage Art Poster',
    thumbnail: '/thumbnails/poster1.jpg', // placeholder
    description: 'An experimental poster design using layered collage techniques, mixing analog and digital elements to create a unique textural composition.',
    category: 'Poster Design',
    tags: ['Poster', 'Collage', 'Experimental'],
    media: [
      '/media/poster2_main.jpg',
      '/media/poster2_layers.jpg',
      '/media/poster2_texture.jpg',
      '/media/poster2_final.jpg'
    ]
  },
  {
    id: 5,
    title: 'Typography Poster',
    thumbnail: '/thumbnails/poster1.jpg', // placeholder
    description: 'A bold black-and-white poster emphasizing type hierarchy and spacing, showcasing the power of typography as the primary design element.',
    category: 'Poster Design',
    tags: ['Poster', 'Typography', 'Minimal'],
    media: [
      '/media/poster3_main.jpg',
      '/media/poster3_grid.jpg',
      '/media/poster3_variations.jpg',
      '/media/poster3_print.jpg'
    ]
  },
  {
    id: 6,
    title: 'Vintage Style Reel',
    thumbnail: '/thumbnails/reel1.jpg', // placeholder
    description: 'A cinematic highlight reel blending modern footage with vintage overlays and analog textures, creating a nostalgic yet contemporary feel.',
    category: 'Video Editing',
    tags: ['Video', 'Vintage', 'Cinematic'],
    media: [
      '/media/reel2_main.mp4',
      '/media/reel2_vintage.mp4',
      '/media/reel2_effects.mp4',
      '/media/reel2_color.mp4'
    ]
  },
  {
    id: 7,
    title: 'Dynamic Instagram Templates',
    thumbnail: '/thumbnails/template1.jpg', // placeholder
    description: 'Colorful Instagram template variation with dynamic visual hierarchy, perfect for brands wanting to stand out in the social media landscape.',
    category: 'Social Media',
    tags: ['Social', 'Instagram', 'Template'],
    media: [
      '/media/template2_variants.jpg',
      '/media/template2_colors.jpg',
      '/media/template2_layouts.jpg',
      '/media/template2_usage.jpg'
    ]
  },
  {
    id: 8,
    title: 'Glitch Art Templates',
    thumbnail: '/thumbnails/template1.jpg', // placeholder
    description: 'Alternative template design leaning into distorted typography and glitch art styles, perfect for tech brands and digital artists.',
    category: 'Social Media',
    tags: ['Social', 'Glitch', 'Digital Art'],
    media: [
      '/media/template3_glitch.jpg',
      '/media/template3_distort.jpg',
      '/media/template3_digital.jpg',
      '/media/template3_tech.jpg'
    ]
  },
  {
    id: 9,
    title: 'Creative Typography Reel',
    thumbnail: '/thumbnails/reel1.jpg', // placeholder
    description: 'A final creative reel mixing kinetic typography, live footage, and special effects to create maximum visual impact and engagement.',
    category: 'Video Editing',
    tags: ['Video', 'Typography', 'Effects'],
    media: [
      '/media/reel3_typography.mp4',
      '/media/reel3_kinetic.mp4',
      '/media/reel3_effects.mp4',
      '/media/reel3_final.mp4'
    ]
  }
];

// Helper function to get projects by category
export const getProjectsByCategory = (category) => {
  return projects.filter(project => project.category === category);
};

// Helper function to get all categories
export const getCategories = () => {
  return [...new Set(projects.map(project => project.category))];
};

// Helper function to get all tags
export const getAllTags = () => {
  return [...new Set(projects.flatMap(project => project.tags || []))];
};

export default projects;