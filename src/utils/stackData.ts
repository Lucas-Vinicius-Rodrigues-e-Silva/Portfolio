import {
  SiPostgresql,
  SiTypescript,
  SiDjango,
  SiVite,
  SiVercel,
  SiNestjs,
  SiOpenai,
} from "react-icons/si";
import { FaGit, FaPython } from "react-icons/fa";
import { FaHtml5, FaCss3Alt, FaJs, FaNode, FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { GrDocker } from "react-icons/gr";

export const stackData = [
  {
    title: "HTML",
    img: FaHtml5,
  },
  {
    title: "CSS",
    img: FaCss3Alt,
  },
  {
    title: "JS",
    img: FaJs,
  },
  { title: "TypeScript", img: SiTypescript },
  {
    title: "Node JS",
    img: FaNode,
  },
  {
    title: "React",
    img: FaReact,
  },
  {
    title: "Vercel",
    img: SiVercel,
  },
  { title: "Django", img: SiDjango },
  { title: "Vite", img: SiVite },
  { title: "PostgreSQL", img: SiPostgresql },
  { title: "Git", img: FaGit },
  { title: "Python", img: FaPython },
  { title: "NestJS", img: SiNestjs },
  { title: "NextJS", img: TbBrandNextjs },
  { title: "Docker", img: GrDocker },
  { title: "OpenAI", img: SiOpenai },
];
