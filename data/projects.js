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
    ],    mediaTypes: ['image', 'image', 'image'],
    sections: [
      {
        heading: "Project Overview",
        content: "A bold and rebellious poster design that captures the raw energy of punk culture. The design incorporates distressed textures and dynamic typography to create an authentic underground aesthetic.",
        afterImage: 0
      },
      {
        heading: "Design Process",
        content: "The creative process involved layering multiple textures and experimenting with torn paper effects. Typography was carefully selected to balance legibility with an edgy, DIY aesthetic.",
        afterImage: 1
      }
    ]
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
    ],    mediaTypes: ['image', 'image', 'image'],
    sections: [
      {
        heading: "Behind the Scenes",
        content: "This performance reel captures the raw energy of live music through carefully timed cuts and transitions. Each moment was selected to showcase the band's unique stage presence.",
        afterImage: 0
      },
      {
        heading: "Technical Details",
        content: "The editing process focused on synchronizing visual cuts with the music's rhythm, while color grading enhanced the atmosphere of each shot.",
        afterImage: 1
      }
    ]
  },
  {
    id: 3,
    title: 'Social Media Kit',
    thumbnail: 'logo/isda-round',
    description: 'Comprehensive branded social media layout package for Instagram posts and stories, featuring a punk twist with consistent visual identity across all formats.',
    category: 'Social Media',
    tags: ['Social', 'Branding', 'Instagram'],    media: [
      'logo/isda-round',
      'logo/isda',
      'logo/rc'
    ],
    mediaTypes: ['image', 'image', 'image'],
    sections: [
      {
        heading: "Brand Strategy",
        content: "This social media kit was designed to maintain brand consistency while adapting to different platform requirements. Each element was carefully crafted to stand out in crowded social feeds.",
        afterImage: 0
      },
      {
        heading: "Implementation",
        content: "The kit includes templates for various content types, ensuring the brand's punk aesthetic translates effectively across all social media formats.",
        afterImage: 1
      }
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