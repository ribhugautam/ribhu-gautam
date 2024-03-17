import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <div className='flex flex-col justify-center gap-4 items-center mt-24' >
        <div className=" flex gap-4 items-center justify-between">
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
        <span className='text-xs text-center ' >Design Inspired by Brittany Chiang </span>
        <span className='text-xs text-center ' >Build by Ribhu Gautam </span>
        </div>
    </div>
  )
}

export default Footer