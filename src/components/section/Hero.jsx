import heroImage from "../../assets/images/hero-me-2.png";
import { FiDownload, FiFolder } from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/Aadarsh_Resume.pdf"; // Make sure the PDF is in the public folder
    link.download = "Aadarsh_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section
      id="hero"
      className="min-h-screen px-4 sm:px-6 md:px-16 py-20 bg-[#0B0E17] text-white flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden"
    >
      {/* Left: Text */}
      <div className="flex-1 space-y-6 text-center md:text-left">
        <p className="text-lg text-[#8583ff]">Hey, I’m Aadarsh</p>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Full Stack <span className="text-[#7A5AF8]">MERN</span>
          <br />
          <span className="text-[#A162E8]">Developer</span>
        </h1>
        <p className="text-gray-300 text-base md:text-lg max-w-xl mx-auto md:mx-0 leading-relaxed">
          I architect and develop highly scalable, maintainable, and optimized
          web applications with a strong focus on performance, clean code
          structure, and system design principles — engineered for reliability
          and long-term impact.
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <button
            onClick={handleResumeDownload}
            className="bg-[#7A5AF8] flex items-center gap-2 hover:bg-[#6843f3] text-white px-6 py-4 rounded-lg text-md font-medium shadow-md"
          >
            <FiDownload /> Download Resume
          </button>

          {/* Scroll to Projects */}
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            offset={-70}
            className="border flex items-center gap-2 border-[#7A5AF8] text-[#7A5AF8] hover:bg-[#7a5af820] px-6 py-4 rounded-lg text-md font-medium cursor-pointer"
          >
            <FiFolder /> View Projects
          </ScrollLink>
        </div>
      </div>

      {/* Right: Hero Image */}
      <div className="flex-1 flex justify-center relative">
        <div className="relative w-full max-w-[340px] sm:max-w-[380px] md:max-w-[500px] rounded-2xl overflow-hidden shadow-xl border-4 border-[#1c1c28]">
          <img
            src={heroImage}
            alt="Aadarsh Hero"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#7A5AF8]/30 to-[#1c1c28]/40 mix-blend-overlay pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
