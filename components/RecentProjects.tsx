"use client"
import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/PinContainer'
import bg from '../public/bg.png'

const RecentProjects = () => {
  return (
    <div className='py-4'>
        <h1 className='heading'>
            Recent Projects
        </h1>

        {/* cards of projects */}
        <div className='flex flex-wrap justify-center items-center p-4 gap-16 mt-10'>
            {projects.map((project, index)=>(
                <div key={index} className='lg:min-h-[32.5rem] h-[25rem] flex justify-center items-center sm:w-96 w-[80vw]'>
                    <PinContainer title={project.title} href={project.link}>
                        <div className='relative flex justify-center items-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10'>
                            <div className=' relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                                <img src={bg.src} alt='bg-img'/>
                            </div>
                            <img src={project.img} alt={project.title} className='z-10 absolute bottom-0'/>
                        </div>
                        <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>{project.title}</h1>
                        <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>{project.des}</p>
                        <div className='flex items-center justify-between mt-7 mb-3'>
                            <div className='flex items-center'>
                                {project.iconLists.map((icon, i)=>(
                                    <div key={i} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                                         >
                                        <img src={icon} alt={icon} className='p-2'/>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </PinContainer>
                </div>
            ))}
        </div>
    </div>
  )
}

export default RecentProjects