/* eslint-disable react/no-unescaped-entities */
import SectionWrapper from "../shared/SectionWrapper";
import { motion } from "framer-motion";
import profileImage from "../../assets/images/aadarsh.jpeg";
import { FaGraduationCap, FaCertificate, FaHandPeace } from "react-icons/fa";

const education = [
  {
    degree: "B.Tech in Computer Science",
    institution: "Vellore Institute of Technology",
    year: "2021 - 2025",
    grade: "CGPA: 7.88",
    highlights: [
      "Specialized in Web Technologies",
      "Final Year Project: ML Based Road-Accident Detection System",
    ],
  },
  {
    degree: "Higher Secondary (PCM) School",
    institution: "D.A.V Public School, cantt area, Gaya",
    year: "2017 - 2019",
    grade: "Score: 82%",
    highlights: [
      "Developed first web app in 12th grade",
      "Learn about Databases primarly SQL",
    ],
  },
  {
    degree: "Secondary School Examination (Class X)",
    institution: "D.A.V. Public School, Medical Unit, Gaya",
    year: "2007 – 2017",
    grade: "CGPA: 10",
    highlights: ["School Topper"],
  },
];

const certifications = [
  {
    name: "Full-Stack Web Development",
    issuer: "Ethnus",
    year: "2023",
    credential: "View Credential",
    link: "https://drive.google.com/file/d/1V6fMrnmI9SENeIhqEfZW4JxvWhRd-WUh/view",
  },
  {
    name: "The Bits and Bytes of Computer Networking",
    issuer: "Google",
    year: "2023",
    credential: "Verify Certification",
    link: "https://drive.google.com/file/d/12CPWN3xJS_KcoXiFxcVCmmdrJoGYwkM7/view",
  },
];

export default function About() {
  return (
    <SectionWrapper
      id="about"
      title="About Me"
      subtitle="A glimpse into my journey, skills, and development philosophy."
    >
      {/* Profile Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Profile Image - Left Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:col-span-4 flex justify-center"
        >
          <div className="relative group">
            <img
              src={profileImage}
              alt="Aadarsh - Full Stack Developer"
              className="rounded-2xl w-full max-w-xs object-cover shadow-xl border-4 border-[#2a2a3b] group-hover:border-[#7A5AF8] transition-all duration-300"
            />
            <div className="absolute inset-0 bg-[#7A5AF8] opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"></div>
          </div>
        </motion.div>

        {/* About Text - Right Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="lg:col-span-8"
        >
          <div className="bg-[#1c1c28]/50 p-6 md:p-8 rounded-xl border border-[#2a2a3b] shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center">
              <FaHandPeace className="text-[#A162E8] text-xl mr-3" />
              <span className="bg-gradient-to-r from-[#7A5AF8] to-[#A162E8] bg-clip-text text-transparent">
                Hey, I'm Aadarsh
              </span>
            </h2>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Passionate{" "}
                <span className="text-white font-medium">
                  Full Stack Developer
                </span>{" "}
                skilled in building modern web applications using the MERN
                stack. I focus on writing clean, scalable code and designing
                efficient systems, backed by hands-on experience from real-world
                projects and continuous learning.
              </p>

              <p>
                My expertise spans{" "}
                <span className="text-white font-medium">
                  frontend development
                </span>{" "}
                with React,{" "}
                <span className="text-white font-medium">backend services</span>{" "}
                using Node.js, and{" "}
                <span className="text-white font-medium">database design</span>{" "}
                with MongoDB. I'm particularly interested in performance
                optimization and creating intuitive user experiences.
              </p>

              <p>
                Currently expanding my skills in{" "}
                <span className="text-white font-medium">
                  cloud architecture
                </span>
                , <span className="text-white font-medium">system design</span>,
                and{" "}
                <span className="text-white font-medium">DevOps practices</span>{" "}
                to build more robust and maintainable applications.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <div className="px-4 py-2 bg-[#7A5AF8]/10 border border-[#7A5AF8] rounded-full text-sm text-[#A162E8]">
                React Specialist
              </div>
              <div className="px-4 py-2 bg-[#7A5AF8]/10 border border-[#7A5AF8] rounded-full text-sm text-[#A162E8]">
                Node.js Expert
              </div>
              <div className="px-4 py-2 bg-[#7A5AF8]/10 border border-[#7A5AF8] rounded-full text-sm text-[#A162E8]">
                Backend Architecture Oriented
              </div>
              <div className="px-4 py-2 bg-[#7A5AF8]/10 border border-[#7A5AF8] rounded-full text-sm text-[#A162E8]">
                System Design Focused
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Education & Certifications */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-[#1c1c28]/50 p-6 rounded-xl border border-[#2a2a3b] shadow-lg">
            <div className="flex items-center mb-6">
              <div className="mr-3 p-2 bg-[#7A5AF8]/10 rounded-lg">
                <FaGraduationCap className="text-[#7A5AF8] text-xl" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Educational Journey
              </h3>
            </div>

            <div className="relative pl-8 before:absolute before:top-0 before:left-[1.35rem] before:bottom-0 before:w-[2px] before:bg-gradient-to-b from-[#7A5AF8] to-[#A162E8]">
              {education.map((edu, idx) => (
                <div key={idx} className="relative mb-8 last:mb-0">
                  <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-gradient-to-br from-[#7A5AF8] to-[#A162E8] flex items-center justify-center text-white text-xs font-bold">
                    {idx + 1}
                  </div>
                  <div className="bg-[#1c1c28] p-5 rounded-lg border border-[#2a2a3b] hover:border-[#7A5AF8]/50 transition-all shadow-sm hover:shadow-md">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">
                          {edu.degree}
                        </h4>
                        <p className="text-sm text-gray-400">
                          {edu.institution}
                        </p>
                      </div>
                      <span className="text-xs bg-[#7A5AF8]/10 text-[#A162E8] px-2 py-1 rounded">
                        {edu.year}
                      </span>
                    </div>
                    <div className="mt-3 flex justify-between items-center text-xs text-gray-500">
                      <span>{edu.grade}</span>
                    </div>
                    <div className="mt-3 space-y-2">
                      {edu.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start">
                          <span className="text-[#7A5AF8] mr-2">•</span>
                          <span className="text-sm text-gray-300">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-[#1c1c28]/50 p-6 rounded-xl border border-[#2a2a3b] shadow-lg h-full">
            <div className="flex items-center mb-6">
              <div className="mr-3 p-2 bg-[#7A5AF8]/10 rounded-lg">
                <FaCertificate className="text-[#7A5AF8] text-xl" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Certifications & Credentials
              </h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="bg-[#1c1c28] p-5 rounded-lg border border-[#2a2a3b] hover:border-[#7A5AF8]/50 transition-all shadow-sm hover:shadow-md group"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-semibold text-white group-hover:text-[#A162E8] transition-colors">
                        {cert.name}
                      </h4>
                      <p className="text-sm text-gray-400">
                        {cert.issuer} •{" "}
                        <span className="text-gray-500">{cert.year}</span>
                      </p>
                    </div>
                    <span className="text-xs bg-[#7A5AF8]/10 text-[#A162E8] px-2 py-1 rounded">
                      Verified
                    </span>
                  </div>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3  text-sm text-[#7A5AF8] hover:text-[#A162E8] transition-colors flex items-center"
                  >
                    {cert.credential}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              ))}

              {/* Skills Cloud */}
              <div className="mt-8">
                <h4 className="text-md font-semibold text-white mb-3">
                  Core Competencies
                </h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    "JavaScript",
                    "React.js",
                    "Node.js",
                    "Express",
                    "MongoDB",
                    "REST APIs",
                    "Tailwind CSS",
                    "Git",
                    "AWS",
                    "System Design",
                    "Performance Optimization",
                    "Agile Methodologies",
                  ].map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#2a2a3b] text-gray-300 text-sm rounded-full hover:bg-[#7A5AF8] hover:text-white transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
