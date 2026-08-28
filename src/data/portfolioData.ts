export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
  resume: string;
}

export interface Profile {
  name: string;
  initials: string;
  title: string;
  school: string;
  degree: string;
  location: string;
  availability: string;
  bioHighlights: string[];
  bio: string;
  social: SocialLinks;
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  bullets: string[];
  tags: string[];
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  metrics: ProjectMetric[];
  overview: string;
  tags: string[];
  links: { live?: string; github?: string };
  accent: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export const profile: Profile = {
  name: "Keyon Kaboly",
  initials: "KK",
  title: "Computer engineering student & product builder",
  school: "University of British Columbia",
  degree: "BASc. Computer Engineering, expected 2027",
  location: "Vancouver, BC, Canada / open to relocate",
  availability: "Available for Summer 2026 roles",
  bioHighlights: ["Embedded systems", "Computer vision", "Full-stack software"],
  bio: "I turn ambiguous problems into physical and digital products that feel inevitable to use. My work sits at the intersection of mechanical design, rapid prototyping, and thoughtful software.",
  social: {
    github: "https://github.com/keyonkaboly",
    linkedin: "https://www.linkedin.com/keyonkaboly",
    email: "mailto:keyonkaboly@gmail.com",
    resume: "/keyon-kaboly-resume.pdf",
  },
};

export const experience: Experience[] = [
  {
    company: "Semtech (prev. Sierra Wireless)",
    role: "Embedded SW Engineer, Co-op",
    location: "Richmond, BC, Canada",
    startDate: "Spring 2025",
    endDate: "Winter 2025",
    bullets: [
      "Delivered critical cellular band mask software changes in 3 days to meet customer needs and secure an $XXM deal.",
      "Developed cellular software features for 5G enterprise routers and gateways, including OS-level features for radio modules.",
      "Used Linux, Jira, C++, JavaScript, BitBake, Yocto, and Confluence across Agile and Waterfall workflows.",
    ],
    tags: ["C++", "Embedded Linux", "Yocto", "BitBake", "GitHub"],
  },
  {
    company: "Abomis Innovations",
    role: "Software Engineer, Intern",
    location: "Vancouver, BC, Canada",
    startDate: "Summer 2024",
    endDate: "Summer 2024",
    bullets: [
      "Developed an automated baggage scanning program that increased processing speed by approximately 45% and detection accuracy by 20%.",
      "Used C++, OpenCV, Open3D, MeshLab, Visual Studio, Git, and CMake to analyze point clouds and program the system.",
      "Contributed to beta testing with the Teledyne Bumblebee X 5GigE camera.",
    ],
    tags: ["C++", "OpenCV", "Open3D", "CMake", "Point clouds"],
  },
];

export const projects: Project[] = [
  {
    id: "01",
    title: "Mock Food Delivery App",
    category: "Full-stack software",
    year: "2026",
    summary: "A quick-swap end-effector ecosystem for small-batch robotic assembly.",
    metrics: [
      { label: "Tool change", value: "−38%" },
      { label: "Iterations", value: "14" },
    ],
    overview: "Orbit began with a slow, failure-prone tool-change process. I owned the mechanical architecture, tolerance stack-up, and validation plan from the first sketch through a working pilot. The result is a compact interface that gives operators confidence at a glance.",
    tags: ["SolidWorks", "FMEA", "Machining", "Python"],
    links: { github: "https://github.com/" },
    accent: "lime",
  },
  {
    id: "02",
    title: "FPGA Research @ UBC",
    category: "FPGA / digital signal processing",
    year: "2025",
    summary: "A calmer way for hardware teams to capture, compare, and act on test data.",
    metrics: [
      { label: "Setup time", value: "12 min" },
      { label: "Test records", value: "2.4k" },
    ],
    overview: "Signal makes the invisible work around physical testing visible. I designed the information model, interaction patterns, and a lightweight data ingestion layer so teams could turn scattered observations into decisions without fighting a dashboard.",
    tags: ["TypeScript", "Next.js", "UX", "SQLite"],
    links: { live: "https://github.com/" },
    accent: "coral",
  },
  {
    id: "03",
    title: "Spotify Statistics Website",
    category: "Web application",
    year: "2025",
    summary: "A modular workshop system that makes making more welcoming and repeatable.",
    metrics: [
      { label: "Members served", value: "850+" },
      { label: "Onboarding", value: "−50%" },
    ],
    overview: "Common Ground is part physical kit, part learning system. I worked with students and staff to map the moments that made the workshop feel intimidating, then designed tools, signs, and rituals that turn uncertainty into momentum.",
    tags: ["Research", "Fabrication", "Systems", "Teaching"],
    links: { github: "https://github.com/keyonkaboly" },
    accent: "blue",
  },
  {
    id: "04",
    title: "Wildfire Detection System",
    category: "Embedded hardware",
    year: "2024",
    summary: "A multi-sensor device for earlier wildfire monitoring and detection.",
    metrics: [
      { label: "Early detection", value: "+28%" },
      { label: "Platform", value: "Arduino" },
    ],
    overview: "Common Ground is part physical kit, part learning system. I worked with students and staff to map the moments that made the workshop feel intimidating, then designed tools, signs, and rituals that turn uncertainty into momentum.",
    tags: ["Arduino", "C/C++", "Sensors", "Embedded systems"],
    links: { github: "https://github.com/keyonkaboly" },
    accent: "lime",
  },
  {
    id: "05",
    title: "PCB Design & Assembly",
    category: "Electronics / hardware",
    year: "2024",
    summary: "PCB and circuit designs developed through an IEEE design and assembly workshop.",
    metrics: [
      { label: "Tooling", value: "KiCad" },
      { label: "Focus", value: "PCB" },
    ],
    overview: "Signal makes the invisible work around physical testing visible. I designed the information model, interaction patterns, and a lightweight data ingestion layer so teams could turn scattered observations into decisions without fighting a dashboard.",
    tags: ["KiCad", "PCB design", "Assembly", "Circuits"],
    links: { github: "https://github.com/keyonkaboly" },
    accent: "coral",
  },
];

export const skillGroups: SkillGroup[] = [
  { category: "Languages", skills: ["C++", "Java", "JavaScript", "Python", "Verilog"] },
  { category: "Software & libraries", skills: ["ReactJS", "FastAPI", "OpenCV", "Open3D", "MATLAB", "CMake"] },
  { category: "Embedded & systems", skills: ["Embedded Linux", "Yocto", "BitBake", "Linux", "FPGA", "Computer architecture"] },
  { category: "Hardware & tools", skills: ["KiCad PCB Design", "Arduino", "Digital logic", "Git", "Jira", "Confluence"] },
];

export const metrics = [
  { value: "3+", label: "years making" },
  { value: "40+", label: "things shipped" },
  { value: "12", label: "systems tested" },
];
