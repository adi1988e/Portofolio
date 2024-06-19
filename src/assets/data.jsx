import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import gameland from "../assets/gameland.png";
import dashboard from "../assets/dashboard.png";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
  { id: nanoid(), href: "#skills", text: "skills" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-slate-500" />,
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-slate-500" />,
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-slate-500" />,
  },
  {
    id: nanoid(),
    title: "NodeJs",
    icon: <FaNodeJs className="h-16 w-16 text-slate-500" />,
  },
  {
    id: nanoid(),
    title: "Mongodb",
    icon: <SiMongodb className="h-16 w-16 text-slate-500" />,
  },
  {
    id: nanoid(),
    title: "SQL",
    icon: <GrMysql className="h-16 w-16 text-slate-500" />,
  },
];

export const projects = [
  {
    id: nanoid(),
    img: gameland,
    url: "https://gameland-store.netlify.app",
    github: "https://github.com/adi1988e/Gameland-store",
    title: "GameLand",
    text: "Online store for video games.",
  },
  {
    id: nanoid(),
    img: dashboard,
    url: "https://dashboard-managment.onrender.com",
    github: "https://github.com/adi1988e/Dashboard-managment/tree/master",
    title: "Dashboard",
    text: " Management dashboard for GameLand store. The app is only for authorized administrators for tracking and managing orders, products, customers, employees, viewing statistics and more.",
  },
  // {
  //   id: nanoid(),
  //   img: "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800",
  //   url: "https://react-projects.netlify.app/",
  //   github: "https://github.com/john-smilga",
  //   title: "third project",
  //   text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  // },
];
