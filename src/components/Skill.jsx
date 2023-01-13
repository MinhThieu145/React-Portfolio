import React from 'react'
// import linked, github, google icons
import {FaGithub, FaLinkedin, FaGoogle, FaGooglePlay, FaAws} from 'react-icons/fa'

import {AiOutlineBarChart} from 'react-icons/ai'
import {IoLogoTableau} from  'react-icons/io5'
const Skill = () => {
  return (
    <div name='skill' className='bg-slate-900 h-[1000px] lg:h-screen w-full snap-start flex-shrink-0'>
        {/*general container*/}
        <div className='max-w-[1000px] mx-auto px-4 lg:pt-10 flex flex-col justify-start h-full text-slate-300'>  
            <div className='mb-3'> 
                <h2 className="lg:text-5xl text-3xl font-bold text-teal-200 my-3">Hey! Check this out</h2>
                <h3 className="lg:text-2xl text-xl font-bold text-slate-200">These are the technology I use</h3>
            </div>

            {/*container for all icons*/}
            
            {/*distribute all icon evenly in 4 columns and make background a square white for each icon*/}
            
            <div className='flex flex-col lg:justify-center justify-start h-full'>

            <div className='w-full h-full max-h-[300px] grid lg:grid-cols-3 gap-7 text-white'>
                {/*column 1*/}
                <div className='flex flex-col items-center bg-slate-800 border-slate-700 border-2 rounded-lg p-4 hover:scale-110 duration-300'>
                    <div className=''>
                        <AiOutlineBarChart size={50} className=' text-green-200 '/>


                    </div>

                    <p className='text-2xl font-bold py-2 text-teal-200 pb-3'>Data Analysis</p>
                    <div className='w-full flex flex-row justify-center gap-3'>
                        <p className='p-1  border-2 w-fit border-green-200 rounded-lg'>Pandas</p>
                        <p className='p-1 border-2 w-fit border-green-200 rounded-lg'>Numpy</p>
                        <p className='p-1 border-2 w-fit border-green-200 rounded-lg'>Seaborn</p>

                    </div>

                    <div className='w-full flex flex-row justify-center gap-3 my-3'>
                        <p className='p-1  border-2 w-fit border-green-200 rounded-lg'>Matplotlib</p>
                        <p className='p-1 border-2 w-fit border-green-200 rounded-lg'>Plotly</p>

                    </div>

                    
                </div>


                {/*column 2*/}
                <div className='flex flex-col items-center bg-slate-800 border-slate-700 border-2 rounded-lg p-4 hover:scale-110 duration-300'>
                <div className=''>
                    <IoLogoTableau size={50} className='text-orange-200'/>
                </div>

                <p className='text-2xl font-bold py-2 text-teal-200 pb-3'>Dashboard Building</p>
                <div className='w-full flex flex-row justify-center gap-3'>
                    <p className='p-1  border-2 w-fit border-green-200 rounded-lg'>Tableau</p>

                </div>

                <p className='text-2xl font-bold py-2 text-teal-200 pb-3 mt-3'>Data Scraping</p>
                <div className='w-full flex flex-row justify-center gap-3'>
                    <p className='p-1  border-2 w-fit border-green-200 rounded-lg'>Selenium</p>

                </div>
                
                </div>


                {/*column 3*/}
                <div className='flex flex-col items-center bg-slate-800 border-slate-700 border-2 rounded-lg p-4 hover:scale-110 duration-300'>
                    <div className=''>
                        <FaAws size= {50} className=' text-amber-200'/>
                    </div>

                    <p className='text-2xl font-bold py-2 text-teal-200 pb-3'>Cloud Service</p>
                    <div className='w-full flex flex-row justify-center gap-2'>
                        <p className='p-1 text-center border-2 w-fit border-green-200 rounded-lg'>AWS Lambda</p>
                        <p className='p-1 text-center border-2 w-fit border-green-200 rounded-lg'>AWS RDS</p>
                        <p className='p-1 text-center border-2 w-fit border-green-200 rounded-lg'>AWS S3</p>

                    </div>


                    
                </div>


                </div>
                
            </div>

        </div>
    </div>
  )
}

export default Skill