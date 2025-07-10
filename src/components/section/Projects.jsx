import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionWrapper from "../shared/SectionWrapper";
import { useEffect, useState } from "react";

import ecommerceImage from "../../assets/images/projects/ForeverFrontend.png";
import ChatApp from "../../assets/images/projects/ChitChat.png";
// import MyPortfolio from "../../assets/images/projects/MyPortfolio.png";
import BrainWaveImage from "../../assets/images/projects/StudyNotion.png"; 

const projects = [
  {
    title: "Forever E-Commerce",
    description:
      "A full-featured MERN stack ecommerce application with cart, checkout, and admin dashboard.",
    image: ecommerceImage,
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "TailwindCSS",
      "Redis",
      "Stripe",
      "Razorpay",
    ],
    github: "https://github.com/2-0aadarsh/Forever-ecommerce",
    demo: "https://foreverfrontend.netlify.app/",
    isDeployed: true,
  },
  {
    title: "ChatVerse",
    description:
      "Socket.io based chat app with private rooms, typing indicators, and dark mode support.",
    image: ChatApp,
    tech: ["React", "Node.js", "Socket.io", "Firebase"],
    github: "https://github.com/2-0aadarsh/ChatVerse",
    demo: "https://chat-aadarsh.vercel.app",
    isDeployed: false,
  },
  {
    title: "BrainWave – EdTech Platform",
    description:
      "Full-stack EdTech platform enabling instructors to upload/manage course content and students to access learning modules with secure authentication and payments.",
    image: BrainWaveImage, // make sure to import the image at the top
    tech: [
      "React.js",
      "Redux",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Razorpay",
      "Cloudinary",
    ],
    github: "https://github.com/2-0aadarsh/BrainWave",
    demo: "https://brainwaveapp.vercel.app", // replace when hosted
    isDeployed: false,
  },
];

export default function Projects() {
  const [currentGroup, setCurrentGroup] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [totalGroups, setTotalGroups] = useState(1);

  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 3,
      spacing: 24,
    },
    breakpoints: {
      "(max-width: 1023px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(max-width: 767px)": {
        slides: { perView: 1, spacing: 16 },
      },
    },
    slideChanged(s) {
      const currentSlide = s.track.details.rel;
      const perView = s.options.slides?.perView || 1;

      const dynamicPerView =
        typeof perView === "number"
          ? perView
          : window.innerWidth < 768
          ? 1
          : window.innerWidth < 1024
          ? 2
          : 3;

      setSlidesPerView(dynamicPerView);
      setCurrentGroup(Math.floor(currentSlide / dynamicPerView));
      setTotalGroups(Math.ceil(projects.length / dynamicPerView));
    },
  });

  // On mount + resize → keep UI responsive
  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;
      const perView = width < 768 ? 1 : width < 1024 ? 2 : 3;
      setSlidesPerView(perView);
      setTotalGroups(Math.ceil(projects.length / perView));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const showNavigation = totalGroups > 1;

  return (
    <SectionWrapper
      id="projects"
      title="Projects"
      subtitle="Showcasing real-world applications built with modern tech stacks."
    >
      {/* Slide Instruction */}
      <div className="text-center text-sm text-gray-400 mb-4 italic">
        Swipe or use arrows to explore →
      </div>

      <div className="relative group/slider">
        {/* Left Arrow */}
        {showNavigation && (
          <button
            onClick={() => slider.current?.prev()}
            className="absolute left-0 top-1/2 ml-[-15px] -translate-y-1/2 z-10 bg-[#1c1c28] p-2 rounded-full shadow-lg hover:bg-[#7A5AF8] transition-all"
          >
            <ChevronLeft className="text-white w-5 h-5" />
          </button>
        )}

        {/* Slider */}
        <div ref={sliderRef} className="keen-slider">
          {projects.map((project, index) => (
            <div
              key={index}
              className="keen-slider__slide bg-[#1c1c28] rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all flex flex-col group"
            >
              {/* Image with GitHub on Hover */}
              <div
                className="relative w-full aspect-[16/9] cursor-pointer overflow-hidden"
                onClick={() => window.open(project.demo, "_blank")}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                  <a
                    href={project.github}
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-2xl bg-[#2a2a3b] p-3 rounded-full hover:bg-[#7A5AF8] transition-all"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>

              {/* Details */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-[#2a2a3b] text-xs text-gray-300 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white text-lg"
                  >
                    <FaGithub />
                  </a>
                  {project.isDeployed && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white text-lg"
                    >
                      <FiExternalLink />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        {showNavigation && (
          <button
            onClick={() => slider.current?.next()}
            className="absolute right-0 top-1/2 mr-[-15px] -translate-y-1/2 z-10 bg-[#1c1c28] p-2 rounded-full shadow-lg hover:bg-[#7A5AF8] transition-all"
          >
            <ChevronRight className="text-white w-5 h-5" />
          </button>
        )}
      </div>

      {/* Dot Indicators */}
      {showNavigation && (
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: totalGroups }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => slider.current?.moveToIdx(idx * slidesPerView)}
              className={`w-3 h-3 rounded-full transition ${
                currentGroup === idx
                  ? "bg-[#7A5AF8] scale-110"
                  : "bg-gray-500/30 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      )}
    </SectionWrapper>
  );
}
