const en = {
  seo: {
    title: 'Moataz Ahmed | Lead Systems Architect & Sovereign AI Expert',
    description:
      'Portfolio of Moataz Ahmed, a seasoned software engineer with 15+ years experience. Expert in Laravel, Filament, Sovereign AI Architecture, and audit-ready system design.',
    author: 'Moataz Ahmed',
    url: 'https://m3taz-ahmed.github.io',
    image: '/assets/moataz-ahmed-pic.jpg',
  },
  nav: {
    aiOS: 'AI OS',
    about: 'About',
    journey: 'Journey',
    projects: 'Projects',
    stack: 'Stack',
    education: 'Education',
    contact: 'Contact',
    cta: "Let's Talk",
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  hero: {
    title: [
      { text: 'Architecting ', gradient: false },
      { text: 'Audit-Ready', gradient: true },
      { text: '\nScalable Systems', gradient: false },
    ],
    nameTag: 'SYSTEM_ARCHITECT_ID',
    name: 'MOATAZ AHMED',
    subtitle: 'Senior ',
    typewriter: [
      'System Architect',
      'Laravel Specialist',
      'Audit-Ready Designer',
      'Backend Orchestrator',
    ],
    ctaPrimary: 'Explore My Work',
    ctaSecondary: 'Full Resume',
  },
  howIWork: {
    title: { prefix: 'How I ', highlight: 'Work' },
    steps: [
      {
        icon: 'Search',
        title: 'Discovery',
        desc: 'Deep analysis of business logic and audit requirements before writing a single line of code.',
      },
      {
        icon: 'Compass',
        title: 'Architecture',
        desc: 'Designing scalable, normalized database schemas and SOLID backend structures.',
      },
      {
        icon: 'FlaskConical',
        title: 'TDD & Dev',
        desc: 'Implementing features with test-driven development to ensure zero regressions.',
      },
      {
        icon: 'ShieldCheck',
        title: 'Audit-Ready',
        desc: 'Final system integrity check ensuring 100% data consistency and compliance.',
      },
    ],
  },
  sovereignAI: {
    title: { prefix: 'Sovereign AI ', highlight: 'Architecture' },
    label: 'VERSION_CONTROLLED_INTELLIGENCE',
    version: 'AI Global OS v4.22.0',
    headline: 'Governing LLMs into Enterprise Principal Architects.',
    description:
      'A zero-compromise Sovereign Architectural Engine. Most teams use AI as a high-speed junior developer that silently introduces technical debt and context drift. This OS hard-loads strict version-controlled rules from a centralized brain prior to execution, ensuring every generated line aligns with SOLID principles, OWASP standards, and bleeding-edge frameworks.',
    tags: [
      { label: 'Zero Context Drift', info: 'Permanently locks LLM rules', level: 'expert' },
      { label: 'Next.js 15', info: 'Latest App Router standard', level: 'expert' },
      { label: 'Laravel 13', info: 'Enterprise backend patterns', level: 'expert' },
      { label: 'PostgreSQL 17', info: 'UUIDv7 & high-scale schemas', level: 'advanced' },
      { label: 'Self-Healing', info: 'Automated integrity verification', level: 'advanced' },
      { label: '+more', info: 'Qdrant RAG, Sliding Window, Redis queues', level: '' },
    ],
    cta: 'Explore Sovereign Engine',
  },
  about: {
    title: { prefix: 'Senior ', highlight: 'Architect Profile' },
    intro:
      'Seasoned Software Engineer with a technical background spanning over 15 years in the Egyptian tech landscape.',
    body: 'I specialize in Laravel and Filament, focusing on building secure, scalable architectures for complex business logic. In addition, I engineer Sovereign AI Operating Systems that enforce LLM governance and eliminate context drift. My unique dual-expertise in Internal Audit & System Integrity allows me to deliver "audit-ready" applications that ensure 100% data consistency and compliance.',
    stats: [
      { value: 15, suffix: '', label: 'Years of Mastery' },
      { value: 28000, suffix: '', label: 'Bookings Handled' },
      { value: 100, suffix: '%', label: 'Data Consistency' },
      { value: 99.9, suffix: '%', label: 'System Uptime' },
    ],
    resume: 'Download Full Resume',
  },
  experience: {
    title: { prefix: 'Professional ', highlight: 'Journey' },
    items: [
      {
        role: 'Internal Audit Department Manager',
        company: 'Petroleum Pipelines Company (PPC)',
        date: '2016 - Present',
        points: [
          'Audit Digital Transformation: Architected a custom audit ecosystem to digitize manual workflows, ensuring 100% data consistency for corporate compliance.',
          'Advanced Permissions: Designed a sophisticated RBAC framework to manage auditor roles and multi-tier manager approvals.',
          'Automated Reporting Engine: Developed a dynamic system for generating automated quarterly audit summaries and compliance reports.',
        ],
      },
      {
        role: 'Back-End Developer',
        company: '360Codes',
        date: '2016 - Present (Part-time)',
        points: [
          'Leading the development of scalable backend architectures using Laravel.',
          'Building and maintaining high-performance APIs and integrating advanced admin dashboards using Filament.',
        ],
      },
      {
        role: 'Freelance Software Developer',
        company: 'Self-Employed',
        date: '2009 - 2016',
        points: [
          'Designed and maintained various web applications using PHP and MySQL.',
          'Focused on building custom CMS solutions and optimizing database performance for small-scale businesses.',
        ],
      },
      {
        role: 'Web Developer',
        company: 'Memphis Tours Egypt',
        date: 'Until Sep 2009',
        points: [
          'Maintained and enhanced legacy tourism platforms. Optimized server performance and improved UX for high-traffic seasonal periods.',
        ],
      },
    ],
  },
  projects: {
    title: { prefix: 'Deep Dive ', highlight: 'Case Studies' },
    explore: 'Explore',
    items: [
      {
        title: 'SkyBridge Ticketing Platform',
        desc: 'Engineered a high-traffic booking system with real-time inventory and 99.9% uptime during peak hours.',
        metric: '28K+ Bookings',
        icon: 'Ticket',
        image: '/assets/skybridge.png',
        link: 'https://facilitiesservices.sa/welcome',
        tags: ['Laravel', 'MySQL', 'Real-time'],
      },
      {
        title: 'Raunautica Maritime Dashboard',
        desc: 'Transformed traditional marina docking into a fully automated digital workflow with vessel scheduling.',
        metric: 'Automation',
        icon: 'Anchor',
        image: '/assets/raunautica.png',
        link: 'https://raunautica.com',
        tags: ['Filament PHP', 'Redis', 'Eloquent'],
      },
      {
        title: 'Business Belarabi Directory',
        desc: 'Built a high-flexibility survey engine with automated reporting and B2B partner management.',
        metric: 'Laravel 13',
        icon: 'ChartBar',
        image: '/assets/businessbelarabi.png',
        link: 'https://businessbelarabi.com',
        tags: ['Filament v5', 'Reporting', 'B2B'],
      },
      {
        title: 'IshraqMed Healthcare Portal',
        desc: 'Real-time appointment booking and notification architecture that increased patient bookings by 35%.',
        metric: '+35% Bookings',
        icon: 'Smartphone',
        image: '/assets/ishraqmed.png',
        link: 'https://ishraqmed.net/ar',
        tags: ['GraphQL', 'Node.js', 'Real-time'],
      },
      {
        title: 'AI Globals',
        desc: 'Version-controlled rule engine and tech-stack definitions for sovereign AI agent orchestration.',
        metric: 'Public',
        icon: 'Code',
        image: '',
        link: 'https://github.com/m3taz-ahmed/ai-globals',
        tags: ['AI', 'Governance', 'Rules'],
      },
      {
        title: 'InternalAudtingSys',
        desc: 'End-to-end internal audit platform with role-based access and automated compliance evidence.',
        metric: 'Private',
        icon: 'ShieldCheck',
        image: '',
        link: 'https://github.com/m3taz-ahmed/InternalAudtingSys',
        tags: ['Laravel', 'RBAC', 'Audit'],
      },
      {
        title: 'Alqenaat',
        desc: 'Specialized business platform for managing Islamic channels and resource distribution.',
        metric: 'Private',
        icon: 'Code',
        image: '',
        link: 'https://github.com/m3taz-ahmed/alqenaat',
        tags: ['Laravel', 'B2B'],
      },
      {
        title: 'Gobook',
        desc: 'Multi-tenant booking and reservation engine with tenant billing and payment gateway integration.',
        metric: 'Private',
        icon: 'Code',
        image: '',
        link: 'https://github.com/m3taz-ahmed/gobook',
        tags: ['Multi-tenancy', 'Billing', 'Laravel'],
      },
      {
        title: 'Tourx',
        desc: 'Travel and tour management system with itinerary builder, bookings, and supplier coordination.',
        metric: 'Private',
        icon: 'Code',
        image: '',
        link: 'https://github.com/m3taz-ahmed/tourx',
        tags: ['Travel', 'Laravel'],
      },
      {
        title: 'Yachnile',
        desc: 'E-commerce and service platform with custom checkout flows and inventory management.',
        metric: 'Private',
        icon: 'Code',
        image: '',
        link: 'https://github.com/m3taz-ahmed/yachnile',
        tags: ['E-commerce', 'Laravel'],
      },
    ],
  },
  skills: {
    title: { prefix: 'Technical ', highlight: 'Manifesto' },
    categories: [
      {
        title: 'Backend Mastery',
        tags: [
          { label: 'PHP', info: '15+ years of core logic development', level: 'expert' },
          { label: 'Laravel', info: 'Deep architectural expertise', level: 'expert' },
          { label: 'Node.js', info: 'Real-time orchestration', level: 'advanced' },
          { label: 'GraphQL', info: 'Complex API design', level: 'advanced' },
          { label: 'RESTful APIs', info: 'Stateless & scalable', level: 'expert' },
        ],
      },
      {
        title: 'Admin & UX',
        tags: [
          { label: 'Filament', info: 'Lead developer grade', level: 'expert' },
          { label: 'Livewire', info: 'Reactive UI building', level: 'expert' },
          { label: 'Alpine.js', info: 'Client-side micro-interactions', level: 'advanced' },
          { label: 'Tailwind CSS', info: 'Modern utility-first styling', level: 'expert' },
          { label: 'Astro', info: 'Fast static content sites', level: 'advanced' },
        ],
      },
      {
        title: 'Data & Systems',
        tags: [
          { label: 'MySQL', info: 'Normalized, audit-ready schemas', level: 'expert' },
          { label: 'Redis', info: 'High-speed caching & queues', level: 'advanced' },
          { label: 'SOLID', info: 'Strong foundational design', level: 'expert' },
          { label: 'RBAC', info: 'Complex authorization', level: 'expert' },
          { label: 'PostgreSQL', info: 'UUIDv7 & high-scale schemas', level: 'advanced' },
        ],
      },
    ],
  },
  education: {
    title: { prefix: 'Education & ', highlight: 'Growth' },
    items: [
      {
        title: 'Bachelor of Commerce',
        place: 'Ain Shams University',
        desc: 'Foundational education in business administration and management — providing a unique lens for building audit-ready enterprise systems.',
        icon: 'GraduationCap',
      },
      {
        title: 'Professional Mastery',
        place: 'Self-Taught Since 2006',
        desc: 'Nearly two decades of hands-on architectural experience. Expert-level mastery across PHP, Laravel, and modern web ecosystems through continuous real-world implementation.',
        icon: 'Rocket',
      },
    ],
  },
  testimonials: {
    title: { prefix: 'What People ', highlight: 'Say' },
    goTo: 'Go to testimonial',
    items: [
      {
        quote:
          'Moataz did not just build our system — he understood our business first. The audit module he designed saved us weeks of manual work every quarter.',
        author: 'Ahmed R.',
        role: 'Operations Director',
      },
      {
        quote:
          'We needed someone who could handle backend complexity without hand-holding. Moataz delivered a clean architecture and the dashboard was exactly what we needed.',
        author: 'Sarah M.',
        role: 'Product Manager',
      },
      {
        quote:
          'What sets Moataz apart is his attention to data integrity. He caught edge cases in our booking flow that nobody else noticed. Solid engineer.',
        author: 'Omar K.',
        role: 'CTO, Tech Startup',
      },
    ],
  },
  contact: {
    title: { prefix: 'Initiate ', highlight: 'Direct Line' },
    subtitle: "Let's build systems that last.",
    info: {
      email: 'm3taz.ahmed@gmail.com',
      phone: '+201001495645',
      github: 'https://github.com/m3taz-ahmed',
      linkedin: 'https://linkedin.com/in/m3taz-ahmed/',
      whatsapp: 'https://wa.me/201001495645',
    },
    form: {
      title: 'Send a Message',
      name: 'Full Name',
      email: 'Email Address',
      message: 'Project details or technical challenge...',
      submit: 'Dispatch to Moataz',
      sending: 'Sending...',
      success: 'Connection established. Dispatching...',
      error: 'Failed to dispatch. Please try again.',
    },
  },
  footer: {
    copyright:
      '© 2026 Moataz Ahmed. Bachelor of Commerce, Ain Shams University. Native Arabic & Professional English.',
  },
  notFound: {
    title: 'Page Not Found',
    message: 'The page you are looking for does not exist.',
    back: 'Back Home',
  },
};

export type Translation = typeof en;
export default en;
