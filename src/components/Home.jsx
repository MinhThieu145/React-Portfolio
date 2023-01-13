import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

import {Link} from 'react-scroll'

// import state of react
import {useState} from 'react'
const Home = () => {
    const [viewWorkHover, setViewWorkHover] = useState(false)
    const handleHover = () => {setViewWorkHover(!viewWorkHover)}

    const handleClickScroll = () => {
        console.log('clicked')
        const element = document.getElementById('ShowWork')
        element.scrollIntoView({behavior: 'smooth'})
    }



  
  return (
    <div name='home' className='bg-slate-900 w-full h-screen snap-start flex-shrink-0'>

    {/*Container*/}
    <div className = 'max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full text-yellow-100'>
        <p className='text-2xl text-slate-200'>Hi, I'm</p>
        <h1 className=' text-teal-200 lg:text-7xl text-5xl font-bold'>Eric Nguyen</h1>
        <h2 className='text-green -400 lg:text-5xl text-3xl font-bold ' >I'm an Data Analytics Intern</h2>
        <p className='text-white max-w-[600px] mt-2'>I'm in love of turning raw data into meaningful insights.
         I'm excited to bring my skills and enthusiasm to the table (or the spreadsheet).
          I'm always on the lookout for new and exciting ways to make sense of the often chaotic world of data. 
         <p className='font-bold text-teal-200 text-2xl'>Dont' Go on, let me show you something!</p>
         
         </p>


         <div className='inline-flex'>
            {/*View Work Button*/}
            <div className='mr-3'>
                <button onMouseEnter={handleHover} onMouseLeave={handleHover} onClick={handleClickScroll} className=' text-1xl flex flex-row text-slate-200 border-2 border-green-200 rounded-md py-2 px-4 my-3  
                                    justify-center items-center hover:bg-green-200 hover:text-gray-900 duration-500'>
                View Work 
                <span className= { viewWorkHover ? 'ml-5 mr-0' : 'ml-3 mr-2'}> <HiArrowNarrowRight /> </span>
                </button>

            </div>


            {/*View Resume Button*/}
            <a href="https://drive.google.com/file/d/1WM681tXTYlRaDJ_2EVOQa_KhtpRf9jaY/view?usp=share_link" target="_blank" rel="noreferrer noopener">
                <button className='text-1xl flex flex-row text-slate-200 border-2 border-amber-200 rounded-md py-2 px-4 my-3
                                    justify-center items-center hover:bg-amber-200 hover:text-gray-900 duration-500'>
                View Resume 
                </button>
            </a>

        </div>


        
       

    </div>


    </div>
  )
}

export default Home