import React from 'react'

import {FaLinkedin} from 'react-icons/fa'
import tabkea from '../assets/tableau-software.svg'

import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';


const Contact = () => {

    const [viewWorkHover, setViewWorkHover] = useState(false)
    const handleHover = () => {setViewWorkHover(!viewWorkHover)}

    const handleClickScroll = () => {
        console.log('clicked')
    }

    const contactRef = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_h4kje1q', 'template_nvn4k6a', contactRef.current, 'D_Vey9LBeBNXInjqB')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

            e.target.reset()
      };
    

  return (
    <div className='bg-slate-900  w-full lg:h-screen sm: h-[1000px] snap-start flex-shrink-0'>

    <div className='max-w-[1000px] mx-auto px-4 h-full '>

    {/*Container*/}
        <div className='w-full lg:max-w-[1000px] max-w-[600px] lg:grid lg:grid-cols-2 h-full gap-20'>
            {/*left side*/}

            <form ref={contactRef} onSubmit= {sendEmail} className='flex flex-col  w-full'>
                <div className='mb-10 lg:mb-20'>
                    <p className='lg:text-5xl text-3xl font-bold text-teal-200 mt-5 '>Contact Me</p>
                
                </div>

                <input type='text' placeholder='Name' name='recruiter_name' required='true' className='bg-green-200 p-2 rounded-lg'></input>
                <input type='email' placeholder='Email' name='recruiter_email' required='true' className='my-5 bg-green-200 p-2 rounded-lg'></input>
                <textarea name='Message' rows='10' placeholder='Message' className='bg-green-200 p-2 rounded-lg'></textarea>

                <button type='submit' className='bg-green-400 p-2 rounded-lg mt-5 mb-5'>Let's talk</button>

            </form>

            {/*right side*/}
            <div>
                <div className='mb-10 lg:mb-20'>
                        <p className='lg:text-5xl text-3xl font-bold text-teal-200 mt-5 '>My Social Sites</p>
                    
                </div>

                {/*Linkedin*/}
                <div className=' flex flex-col w-full items-start '>
                
                    <div className='w-full group'>
                    <a href="https://www.linkedin.com/in/thieu-nguyen-433717249/" target="_blank" rel="noreferrer noopener"
                    onMouseEnter={handleHover} onMouseLeave={handleHover} onClick={handleClickScroll} className='lg:max-w-[300px] sm:w-full w-full h-12 text-[22px] flex flex-row text-blue-200 border-2  border-blue-400 rounded-lg px-4 py-7   
                                        justify-start items-center group-hover:bg-blue-400  group-hover:text-white duration-200'>
                
                    <FaLinkedin size={30} className='mr-5 text-blue-200 group-hover:text-white'/>

                    My Linked 
                    <span className=''> </span>
                    </a>

                    </div>

                </div>



                {/*Tableau Profile*/}

                <div className=' mt-5 flex flex-col w-full  items-start '>
                
                <div className='w-full lg:max-w-[300px] group'>
                <a href='https://public.tableau.com/app/profile/thieu.minh.nguyen' target="_blank" rel="noreferrer noopener" 
                 onMouseEnter={handleHover} onMouseLeave={handleHover} onClick={handleClickScroll} className='lg:max-w-[300px] sm:w-full w-full h-12 text-[22px] flex flex-row text-orange-200 border-2  border-amber-200 rounded-lg px-4 py-7   
                                    justify-start items-center group-hover:bg-amber-200  group-hover:text-black duration-200'>
            
                <img src={tabkea} alt='tableau' className='mr-5 h-8 w-8'/>

                My Tableau Profile
                <span className=''> </span>
                </a>

                </div>

            </div>


            </div>

            
            

        </div>

    </div>
    </div>
  )
}

export default Contact