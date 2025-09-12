import {
  Code2,
  GraduationCap,
  Briefcase,
  Award,
  Rocket,
  Heart,
  Coffee,
  BookOpen,
  Zap,
  Database,
  Server,
  Cloud,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

import PROJECT_IMG from "../assets/images/profile.jpg";
import { image, label } from "framer-motion/client";
import { color } from "framer-motion";

export const SKILLS_CATEGORY = [
  {
    title: "frontend",
    icon: Code2,
    description: "Crafting beautiful, responsive user interfaces",
    skills: [{ name: "React", level: 95, color: "bg-blue-500" }],
  },
];

export const TECH_STACK = [
  "javascript",
  "HTML5",
  "CSS3",
  "Sass",
  "Vite",
  "Figma",
  "Adobe XD",
  "Slack",
];

export const STATS = [
  { number: "50+", label: "Projects Completed" },
  { number: "3+", label: "Years Experience" },
  { number: "100%", label: "Client Statisfation" },
];

export const PROJECTS = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution with advanced filtering, payment integration.",
    image: "",
    tags: ["React", "Tailwind", "Framer motion"],
    liveUrl: "#",
    featured: false,
    category: "Full Stack",
  },
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution with advanced filtering, payment integration.",
    image: "",
    tags: ["React", "Tailwind", "Framer motion"],
    liveUrl: "#",
    featured: false,
    category: "Full Stack",
  },
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution with advanced filtering, payment integration.",
    image: "",
    tags: ["React", "Tailwind", "Framer motion"],
    liveUrl: "#",
    featured: false,
    category: "Full Stack",
  },
];

export const JOURNEY_STEPS = [
  {
    year: "2021",
    title: "Started Coding Journey",
    Company: "Self-taught",
    description:
      "Began learning web development with HTML, CSS, Javascript. Built my first website",
    icon: Code2,
    color: "bg-blue-500",
  },
  {
    year: "2021",
    title: "Started Coding Journey",
    Company: "Self-taught",
    description:
      "Began learning web development with HTML, CSS, Javascript. Built my first website",
    icon: Code2,
    color: "bg-green-500",
  },
  {
    year: "2021",
    title: "Started Coding Journey",
    Company: "Self-taught",
    description:
      "Began learning web development with HTML, CSS, Javascript. Built my first website",
    icon: Code2,
    color: "bg-purple-500",
  },
];

export const PASSIONS = [
  {
    icon: Heart,
    title: "User experience",
    description: "Crafting intuitive interfaces that users love",
  },
  {
    icon: Coffee,
    title: "User experience",
    description: "Crafting intuitive interfaces that users love",
  },
  {
    icon: BookOpen,
    title: "User experience",
    description: "Crafting intuitive interfaces that users love",
  },
];

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    icon: FiGithub,
    url: "https://github.com/Giapthe2002?tab=overview&from=2025-08-01&to=2025-08-31",
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
