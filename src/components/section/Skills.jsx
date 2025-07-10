import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiExpress,
  SiFirebase,
  SiRedis,
  SiPostman,
} from "react-icons/si";
import SectionWrapper from "../shared/SectionWrapper";

const skills = [
  { name: "React.js", icon: <FaReact className="text-sky-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Redis", icon: <SiRedis className="text-red-500" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
  { name: "GitHub", icon: <FaGithub /> },
];

export default function Skills() {
  return (
    <SectionWrapper
      id="skills"
      fullWidth
      title="Skills & Technologies"
      subtitle="Tools, frameworks, and languages I actively use"
      className="!px-0 overflow-hidden"
    >
      <div className="relative w-screen h-[100px] bg-[#0B0E17] overflow-hidden">
        <div className="absolute top-0 left-0 flex w-max animate-marquee whitespace-nowrap">
          {[...skills, ...skills].map(({ name, icon }, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-[#1c1c28]  w-[120px] h-[100px] px-4 py-3 rounded-md mx-2 shadow-md text-white hover:scale-105 transition-transform duration-300"
            >
              <div className="text-xl">{icon}</div>
              <span className="text-xs mt-1 text-center">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
