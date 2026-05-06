export const NAV_LINKS = ['About', 'Experience', 'Projects', 'Skills', 'Contact']

export const STATS = [
  { value: '2+', label: 'Internships' },
  { value: '3+', label: 'Projects Built' },
  { value: '5+', label: 'Certifications' },
  { value: '8.4', label: 'MCA CGPA' },
]

export const EXPERIENCE = [
  {
    role: 'Full Stack Developer Intern',
    company: 'Why Global Services',
    location: 'Chennai',
    period: 'Oct 2025 – Present',
    type: 'current',
    color: 'emerald',
    icon: '⚡',
    bullets: [
      'Designed intuitive UI/UX prototypes in Figma delivering responsive and user-friendly interfaces across web applications.',
      'Built and deployed full-stack MERN applications with RESTful APIs implementing secure JWT authentication and seamless database integration.',
      'Collaborated in Agile environments to enhance features, optimize performance, debug issues, and ensure cross-browser compatibility.',
    ],
    tech: ['React.js', 'Node.js', 'MongoDB', 'Figma', 'JWT'],
  },
  {
    role: 'Software Development Intern',
    company: 'Net Tel Solution India Pvt Ltd',
    location: 'Coimbatore',
    period: 'Apr 2024 – May 2024',
    type: 'past',
    color: 'violet',
    icon: '🔧',
    bullets: [
      'Developed and maintained internal web applications using Python and Django with secure authentication, form validation, and CRUD operations.',
      'Designed and integrated backend logic with databases ensuring smooth data flow, reliability, and scalability.',
      'Participated in Agile processes, sprint planning, daily stand-ups, code reviews, debugging and performance optimization.',
    ],
    tech: ['Python', 'Django', 'MySQL', 'REST APIs'],
  },
]

export const PROJECTS = [
  {
    id: 1,
    title: 'Angelic Cakes',
    subtitle: 'AI-Powered E-Commerce Platform',
    period: 'Jan 2026',
    emoji: '🎂',
    color: 'emerald',
    accent: '#00d485',
    featured: true,
    description:
      'Full-stack AI-powered cake ordering platform with product browsing, intelligent customization, AI-driven personalized recommendations, and seamless end-to-end order management.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'AI/ML'],
    links: { github: '#', live: '#' },
  },
  {
    id: 2,
    title: 'Price Compass',
    subtitle: 'Price Comparison & Sentiment Analysis',
    period: 'Mar 2025',
    emoji: '📊',
    color: 'rose',
    accent: '#f43f5e',
    featured: false,
    description:
      'Responsive web app comparing product prices across multiple e-commerce platforms with sentiment analysis and a dynamic dashboard visualizing price trends and customer feedback.',
    tech: ['ReactJS', 'Python', 'Django', 'MySQL', 'Data Viz'],
    links: { github: '#', live: '#' },
  },
  {
    id: 3,
    title: 'SocialHub',
    subtitle: 'Social Media Network Management',
    period: 'Jan 2023',
    emoji: '🌐',
    color: 'violet',
    accent: '#8b5cf6',
    featured: false,
    description:
      'Dashboard for managing social media profiles featuring user analytics, engagement monitoring, content optimization strategy modules, and real-time performance insights.',
    tech: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'PHP'],
    links: { github: '#', live: '#' },
  },
]

export const SKILLS = [
  {
    category: 'Frontend',
    icon: '🎨',
    color: 'emerald',
    items: ['React.js', 'HTML5', 'CSS3', 'JavaScript (ES6+)', 'Tailwind CSS', 'Figma'],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    color: 'blue',
    items: ['Node.js', 'Express.js', 'Python', 'Django', 'REST APIs', 'JWT Auth'],
  },
  {
    category: 'Database',
    icon: '🗄️',
    color: 'amber',
    items: ['MongoDB', 'Mongoose', 'MySQL', 'NoSQL Design', 'CRUD Ops'],
  },
  {
    category: 'Tools & DevOps',
    icon: '🛠️',
    color: 'violet',
    items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Vite', 'npm'],
  },
  {
    category: 'Practices',
    icon: '📋',
    color: 'rose',
    items: ['Agile / SDLC', 'Version Control', 'Code Review', 'UI/UX Principles'],
  },
  {
    category: 'Soft Skills',
    icon: '🤝',
    color: 'teal',
    items: ['Team Collaboration', 'Problem Solving', 'Leadership', 'Adaptability'],
  },
]

export const EDUCATION = [
  {
    degree: 'Master of Computer Applications',
    school: 'PSG College of Arts & Science',
    location: 'Coimbatore',
    period: '2023 – 2025',
    cgpa: '8.4',
    icon: '🎓',
  },
  {
    degree: 'Bachelor of Computer Applications',
    school: 'C. Abdul Hakeem College of Arts & Science',
    location: 'Vellore',
    period: '2020 – 2023',
    cgpa: '7.4',
    icon: '📚',
  },
]

export const CERTIFICATIONS = [
  { name: 'AI Powered Full Stack Development', org: 'Why Tap, Chennai', year: '2026', badge: '🤖' },
  { name: 'NPTEL: The Joy of Computing using Python', org: 'NPTEL', year: '2024', badge: '🐍' },
  { name: 'Web Designing', org: 'PSGCAS, Coimbatore', year: '2024', badge: '🎨' },
  { name: 'Python Programming', org: 'Apollo Arcot', year: '2023', badge: '💻' },
  {
    name: 'Publication: "Techniques to Prevent Eavesdropping on a Wireless Network"',
    org: 'RTIICSM 2024 International Conference',
    year: '2024',
    badge: '📄',
    isPub: true,
  },
]

export const CONTACT_LINKS = [
  { label: 'Email', value: 'riyazzkhan2020@gmail.com', href: 'mailto:riyazzkhan2020@gmail.com', icon: '✉️' },
  { label: 'Phone', value: '+91 9361737613', href: 'tel:+919361737613', icon: '📱' },
  { label: 'LinkedIn', value: 'linkedin.com/in/riyazkhan', href: 'https://www.linkedin.com/in/riyaz-khan-i-0a908b293', icon: '💼' },
  { label: 'GitHub', value: 'github.com/riyazkhan', href: 'https://github.com/Riyazz45', icon: '🐙' },
]