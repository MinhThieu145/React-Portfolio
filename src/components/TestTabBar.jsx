import React from 'react'

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';

import {FaStackOverflow } from 'react-icons/fa';
import {AiOutlineBarChart} from 'react-icons/ai'
import {IoLogoTableau} from  'react-icons/io5'
import { MdOutlineDataExploration } from "react-icons/md";

import { GiM3GreaseGun } from "react-icons/gi";

import { BiLibrary } from "react-icons/bi";

import { FcReddit } from "react-icons/fc";







const TestTabBar = () => {
  return (

    <div className='ShowWork bg-slate-900 w-full h-full  snap-start overflow-y-auto ' id='ShowWork'>
    <div className='lg:mx-[300px] sm:ml-4'>
        <h1 className='lg:text-5xl text-3xl font-bold text-teal-200 my-3 '>My Old Lovers! </h1>
        <h2 className='lg:text-2xl text-xl font-bold text-slate-200'>I pour my heart and soul into these!</h2>
    </div>



    <VerticalTimeline
        animate={true}
        layout={'1-column-left'}
    >
        


        {/* 1st project */}
        <VerticalTimelineElement
            className="vertical-timeline-element--work "
            contentStyle={{ background: 'rgb(15,23,42)', color: '#fff' , border: '4px solid  rgb(45,212,191)'}}
            contentArrowStyle={{ borderRight: '0px solid  rgb(33, 150, 243)' }}
            date="Nov 2022 - Dec 2022"
            dateClassName='max-w-[160px]  border-2 text-white  rounded-full mt-5 w-full text-center '
            iconStyle={{ background: 'rgb(251,146,60)', color: '#fff' }}
            icon={<FaStackOverflow />}
        >   
            <h3 className="vertical-timeline-element-title font-bold text-3xl text-green-400">Stack Overflow Developer Survey Analysis 2022</h3>    
            
            {/*make text on the same line with the title h2*/}
            <div className=' mt-2 mb-4 py-1 font-bold text-[15px] text-gray-900 bg-slate-100 w-fit px-2 rounded-full'>Skills: Data Preprocessing, EDA and Visulization</div>
            <div className='my-3 font-serif mb-5'>
                <p >In this data analysis project, I will go over the Stack Overflow Developer Survey 2022 to gain a deeper understanding of the current state of the technology industry. With Python libraries, I will explore trends in areas such as programming languages, education background, and learning platforms among software developers. </p>
                <p >In addition, I will be using Tableau to create a dashboard to visually display our findings. Through this analysis, I hope to identify patterns and correlations within the data, and gain some interesting insight</p>
            </div>
        
            <div className=' mt-3 lg:flex lg:flex-row sm:grid sm:grid-row-3  '>


                <a href="https://www.kaggle.com/code/th1402/data-preprocessing-analysis-for-so-dev-survey-2022" target="_blank" rel="noreferrer noopener"
                 className= 'border-green-400 mx-1 border-2 flex flex-row text-white rounded-full text-sm w-fit items-center  justify-center h-fit p-2 bg-slate-900 hover:bg-green-400 hover:text-black '>
                    <MdOutlineDataExploration className='text-2xl'/>
        
                    <div className='mx-2 text-[17px]'>Data Preprocessing</div>
                </a>

                <a href="https://public.tableau.com/app/profile/thieu.minh.nguyen/viz/StackOverflowDashboard/StackOverflowDashboard" target="_blank" rel="noreferrer noopener"
                className= 'my-3 lg:my-0 border-green-400 mx-1 border-2 flex flex-row text-white rounded-full text-sm w-fit items-center  justify-center h-fit p-2 bg-slate-900 hover:bg-green-400 hover:text-black '>
                    <IoLogoTableau className='text-2xl'/>
        
                    <div className='mx-2 text-[17px]'>Tableau Dashboard</div>
                 </a>

                 <a href="https://www.kaggle.com/code/th1402/data-exploratory-for-so-survey-2022" target="_blank" rel="noreferrer noopener"
                 className=' border-green-400 mx-1 border-2 flex flex-row text-white rounded-full text-sm w-fit items-center  justify-center h-fit p-2 bg-slate-900 hover:bg-green-400 hover:text-black '>
                    <AiOutlineBarChart className='text-2xl'/>
        
                    <div className='mx-2 text-[17px]'>Data Analysis</div>
                 </a>

            </div>
            
        </VerticalTimelineElement>

        {/* 2nd project */}
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(15,23,42)', color: '#fff' , border: '4px solid  rgb(45,212,191)'}}
            contentArrowStyle={{ borderRight: '0px solid  rgb(33, 150, 243)' }}
            date="Sep 2022 - Nov 2022"
            dateClassName='max-w-[160px]  border-2 text-white  rounded-full mt-5 w-full text-center '
            iconStyle={{ background: '#000', color: '#fff' }}
            icon={<GiM3GreaseGun />}
        >   
            <h3 className="vertical-timeline-element-title font-bold text-3xl text-green-400">Mass Shooting in USA</h3>    
            
            {/*make text on the same line with the title h2*/}
            <div className=' mt-2 mb-4 py-1 font-bold text-[15px] text-gray-900 bg-slate-100 w-fit px-2 rounded-full'>Skills: Data Preprocessing, EDA and Visulization</div>

            <div className='mb-5'>
                <p className=' font-serif'>Using the Mass Shooting in USA dataset from Mother Jones, I will be analyzing trends and patterns in mass shootings from 1982 to 2021. I'll be looking at factors such as the frequency of these incidents, characteristics of the shooters, and locations.</p>
                <p className='font-serif'>I will be covering every step of the process including data cleaning, exploratory data analysis (EDA) and visualization. The final visualizations will be created using Tableau, providing a detailed and in-depth look at the patterns and trends of mass shootings in the US.</p>
            </div>
        
            <div className=' mt-3 lg:flex lg:flex-row sm:grid sm:grid-rows-3 '>

                <a href="https://www.kaggle.com/code/th1402/data-preprocessing-for-mass-shooting-dataset" target="_blank" rel="noreferrer noopener"
                className= 'border-green-400 mx-1 border-2 flex flex-row text-white rounded-full text-sm w-fit items-center  justify-center h-fit p-2 bg-slate-900 hover:bg-green-400 hover:text-black '>
                    <MdOutlineDataExploration className='text-2xl'/>
        
                    <div className='mx-2 text-[17px]'>Data Preprocessing</div>
                </a>

                <a href="https://public.tableau.com/app/profile/thieu.minh.nguyen/viz/MassShootingDashboard2/SchoolShootingDashboard" target="_blank" rel="noreferrer noopener"
                 className= 'my-3 lg:my-0 border-green-400 mx-1 border-2 flex flex-row text-white rounded-full text-sm w-fit items-center  justify-center h-fit p-2 bg-slate-900 hover:bg-green-400 hover:text-black '>
                    <IoLogoTableau className='text-2xl'/>
        
                    <div className='mx-2 text-[17px]'>Tableau Dashboard</div>
                 </a>

                 <a href="https://www.kaggle.com/code/th1402/data-exploratory-for-mass-shooting-dataset" target="_blank" rel="noreferrer noopener"
                 className=' border-green-400 mx-1 border-2 flex flex-row text-white rounded-full text-sm w-fit items-center  justify-center h-fit p-2 bg-slate-900 hover:bg-green-400 hover:text-black '>
                    <AiOutlineBarChart className='text-2xl'/>
        
                    <div className='mx-2 text-[17px]'>Data Analysis</div>
                 </a>

            </div>
            
        </VerticalTimelineElement>


        {/* 3rd project */}
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(15,23,42)', color: '#fff' , border: '4px solid  rgb(45,212,191)'}}
            contentArrowStyle={{ borderRight: '0px solid  rgb(33, 150, 243)' }}
            date="Oct 2022 - Nov 2022"
            dateClassName='max-w-[160px]  border-2 text-white  rounded-full mt-5 w-full text-center '
            iconStyle={{ background: 'rgb(45,212,191)', color: '#fff' }}
            icon={<BiLibrary />}
        >   
            <h3 className="vertical-timeline-element-title font-bold text-3xl text-green-400">USF Library</h3>    
            
            {/*make text on the same line with the title h2*/}
            <div className=' mt-2 mb-4 py-1 font-bold text-[15px] text-gray-900 bg-slate-100 w-fit px-2 rounded-full'>Skills: Data Preprocessing and EDA</div>

            <div className='mb-5'>
                <p className=' font-serif'>This data analytics project delves into the inner workings of the room reservation system at the USF library. I have collected data from the USF library website with Selenium and analyzed it to uncover key insights and patterns in the reservation trends. </p>
                <p className='font-serif'>The goal is to understand how the system works and how it can be improved, using data visualization and machine learning models.</p>
            </div>
        
            <div className=' mt-3 lg:flex lg:flex-row sm:grid sm:grid-rows-3 '>

                 <a href="https://github.com/MinhThieu145/USF_Library" target="_blank" rel="noreferrer noopener"
                 className=' border-green-400 mx-1 border-2 flex flex-row text-white rounded-full text-sm w-fit items-center  justify-center h-fit p-2 bg-slate-900 hover:bg-green-400 hover:text-black '>
                    <AiOutlineBarChart className='text-2xl'/>
        
                    <div className='mx-2 text-[17px]'>Data Analysis</div>
                 </a>

            </div>

        {/* 4th project */}
            
        </VerticalTimelineElement>

                   <VerticalTimelineElement
               className="vertical-timeline-element--work"
               contentStyle={{ background: 'rgb(15,23,42)', color: '#fff' , border: '4px solid  rgb(45,212,191)'}}
               contentArrowStyle={{ borderRight: '0px solid  rgb(33, 150, 243)' }}
               date="Oct 2022 - Nov 2022"
               dateClassName='max-w-[160px]  border-2 text-white  rounded-full mt-5 w-full text-center '
               iconStyle={{ background: 'rgb(249,115,22)', color: '#fff' }}
               icon={<FcReddit />}
           >   
               <h3 className="vertical-timeline-element-title font-bold text-3xl text-green-400">Reddit Community</h3>    
               
               {/*make text on the same line with the title h2*/}
               <div className=' mt-2 mb-4 py-1 font-bold text-[15px] text-gray-900 bg-slate-100 w-fit px-2 rounded-full'>Skills: Data Scraping, Data Preprocessing and EDA</div>
   
               <div className='mb-5'>
                   <p className=' font-serif'>I will conduct a data analytics project by scraping data from 3000 posts on the Data Science community on Reddit using the Reddit API. I will clean, preprocess and analyze the data to uncover key insights and patterns within the community.</p>
                   <p className='font-serif'>Data visualization and statistical analysis was used to understand the characteristics and trends of the community. The goal is to gain a deeper understanding of the Data Science community on Reddit, which will provide valuable insights for anyone interested in the field.</p>
               </div>
           
               <div className=' mt-3 lg:flex lg:flex-row sm:grid sm:grid-rows-3 '>
   
                    <a href="https://github.com/MinhThieu145/Reddit-DS-Project" target="_blank" rel="noreferrer noopener"
                    className=' border-green-400 mx-1 border-2 flex flex-row text-white rounded-full text-sm w-fit items-center  justify-center h-fit p-2 bg-slate-900 hover:bg-green-400 hover:text-black '>
                       <AiOutlineBarChart className='text-2xl'/>
           
                       <div className='mx-2 text-[17px]'>Data Analysis</div>
                    </a>
   
               </div>
               
           </VerticalTimelineElement>


    </VerticalTimeline>

  
    </div>
  )
}

export default TestTabBar