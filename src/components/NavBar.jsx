import React from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'

// import react scroll
import {Link} from 'react-scroll'



// import state in React
import {useState} from 'react'

const NavBar = () => {

  return (
    <div className='fixed w-full h-fit flex justify-between items-center px-4 bg-slate-900 text-gray-50'>


      {/*Socials*/}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <li className='w-[160px] h-[60px] flex justify-between bg-slate-300 ml-[-100px] hover:ml-[-10px] duration-100' > 
          <a href='#' className='text-black text-2xl flex justify-between items-center w-full' >
            Github <FaGithub size={30}/>
          
          </a>
        </li>
      </div>

    </div>
  )
}

export default NavBar