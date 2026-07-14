import type { Translation } from './en';

const ar: Translation = {
  seo: {
    title: 'معتز أحمد | مهندس أنظمة رئيسي وخبير الذكاء الاصطناعي السيادي',
    description:
      'الموقع الشخصي لمعتز أحمد، مهندس برمجيات مخضرم بخبرة تزيد عن 15 عامًا. خبير في Laravel 13، Filament v5، هندسة الذكاء الاصطناعي السيادي، وتصميم الأنظمة الجاهزة للتدقيق.',
    author: 'معتز أحمد',
    url: 'https://m3taz-ahmed.github.io',
    image: '/assets/moataz-ahmed-pic.jpg',
  },
  nav: {
    aiOS: 'نظام AI',
    about: 'نبذة',
    journey: 'المسيرة',
    projects: 'المشاريع',
    stack: 'التقنيات',
    education: 'التعليم',
    contact: 'تواصل',
    cta: 'لنبني معًا',
    openMenu: 'فتح القائمة',
    closeMenu: 'إغلاق القائمة',
  },
  hero: {
    title: [
      { text: 'أصمم أنظمة ', gradient: false },
      { text: 'جاهزة للتدقيق', gradient: true },
      { text: ' قابلة للتطوير', gradient: false },
    ],
    nameTag: 'مهندس_أنظمة_رئيسي',
    name: 'معتز أحمد',
    subtitle: 'مهندس أول ',
    typewriter: ['مهندس أنظمة', 'خبير Laravel 13', 'مصمم جاهز للتدقيق', 'منسق Backend'],
    ctaPrimary: 'اكتشف أعمالي',
    ctaSecondary: 'السيرة الذاتية',
  },
  howIWork: {
    title: { prefix: 'كيف ', highlight: 'أعمل' },
    steps: [
      {
        icon: 'Search',
        title: 'الاكتشاف',
        desc: 'تحليل عميق للمنطق التجاري ومتطلبات التدقيق قبل كتابة أي سطر كود.',
      },
      {
        icon: 'Compass',
        title: 'التصميم المعماري',
        desc: 'تصميم مخططات قواعد بيانات قابلة للتطوير ومنظمة، وهياكل خلفية SOLID.',
      },
      {
        icon: 'FlaskConical',
        title: 'TDD والتطوير',
        desc: 'تنفيذ الميزات باستخدام التطوير الموجه بالاختبارات لضمان عدم وجود تراجعات.',
      },
      {
        icon: 'ShieldCheck',
        title: 'جاهز للتدقيق',
        desc: 'التحقق النهائي من سلامة النظام لضمان 100% اتساق البيانات والامتثال.',
      },
    ],
  },
  sovereignAI: {
    title: { prefix: 'هندسة الذكاء الاصطناعي ', highlight: 'السيادي' },
    label: 'ذكاء_محكوم_بإدارة_الإصدارات',
    version: 'AI Global OS v4.21.0',
    headline: 'تحويل نماذج اللغة إلى مهندسين معماريين رئيسيين للمؤسسات.',
    description:
      'محرك معماري سيادي بدون تنازلات. معظم الفرق تستخدم الذكاء الاصطناعي كمطور مبتدئ سريع يُدخل الديون التقنية والانحراف في السياق بصمت. يحمّل هذا النظام قواعد مشددة ومحكومة بإدارة الإصدارات من مخزن مركزي قبل التنفيذ، مما يضمن توافق كل سطر مُنتج مع مبادئ SOLID، معايير OWASP، وأحدث الإطارات.',
    tags: [
      { label: 'عدم انحراف السياق', info: 'قفل دائم لقواعد نماذج اللغة', level: 'expert' },
      { label: 'Next.js 15', info: 'معيار أحدث App Router', level: 'expert' },
      { label: 'Laravel 13', info: 'أنماط الواجهة الخلفية للمؤسسات', level: 'expert' },
      { label: 'PostgreSQL 17', info: 'معرفات UUIDv7 ومخططات عالية التوسع', level: 'advanced' },
      { label: 'الشفاء الذاتي', info: 'التحقق الآلي من السلامة', level: 'advanced' },
      { label: '+المزيد', info: 'Qdrant RAG، Sliding Window، طوابير Redis', level: '' },
    ],
    cta: 'استكشف المحرك السيادي',
  },
  about: {
    title: { prefix: 'الملف الشخصي لـ ', highlight: 'مهندس أول' },
    intro:
      'مهندس برمجيات مخضرم بخلفية تقنية تمتد لأكثر من 15 عامًا في المشهد التقني المصري.',
    body: 'أتخصص في Laravel 13 و Filament v5، مع التركيز على بناء هياكل آمنة وقابلة للتطوير للمنطق التجاري المعقد. بالإضافة إلى ذلك، أصمم أنظمة تشغيل ذكاء اصطناعي سيادية تُنظم نماذج اللغة وتزيل انحراف السياق. تمكن خبرتي المزدوجة في التدقيق الداخلي وسلامة الأنظمة من تسليم تطبيقات "جاهزة للتدقيق" تضمن 100% اتساق البيانات والامتثال.',
    stats: [
      { value: 15, suffix: '', label: 'عامًا من الإتقان' },
      { value: 28000, suffix: '', label: 'حجز تم التعامل معه' },
      { value: 100, suffix: '%', label: 'اتساق البيانات' },
      { value: 99.9, suffix: '%', label: 'وقت تشغيل النظام' },
    ],
    resume: 'تحميل السيرة الذاتية الكاملة',
  },
  experience: {
    title: { prefix: 'المسيرة ', highlight: 'المهنية' },
    items: [
      {
        role: 'مدير إدارة التدقيق الداخلي',
        company: 'شركة خطوط أنابيب البترول (PPC)',
        date: '2016 - حتى الآن',
        points: [
          'التحول الرقمي للتدقيق: صممت نظام تدقيق مخصصًا لتحويل سير العمل اليدوي إلى رقمي، مما يضمن 100% اتساق البيانات للامتثال المؤسسي.',
          'الصلاحيات المتقدمة: صممت إطار RBAC متطورًا لإدارة أدوار المدققين والموافقات متعددة المستويات للمديرين.',
          'محرك التقارير الآلية: طورت نظامًا ديناميكيًا لتوليد ملخصات التدقيق الفصلية والتقارير التنظيمية آلياً.',
        ],
      },
      {
        role: 'مطور Back-End',
        company: '360Codes',
        date: '2016 - حتى الآن (جزئي)',
        points: [
          'قيادة تطوير هياكل الواجهة الخلفية القابلة للتطوير باستخدام Laravel.',
          'بناء وصيانة واجهات برمجة تطبيقات عالية الأداء ودمج لوحات تحكم إدارية متقدمة باستخدام Filament.',
        ],
      },
      {
        role: 'مطور برمجيات مستقل',
        company: 'عمل حر',
        date: '2009 - 2016',
        points: [
          'تصميم وصيانة تطبيقات ويب متنوعة باستخدام PHP و MySQL.',
          'التركيز على بناء حلول CMS مخصصة وتحسين أداء قواعد البيانات للشركات الصغيرة.',
        ],
      },
      {
        role: 'مطور ويب',
        company: 'ممفيس تورز مصر',
        date: 'حتى سبتمبر 2009',
        points: [
          'صيانة وتحسين منصات السياحة القديمة. تحسين أداء الخادم وتجربة المستخدم خلال فترات الذروة الموسمية عالية الحركة.',
        ],
      },
    ],
  },
  projects: {
    title: { prefix: 'دراسات حالة ', highlight: 'معمقة' },
    explore: 'استكشف',
    items: [
      {
        title: 'منصة SkyBridge للتذاكر',
        desc: 'هندسة نظام حركة مرور عالية يعمل بنسبة 99.9% وقت تشغيل في ساعات الذروة.',
        metric: '+28 ألف حجز',
        icon: 'Ticket',
        image: '/assets/skybridge.png',
        link: 'https://facilitiesservices.sa/welcome',
        tags: ['Laravel', 'MySQL', 'Real-time'],
      },
      {
        title: 'لوحة Raunautica البحرية',
        desc: 'تحويل رصاف المارينا التقليدي إلى سير عمل رقمي مؤتمت بالكامل.',
        metric: 'أتمتة',
        icon: 'Anchor',
        image: '/assets/raunautica.png',
        link: 'https://raunautica.com',
        tags: ['Filament PHP', 'Redis', 'Eloquent'],
      },
      {
        title: 'دليل Business Belarabi',
        desc: 'بناء محرك استبيان عالي المرونة مع تقارير آلية.',
        metric: 'Laravel 13',
        icon: 'ChartBar',
        image: '/assets/businessbelarabi.png',
        link: 'https://businessbelarabi.com',
        tags: ['Filament v5', 'Reporting', 'B2B'],
      },
      {
        title: 'بوابة IshraqMed الصحية',
        desc: 'هندسة الإشعارات ونظام حجز المواعيد في الوقت الفعلي.',
        metric: '+35% حجوزات',
        icon: 'Smartphone',
        image: '/assets/ishraqmed.png',
        link: 'https://ishraqmed.net/ar',
        tags: ['GraphQL', 'Node.js', 'Real-time'],
      },
    ],
  },
  skills: {
    title: { prefix: 'المبدأ ', highlight: 'التقني' },
    categories: [
      {
        title: 'إتقان الواجهة الخلفية',
        tags: [
          { label: 'PHP 8.5', info: '15+ عامًا في تطوير المنطق الأساسي', level: 'expert' },
          { label: 'Laravel 13', info: 'خبرة معمارية عميقة', level: 'expert' },
          { label: 'Node.js 24', info: 'الإدارة في الوقت الفعلي', level: 'advanced' },
          { label: 'GraphQL', info: 'تصميم واجهات API المعقدة', level: 'advanced' },
          { label: 'RESTful APIs', info: 'عدم الحالة وقابلية التوسع', level: 'expert' },
        ],
      },
      {
        title: 'الإدارة و تجربة المستخدم',
        tags: [
          { label: 'Filament v5', info: 'مستوى مطور رئيسي', level: 'expert' },
          { label: 'Livewire', info: 'بناء واجهات تفاعلية', level: 'expert' },
          { label: 'Alpine.js', info: 'تفاعلات جانب العميل الصغيرة', level: 'advanced' },
          { label: 'Tailwind v4', info: 'تصميم حديث قائم على الأدوات', level: 'expert' },
        ],
      },
      {
        title: 'البيانات والأنظمة',
        tags: [
          { label: 'MySQL 9.7', info: 'مخططات قواعد بيانات منظمة وجاهزة للتدقيق', level: 'expert' },
          { label: 'Redis', info: 'التخزين المؤقت والطوابير عالية السرعة', level: 'advanced' },
          { label: 'SOLID Principles', info: 'تصميم أساسي قوي', level: 'expert' },
          { label: 'RBAC', info: 'تراخيص معقدة', level: 'expert' },
          { label: 'PostgreSQL 17', info: 'معرفات UUIDv7 ومخططات عالية التوسع', level: 'advanced' },
        ],
      },
    ],
  },
  education: {
    title: { prefix: 'التعليم و ', highlight: 'النمو' },
    items: [
      {
        title: 'بكالوريوس تجارة',
        place: 'جامعة عين شمس',
        desc: 'تأسيس في إدارة الأعمال والإدارة — يوفر منظورًا فريدًا لبناء أنظمة مؤسسية جاهزة للتدقيق.',
        icon: 'GraduationCap',
      },
      {
        title: 'إتقان مهني',
        place: 'تعلم ذاتي منذ 2006',
        desc: 'ما يقرب من عقدين من الخبرة المعمارية العملية. إتقان على مستوى الخبراء في PHP و Laravel والنظم البيئية الحديثة للويب من خلال التنفيذ المستمر في العالم الحقيقي.',
        icon: 'Rocket',
      },
    ],
  },
  testimonials: {
    title: { prefix: 'ما يقوله ', highlight: 'الناس' },
    goTo: 'انتقل إلى شهادة',
    items: [
      {
        quote:
          'لم يكتفِ معتز ببناء نظامنا، بل فهم عملنا أولاً. وحدة التدقيق التي صممها وفرت علينا أسابيع من العمل اليدوي كل ربع سنة.',
        author: 'أحمد ر.',
        role: 'مدير العمليات',
      },
      {
        quote:
          'كنّا نحتاج شخصًا يستطيع التعامل مع تعقيد الواجهة الخلفية دون إشراف دائم. قدّم معتز هندسة نظيفة وكانت لوحة التحكم بالضبط ما نحتاج.',
        author: 'سارة م.',
        role: 'مديرة المنتج',
      },
      {
        quote:
          'ما يميز معتز هو اهتمامه بسلامة البيانات. اكتشف حالات حافة في مسار الحجز لم يلاحظها أحد. مهندس محترف.',
        author: 'عمر ك.',
        role: 'CTO، شركة ناشئة تقنية',
      },
    ],
  },
  contact: {
    title: { prefix: 'ابدأ خطًا ', highlight: 'مباشرًا' },
    subtitle: 'لنبني أنظمة تدوم.',
    info: {
      email: 'm3taz.ahmed@gmail.com',
      phone: '+201001495645',
      github: 'https://github.com/m3taz-ahmed',
      linkedin: 'https://linkedin.com/in/m3taz-ahmed/',
      whatsapp: 'https://wa.me/201001495645',
    },
    form: {
      title: 'إرسال رسالة',
      name: 'الاسم الكامل',
      email: 'عنوان البريد الإلكتروني',
      message: 'تفاصيل المشروع أو التحدي التقني...',
      submit: 'إرسال إلى معتز',
      sending: 'جار الإرسال...',
      success: 'تم إنشاء الاتصال. جار الإرسال...',
      error: 'فشل الإرسال. يرجى المحاولة مرة أخرى.',
    },
  },
  footer: {
    copyright:
      '© 2026 معتز أحمد. بكالوريوس تجارة، جامعة عين شمس. العربية لغة أم والإنجليزية لغة مهنية.',
  },
  notFound: {
    title: 'الصفحة غير موجودة',
    message: 'الصفحة التي تبحث عنها غير موجودة.',
    back: 'العودة للرئيسية',
  },
};

export default ar;
