// ============================================================
// SIOBHAN PORTFOLIO — CONTENT CONFIG
// Edit this file to update any text on the site.
// No React knowledge needed — just change the values below.
// ============================================================

export const nav = {
  logo: 'Siobhan McAuley',
  links: ['About', 'Skills', 'Experience', 'Projects', 'Prototypes', 'AI Stack'],
  cta: 'Get In Touch',
}

export const hero = {
  eyebrow: 'Senior Product Manager · Boston, MA',
  firstName: 'Siobhan',
  lastName: 'McAuley',
  tagline: 'Product Manager obsessed with turning complex, multi-persona journeys into scalable experiences. 14 years in EdTech — onboarding, activation, IAM, and getting users to value, fast.',
  primaryBtn: { label: 'View Case Studies', href: '#projects' },
  secondaryBtn: { label: 'Download Resume', href: 'https://drive.google.com/file/d/YOUR_RESUME_ID/view' },
  stats: [
    { num: '14+', label: 'Years in Product' },
    { num: '19%', label: 'YoY Revenue Growth' },
    { num: '1.5M+', label: 'Users Onboarded' },
  ],
}

export const about = {
  label: 'About',
  heading: 'Product leader. Systems thinker.',
  bio: 'Product Manager with extensive experience leading SaaS initiatives in education technology across B2B and B2C markets. Proven record of driving adoption, engagement, and revenue growth through data-driven onboarding strategies, IAM innovation, and compliance leadership.',
  funFact: 'Siobhan grew up in Malahide, Ireland, where she discovered a love of horseback riding at ten — learning that the thrill of a long gallop along the strand comes from countless hours of practice and hard work.',
  pills: [
    'Onboarding & Activation',
    'IAM & Access Management',
    'AI/ML Product Strategy',
    'Cross-Functional Leadership',
    'A/B Testing & Experimentation',
    'Compliance (COPPA, FERPA, WCAG)',
    'Time-to-Value Optimization',
    'Product-Led Growth',
  ],
}

export const skills = {
  label: 'Skills',
  heading: 'What I bring',
  categories: [
    {
      name: 'Product Management',
      items: ['SaaS Product Management', 'Product-Led Growth', 'B2C & B2B Strategy', 'Cross-Functional Leadership'],
    },
    {
      name: 'Technical Expertise',
      items: ['Identity & Access Management', 'User Onboarding', 'Compliance & Data Privacy', 'Reporting & Analytics'],
    },
    {
      name: 'Domain Knowledge',
      items: ['Education Technology', 'HS & Higher Ed Platforms', 'COPPA & FERPA', 'LMS Integration'],
    },
    {
      name: 'Customer Focus',
      items: ['Customer-Centric Design', 'Accessibility (WCAG 2.1)', 'UX Optimization', 'Data-Driven Decision Making'],
    },
  ],
}

export const experience = {
  label: 'Experience',
  heading: 'Career Timeline',
  roles: [
    {
      dates: '2016 – 2025',
      title: 'Product Manager, Achieve Platform',
      org: 'Macmillan Learning · Boston',
      desc: 'Orchestrated end-to-end product strategy for onboarding, authentication, and IAM across B2C and B2B channels. Led segmentation of HS and HE IAM architectures for COPPA/FERPA compliance, implemented SSO/LMS integrations (LTI, SAML, OAuth), launched district-level analytics dashboards, and drove 19%+ YoY revenue growth.',
    },
    {
      dates: '2011 – 2016',
      title: 'Product Owner',
      org: 'Macmillan Learning · Boston',
      desc: 'Contributed to requirements gathering, competitive analysis, customer research, and feature prioritisation across Macmillan\'s digital learning portfolio. Built deep technical fluency across the product stack.',
    },
  ],
}

export const caseStudies = {
  label: 'Case Studies',
  heading: 'Selected Projects',
  projects: [
    {
      title: 'IAM Architecture Segmentation for HS/HE Markets',
      org: 'Macmillan Learning',
      summary: 'Spearheaded segmentation of high school and higher education IAM architectures, enabling COPPA/FERPA compliance while maintaining scalable, unified infrastructure for 1.5M+ users.',
      metrics: ['1.5M+ HS users, zero incidents', 'Zero compliance violations', 'Hundreds of HS districts enabled', 'Parallel architectures, unified UX'],
    },
    {
      title: 'Onboarding Optimization Initiative',
      org: 'Macmillan Learning',
      summary: 'Reduced first-session friction by double digits across multi-persona onboarding flows, driving 19%+ YoY revenue growth and expanding the learner base (+9%) through in-app guidance, progressive onboarding, and A/B testing.',
      metrics: ['+9% YoY onboarded learners', '18% HS growth', '19%+ YoY revenue growth', 'Double-digit first-session uplift'],
    },
    {
      title: 'High School Reporting & Analytics',
      org: 'Macmillan Learning',
      summary: 'Launched tiered district-level dashboards adopted by hundreds of school districts, delivering real-time instructional insights and compliance reporting via role-based access and scalable data pipelines.',
      metrics: ['Hundreds of districts adopted', 'Real-time data pipelines', 'Key competitive differentiator', 'FERPA-compliant reporting'],
    },
  ],
}

export const prototypes = {
  label: 'Prototypes',
  heading: 'Built with AI tools',
  sub: 'Rapid prototypes built with Bolt, Replit, and Lovable to validate product concepts and test experiences before committing to full development cycles.',
  items: [
    {
      title: 'Analytics Dashboard',
      tech: ['React', 'TypeScript', 'Replit'],
      desc: 'Interactive analytics platform for educational institutions with persona-based metrics, conversion funnels, and YoY growth tracking for Teachers, Students, and District Admins.',
      url: 'https://ed-t-ech-analytics--sioboston.replit.app/',
    },
    {
      title: 'Onboarding Flow Update',
      tech: ['React', 'TypeScript', 'Lovable'],
      desc: 'Replacing a confusing blank null-state with a clear empty state and strong CTA — turning a dead end into a guided entry point that drives course adoption.',
      url: 'https://nullify-course-launch.lovable.app',
    },
    {
      title: 'Joyce & Homer Companion',
      tech: ['React', 'TypeScript', 'Bolt'],
      desc: "Comparative literature platform presenting Joyce's Ulysses alongside Homer's Odyssey in a side-by-side interface, exploring thematic parallels across millennia.",
      url: 'https://james-joyce-companio-19aa.bolt.host',
    },
  ],
}

export const philosophy = {
  label: 'Product Philosophy',
  heading: 'How I think about product',
  cards: [
    { num: '01', title: 'The first minute sets the tone', desc: "Onboarding isn't a feature, it's a promise. If users don't find value in their first session, they rarely come back for a second." },
    { num: '02', title: 'Validate before you commit', desc: 'I prototype to think, not to ship. The goal is learning fast — not building fast. Discovery is never optional.' },
    { num: '03', title: 'Build for the platform, not the ticket', desc: 'One-off solutions create tomorrow\'s technical debt. Systems thinking means asking: "how does this scale to every user, every team, every edge case?"' },
    { num: '04', title: 'Trust is a product feature', desc: "Compliance isn't a legal checkbox — it's the foundation users stand on. COPPA, FERPA, WCAG: built in from the start, never bolted on at the end." },
    { num: '05', title: 'Data narrows the debate', desc: 'Opinions are starting points. I use metrics, funnels, and A/B tests to move from "I think" to "we know" — then ship with confidence.' },
    { num: '06', title: 'AI is a thinking partner', desc: "I use AI tools every day — to research faster, prototype cheaper, and find the insight buried in the noise. It's not a shortcut, it's a multiplier." },
  ],
}

export const aiStack = {
  label: 'AI Stack',
  heading: 'How I build with AI',
  sub: 'I actively use AI tools across research, prototyping, and workflow automation — not as a gimmick, but as a real accelerator for discovery and delivery.',
  tools: [
    { name: 'Claude', use: 'Research, writing & analysis' },
    { name: 'Claude Code', use: 'Agentic dev & prototyping' },
    { name: 'Bolt', use: 'Rapid product prototyping' },
    { name: 'Lovable', use: 'UI concept validation' },
    { name: 'Replit', use: 'Internal tools & scripts' },
    { name: 'NotebookLM', use: 'Product research & synthesis' },
  ],
}

export const education = {
  label: 'Education',
  heading: 'Background',
  items: [
    { institution: 'Dublin City University', degree: 'Bachelor of Arts, Psychology', location: 'Dublin, Ireland' },
    { institution: 'General Assembly', degree: 'Product Management Certificate', location: 'Boston, MA' },
    { institution: 'SMFA', degree: 'Metal Smithing, Jewelry & Typography', location: 'Boston, MA' },
  ],
}

export const workWithMe = {
  label: 'Work With Me',
  heading: 'Open to the right opportunity',
  cards: [
    {
      type: 'Full-Time',
      title: 'Senior / Staff PM',
      desc: 'Looking for roles where I can own complex, cross-functional roadmaps and build platform-level product thinking into the org.',
    },
    {
      type: 'Fractional',
      title: 'Fractional PM',
      desc: 'Available for short-to-medium engagements to help early-stage teams establish onboarding strategy and product foundations.',
    },
    {
      type: 'Advisory',
      title: 'Product Consulting',
      desc: 'Specific expertise in onboarding audits, IAM architecture, compliance frameworks (COPPA/FERPA), and activation strategy.',
    },
  ],
}

export const footer = {
  name: 'Siobhan McAuley',
  email: 'sio.boston@gmail.com',
  linkedin: 'https://www.linkedin.com/in/siobhan-mcauley-pm',
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/siobhan-mcauley-pm' },
    { label: 'Resume', href: 'https://drive.google.com/file/d/YOUR_RESUME_ID/view' },
    { label: 'Email', href: 'mailto:sio.boston@gmail.com' },
  ],
}
