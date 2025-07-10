// /* eslint-disable react-hooks/exhaustive-deps */
// import { useState, useEffect } from "react";
// import { Link as ScrollLink, scroller } from "react-scroll";
// import { useLocation, useNavigate } from "react-router-dom";
// import ThemeToggle from "../shared/ThemeToggle";
// import logo from "../../assets/icons/logo.png";

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("hero");
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [scrollTarget, setScrollTarget] = useState(null);

//   const isHomePage = location.pathname === "/";

//   const navItems = [
//     { label: "Home", to: "hero", type: "scroll" },
//     { label: "Skills", to: "skills", type: "scroll" },
//     { label: "Projects", to: "projects", type: "scroll" },
//     { label: "About", to: "about", type: "scroll" },
//     { label: "Contact", to: "contact", type: "scroll" },
//     { label: "Blog", to: "/blog", type: "route" },
//   ];

//   // Set active section based on scroll position
//   useEffect(() => {
//     if (!isHomePage) return;

//     const handleScroll = () => {
//       const sections = navItems
//         .filter((item) => item.type === "scroll")
//         .map((item) => item.to);
//       const scrollPosition = window.scrollY + 150; // Adjust this offset as needed

//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const offsetTop = element.offsetTop;
//           const offsetHeight = element.offsetHeight;

//           if (
//             scrollPosition >= offsetTop &&
//             scrollPosition < offsetTop + offsetHeight
//           ) {
//             setActiveSection(section);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [isHomePage, navItems]);

//   // Effect: Scroll to target after navigating to "/"
//   useEffect(() => {
//     if (scrollTarget && isHomePage) {
//       scroller.scrollTo(scrollTarget, {
//         duration: 500,
//         smooth: true,
//         offset: -140,
//       });
//       setActiveSection(scrollTarget);
//       setScrollTarget(null); // Clear after scroll
//     }
//   }, [location.pathname, scrollTarget, isHomePage]);

//   const handleNavClick = (item) => {
//     setMenuOpen(false);
//     if (item.type === "route") {
//       navigate(item.to);
//     } else {
//       if (!isHomePage) {
//         setScrollTarget(item.to);
//         navigate("/");
//       } else {
//         setActiveSection(item.to);
//       }
//     }
//   };

//   return (
//     <header className="sticky top-0 z-50 bg-[#0B0E17] shadow-md transition-all">
//       <div className="mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
//         {/* Logo */}
//         <div
//           onClick={() => {
//             navigate("/");
//             window.scrollTo({ top: 0, behavior: "smooth" });
//             setActiveSection("hero");
//           }}
//           className="flex items-center gap-2 cursor-pointer"
//         >
//           <img src={logo} alt="Logo" className="w-48 h-16 object-cover" />
//         </div>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex space-x-6 text-lg text-gray-300">
//           {navItems.map((item) => {
//             const isActive =
//               item.type === "scroll"
//                 ? isHomePage && activeSection === item.to
//                 : location.pathname === item.to;

//             const baseClasses =
//               "cursor-pointer hover:text-purple-400 transition";
//             const activeClasses = "text-purple-400 font-semibold";

//             if (item.type === "scroll" && isHomePage) {
//               return (
//                 <ScrollLink
//                   key={item.to}
//                   to={item.to}
//                   smooth
//                   duration={500}
//                   offset={-100}
//                   spy={true}
//                   onSetActive={() => setActiveSection(item.to)}
//                   className={`${baseClasses} ${isActive ? activeClasses : ""}`}
//                 >
//                   {item.label}
//                 </ScrollLink>
//               );
//             } else {
//               return (
//                 <span
//                   key={item.to}
//                   onClick={() => handleNavClick(item)}
//                   className={`${baseClasses} ${isActive ? activeClasses : ""}`}
//                 >
//                   {item.label}
//                 </span>
//               );
//             }
//           })}
//         </nav>

//         {/* Theme Toggle + Mobile Menu */}
//         {/* <div className="flex items-center gap-4">
//           <ThemeToggle />
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="md:hidden text-white"
//             aria-label="Toggle Menu"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               {menuOpen ? (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               ) : (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               )}
//             </svg>
//           </button>
//         </div> */}
//       </div>

//       {/* Mobile Navigation */}
//       {menuOpen && (
//         <div className="md:hidden bg-[#0B0E17] px-6 pb-4 space-y-4 text-gray-300">
//           {navItems.map((item) => {
//             const isActive =
//               item.type === "scroll"
//                 ? isHomePage && activeSection === item.to
//                 : location.pathname === item.to;

//             const baseClasses =
//               "block cursor-pointer hover:text-purple-400 transition";
//             const activeClasses = "text-purple-400 font-semibold";

//             return (
//               <span
//                 key={item.to}
//                 onClick={() => handleNavClick(item)}
//                 className={`${baseClasses} ${isActive ? activeClasses : ""}`}
//               >
//                 {item.label}
//               </span>
//             );
//           })}
//         </div>
//       )}
//     </header>
//   );
// }


/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { Link as ScrollLink, scroller } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/icons/logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [scrollTarget, setScrollTarget] = useState(null);
  const isHomePage = location.pathname === "/";

  const navItems = [
    { label: "Home", to: "hero", type: "scroll" },
    { label: "Skills", to: "skills", type: "scroll" },
    { label: "Projects", to: "projects", type: "scroll" },
    { label: "About", to: "about", type: "scroll" },
    { label: "Contact", to: "contact", type: "scroll" },
    // { label: "Blog", to: "/blog", type: "route" },
  ];

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      const sections = navItems
        .filter((i) => i.type === "scroll")
        .map((i) => i.to);
      const scrollY = window.scrollY + 150;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const offsetTop = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= offsetTop && scrollY < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  useEffect(() => {
    if (scrollTarget && isHomePage) {
      scroller.scrollTo(scrollTarget, {
        duration: 500,
        smooth: true,
        offset: -120,
      });
      setActiveSection(scrollTarget);
      setScrollTarget(null);
    }
  }, [location.pathname, scrollTarget, isHomePage]);

  // const handleNavClick = (item) => {
  //   setMenuOpen(false);
  //   if (item.type === "route") {
  //     navigate(item.to);
  //   } else {
  //     if (!isHomePage) {
  //       setScrollTarget(item.to);
  //       navigate("/");
  //     } else {
  //       setActiveSection(item.to);
  //     }
  //   }
  // };
  // Track scroll position for header shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      if (!isHomePage) return;

      const sections = navItems
        .filter((item) => item.type === "scroll")
        .map((item) => item.to);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage, navItems]);

  useEffect(() => {
    if (scrollTarget && isHomePage) {
      scroller.scrollTo(scrollTarget, {
        duration: 500,
        smooth: true,
        offset: -140,
      });
      setActiveSection(scrollTarget);
      setScrollTarget(null);
    }
  }, [location.pathname, scrollTarget, isHomePage]);

  const handleNavClick = (item) => {
    setMenuOpen(false);
    if (item.type === "route") {
      navigate(item.to);
    } else {
      if (!isHomePage) {
        setScrollTarget(item.to);
        navigate("/");
      } else {
        setActiveSection(item.to);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 bg-[#0B0E17] transition-all duration-300 ${
        scrolled ? "shadow-lg py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() => {
            navigate("/");
            window.scrollTo({ top: 0, behavior: "smooth" });
            setActiveSection("hero");
          }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img src={logo} alt="Logo" className="w-48 h-16 object-cover" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1">
          {navItems.map((item) => {
            const isActive =
              item.type === "scroll"
                ? isHomePage && activeSection === item.to
                : location.pathname === item.to;

            return (
              <div key={item.to} className="relative group">
                {item.type === "scroll" && isHomePage ? (
                  <ScrollLink
                    to={item.to}
                    smooth
                    duration={500}
                    offset={-100}
                    spy={true}
                    onSetActive={() => setActiveSection(item.to)}
                    className={`px-4 py-2 rounded-lg cursor-pointer transition-all duration-300 ${
                      isActive
                        ? "text-purple-400 font-medium"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute bottom-[-4px] left-1/2 h-0.5 bg-purple-500 transition-all duration-300 ${
                        isActive ? "w-4/5 -translate-x-1/2" : "w-0"
                      }`}
                    ></span>
                  </ScrollLink>
                ) : (
                  <div
                    onClick={() => handleNavClick(item)}
                    className={`px-4 py-2 rounded-lg cursor-pointer transition-all duration-300 ${
                      isActive
                        ? "text-purple-400 font-medium"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute bottom-0 left-1/2 h-0.5 bg-purple-500 transition-all duration-300 ${
                        isActive ? "w-4/5 -translate-x-1/2" : "w-0"
                      }`}
                    ></span>
                  </div>
                )}
                <div className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2 rounded-lg hover:bg-[#1a1f30] transition-all"
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-6 relative">
            <span
              className={`absolute left-0 top-1/2 w-full h-0.5 bg-white transform transition duration-300 ${
                menuOpen ? "rotate-45 -translate-y-1/2" : "-translate-y-2"
              }`}
            ></span>
            <span
              className={`absolute left-0 top-1/2 w-full h-0.5 bg-white transition duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`absolute left-0 top-1/2 w-full h-0.5 bg-white transform transition duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-1/2" : "translate-y-2"
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-[#0B0E17] overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 pt-2 pb-4 shadow-inner" : "max-h-0"
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-3">
          {navItems.map((item) => {
            const isActive =
              item.type === "scroll"
                ? isHomePage && activeSection === item.to
                : location.pathname === item.to;

            const classes = `py-3 px-4 rounded-lg cursor-pointer transition-all duration-200 ${
              isActive
                ? "bg-[#1a1f30] text-purple-400 font-medium"
                : "text-gray-300 hover:bg-[#1a1f30] hover:text-white"
            }`;

            if (item.type === "scroll" && isHomePage) {
              return (
                <ScrollLink
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  onClick={() => {
                    setActiveSection(item.to);
                    setMenuOpen(false);
                  }}
                  onSetActive={() => setActiveSection(item.to)}
                  className={classes}
                >
                  {item.label}
                  {isActive && (
                    <span className="block w-6 h-0.5 bg-purple-500 mt-1 rounded-full"></span>
                  )}
                </ScrollLink>
              );
            } else {
              return (
                <div
                  key={item.to}
                  onClick={() => {
                    handleNavClick(item);
                    setMenuOpen(false);
                  }}
                  className={classes}
                >
                  {item.label}
                  {isActive && (
                    <span className="block w-6 h-0.5 bg-purple-500 mt-1 rounded-full"></span>
                  )}
                </div>
              );
            }
          })}
        </div>
      </div>
    </header>
  );
}
