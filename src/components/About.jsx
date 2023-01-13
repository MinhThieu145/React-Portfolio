import React from 'react'

const About = () => {
  return (
    <div name='about' className='bg-slate-900 text-gray-300 w-full h-screen snap-center flex-shrink-0'>
          <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-6'>
                <div className='text-right'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>

            </div>


            <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-6 py-6'>
              <div className=''>
                <p className='sm:text-right text-left text-3xl text-slate-200 flex flex-col'>
                  Cupidatat duis sunt nisi eu enim consequat sunt velit 
                  ullamco aliqua adipisicing non anim.
                </p>
              </div>

              <div>
                <p className='text-left text-slate-200'>
                  loremMollit dolor excepteur velit aliqua dolore incididunt sit ut. Ea in mollit excepteur ad ullamco irure velit. Cillum sunt id exercitation non eiusmod excepteur commodo exercitation do in consequat pariatur. Ullamco sit dolor qui Lorem cupidatat tempor pariatur veniam. Enim aliqua proident quis consectetur cupidatat id qui cupidatat dolore magna.
                </p>
              </div>

            </div>


          </div>

    </div>

  )
}

export default About