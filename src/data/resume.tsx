import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import {
  SiPython, SiJavascript, SiTypescript, SiGo, SiCplusplus, SiSolidity, SiGnubash,
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiExpo, SiFastapi, SiEjs,
  SiPostgresql, SiMongodb, SiRedis, SiSupabase, SiFirebase, SiMysql,
  SiDigitalocean, SiDocker, SiKubernetes, SiTerraform,
  SiJenkins, SiGithubactions, SiWeb3Dotjs, SiEthers, SiEthereum, SiPolygon,
  SiPostman, SiPrometheus, SiGit, SiLinux
} from "react-icons/si";
import { FaDatabase, FaAws } from "react-icons/fa";

export const DATA = {
  name: "Vishnu Kothakapu",
  initials: "VK",
  url: "https://vishnukothakapu.vercel.app",
  location: "Nirmal, Telangana",
  locationLink: "https://www.google.com/maps/place/Nirmal",
  description:
    "Software Engineer & Open Source Contributor. I love building things and shipping them. Very active on Github.",
  summary:
    "I am a versatile Software Engineer with a strong focus on [Web2, Web3, and Mobile App development](#skills). Currently [pursuing an Integrated B.Tech + MBA in Information Technology](#education) at ABV-IIITM Gwalior. I have a passion for architecting distributed systems, [automating DevOps pipelines](#skills), and building scalable modern web applications. Whether it's crafting [self-healing distributed caches in Go](#projects) or developing [decentralized smart contracts](#hackathons), I thrive on solving complex technical challenges. I am also a passionate open source contributor, actively contributing to major projects like Kubernetes and various other repositories.",
  avatarUrl: "https://avatars.githubusercontent.com/u/108342415?v=4",
  skills: [
    {
      title: "Languages",
      skills: [
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Go", icon: SiGo, color: "#00ADD8" },
        { name: "C/C++", icon: SiCplusplus, color: "#00599C" },
        { name: "SQL", icon: FaDatabase, color: "#336791" },
        { name: "Solidity", icon: SiSolidity, color: "#363636" },
        { name: "Bash", icon: SiGnubash, color: "#4EAA25" },
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React.js", icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Express.js", icon: SiExpress },
        { name: "React Native", icon: SiReact, color: "#61DAFB" },
        { name: "Expo", icon: SiExpo },
        { name: "FastAPI", icon: SiFastapi, color: "#009688" },
        { name: "EJS", icon: SiEjs, color: "#B4CA65" },
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "Redis", icon: SiRedis, color: "#DC382D" },
        { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      ]
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", icon: FaAws, color: "#FF9900" },
        { name: "DigitalOcean", icon: SiDigitalocean, color: "#0080FF" },
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
        { name: "Terraform", icon: SiTerraform, color: "#7B42BC" },
        { name: "Jenkins", icon: SiJenkins, color: "#D24939" },
        { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
      ]
    },
    {
      title: "Blockchain",
      skills: [
        { name: "Solidity", icon: SiSolidity, color: "#363636" },
        { name: "Web3.js", icon: SiWeb3Dotjs, color: "#F16822" },
        { name: "Ethers.js", icon: SiEthers, color: "#2535A0" },
        { name: "Foundry", icon: SiEthereum, color: "#3C3C3D" },
        { name: "Polygon Testnet", icon: SiPolygon, color: "#8247E5" },
      ]
    },
    {
      title: "Tools & Monitoring",
      skills: [
        { name: "Postman", icon: SiPostman, color: "#FF6C37" },
        { name: "Prometheus", icon: SiPrometheus, color: "#E6522C" },
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "Linux", icon: SiLinux, color: "#FCC624" },
      ]
    }
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "kothakapuvishnukiran@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/vishnukothakapu",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/kothakapuvishnukiran",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/VishnuKothakapu",
        icon: Icons.x,
        navbar: true,
      },
      Leetcode: {
        name: "Leetcode",
        url: "https://leetcode.com/u/kothakapuvishnukiran/",
        icon: Icons.leetcode,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:kothakapuvishnukiran@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Neural Network Labs",
      href: "",
      badges: [],
      location: "Hyderabad, Telangana (Remote)",
      title: "Full Stack Developer Intern",
      logoUrl: "/neural_network_labs.png",
      start: "May 2025",
      end: "August 2025",
      description: (
        <ul className="list-outside list-disc ml-4 space-y-2 mt-2">
          <li>Developed full-stack features for AI-powered content generation workflows (meme, infographic, and ad creation) using React and Konva.js, delivering an interactive canvas-based UI/UX editor.</li>
          <li>Integrated machine learning models via FastAPI REST APIs, building a Node.js middleware layer (models, controllers, routes) to bridge ML services with React frontend workflows.</li>
          <li>Deployed and maintained cloud infrastructure across AWS (frontend hosting) and Linode & DigitalOcean (ML model serving), ensuring high availability and horizontal scalability.</li>
          <li>Optimized API response pipeline in collaboration with ML engineers, reducing end-to-end API latency by 25%.</li>
        </ul>
      ),
    }
  ],
  education: [
    {
      school: "Indian Institute of Information Technology and Management",
      href: "https://www.iiitm.ac.in/",
      degree: "Integrated B.Tech + MBA in Information Technology",
      logoUrl: "/iiitm_logo.jpeg",
      start: "2023",
      end: "2028",
      location: "Gwalior, Madhya Pradesh",
      description: "Coursework: Object-Oriented Programming, Data Structures, Database Systems, Operating Systems, Computer Networks",
    },
    {
      school: "Rajiv Gandhi University of Knowledge Technologies",
      href: "https://www.rgukt.ac.in/",
      degree: "Pre University Course (PUC)",
      logoUrl: "/rgukt_logo.png",
      start: "2020",
      end: "2022",
      location: "Basar, Telangana",
    },
  ],
  projects: [
    {
      title: "LinkID",
      href: "https://github.com/vishnukothakapu/linkid",
      dates: "2024",
      active: true,
      description:
        "Your professional identity, simplified. One username. Clean, predictable links for every platform. Platform routing, OAuth login, and real-time dashboard.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Prisma",
        "PostgreSQL",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/vishnukothakapu/linkid",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/linkid.png",
      video: "",
    },
    {
      title: "Atlas",
      href: "https://github.com/vishnukothakapu/Atlas",
      dates: "2024",
      active: true,
      description:
        "A lightweight, distributed, in-memory key-value store built with Go. Features consistent hashing, partition replication, heartbeat-based failure detection, and automatic client read failovers.",
      technologies: [
        "Go",
        "Docker",
        "Apache Kafka",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/vishnukothakapu/Atlas",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/atlas.png",
      video: "",
    },
    {
      title: "ChitSetu",
      href: "https://github.com/Jaisheesh-2006/ChitSetu",
      dates: "2024",
      active: true,
      description:
        "A decentralized platform combining fintech workflows with blockchain-backed recording. Built during a hackathon in a team of 4. Developed the Solidity smart contracts and blockchain integration.",
      technologies: [
        "Solidity",
        "Ethereum",
        "Polygon",
        "Hardhat",
        "Go"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Jaisheesh-2006/ChitSetu",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/chitsetu.png",
      video: "",
    },
    {
      title: "HabitFlow",
      href: "https://github.com/vishnukothakapu/habit-tracker-expo",
      dates: "2023",
      active: true,
      description:
        "A mobile habit tracking application built with React Native and Expo. It allows users to track daily habits, view progress, and maintain streaks with a clean and intuitive user interface.",
      technologies: [
        "React",
        "TypeScript",
        "Expo",
        "Supabase",
        "TailwindCSS"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/vishnukothakapu/habit-tracker-expo",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/habitflow.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Hackathon - HackByte 4.0",
      dates: "April 2026",
      location: "IIITDM Jabalpur",
      description:
        "Won two sponsor tracks at this 36-hour MLH hackathon. Developed ChitSetu, a decentralized platform combining fintech workflows with blockchain-backed recording.",
      image: "/hackathon.png",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Jaisheesh-2006/ChitSetu",
        }
      ],
    }
  ],
} as const;
