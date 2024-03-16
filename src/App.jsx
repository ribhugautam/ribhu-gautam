import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Routes, Route, Link } from "react-router-dom";
import Hero from "./components/Hero";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function App() {
  return (
    <>
      <div className="relative bg-gradient-to-b from-black to-slate-800 text-slate-400 min-h-screen pb-8 ">
        <Navbar />

        <div id="bod" className="w-11/12 lg:max-w-[800px] sm:max-w-[550px] mx-auto ">
          <Hero />
          <div id="about" className="mt-[18rem]" >
            <About />
          </div>
          <div id="experience" className="mt-[18rem]" >
            <Experience />
          </div>
          <div id="projects" className="mt-[18rem]" >
            <Projects />
          </div>
          <div id="contact" className="mt-[18rem]" >
            <Contact />
          </div>
        </div>

        <div className="fixedbottom-0 left-24 hidden xl:flex lg:flex gap-8 items-center justify-between flex-col-reverse ">
          <div className="h-24 w-[2px] bg-slate-400 " />
          <Link to="https://www.linkedin.com/in/ribhugautam/" target="_blank" >
          <button>
            <FaLinkedin size={18} className="hover:text-cyan-400 hover:translate-y-[-2px] transition-all duration-200 " />
          </button>
          </Link>
          <Link to="https://www.instagram.com/ribhugautam/" target="_blank" >
          <button>
            <FaInstagram size={18} className="hover:text-cyan-400 hover:translate-y-[-2px] transition-all duration-200 " />
          </button>
          </Link>
          <Link to="https://github.com/ribhugautam/" target="_blank" >
          <button>
            <FaGithub size={18} className="hover:text-cyan-400 hover:translate-y-[-2px] transition-all duration-200 " />
          </button>
          </Link>
        </div>

        <div className="fixed bottom-0 right-24 hidden xl:flex lg:flex gap-8 items-center justify-between flex-col-reverse ">
          <div className="h-24 w-[2px] bg-slate-400 " />
          <Link
            hrefLang="en"
            to="mailto:gautamribhu@gmail"
            className="rotate-90 font-bold font-handjet w-0 mb-28 hover:text-cyan-400 hover:translate-y-[-2px] transition-all duration-200 "
          >
            gautamribhu@gmail.com
          </Link>
        </div>
      </div>
    </>
  );
}

export default App;
