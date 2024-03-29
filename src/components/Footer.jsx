import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <div className='flex flex-col justify-center gap-4 items-center mt-24' >
        <div className=" flex lg:hidden xl:hidden gap-4 items-center justify-between">
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
        <div className='flex flex-col gap-1' >
        <span className='text-cyan-400 text-center font-handjet text-[14px] font-bold '>Build by Ribhu Gautam</span>
        <span className='text-cyan-400 text-center font-handjet text-[14px] font-bold ' >Design Inspired by Brittany Chiang</span>
        </div>
    </div>
  )
}

export default Footer