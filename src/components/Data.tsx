import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { IoDocumentAttach } from "react-icons/io5";
import {
  FaPython,
  FaReact,
  FaNode,
  FaCloud,
  FaJava,
  FaAws,
} from "react-icons/fa";
import {
  BiLogoPostgresql,
  BiLogoMongodb,
  BiLogoSpringBoot,
} from "react-icons/bi";
import {
  SiNextdotjs,
  SiRedux,
  SiNeo4J,
  SiJavascript,
  SiTypescript,
  SiCsharp,
} from "react-icons/si";

export const links = [
  {
    index: 1,
    title: "Check out my Github",
    href: "https://github.com/gurashish1000-coder",
    icon: <GitHubIcon sx={{ fontSize: "1.7rem" }} />,
  },
  {
    index: 2,
    title: "Check out my Linkedin",
    href: "https://www.linkedin.com/in/gurashish-arneja/",
    icon: <LinkedInIcon sx={{ fontSize: "1.7rem" }} />,
  },
  {
    index: 3,
    title: "Check out my Instagram",
    href: "",
    icon: <InstagramIcon sx={{ fontSize: "1.7rem" }} />,
  },
  {
    index: 4,
    title: "Check out my Email",
    href: "mailto:gurashish1000@gmail.com",
    icon: <MailOutlineIcon sx={{ fontSize: "1.7rem" }} />,
  },
  {
    index: 5,
    title: "Check out my Resume",
    href: "/gurashish_resume.pdf",
    icon: <IoDocumentAttach style={{ fontSize: "1.6rem" }} />,
  },
];

export const technologies = [
  { name: "React.js", icon: <FaReact color="#CE9178" fontSize={30} /> },
  { name: "Node.js", icon: <FaNode color="#CE9178" fontSize={30} /> },
  { name: "Python", icon: <FaPython color="#CE9178" fontSize={30} /> },
  {
    name: "Postgresql",
    icon: <BiLogoPostgresql color="#CE9178" fontSize={30} />,
  },
  { name: "MongoDB", icon: <BiLogoMongodb color="#CE9178" fontSize={30} /> },
  { name: "Next.js", icon: <SiNextdotjs color="#CE9178" fontSize={30} /> },
  { name: "Redux", icon: <SiRedux color="#CE9178" fontSize={30} /> },
  { name: "Neo4j", icon: <SiNeo4J color="#CE9178" fontSize={30} /> },
  { name: "REST", icon: <FaCloud color="#CE9178" fontSize={30} /> },
  {
    name: "JavaScript",
    icon: <SiJavascript color="#CE9178" fontSize={30} />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript color="#CE9178" fontSize={30} />,
  },
  { name: "C#", icon: <SiCsharp color="#CE9178" fontSize={30} /> },
  { name: "Java", icon: <FaJava color="#CE9178" fontSize={30} /> },
  {
    name: "Java Spring Boot",
    icon: <BiLogoSpringBoot color="#CE9178" fontSize={30} />,
  },
  {
    name: "AWS",
    icon: <FaAws color="#CE9178" fontSize={30} />,
  },
];
