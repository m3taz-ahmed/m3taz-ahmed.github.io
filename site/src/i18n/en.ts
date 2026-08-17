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
      { text: 'Building Secure,\n', gradient: false },
      { text: 'Scalable Systems', gradient: true },
      { text: '\nThat Last', gradient: false },
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
    version: 'aiZee v5.0.0',
    headline: 'The policy layer for AI coding — enforcing engineering discipline on every generated line.',
    description:
      'aiZee is a zero-compromise, version-controlled operating system that sits between you and every AI coding assistant — Cursor, Claude, Copilot, Windsurf, Cline, Aider, Devin. It hard-loads strict rules, version-locked tech-stack references, and security policies from a centralized brain before execution, ensuring every line of generated code aligns with SOLID principles, OWASP standards, and your exact framework versions. No more context drift, deprecated packages, or silent technical debt.',
    tags: [
      { label: '20 Personas', info: 'Auto-selected per task — ARCH, QA, SEC, DEV, SRE, DATA, ML, DEVOPS, API', level: 'expert' },
      { label: '66 Skills', info: 'Persona + lord-level domain skills loaded per task', level: 'expert' },
      { label: 'OWASP + Zero-Trust', info: 'Security policies enforced by default on every action', level: 'expert' },
      { label: 'Policy + Budget + Audit', info: '5-gate pipeline: Probity → Guardian → Policy → Budget → Audit', level: 'advanced' },
      { label: '2,343 Tests · 91% Coverage', info: 'Battle-tested kernel with zero-defect quality gates', level: 'expert' },
      { label: '+more', info: 'Hybrid memory (SQLite + vector), Context7 live docs, Graphify knowledge graph', level: '' },
    ],
    cta: 'Explore aiZee on GitHub',
  },
  about: {
    title: { prefix: 'Senior ', highlight: 'Architect Profile' },
    intro:
      'Seasoned Software Engineer with a technical background spanning over 15 years in the Egyptian tech landscape.',
    body: 'I specialize in Laravel and Filament, focusing on building secure, scalable architectures for complex business logic. I am also the creator of aiZee — a sovereign AI engineering control plane that enforces discipline on AI coding assistants and eliminates context drift. My unique dual-expertise in Internal Audit & System Integrity allows me to deliver "audit-ready" applications that ensure 100% data consistency and compliance.',
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
        title: 'aiZee',
        desc: 'Sovereign AI engineering control plane — version-controlled rules, tech-stack definitions, and agentic workflow governance for LLM-driven development.',
        metric: 'Open Source',
        icon: 'Code',
        image: '/assets/ai-os-logo.png',
        link: 'https://github.com/m3taz-ahmed/ai-globals',
        tags: ['AI', 'Governance', 'Python'],
      },
      {
        title: 'Internal Audit Digital Transformation',
        desc: 'Custom audit ecosystem for Petroleum Pipelines Company (PPC) that digitized compliance workflows and delivered 100% data consistency across audit cycles.',
        metric: 'Case Study',
        icon: 'ShieldCheck',
        image: '',
        link: 'https://github.com/m3taz-ahmed/case-study-internal-audit',
        tags: ['Laravel 13', 'Filament v5', 'RBAC'],
      },
      {
        title: 'Gobook',
        desc: 'Multi-tenant SaaS booking and reservation platform with integrated financial tracking, scheduling, and tenant-isolated customer management.',
        metric: 'Case Study',
        icon: 'Code',
        image: '',
        link: 'https://github.com/m3taz-ahmed/case-study-gobook',
        tags: ['Multi-tenancy', 'SaaS', 'Laravel'],
      },
      {
        title: 'Gentoura',
        desc: 'AI-assisted travel platform that generates personalized trip plans and provides real-time support for tourists, powered by LLM-driven recommendations.',
        metric: 'Live Product',
        icon: 'Code',
        image: '',
        link: 'https://gentoura.com',
        tags: ['AI/LLM', 'Travel', 'Laravel'],
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
          'Moataz digitized our entire audit workflow at PPC. The RBAC framework and automated quarterly reports cut weeks of manual reconciliation — 100% data consistency across departments.',
        author: 'Ahmed R.',
        role: 'Audit Operations Lead, Petroleum Pipelines Company',
      },
      {
        quote:
          'The multi-tenant architecture Moataz built for Gobook isolated tenant data flawlessly while keeping the admin dashboard intuitive for non-technical operators. Clean, scalable, audit-ready.',
        author: 'Sarah M.',
        role: 'Product Manager, SaaS Booking Platform',
      },
      {
        quote:
          'Gentoura needed AI-driven trip planning with real-time support. Moataz integrated LLM capabilities with version-controlled governance — the recommendations engine just works.',
        author: 'Omar K.',
        role: 'CTO, Travel Tech Startup',
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
