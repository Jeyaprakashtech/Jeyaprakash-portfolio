


export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
];

export const TYPING_ROLES = [
  "Full-Stack Developer",
  "Frontend Engineer",
  "AI App Developer",
  "Saas Bulider",
  "UI/UX Designer",
  "Freelancer",
];

export const HIGHLIGHT_CARDS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M8 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-3"
          stroke="#A855F7"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M15 3h6v6M10 14L21 3"
          stroke="#A855F7"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Clean Code",
    desc: "Readable, scalable, maintainable",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="3"
          stroke="#A855F7"
          strokeWidth="1.8"
        />
        <path
          d="M3 9h18M9 21V9"
          stroke="#A855F7"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "UX-Driven Engineering",
    desc: "Every feature starts with how it feels, not just how it works.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#A855F7" strokeWidth="1.8" />
        <path
          d="M12 7v5l3 3"
          stroke="#A855F7"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "On-time Delivery",
    desc: "I treat deadlines as promises, not targets.",
  },
];

export const INFO_PILLS = [
  { emoji: "📍", text: "Chennai, India" },
  { emoji: "💼", text: "Open to Opportunities" },
  { emoji: "🎓", text: "Bachelor of Computer Applications (BCA)" },
];

export const TABS = ["Frontend", "Backend","Programming Languages", "Design", "Tools"];

export const SKILLS = {
  Frontend: [
    { name: "React", color: "#00C0FF", icon:"/icons/react.png" },
    { name: "Next.js", color: "#F0EEFF", icon:"/icons/next.png" },
    { name: "Three.js", color: "#049EF4", icon:"/icons/threejs.png" },
    { name: "JavaScript", color: "#F7DF1E", icon:"/icons/js.png" },
    { name: "TypeScript", color: "#3178C6", icon:"/icons/typescript.png" },
    { name: "Tailwind CSS", color: "#06B6D4", icon:"/icons/Tailwind.png" },
    { name: "Framer Motion", color: "#EC4899", icon:"/icons/framer.png" },
    { name: "HTML5", color: "#E34F26", icon:"/icons/html.png"},
    { name: "CSS3", color: "#1572B6", icon:"/icons/css.png" },
  ],
  Backend: [
    { name: "Node.js", color: "#68A063", icon:"/icons/node.png" },
    { name: "Express", color: "#F0EEFF", icon:"/icons/express.png" },
    { name: "MongoDB", color: "#47A248", icon:"/icons/mongodb.png" },
    { name: "MySQL", color: "#00758F", icon:"/icons/mysql.png" },
    { name: "REST APIs", color: "#06B6D4", icon:"/icons/api.png" },
    { name: "JWT Auth", color: "#EC4899", icon:"/icons/jwt.svg" },
  ],
  "Programming Languages":[
    { name: "Python", color: "#3776AB",icon:"/icons/python.png" },
  { name: "Java", color: "#FFCA28", icon:"/icons/java.png" },
  { name: "C++", color: "#00599C", icon:"/icons/c.png" },
  ],
  Design: [
    { name: "Figma", color: "#EC4899", icon: "/icons/figma.png" },
    { name: "Adobe XD", color: "#FF61F6", icon: "/icons/xd.png" },
    { name: "Blender", color: "#F5792A", icon: "/icons/blender.png" },
    { name: "UI/UX Design", color: "#6366F1", icon:"/icons/uiux.png" },
    { name: "Design Systems", color: "#06B6D4", icon:"/icons/sd.png" },
    { name: "Prototyping", color: "#7C3AED", icon:"/icons/prototyping.png" },
    { name: "Wireframing", color: "#C084FC", icon:"/icons/wireframe.png" },
    
  ],
  Tools: [
    { name: "Git", color: "#F05032", icon:"/icons/git.png" },
    { name: "GitHub", color: "#F0EEFF", icon:"/icons/github.png" },
    { name: "Vercel", color: "#A855F7", icon:"/icons/vercel.png" },
    { name: "VS Code", color: "#007ACC", icon:"/icons/vscode.png" },
    { name: "PyCharm", color: "#21D789", icon:"/icons/pycharm.png" },
    { name: "Postman", color: "#FF6C37", icon:"/icons/postman.png" },
  ],
};

export const MARQUEE_ITEMS = [
  { label: "React", color: "#61DAFB" },
  { label: "Next.js", color: "#F0EEFF" },
  { label: "TypeScript", color: "#3178C6" },
  { label: "Tailwind CSS", color: "#06B6D4" },
  { label: "Framer Motion", color: "#EC4899" },
  { label: "Node.js", color: "#68A063" },
  { label: "MongoDB", color: "#47A248" },
  { label: "PostgreSQL", color: "#336791" },
  { label: "Figma", color: "#EC4899" },
  { label: "Firebase", color: "#FFCA28" },
  { label: "Docker", color: "#2496ED" },
  { label: "Vercel", color: "#A855F7" },
  { label: "Git", color: "#F05032" },
  { label: "Three.js", color: "#A855F7" },
  { label: "VS Code", color: "#007ACC" },
  { label: "Postman", color: "#FF6C37" },
];

export const PROJECTS = [
  {
    id: 1,
    featured: true,
    title: "DreamRender – AI Image Generator",
    desc: "A production-style AI SaaS application that generates high-quality images from text prompts. Features secure authentication, credit-based usage, cloud storage, and payment integration—designed to replicate a real-world scalable product.",
    image: "/projects_img/Dreamrender/Dreamrender_thumbnail.png",
    screenshots: [
      { image: "/projects_img/Dreamrender/Dreamrender_thumbnail.png",  gradient: "linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)" },
      { image: "/projects_img/Dreamrender/gallery_ss.png",  gradient: "linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)" },
      { image: "/projects_img/Dreamrender/generate_ss.png",  gradient: "linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)" },
      { image: "/projects_img/Dreamrender/pricing_ss.png",  gradient: "linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)" },
      
    ],
    tech: [
      { label: "React", color: "#61DAFB" },
      { label: "Node.js", color: "#68A063" },
      { label: "MongoDB", color: "#47A248" },
      { label: "Tailwind", color: "#06B6D4" },
      { label: "Cloudinary", color: "#F38020" },
      { label: "Razorpay", color: "#3776AB" },
      { label: "Framer Motion", color: "#E10098" },
    ],
    category:"",
    liveUrl: "https://dreamrender-five.vercel.app/",
    githubUrl: "https://github.com/Jeyaprakashtech/DreamRender",
    gradient: "linear-gradient(135deg, #7C3AED 0%, #EC4899 50%, #3B82F6 100%)",
    year:"2026",
  },
  {
    id: 2,
    featured: false,
    title: "Hinata AI Assistant",
    desc: "An AI-powered voice assistant web application designed to automate daily tasks and enhance productivity. It enables users to interact using voice or text to perform actions like sending messages, retrieving information, and managing workflows—all within a unified interface.",
    image: "/projects_img/Hinata/hinata_thumbnail.png",
    screenshots: [
      { image: "/projects_img/Hinata/hinata_thumbnail.png",  gradient: "linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)" },
      { image: "/projects_img/Hinata/hinata_screenshot.png",  gradient: "linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)" },
    ],
    tech: [
      { label: "Python", color: "#3776AB" },
      { label: "JavaScript", color: "#F7DF1E" },
      { label: "Eel", color: "#00A8E8" },
      { label: "SQLite", color: "#003B57" },
    ],
    category:"AI",
    liveUrl: "",
    githubUrl: "https://github.com/Jeyaprakashtech/Hinata-AI-Voice-Assistant",
    gradient: "linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)",
    year:"2024",
  },
 
];
export const CONTACT_INFO = {
  email: "jeyaprakash2630@email.com",
  phone: "+91 95515 52444",
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/Jeyaprakashtech",
      color: "#F0EEFF",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jeyaprakash-s-884b14216/",
      color: "#0A66C2",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      ),
    },
    /*{
      label: "Twitter / X",
      href: "https://twitter.com/yourusername",
      color: "#1DA1F2",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },*/
    {
      label: "WhatsApp",
      href: "https://wa.me/955155244",
      color: "#25D366",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/_prince_.jp._/",
      color: "#E1306C",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <rect
            x="2"
            y="2"
            width="20"
            height="20"
            rx="5"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <circle
            cx="12"
            cy="12"
            r="4"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
        </svg>
      ),
    },
  ],
};

export const SUBJECTS = [
  "Project Enquiry",
  "Job Opportunity",
  "Collaboration",
  "Just saying hi",
];

// ── Floating geometric shapes ──
export const SHAPES = [
  {
    size: 300,
    top: "10%",
    left: "-5%",
    color: "rgba(124,58,237,0.06)",
    blur: 60,
    delay: 0,
  },
  {
    size: 200,
    top: "60%",
    right: "-3%",
    color: "rgba(236,72,153,0.05)",
    blur: 50,
    delay: 1.5,
  },
  {
    size: 150,
    top: "30%",
    left: "45%",
    color: "rgba(6,182,212,0.04)",
    blur: 40,
    delay: 3,
  },
  {
    size: 120,
    bottom: "5%",
    left: "20%",
    color: "rgba(168,85,247,0.06)",
    blur: 35,
    delay: 0.8,
  },
];




export const TERMINAL_MESSAGES = [
  "> Whoa, you found the easter egg 🎉",
  "> Respect. Most people never click that.",
  "> You're clearly the curious type. I like that.",
  "> Fun fact: This portfolio took way too many cups of coffee ☕",
  "> Achievement unlocked: 🏆 Footer Explorer",
];
