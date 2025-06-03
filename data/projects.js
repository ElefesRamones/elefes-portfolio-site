const projects = [
  {
    id: 1,
    title: 'Punk Event Poster',
    thumbnail: 'logo/isda',
    description: 'A gritty punk-style event poster featuring heavy textures, bold typography, and rebellious energy that captures the raw essence of underground music culture.',
    category: 'Poster Design',
    tags: ['Poster', 'Punk', 'Typography'],
    media: [
      'logo/isda',
      'logo/isda-round',
      'logo/rc'
    ],
    mediaTypes: ['image', 'image', 'image']
  },
  {
    id: 2,
    title: 'Band Performance Reel',
    thumbnail: 'logo/rc',
    description: 'A fast-paced edit showcasing video highlights from a local band performance, featuring dynamic cuts, synchronized beats, and atmospheric lighting effects.',
    category: 'Video Editing',
    tags: ['Video', 'Music', 'Performance'],
    media: [
      'logo/rc',
      'logo/isda',
      'logo/isda-round'
    ],
    mediaTypes: ['image', 'image', 'image']
  },
  {
    id: 3,
    title: 'Social Media Kit',
    thumbnail: 'logo/isda-round',
    description: 'Comprehensive branded social media layout package for Instagram posts and stories, featuring a punk twist with consistent visual identity across all formats.',
    category: 'Social Media',
    tags: ['Social', 'Branding', 'Instagram'],
    media: [
      'logo/isda-round',
      'logo/isda',
      'logo/rc'
    ],
    mediaTypes: ['image', 'image', 'image']
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