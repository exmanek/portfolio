import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaGithub, FaPython, FaJava } from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import { PiFileCpp } from "react-icons/pi";
import SplitText from "./ui/SplitText";

const skills = [
  { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
  { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS" },
  { icon: <FaSass className="text-pink-400" />, name: "Sass" },
  { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript" },
  { icon: <FaReact className="text-cyan-400" />, name: "React" },
  { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind" },
  { icon: <FaGithub className="text-white" />, name: "GitHub" },
  { icon: <FaPython className="text-blue-400" />, name: "Python" },
  { icon: <PiFileCpp className="text-blue-600" />, name: "C++" },
  { icon: <FaJava className="text-red-500" />, name: "Java" },
];

const Card = ({ icon, name }) => (
  <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300 cursor-default">
    <span className="text-5xl">{icon}</span>
    <span className="text-m text-white/70 font-medium tracking-wide">{name}</span>
  </div>
);

const Skills = () => {
  return (
    <section className="skills py-24 px-10 mt-10 flex flex-col items-center" id="skills">
      <SplitText
                text="Języki których używam"
                className="skills__heading text-7xl font-bold text-center text-white mb-16"
                tag="h2"
                delay={100}
                duration={1.25}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                showCallback
            />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <Card key={index} icon={skill.icon} name={skill.name} />
        ))}
      </div>
    </section>
  );
};

export default Skills;