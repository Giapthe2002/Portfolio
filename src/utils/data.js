import {
  Code2,
  Heart,
  Coffee,
  BookOpen,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { FiGithub } from "react-icons/fi";

import TeamTracker from "../../src/assets/images/TeamTracker.png";
import appCalo from "../../src/assets/images/appCalo.png";
import ZConcert from "../../src/assets/images/Zconcert.png";

export const SKILLS_CATEGORY = [
  {
    title: "frontend",
    icon: Code2,
    description: "Crafting beautiful, responsive user interfaces",
    skills: [{ name: "React", level: 95, color: "bg-blue-500" }],
  },
];

export const TECH_STACK = [
  "Javascript",
  "HTML5",
  "CSS3",
  "React",
  "NextJs",
  "Tailwind CSS",
  "Sass",
  "Vite",
  "Figma",
  "Adobe XD",
  "Slack",
  "Git",
];

export const PROJECTS = [
  {
    id: 1,
    title: "TeamTracker",
    description:
      "A task management web application built with React, featuring progress tracking and team collaboration.",
    image: TeamTracker,
    tags: ["React", "Tailwind CSS", "Express", "MongoDB"],
    liveUrl: "#",
    featured: false,
    category: "Full Stack",
    githubUrl: "https://github.com/Giapthe2002/TeamTracker-FE",
  },
  {
    id: 1,
    title: "VigorLife",
    description:
      "A mobile app developed with React Native to track daily calorie intake and output",
    image: appCalo,
    tags: ["React Native", "Express", "NodeJs"],
    liveUrl: "#",
    featured: false,
    category: "Full Stack",
    githubUrl: "https://github.com/Giapthe2002/vigor-life-fe",
  },
  {
    id: 1,
    title: "Z Concert",
    description:
      "An online platform for seamless and secure event ticket booking.",
    image: ZConcert,
    tags: ["TypeScript", "SCSS"],
    liveUrl: "#",
    featured: false,
    category: "Frontend",
    githubUrl: "https://github.com/Giapthe2002/zconcert2024-fe",
  },
];

export const JOURNEY_STEPS = [
  {
    year: "2023",
    title: "Started Coding Journey",
    Company: "Self-taught",
    description:
      "Discovered web development and built my first website with HTML, CSS, and JavaScript.",
    icon: Code2,
    color: "bg-blue-500",
  },
  {
    year: "2024",
    title: "Exploring Mobile Development",
    Company: "React Native",
    description:
      "Dived into React Native to build cross-platform mobile apps. Learned to manage state, handle navigation, and integrate APIs for projects.",
    icon: Code2,
    color: "bg-green-500",
  },
  {
    year: "2024 - now",
    title: "Diving Deeper into Frontend",
    Company: "React → Next.js",
    description:
      "Developed real-world projects using React, focusing on responsive UIs and smooth user experiences. Currently expanding my skills with Next.js to build modern, scalable web applications with server-side rendering and advanced features.",
    icon: Code2,
    color: "bg-purple-500",
  },
];

export const PASSIONS = [
  {
    icon: Heart,
    title: "User experience",
    description:
      "Crafting intuitive and accessible interfaces that users enjoy.",
  },
  {
    icon: Coffee,
    title: "Interactive Web Apps",
    description:
      "Building fast, responsive, and engaging front-end applications.",
  },
  {
    icon: BookOpen,
    title: "Design & Animation",
    description:
      "Bringing ideas to life with clean design, smooth transitions, and micro-interactions.",
  },
];

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    icon: FiGithub,
    url: "https://github.com/Giapthe2002",
    color: "hover:text-gray-400",
    bgColor: "hover:bg-gray-800",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:giapthe2002@gmail.com",
    color: "hover:text-green-400",
    bgColor: "hover:bg-green-500/10",
  },
];

export const CONTACT_INFO = [
  { icon: MapPin, label: "Location", value: "HaNoi, VietNam" },
  { icon: Mail, label: "Email", value: "giapthe2002@gmail.com" },
  { icon: Phone, label: "Phone", value: "0395318514" },
];
