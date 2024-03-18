import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Link } from "react-router-dom";
import Hero from "./components/Hero";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="relative bg-gradient-to-b from-black to-slate-800 text-slate-400 min-h-screen pb-8 ">
        <Navbar />

        <div
          id="bod"
          className="w-11/12 lg:max-w-[800px] sm:max-w-[550px] mx-auto "
        >
          <Hero />
          <div id="about" className="mt-[18rem]">
            <About />
          </div>
          {/* <div id="experience" className="mt-[18rem]" >
            <Experience />
          </div> */}
          <div id="projects" className="mt-[12rem]">
            <Projects />
          </div>
          <div id="contact" className="mt-[12rem]">
            <Contact />
          </div>
          <div id="footer" className="mt-[12rem]">
            <Footer />
          </div>
        </div>

        <div className=" w-11/12 fixed bottom-0 left-0 right-0 max-w-[1180px] flex justify-between mx-auto">
          <div className=" hidden xl:flex lg:flex gap-4 items-center justify-between flex-col-reverse ">
            <div className="h-24 w-[2px] bg-slate-400 " />
            <Link to="https://www.linkedin.com/in/ribhugautam/" target="_blank">
              <button>
                <FaLinkedin
                  size={18}
                  className="hover:text-cyan-400 hover:translate-y-[-2px] transition-all duration-200 "
                />
              </button>
            </Link>
            <Link to="https://www.instagram.com/ribhugautam/" target="_blank">
              <button>
                <FaInstagram
                  size={18}
                  className="hover:text-cyan-400 hover:translate-y-[-2px] transition-all duration-200 "
                />
              </button>
            </Link>
            <Link to="https://github.com/ribhugautam/" target="_blank">
              <button>
                <FaGithub
                  size={18}
                  className="hover:text-cyan-400 hover:translate-y-[-2px] transition-all duration-200 "
                />
              </button>
            </Link>
          </div>

          <div className=" hidden xl:flex lg:flex gap-8 items-center justify-between flex-col-reverse ">
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
      </div>
    </>
  );
}

export default App;
