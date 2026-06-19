export const site = {
  name: "Tiqni",
  domain: "https://tiqni.com",
  tagline: "Software built with certainty.",
  description:
    "Tiqni builds reliable, scalable software for startups, SMEs, and enterprises. Senior engineers, modern practices, long-term partnership.",
  email: "hello@tiqni.com",
  phone: "+61451034080",
  linkedin: "https://www.linkedin.com/company/tiqni",
};

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Technologies", href: "/technologies" },
  { label: "Process", href: "/process" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
];

export type Project = {
  name: string;
  category: string;
  description: string;
  stack: string[];
  links?: { label: string; href: string }[];
  stores?: { appStore?: string; playStore?: string };
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "Sanad Quran",
    category: "Education",
    description:
      "Educational app delivering a focused Quran learning experience, clean reading flows, audio playback, and a structured curriculum architecture built for scale.",
    stack: ["Flutter", "Bloc", "Clean Architecture", "Firebase"],
    stores: {
      appStore: "https://apps.apple.com/jo/app/sanad-quran/id6740745205",
      playStore:
        "https://play.google.com/store/apps/details?id=com.sanadquran.sanad",
    },
  },
  {
    name: "Fanoos",
    category: "Delivery",
    description:
      "Multi-role delivery platform with live driver tracking, push notifications, deep linking into specific orders, and Twilio-powered communications.",
    stack: ["Flutter", "Bloc", "WebSockets", "Twilio", "Live Location"],
    stores: {
      appStore: "https://apps.apple.com/jo/app/fanoos-driver/id6648777389",
      playStore:
        "https://play.google.com/store/apps/details?id=com.fanoos.fanoosapp",
    },
  },
  {
    name: "Blinx",
    category: "Media",
    description:
      "Media-rich application with smooth video playback, chat interfaces, and uploads for images, documents, and video, optimized for performant playback at scale.",
    stack: ["Flutter", "Bloc", "Video", "Chat", "Media Uploads"],
    stores: {
      appStore:
        "https://apps.apple.com/jo/app/blinx-more-story-less-noise/id6444521208",
      playStore: "https://play.google.com/store/apps/details?id=com.blinx.app",
    },
    featured: true,
  },
  {
    name: "Olive",
    category: "HR System",
    description:
      "Internal HR platform handling employee workflows: attendance, requests, approvals, and notifications. Modular, role-based, and built to evolve.",
    stack: ["Flutter", "REST APIs", "Dio", "Firebase Auth"],
    stores: {
      appStore: "https://apps.apple.com/jo/app/olive-hr/id6752605410",
      playStore:
        "https://play.google.com/store/apps/details?id=com.optimumpartners.olive",
    },
    featured: true,
  },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  bullets: string[];
  comingSoon?: boolean;
};

export const services: Service[] = [
  {
    slug: "mobile-development",
    title: "Mobile Development",
    short:
      "Native-quality iOS & Android apps, built efficiently with Flutter from one codebase.",
    bullets: [
      "Flutter development",
      "iOS applications",
      "Android applications",
      "Cross-platform apps",
    ],
  },
  {
    slug: "web-development",
    title: "Web Development",
    short: "Fast, modern web products that work on every screen.",
    bullets: [
      "Business websites",
      "Admin dashboards",
      "SaaS platforms",
      "Progressive web apps",
    ],
  },
  {
    slug: "backend-development",
    title: "Backend Development",
    short: "The reliable engine behind your product.",
    bullets: [
      "REST APIs",
      "Authentication systems",
      "Database design",
      "Server-side applications",
    ],
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    short: "Ship safely and scale with confidence.",
    bullets: ["Cloud deployment", "CI/CD", "Infrastructure", "Monitoring"],
  },
  {
    slug: "ui-ux",
    title: "UI/UX Implementation",
    short: "Interfaces that are clean, responsive, and consistent.",
    bullets: ["Responsive interfaces", "Design systems", "User experience"],
  },
  {
    slug: "technical-consulting",
    title: "Technical Consulting",
    short: "Senior expertise when you need a second opinion or a strategy.",
    bullets: [
      "Architecture reviews",
      "Performance optimization",
      "Code audits",
      "Technology strategy",
    ],
  },
  {
    slug: "maintenance-support",
    title: "Maintenance & Support",
    short:
      "Keep your software secure, current, and reliable long after launch.",
    bullets: [
      "Proactive monitoring",
      "Updates & patches",
      "Bug fixes",
      "Ongoing improvements",
    ],
  },
  {
    slug: "ai-solutions",
    title: "AI Solutions",
    short: "Practical AI features added thoughtfully as your product matures.",
    bullets: ["Smart search", "Automation", "Assistants", "Data insights"],
    comingSoon: true,
  },
];

export const whyTiqni = [
  {
    title: "Senior engineers",
    body: "Your code is written by people who've shipped production software for years.",
  },
  {
    title: "Modern technologies",
    body: "Current, well-supported tools, no legacy lock-in.",
  },
  {
    title: "Transparent communication",
    body: "Clear updates, honest timelines, no surprises.",
  },
  {
    title: "Scalable architecture",
    body: "Designed to handle growth from day one.",
  },
  { title: "Long-term support", body: "We stay after launch." },
  { title: "High code quality", body: "Readable, tested, maintainable code." },
  { title: "Agile delivery", body: "Ship in increments, adjust as you learn." },
  {
    title: "Business-focused",
    body: "We build for outcomes, not for the demo.",
  },
];

export const processSteps = [
  {
    n: "01",
    title: "Discovery",
    body: "We learn your goals, users, and constraints.",
  },
  {
    n: "02",
    title: "Planning",
    body: "Scope, architecture, timeline, and estimate, in writing.",
  },
  {
    n: "03",
    title: "UI/UX",
    body: "Designs and flows you approve before we build.",
  },
  {
    n: "04",
    title: "Development",
    body: "Built in increments you can see and test.",
  },
  { n: "05", title: "Testing", body: "Quality checks before anything ships." },
  {
    n: "06",
    title: "Deployment",
    body: "Released safely, with monitoring in place.",
  },
  { n: "07", title: "Support", body: "We maintain and improve what we build." },
];

export const techStack = [
  {
    group: "Frontend",
    items: ["Flutter", "React", "Next.js", "TypeScript", "JavaScript"],
  },
  {
    group: "Backend",
    items: ["Node.js", "NestJS", "Laravel", "ASP.NET", "Firebase"],
  },
  {
    group: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Firestore"],
  },
  { group: "Cloud", items: ["AWS", "Azure", "Google Cloud", "Docker"] },
  { group: "Tools", items: ["GitHub", "GitLab", "Figma", "Jira", "Postman"] },
];

export const industries = [
  "Healthcare",
  "Logistics",
  "Education",
  "Finance",
  "E-commerce",
  "Hospitality",
  "Human Resources",
  "Government",
  "Construction",
  "Real Estate",
];

export const values = [
  { title: "Trust", body: "We do what we say, and we say what's true." },
  { title: "Quality", body: "Maintainable, tested code is non-negotiable." },
  { title: "Innovation", body: "We use modern tools and keep learning." },
  { title: "Transparency", body: "Clear scope, clear status, clear pricing." },
  {
    title: "Long-term partnerships",
    body: "We measure success in years, not sprints.",
  },
  { title: "Continuous improvement", body: "Every project makes us better." },
  { title: "Customer success", body: "Your outcome is the point." },
];

export type Founder = {
  name: string;
  role: string;
  initials: string;
  bio: string;
  skills: string[];
  photo?: string;
  linkedin?: string;
};

export const founders: Founder[] = [
  {
    name: "Hazem Alrfati",
    role: "Co-Founder & Chief Technology Officer (CTO)",
    initials: "HA",
    photo: "/founders/hazem.jpg",
    bio: "Hazem brings deep experience designing and building scalable software across mobile, web, and backend. He leads all technical decisions at Tiqni, making sure every solution is secure, maintainable, scalable, and built for the long term.",
    skills: [
      "Flutter",
      "Cross-platform mobile",
      "Web apps",
      "Backend & REST APIs",
      "Software architecture",
      "Cloud integration",
      "Performance",
      "Technical leadership",
    ],
  },
  {
    name: "Hamzah Aldweik",
    role: "Co-Founder & Client Relations Director",
    initials: "HD",
    linkedin: "https://www.linkedin.com/in/hamzah-aldweik-a2b363206/",
    bio: "Hamzah leads business development and client communication. He runs discovery, gathers requirements, prepares proposals, and manages accounts, the bridge between you and the engineering team, keeping every project aligned with your business goals.",
    skills: [
      "Business development",
      "Client communication",
      "Discovery & requirements",
      "Proposals",
      "Project planning",
      "Account management",
      "Customer success",
    ],
  },
];

export const homeFaq = [
  {
    q: "What does Tiqni do?",
    a: "We design, build, and scale custom software, mobile, web, backend, and cloud.",
  },
  {
    q: "Who do you work with?",
    a: "Startups building MVPs, SMEs, and enterprises modernizing systems, in Australia and internationally.",
  },
  {
    q: "Can I see past projects?",
    a: "Most of our prior work was built for previous employers under confidentiality. We can't show it, but we can walk you through our experience and approach.",
  },
  {
    q: "How much will my project cost?",
    a: "It depends on scope. After a free consultation we provide a written estimate and timeline.",
  },
  {
    q: "Do you support the software after launch?",
    a: "Yes, long-term maintenance and support is core to how we work.",
  },
];
