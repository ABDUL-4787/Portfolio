export interface Project {
  id: string;
  title: string;
  description: string;
  live_url?: string;
  github_url?: string;
  technologies: string[];
  key_features: string[];
  image_url: string;
  image_urls?: string[];
}

export interface Certificate {
  id: string | number;
  title: string;
  image_url: string;
}

export interface TechStack {
  id: string | number;
  name: string;
  logo_url: string;
}

export interface Experience {
  id: string | number;
  role: string;
  company: string;
  date: string;
  bullets: string[];
}

export const personalInfo = {
  fullName: "Shaik Abdullah",
  logoText: "abd.dev",
  domain: "www.abdullah.dev",
  status: "✦ Open to Internships & Projects",
  roles: ["Machine Learning Intern", "AI & ML Student", "Python Developer", "ServiceNow CSA & CAD Certified"],
  skills: ["Python", "Machine Learning", "Deep Learning", "Computer Vision", "Django", "Azure Cloud"],
  bio: "Pre-Final Year B.E. (AI & ML) student at DSCE, Bengaluru with a 9.3 GPA. Hands-on experience in building and evaluating supervised ML models, computer vision pipelines, and deploying edge AI networks. Passionate about applying enterprise AI and advanced analytics to solve complex business challenges.",
  heroDescription: "Machine Learning Intern specializing in building and optimizing AI models, computer vision pipelines, and enterprise-grade software solutions.",
  quote: "“Applying enterprise AI and advanced analytics to solve complex real-world challenges.”",
  cvLink: "https://drive.google.com/file/d/1eST6WJDG1k8Y53X-DQtMj8XP6WwataOg/view?usp=sharing", // You can replace this link
  avatarUrl: "/assets/profilepic1.png", // Keep current profile placeholder
  socials: [
    {
      title: "LinkedIn",
      user: "shaikabdul4787",
      link: "https://linkedin.com/in/shaikabdul4787",
      platform: "linkedin"
    },
    {
      title: "Github",
      user: "ABDUL-4787",
      link: "https://github.com/ABDUL-4787",
      platform: "github"
    },
    {
      title: "Email",
      user: "shaikabd04@gmail.com",
      link: "mailto:shaikabd04@gmail.com",
      platform: "email"
    }
  ]
};

export const fallbackProjects: Project[] = [
  {
    id: "motivex",
    title: "MotiveX - Full-Stack Web App",
    description: "Designed and deployed a scalable Django web application featuring a public REST API endpoint and automated weekly email delivery. The application provides high reliability and is optimized for cloud deployment.",
    live_url: "https://github.com/ABDUL-4787", // Add live URL if any
    github_url: "https://github.com/ABDUL-4787",
    technologies: ["Python", "Django", "REST API", "HTML/CSS", "Git"],
    key_features: [
      "Built a robust and scalable web application hosting public REST API endpoints",
      "Integrated automated weekly email scheduler for notifications and updates",
      "Deployed and hosted efficiently on PythonAnywhere server environment"
    ],
    image_url: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&auto=format&fit=crop&q=80",
    image_urls: [
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "driver-drowsiness-detection",
    title: "Driver Drowsiness Detection System",
    description: "Built a real-time computer vision pipeline integrating deep learning models (YOLO) to monitor driver alertness, track eye blink rate and yawn frequency, and trigger alert escalations to improve road safety outcomes.",
    live_url: "",
    github_url: "https://github.com/ABDUL-4787",
    technologies: ["Python", "OpenCV", "MediaPipe", "YOLO", "Deep Learning"],
    key_features: [
      "Developed a real-time face and eye monitoring pipeline using OpenCV and MediaPipe",
      "Integrated multi-stage alert escalation system based on eye closure duration and yawn rate",
      "Optimized YOLO model inference for low-latency execution on live video feeds"
    ],
    image_url: "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=800&auto=format&fit=crop&q=80",
    image_urls: [
      "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=800&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "smart-kitchen-monitoring",
    title: "Smart Kitchen Monitoring - Edge AI",
    description: "Trained and deployed a quantized Edge AI neural network on ESP32 microcontrollers for real-time environmental monitoring. Achieved high accuracy for environment classification with intelligent automated controls.",
    live_url: "",
    github_url: "https://github.com/ABDUL-4787",
    technologies: ["Python", "ESP32", "Arduino IDE", "Neural Network", "Edge AI"],
    key_features: [
      "Trained and deployed an Edge AI neural network achieving 99% classification accuracy",
      "Designed real-time environmental monitoring for temperature, humidity, and gas levels",
      "Implemented intelligent PWM-based speed controls for automated exhaust fan ventilation"
    ],
    image_url: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&auto=format&fit=crop&q=80",
    image_urls: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "photocatalytic-absorbance-prediction",
    title: "Photocatalytic Absorbance Prediction",
    description: "Trained regression machine learning models to predict catalyst absorbance in material science, accelerating material evaluation cycles and reducing the need for costly physical lab experiments.",
    live_url: "",
    github_url: "https://github.com/ABDUL-4787",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Regression Models"],
    key_features: [
      "Trained ML regression models to predict photocatalytic catalyst absorbance accurately",
      "Created cost-effective in silico material evaluation pipelines to bypass lab wait times",
      "Applied feature selection and cross-validation to improve model generalization"
    ],
    image_url: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=800&auto=format&fit=crop&q=80",
    image_urls: [
      "https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=800&auto=format&fit=crop&q=80"
    ]
  }
];

export const fallbackCertificates: Certificate[] = [
  {
    id: 1,
    title: "ServiceNow Certified System Administrator (CSA)",
    image_url: "/assets/CSA.jpeg"
  },
  {
    id: 2,
    title: "ServiceNow Certified Application Developer (CAD)",
    image_url: "/assets/CAD.jpeg"
  },
  {
    id: 3,
    title: "Microsoft Azure Cloud Computing Certification (SWIPEGEN)",
    image_url: "/assets/swipegenazure.jpeg"
  }
];

export const fallbackTechStacks: TechStack[] = [
  {
    id: 1,
    name: "Python",
    logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  },
  {
    id: 2,
    name: "C++",
    logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
  },
  {
    id: 3,
    name: "Django",
    logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
  },
  {
    id: 4,
    name: "OpenCV",
    logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg"
  },
  {
    id: 5,
    name: "Git",
    logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
  },
  {
    id: 6,
    name: "SQL",
    logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
  },
  {
    id: 7,
    name: "Azure Cloud",
    logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"
  },
  {
    id: 8,
    name: "ServiceNow",
    logo_url: "https://www.vectorlogo.zone/logos/servicenow/servicenow-icon.svg"
  }
];

export const fallbackExperiences: Experience[] = [
  {
    id: 1,
    role: "Machine Learning Intern",
    company: "Cognifyz IT Solutions",
    date: "May 2026 – Present",
    bullets: [
      "Built and evaluated supervised ML models for classification and regression problems, applying feature engineering and hyperparameter tuning to improve predictive accuracy.",
      "Conducted end-to-end EDA and model optimization pipelines, translating analytical findings into actionable data-driven insights for business stakeholders.",
      "Collaborated cross-functionally to deliver AI-driven solutions aligned with real-world enterprise requirements."
    ]
  },
  {
    id: 2,
    role: "Data Analytics Virtual Experience",
    company: "Deloitte Australia (Forage)",
    date: "June 2026",
    bullets: [
      "Simulated enterprise analytics engagements, performed data cleaning, built decision support dashboards, and delivered business storytelling presentations for real client scenarios.",
      "Synthesized multi-source findings into concise visualizations to inform data-driven decision making at scale."
    ]
  }
];
