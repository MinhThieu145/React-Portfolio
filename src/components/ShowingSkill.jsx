import React from "react";


import { useState } from "react";

const ShowingSkill = () => {
  const [activeTab, setActiveTab] = useState(1);


  return (
    <div
      name="ShowSkill"
      className="bg-slate-900 w-full h-screen snap-center flex-shrink-0"
    >
      <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full">


    <div className="tab-pannes">
    {activeTab === 2 && (
        <div className="max-w-[1400px] w-full px-4">

            <div className="flex flex-col lg:mb-12 mb-3 ">
                <h2 className="lg:text-5xl text-3xl font-bold text-teal-200 my-3">Hey! Check this out</h2>
                <h3 className="lg:text-2xl text-xl font-bold text-slate-200">Here are what I use to explore data</h3>
            </div>

        <div className="w-full gap-6 ">
          {/* This is the window shit */}
          {/* this is for the text */}

            <table className="table table-auto border-separate [border-spacing:0.75rem]">
                    <body>
                    {/* this is for the Skill Section */}
                
                        {/* Now time to make the skill boxes, a rectangle shape wrap around word HTML in green */}

                        {/*Skill 1*/}
                        <tr className="my-3">
                          <td class="w-fit h-full flex flex-col justify-center items-center text-center border-2 border-green-400 rounded-md lg:text-lg md:text-base text-sm text-slate-200 font-bold lg:px-2 md:px-3 px-2">
                            Python Library
                          </td>

                          <td className="text-white px-5 lg:text-lg md:text-base text-sm font-normal">I can use Pandas and Numpy to explore dataq</td>
                        </tr>

                        {/*Skill 2*/}
                        <tr className="my-3">
                          <td class="w-fit h-full flex flex-col justify-center items-center text-center border-2 border-green-400 rounded-md lg:text-lg md:text-base text-sm text-slate-200 font-bold lg:px-2 md:px-3 px-2">
                            Visual Exploration
                          </td>

                          <td className="text-white px-5 lg:text-lg md:text-base text-sm font-normal">Nulla veniam cupidatat in ea dolor et sunt cupidatat elit in deserunt duis occaecat cupidatat.</td>
                        </tr>


                     
                             
                    </body>


                </table>

                



           
                {/* this is for the lotte animation */}

        
            

          </div>
          
          </div>
        

          )}
        </div>

        {/* this is for the tab bar with 3 tabs */}
        <div className="w-full h-full flex flex-col justify-end mb-5 ">
          <div className="flex flex-col justify-center items-center px-8 sm:px-0">
            <div className="">
              <div
                role="tablist"
                ariel-label="Tabs"
                className="relative w-max mx-auto items-center h-20 grid grid-cols-3 px-[3xl] bg-slate-800 rounded-lg shadow-sm shadow-teal-400 transition"
              >
                {/* first button */}
                <button
                  role="tab"
                  aria-selected={activeTab === 1}
                  aria-controls="panel-1"
                  id="tab-1"
                  tabIndex="0"
                  className="relative block  px-6 tab rounded-full "
                  onClick={() => setActiveTab(1)}
                >
                  <span className=" ">Data Preprocessing</span>
                </button>

                {/* second button */}
                <button
                  role="tab"
                  aria-selected={activeTab === 2}
                  aria-controls="panel-2"
                  id="tab-2"
                  tabIndex="-1"
                  className="relative block px-6 tab rounded-full"
                  onClick={() => setActiveTab(2)}
                >
                  <span className="">Data Exploratory</span>
                </button>

                {/* third button */}

                <button
                  role="tab"
                  aria-selected={activeTab === 3}
                  aria-controls="panel-3"
                  id="tab-3"
                  tabIndex="-1"
                  className="relative block px-6 tab rounded-full"
                  onClick={() => setActiveTab(3)}
                >
                  <span className="">Data Visualization</span>
                </button>
              </div>

            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowingSkill;
