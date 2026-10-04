/**
 * SOUNDARYA OS - PORTFOLIO CENTRAL DATA STORE
 * Strictly verified, authentic data for Soundarya P
 * Colors, projects, certificates, experience, skills, and identity.
 */

export const portfolioData = {
  profile: {
    name: "Soundarya P",
    salutation: "Hello, I'm",
    headline: "Computer Science Student & Aspiring Software Developer",
    domain: "Computational Intelligence & Software Development",
    tagline: "Turning ideas into intelligent solutions and code into real-world impact.",
    aboutText:
      "I am a Computer Science student passionate about software engineering, web application development, and computational intelligence. Dedicated to building reliable, end-to-end applications across modern technologies while continuously expanding algorithmic and machine learning foundations.",
    statusBadge: "Undergraduate • B.E. Computer Science & Engineering",
    academicFocus: "Core Data Structures, Algorithms, Software Engineering & Intelligent Systems"
  },

  focusAreas: [
    {
      id: "nlp",
      label: "NLP",
      name: "Natural Language Processing",
      description: "Text extraction, semantic summarization, tokenization, and linguistic intelligence pipelines."
    },
    {
      id: "ai-agents",
      label: "AI Agents",
      name: "Autonomous Systems",
      description: "Agentic decision architectures, intelligent heuristics, and autonomous workflows."
    },
    {
      id: "web-eng",
      label: "Web Engineering",
      name: "Modern Full-Stack",
      description: "Responsive React interfaces, REST microservices, component state design, and clean UX."
    },
    {
      id: "deep-learning",
      label: "Deep Learning",
      name: "Neural Computing",
      description: "Neural network architectures, computer vision matrices, and adaptive cryptographic synthesis."
    }
  ],

  internship: {
    role: "Web Development Intern",
    company: "Prodigy Infotech",
    duration: "1 Month (Verified)",
    type: "Industry Internship",
    description:
      "Hands-on web development internship focused on constructing responsive web interfaces, modern component styling, client-side scripting, and practical web features.",
    highlights: [
      "Developed responsive frontend user interfaces adhering to modern web standards",
      "Implemented modular client-side logic and interactive page elements",
      "Gained hands-on experience in practical software deliverable workflows and version control"
    ]
  },

  education: {
    degree: "Bachelor of Engineering (B.E.)",
    branch: "Computer Science and Engineering",
    status: "Undergraduate (In Progress)",
    institution: "Computer Science and Engineering Department",
    summary:
      "Pursuing an in-depth computer science curriculum focused on core data structures, algorithmic design, software architecture, and modern application systems.",
    coreFocusAreas: [
      {
        category: "Core Computing",
        items: "Data Structures & Algorithms, Object-Oriented Programming (Java / C++)"
      },
      {
        category: "Systems & Data",
        items: "Database Management Systems (SQL / NoSQL), Operating Systems, Computer Networks"
      },
      {
        category: "Modern Technologies",
        items: "Web Technologies, Software Engineering Practices, AI & Machine Learning Foundations"
      }
    ],
    highlights: [
      "Consistent academic engagement in core software engineering concepts",
      "Hands-on project work translating theoretical computer science into working applications",
      "Self-directed pursuit of software engineering best practices and emerging technologies"
    ]
  },

  careerJourney: [
    {
      step: "01",
      title: "FOUNDATIONS",
      badge: "Core Computing",
      desc: "Built programming fundamentals and logical problem solving through procedural and object-oriented paradigms in C, C++, and Java."
    },
    {
      step: "02",
      title: "WEB DEVELOPMENT",
      badge: "Frontend Engineering",
      desc: "Mastered modern frontend development with semantic HTML, CSS, JavaScript ES6+, and React, engineering responsive and accessible interfaces."
    },
    {
      step: "03",
      title: "APPLICATION DEVELOPMENT",
      badge: "Full-Stack Systems",
      desc: "Developed full-stack application workflows integrating relational (SQL) and document (MongoDB) databases with backend runtimes (Node.js, Spring Boot)."
    },
    {
      step: "04",
      title: "AI / ML / DL",
      badge: "Intelligent Systems",
      desc: "Explored machine learning pipelines, deep neural architectures, natural language processing, and computer vision models for automated intelligence."
    },
    {
      step: "05",
      title: "PROJECT BUILDING",
      badge: "Practical Engineering",
      desc: "Engineered 7 verified software projects spanning enterprise management, healthcare coordination, document intelligence, and cryptographic research."
    },
    {
      step: "06",
      title: "CONTINUOUS LEARNING",
      badge: "Growth & Certifications",
      desc: "Validating technical depth through standardized NPTEL Elite examinations, Infosys AI certification, and hands-on industry internship experience."
    }
  ]
};

// 7 Confirmed Projects (Strictly verified)
export const projectsData = [
  {
    id: "happykids-kindergarten",
    number: "01",
    title: "HappyKids Kindergarten Management System",
    category: "Full Stack Application",
    filterCategory: "Full Stack",
    featured: true,
    badge: "Featured Project",
    shortDesc: "A comprehensive kindergarten management platform designed to manage students, parents, teachers, and daily administrative activities.",
    overview: "HappyKids Kindergarten Management System is an institutional management application built for early childhood learning centers. It connects educators, parents, and administrative staff to monitor child attendance, track daily activities, and maintain direct communications.",
    problem: "Early childhood centers require rigorous attendance logging, daily check-in safety, and rapid parent notification, which manual paper sign-ins and phone calls cannot reliably deliver.",
    solution: "Developed an approachable, centralized management system featuring digital enrollment directories, daily attendance and meal logs, and instant parent announcement broadcasts.",
    technologies: ["React", "Node.js", "MongoDB", "JavaScript", "CSS"],
    features: [
      "Student Management: Child-related records, guardian contacts, and allergy alerts",
      "Parent Communications: Direct messaging and instant announcements",
      "Teacher Portal: Classroom schedules, meal logs, and daily timeline updates",
      "Digital Attendance: Fast check-in system with timestamps and notes"
    ]
  },
  {
    id: "tour-management-system",
    number: "02",
    title: "Tour Management System",
    category: "Management System",
    filterCategory: "Application",
    featured: false,
    badge: "Enterprise Java",
    shortDesc: "A centralized system designed to manage tours, trips, destinations, client bookings, and travel-related data efficiently.",
    overview: "Tour Management System is a database-driven platform built to streamline the scheduling of travel packages, manage client reservations, and coordinate destination itineraries, replacing fragmented manual records.",
    problem: "Travel agencies often face scheduling bottlenecks, double-bookings, and lost reservations caused by manual paper logs and disjointed spreadsheets.",
    solution: "Engineered a relational database application providing automated passenger booking, real-time trip scheduling, structured destination catalogs, and administrative record oversight.",
    technologies: ["Java", "SQL", "HTML", "CSS", "JavaScript"],
    features: [
      "Destination Catalog: Curated travel itineraries and tour packages",
      "Booking Engine: Automated reservation with seat tracking",
      "Passenger Records: Customer database and travel history logs",
      "Admin Controls: Update packages, manage pricing, and oversee bookings"
    ]
  },
  {
    id: "heal-hub",
    number: "03",
    title: "Heal Hub",
    category: "Web Application",
    filterCategory: "Web",
    featured: false,
    badge: "Healthcare",
    shortDesc: "A healthcare-focused digital portal providing consultation bookings, wellness resources, and department directories.",
    overview: "Heal Hub is an accessible healthcare web application designed to improve patient accessibility to medical wellness resources, symptom awareness guides, and structured doctor appointment consultations.",
    problem: "Patients frequently struggle with fragmented clinic phone lines, unclear symptom documentation, and delayed healthcare access during non-emergency situations.",
    solution: "Developed an intuitive digital healthcare portal featuring easy appointment scheduling, preliminary wellness guidance, and responsive consultation request forms.",
    technologies: ["React", "JavaScript", "Node.js", "CSS"],
    features: [
      "Appointment Scheduling: Streamlined consultation booking workflow",
      "Symptom Reference: Curated non-emergency wellness awareness guides",
      "Doctor Directory: Searchable list of specialties and clinical departments",
      "Secure Forms: Validated input mechanisms for patient inquiries"
    ]
  },
  {
    id: "cybro-lab",
    number: "04",
    title: "Cybro Lab",
    category: "Web Application",
    filterCategory: "Web",
    featured: false,
    badge: "Developer Showcase",
    shortDesc: "An interactive technology showcase demonstrating modern software development concepts, dynamic components, and responsive design.",
    overview: "Cybro Lab is an interactive developer showcase and web technology playground designed to demonstrate modern frontend architecture, interactive coding utilities, and responsive design patterns.",
    problem: "Standard tech portfolios often lack interactive demonstrations of UI engineering and dynamic component styling.",
    solution: "Constructed an interactive web environment showcasing modern software development concepts, code visualizations, and high-performance modules.",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    features: [
      "Interactive Modules: Hands-on tech tool showcases and dynamic preview panels",
      "Modern Web UI: Refined styling with clean typography and interactive states",
      "Component Architecture: Modular React components with zero unnecessary re-renders",
      "Micro-interactions: Smooth state transitions illustrating design paradigms"
    ]
  },
  {
    id: "campus-management-system",
    number: "05",
    title: "Campus Management System",
    category: "Full Stack Application",
    filterCategory: "Full Stack",
    featured: false,
    badge: "Academic ERP",
    shortDesc: "A centralized campus ERP platform built to manage academic activities, student records, courses, and administrative operations.",
    overview: "Campus Management System is an enterprise educational platform built to digitize collegiate administrative workflows, centralizing student records, faculty course allotments, and department announcements into a unified system.",
    problem: "Institutions struggle with administrative overhead when academic records, course registrations, and announcements are scattered across incompatible systems.",
    solution: "Designed and implemented a full-stack platform featuring role-based access control (Student, Faculty, Admin), centralized course management, and instant bulletin updates.",
    technologies: ["Java", "Spring Boot", "SQL", "HTML/CSS", "JavaScript"],
    features: [
      "Role-Based Access: Three-tier authorization for Students, Faculty, and Admins",
      "Course Registry: Course catalog, department allotment, and student enrollment",
      "Student Directory: Centralized database of active student academic logs",
      "Campus Bulletin: Digital notice board for institutional broadcasts"
    ]
  },
  {
    id: "pdf-nlp-ml-dl-app",
    number: "06",
    title: "PDF / NLP / ML / DL Application",
    category: "AI & NLP Application",
    filterCategory: "AI / ML",
    featured: false,
    badge: "NLP Intelligence",
    shortDesc: "An intelligent document application applying Natural Language Processing and Machine Learning to parse, summarize, and extract semantic insights from PDFs.",
    overview: "An AI-powered document intelligence tool engineered to process unstructured PDF documents, perform semantic text summarization, and extract key entities using machine learning and NLP pipelines.",
    problem: "Reviewing lengthy academic papers, contracts, and legal reports manually requires substantial time and often leads to missed critical clauses or overlooked insights.",
    solution: "Engineered an automated parsing and NLP pipeline that extracts raw text, performs preprocessing and tokenization, and synthesizes concise summaries and semantic keywords.",
    technologies: ["Python", "Machine Learning", "Deep Learning", "NLP", "Flask"],
    features: [
      "PDF Text Extraction: Automated parsing and normalization of unstructured text",
      "Semantic NLP Parsing: Entity recognition, keyword extraction, and vocabulary analysis",
      "ML Summarization: Machine learning engine for rapid insight digestion",
      "Web Inspection UI: Clean interface for document upload and analysis review"
    ]
  },
  {
    id: "visual-cryptography-deep-learning",
    number: "07",
    title: "Deep Learning Based Adaptive Extended Visual Cryptography for Secure Image Exchange",
    category: "Deep Learning & Security",
    filterCategory: "Deep Learning",
    featured: false,
    badge: "Research Project",
    shortDesc: "An advanced research project utilizing deep learning neural networks to adaptively generate secure, meaningful image shares for cryptographic image exchange.",
    overview: "An academic research project implementing adaptive Extended Visual Cryptography (EVC) augmented by Deep Learning. The system decomposes confidential secret images into meaningful carrier shares that prevent eavesdropping without computational overhead during decryption.",
    problem: "Traditional visual cryptography creates random noise-like shares that arouse suspicion, or suffers from severe contrast loss and pixel expansion upon image reconstruction.",
    solution: "Applied neural network feature optimization to adaptively generate natural-looking cover shares while preserving high reconstruction fidelity of the secret image.",
    technologies: ["Deep Learning", "Python", "Neural Networks", "Computer Vision", "Cryptography"],
    features: [
      "Adaptive Share Synthesis: Deep learning optimization for meaningful carrier shares",
      "Neural Feature Mapping: Layers minimizing reconstruction distortion",
      "Lossless Reconstruction: Mathematical share superposition allowing visual secret decoding",
      "Metric Verification: Rigorous PSNR and SSIM image quality benchmarking"
    ]
  }
];

// Project Filter Tabs
export const projectFilters = ["ALL", "FULL STACK", "WEB", "APPLICATION", "AI / ML", "DEEP LEARNING"];

// 5 Confirmed Certifications
export const certificatesData = [
  {
    id: "nptel-tech-english",
    title: "Technical English for Engineers",
    issuer: "NPTEL",
    result: "Elite + Silver",
    resultType: "silver",
    badgeLabel: "Elite + Silver Medal",
    statusNote: "Verified NPTEL Examination",
    description: "Rigorous certification covering professional engineering communication, technical documentation, workplace presentations, and collaborative communication standards.",
    topics: [
      "Technical Writing & Reports",
      "Workplace Communication",
      "Engineering Presentations",
      "Professional Interaction"
    ],
    credentialStatus: "Official NPTEL certificate issued with Elite + Silver medal distinction. Document verified."
  },
  {
    id: "nptel-iot",
    title: "Introduction to Internet of Things",
    issuer: "NPTEL",
    result: "Elite + Silver",
    resultType: "silver",
    badgeLabel: "Elite + Silver Medal",
    statusNote: "Verified NPTEL Examination",
    description: "In-depth course on IoT architecture, sensing mechanisms, actuator control, network protocols, embedded hardware interfaces, and cloud-connected IoT platforms.",
    topics: [
      "IoT Architecture & Protocols",
      "Sensors & Actuators",
      "Embedded Systems Integration",
      "MQTT, HTTP & IoT Cloud"
    ],
    credentialStatus: "Official NPTEL certificate issued with Elite + Silver medal distinction. Document verified."
  },
  {
    id: "nptel-iiot-4",
    title: "Introduction to Industry 4.0 and Industrial Internet of Things",
    issuer: "NPTEL",
    result: "Elite",
    resultType: "elite",
    badgeLabel: "Elite Honor",
    statusNote: "Verified NPTEL Examination",
    description: "Comprehensive study of cyber-physical systems, smart manufacturing frameworks, industrial IoT protocols, predictive analytics, and automated digital factories.",
    topics: [
      "Cyber-Physical Systems",
      "Smart Factory Architecture",
      "IIoT Communication Protocols",
      "Predictive Maintenance & Analytics"
    ],
    credentialStatus: "Official NPTEL certificate issued with Elite distinction. Document verified."
  },
  {
    id: "infosys-intro-ai",
    title: "Introduction to AI",
    issuer: "Infosys Springboard",
    result: "Course Completion",
    resultType: "completion",
    badgeLabel: "Course Completion",
    statusNote: "Verified Course",
    description: "Foundational program exploring core artificial intelligence concepts, problem-solving through search heuristics, knowledge representation, and machine learning principles.",
    topics: [
      "AI Problem Formulations",
      "Search Algorithms & Heuristics",
      "Knowledge Representation",
      "Machine Learning Fundamentals"
    ],
    credentialStatus: "Verified certificate of course completion from Infosys Springboard. Document verified."
  },
  {
    id: "prodigy-web-dev",
    title: "Web Development Internship",
    issuer: "Prodigy",
    result: "Internship Certificate",
    resultType: "internship",
    badgeLabel: "Internship Certificate",
    statusNote: "Practical Experience",
    description: "Hands-on web development internship focused on constructing responsive web interfaces, modern component styling, client-side scripting, and practical web features.",
    topics: [
      "Responsive Web Design",
      "Modern JavaScript / DOM",
      "Component Architecture",
      "Frontend Engineering Best Practices"
    ],
    credentialStatus: "Verified internship certificate awarded upon successful completion of practical web engineering tasks. Document verified."
  }
];

// Confirmed Skills Categories (Strictly confirmed technologies)
export const skillCategories = [
  {
    id: "programming",
    title: "PROGRAMMING LANGUAGES",
    filterKey: "Programming",
    skills: [
      { name: "C", icon: "Code2", category: "Programming" },
      { name: "C++", icon: "Code2", category: "Programming" },
      { name: "Java", icon: "Coffee", category: "Programming" },
      { name: "JavaScript", icon: "Terminal", category: "Programming" },
      { name: "Python", icon: "FileCode", category: "Programming" }
    ]
  },
  {
    id: "webDevelopment",
    title: "WEB DEVELOPMENT",
    filterKey: "Web",
    skills: [
      { name: "HTML", icon: "FileCode", category: "Web" },
      { name: "CSS", icon: "Palette", category: "Web" },
      { name: "JavaScript", icon: "Terminal", category: "Web" },
      { name: "React", icon: "Atom", category: "Web" },
      { name: "Node.js", icon: "Server", category: "Web" }
    ]
  },
  {
    id: "databaseBackend",
    title: "BACKEND & DATABASES",
    filterKey: "Backend",
    skills: [
      { name: "SQL", icon: "Database", category: "Backend" },
      { name: "MySQL", icon: "Database", category: "Backend" },
      { name: "MongoDB", icon: "Database", category: "Backend" },
      { name: "Spring Boot", icon: "Server", category: "Backend" }
    ]
  },
  {
    id: "computationalIntelligence",
    title: "AI / ML / DEEP LEARNING",
    filterKey: "AI / ML",
    skills: [
      { name: "Natural Language Processing (NLP)", icon: "Brain", category: "AI / ML" },
      { name: "Machine Learning", icon: "Cpu", category: "AI / ML" },
      { name: "Deep Learning", icon: "Layers", category: "AI / ML" },
      { name: "Computer Vision", icon: "Eye", category: "AI / ML" },
      { name: "AI Agents", icon: "Bot", category: "AI / ML" }
    ]
  },
  {
    id: "toolsDevOps",
    title: "TOOLS & DEVOPS",
    filterKey: "Tools",
    skills: [
      { name: "Git", icon: "GitBranch", category: "Tools" },
      { name: "GitHub", icon: "GitPullRequest", category: "Tools" },
      { name: "VS Code", icon: "Terminal", category: "Tools" },
      { name: "Docker", icon: "Container", category: "Tools" },
      { name: "Jenkins", icon: "Cpu", category: "Tools" }
    ]
  }
];

export const skillFilterKeys = [
  "All",
  "Programming",
  "Web",
  "Backend",
  "AI / ML",
  "Tools"
];

// Contact Channels & Information
export const contactData = {
  heading: "Let's Connect",
  subtitle: "Have an engineering role, project inquiry, or technical collaboration in mind?",
  statusNotice: "Available for entry-level software engineering roles, internships, and technical development collaborations.",
  email: "soundaryagng@gmail.com",
  github: "https://github.com/soundaryagng",
  leetcode: "https://leetcode.com/u/Soundarya2006/",
  skillrack: "https://www.skillrack.com/faces/resume.xhtml?id=493290&key=71eab5c62610985ca378439e629d61e74d67ff3f",
  linkedin: "https://linkedin.com",
  location: "India"
};

